// Script to update vehicle-mappings.ts from parsed-vehicle-data.json
// Uses the comprehensive vehicle classification table provided by the user

const fs = require('fs');
const path = require('path');

const parsedDataPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
const mappingsPath = path.join(__dirname, '..', 'lib', 'vehicle-mappings.ts');

console.log('🚗 Updating Vehicle Mappings from Parsed Data');
console.log('=============================================\n');

// Comprehensive vehicle classification table (from user's provided data)
const vehicleClassification = {
  // Toyota Pixis
  "Toyota|Pixis|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|L": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|B": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  
  // Toyota Aqua
  "Toyota|Aqua|Special Edition Z Raffine": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|Z": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|G": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|GR Sport": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Yaris
  "Toyota|Yaris|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Toyota Roomy
  "Toyota|Roomy|Custom GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|Custom G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|X": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Axio
  "Toyota|Corolla Axio|EX": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla
  "Toyota|Corolla|WXB": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|G": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|X": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Toyota Prius
  "Toyota|Prius|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Prius|U": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Raize
  "Toyota|Raize|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Yaris Cross
  "Toyota|Yaris Cross|GR Sport": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Z Adventure": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Premium Luxury": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Cross
  "Toyota|Corolla Cross|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|S": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|G": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|G\"X\"": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota RAV4
  "Toyota|RAV 4|Z": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|G": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|Adventure": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|G \"Z package\"": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|X": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  
  // Toyota Sienta
  "Toyota|Sienta|Z": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|G": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|X": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Touring
  "Toyota|Corolla Touring|W X B": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|G": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|X": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Fielder
  "Toyota|Corolla Fielder|EX Hybrid": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 2WD CVT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 2WD 5MT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 4WD CVT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Urban Cruiser Taisor
  "Toyota|Urban Cruiser|Taisor   V Grade": { bodyType: "Compact SUV", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  
  // Toyota Land Cruiser 300
  "Toyota|Land Cruiser 300|GR Sport": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|ZX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|VX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|AX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|GX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  
  // Toyota Yaris Ativ
  "Toyota|Yaris Ativ|Premium Luxury": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Sport": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Nightshade": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Suzuki Alto
  "Suzuki|Alto|X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|S": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|L": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|A": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  
  // Suzuki Spacia
  "Suzuki|Spacia|X": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia|G": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID XS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID GS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID XS TURBO": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  
  // Suzuki Hustler
  "Suzuki|Hustler|X": { bodyType: "SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|G": { bodyType: "SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Suzuki Wagon R
  "Suzuki|Wagon R|FX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|FX-S": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|ZX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|ZT": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|T": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  
  // Suzuki Swift
  "Suzuki|Swift|MZ": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Swift|MX": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Swift|XG": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Suzuki Jimny
  "Suzuki|Jimny|XC": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XL": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XG": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Suzuki XBEE (Crosby)
  "Suzuki|XBEE|HYBRID MZ": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MV": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MX": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Honda Fit
  "Honda|Fit|Basic": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Home": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|RS": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Luxe": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Crosstar": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Honda Vezel
  "Honda|Vezel|X HuNT Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|Z・PLaY Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|X": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Honda ZR-V
  "Honda|ZR-V|e HEV X Special Edition": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|ZR-V|e HEV Z Special Edition": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Nissan X-Trail
  "Nissan|X-Trail|S": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|X": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|G": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
};

// Function to normalize grade name
function normalizeGradeName(gradeName) {
  return gradeName
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'");
}

// Function to extract make, model, grade from grade name
// Format: "Toyota - Pixis - G "SA III""
function parseGradeName(gradeName) {
  const parts = gradeName.split(' - ').map(p => p.trim());
  if (parts.length >= 3) {
    return {
      make: parts[0],
      model: parts[1],
      grade: parts.slice(2).join(' - ')
    };
  }
  return null;
}

// Function to find matching classification
function findClassification(make, model, grade) {
  // Try exact match
  const exactKey = `${make}|${model}|${grade}`;
  if (vehicleClassification[exactKey]) {
    return vehicleClassification[exactKey];
  }
  
  // Try normalized grade
  const normalizedGrade = normalizeGradeName(grade);
  const normalizedKey = `${make}|${model}|${normalizedGrade}`;
  if (vehicleClassification[normalizedKey]) {
    return vehicleClassification[normalizedKey];
  }
  
  // Try case-insensitive match
  for (const [key, value] of Object.entries(vehicleClassification)) {
    const [keyMake, keyModel, keyGrade] = key.split('|');
    if (
      keyMake.toLowerCase() === make.toLowerCase() &&
      keyModel.toLowerCase() === model.toLowerCase() &&
      keyGrade.toLowerCase() === grade.toLowerCase()
    ) {
      return value;
    }
  }
  
  // Try partial match
  for (const [key, value] of Object.entries(vehicleClassification)) {
    const [keyMake, keyModel, keyGrade] = key.split('|');
    if (
      keyMake.toLowerCase() === make.toLowerCase() &&
      keyModel.toLowerCase() === model.toLowerCase() &&
      grade.toLowerCase().includes(keyGrade.toLowerCase())
    ) {
      return value;
    }
  }
  
  return null;
}

// Read parsed vehicle data
console.log('📖 Reading parsed-vehicle-data.json...');
if (!fs.existsSync(parsedDataPath)) {
  console.error(`❌ File not found: ${parsedDataPath}`);
  process.exit(1);
}

const parsedData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));
console.log(`✅ Loaded ${parsedData.length} makes\n`);

// Extract all vehicles and create mappings
const allMappings = {};
let totalVehicles = 0;
let mappedVehicles = 0;

parsedData.forEach(makeData => {
  const makeName = makeData.name || '';
  const models = makeData.models || [];
  
  models.forEach(modelData => {
    const modelName = modelData.name || '';
    const grades = modelData.grades || [];
    
    grades.forEach(gradeData => {
      const gradeName = gradeData.name || '';
      
      if (gradeName) {
        totalVehicles++;
        
        // Parse grade name
        const parsed = parseGradeName(gradeName);
        if (parsed) {
          const { make, model, grade } = parsed;
          const normalizedGrade = normalizeGradeName(grade);
          const key = `${make}|${model}|${normalizedGrade}`;
          
          // Find classification
          const classification = findClassification(make, model, normalizedGrade);
          
          if (classification) {
            allMappings[key] = classification;
            mappedVehicles++;
          } else {
            // Use intelligent defaults based on model name
            const modelLower = model.toLowerCase();
            let bodyType = "Car";
            let fuelType = "Gasoline";
            let passengerCapacity = 5;
            const year = 2025;
            
            // Body type detection
            if (modelLower.includes('hilux') || modelLower.includes('raptor') || modelLower.includes('ranger')) {
              bodyType = "Double Cab";
            } else if (modelLower.includes('bus') || (modelLower.includes('foton') && modelLower.includes('37'))) {
              bodyType = "Bus";
            } else if (modelLower.includes('truck') || modelLower.includes('miler') || modelLower.includes('aumark')) {
              bodyType = "Truck";
            } else if (modelLower.includes('van') || modelLower.includes('every') || modelLower.includes('scrum')) {
              bodyType = "Van";
            } else if (modelLower.includes('suv') || modelLower.includes('vezel') || modelLower.includes('rav') || 
                       modelLower.includes('yaris cross') || modelLower.includes('corolla cross') || 
                       modelLower.includes('raize') || modelLower.includes('outlander') || 
                       modelLower.includes('x-trail') || modelLower.includes('sonet') || 
                       modelLower.includes('hustler') || modelLower.includes('xbee') || 
                       modelLower.includes('jimny') || modelLower.includes('taft') || 
                       modelLower.includes('rocky') || modelLower.includes('wr-v') || 
                       modelLower.includes('land cruiser') || modelLower.includes('lc 300') || 
                       modelLower.includes('lc 250') || modelLower.includes('taisor') || 
                       modelLower.includes('urban cruiser')) {
              bodyType = "SUV";
            }
            
            // Fuel type detection from specifications
            const specsText = JSON.stringify(gradeData.specifications || []).toLowerCase();
            if (specsText.includes('hybrid') || specsText.includes('hev') || specsText.includes('phev')) {
              fuelType = specsText.includes('phev') || specsText.includes('plug-in') ? "PHEV" : "Hybrid";
            } else if (specsText.includes('diesel')) {
              fuelType = "Diesel";
            } else if (specsText.includes('electric') || specsText.includes('ev ')) {
              fuelType = "Electric";
            }
            
            // Passenger capacity detection
            const capacityMatch = specsText.match(/(\d+)\s*(people|person|seats|seat|seater)/i);
            if (capacityMatch) {
              passengerCapacity = parseInt(capacityMatch[1], 10);
            } else if (modelLower.includes('pixis') || modelLower.includes('alto') || modelLower.includes('spacia') || modelLower.includes('wagon r')) {
              passengerCapacity = 4;
            }
            
            allMappings[key] = {
              bodyType,
              fuelType,
              passengerCapacity,
              year
            };
          }
        }
      }
    });
  });
});

console.log(`📊 Statistics:`);
console.log(`   Total vehicles found: ${totalVehicles}`);
console.log(`   Mapped from classification: ${mappedVehicles}`);
console.log(`   Mapped with defaults: ${totalVehicles - mappedVehicles}`);
console.log(`   Total mappings: ${Object.keys(allMappings).length}\n`);

// Read current mappings file
console.log('📝 Reading vehicle-mappings.ts...');
const mappingsContent = fs.readFileSync(mappingsPath, 'utf8');

// Find the vehicleMappings object
const mappingsStart = mappingsContent.indexOf('export const vehicleMappings: Record<string, VehicleMapping> = {');
const mappingsEnd = mappingsContent.indexOf('};', mappingsStart);

if (mappingsStart === -1 || mappingsEnd === -1) {
  console.error('❌ Could not find vehicleMappings object');
  process.exit(1);
}

// Generate new mappings string (merge with existing)
const existingMappings = {};
const existingMappingsText = mappingsContent.substring(mappingsStart, mappingsEnd);
const existingMatches = existingMappingsText.matchAll(/"([^"]+)\":\s*\{[^}]+\}/g);
for (const match of existingMatches) {
  const key = match[1];
  // Extract the value object
  const valueMatch = match[0].match(/\{([^}]+)\}/);
  if (valueMatch) {
    const valueStr = valueMatch[1];
    const bodyTypeMatch = valueStr.match(/bodyType:\s*"([^"]+)"/);
    const fuelTypeMatch = valueStr.match(/fuelType:\s*"([^"]+)"/);
    const capacityMatch = valueStr.match(/passengerCapacity:\s*(\d+)/);
    const yearMatch = valueStr.match(/year:\s*(\d+)/);
    
    if (bodyTypeMatch && fuelTypeMatch && capacityMatch && yearMatch) {
      existingMappings[key] = {
        bodyType: bodyTypeMatch[1],
        fuelType: fuelTypeMatch[1],
        passengerCapacity: parseInt(capacityMatch[1], 10),
        year: parseInt(yearMatch[1], 10)
      };
    }
  }
}

// Merge: new mappings override existing ones
const mergedMappings = { ...existingMappings, ...allMappings };

// Generate mappings string
let newMappingsStr = '';
const sortedKeys = Object.keys(mergedMappings).sort();

sortedKeys.forEach(key => {
  const value = mergedMappings[key];
  const bodyType = value.bodyType.replace(/"/g, '\\"');
  const fuelType = value.fuelType.replace(/"/g, '\\"');
  newMappingsStr += `  "${key}": { bodyType: "${bodyType}", fuelType: "${fuelType}", passengerCapacity: ${value.passengerCapacity}, year: ${value.year} },\n`;
});

const before = mappingsContent.substring(0, mappingsEnd);
const after = mappingsContent.substring(mappingsEnd);

// Insert new mappings before the closing brace
const updated = before + '\n  // Auto-generated mappings from parsed-vehicle-data.json\n' + newMappingsStr + after;

fs.writeFileSync(mappingsPath, updated);

console.log(`✅ Successfully updated vehicle-mappings.ts!`);
console.log(`   Total mappings: ${sortedKeys.length}`);
console.log(`   New mappings added: ${Object.keys(allMappings).length}`);
console.log(`   Existing mappings preserved: ${Object.keys(existingMappings).length}\n`);

// Count by body type
const bodyTypeCounts = {};
Object.values(mergedMappings).forEach(m => {
  bodyTypeCounts[m.bodyType] = (bodyTypeCounts[m.bodyType] || 0) + 1;
});

console.log('📊 Body Type Distribution:');
Object.entries(bodyTypeCounts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`   ${type}: ${count}`);
});

console.log('\n✅ Done!');
