# Image Extraction and Mapping Guide

This guide will help you extract images from the Excel file and map them to vehicles in the system.

## Step 1: Extract Images from Excel

### Option A: Using VBA Macro (Recommended)

1. Open the Excel file: `Final Vehicle Model Wise Specifications -01.xlsx`
2. Press `ALT + F11` to open the VBA Editor
3. Go to `Insert` > `Module`
4. Copy the code from `scripts/EXTRACT_IMAGES_VBA.txt` and paste it
5. Press `F5` to run the macro `ExtractAllImages`
6. Images will be saved to: `vehicle-images\` folder (next to your Excel file)
7. Move the extracted images to: `public\vehicle-images\` in your project

### Option B: Manual Extraction

1. Open the Excel file
2. For each image:
   - Right-click on the image
   - Select "Save as Picture"
   - Save to: `public\vehicle-images\`
   - Name them using pattern: `make-model-grade.jpg`
     - Example: `toyota-pixis-2025-g-sa-iii.jpg`

## Step 2: Map Images to Vehicles

After extracting images, run the auto-mapping script:

```bash
node scripts/auto-map-images.js
```

This script will:
- Scan the `public\vehicle-images\` folder
- Match images to vehicle grades based on filename patterns
- Update `lib/data.ts` with `imageUrl` for each grade
- Generate a mapping report

## Step 3: Verify Images

1. Start the development server: `npm run dev`
2. Navigate to the dashboard
3. Select a vehicle make, model, and grade
4. Verify the image displays correctly in the spec sheet

## Image Naming Convention

For best auto-mapping results, name images using this pattern:

```
{make}-{model}-{grade}.jpg
```

Examples:
- `toyota-pixis-2025-g-sa-iii.jpg`
- `honda-vezel-ehev-z.jpg`
- `suzuki-alto-hybrid-x.jpg`

The script will try to match:
- Grade ID (e.g., `ehev-z-play-package`)
- Grade name (e.g., `e:HEV Z・PLaY Package`)
- Partial matches from grade name parts

## Troubleshooting

### Images not mapping automatically?

1. Check the mapping report: `image-mapping-report.json`
2. Manually update `lib/data.ts`:
   ```typescript
   {
     id: "grade-id",
     name: "Grade Name",
     imageUrl: "/vehicle-images/your-image.jpg",
     specifications: [...]
   }
   ```

### Images not displaying?

1. Ensure images are in `public\vehicle-images\`
2. Check image paths start with `/vehicle-images/`
3. Verify image file extensions (.jpg, .png, etc.)
4. Check browser console for 404 errors

## Files Created

- `scripts/EXTRACT_IMAGES_VBA.txt` - VBA macro code
- `scripts/auto-map-images.js` - Auto-mapping script
- `scripts/update-image-urls.js` - Manual mapping script
- `image-mapping-report.json` - Mapping results report
