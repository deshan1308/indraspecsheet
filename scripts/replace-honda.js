const fs = require('fs');
const path = require('path');

// Read the generated file
const filePath = path.join(__dirname, '..', 'lib', 'data.ts');
const content = fs.readFileSync(filePath, 'utf8');

// The correct Honda Vezel data
const correctHonda = `  {
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

// Find Honda section and replace it
const hondaStartPattern = /\{\s*id:\s*"honda"/;
const hondaStartMatch = content.match(hondaStartPattern);
if (!hondaStartMatch) {
  console.error('Could not find Honda section');
  process.exit(1);
}

const hondaStartIndex = hondaStartMatch.index;
// Find the opening brace
let braceStart = hondaStartIndex;
while (braceStart > 0 && content[braceStart] !== '{') {
  braceStart--;
}

// Find the matching closing brace (Honda section ends before Nissan)
const nissanPattern = /\{\s*id:\s*"nissan"/;
const nissanMatch = content.match(nissanPattern);
if (!nissanMatch) {
  console.error('Could not find Nissan section (to determine Honda end)');
  process.exit(1);
}

const hondaEndIndex = nissanMatch.index;
// Go back to find the closing brace and comma
let hondaEnd = hondaEndIndex;
while (hondaEnd > 0 && content[hondaEnd] !== '}') {
  hondaEnd--;
}
// Include the closing brace and any trailing whitespace/comma
while (hondaEnd < content.length && (content[hondaEnd] === '}' || content[hondaEnd] === ',' || content[hondaEnd] === ' ' || content[hondaEnd] === '\n' || content[hondaEnd] === '\t')) {
  hondaEnd++;
  if (content[hondaEnd - 1] === ',' && (content[hondaEnd] === ' ' || content[hondaEnd] === '\n')) {
    break;
  }
}

// Replace Honda section
const beforeHonda = content.substring(0, braceStart);
const afterHonda = content.substring(hondaEnd);
const newContent = beforeHonda + correctHonda + ',\n' + afterHonda;

// Write back
fs.writeFileSync(filePath, newContent);
console.log('✅ Successfully replaced Honda section with correct Honda Vezel data!');

