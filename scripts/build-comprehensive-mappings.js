// Build comprehensive vehicle mappings from parsed-vehicle-data.json
// Uses intelligent classification based on model names and specifications

const fs = require('fs');
const path = require('path');

const parsedDataPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
const mappingsPath = path.join(__dirname, '..', 'lib', 'vehicle-mappings.ts');

console.log('🚗 Building Comprehensive Vehicle Mappings');
console.log('===========================================\n');

// Read parsed data
const parsedData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));
console.log(`📖 Loaded ${parsedData.length} makes\n`);

// User's provided classification table (from earlier conversation)
const knownClassifications = {
  "Toyota|Pixis|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|L": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|B": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Aqua|Special Edition Z Raffine": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|Z": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|G": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|GR Sport": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|Custom GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|Custom G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|X": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Axio|EX": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|WXB": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|G": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|X": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Prius|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Prius|U": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|GR Sport": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Z Adventure": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Premium Luxury": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|S": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|G": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|G\"X\"": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|Z": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|G": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|Adventure": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|G \"Z package\"": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|X": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|Z": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|G": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|X": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|W X B": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|G": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|X": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX Hybrid": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 2WD CVT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 2WD 5MT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 4WD CVT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Urban Cruiser|Taisor   V Grade": { bodyType: "Compact SUV", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|GR Sport": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|ZX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|VX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|AX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|GX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Premium Luxury": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Sport": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Nightshade": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Alto|X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|S": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|L": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|A": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia|X": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia|G": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID XS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID GS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID XS TURBO": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Hustler|X": { bodyType: "SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|G": { bodyType: "SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Wagon R|FX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|FX-S": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|ZX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|ZT": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|T": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Swift|MZ": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Swift|MX": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Swift|XG": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XC": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XL": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XG": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MZ": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MV": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MX": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Basic": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Home": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|RS": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Luxe": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Crosstar": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|X HuNT Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|Z・PLaY Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|X": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|ZR-V|e HEV X Special Edition": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|ZR-V|e HEV Z Special Edition": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|S": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|X": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|G": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
};

// Helper functions
function normalizeName(name) {
  return name.trim().replace(/\s+/g, ' ').replace(/[""]/g, '"').replace(/['']/g, "'");
}

function parseGradeName(gradeName) {
  if (!gradeName || typeof gradeName !== 'string') return null;
  const parts = gradeName.split(' - ').map(p => p.trim()).filter(p => p.length > 0);
  if (parts.length >= 3) {
    return { make: parts[0], model: parts[1], grade: parts.slice(2).join(' - ') };
  }
  return null;
}

function inferBodyType(make, model, grade, specs) {
  const modelLower = model.toLowerCase();
  const gradeLower = grade.toLowerCase();
  const allText = JSON.stringify(specs || []).toLowerCase();
  const combined = `${make.toLowerCase()} ${modelLower} ${gradeLower} ${allText}`;
  
  if (combined.includes('double cab') || modelLower.includes('hilux') || modelLower.includes('raptor') || 
      (modelLower.includes('ranger') && !combined.includes('single cab'))) {
    return 'Double Cab';
  }
  if (combined.includes('bus') || (combined.includes('foton') && combined.includes('37'))) {
    return 'Bus';
  }
  if (combined.includes('single cab') || (combined.includes('truck') && !combined.includes('double cab')) ||
      combined.includes('miler') || combined.includes('aumark') || combined.includes('mini truck')) {
    return 'Truck';
  }
  if (combined.includes('van') || combined.includes('every') || combined.includes('scrum') ||
      modelLower.includes('sienta') || modelLower.includes('spacia')) {
    if (modelLower.includes('sienta')) return 'Minivan';
    if (modelLower.includes('spacia') || modelLower.includes('wagon r')) return 'Kei Car';
    return 'Van';
  }
  if (combined.includes('suv') || modelLower.includes('vezel') || modelLower.includes('rav') ||
      modelLower.includes('yaris cross') || modelLower.includes('corolla cross') ||
      modelLower.includes('raize') || modelLower.includes('outlander') ||
      modelLower.includes('x-trail') || modelLower.includes('sonet') ||
      modelLower.includes('hustler') || modelLower.includes('xbee') ||
      modelLower.includes('jimny') || modelLower.includes('taft') ||
      modelLower.includes('rocky') || modelLower.includes('wr-v') ||
      modelLower.includes('land cruiser') || modelLower.includes('lc 300') ||
      modelLower.includes('lc 250') || modelLower.includes('taisor') ||
      modelLower.includes('urban cruiser')) {
    if (modelLower.includes('raize') || modelLower.includes('yaris cross') || modelLower.includes('xbee') ||
        modelLower.includes('taft') || modelLower.includes('rocky')) {
      return 'Subcompact SUV';
    }
    if (modelLower.includes('corolla cross') || modelLower.includes('vezel') || modelLower.includes('taisor') ||
        modelLower.includes('urban cruiser') || modelLower.includes('outlander')) {
      return 'Compact SUV';
    }
    if (modelLower.includes('rav') || modelLower.includes('x-trail') || modelLower.includes('sonet')) {
      return 'Midsize SUV';
    }
    if (modelLower.includes('land cruiser') || modelLower.includes('lc 300') || modelLower.includes('lc 250')) {
      return 'Full-Size SUV';
    }
    return 'SUV';
  }
  if (modelLower.includes('touring') || modelLower.includes('fielder') || modelLower.includes('wagon')) {
    return 'Station Wagon';
  }
  if (modelLower.includes('pixis') || modelLower.includes('alto') || modelLower.includes('mira')) {
    return 'Hatchback';
  }
  if (modelLower.includes('roomy')) {
    return 'MPV';
  }
  if (modelLower.includes('aqua') || modelLower.includes('corolla') || modelLower.includes('prius') ||
      modelLower.includes('city') || modelLower.includes('almera') || modelLower.includes('yaris ativ')) {
    return 'Sedan';
  }
  return 'Car';
}

function inferFuelType(make, model, grade, specs) {
  const allText = JSON.stringify(specs || []).toLowerCase();
  const combined = `${make.toLowerCase()} ${model.toLowerCase()} ${grade.toLowerCase()} ${allText}`;
  
  if (combined.includes('phev') || combined.includes('plug-in hybrid')) return 'PHEV';
  if (combined.includes('hybrid') || combined.includes('hev') || combined.includes('e:hev')) return 'Hybrid';
  if (combined.includes('diesel')) return 'Diesel';
  if (combined.includes('electric') || combined.includes('ev ')) return 'Electric';
  if (combined.includes('gasoline') || combined.includes('petrol')) {
    return combined.includes('turbo') ? 'Gasoline (Turbo)' : 'Gasoline';
  }
  
  const modelLower = model.toLowerCase();
  if (modelLower.includes('aqua') || modelLower.includes('prius') || modelLower.includes('raize') ||
      modelLower.includes('yaris cross') || modelLower.includes('corolla cross') ||
      modelLower.includes('vezel') || modelLower.includes('fit') || modelLower.includes('alto') ||
      modelLower.includes('spacia') || modelLower.includes('swift') || modelLower.includes('xbee')) {
    return 'Hybrid';
  }
  
  return 'Gasoline';
}

function inferPassengerCapacity(make, model, grade, specs) {
  const allText = JSON.stringify(specs || []).toLowerCase();
  const combined = `${make.toLowerCase()} ${model.toLowerCase()} ${grade.toLowerCase()} ${allText}`;
  
  const patterns = [
    /(\d+)\s*(people|person|seats|seat|seater)/i,
    /passenger\s*capacity[:\s]*(\d+)/i,
    /seating\s*capacity[:\s]*(\d+)/i,
    /(\d+)\s*seats/i,
  ];
  
  for (const pattern of patterns) {
    const match = combined.match(pattern);
    if (match) return parseInt(match[1], 10);
  }
  
  const modelLower = model.toLowerCase();
  if (modelLower.includes('pixis') || modelLower.includes('alto') || modelLower.includes('spacia') ||
      modelLower.includes('wagon r') || modelLower.includes('mira')) {
    return 4;
  }
  if ((modelLower.includes('sienta') || modelLower.includes('land cruiser')) && combined.includes('7')) {
    return 7;
  }
  
  return 5;
}

// Process all vehicles
const allMappings = {};
let totalVehicles = 0;
let fromKnown = 0;
let inferred = 0;

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
        const parsed = parseGradeName(gradeName);
        
        if (parsed) {
          const { make, model, grade } = parsed;
          const normalizedMake = normalizeName(make);
          const normalizedModel = normalizeName(model);
          const normalizedGrade = normalizeName(grade);
          const key = `${normalizedMake}|${normalizedModel}|${normalizedGrade}`;
          
          // Check known classifications first
          if (knownClassifications[key]) {
            allMappings[key] = knownClassifications[key];
            fromKnown++;
          } else {
            // Infer from data
            const bodyType = inferBodyType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
            const fuelType = inferFuelType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
            const passengerCapacity = inferPassengerCapacity(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
            
            allMappings[key] = {
              bodyType,
              fuelType,
              passengerCapacity,
              year: 2025
            };
            inferred++;
          }
        } else {
          // Handle non-standard format
          const normalizedMake = normalizeName(makeName);
          const normalizedModel = normalizeName(modelName);
          const normalizedGrade = normalizeName(gradeName);
          const key = `${normalizedMake}|${normalizedModel}|${normalizedGrade}`;
          
          const bodyType = inferBodyType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const fuelType = inferFuelType(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          const passengerCapacity = inferPassengerCapacity(normalizedMake, normalizedModel, normalizedGrade, gradeData.specifications);
          
          allMappings[key] = {
            bodyType,
            fuelType,
            passengerCapacity,
            year: 2025
          };
          inferred++;
        }
      }
    });
  });
});

console.log(`✅ Processed ${totalVehicles} vehicles`);
console.log(`   From known classifications: ${fromKnown}`);
console.log(`   Inferred from data: ${inferred}`);
console.log(`   Total mappings: ${Object.keys(allMappings).length}\n`);

// Read current mappings file
const mappingsContent = fs.readFileSync(mappingsPath, 'utf8');
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

const updated = before + '\n' + newMappingsStr + after;
fs.writeFileSync(mappingsPath, updated);

console.log(`✅ Successfully updated vehicle-mappings.ts!`);
console.log(`   Total mappings: ${sortedKeys.length}\n`);

// Count by body type
const bodyTypeCounts = {};
Object.values(allMappings).forEach(m => {
  bodyTypeCounts[m.bodyType] = (bodyTypeCounts[m.bodyType] || 0) + 1;
});

console.log('📊 Body Type Distribution:');
Object.entries(bodyTypeCounts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`   ${type}: ${count}`);
});

console.log('\n✅ Done!');
