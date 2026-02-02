const fs = require('fs');
const path = require('path');

// Read FOTON JSON files
const truckPath = path.join(__dirname, '..', 'sheet-50-FOTON_Truck.json');
const busPath = path.join(__dirname, '..', 'sheet-51-FOTON_Bus.json');

const truckData = JSON.parse(fs.readFileSync(truckPath, 'utf8'));
const busData = JSON.parse(fs.readFileSync(busPath, 'utf8'));

// Convert JSON array format to specifications
function convertToSpecifications(data, modelIndex) {
  const specifications = [];
  let currentCategory = '';
  
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (!row || row.length === 0) continue;
    
    const category = row[0] || '';
    const itemName = row[1] || '';
    const value = row[modelIndex];
    
    // Skip empty rows or rows without values
    if (!category && !itemName && !value) continue;
    
    // New category
    if (category && category.trim() && category !== currentCategory) {
      currentCategory = category.trim();
      // Find or create category
      let specCategory = specifications.find(s => s.category === currentCategory);
      if (!specCategory) {
        specCategory = { category: currentCategory, items: [] };
        specifications.push(specCategory);
      }
    }
    
    // Add item if we have a value
    if (value !== undefined && value !== null && value !== '' && itemName) {
      const currentSpec = specifications[specifications.length - 1];
      if (currentSpec) {
        currentSpec.items.push({
          name: itemName.trim(),
          value: String(value).trim()
        });
      }
    } else if (value !== undefined && value !== null && value !== '' && !itemName && category) {
      // Value without item name - use category as name
      const currentSpec = specifications[specifications.length - 1];
      if (currentSpec) {
        currentSpec.items.push({
          name: category.trim(),
          value: String(value).trim()
        });
      }
    }
  }
  
  return specifications;
}

// Process Truck models
const truckModels = [];
const truckHeaders = truckData[0];
for (let i = 2; i < truckHeaders.length; i++) {
  const modelName = truckHeaders[i];
  if (!modelName || modelName.trim() === '') continue;
  
  const modelCode = truckData[2] ? truckData[2][i] : '';
  const fullName = modelCode ? `${modelName.trim()} (${modelCode.trim()})` : modelName.trim();
  
  const specifications = convertToSpecifications(truckData, i);
  
  truckModels.push({
    id: modelName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/\s+/g, '-'),
    name: modelName.trim(),
    specifications: specifications,
    imageUrl: `/${modelName.trim()}.png`
  });
}

// Process Bus model
const busHeaders = busData[0];
const busModelName = busHeaders[2] || '37 Seater';
const busSpecifications = convertToSpecifications(busData, 2);

const busModel = {
  id: '37-seater',
  name: busModelName.trim(),
  specifications: busSpecifications,
  imageUrl: '/37 SEATER.png'
};

// Create FOTON make structure
const fotonMake = {
  id: 'foton',
  name: 'Foton',
  models: [
    {
      id: 'truck',
      name: 'Truck',
      grades: truckModels
    },
    {
      id: 'bus',
      name: 'Bus',
      grades: [busModel]
    }
  ]
};

// Convert to TypeScript format
function escapeString(str) {
  return JSON.stringify(str);
}

function generateGradeTypeScript(grade) {
  const specStrings = grade.specifications.map(spec => {
    const itemStrings = spec.items.map(item => {
      return `                  { name: ${escapeString(item.name)}, value: ${escapeString(item.value)} }`;
    });
    return `              {\n                category: ${escapeString(spec.category)},\n                items: [\n${itemStrings.join(',\n')}\n                ],\n              }`;
  });
  
  const imageUrl = grade.imageUrl ? `\n            imageUrl: ${escapeString(grade.imageUrl)},` : '';
  return `          {\n            id: ${escapeString(grade.id)},\n            name: ${escapeString(grade.name)},${imageUrl}\n            specifications: [\n${specStrings.join(',\n')}\n            ],\n          }`;
}

function generateModelTypeScript(model) {
  const gradeStrings = model.grades.map(generateGradeTypeScript);
  return `      {\n        id: ${escapeString(model.id)},\n        name: ${escapeString(model.name)},\n        grades: [\n${gradeStrings.join(',\n')}\n        ],\n      }`;
}

function generateMakeTypeScript(make) {
  const modelStrings = make.models.map(generateModelTypeScript);
  return `  {\n    id: ${escapeString(make.id)},\n    name: ${escapeString(make.name)},\n    models: [\n${modelStrings.join(',\n')}\n    ],\n  }`;
}

const fotonTypeScript = generateMakeTypeScript(fotonMake);

console.log('FOTON TypeScript structure generated:');
console.log(fotonTypeScript);

// Read existing data.ts
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Find the closing bracket of makes array
const makesArrayEnd = dataContent.lastIndexOf('];');
if (makesArrayEnd === -1) {
  console.error('Could not find makes array end');
  process.exit(1);
}

// Insert FOTON before the closing bracket
const beforeClosing = dataContent.substring(0, makesArrayEnd);
const afterClosing = dataContent.substring(makesArrayEnd);

// Add comma after last make if needed
let newContent = beforeClosing;
if (!beforeClosing.trim().endsWith(',')) {
  newContent += ',';
}

newContent += '\n' + fotonTypeScript + '\n' + afterClosing;

// Write back
fs.writeFileSync(dataPath, newContent);
console.log('\n✅ FOTON added to data.ts successfully!');
