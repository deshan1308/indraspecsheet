const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Extract all grades with their context (make, model)
const gradePattern = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",(?:\s*imageUrl:\s*"([^"]+)",)?/g;
const grades = [];
let match;

while ((match = gradePattern.exec(dataContent)) !== null) {
  // Find the make and model for this grade by looking backwards
  const beforeMatch = dataContent.substring(0, match.index);
  const makeMatch = beforeMatch.match(/id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*models:/);
  const modelMatch = beforeMatch.match(/id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*grades:/);
  
  grades.push({
    id: match[1],
    name: match[2],
    imageUrl: match[3] || null,
    make: makeMatch ? makeMatch[2] : '',
    model: modelMatch ? modelMatch[2] : '',
    fullMatch: match[0],
    index: match.index
  });
}

console.log(`Found ${grades.length} grades\n`);

// Get all images
const vehicleImagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');
const imageFiles = fs.readdirSync(vehicleImagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
});

console.log(`Found ${imageFiles.length} images to map\n`);

// Normalize function
function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Map images to grades
const mappings = [];
let updatedCount = 0;

imageFiles.forEach(imageFile => {
  const imageName = path.basename(imageFile, path.extname(imageFile)).toLowerCase();
  const imagePath = `/vehicle-images/${imageFile}`;
  
  // Extract make and model from image filename
  // Pattern: make-model-...
  const parts = imageName.split('-');
  const imageMake = parts[0] || '';
  const imageModel = parts.slice(1, -1).join('-'); // Everything except the number
  
  let bestMatch = null;
  let bestScore = 0;
  
  grades.forEach(grade => {
    // Skip if already has imageUrl (except Honda Vezel which we want to keep)
    if (grade.imageUrl && !grade.imageUrl.includes('eHEV')) return;
    
    const gradeId = normalize(grade.id);
    const gradeName = normalize(grade.name);
    const gradeMake = normalize(grade.make);
    const gradeModel = normalize(grade.model);
    
    let score = 0;
    
    // Match by make
    if (imageMake && gradeMake && (imageMake.includes(gradeMake) || gradeMake.includes(imageMake))) {
      score += 5;
    }
    
    // Match by model
    if (imageModel && gradeModel && (imageModel.includes(gradeModel) || gradeModel.includes(imageModel))) {
      score += 5;
    }
    
    // Match by grade ID
    if (imageName.includes(gradeId) || gradeId.includes(imageName)) {
      score += 10;
    }
    
    // Match by grade name parts
    const gradeNameParts = gradeName.split('-');
    gradeNameParts.forEach(part => {
      if (part.length > 2 && imageName.includes(part)) {
        score += 2;
      }
    });
    
    // Special cases
    if (imageName.includes('vezel') && (gradeId.includes('vezel') || gradeName.includes('vezel'))) {
      score += 15;
    }
    if (imageName.includes('pixis') && gradeId.includes('pixis')) {
      score += 15;
    }
    if (imageName.includes('aqua') && gradeId.includes('aqua')) {
      score += 15;
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = grade;
    }
  });
  
  if (bestMatch && bestScore >= 5) {
    mappings.push({
      image: imageFile,
      gradeId: bestMatch.id,
      gradeName: bestMatch.name,
      score: bestScore
    });
    
    // Update data.ts - only if grade doesn't have imageUrl
    if (!bestMatch.imageUrl) {
      const oldPattern = bestMatch.fullMatch;
      const newMatch = oldPattern.replace(
        /(id:\s*"[^"]+",\s*name:\s*"[^"]+",)(\s*imageUrl:\s*"[^"]+",)?/,
        `$1\n            imageUrl: "${imagePath}",`
      );
      
      dataContent = dataContent.replace(oldPattern, newMatch);
      updatedCount++;
      
      // Update the grade object for next iterations
      bestMatch.imageUrl = imagePath;
      
      console.log(`✓ Mapped: ${imageFile} → ${bestMatch.name} (${bestMatch.make} ${bestMatch.model}) [score: ${bestScore}]`);
    } else {
      console.log(`⚠️  Skipped: ${imageFile} → ${bestMatch.name} (already has image)`);
    }
  } else {
    console.log(`⚠️  No match: ${imageFile} (best score: ${bestScore})`);
  }
});

// Write updated content
if (updatedCount > 0) {
  fs.writeFileSync(dataPath, dataContent);
  console.log(`\n✅ Updated ${updatedCount} image URLs in data.ts`);
  
  // Save report
  const reportPath = path.join(__dirname, '..', 'image-mapping-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    totalImages: imageFiles.length,
    mappedImages: mappings.length,
    updatedCount: updatedCount,
    mappings: mappings,
    unmappedImages: imageFiles.filter(img => !mappings.find(m => m.image === img))
  }, null, 2));
  
  console.log(`📝 Mapping report saved to: image-mapping-report.json`);
} else {
  console.log('\n⚠️  No images were mapped.');
}

