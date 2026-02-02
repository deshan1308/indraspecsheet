const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// Fix duplicate imageUrl properties in grade objects
// Pattern: multiple imageUrl properties in the same object
const duplicatePattern = /(imageUrl:\s*"[^"]+",\s*)+/g;

// Replace multiple consecutive imageUrl properties with just the first one
content = content.replace(/(imageUrl:\s*"[^"]+",\s*)+/g, (match) => {
  // Extract the first imageUrl
  const firstMatch = match.match(/imageUrl:\s*"([^"]+)",/);
  if (firstMatch) {
    return `imageUrl: "${firstMatch[1]}",\n            `;
  }
  return match;
});

// Also fix cases where imageUrl appears multiple times in the same grade object
// Look for grade objects with multiple imageUrls
const gradePattern = /(\{\s*id:\s*"[^"]+",\s*name:\s*"[^"]+",)([\s\S]*?)(specifications:)/g;

content = content.replace(gradePattern, (match, start, middle, end) => {
  // Find all imageUrl properties in the middle section
  const imageUrlMatches = middle.matchAll(/imageUrl:\s*"([^"]+)",/g);
  const imageUrls = Array.from(imageUrlMatches);
  
  if (imageUrls.length > 1) {
    // Keep only the first imageUrl
    const firstImageUrl = imageUrls[0][0];
    // Remove all other imageUrl properties
    let cleanedMiddle = middle.replace(/imageUrl:\s*"[^"]+",\s*/g, '');
    // Add back the first one
    cleanedMiddle = cleanedMiddle.trim() + '\n            ' + firstImageUrl + '\n            ';
    return start + cleanedMiddle + end;
  }
  
  return match;
});

fs.writeFileSync(dataPath, content);
console.log('✅ Fixed duplicate imageUrl properties');

