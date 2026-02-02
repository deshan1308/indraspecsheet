const fs = require('fs');
const path = require('path');

// Read existing data.ts (has correct Honda Vezel)
const existingDataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const existingDataContent = fs.readFileSync(existingDataPath, 'utf8');

// Extract Honda Vezel from existing data
const hondaVezelMatch = existingDataContent.match(/export const makes: Make\[\] = \[([\s\S]*?)\];/);
if (!hondaVezelMatch) {
  console.error('Could not find makes array in existing data.ts');
  process.exit(1);
}

const existingMakesContent = hondaVezelMatch[1];
const hondaMatch = existingMakesContent.match(/\{\s*id: "honda"([\s\S]*?)\n\s+\},/);
if (!hondaMatch) {
  console.error('Could not find Honda in existing data.ts');
  process.exit(1);
}

const existingHonda = `  {
    id: "honda",
    name: "Honda",${hondaMatch[1]}
  }`;

// Read generated data
const generatedDataPath = path.join(__dirname, '..', 'lib', 'data-generated.ts');
const generatedDataContent = fs.readFileSync(generatedDataPath, 'utf8');

// Extract all makes except Honda from generated data
const generatedMakesMatch = generatedDataContent.match(/export const makes: Make\[\] = \[([\s\S]*?)\];/);
if (!generatedMakesMatch) {
  console.error('Could not find makes array in generated data');
  process.exit(1);
}

const generatedMakesContent = generatedMakesMatch[1];

// Split by make entries and filter out Honda
const makeEntries = [];
let currentMake = '';
let braceCount = 0;
let inHonda = false;

for (let i = 0; i < generatedMakesContent.length; i++) {
  const char = generatedMakesContent[i];
  currentMake += char;
  
  if (char === '{') {
    braceCount++;
    // Check if this is the start of Honda
    if (braceCount === 1) {
      const remaining = generatedMakesContent.substring(i);
      if (remaining.match(/^\{\s*id:\s*"honda"/)) {
        inHonda = true;
      }
    }
  } else if (char === '}') {
    braceCount--;
    if (braceCount === 0) {
      if (!inHonda) {
        makeEntries.push(currentMake.trim());
      }
      currentMake = '';
      inHonda = false;
    }
  }
}

// Combine: existing Honda + other makes from generated
const allMakes = [existingHonda, ...makeEntries];

// Generate final TypeScript
const finalContent = `// Vehicle data structure: Make → Model → Grade → Specifications

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
${allMakes.join(',\n')}
];
`;

// Write to new file for review
const outputPath = path.join(__dirname, '..', 'lib', 'data-merged.ts');
fs.writeFileSync(outputPath, finalContent);
console.log(`\nMerged data written to: ${outputPath}`);
console.log(`Total makes: ${allMakes.length}`);
console.log('\n⚠️  Please review data-merged.ts before replacing data.ts');

