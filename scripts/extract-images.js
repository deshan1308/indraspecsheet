const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const filePath = path.join(__dirname, '..', 'Final Vehicle Model Wise Specifications -01.xlsx');
const workbook = XLSX.readFile(filePath, { cellImages: true });

console.log('Extracting images from Excel file...\n');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Track extracted images
const extractedImages = [];

// Process each sheet
workbook.SheetNames.forEach((sheetName, sheetIndex) => {
  console.log(`Processing sheet ${sheetIndex + 1}/${workbook.SheetNames.length}: ${sheetName}`);
  
  const worksheet = workbook.Sheets[sheetName];
  
  // Extract make and model from sheet name
  const nameParts = sheetName.split(/[-_]/);
  const make = nameParts[0]?.trim() || 'Unknown';
  const model = nameParts.slice(1).join(' ').trim() || 'Unknown';
  
  // Normalize names for file naming
  const normalizeName = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  
  const makeNormalized = normalizeName(make);
  const modelNormalized = normalizeName(model);
  
  // Check if worksheet has images
  if (worksheet['!images'] && worksheet['!images'].length > 0) {
    worksheet['!images'].forEach((image, imgIndex) => {
      try {
        // Generate filename
        const imageExt = image.extension || 'png';
        const filename = `${makeNormalized}-${modelNormalized}-${imgIndex + 1}.${imageExt}`;
        const filePath = path.join(imagesDir, filename);
        
        // Write image data
        fs.writeFileSync(filePath, image.data);
        
        extractedImages.push({
          sheet: sheetName,
          make,
          model,
          filename,
          path: `/vehicle-images/${filename}`,
          index: imgIndex
        });
        
        console.log(`  ✓ Extracted: ${filename}`);
      } catch (error) {
        console.error(`  ✗ Error extracting image ${imgIndex + 1} from ${sheetName}:`, error.message);
      }
    });
  } else {
    // Try alternative method - check for embedded objects
    if (worksheet['!drawings']) {
      console.log(`  ℹ Found drawings but no images array for ${sheetName}`);
    }
  }
});

console.log(`\n✅ Extracted ${extractedImages.length} images total`);
console.log(`📁 Images saved to: ${imagesDir}`);

// Save mapping for reference
const mappingPath = path.join(__dirname, '..', 'image-mapping.json');
fs.writeFileSync(mappingPath, JSON.stringify(extractedImages, null, 2));
console.log(`📝 Image mapping saved to: ${mappingPath}`);

