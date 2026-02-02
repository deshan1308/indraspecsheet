# How to Open VBA Editor in Excel

## Quick Method (Recommended)

### Option 1: Using Keyboard Shortcut
1. Open the Excel file: `Final Vehicle Model Wise Specifications -01.xlsx`
2. Press **ALT + F11** (this opens the VBA Editor immediately)

### Option 2: Using Menu
1. Open the Excel file
2. Go to **Developer** tab
   - If you don't see the Developer tab:
     - File > Options > Customize Ribbon
     - Check "Developer" in the right panel
     - Click OK
3. Click **Visual Basic** button

### Option 3: Using Script
1. Double-click `scripts\open-vba-editor.bat`
2. Excel will open automatically
3. Press ALT + F11 when Excel opens

## After Opening VBA Editor

1. **Insert a Module:**
   - In VBA Editor, go to **Insert** > **Module**
   - A new code window will appear

2. **Copy the VBA Code:**
   - Open `scripts\EXTRACT_IMAGES_VBA.txt`
   - Copy all the code

3. **Paste into Module:**
   - Click in the code window
   - Paste the code (Ctrl + V)

4. **Run the Macro:**
   - Press **F5** or click the Run button (green play icon)
   - Or go to **Run** > **Run Sub/UserForm**

## Troubleshooting

### "Developer tab not showing"
- File > Options > Customize Ribbon
- Check "Developer" checkbox
- Click OK

### "Macros are disabled"
- File > Options > Trust Center > Trust Center Settings
- Macro Settings > Enable all macros (or "Enable macros with notification")
- Click OK

### "Can't find the module"
- In VBA Editor, look at the left panel (Project Explorer)
- Expand "VBAProject (Final Vehicle Model Wise Specifications -01.xlsx)"
- Expand "Modules"
- Double-click "Module1" (or the module you created)

## Quick Reference

| Action | Shortcut |
|--------|----------|
| Open VBA Editor | ALT + F11 |
| Insert Module | Insert > Module |
| Run Macro | F5 |
| Save | Ctrl + S |
| Close VBA Editor | ALT + Q |

