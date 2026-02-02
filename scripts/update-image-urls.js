const fs = require('fs');
const path = require('path');

// Read the data file
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Manual mapping based on known images and grade names
// Format: { gradeId: '/image-path.jpg' }
const imageMapping = {
  // Honda Vezel - already mapped
  'ehev-z-play-package': '/eHEV Z・PLaY Package.jpg',
  'ehev-z': '/eHEV Z.jpg',
  
  // Add more mappings as images are added
  // Example:
  // 'toyota-pixis-g-sa-iii-': '/vehicle-images/toyota-pixis-2025-1.jpg',
};

// Function to normalize grade name for matching
function normalizeGradeName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Check public/vehicle-images folder for extracted images
const vehicleImagesDir = path.join(__dirname, '..', 'public', 'vehicle-images');
let extractedImages = [];

if (fs.existsSync(vehicleImagesDir)) {
  const files = fs.readdirSync(vehicleImagesDir);
  extractedImages = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });
  
  console.log(`Found ${extractedImages.length} images in vehicle-images folder`);
  
  // Try to auto-map based on filename patterns
  extractedImages.forEach(imageFile => {
    const imageName = path.basename(imageFile, path.extname(imageFile)).toLowerCase();
    const parts = imageName.split('-');
    
    // Pattern: make-model-grade-number
    if (parts.length >= 3) {
      const make = parts[0];
      const model = parts[1];
      const gradePart = parts.slice(2, -1).join('-'); // Everything except the number
      
      // Try to find matching grade
      const gradePattern = new RegExp(`id:\\s*"([^"]*${gradePart}[^"]*)"`, 'i');
      const match = dataContent.match(gradePattern);
      
      if (match && !imageMapping[match[1]]) {
        imageMapping[match[1]] = `/vehicle-images/${imageFile}`;
        console.log(`  Auto-mapped: ${match[1]} → /vehicle-images/${imageFile}`);
      }
    }
  });
}

// Update imageUrl in data.ts for each grade
let updatedCount = 0;
Object.keys(imageMapping).forEach(gradeId => {
  // Find the grade in the data file
  const gradePattern = new RegExp(`(id:\\s*"${gradeId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?name:\\s*"[^"]+")(,?\\s*imageUrl:\\s*"[^"]+",)?`, 'g');
  
  const replacement = `$1,\n            imageUrl: "${imageMapping[gradeId]}",`;
  
  if (dataContent.match(gradePattern)) {
    dataContent = dataContent.replace(gradePattern, replacement);
    updatedCount++;
    console.log(`✓ Updated imageUrl for grade: ${gradeId}`);
  }
});

// Write updated content
if (updatedCount > 0) {
  fs.writeFileSync(dataPath, dataContent);
  console.log(`\n✅ Updated ${updatedCount} image URLs in data.ts`);
} else {
  console.log('\n⚠️  No updates made. Check your image mapping.');
}

// Generate instructions for manual image extraction
const instructions = `
# Image Extraction Instructions

Since Excel images are not easily extractable programmatically, here are options:

## Option 1: Manual Extraction (Recommended)
1. Open the Excel file
2. Right-click on each image
3. Select "Save as Picture"
4. Save to: public/vehicle-images/
5. Name them: make-model-grade-number.jpg
   Example: toyota-pixis-2025-g-sa-iii-1.jpg

## Option 2: VBA Macro
Run this VBA macro in Excel to extract all images:

Sub ExtractImages()
    Dim ws As Worksheet
    Dim shp As Shape
    Dim imgPath As String
    Dim imgName As String
    Dim i As Integer
    
    imgPath = ThisWorkbook.Path & "\\vehicle-images\\"
    If Dir(imgPath, vbDirectory) = "" Then MkDir imgPath
    
    For Each ws In ThisWorkbook.Worksheets
        i = 1
        For Each shp In ws.Shapes
            If shp.Type = msoPicture Then
                imgName = ws.Name & "-" & i & ".jpg"
                shp.Copy
                With ws.ChartObjects.Add(0, 0, shp.Width, shp.Height).Chart
                    .Paste
                    .Export imgPath & imgName
                    .Parent.Delete
                End With
                i = i + 1
            End If
        Next shp
    Next ws
    
    MsgBox "Images extracted to: " & imgPath
End Sub

## Option 3: Use Excel's Export Feature
1. Select all images in a sheet
2. Copy them
3. Paste into an image editor
4. Save individually with appropriate names

After extracting images, run this script again to auto-map them.
`;

fs.writeFileSync(path.join(__dirname, '..', 'IMAGE_EXTRACTION_INSTRUCTIONS.md'), instructions);
console.log('\n📝 Instructions saved to IMAGE_EXTRACTION_INSTRUCTIONS.md');

