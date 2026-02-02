# VBA Macro Instructions - Fixed Version

## The Problem
The previous VBA code had header text that wasn't commented out, causing a compile error. VBA requires all non-code text to start with `'` (apostrophe).

## Solution
Use the clean VBA code from `scripts/VBA_CODE_CLEAN.txt` - it contains ONLY the VBA code, no instructions or headers.

## Steps to Run the Macro

1. **Open your Excel file**: `Final Vehicle Model Wise Specifications -01.xlsx`

2. **Open VBA Editor**: Press `Alt + F11`

3. **Create a new module**:
   - In the VBA editor, go to `Insert` → `Module`
   - A new module window will appear

4. **Copy ONLY the VBA code**:
   - Open `scripts/VBA_CODE_CLEAN.txt` in a text editor
   - Copy **ONLY** the code (from `Sub ExtractAllImagesImproved()` to `End Sub`)
   - **DO NOT** copy any header text, instructions, or comments outside the code

5. **Paste into VBA editor**:
   - Paste the code into the module window
   - The code should start with `Sub ExtractAllImagesImproved()` and end with `End Sub`

6. **Run the macro**:
   - Press `F5` or click the green "Run" button
   - Or go to `Run` → `Run Sub/UserForm`

7. **Check results**:
   - Images will be extracted to `vehicle-images` folder
   - Check the folder to verify images were extracted correctly
   - Check the Immediate Window (Ctrl+G) for extraction messages

8. **After extraction**:
   - Run: `node scripts/fix-image-mapping.js` to validate images
   - Run: `node scripts/smart-map-images.js` to map images to vehicle grades

## Important Notes

- ✅ The code in `VBA_CODE_CLEAN.txt` is ready to use - just copy and paste
- ❌ Do NOT copy header text or instructions into VBA
- ✅ All comments in the code are properly formatted with `'`
- ✅ The macro will skip city-named sheets automatically
- ✅ The macro validates image sizes and skips corrupted files

## Troubleshooting

**If you get a compile error:**
- Make sure you copied ONLY the code, not any header text
- Check that the code starts with `Sub` and ends with `End Sub`
- Ensure there are no uncommented text lines at the top

**If images are still corrupted:**
- The Excel file images might be corrupted or linked incorrectly
- Try manually extracting a few images to verify they're valid
- Check if images are embedded or linked in Excel

