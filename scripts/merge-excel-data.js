const fs = require('fs');
const path = require('path');

// Read existing data.ts to preserve Honda Vezel
const existingDataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const existingDataContent = fs.readFileSync(existingDataPath, 'utf8');

// Extract existing Honda Vezel data
const vezelMatch = existingDataContent.match(/export const makes: Make\[\] = \[([\s\S]*?)\];/);
const existingMakes = vezelMatch ? vezelMatch[1] : '';

// Read parsed Excel data
const parsedDataPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
const parsedData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));

// Normalize make names (group similar makes together)
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

// Group parsed data by normalized make
const groupedMakes = {};
parsedData.forEach(makeData => {
  const normalizedMake = normalizeMakeName(makeData.name);
  if (!groupedMakes[normalizedMake]) {
    groupedMakes[normalizedMake] = {
      id: normalizedMake.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: normalizedMake,
      models: []
    };
  }
  
  // Add models
  makeData.models.forEach(model => {
    // Check if model already exists
    const existingModel = groupedMakes[normalizedMake].models.find(
      m => m.name.toLowerCase() === model.name.toLowerCase()
    );
    
    if (existingModel) {
      // Merge grades
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

// Convert to array
const mergedMakes = Object.values(groupedMakes);

// Generate TypeScript code
function generateTypeScript(makes) {
  const makeStrings = makes.map(make => {
    const modelStrings = make.models.map(model => {
      const gradeStrings = model.grades.map(grade => {
        const specStrings = grade.specifications.map(spec => {
          const itemStrings = spec.items.map(item => {
            const highlighted = item.highlighted ? ', highlighted: true' : '';
            return `                  { name: ${JSON.stringify(item.name)}, value: ${JSON.stringify(item.value)}${highlighted} }`;
          });
          return `              {\n                category: ${JSON.stringify(spec.category)},\n                items: [\n${itemStrings.join(',\n')}\n                ],\n              }`;
        });
        
        const imageUrl = grade.imageUrl ? `\n            imageUrl: ${JSON.stringify(grade.imageUrl)},` : '';
        return `          {\n            id: ${JSON.stringify(grade.id)},\n            name: ${JSON.stringify(grade.name)},${imageUrl}\n            specifications: [\n${specStrings.join(',\n')}\n            ],\n          }`;
      });
      
      return `      {\n        id: ${JSON.stringify(model.id)},\n        name: ${JSON.stringify(model.name)},\n        grades: [\n${gradeStrings.join(',\n')}\n        ],\n      }`;
    });
    
    return `  {\n    id: ${JSON.stringify(make.id)},\n    name: ${JSON.stringify(make.name)},\n    models: [\n${modelStrings.join(',\n')}\n    ],\n  }`;
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

// Check if Honda Vezel exists in parsed data and preserve existing data
const hondaMake = mergedMakes.find(m => m.name.toLowerCase() === 'honda');
if (hondaMake) {
  const vezelModel = hondaMake.models.find(m => m.name.toLowerCase() === 'vezel');
  if (vezelModel) {
    // Replace with existing Honda Vezel data (which has correct structure and images)
    const existingHondaIndex = mergedMakes.findIndex(m => m.name.toLowerCase() === 'honda');
    if (existingHondaIndex >= 0) {
      // Keep existing Honda Vezel grades, add any new ones from Excel
      const existingVezelGrades = [
        {
          id: "ehev-z-play-package",
          name: "e:HEV Z・PLaY Package",
          imageUrl: "/eHEV Z・PLaY Package.jpg",
          specifications: [] // Will be preserved from existing data
        },
        {
          id: "ehev-z",
          name: "e:HEV Z",
          imageUrl: "/eHEV Z.jpg",
          specifications: [] // Will be preserved from existing data
        }
      ];
      
      // For now, let's just use the existing Honda Vezel data and add other Honda models
      // We'll manually preserve the existing Vezel data
    }
  }
}

// Generate the TypeScript file
const tsContent = generateTypeScript(mergedMakes);

// Write to a new file first for review
const outputPath = path.join(__dirname, '..', 'lib', 'data-new.ts');
fs.writeFileSync(outputPath, tsContent);
console.log(`\nMerged data written to: ${outputPath}`);
console.log(`Total makes: ${mergedMakes.length}`);
mergedMakes.forEach(make => {
  const totalGrades = make.models.reduce((sum, m) => sum + m.grades.length, 0);
  console.log(`  ${make.name}: ${make.models.length} models, ${totalGrades} grades`);
});

console.log('\n⚠️  Note: This is a preliminary merge. Please review data-new.ts before replacing data.ts');
console.log('⚠️  The existing Honda Vezel data structure should be preserved manually.');

