const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const filePath = path.join(__dirname, '..', 'Final Vehicle Model Wise Specifications -01.xlsx');
const workbook = XLSX.readFile(filePath);

// Get all sheet names
console.log('Sheet names:', workbook.SheetNames);

// Read each sheet
workbook.SheetNames.forEach((sheetName, index) => {
  console.log(`\n=== Sheet ${index + 1}: ${sheetName} ===`);
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
  
  // Display first 20 rows to understand structure
  console.log('First 20 rows:');
  data.slice(0, 20).forEach((row, i) => {
    console.log(`Row ${i + 1}:`, row);
  });
  
  // Save full data to JSON for inspection
  const jsonPath = path.join(__dirname, '..', `sheet-${index + 1}-${sheetName.replace(/[^a-z0-9]/gi, '_')}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  console.log(`\nFull data saved to: ${jsonPath}`);
});

