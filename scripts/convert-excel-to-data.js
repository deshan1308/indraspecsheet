const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const filePath = path.join(__dirname, '..', 'Final Vehicle Model Wise Specifications -01.xlsx');
const workbook = XLSX.readFile(filePath);

console.log('Total sheets:', workbook.SheetNames.length);
console.log('Sheet names:', workbook.SheetNames.slice(0, 10).join(', '), '...');

// Function to convert a sheet to our data structure
function parseSheet(sheetName, worksheet) {
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
  
  // Try to identify the structure
  // Look for patterns like "Main Detail", "Power Unit", etc.
  const firstRow = data[0] || [];
  const secondRow = data[1] || [];
  
  // Check if this is a detailed spec sheet (like Honda Vezel)
  const hasCategoryHeaders = data.some(row => 
    Array.isArray(row) && row.some(cell => 
      typeof cell === 'string' && (
        cell.includes('Power Unit') || 
        cell.includes('Drive and Transmission') ||
        cell.includes('Brake System') ||
        cell.includes('Chassis') ||
        cell.includes('Exterior') ||
        cell.includes('Interior')
      )
    )
  );
  
  if (hasCategoryHeaders) {
    return parseDetailedSheet(data, sheetName);
  }
  
  // Otherwise, it might be a simpler structure
  return parseSimpleSheet(data, sheetName);
}

function parseDetailedSheet(data, sheetName) {
  // This handles sheets with category-based structure
  // Example: Honda Vezel, Honda HRV, etc.
  
  const result = {
    make: '',
    model: '',
    grades: []
  };
  
  // Extract make and model from sheet name
  const nameParts = sheetName.split(/[-_]/);
  if (nameParts.length >= 2) {
    result.make = nameParts[0].trim();
    result.model = nameParts.slice(1).join(' ').trim();
  } else {
    result.make = nameParts[0].trim();
    result.model = 'Unknown';
  }
  
  // Find grade columns (usually in row 1 or 2)
  let gradeStartRow = 0;
  let gradeColumns = [];
  
  for (let i = 0; i < Math.min(5, data.length); i++) {
    const row = data[i] || [];
    // Look for grade names (non-empty cells that aren't category headers)
    const potentialGrades = row
      .map((cell, idx) => ({ cell: String(cell || '').trim(), idx }))
      .filter(({ cell }) => cell && 
        !cell.includes('Main Detail') && 
        !cell.includes('Discription') &&
        !cell.includes('Power Unit') &&
        cell.length > 0 &&
        cell.length < 100 // Reasonable grade name length
      );
    
    if (potentialGrades.length > 0) {
      gradeStartRow = i;
      gradeColumns = potentialGrades;
      break;
    }
  }
  
  // If no grades found in header, try to infer from structure
  if (gradeColumns.length === 0) {
    // Look for columns with data
    const firstDataRow = data.find(row => 
      Array.isArray(row) && row.some((cell, idx) => idx > 1 && cell)
    );
    if (firstDataRow) {
      // Assume columns 2, 4, 6, etc. are grade columns
      for (let i = 2; i < firstDataRow.length; i += 2) {
        if (firstDataRow[i]) {
          gradeColumns.push({ cell: `Grade ${gradeColumns.length + 1}`, idx: i });
        }
      }
    }
  }
  
  // Parse specifications for each grade
  gradeColumns.forEach(({ cell: gradeName, idx: gradeCol }) => {
    const grade = {
      id: gradeName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: gradeName,
      imageUrl: '', // Will need to be set manually
      specifications: []
    };
    
    let currentCategory = '';
    const items = [];
    
    // Parse rows looking for categories and items
    for (let i = gradeStartRow + 1; i < data.length; i++) {
      const row = data[i] || [];
      const categoryCell = row[0] || '';
      const descCell = row[1] || '';
      const valueCell = row[gradeCol] || '';
      
      const categoryStr = String(categoryCell).trim();
      const descStr = String(descCell).trim();
      const valueStr = String(valueCell).trim();
      
      // Check if this is a category header
      if (categoryStr && (
        categoryStr.includes('Power Unit') ||
        categoryStr.includes('Drive and Transmission') ||
        categoryStr.includes('Brake System') ||
        categoryStr.includes('Chassis') ||
        categoryStr.includes('Suspension') ||
        categoryStr.includes('Wheels') ||
        categoryStr.includes('Exterior') ||
        categoryStr.includes('Interior') ||
        categoryStr.includes('Safety') ||
        categoryStr.includes('Key Features') ||
        categoryStr.includes('General Information') ||
        categoryStr.includes('Measurements') ||
        categoryStr.includes('Performance')
      )) {
        // Save previous category if it has items
        if (currentCategory && items.length > 0) {
          grade.specifications.push({
            category: currentCategory,
            items: [...items]
          });
          items.length = 0;
        }
        currentCategory = categoryStr;
      } else if (descStr && valueStr && currentCategory) {
        // This is a specification item
        items.push({
          name: descStr,
          value: valueStr
        });
      }
    }
    
    // Save last category
    if (currentCategory && items.length > 0) {
      grade.specifications.push({
        category: currentCategory,
        items: [...items]
      });
    }
    
    // Only add grade if it has specifications
    if (grade.specifications.length > 0) {
      result.grades.push(grade);
    }
  });
  
  return result;
}

function parseSimpleSheet(data, sheetName) {
  // Handle simpler sheet structures
  return {
    make: sheetName.split(/[-_]/)[0] || 'Unknown',
    model: 'Unknown',
    grades: []
  };
}

// Process all sheets
const allMakes = {};
const results = [];

workbook.SheetNames.forEach((sheetName, index) => {
  console.log(`\nProcessing sheet ${index + 1}/${workbook.SheetNames.length}: ${sheetName}`);
  const worksheet = workbook.Sheets[sheetName];
  const parsed = parseSheet(sheetName, worksheet);
  
  if (parsed.grades.length > 0) {
    results.push(parsed);
    
    // Group by make
    if (!allMakes[parsed.make]) {
      allMakes[parsed.make] = {
        make: parsed.make,
        models: {}
      };
    }
    
    if (!allMakes[parsed.make].models[parsed.model]) {
      allMakes[parsed.make].models[parsed.model] = {
        model: parsed.model,
        grades: []
      };
    }
    
    allMakes[parsed.make].models[parsed.model].grades.push(...parsed.grades);
  }
});

// Convert to our data structure format
const makesArray = Object.values(allMakes).map(makeData => ({
  id: makeData.make.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name: makeData.make,
  models: Object.values(makeData.models).map(modelData => ({
    id: modelData.model.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: modelData.model,
    grades: modelData.grades
  }))
}));

// Save to JSON for review
const outputPath = path.join(__dirname, '..', 'parsed-vehicle-data.json');
fs.writeFileSync(outputPath, JSON.stringify(makesArray, null, 2));
console.log(`\n\nParsed data saved to: ${outputPath}`);
console.log(`\nTotal makes: ${makesArray.length}`);
makesArray.forEach(make => {
  console.log(`  ${make.name}: ${make.models.length} models, ${make.models.reduce((sum, m) => sum + m.grades.length, 0)} grades`);
});

