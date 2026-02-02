import openpyxl
import os
import json
from pathlib import Path

# Path to Excel file
excel_path = r"D:\specsheet-system\Final Vehicle Model Wise Specifications -01.xlsx"
output_dir = r"D:\specsheet-system\public\vehicle-images"

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Load workbook
print("Loading Excel file...")
wb = openpyxl.load_workbook(excel_path, data_only=True)

# Track extracted images
extracted_images = []

# Normalize name for file naming
def normalize_name(name):
    return name.lower().replace(' ', '-').replace('/', '-').replace('\\', '-').replace(':', '-').replace('*', '').replace('?', '').replace('"', '').replace('<', '').replace('>', '').replace('|', '').strip('-')

# Process each sheet
for sheet_name in wb.sheetnames:
    print(f"\nProcessing sheet: {sheet_name}")
    
    ws = wb[sheet_name]
    
    # Extract make and model from sheet name
    name_parts = sheet_name.replace('_', '-').split('-')
    make = name_parts[0].strip() if name_parts else 'Unknown'
    model = '-'.join(name_parts[1:]).strip() if len(name_parts) > 1 else 'Unknown'
    
    make_normalized = normalize_name(make)
    model_normalized = normalize_name(model)
    
    # Find images in the sheet
    if hasattr(ws, '_images') and ws._images:
        print(f"  Found {len(ws._images)} image(s)")
        
        for idx, img in enumerate(ws._images):
            try:
                # Get image data
                image_data = img._data()
                
                # Determine file extension
                ext = 'png'  # Default
                if hasattr(img, 'format') and img.format:
                    ext = img.format.lower()
                elif image_data[:4] == b'\x89PNG':
                    ext = 'png'
                elif image_data[:2] == b'\xff\xd8':
                    ext = 'jpg'
                elif image_data[:4] == b'GIF8':
                    ext = 'gif'
                
                # Generate filename
                filename = f"{make_normalized}-{model_normalized}-{idx + 1}.{ext}"
                filepath = os.path.join(output_dir, filename)
                
                # Save image
                with open(filepath, 'wb') as f:
                    f.write(image_data)
                
                extracted_images.append({
                    'sheet': sheet_name,
                    'make': make,
                    'model': model,
                    'filename': filename,
                    'path': f'/vehicle-images/{filename}',
                    'index': idx
                })
                
                print(f"  ✓ Extracted: {filename}")
                
            except Exception as e:
                print(f"  ✗ Error extracting image {idx + 1}: {str(e)}")
    else:
        # Try alternative method - check for embedded objects
        print(f"  No images found using _images attribute")
        
        # Check for drawings/shapes
        if hasattr(ws, 'drawings') and ws.drawings:
            print(f"  Found drawings, but image extraction may require different method")

print(f"\n✅ Extracted {len(extracted_images)} images total")
print(f"📁 Images saved to: {output_dir}")

# Save mapping
mapping_path = r"D:\specsheet-system\image-mapping.json"
with open(mapping_path, 'w', encoding='utf-8') as f:
    json.dump(extracted_images, f, indent=2, ensure_ascii=False)
print(f"📝 Image mapping saved to: {mapping_path}")

