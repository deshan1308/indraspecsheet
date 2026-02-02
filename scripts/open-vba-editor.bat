@echo off
echo Opening Excel file and VBA Editor...
echo.

REM Open Excel file
start "" "D:\specsheet-system\Final Vehicle Model Wise Specifications -01.xlsx"

REM Wait a moment
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo VBA Editor Instructions:
echo ========================================
echo.
echo 1. Press ALT + F11 to open VBA Editor
echo 2. In VBA Editor, go to Insert ^> Module
echo 3. Open scripts\EXTRACT_IMAGES_VBA.txt
echo 4. Copy the VBA code
echo 5. Paste into the module
echo 6. Press F5 to run ExtractAllImages macro
echo.
echo ========================================
echo.
pause

