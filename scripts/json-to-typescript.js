const fs = require('fs');
const path = require('path');

// Read the parsed JSON data
const jsonPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
if (!fs.existsSync(jsonPath)) {
  console.error('Please run convert-excel-to-data.js first!');
  process.exit(1);
}

const parsedData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Normalize make names
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

// Group by normalized make
const groupedMakes = {};
parsedData.forEach(makeData => {
  const normalizedMake = normalizeMakeName(makeData.name);
  const originalMakeName = makeData.name.toUpperCase().trim();
  
  // Check if this is a make name that should actually be a model
  // e.g., "HONDA WR" should be Honda -> WR model
  let modelName = null;
  if (normalizedMake === 'Honda' && originalMakeName !== 'HONDA' && originalMakeName.startsWith('HONDA')) {
    // Extract model name (e.g., "HONDA WR" -> "WR", "HONDA FIT" -> "FIT")
    modelName = originalMakeName.replace(/^HONDA\s+/, '').trim();
    console.log(`Processing ${makeData.name} as Honda model: ${modelName}`);
  } else if (normalizedMake === 'Nissan' && originalMakeName !== 'NISSAN' && originalMakeName.startsWith('NISSAN')) {
    // Extract model name (e.g., "NISSAN X TRAIL" -> "X TRAIL", "NISSAN CLIPPER" -> "CLIPPER")
    modelName = originalMakeName.replace(/^NISSAN\s+/, '').trim();
    console.log(`Processing ${makeData.name} as Nissan model: ${modelName}`);
  }
  
  if (!groupedMakes[normalizedMake]) {
    groupedMakes[normalizedMake] = {
      id: normalizedMake.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: normalizedMake,
      models: []
    };
  }
  
  // If this should be a model, combine all models into one
  if (modelName) {
    // Collect all grades from all models under this make entry
    const allGrades = [];
    makeData.models.forEach(model => {
      model.grades.forEach(grade => {
        // Skip placeholder/invalid grades
        if (grade.id && grade.name && grade.name !== 'SPECIFICATION' && grade.name !== 'Details') {
          allGrades.push(grade);
        }
      });
    });
    
    // Only create model if we have valid grades
    if (allGrades.length > 0) {
      // Create or find the model
      const modelId = modelName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      let existingModel = groupedMakes[normalizedMake].models.find(
        m => m.id === modelId || m.name.toLowerCase() === modelName.toLowerCase()
      );
      
      if (existingModel) {
        // Merge grades
        allGrades.forEach(grade => {
          const existingGrade = existingModel.grades.find(
            g => g.id === grade.id || g.name.toLowerCase() === grade.name.toLowerCase()
          );
          if (!existingGrade) {
            existingModel.grades.push(grade);
          }
        });
      } else {
        // Create new model
        groupedMakes[normalizedMake].models.push({
          id: modelId,
          name: modelName,
          grades: allGrades
        });
      }
    }
  } else {
    // Normal processing - add models as-is
    makeData.models.forEach(model => {
      const existingModel = groupedMakes[normalizedMake].models.find(
        m => m.id === model.id || m.name.toLowerCase() === model.name.toLowerCase()
      );
      
      if (existingModel) {
        model.grades.forEach(grade => {
          const existingGrade = existingModel.grades.find(
            g => g.id === grade.id || g.name.toLowerCase() === grade.name.toLowerCase()
          );
          if (!existingGrade) {
            existingModel.grades.push(grade);
          }
        });
      } else {
        groupedMakes[normalizedMake].models.push(model);
      }
    });
  }
});

const allMakes = Object.values(groupedMakes);

// Convert to TypeScript string
function escapeString(str) {
  return JSON.stringify(str);
}

function generateTypeScript(makes) {
  const makeStrings = makes.map(make => {
    const modelStrings = make.models.map(model => {
      const gradeStrings = model.grades.map(grade => {
        const specStrings = grade.specifications.map(spec => {
          const itemStrings = spec.items.map(item => {
            const highlighted = item.highlighted ? ', highlighted: true' : '';
            return `                  { name: ${escapeString(item.name)}, value: ${escapeString(item.value)}${highlighted} }`;
          });
          return `              {\n                category: ${escapeString(spec.category)},\n                items: [\n${itemStrings.join(',\n')}\n                ],\n              }`;
        });
        
        const imageUrl = grade.imageUrl ? `\n            imageUrl: ${escapeString(grade.imageUrl)},` : '';
        return `          {\n            id: ${escapeString(grade.id)},\n            name: ${escapeString(grade.name)},${imageUrl}\n            specifications: [\n${specStrings.join(',\n')}\n            ],\n          }`;
      });
      
      return `      {\n        id: ${escapeString(model.id)},\n        name: ${escapeString(model.name)},\n        grades: [\n${gradeStrings.join(',\n')}\n        ],\n      }`;
    });
    
    return `  {\n    id: ${escapeString(make.id)},\n    name: ${escapeString(make.name)},\n    models: [\n${modelStrings.join(',\n')}\n    ],\n  }`;
  });
  
  return `// Vehicle data structure: Make → Model → Grade → Specifications

export interface Specification {
  category: string;
  items: { name: string; value: string; highlighted?: boolean }[];
}

export interface Grade {
  id: string;
  name: string;
  specifications: Specification[];
  imageUrl?: string;
}

export interface Model {
  id: string;
  name: string;
  grades: Grade[];
}

export interface Make {
  id: string;
  name: string;
  models: Model[];
}

export const makes: Make[] = [
${makeStrings.join(',\n')}
];
`;
}

// Generate TypeScript
const tsContent = generateTypeScript(allMakes);

// Write to file
const outputPath = path.join(__dirname, '..', 'lib', 'data-generated.ts');
fs.writeFileSync(outputPath, tsContent);
console.log(`\nGenerated TypeScript file: ${outputPath}`);
console.log(`Total makes: ${allMakes.length}`);
allMakes.forEach(make => {
  const totalGrades = make.models.reduce((sum, m) => sum + m.grades.length, 0);
  const modelNames = make.models.map(m => m.name).join(', ');
  console.log(`  ${make.name}: ${make.models.length} models (${modelNames}), ${totalGrades} grades`);
  // Check for specific models
  if (make.name === 'Honda') {
    const hasFit = make.models.some(m => m.name.toLowerCase().includes('fit'));
    const hasWr = make.models.some(m => m.name.toLowerCase().includes('wr'));
    console.log(`    - Has FIT: ${hasFit}, Has WR: ${hasWr}`);
  }
  if (make.name === 'Nissan') {
    const hasXTrail = make.models.some(m => m.name.toLowerCase().includes('trail'));
    const hasClipper = make.models.some(m => m.name.toLowerCase().includes('clipper'));
    console.log(`    - Has X TRAIL: ${hasXTrail}, Has CLIPPER: ${hasClipper}`);
  }
});

console.log('\n⚠️  Note: This is generated from Excel data. Please review and merge with existing Honda Vezel data manually.');

