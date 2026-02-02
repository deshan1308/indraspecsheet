const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const filePath = path.join(__dirname, '..', 'Final Vehicle Model Wise Specifications -01.xlsx');
const workbook = XLSX.readFile(filePath);

// Read existing data.ts to extract Honda Vezel
const existingDataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const existingDataContent = fs.readFileSync(existingDataPath, 'utf8');

// Extract the existing Honda Vezel makes array (we'll preserve it)
const existingHondaVezel = `  {
    id: "honda",
    name: "Honda",
    models: [
      {
        id: "vezel",
        name: "Vezel",
        grades: [
          {
            id: "ehev-z-play-package",
            name: "e:HEV Z・PLaY Package",
            imageUrl: "/eHEV Z・PLaY Package.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  {
                    name: "Engine type, number of cylinders and layout",
                    value: "Water-cooled inline 4-cylinder horizontally mounted",
                  },
                  { name: "Drive Type", value: "FF (Front engine, front-wheel drive) and 4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption (FF)", value: "25.3 km/L" },
                  { name: "Fuel Consumption (4WD)", value: "21.3 km/L" },
                  {
                    name: "Overall length/width/height (m)",
                    value: "FF/4WD: 4.340/1.790/1.590",
                  },
                  {
                    name: "Minimum ground clearance (Inch)",
                    value: "FF: 7.68 / 4WD: 7.09",
                  },
                  {
                    name: "Vehicle weight (kg)",
                    value: "FF: 1,380 / 4WD: 1,450",
                  },
                  {
                    name: "Room dimensions: length/width/height (m)",
                    value: "FF/4WD: 2.020/1.445/1.225",
                  },
                  { name: "Minimum turning radius (m)", value: "FF/4WD: 5.5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  {
                    name: "Engine: Maximum power (kW [PS]/rpm)",
                    value: "78 [106] / 6,000-6,400",
                  },
                  {
                    name: "Engine: Maximum torque (N·m [kgf·m]/rpm)",
                    value: "127 [13.0] / 4,500-5,000",
                  },
                  {
                    name: "Electric motor: Maximum output (kW [PS]/rpm)",
                    value: "96 [131] / 4,000-8,000",
                  },
                  {
                    name: "Electric motor: Maximum torque (N·m [kgf·m]/rpm)",
                    value: "253 [25.8] / 0-3,500",
                  },
                  {
                    name: "Fuel consumption rate (km/L)",
                    value: "FF: 25.3km/L / 4WD: 21.3km/L",
                  },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  {
                    name: "Honda CONNECT Display + ETC2.0 in-vehicle unit (linked to navigation system)",
                    value: "Included",
                    highlighted: true,
                  },
                  { name: "Heated steering wheel", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  { name: "Wireless Chargers", value: "Included", highlighted: true },
                  {
                    name: "Instrument panel garnish",
                    value: "Driver's seat/passenger seat/center",
                  },
                  { name: "Door lining garnish", value: "Front/rear" },
                  { name: "Parcel Cover", value: "Included" },
                  {
                    name: "Leather-wrapped steering wheel",
                    value: "Smooth leather",
                  },
                  { name: "Two tone", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  {
                    name: "Full LED headlights",
                    value: "With daytime running lamps (with automatic light control mechanism)",
                  },
                  { name: "LED active cornering lights", value: "Included" },
                  {
                    name: "Hands-free access power tailgate",
                    value: "With scheduled close function",
                  },
                  { name: "LED sequential turn signal lamp", value: "Front" },
                  {
                    name: "PLaY package exclusive exterior",
                    value:
                      "Front grille with color bar ornament, black painted bumper lower garnish (front/rear), light blue decorative door lower garnish",
                    highlighted: true,
                  },
                  { name: "Deceleration Selector", value: "Included" },
                  {
                    name: "18-inch aluminum wheels + steel radial tires",
                    value: "Included",
                    highlighted: true,
                  },
                  { name: "Two tone", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "ehev-z",
            name: "e:HEV Z",
            imageUrl: "/eHEV Z.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  {
                    name: "Engine type, number of cylinders and layout",
                    value: "Water-cooled inline 4-cylinder horizontally mounted",
                  },
                  { name: "Drive Type", value: "FF" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption (FF)", value: "25.3km/L" },
                  { name: "Fuel Consumption (4WD)", value: "21.3km/L" },
                  {
                    name: "Overall length/width/height (m)",
                    value: "FF/4WD: 4.340/1.790/1.590",
                  },
                  {
                    name: "Minimum ground clearance (inch)",
                    value: "FF: 7.68/4WD: 7.09",
                  },
                  {
                    name: "Vehicle weight (kg)",
                    value: "FF: 1,380/4WD: 1,450",
                  },
                  {
                    name: "Room dimensions: length/width/height (m)",
                    value: "FF/4WD: 2.020/1.445/1.225",
                  },
                  { name: "Minimum turning radius (m)", value: "FF/4WD: 5.5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  {
                    name: "Engine: Maximum power (kW [PS]/rpm)",
                    value: "78［106］/6,000-6,400",
                  },
                  {
                    name: "Engine: Maximum torque (N・m [kgf・m]/rpm)",
                    value: "127［13.0］/4,500-5,000",
                  },
                  {
                    name: "Electric motor: Maximum output (kW [PS]/rpm)",
                    value: "96［131］/4,000-8,000",
                  },
                  {
                    name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)",
                    value: "253 [25.8] / 0-3,500",
                  },
                  {
                    name: "Fuel consumption rate (km/L)",
                    value: "FF: 25.3km/L/4WD: 21.3km/L",
                  },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  { name: "Heated steering wheel", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  {
                    name: "Instrument panel garnish",
                    value: "Driver's seat/passenger seat/center",
                  },
                  { name: "Door lining garnish", value: "Front/rear" },
                  { name: "Parcel Cover", value: "Included" },
                  {
                    name: "Leather-wrapped steering wheel",
                    value: "Smooth leather",
                  },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  {
                    name: "Full LED headlights",
                    value: "With daytime running lamps (with automatic light control mechanism)",
                  },
                  { name: "LED active cornering lights", value: "Included" },
                  {
                    name: "Hands-free access power tailgate",
                    value: "With scheduled close function",
                  },
                  { name: "LED sequential turn signal lamp", value: "Front" },
                  {
                    name: "e:HEV Z exclusive exterior",
                    value:
                      "Sharp silver painted bumper lower garnish (front/rear), platinum chrome plated door lower garnish",
                    highlighted: true,
                  },
                  { name: "Deceleration Selector", value: "Included" },
                  {
                    name: "18-inch aluminum wheels + steel radial tires",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
        ],
      },
    ],
  }`;

// Now parse Excel and add other vehicles
// Use the parsed data from earlier
const parsedDataPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
if (!fs.existsSync(parsedDataPath)) {
  console.error('Please run convert-excel-to-data.js first!');
  process.exit(1);
}

const parsedData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));

// Normalize and group makes
function normalizeMakeName(name) {
  const upper = name.toUpperCase().trim();
  if (upper.startsWith('TOYOTA')) return 'Toyota';
  if (upper.startsWith('HONDA')) return 'Honda';
  if (upper.startsWith('SUZUKI')) return 'Suzuki';
  if (upper.startsWith('DAIHATSU')) return 'Daihatsu';
  if (upper.startsWith('NISSAN')) return 'Nissan';
  if (upper.startsWith('MAZDA')) return 'Mazda';
  if (upper.startsWith('MITSUBISHI')) return 'Mitsubishi';
  if (upper.startsWith('FORD')) return 'Ford';
  if (upper.startsWith('KIA')) return 'Kia';
  if (upper.startsWith('FOTON')) return 'Foton';
  return name;
}

const groupedMakes = {};
parsedData.forEach(makeData => {
  const normalizedMake = normalizeMakeName(makeData.name);
  
  // Skip Honda Vezel - we'll use the existing one
  if (normalizedMake === 'Honda' && makeData.models.some(m => m.name.toLowerCase().includes('vezel'))) {
    return;
  }
  
  if (!groupedMakes[normalizedMake]) {
    groupedMakes[normalizedMake] = {
      id: normalizedMake.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: normalizedMake,
      models: []
    };
  }
  
  makeData.models.forEach(model => {
    const existingModel = groupedMakes[normalizedMake].models.find(
      m => m.name.toLowerCase() === model.name.toLowerCase()
    );
    
    if (existingModel) {
      model.grades.forEach(grade => {
        const existingGrade = existingModel.grades.find(
          g => g.name.toLowerCase() === grade.name.toLowerCase()
        );
        if (!existingGrade) {
          existingModel.grades.push(grade);
        }
      });
    } else {
      groupedMakes[normalizedMake].models.push(model);
    }
  });
});

// Convert to array and add Honda Vezel
const allMakes = Object.values(groupedMakes);

// Add Honda if it doesn't exist, or merge with existing Honda
const hondaIndex = allMakes.findIndex(m => m.name === 'Honda');
if (hondaIndex >= 0) {
  // Add Vezel model to existing Honda
  const vezelModel = {
    id: "vezel",
    name: "Vezel",
    grades: [
      {
        id: "ehev-z-play-package",
        name: "e:HEV Z・PLaY Package",
        imageUrl: "/eHEV Z・PLaY Package.jpg",
        specifications: [
          {
            category: "General Information",
            items: [
              { name: "Engine Type", value: "1.496 e:HEV" },
              { name: "Transmission Type", value: "Electric continuously variable transmission" },
              { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
              { name: "Drive Type", value: "FF (Front engine, front-wheel drive) and 4WD" },
              { name: "Passenger Capacity", value: "5 people" },
            ],
          },
          {
            category: "Measurements & Weight",
            items: [
              { name: "Fuel Consumption (FF)", value: "25.3 km/L" },
              { name: "Fuel Consumption (4WD)", value: "21.3 km/L" },
              { name: "Overall length/width/height (m)", value: "FF/4WD: 4.340/1.790/1.590" },
              { name: "Minimum ground clearance (Inch)", value: "FF: 7.68 / 4WD: 7.09" },
              { name: "Vehicle weight (kg)", value: "FF: 1,380 / 4WD: 1,450" },
              { name: "Room dimensions: length/width/height (m)", value: "FF/4WD: 2.020/1.445/1.225" },
              { name: "Minimum turning radius (m)", value: "FF/4WD: 5.5" },
            ],
          },
          {
            category: "Performance",
            items: [
              { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78 [106] / 6,000-6,400" },
              { name: "Engine: Maximum torque (N·m [kgf·m]/rpm)", value: "127 [13.0] / 4,500-5,000" },
              { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "96 [131] / 4,000-8,000" },
              { name: "Electric motor: Maximum torque (N·m [kgf·m]/rpm)", value: "253 [25.8] / 0-3,500" },
              { name: "Fuel consumption rate (km/L)", value: "FF: 25.3km/L / 4WD: 21.3km/L" },
            ],
          },
          {
            category: "Interior Features",
            items: [
              { name: "Honda CONNECT Display + ETC2.0 in-vehicle unit (linked to navigation system)", value: "Included", highlighted: true },
              { name: "Heated steering wheel", value: "Included" },
              { name: "Fully automatic air conditioning", value: "Included" },
              { name: "Wireless Chargers", value: "Included", highlighted: true },
              { name: "Instrument panel garnish", value: "Driver's seat/passenger seat/center" },
              { name: "Door lining garnish", value: "Front/rear" },
              { name: "Parcel Cover", value: "Included" },
              { name: "Leather-wrapped steering wheel", value: "Smooth leather" },
              { name: "Two tone", value: "Included", highlighted: true },
            ],
          },
          {
            category: "Exterior Features",
            items: [
              { name: "Full LED headlights", value: "With daytime running lamps (with automatic light control mechanism)" },
              { name: "LED active cornering lights", value: "Included" },
              { name: "Hands-free access power tailgate", value: "With scheduled close function" },
              { name: "LED sequential turn signal lamp", value: "Front" },
              { name: "PLaY package exclusive exterior", value: "Front grille with color bar ornament, black painted bumper lower garnish (front/rear), light blue decorative door lower garnish", highlighted: true },
              { name: "Deceleration Selector", value: "Included" },
              { name: "18-inch aluminum wheels + steel radial tires", value: "Included", highlighted: true },
              { name: "Two tone", value: "Included", highlighted: true },
            ],
          },
          {
            category: "Key Features",
            items: [
              { name: "Honda SENSING", value: "Included", highlighted: true },
            ],
          },
        ],
      },
      {
        id: "ehev-z",
        name: "e:HEV Z",
        imageUrl: "/eHEV Z.jpg",
        specifications: [
          {
            category: "General Information",
            items: [
              { name: "Engine Type", value: "1.496 e:HEV" },
              { name: "Transmission Type", value: "Electric continuously variable transmission" },
              { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
              { name: "Drive Type", value: "FF" },
              { name: "Drive Type", value: "4WD" },
              { name: "Passenger Capacity", value: "5 people" },
            ],
          },
          {
            category: "Measurements & Weight",
            items: [
              { name: "Fuel Consumption (FF)", value: "25.3km/L" },
              { name: "Fuel Consumption (4WD)", value: "21.3km/L" },
              { name: "Overall length/width/height (m)", value: "FF/4WD: 4.340/1.790/1.590" },
              { name: "Minimum ground clearance (inch)", value: "FF: 7.68/4WD: 7.09" },
              { name: "Vehicle weight (kg)", value: "FF: 1,380/4WD: 1,450" },
              { name: "Room dimensions: length/width/height (m)", value: "FF/4WD: 2.020/1.445/1.225" },
              { name: "Minimum turning radius (m)", value: "FF/4WD: 5.5" },
            ],
          },
          {
            category: "Performance",
            items: [
              { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
              { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
              { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "96［131］/4,000-8,000" },
              { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,500" },
              { name: "Fuel consumption rate (km/L)", value: "FF: 25.3km/L/4WD: 21.3km/L" },
            ],
          },
          {
            category: "Interior Features",
            items: [
              { name: "Heated steering wheel", value: "Included" },
              { name: "Fully automatic air conditioning", value: "Included" },
              { name: "Instrument panel garnish", value: "Driver's seat/passenger seat/center" },
              { name: "Door lining garnish", value: "Front/rear" },
              { name: "Parcel Cover", value: "Included" },
              { name: "Leather-wrapped steering wheel", value: "Smooth leather" },
            ],
          },
          {
            category: "Exterior Features",
            items: [
              { name: "Full LED headlights", value: "With daytime running lamps (with automatic light control mechanism)" },
              { name: "LED active cornering lights", value: "Included" },
              { name: "Hands-free access power tailgate", value: "With scheduled close function" },
              { name: "LED sequential turn signal lamp", value: "Front" },
              { name: "e:HEV Z exclusive exterior", value: "Sharp silver painted bumper lower garnish (front/rear), platinum chrome plated door lower garnish", highlighted: true },
              { name: "Deceleration Selector", value: "Included" },
              { name: "18-inch aluminum wheels + steel radial tires", value: "Included", highlighted: true },
            ],
          },
          {
            category: "Key Features",
            items: [
              { name: "Honda SENSING", value: "Included", highlighted: true },
            ],
          },
        ],
      },
    ],
  };
  
  // Check if Vezel already exists
  const existingVezel = allMakes[hondaIndex].models.find(m => m.name.toLowerCase() === 'vezel');
  if (!existingVezel) {
    allMakes[hondaIndex].models.push(vezelModel);
  }
} else {
  // Create Honda with Vezel
  allMakes.push({
    id: "honda",
    name: "Honda",
    models: [{
      id: "vezel",
      name: "Vezel",
      grades: [/* same as above */]
    }]
  });
}

// Generate TypeScript - use a simpler approach for now
// We'll write a JSON file and then convert it
const outputJsonPath = path.join(__dirname, '..', 'complete-vehicle-data.json');
fs.writeFileSync(outputJsonPath, JSON.stringify(allMakes, null, 2));
console.log(`\nComplete vehicle data written to: ${outputJsonPath}`);
console.log(`Total makes: ${allMakes.length}`);
allMakes.forEach(make => {
  const totalGrades = make.models.reduce((sum, m) => sum + m.grades.length, 0);
  console.log(`  ${make.name}: ${make.models.length} models, ${totalGrades} grades`);
});

console.log('\n⚠️  Next step: Review complete-vehicle-data.json and then convert to TypeScript format.');

