const fs = require('fs');
const path = require('path');

// Read the data file
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Check for extracted images
const vehicleImagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');
if (!fs.existsSync(vehicleImagesDir)) {
  console.log('⚠️  vehicle-images folder not found. Please extract images from Excel first.');
  console.log('📝 See EXTRACT_IMAGES_VBA.txt for VBA macro instructions.');
  process.exit(1);
}

const imageFiles = fs.readdirSync(vehicleImagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
});

if (imageFiles.length === 0) {
  console.log('⚠️  No images found in vehicle-images folder.');
  console.log('📝 Please extract images from Excel first using the VBA macro.');
  process.exit(1);
}

console.log(`Found ${imageFiles.length} images to map\n`);

// Extract all grades from data.ts
const gradePattern = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",(?:\s*imageUrl:\s*"([^"]+)",)?/g;
const grades = [];
let match;

while ((match = gradePattern.exec(dataContent)) !== null) {
  grades.push({
    id: match[1],
    name: match[2],
    imageUrl: match[3] || null,
    fullMatch: match[0]
  });
}

// Function to normalize names for matching
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Map images to grades
const mappings = [];
let updatedCount = 0;

imageFiles.forEach(imageFile => {
  const imageName = path.basename(imageFile, path.extname(imageFile)).toLowerCase();
  const imagePath = `/vehicle-images/${imageFile}`;
  
  // Try to find matching grade
  let bestMatch = null;
  let bestScore = 0;
  
  grades.forEach(grade => {
    if (grade.imageUrl) return; // Skip if already has image
    
    const gradeId = normalize(grade.id);
    const gradeName = normalize(grade.name);
    const gradeParts = gradeName.split('-');
    
    // Calculate match score
    let score = 0;
    
    // Check if image name contains grade ID or name
    if (imageName.includes(gradeId) || gradeId.includes(imageName)) {
      score += 10;
    }
    if (imageName.includes(gradeName) || gradeName.includes(imageName)) {
      score += 8;
    }
    
    // Check for partial matches
    gradeParts.forEach(part => {
      if (part.length > 2 && imageName.includes(part)) {
        score += 2;
      }
    });
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = grade;
    }
  });
  
  if (bestMatch && bestScore >= 3) {
    // Check if this grade already has an imageUrl
    const hasImageUrl = bestMatch.imageUrl !== null;
    
    mappings.push({
      image: imageFile,
      gradeId: bestMatch.id,
      gradeName: bestMatch.name,
      score: bestScore,
      used: !hasImageUrl
    });
    
    // Only update if grade doesn't already have an imageUrl
    if (!hasImageUrl) {
      // Update data.ts
      const oldPattern = bestMatch.fullMatch;
      const newMatch = oldPattern.replace(
        /(id:\s*"[^"]+",\s*name:\s*"[^"]+",)(\s*imageUrl:\s*"[^"]+",)?/,
        `$1\n            imageUrl: "${imagePath}",`
      );
      
      dataContent = dataContent.replace(oldPattern, newMatch);
      updatedCount++;
      
      // Mark this grade as having an imageUrl now
      bestMatch.imageUrl = imagePath;
      
      console.log(`✓ Mapped: ${imageFile} → ${bestMatch.name} (score: ${bestScore})`);
    } else {
      console.log(`⚠️  Skipped: ${imageFile} → ${bestMatch.name} (already has image)`);
    }
  } else {
    console.log(`⚠️  No match found for: ${imageFile}`);
  }
});

// Write updated data.ts
if (updatedCount > 0) {
  fs.writeFileSync(dataPath, dataContent);
  console.log(`\n✅ Updated ${updatedCount} image URLs in data.ts`);
  
  // Save mapping report
  const reportPath = path.join(__dirname, '..', 'image-mapping-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    totalImages: imageFiles.length,
    mappedImages: mappings.length,
    mappings: mappings,
    unmappedImages: imageFiles.filter(img => !mappings.find(m => m.image === img))
  }, null, 2));
  
  console.log(`📝 Mapping report saved to: image-mapping-report.json`);
} else {
  console.log('\n⚠️  No images were mapped. Check image filenames match grade names.');
}

