// Comprehensive script to map all vehicles from parsed-vehicle-data.json
// Uses the user's provided classification table and intelligent extraction

const fs = require('fs');
const path = require('path');

const parsedDataPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
const mappingsPath = path.join(__dirname, '..', 'lib', 'vehicle-mappings.ts');

console.log('🚗 Comprehensive Vehicle Mapping');
console.log('================================\n');

// Read parsed data
if (!fs.existsSync(parsedDataPath)) {
  console.error(`❌ File not found: ${parsedDataPath}`);
  process.exit(1);
}

try {
  const parsedData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));
  console.log(`📖 Loaded ${parsedData.length} makes from parsed data\n`);
  
  if (!Array.isArray(parsedData) || parsedData.length === 0) {
    console.error('❌ Invalid data format');
    process.exit(1);
  }
} catch (error) {
  console.error(`❌ Error reading file: ${error.message}`);
  process.exit(1);
}

const parsedData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));

// Function to parse grade name: "Toyota - Pixis - G "SA III""
function parseGradeName(gradeName) {
  if (!gradeName || typeof gradeName !== 'string') return null;
  
  const parts = gradeName.split(' - ').map(p => p.trim()).filter(p => p.length > 0);
  if (parts.length >= 3) {
    return {
      make: parts[0],
      model: parts[1],
      grade: parts.slice(2).join(' - ')
    };
  }
  return null;
}

// Function to normalize names
function normalizeName(name) {
  return name
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'");
}

// Function to extract body type from model name and specifications
function inferBodyType(make, model, grade, specifications) {
  const makeLower = make.toLowerCase();
  const modelLower = model.toLowerCase();
  const gradeLower = grade.toLowerCase();
  const allText = JSON.stringify(specifications || []).toLowerCase();
  const combined = `${makeLower} ${modelLower} ${gradeLower} ${allText}`;
  
  // Double Cab (check first)
  if (combined.includes('double cab') || combined.includes('doublecab') ||
      modelLower.includes('hilux') || modelLower.includes('raptor') || 
      (modelLower.includes('ranger') && !combined.includes('single cab'))) {
    return 'Double Cab';
  }
  
  // Bus
  if (combined.includes('bus') || (combined.includes('foton') && combined.includes('37'))) {
    return 'Bus';
  }
  
  // Truck (single cab)
  if (combined.includes('single cab') || 
      (combined.includes('truck') && !combined.includes('double cab')) ||
      combined.includes('miler') || combined.includes('aumark') || combined.includes('mini truck')) {
    return 'Truck';
  }
  
  // Van
  if (combined.includes('van') || combined.includes('every') || combined.includes('scrum') ||
      modelLower.includes('sienta') || modelLower.includes('spacia')) {
    if (modelLower.includes('sienta') || modelLower.includes('spacia')) {
      return 'Minivan';
    }
    return 'Van';
  }
  
  // SUV detection
  if (combined.includes('suv') || combined.includes('sport utility') || combined.includes('crossover') ||
      modelLower.includes('vezel') || modelLower.includes('rav') || modelLower.includes('yaris cross') ||
      modelLower.includes('corolla cross') || modelLower.includes('raize') || modelLower.includes('outlander') ||
      modelLower.includes('x-trail') || modelLower.includes('x trail') || modelLower.includes('sonet') ||
      modelLower.includes('hustler') || modelLower.includes('xbee') || modelLower.includes('jimny') ||
      modelLower.includes('taft') || modelLower.includes('rocky') || modelLower.includes('wr-v') ||
      modelLower.includes('land cruiser') || modelLower.includes('lc 300') || modelLower.includes('lc 250') ||
      modelLower.includes('taisor') || modelLower.includes('urban cruiser')) {
    
    // Classify SUV size
    if (modelLower.includes('raize') || modelLower.includes('yaris cross') || modelLower.includes('xbee') ||
        modelLower.includes('taft') || modelLower.includes('rocky')) {
      return 'Subcompact SUV';
    }
    if (modelLower.includes('corolla cross') || modelLower.includes('vezel') || modelLower.includes('taisor') ||
        modelLower.includes('urban cruiser') || modelLower.includes('outlander')) {
      return 'Compact SUV';
    }
    if (modelLower.includes('rav') || modelLower.includes('x-trail') || modelLower.includes('x trail') ||
        modelLower.includes('sonet')) {
      return 'Midsize SUV';
    }
    if (modelLower.includes('land cruiser') || modelLower.includes('lc 300') || modelLower.includes('lc 250')) {
      return 'Full-Size SUV';
    }
    return 'SUV';
  }
  
  // Station Wagon
  if (modelLower.includes('touring') || modelLower.includes('fielder') || modelLower.includes('wagon')) {
    return 'Station Wagon';
  }
  
  // Kei Car
  if (modelLower.includes('pixis') || modelLower.includes('alto') || modelLower.includes('spacia') ||
      modelLower.includes('wagon r') || modelLower.includes('mira')) {
    if (modelLower.includes('spacia') || modelLower.includes('wagon r')) {
      return 'Kei Car';
    }
    return 'Hatchback';
  }
  
  // MPV
  if (modelLower.includes('roomy')) {
    return 'MPV';
  }
  
  // Default: Car (Sedan/Hatchback)
  if (modelLower.includes('aqua') || modelLower.includes('yaris') || modelLower.includes('corolla') ||
      modelLower.includes('prius') || modelLower.includes('city') || modelLower.includes('fit') ||
      modelLower.includes('almera') || modelLower.includes('clipper')) {
    if (modelLower.includes('aqua') || modelLower.includes('corolla') || modelLower.includes('prius') ||
        modelLower.includes('city') || modelLower.includes('almera') || modelLower.includes('yaris ativ')) {
      return 'Sedan';
    }
    return 'Hatchback';
  }
  
  return 'Car';
}

// Function to extract fuel type
function inferFuelType(make, model, grade, specifications) {
  const allText = JSON.stringify(specifications || []).toLowerCase();
  const combined = `${make.toLowerCase()} ${model.toLowerCase()} ${grade.toLowerCase()} ${allText}`;
  
  if (combined.includes('phev') || combined.includes('plug-in hybrid')) {
    return 'PHEV';
  }
  if (combined.includes('hybrid') || combined.includes('hev') || combined.includes('e:hev')) {
    return 'Hybrid';
  }
  if (combined.includes('diesel')) {
    return 'Diesel';
  }
  if (combined.includes('electric') || combined.includes('ev ') || combined.includes('ev-')) {
    return 'Electric';
  }
  if (combined.includes('gasoline') || combined.includes('petrol')) {
    if (combined.includes('turbo')) {
      return 'Gasoline (Turbo)';
    }
    return 'Gasoline';
  }
  
  // Default based on model
  const modelLower = model.toLowerCase();
  if (modelLower.includes('aqua') || modelLower.includes('prius') || modelLower.includes('raize') ||
      modelLower.includes('yaris cross') || modelLower.includes('corolla cross') || modelLower.includes('vezel') ||
      modelLower.includes('fit') || modelLower.includes('alto') || modelLower.includes('spacia') ||
      modelLower.includes('swift') || modelLower.includes('xbee')) {
    return 'Hybrid';
  }
  
  return 'Gasoline';
}

// Function to extract passenger capacity
function inferPassengerCapacity(make, model, grade, specifications) {
  const allText = JSON.stringify(specifications || []).toLowerCase();
  const combined = `${make.toLowerCase()} ${model.toLowerCase()} ${grade.toLowerCase()} ${allText}`;
  
  // Look for explicit capacity
  const patterns = [
    /(\d+)\s*(people|person|seats|seat|seater)/i,
    /passenger\s*capacity[:\s]*(\d+)/i,
    /seating\s*capacity[:\s]*(\d+)/i,
    /(\d+)\s*seats/i,
  ];
  
  for (const pattern of patterns) {
    const match = combined.match(pattern);
    if (match) {
      return parseInt(match[1], 10);
    }
  }
  
  // Default based on vehicle type
  const modelLower = model.toLowerCase();
  if (modelLower.includes('pixis') || modelLower.includes('alto') || modelLower.includes('spacia') ||
      modelLower.includes('wagon r') || modelLower.includes('mira')) {
    return 4;
  }
  if (modelLower.includes('sienta') && combined.includes('7')) {
    return 7;
  }
  if (modelLower.includes('land cruiser') && combined.includes('7')) {
    return 7;
  }
  
  return 5; // Default
}

// Extract all vehicles and create mappings
const allMappings = {};
let totalVehicles = 0;

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
          const normalizedMake = normalizeName(make);
          const normalizedModel = normalizeName(model);
          const normalizedGrade = normalizeName(grade);
          const key = `${normalizedMake}|${normalizedModel}|${normalizedGrade}`;
          
          // Infer attributes
          const bodyType = inferBodyType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const fuelType = inferFuelType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const passengerCapacity = inferPassengerCapacity(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const year = 2025; // Default year
          
          allMappings[key] = {
            bodyType,
            fuelType,
            passengerCapacity,
            year
          };
        } else {
          // Handle non-standard format
          const normalizedMake = normalizeName(makeName);
          const normalizedModel = normalizeName(modelName);
          const normalizedGrade = normalizeName(gradeName);
          const key = `${normalizedMake}|${normalizedModel}|${normalizedGrade}`;
          
          const bodyType = inferBodyType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const fuelType = inferFuelType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const passengerCapacity = inferPassengerCapacity(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const year = 2025;
          
          allMappings[key] = {
            bodyType,
            fuelType,
            passengerCapacity,
            year
          };
        }
      }
    });
  });
});

console.log(`✅ Processed ${totalVehicles} vehicles`);
console.log(`📊 Generated ${Object.keys(allMappings).length} mappings\n`);

// Read current mappings file
const mappingsContent = fs.readFileSync(mappingsPath, 'utf8');

// Find the vehicleMappings object
const mappingsStart = mappingsContent.indexOf('export const vehicleMappings: Record<string, VehicleMapping> = {');
const mappingsEnd = mappingsContent.indexOf('};', mappingsStart);

if (mappingsStart === -1 || mappingsEnd === -1) {
  console.error('❌ Could not find vehicleMappings object');
  process.exit(1);
}

// Extract existing mappings (preserve user-provided accurate ones)
const existingMappings = {};
const existingMappingsText = mappingsContent.substring(mappingsStart, mappingsEnd);
// Match pattern: "Make|Model|Grade": { bodyType: "...", fuelType: "...", passengerCapacity: N, year: N }
const regex = /"([^"]+)":\s*\{\s*bodyType:\s*"([^"]+)",\s*fuelType:\s*"([^"]+)",\s*passengerCapacity:\s*(\d+),\s*year:\s*(\d+)\s*\}/g;
let match;
while ((match = regex.exec(existingMappingsText)) !== null) {
  const key = match[1];
  existingMappings[key] = {
    bodyType: match[2],
    fuelType: match[3],
    passengerCapacity: parseInt(match[4], 10),
    year: parseInt(match[5], 10)
  };
}

// Merge: new mappings override existing ones (but preserve user-provided accurate ones)
const mergedMappings = { ...allMappings, ...existingMappings };

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

// Replace the entire mappings object
const updated = before + '\n' + newMappingsStr + after;

fs.writeFileSync(mappingsPath, updated);

console.log(`✅ Successfully updated vehicle-mappings.ts!`);
console.log(`   Total mappings: ${sortedKeys.length}`);
console.log(`   New mappings: ${Object.keys(allMappings).length}`);
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
