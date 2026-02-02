const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// Remove imageUrl from Model objects (objects that have "grades:" after them)
// Pattern: id: "...", name: "...", imageUrl: ..., grades:
content = content.replace(/(id:\s*"[^"]+",\s*name:\s*"[^"]+",)\s*imageUrl:[^,]+,(\s*grades:)/g, '$1$2');

// Also remove imageUrl from Make objects
content = content.replace(/(\{\s*id:\s*"[^"]+",\s*name:\s*"[^"]+",)\s*imageUrl:[^,]+,(\s*models:)/g, '$1$2');

fs.writeFileSync(dataPath, content);
console.log('✅ Removed imageUrl from Make and Model objects');

