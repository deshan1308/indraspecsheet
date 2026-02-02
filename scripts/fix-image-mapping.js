const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'vehicle-images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');

// Ensure public directory exists
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Get all valid image files
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));
const validImages = [];

files.forEach(file => {
  const filePath = path.join(imagesDir, file);
  const stats = fs.statSync(filePath);
  
  // Read first few bytes to check JPEG header
  const buffer = fs.readFileSync(filePath);
  const isValidJPEG = buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
  
  // Only include valid JPEGs that are at least 2KB (to filter out tiny/corrupted ones)
  if (isValidJPEG && stats.size > 2048) {
    validImages.push(file);
    // Copy to public folder
    const destPath = path.join(publicImagesDir, file);
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(filePath, destPath);
    }
  }
});

console.log(`✅ Found ${validImages.length} valid images (copied to public/vehicle-images)`);

// Read data.ts
let content = fs.readFileSync(dataPath, 'utf8');

// Find all imageUrl references
const imageUrlRegex = /imageUrl:\s*"([^"]+)"/g;
const matches = [...content.matchAll(imageUrlRegex)];

console.log(`\nFound ${matches.length} imageUrl references in data.ts`);

// Check which imageUrls point to non-existent or invalid images
let fixedCount = 0;
const missingImages = new Set();

matches.forEach(match => {
  const imagePath = match[1];
  const imageName = imagePath.replace('/vehicle-images/', '');
  
  // Check if image exists and is valid
  const imagePathInPublic = path.join(publicImagesDir, imageName);
  const imagePathInRoot = path.join(imagesDir, imageName);
  
  let isValid = false;
  if (fs.existsSync(imagePathInPublic)) {
    const stats = fs.statSync(imagePathInPublic);
    const buffer = fs.readFileSync(imagePathInPublic);
    isValid = buffer[0] === 0xFF && buffer[1] === 0xD8 && stats.size > 2048;
  } else if (fs.existsSync(imagePathInRoot)) {
    const stats = fs.statSync(imagePathInRoot);
    const buffer = fs.readFileSync(imagePathInRoot);
    isValid = buffer[0] === 0xFF && buffer[1] === 0xD8 && stats.size > 2048;
    if (isValid) {
      // Copy to public
      fs.copyFileSync(imagePathInRoot, imagePathInPublic);
    }
  }
  
  if (!isValid) {
    missingImages.add(imageName);
    // Remove the imageUrl line
    const fullMatch = match[0];
    content = content.replace(fullMatch + ',?\s*\n', '');
    content = content.replace(fullMatch + ',', '');
    fixedCount++;
  }
});

if (fixedCount > 0) {
  fs.writeFileSync(dataPath, content);
  console.log(`\n✅ Removed ${fixedCount} invalid imageUrl references`);
  console.log(`\n⚠️  Missing/Invalid images:`);
  Array.from(missingImages).slice(0, 10).forEach(img => {
    console.log(`   - ${img}`);
  });
} else {
  console.log(`\n✅ All imageUrl references are valid!`);
}

// Summary
console.log(`\n📊 Summary:`);
console.log(`   Valid images available: ${validImages.length}`);
console.log(`   Invalid imageUrl references removed: ${fixedCount}`);

