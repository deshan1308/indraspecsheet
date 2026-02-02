// Script to extract all vehicle makes and models from data.ts
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const content = fs.readFileSync(dataPath, 'utf8');

// Extract makes and models using regex
const makePattern = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*models:\s*\[/g;
const modelPattern = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*grades:/g;

const vehicles = [];
let makeMatch;
let currentMake = null;
let inModels = false;

const lines = content.split('\n');
let currentMakeId = null;
let currentMakeName = null;
let inMake = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect make start
  if (line.includes('id:') && line.includes('name:') && line.includes('models:')) {
    const makeIdMatch = line.match(/id:\s*"([^"]+)"/);
    const makeNameMatch = line.match(/name:\s*"([^"]+)"/);
    if (makeIdMatch && makeNameMatch) {
      currentMakeId = makeIdMatch[1];
      currentMakeName = makeNameMatch[1];
      vehicles.push({ make: currentMakeName, makeId: currentMakeId, models: [] });
    }
  }
  
  // Detect model start
  if (line.includes('id:') && line.includes('name:') && line.includes('grades:')) {
    const modelIdMatch = line.match(/id:\s*"([^"]+)"/);
    const modelNameMatch = line.match(/name:\s*"([^"]+)"/);
    if (modelIdMatch && modelNameMatch && vehicles.length > 0) {
      vehicles[vehicles.length - 1].models.push({
        id: modelIdMatch[1],
        name: modelNameMatch[1]
      });
    }
  }
}

console.log(JSON.stringify(vehicles, null, 2));
