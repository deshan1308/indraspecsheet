const fs = require('fs');
const path = require('path');

// Read the data file to get all vehicles
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Extract makes array
const makesMatch = dataContent.match(/export const makes: Make\[\] = \[([\s\S]*?)\];/);
if (!makesMatch) {
  console.error('Could not find makes array');
  process.exit(1);
}

// Parse the makes (simplified - we'll use regex to find grade IDs and names)
const gradePattern = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",(?:\s*imageUrl:\s*"([^"]+)",)?/g;
const grades = [];
let match;

while ((match = gradePattern.exec(makesMatch[1])) !== null) {
  grades.push({
    id: match[1],
    name: match[2],
    imageUrl: match[3] || null
  });
}

console.log(`Found ${grades.length} grades in data.ts`);

// Check public folder for images
const publicDir = path.join(__dirname, '..', 'public');
const imageFiles = fs.readdirSync(publicDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
});

console.log(`\nFound ${imageFiles.length} images in public folder:`);
imageFiles.forEach(file => console.log(`  - ${file}`));

// Try to match images to grades based on filename patterns
const imageMapping = {};

imageFiles.forEach(imageFile => {
  const imageName = path.basename(imageFile, path.extname(imageFile)).toLowerCase();
  
  // Try to find matching grade
  const matchingGrade = grades.find(grade => {
    const gradeId = grade.id.toLowerCase();
    const gradeName = grade.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Check various patterns
    return imageName.includes(gradeId) || 
           imageName.includes(gradeName) ||
           gradeName.includes(imageName) ||
           imageName.includes(gradeId.replace(/-/g, ''));
  });
  
  if (matchingGrade) {
    if (!imageMapping[matchingGrade.id]) {
      imageMapping[matchingGrade.id] = [];
    }
    imageMapping[matchingGrade.id].push(`/${imageFile}`);
  }
});

console.log('\n📝 Image mapping suggestions:');
Object.keys(imageMapping).forEach(gradeId => {
  const grade = grades.find(g => g.id === gradeId);
  console.log(`\n  Grade: ${grade.name} (${gradeId})`);
  imageMapping[gradeId].forEach(img => console.log(`    → ${img}`));
});

// Generate update script
const updateScript = `// Auto-generated image mapping
// Run this to update imageUrl in data.ts

const imageMap = ${JSON.stringify(imageMapping, null, 2)};

// For each grade, update imageUrl if not already set
grades.forEach(grade => {
  if (!grade.imageUrl && imageMap[grade.id] && imageMap[grade.id].length > 0) {
    grade.imageUrl = imageMap[grade.id][0];
  }
});
`;

fs.writeFileSync(path.join(__dirname, '..', 'image-mapping-suggestions.json'), JSON.stringify({
  mapping: imageMapping,
  grades: grades.map(g => ({ id: g.id, name: g.name, currentImageUrl: g.imageUrl }))
}, null, 2));

console.log('\n✅ Image mapping suggestions saved to image-mapping-suggestions.json');

