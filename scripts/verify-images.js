const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'vehicle-images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');

// Ensure public directory exists
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));

console.log(`Found ${files.length} image files\n`);

let validCount = 0;
let invalidCount = 0;
const invalidFiles = [];

files.forEach(file => {
  const filePath = path.join(imagesDir, file);
  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  
  // Read first few bytes to check JPEG header
  const buffer = fs.readFileSync(filePath);
  const isValidJPEG = buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
  
  if (isValidJPEG && stats.size > 1000) { // At least 1KB
    validCount++;
    // Copy to public folder
    const destPath = path.join(publicImagesDir, file);
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(filePath, destPath);
    }
  } else {
    invalidCount++;
    invalidFiles.push({ file, sizeKB, isValidJPEG });
    console.log(`⚠️  ${file}: ${sizeKB}KB - ${isValidJPEG ? 'Valid JPEG but too small' : 'Invalid JPEG header'}`);
  }
});

console.log(`\n✅ Valid images: ${validCount}`);
console.log(`❌ Invalid/Suspicious images: ${invalidCount}`);

if (invalidFiles.length > 0) {
  console.log('\n⚠️  These images may need to be re-extracted from Excel:');
  invalidFiles.slice(0, 10).forEach(({ file, sizeKB }) => {
    console.log(`   - ${file} (${sizeKB}KB)`);
  });
}

