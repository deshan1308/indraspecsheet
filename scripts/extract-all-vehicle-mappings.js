// Script to extract all vehicle mappings from JSON files and update vehicle-mappings.ts
const fs = require('fs');
const path = require('path');

const jsonDir = path.join(__dirname, '..');
const mappingsPath = path.join(__dirname, '..', 'lib', 'vehicle-mappings.ts');

console.log('🚗 Extracting Vehicle Mappings from JSON Files');
console.log('===============================================\n');

// Read all sheet-*.json files
const jsonFiles = fs.readdirSync(jsonDir)
  .filter(f => f.startsWith('sheet-') && f.endsWith('.json'))
  .sort();

console.log(`Found ${jsonFiles.length} JSON files\n`);

const allMappings = {};
let totalVehicles = 0;

// Function to normalize make/model/grade names
function normalizeName(name) {
  return name
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'");
}

// Function to extract body type from specifications or use default
function extractBodyTypeFromData(data, make, model) {
  // Check if it's in the data structure
  const makeLower = make.toLowerCase();
  const modelLower = model.toLowerCase();
  
  // Known mappings based on model names
  if (modelLower.includes('hilux') || modelLower.includes('raptor') || modelLower.includes('ranger')) {
    return 'Double Cab';
  }
  if (modelLower.includes('bus') || modelLower.includes('foton') && modelLower.includes('37')) {
    return 'Bus';
  }
  if (modelLower.includes('truck') || modelLower.includes('miler') || modelLower.includes('aumark')) {
    return 'Truck';
  }
  if (modelLower.includes('van') || modelLower.includes('every') || modelLower.includes('scrum')) {
    return 'Van';
  }
  if (modelLower.includes('suv') || modelLower.includes('vezel') || modelLower.includes('rav') || 
      modelLower.includes('yaris cross') || modelLower.includes('corolla cross') || 
      modelLower.includes('raize') || modelLower.includes('outlander') || 
      modelLower.includes('x-trail') || modelLower.includes('sonet') || 
      modelLower.includes('hustler') || modelLower.includes('xbee') || 
      modelLower.includes('jimny') || modelLower.includes('taft') || 
      modelLower.includes('rocky') || modelLower.includes('wr-v') || 
      modelLower.includes('land cruiser') || modelLower.includes('lc 300') || 
      modelLower.includes('lc 250') || modelLower.includes('taisor') || 
      modelLower.includes('urban cruiser')) {
    return 'SUV';
  }
  
  // Default to Car for sedans, hatchbacks, etc.
  return 'Car';
}

// Function to extract fuel type from specifications
function extractFuelTypeFromData(data, make, model, grade) {
  const allText = JSON.stringify(data).toLowerCase();
  
  if (allText.includes('hybrid') || allText.includes('hev') || allText.includes('phev')) {
    if (allText.includes('phev') || allText.includes('plug-in')) {
      return 'PHEV';
    }
    return 'Hybrid';
  }
  if (allText.includes('diesel')) {
    return 'Diesel';
  }
  if (allText.includes('electric') || allText.includes('ev ')) {
    return 'Electric';
  }
  if (allText.includes('gasoline') || allText.includes('petrol')) {
    if (allText.includes('turbo')) {
      return 'Gasoline (Turbo)';
    }
    return 'Gasoline';
  }
  
  return 'Gasoline'; // Default
}

// Function to extract passenger capacity
function extractPassengerCapacity(data) {
  const allText = JSON.stringify(data).toLowerCase();
  
  // Look for patterns like "4 people", "5 seats", "7 seater", etc.
  const patterns = [
    /(\d+)\s*(people|person|seats|seat|seater)/i,
    /passenger\s*capacity[:\s]*(\d+)/i,
    /seating\s*capacity[:\s]*(\d+)/i,
  ];
  
  for (const pattern of patterns) {
    const match = allText.match(pattern);
    if (match) {
      return parseInt(match[1], 10);
    }
  }
  
  // Default based on vehicle type
  return 5;
}

// Function to extract year (default to 2025)
function extractYear(data) {
  const allText = JSON.stringify(data);
  const yearMatch = allText.match(/\b(202[0-9]|203[0-9])\b/);
  return yearMatch ? parseInt(yearMatch[1], 10) : 2025;
}

// Process each JSON file
jsonFiles.forEach((file, index) => {
  const filePath = path.join(jsonDir, file);
  console.log(`[${index + 1}/${jsonFiles.length}] Processing ${file}...`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Extract make and model from filename
    // Format: sheet-X-MAKE_MODEL.json
    const filenameParts = file.replace('sheet-', '').replace('.json', '').split('-');
    let make = '';
    let model = '';
    
    // Try to extract from filename
    if (filenameParts.length >= 2) {
      // Common makes
      const makePatterns = ['TOYOTA', 'SUZUKI', 'HONDA', 'NISSAN', 'MAZDA', 'MITSUBISHI', 'FORD', 'KIA', 'FOTON', 'DAIHATSU'];
      for (const pattern of makePatterns) {
        if (file.toUpperCase().includes(pattern)) {
          make = pattern.charAt(0) + pattern.slice(1).toLowerCase();
          break;
        }
      }
      
      // Extract model name (everything after make)
      const makeIndex = file.toUpperCase().indexOf(make.toUpperCase());
      if (makeIndex !== -1) {
        const afterMake = file.substring(makeIndex + make.length).replace('sheet-', '').replace('.json', '').trim();
        model = afterMake.split('_').join(' ').trim();
      }
    }
    
    // If data is a 2D array (like sheet-1 format)
    if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
      // First row usually contains grade names
      const gradeRow = data[0] || [];
      const gradeNames = gradeRow.filter(cell => cell && cell.trim().length > 0);
      
      gradeNames.forEach(gradeName => {
        if (!gradeName || gradeName.trim().length === 0) return;
        
        // Extract make, model, grade from grade name
        // Format: "Toyota - Pixis - G "SA III""
        const parts = gradeName.split(' - ').map(p => p.trim());
        
        if (parts.length >= 3) {
          const extractedMake = parts[0];
          const extractedModel = parts[1];
          const extractedGrade = parts.slice(2).join(' - ');
          
          if (make === '') make = extractedMake;
          if (model === '') model = extractedModel;
          
          const normalizedMake = normalizeName(extractedMake);
          const normalizedModel = normalizeName(extractedModel);
          const normalizedGrade = normalizeName(extractedGrade);
          
          const key = `${normalizedMake}|${normalizedModel}|${normalizedGrade}`;
          
          // Extract attributes
          const bodyType = extractBodyTypeFromData(data, normalizedMake, normalizedModel);
          const fuelType = extractFuelTypeFromData(data, normalizedMake, normalizedModel, normalizedGrade);
          const passengerCapacity = extractPassengerCapacity(data);
          const year = extractYear(data);
          
          allMappings[key] = {
            bodyType,
            fuelType,
            passengerCapacity,
            year
          };
          
          totalVehicles++;
        }
      });
    } else if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
      // If data is an array of objects (like parsed-vehicle-data.json format)
      data.forEach(makeData => {
        const extractedMake = makeData.name || makeData.make || make;
        const models = makeData.models || [];
        
        models.forEach(modelData => {
          const extractedModel = modelData.name || model;
          const grades = modelData.grades || [];
          
          grades.forEach(gradeData => {
            const extractedGrade = gradeData.name || '';
            
            if (extractedGrade) {
              const normalizedMake = normalizeName(extractedMake);
              const normalizedModel = normalizeName(extractedModel);
              const normalizedGrade = normalizeName(extractedGrade);
              
              const key = `${normalizedMake}|${normalizedModel}|${normalizedGrade}`;
              
              // Extract attributes from grade specifications
              const bodyType = extractBodyTypeFromData(gradeData, normalizedMake, normalizedModel);
              const fuelType = extractFuelTypeFromData(gradeData, normalizedMake, normalizedModel, normalizedGrade);
              const passengerCapacity = extractPassengerCapacity(gradeData);
              const year = extractYear(gradeData);
              
              allMappings[key] = {
                bodyType,
                fuelType,
                passengerCapacity,
                year
              };
              
              totalVehicles++;
            }
          });
        });
      });
    }
    
  } catch (error) {
    console.error(`  ⚠️  Error processing ${file}: ${error.message}`);
  }
});

console.log(`\n✅ Extracted ${totalVehicles} vehicle mappings\n`);

// Now update vehicle-mappings.ts
console.log('📝 Updating vehicle-mappings.ts...');

try {
  const mappingsContent = fs.readFileSync(mappingsPath, 'utf8');
  
  // Find the vehicleMappings object
  const mappingsStart = mappingsContent.indexOf('export const vehicleMappings: Record<string, VehicleMapping> = {');
  const mappingsEnd = mappingsContent.indexOf('};', mappingsStart);
  
  if (mappingsStart === -1 || mappingsEnd === -1) {
    console.error('❌ Could not find vehicleMappings object');
    process.exit(1);
  }
  
  // Generate new mappings string
  let newMappingsStr = '';
  const sortedKeys = Object.keys(allMappings).sort();
  
  sortedKeys.forEach(key => {
    const value = allMappings[key];
    const bodyType = value.bodyType.replace(/"/g, '\\"');
    const fuelType = value.fuelType.replace(/"/g, '\\"');
    newMappingsStr += `  "${key}": { bodyType: "${bodyType}", fuelType: "${fuelType}", passengerCapacity: ${value.passengerCapacity}, year: ${value.year} },\n`;
  });
  
  const before = mappingsContent.substring(0, mappingsEnd);
  const after = mappingsContent.substring(mappingsEnd);
  
  // Insert new mappings before the closing brace
  const updated = before + '\n  // Auto-generated mappings from JSON files\n' + newMappingsStr + after;
  
  fs.writeFileSync(mappingsPath, updated);
  
  console.log(`✅ Successfully updated vehicle-mappings.ts with ${sortedKeys.length} mappings!`);
  console.log('\n📊 Summary:');
  console.log(`   Total vehicles mapped: ${sortedKeys.length}`);
  
  // Count by body type
  const bodyTypeCounts = {};
  Object.values(allMappings).forEach(m => {
    bodyTypeCounts[m.bodyType] = (bodyTypeCounts[m.bodyType] || 0) + 1;
  });
  
  console.log('\n   Body Types:');
  Object.entries(bodyTypeCounts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    console.log(`     ${type}: ${count}`);
  });
  
} catch (error) {
  console.error('❌ Error updating mappings file:', error.message);
  process.exit(1);
}
