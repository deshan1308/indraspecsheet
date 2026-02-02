const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');

if (!fs.existsSync(publicImagesDir)) {
  console.log('public/vehicle-images directory does not exist');
  process.exit(0);
}

const files = fs.readdirSync(publicImagesDir).filter(f => f.endsWith('.jpg'));

console.log(`Found ${files.length} files in public/vehicle-images\n`);

let validCount = 0;
let removedCount = 0;

files.forEach(file => {
  const filePath = path.join(publicImagesDir, file);
  const stats = fs.statSync(filePath);
  
  // Read first few bytes to check JPEG header
  const buffer = fs.readFileSync(filePath);
  const isValidJPEG = buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
  
  // Only keep valid JPEGs that are at least 2KB
  if (isValidJPEG && stats.size > 2048) {
    validCount++;
  } else {
    // Remove invalid/corrupted images
    fs.unlinkSync(filePath);
    removedCount++;
    console.log(`❌ Removed: ${file} (${(stats.size/1024).toFixed(2)}KB, ${isValidJPEG ? 'too small' : 'invalid JPEG'})`);
  }
});

console.log(`\n✅ Valid images: ${validCount}`);
console.log(`❌ Removed invalid images: ${removedCount}`);

