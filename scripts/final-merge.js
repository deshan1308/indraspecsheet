const fs = require('fs');
const path = require('path');

// Read existing data.ts (has correct Honda Vezel)
const existingDataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const existingDataContent = fs.readFileSync(existingDataPath, 'utf8');

// Extract the Honda make object from existing data
const makesMatch = existingDataContent.match(/export const makes: Make\[\] = \[([\s\S]*?)\];/);
if (!makesMatch) {
  console.error('Could not find makes array');
  process.exit(1);
}

const existingHondaContent = makesMatch[1].trim();
const hondaStart = existingHondaContent.indexOf('id: "honda"');
const hondaEnd = existingHondaContent.indexOf('},', hondaStart);
if (hondaStart === -1 || hondaEnd === -1) {
  console.error('Could not find Honda in existing data');
  process.exit(1);
}

// Extract Honda section (including the opening brace and proper indentation)
let hondaSection = existingHondaContent.substring(
  existingHondaContent.lastIndexOf('{', hondaStart),
  hondaEnd + 2
);

// Read generated data
const generatedDataPath = path.join(__dirname, '..', 'lib', 'data-generated.ts');
const generatedDataContent = fs.readFileSync(generatedDataPath, 'utf8');

// Find Honda section in generated data and replace it
const generatedMakesMatch = generatedDataContent.match(/export const makes: Make\[\] = \[([\s\S]*?)\];/);
if (!generatedMakesMatch) {
  console.error('Could not find makes array in generated data');
  process.exit(1);
}

let generatedMakesContent = generatedMakesMatch[1];

// Find Honda section in generated data
const genHondaStart = generatedMakesContent.indexOf('id: "honda"');
if (genHondaStart === -1) {
  console.error('Could not find Honda in generated data');
  process.exit(1);
}

// Find the start of the Honda make object (go back to find opening brace)
let hondaObjStart = genHondaStart;
while (hondaObjStart > 0 && generatedMakesContent[hondaObjStart] !== '{') {
  hondaObjStart--;
}

// Find the end of the Honda make object (find matching closing brace)
// Look for the pattern: },  (closing brace, comma, space/newline) which indicates end of a make object
let braceCount = 0;
let hondaObjEnd = hondaObjStart;
let foundEnd = false;
for (let i = hondaObjStart; i < generatedMakesContent.length; i++) {
  if (generatedMakesContent[i] === '{') braceCount++;
  if (generatedMakesContent[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      // Check if this is followed by a comma (end of make object in array)
      let j = i + 1;
      // Skip whitespace
      while (j < generatedMakesContent.length && (generatedMakesContent[j] === ' ' || generatedMakesContent[j] === '\n' || generatedMakesContent[j] === '\r' || generatedMakesContent[j] === '\t')) {
        j++;
      }
      // If next is comma, this is the end of the Honda make object
      if (j < generatedMakesContent.length && generatedMakesContent[j] === ',') {
        hondaObjEnd = j + 1;
        foundEnd = true;
        break;
      }
    }
  }
}

if (!foundEnd) {
  console.error('Could not find end of Honda object in generated data');
  process.exit(1);
}

// Get indentation from the Honda section
const beforeHonda = generatedMakesContent.substring(0, hondaObjStart);
const indentMatch = beforeHonda.match(/(\s+)$/);
const indent = indentMatch ? indentMatch[1] : '  ';

// Adjust indentation of existing Honda section to match
const lines = hondaSection.split('\n');
const adjustedHonda = lines.map((line, idx) => {
  if (idx === 0) return indent + line.trim();
  if (line.trim() === '') return '';
  return indent + line;
}).join('\n');

// Replace Honda section in generated data with existing Honda (which has Vezel)
// This preserves all other makes from generated data (Toyota, Suzuki, Nissan, etc.)
const beforeHondaSection = generatedMakesContent.substring(0, hondaObjStart);
const afterHondaSection = generatedMakesContent.substring(hondaObjEnd);
const mergedMakesContent = beforeHondaSection + adjustedHonda + '\n' + afterHondaSection;

// Verify merged content includes Nissan and other makes
console.log('Verifying merged content...');
console.log('  Before Honda length:', beforeHondaSection.length);
console.log('  Honda section length:', adjustedHonda.length);
console.log('  After Honda length:', afterHondaSection.length);
console.log('  Total merged length:', mergedMakesContent.length);
console.log('  Original generated length:', generatedMakesContent.length);

if (!mergedMakesContent.includes('id: "nissan"')) {
  console.warn('⚠️  Warning: Nissan not found in merged content!');
  console.warn('Checking after Honda section...');
  console.warn('  After Honda starts with:', afterHondaSection.substring(0, 200));
} else {
  console.log('✅ Nissan found in merged content');
}

// Create final content - use the full generated content structure but with merged Honda
// This ensures all makes from generated data (including Nissan) are included
const finalContent = generatedDataContent.replace(
  /export const makes: Make\[\] = \[([\s\S]*?)\];/,
  `export const makes: Make[] = [${mergedMakesContent}];`
);

// Write to data.ts
const outputPath = path.join(__dirname, '..', 'lib', 'data.ts');
fs.writeFileSync(outputPath, finalContent);
console.log(`\n✅ Successfully merged data!`);
console.log(`✅ Updated: ${outputPath}`);
console.log(`\n⚠️  Please test the application to ensure everything works correctly.`);

