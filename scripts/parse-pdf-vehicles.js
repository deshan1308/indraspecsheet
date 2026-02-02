// Script to parse PDF vehicle data and update vehicle mappings
// This script expects the PDF to be converted to text or JSON first
// For PDF parsing, you may need to use: pdf-parse, pdfjs-dist, or similar

const fs = require('fs');
const path = require('path');

// Path to the PDF file (we'll need to extract text from it first)
const pdfPath = path.join(__dirname, '..', 'Copy of ALL_VEHICLES_WITH_GRADES.pdf');

// Output paths
const mappingsPath = path.join(__dirname, '..', 'lib', 'vehicle-mappings.ts');
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');

console.log('📄 PDF Vehicle Data Parser');
console.log('==========================\n');

// Since we can't directly parse PDFs, we'll create a structure for manual data entry
// or use a PDF parsing library if available

// Check if pdf-parse is available
let pdfParse;
try {
  pdfParse = require('pdf-parse');
} catch (e) {
  console.log('⚠️  pdf-parse not installed. Installing...');
  console.log('   Run: npm install pdf-parse');
  console.log('\n📝 Alternative: Convert PDF to text/JSON manually and update the script\n');
}

// Function to extract text from PDF
async function extractPDFText(pdfPath) {
  if (!pdfParse) {
    throw new Error('pdf-parse not available');
  }
  
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

// Function to parse vehicle data from text
function parseVehicleData(text) {
  const vehicles = [];
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  // Pattern to match: Brand Model Grade Body Type Fuel Type Passenger Capacity Year
  // Example: Toyota Pixis G Hatchback Gasoline 4 2025
  
  let currentVehicle = null;
  
  for (const line of lines) {
    // Try to match vehicle pattern
    const vehicleMatch = line.match(/^([A-Za-z\s]+)\s+([A-Za-z\s\-]+)\s+([A-Za-z\s\-"']+)\s+([A-Za-z\s\-]+)\s+([A-Za-z\s\(\)]+)\s+(\d+)\s+(\d{4})/);
    
    if (vehicleMatch) {
      const [, brand, model, grade, bodyType, fuelType, passengerCapacity, year] = vehicleMatch;
      
      vehicles.push({
        brand: brand.trim(),
        model: model.trim(),
        grade: grade.trim(),
        bodyType: bodyType.trim(),
        fuelType: fuelType.trim(),
        passengerCapacity: parseInt(passengerCapacity, 10),
        year: parseInt(year, 10)
      });
    }
  }
  
  return vehicles;
}

// Function to generate vehicle mappings
function generateVehicleMappings(vehicles) {
  const mappings = {};
  
  vehicles.forEach(vehicle => {
    const key = `${vehicle.brand}|${vehicle.model}|${vehicle.grade}`;
    mappings[key] = {
      bodyType: vehicle.bodyType,
      fuelType: vehicle.fuelType,
      passengerCapacity: vehicle.passengerCapacity,
      year: vehicle.year
    };
  });
  
  return mappings;
}

// Function to update vehicle-mappings.ts
function updateVehicleMappings(newMappings) {
  const mappingsContent = fs.readFileSync(mappingsPath, 'utf8');
  
  // Find the vehicleMappings object
  const mappingsStart = mappingsContent.indexOf('export const vehicleMappings: Record<string, VehicleMapping> = {');
  const mappingsEnd = mappingsContent.indexOf('};', mappingsStart);
  
  if (mappingsStart === -1 || mappingsEnd === -1) {
    console.error('❌ Could not find vehicleMappings object');
    return false;
  }
  
  // Generate new mappings string
  let newMappingsStr = '';
  for (const [key, value] of Object.entries(newMappings)) {
    const bodyType = value.bodyType.replace(/"/g, '\\"');
    const fuelType = value.fuelType.replace(/"/g, '\\"');
    newMappingsStr += `  "${key}": { bodyType: "${bodyType}", fuelType: "${fuelType}", passengerCapacity: ${value.passengerCapacity}, year: ${value.year} },\n`;
  }
  
  const before = mappingsContent.substring(0, mappingsEnd);
  const after = mappingsContent.substring(mappingsEnd);
  
  // Insert new mappings before the closing brace
  const updated = before + '\n' + newMappingsStr + after;
  
  fs.writeFileSync(mappingsPath, updated);
  return true;
}

// Main execution
async function main() {
  try {
    if (!fs.existsSync(pdfPath)) {
      console.error(`❌ PDF file not found: ${pdfPath}`);
      return;
    }
    
    console.log('📖 Extracting text from PDF...');
    const text = await extractPDFText(pdfPath);
    
    console.log('🔍 Parsing vehicle data...');
    const vehicles = parseVehicleData(text);
    
    console.log(`✅ Found ${vehicles.length} vehicles`);
    
    if (vehicles.length === 0) {
      console.log('\n⚠️  No vehicles found. The PDF format may be different.');
      console.log('📝 Please check the PDF structure and update the parsing logic.\n');
      return;
    }
    
    console.log('\n📋 Sample vehicles:');
    vehicles.slice(0, 5).forEach(v => {
      console.log(`   ${v.brand} ${v.model} ${v.grade} - ${v.bodyType}, ${v.fuelType}, ${v.passengerCapacity} seats, ${v.year}`);
    });
    
    console.log('\n🔄 Generating vehicle mappings...');
    const mappings = generateVehicleMappings(vehicles);
    
    console.log('💾 Updating vehicle-mappings.ts...');
    if (updateVehicleMappings(mappings)) {
      console.log('✅ Successfully updated vehicle mappings!');
    } else {
      console.log('❌ Failed to update vehicle mappings');
    }
    
  } catch (error) {
    if (error.message.includes('pdf-parse')) {
      console.log('\n📝 To use PDF parsing, install pdf-parse:');
      console.log('   npm install pdf-parse\n');
      console.log('📝 Or manually extract the data from the PDF and create a JSON file.\n');
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { extractPDFText, parseVehicleData, generateVehicleMappings };
