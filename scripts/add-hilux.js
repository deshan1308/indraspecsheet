const fs = require('fs');
const path = require('path');

// Read the HILUX JSON file
const hiluxJsonPath = path.join(__dirname, '..', 'sheet-20-TOYOTA_HILUX.json');
const hiluxData = JSON.parse(fs.readFileSync(hiluxJsonPath, 'utf8'));

// Parse the 2D array format
function parse2DArrayToSpecs(data) {
  const specs = [];
  let currentCategory = null;
  let currentItems = [];
  
  // Find grade names from first row
  const gradeNames = [];
  if (data[0]) {
    for (let i = 2; i < data[0].length; i++) {
      if (data[0][i] && data[0][i].trim()) {
        gradeNames.push(data[0][i].trim());
      }
    }
  }
  
  // Process each grade
  const grades = gradeNames.map((gradeName, gradeIndex) => {
    const gradeSpecs = [];
    let currentCategory = null;
    let currentItems = [];
    
    // Column index for this grade (gradeIndex + 2, since first 2 columns are labels)
    const colIndex = gradeIndex + 2;
    
    for (let rowIndex = 1; rowIndex < data.length; rowIndex++) {
      const row = data[rowIndex];
      if (!row) continue;
      
      const categoryCell = row[0];
      const itemNameCell = row[1];
      const valueCell = row[colIndex];
      
      // Check if this is a category row
      if (categoryCell && categoryCell.trim() && !itemNameCell) {
        // Save previous category if exists
        if (currentCategory && currentItems.length > 0) {
          gradeSpecs.push({
            category: currentCategory,
            items: currentItems
          });
        }
        // Start new category
        currentCategory = categoryCell.trim();
        currentItems = [];
      }
      // Check if this is an item row
      else if (itemNameCell && itemNameCell.trim() && valueCell && valueCell.toString().trim()) {
        currentItems.push({
          name: itemNameCell.trim(),
          value: valueCell.toString().trim()
        });
      }
    }
    
    // Save last category
    if (currentCategory && currentItems.length > 0) {
      gradeSpecs.push({
        category: currentCategory,
        items: currentItems
      });
    }
    
    return {
      name: gradeName,
      specifications: gradeSpecs
    };
  });
  
  return grades;
}

const hiluxGrades = parse2DArrayToSpecs(hiluxData);

// Generate TypeScript code for HILUX model
function escapeString(str) {
  return JSON.stringify(str);
}

function generateGradeTS(grade) {
  const specStrings = grade.specifications.map(spec => {
    const itemStrings = spec.items.map(item => {
      return `                  { name: ${escapeString(item.name)}, value: ${escapeString(item.value)} }`;
    });
    return `              {
                category: ${escapeString(spec.category)},
                items: [
${itemStrings.join(',\n')}
                ],
              }`;
  });
  
  const gradeId = grade.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/\s+/g, '-');
  const imageUrl = grade.name.includes('GR Sport') 
    ? `\n            imageUrl: "/Double Cab 4x4 2.8 GR Sport AT.png",`
    : grade.name.includes('Rocco')
    ? `\n            imageUrl: "/Double Cab 4x4 2.8 Rocco AT.png",`
    : '';
  
  return `          {
            id: ${escapeString(gradeId)},
            name: ${escapeString(grade.name)},${imageUrl}
            specifications: [
${specStrings.join(',\n')}
            ],
          }`;
}

const gradeStrings = hiluxGrades.map(g => generateGradeTS(g)).join(',\n');

const hiluxModelTS = `      {
        id: "hilux",
        name: "Hilux",
        grades: [
${gradeStrings}
        ],
      },`;

console.log('Generated HILUX model TypeScript:');
console.log(hiluxModelTS);

// Now read data.ts and insert HILUX before Honda
const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
const dataTsContent = fs.readFileSync(dataTsPath, 'utf8');

// Find where to insert (before Honda make)
const insertMarker = '  },\n  {\n    id: "honda",';
const insertPosition = dataTsContent.indexOf(insertMarker);

if (insertPosition === -1) {
  console.error('Could not find insertion point for HILUX');
  process.exit(1);
}

// Insert HILUX model before the closing of Toyota models array
const beforeInsert = dataTsContent.substring(0, insertPosition);
const afterInsert = dataTsContent.substring(insertPosition);

// Find the last model closing bracket in Toyota section
const lastModelEnd = beforeInsert.lastIndexOf('        ],\n      },\n    ],\n  },');
if (lastModelEnd === -1) {
  console.error('Could not find last Toyota model end');
  process.exit(1);
}

const newContent = 
  beforeInsert.substring(0, lastModelEnd + '        ],\n      },\n'.length) +
  hiluxModelTS + '\n' +
  beforeInsert.substring(lastModelEnd + '        ],\n      },\n'.length) +
  afterInsert;

// Write back
fs.writeFileSync(dataTsPath, newContent);
console.log('\n✅ Successfully added HILUX to data.ts');
