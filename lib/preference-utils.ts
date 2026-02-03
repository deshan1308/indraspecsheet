// Utility functions for customer preference filtering and recommendations

import { Make, Grade, Specification } from "./data";
import { makes } from "./data";
import { getVehicleBodyType } from "./vehicle-body-types";
import { getVehicleMapping, normalizeBodyType, normalizeFuelType } from "./vehicle-mappings";

export interface PreferenceFilters {
  make?: string; // Make ID
  fuelType?: string[]; // Petrol, Diesel, Hybrid, Electric
  passengerCapacity?: string; // "5", "7", "7+" seater options
  driveType?: string[]; // 2WD, 4WD, AWD
  bodyType?: string[]; // Car, SUV, Truck, Double Cab, Van, Bus
  year?: number; // Vehicle year (e.g., 2025)
  hasSafetyFeatures?: boolean; // Airbags, ABS, etc.
  hasAudioSystem?: boolean; // Audio/Infotainment
  hasSunroof?: boolean;
  hasLeatherSeats?: boolean;
  hasNavigation?: boolean; // GPS Navigation
  hasBluetooth?: boolean; // Bluetooth connectivity
  hasUSBPorts?: boolean; // USB ports
  hasParkingSensors?: boolean; // Parking sensors
  hasCruiseControl?: boolean; // Cruise control
  hasKeylessEntry?: boolean; // Keyless entry
  hasClimateControl?: boolean; // Climate control/AC
  hasLEDLights?: boolean; // LED headlights
  hasAlloyWheels?: boolean; // Alloy wheels
}

export interface VehicleMatch {
  make: Make;
  modelId: string;
  modelName: string;
  grade: Grade;
  score: number;
  matchedFilters: string[];
}

// Extract value from specifications
function getSpecValue(
  specifications: Specification[],
  category: string,
  itemName?: string
): string | null {
  for (const spec of specifications) {
    if (spec.category.toLowerCase().includes(category.toLowerCase())) {
      for (const item of spec.items) {
        if (
          !itemName ||
          item.name.toLowerCase().includes(itemName.toLowerCase())
        ) {
          return item.value;
        }
      }
    }
  }
  return null;
}

// Extract all values matching a pattern
function getSpecValues(
  specifications: Specification[],
  category: string,
  itemName?: string
): string[] {
  const values: string[] = [];
  for (const spec of specifications) {
    if (spec.category.toLowerCase().includes(category.toLowerCase())) {
      for (const item of spec.items) {
        if (
          !itemName ||
          item.name.toLowerCase().includes(itemName.toLowerCase())
        ) {
          values.push(item.value);
        }
      }
    }
  }
  return values;
}

// Check if specification contains a keyword (improved with better matching)
function hasSpecKeyword(
  specifications: Specification[],
  keywords: string[]
): boolean {
  // Build comprehensive text from all specifications
  // Include both item names and values separately for better matching
  const allText = specifications
    .map((spec) => [
      spec.category,
      ...spec.items.map((item) => `${item.name} ${item.value}`),
    ])
    .flat()
    .join(" ")
    .toLowerCase()
    .replace(/&/g, "and") // Normalize & to "and" for matching
    .replace(/[^\w\s]/g, " "); // Replace special chars with spaces for better matching

  // Also create separate arrays for item names and values for more precise matching
  const itemNames = specifications
    .flatMap((spec) => spec.items.map((item) => 
      item.name.toLowerCase().replace(/&/g, "and").replace(/[^\w\s]/g, " ")
    ));
  const itemValues = specifications
    .flatMap((spec) => spec.items.map((item) => 
      item.value.toLowerCase().replace(/&/g, "and").replace(/[^\w\s]/g, " ")
    ));

  // Normalize keywords (replace & with "and")
  const normalizedKeywords = keywords.map(k => k.toLowerCase().replace(/&/g, "and"));

  // Check each keyword
  return normalizedKeywords.some((keyword) => {
    // For multi-word keywords, check exact phrase match in full text
    if (keyword.includes(" ")) {
      // Check in full text, item names, and item values
      if (allText.includes(keyword) || 
          itemNames.some(name => name.includes(keyword)) ||
          itemValues.some(value => value.includes(keyword))) {
        return true;
      }
    }
    
    // For single-word keywords, check more flexibly
    // Check if keyword appears as a whole word or in compound terms
    const keywordPattern = new RegExp(`\\b${keyword}\\b`, "i");
    
    // Check in full text
    if (keywordPattern.test(allText)) {
      return true;
    }
    
    // Check in item names (more reliable for features)
    if (itemNames.some(name => keywordPattern.test(name) || name.includes(keyword))) {
      return true;
    }
    
    // Check in item values
    if (itemValues.some(value => keywordPattern.test(value) || value.includes(keyword))) {
      return true;
    }
    
    // Check for compound words (e.g., "moon" matches "moonroof", "moon roof")
    const compoundPattern = new RegExp(`${keyword}(?:roof|roofs|light|lights|lamp|lamps|wheel|wheels|seat|seats|entry|control|sensor|sensors|port|ports|system|speaker|speakers|screen|display|audio|conditioner|conditioning)`, "i");
    if (compoundPattern.test(allText)) {
      return true;
    }
    
    return false;
  });
}

// Extract fuel type from specifications (with mapping fallback)
function extractFuelType(
  makeName: string,
  modelName: string,
  gradeName: string,
  specifications: Specification[]
): string[] {
  const gradeLower = gradeName.toLowerCase();
  const modelLower = modelName.toLowerCase();
  
  // PRIORITY 1: Check grade name FIRST - it often contains explicit fuel type (e.g., "3.3L Diesel", "3.5L petrol")
  // Grade names are the most reliable source as they explicitly state the fuel type
  // Check in order: Electric -> Hybrid -> Diesel -> Petrol/Gasoline
  
  // 1. Electric (most specific)
  if (gradeLower.includes("electric") || gradeLower.includes(" ev ") || gradeLower.includes("ev ") || gradeLower.includes(" ev") || gradeLower.includes("battery")) {
    return ["Electric"];
  }
  
  // 2. Hybrid (check before diesel/petrol)
  if (gradeLower.includes("hybrid") || gradeLower.includes("hev") || gradeLower.includes("ehev") || gradeLower.includes("e:hev") || gradeLower.includes("phev")) {
    return ["Hybrid"];
  }
  
  // 3. Diesel (check before petrol)
  if (gradeLower.includes("diesel")) {
    return ["Diesel"];
  }
  
  // 4. Petrol/Gasoline (check last)
  if (gradeLower.includes("petrol") || gradeLower.includes("gasoline") || gradeLower.includes("gas")) {
    return ["Petrol"];
  }
  
  // PRIORITY 2: Try explicit mapping (as fallback if grade name doesn't have fuel type)
  const mapping = getVehicleMapping(makeName, modelName, gradeName);
  if (mapping && mapping.fuelType) {
    return [normalizeFuelType(mapping.fuelType)];
  }
  
  // Fallback to pattern matching (only if no mapping found and grade name doesn't have fuel type)
  // Check in order of specificity to avoid false matches
  const fuelValues = getSpecValues(specifications, "fuel", "type");
  const engineValues = getSpecValues(specifications, "engine", "type");
  
  // Also check all specification text for fuel type indicators
  const allText = specifications
    .map((spec) => [
      spec.category,
      ...spec.items.map((item) => `${item.name} ${item.value}`),
    ])
    .flat()
    .join(" ")
    .toLowerCase();

  const allValues = [...fuelValues, ...engineValues, allText].join(" ").toLowerCase();
  
  // Combine all sources for checking
  const combinedCheck = `${allValues} ${gradeLower} ${modelLower}`;

  // Check in order of specificity - most specific first
  // 1. Check for Electric (most specific)
  if (
    combinedCheck.includes("electric") || 
    combinedCheck.includes(" ev ") || 
    combinedCheck.includes("ev ") ||
    combinedCheck.includes(" ev") ||
    combinedCheck.includes("battery") ||
    combinedCheck.includes("e-power") ||
    combinedCheck.includes("e:power")
  ) {
    return ["Electric"];
  }
  
  // 2. Check for Hybrid (includes PHEV, HEV, eHEV, e:HEV) - must check before diesel/petrol
  // Check for hybrid indicators in various formats
  const hybridPatterns = [
    "hybrid",
    "hev",
    "ehev",
    "e:hev",
    "phev",
    "mild hybrid",
    "strong hybrid",
    "e:hev",
    "e-hev"
  ];
  
  const isHybrid = hybridPatterns.some(pattern => combinedCheck.includes(pattern));
  
  if (isHybrid) {
    return ["Hybrid"];
  }
  
  // 3. Check for Diesel (must check before petrol to avoid false matches)
  // Look for diesel indicators but exclude hybrid diesel
  const dieselPatterns = [
    "diesel",
    "tdi", // Turbocharged Direct Injection (diesel)
    "crdi", // Common Rail Direct Injection (diesel)
    "dci", // Direct Common-rail Injection (diesel)
    "common rail", // Common rail is typically diesel
    "direct injection" // When combined with diesel context
  ];
  
  const hasDiesel = dieselPatterns.some(pattern => combinedCheck.includes(pattern));
  
  if (hasDiesel && !isHybrid) {
    return ["Diesel"];
  }
  
  // 4. Check for Petrol/Gasoline (default for most vehicles)
  // Look for petrol/gasoline indicators but exclude hybrid petrol
  const petrolPatterns = [
    "petrol",
    "gasoline",
    "gas",
    "turbo petrol",
    "turbocharged petrol",
    "turbo gasoline",
    "turbocharged gasoline",
    "boosterjet", // Suzuki turbo petrol
    "gdi", // Gasoline Direct Injection
    "mpi" // Multi-Point Injection (petrol)
  ];
  
  const hasPetrol = petrolPatterns.some(pattern => combinedCheck.includes(pattern));
  
  // Special handling for "turbo" - check if it's diesel turbo or petrol turbo
  const hasTurbo = combinedCheck.includes("turbo") || combinedCheck.includes("turbocharged");
  
  if (hasPetrol && !isHybrid && !hasDiesel) {
    return ["Petrol"];
  }
  
  // If turbo is mentioned but no explicit fuel type, check context
  if (hasTurbo && !hasPetrol && !hasDiesel && !isHybrid) {
    // Turbo without diesel mention is usually petrol
    // But if diesel indicators are present, it's diesel
    const dieselIndicators = ["common rail", "tdi", "crdi", "dci"];
    const hasDieselIndicators = dieselIndicators.some(ind => combinedCheck.includes(ind));
    
    if (hasDieselIndicators) {
      return ["Diesel"];
    }
    // Otherwise assume petrol for turbo engines
    return ["Petrol"];
  }
  
  // 6. If engine type contains only numbers and "cc" or "l" without fuel type, check context
  // This handles cases like "658CC" or "1.0L" without explicit fuel type
  const engineTypePattern = /(\d+(?:\.\d+)?)\s*(?:cc|l|liter)/i;
  const engineTypeMatch = combinedCheck.match(engineTypePattern);
  
  if (engineTypeMatch && !hasPetrol && !hasDiesel && !isHybrid) {
    // Check if there are any diesel-specific indicators we might have missed
    const dieselIndicators = ["common rail", "direct injection", "tdi", "crdi", "dci"];
    const hasDieselIndicators = dieselIndicators.some(ind => combinedCheck.includes(ind));
    
    if (hasDieselIndicators) {
      return ["Diesel"];
    }
    
    // If we found an engine size but no fuel type, and it's not hybrid/electric/diesel, assume Petrol
    // Most engines without explicit fuel type are petrol (especially smaller engines)
    // But only if we're confident it's not diesel
    return ["Petrol"];
  }

  // 7. Final fallback: If we have an engine type value but couldn't determine fuel type
  // Check the engine values more carefully
  if (engineValues.length > 0) {
    const engineValueLower = engineValues.join(" ").toLowerCase();
    
    // Check for explicit fuel mentions in engine value
    if (engineValueLower.includes("diesel") && !engineValueLower.includes("hybrid")) {
      return ["Diesel"];
    }
    if ((engineValueLower.includes("petrol") || engineValueLower.includes("gasoline") || engineValueLower.includes("gas")) 
        && !engineValueLower.includes("hybrid")) {
      return ["Petrol"];
    }
  }

  // If nothing found, return Unknown (don't default to Petrol to avoid false matches)
  return ["Unknown"];
}

// Extract passenger capacity (with mapping fallback)
function extractPassengerCapacity(
  makeName: string,
  modelName: string,
  gradeName: string,
  specifications: Specification[]
): number | null {
  // First try explicit mapping
  const mapping = getVehicleMapping(makeName, modelName, gradeName);
  if (mapping) {
    return mapping.passengerCapacity;
  }
  
  // Fallback to pattern matching
  // Try "Passenger Capacity" first
  const capacityValue = getSpecValue(
    specifications,
    "passenger",
    "capacity"
  );
  if (capacityValue) {
    const match = capacityValue.match(/(\d+)/);
    if (match) {
      return parseInt(match[1], 10);
    }
  }

  // Try "Persons" field (for trucks)
  const personsValue = getSpecValue(specifications, "persons");
  if (personsValue) {
    const match = String(personsValue).match(/(\d+)/);
    if (match) {
      return parseInt(match[1], 10);
    }
  }

  // Try alternative patterns
  const altValue = getSpecValue(specifications, "capacity");
  if (altValue) {
    const match = String(altValue).match(/(\d+)/);
    if (match) {
      return parseInt(match[1], 10);
    }
  }

  // Check all text for "people" or "seats"
  const allText = specifications
    .map((spec) => spec.items.map((item) => item.value))
    .flat()
    .join(" ")
    .toLowerCase();
  
  const peopleMatch = allText.match(/(\d+)\s*(people|person|seats|seat)/i);
  if (peopleMatch) {
    return parseInt(peopleMatch[1], 10);
  }

  return null;
}

// Extract drive type
function extractDriveType(specifications: Specification[]): string[] {
  const driveTypes: string[] = [];
  const driveValue = getSpecValue(specifications, "drive", "type");
  const drivetrainValue = getSpecValue(specifications, "drivetrain");
  
  // Also check all specification text
  const allText = specifications
    .map((spec) => [
      spec.category,
      ...spec.items.map((item) => `${item.name} ${item.value}`),
    ])
    .flat()
    .join(" ")
    .toLowerCase();

  const allValues = [driveValue, drivetrainValue, allText]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  // Check for 2WD patterns
  if (
    allValues.includes("2wd") ||
    allValues.includes("2 wd") ||
    allValues.includes("ff") ||
    allValues.includes("front-wheel") ||
    allValues.includes("fwd")
  ) {
    driveTypes.push("2WD");
  }
  
  // Check for 4WD patterns
  if (
    allValues.includes("4wd") ||
    allValues.includes("4 wd") ||
    allValues.includes("four-wheel") ||
    allValues.includes("4x4")
  ) {
    driveTypes.push("4WD");
  }
  
  // Check for AWD patterns
  if (
    allValues.includes("awd") ||
    allValues.includes("all-wheel") ||
    allValues.includes("all wheel")
  ) {
    driveTypes.push("AWD");
  }

  return driveTypes.length > 0 ? driveTypes : ["Unknown"];
}

// Extract transmission type
function extractTransmission(specifications: Specification[]): string[] {
  const transmissions: string[] = [];
  const transValue = getSpecValue(specifications, "transmission", "type");
  const gearboxValue = getSpecValue(specifications, "gearbox");

  const allValues = [transValue, gearboxValue]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (allValues.includes("manual") || allValues.includes("mt")) {
    transmissions.push("Manual");
  }
  if (allValues.includes("automatic") || allValues.includes("at")) {
    transmissions.push("Automatic");
  }
  if (allValues.includes("cvt")) {
    transmissions.push("CVT");
  }
  if (allValues.includes("dct")) {
    transmissions.push("DCT");
  }

  return transmissions.length > 0 ? transmissions : ["Unknown"];
}

// Extract power (PS or kW)
function extractPower(specifications: Specification[]): number | null {
  const powerValue = getSpecValue(specifications, "power");
  if (powerValue) {
    // Try to extract number from strings like "397 PS (292kW)" or "210 PS"
    const psMatch = powerValue.match(/(\d+)\s*PS/i);
    if (psMatch) {
      return parseInt(psMatch[1], 10);
    }
    const kwMatch = powerValue.match(/(\d+)\s*kW/i);
    if (kwMatch) {
      // Convert kW to PS (approximately 1 kW = 1.36 PS)
      return Math.round(parseInt(kwMatch[1], 10) * 1.36);
    }
    const numMatch = powerValue.match(/(\d+)/);
    if (numMatch) {
      return parseInt(numMatch[1], 10);
    }
  }
  return null;
}

// Extract torque (Nm)
function extractTorque(specifications: Specification[]): number | null {
  const torqueValue = getSpecValue(specifications, "torque");
  if (torqueValue) {
    const match = torqueValue.match(/(\d+)\s*Nm/i);
    if (match) {
      return parseInt(match[1], 10);
    }
  }
  return null;
}

// Extract engine displacement (CC)
function extractEngineDisplacement(specifications: Specification[]): number | null {
  const displacementValue = getSpecValue(specifications, "displacement");
  const engineValue = getSpecValue(specifications, "engine", "type");
  
  const allValues = [displacementValue, engineValue].filter(Boolean).join(" ").toLowerCase();
  
  // Try to extract CC from strings like "658CC", "2.0L", "2000CC"
  const ccMatch = allValues.match(/(\d+)\s*cc/i);
  if (ccMatch) {
    return parseInt(ccMatch[1], 10);
  }
  
  const lMatch = allValues.match(/(\d+\.?\d*)\s*l/i);
  if (lMatch) {
    // Convert liters to CC (1L = 1000CC)
    return Math.round(parseFloat(lMatch[1]) * 1000);
  }
  
  return null;
}

// Extract fuel economy (km/L)
function extractFuelEconomy(specifications: Specification[]): number | null {
  const fuelValue = getSpecValue(specifications, "fuel", "consumption");
  const economyValue = getSpecValue(specifications, "economy");
  
  const allValues = [fuelValue, economyValue].filter(Boolean).join(" ").toLowerCase();
  
  // Try to extract km/L
  const kmlMatch = allValues.match(/(\d+\.?\d*)\s*km[\/\s]*l/i);
  if (kmlMatch) {
    return parseFloat(kmlMatch[1]);
  }
  
  return null;
}

// Extract boot/cargo space (L)
function extractBootSpace(specifications: Specification[]): number | null {
  const bootValue = getSpecValue(specifications, "boot", "space");
  const cargoValue = getSpecValue(specifications, "cargo");
  
  const allValues = [bootValue, cargoValue].filter(Boolean).join(" ").toLowerCase();
  
  // Try to extract liters
  const lMatch = allValues.match(/(\d+)\s*l/i);
  if (lMatch) {
    return parseInt(lMatch[1], 10);
  }
  
  return null;
}

// Extract body type from make name, model name, grade name, or specifications
function extractBodyType(makeName: string, modelName: string, gradeName: string, specifications: Specification[]): string[] {
  // First try vehicle mappings - return both specific and normalized types
  const mapping = getVehicleMapping(makeName, modelName, gradeName);
  if (mapping) {
    return [mapping.bodyType, normalizeBodyType(mapping.bodyType)];
  }
  
  // Then try the explicit body type mapping
  try {
    const mappedType = getVehicleBodyType(makeName, modelName, gradeName);
    if (mappedType) {
      return [mappedType, normalizeBodyType(mappedType)];
    }
  } catch (e) {
    // Fall back to pattern matching if mapping fails
  }
  
  const makeLower = makeName.toLowerCase();
  const modelLower = modelName.toLowerCase();
  const gradeLower = gradeName.toLowerCase();
  const allText = specifications
    .map((spec) => [spec.category, ...spec.items.map((item) => `${item.name} ${item.value}`)])
    .flat()
    .join(" ")
    .toLowerCase();
  
  const combined = `${makeLower} ${modelLower} ${gradeLower} ${allText}`;
  
  // Check for body types (order matters - check more specific first)
  // 1. Double Cab - must be checked FIRST before Truck
  if (
    gradeLower.includes("double cab") || 
    gradeLower.includes("doublecab") ||
    modelLower.includes("double cab") ||
    modelLower.includes("doublecab") ||
    combined.includes("double cab") || 
    combined.includes("doublecab") ||
    // Special cases: HILUX and RAPTOR models are Double Cabs
    modelLower.includes("hilux") ||
    (modelLower.includes("raptor") && !combined.includes("single cab")) ||
    (modelLower.includes("ranger") && !combined.includes("single cab"))
  ) {
    const bodyType = "Double Cab";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 2. Bus
  if (
    combined.includes("bus") || 
    combined.includes("seater") ||
    (combined.includes("foton") && (combined.includes("37") || combined.includes("seater")))
  ) {
    const bodyType = "Bus";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 3. Van/Minivan (check before SUV and Car to avoid misclassification)
  // Sienta is a Minivan - check this FIRST
  if (modelLower.includes("sienta")) {
    const bodyType = "Minivan";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // Other vans
  if (
    combined.includes("van") ||
    combined.includes("every") ||
    combined.includes("scrum") ||
    (modelLower.includes("wagon") && combined.includes("r") && !modelLower.includes("yaris"))
  ) {
    // Spacia is a Kei Car, not a Van (unless explicitly mentioned as van)
    if (modelLower.includes("spacia") && !combined.includes("van")) {
      // Skip to Kei Car check later
    } else {
      const bodyType = "Van";
      return [bodyType, normalizeBodyType(bodyType)];
    }
  }
  
  // 4. Truck (but not Double Cab - single cab trucks)
  if (
    combined.includes("single cab") ||
    (combined.includes("truck") && !combined.includes("double cab")) ||
    combined.includes("pickup") ||
    combined.includes("miler") ||
    combined.includes("aumark") ||
    combined.includes("mini truck")
  ) {
    const bodyType = "Truck";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 5. SUV - comprehensive list (check before Car to avoid misclassification)
  // NOTE: hustler and taft are now classified as Cars (Hatchback), so removed from SUV list
  if (
    combined.includes("suv") ||
    combined.includes("sport utility") ||
    combined.includes("crossover") ||
    combined.includes("vezel") ||
    combined.includes("rav") ||
    combined.includes("yaris cross") ||
    combined.includes("corolla cross") ||
    combined.includes("raize") ||
    combined.includes("outlander") ||
    combined.includes("x-trail") ||
    combined.includes("x trail") ||
    combined.includes("sonet") ||
    combined.includes("xbee") ||
    combined.includes("jimny") ||
    combined.includes("rocky") ||
    combined.includes("wr-v") ||
    combined.includes("wr v") ||
    combined.includes("land cruiser") ||
    combined.includes("lc 300") ||
    combined.includes("lc 250") ||
    combined.includes("taisor") ||
    combined.includes("urban cruiser")
  ) {
    // Classify SUV size if possible
    // NOTE: hustler and taft removed - they are now Cars (Hatchback)
    if (modelLower.includes("raize") || modelLower.includes("yaris cross") || modelLower.includes("xbee") ||
        modelLower.includes("rocky") || modelLower.includes("jimny")) {
      const bodyType = "Subcompact SUV";
      return [bodyType, normalizeBodyType(bodyType)];
    }
    if (modelLower.includes("corolla cross") || modelLower.includes("vezel") || modelLower.includes("taisor") ||
        modelLower.includes("urban cruiser") || modelLower.includes("outlander")) {
      const bodyType = "Compact SUV";
      return [bodyType, normalizeBodyType(bodyType)];
    }
    if (modelLower.includes("rav") || modelLower.includes("x-trail") || modelLower.includes("x trail") ||
        modelLower.includes("sonet")) {
      const bodyType = "Midsize SUV";
      return [bodyType, normalizeBodyType(bodyType)];
    }
    if (modelLower.includes("land cruiser") || modelLower.includes("lc 300") || modelLower.includes("lc 250")) {
      const bodyType = "Full-Size SUV";
      return [bodyType, normalizeBodyType(bodyType)];
    }
    const bodyType = "SUV";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 6. Station Wagon (check before Car)
  if (
    modelLower.includes("touring") ||
    modelLower.includes("fielder") ||
    (modelLower.includes("wagon") && !modelLower.includes("yaris") && !modelLower.includes("r"))
  ) {
    const bodyType = "Station Wagon";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 7. Kei Car (check before Car)
  if (
    modelLower.includes("pixis") ||
    modelLower.includes("alto") ||
    modelLower.includes("spacia") ||
    (modelLower.includes("wagon") && modelLower.includes("r") && !modelLower.includes("yaris"))
  ) {
    const bodyType = "Kei Car";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 8. MPV (check before Car)
  if (modelLower.includes("roomy")) {
    const bodyType = "MPV";
    return [bodyType, normalizeBodyType(bodyType)];
  }
  
  // 9. Car (default for sedans, hatchbacks, etc.)
  // This includes: Aqua, Yaris (not Yaris Cross), Corolla, Prius, Swift, City, Fit, Almera, Clipper, etc.
  // BUT NOT: SUVs, Vans, Minivans, Trucks, Buses, Double Cabs (already checked above)
  const bodyType = "Car";
  return [bodyType, normalizeBodyType(bodyType)];
}

// Calculate maximum possible score based on active filters
function getMaxPossibleScore(filters: PreferenceFilters): number {
  let maxScore = 0;
  
  if (filters.make) maxScore += 20;
  if (filters.fuelType && filters.fuelType.length > 0) maxScore += 15;
  if (filters.passengerCapacity) maxScore += 15;
  if (filters.driveType && filters.driveType.length > 0) maxScore += 10;
  if (filters.bodyType && filters.bodyType.length > 0) maxScore += 10;
  if (filters.year) maxScore += 10;
  if (filters.hasSafetyFeatures) maxScore += 10;
  if (filters.hasAudioSystem) maxScore += 5;
  if (filters.hasSunroof) maxScore += 5;
  if (filters.hasLeatherSeats) maxScore += 5;
  if (filters.hasNavigation) maxScore += 5;
  if (filters.hasBluetooth) maxScore += 5;
  if (filters.hasUSBPorts) maxScore += 5;
  if (filters.hasParkingSensors) maxScore += 5;
  if (filters.hasCruiseControl) maxScore += 5;
  if (filters.hasKeylessEntry) maxScore += 5;
  if (filters.hasClimateControl) maxScore += 5;
  if (filters.hasLEDLights) maxScore += 5;
  if (filters.hasAlloyWheels) maxScore += 5;
  
  return maxScore;
}

// Score a vehicle against preferences
export function scoreVehicle(
  make: Make,
  modelId: string,
  modelName: string,
  grade: Grade,
  filters: PreferenceFilters
): VehicleMatch {
  let score = 0;
  const matchedFilters: string[] = [];

  const fuelTypes = extractFuelType(make.name, modelName, grade.name, grade.specifications);
  const passengerCapacity = extractPassengerCapacity(make.name, modelName, grade.name, grade.specifications);
  const driveTypes = extractDriveType(grade.specifications);
  const bodyTypes = extractBodyType(make.name, modelName, grade.name, grade.specifications);
  
  // Extract year from mapping
  const mapping = getVehicleMapping(make.name, modelName, grade.name);
  const vehicleYear = mapping ? mapping.year : null;

  // Make filter (if specified, only include matching makes)
  if (filters.make) {
    if (make.id === filters.make) {
      score += 20;
      matchedFilters.push("Make");
    } else {
      // Exclude vehicles from other makes if make filter is set
      return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
    }
  }

  // Fuel type filter - STRICT: Exclude if doesn't match
  if (filters.fuelType && filters.fuelType.length > 0) {
    // Get the vehicle's fuel type - prioritize extraction (which checks grade name first)
    // then fall back to mapping if extraction didn't find anything
    const extractedFuelType = fuelTypes.length > 0 ? fuelTypes[0] : null;
    const mappedFuelType = mapping ? mapping.fuelType : null;
    const normalizedMappedFuelType = mappedFuelType ? normalizeFuelType(mappedFuelType) : null;
    
    // Determine the vehicle's fuel type:
    // 1. Use extracted fuel type first (checks grade name which is most reliable)
    // 2. If extraction found nothing, use normalized mapping fuel type
    // 3. If both are unavailable, exclude the vehicle
    const vehicleFuelType = extractedFuelType || normalizedMappedFuelType;
    
    // If we can't determine fuel type, exclude the vehicle when filter is active
    if (!vehicleFuelType || vehicleFuelType === "Unknown") {
      return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
    }
    
    // Check if vehicle's fuel type matches ANY of the selected fuel types (STRICT exact match)
    let hasMatchingFuel = false;
    const vehicleFuelTypeLower = vehicleFuelType.toLowerCase().trim();
    
    for (const filterFt of filters.fuelType) {
      const filterFtLower = filterFt.toLowerCase().trim();
      
      // STRICT EXACT MATCH: Vehicle fuel type must exactly match filter fuel type
      if (vehicleFuelTypeLower === filterFtLower) {
        hasMatchingFuel = true;
        break;
      }
    }
    
    // STRICT FILTERING: If fuel type filter is active and vehicle doesn't match, exclude it
    if (!hasMatchingFuel) {
      return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
    }
    
    // If it matches, add score
    score += 15;
    matchedFilters.push("Fuel Type");
  }

  // Passenger capacity filter - Score if matches selected seater option
  if (filters.passengerCapacity) {
    const filterSeats = filters.passengerCapacity;
    let matches = false;
    
    if (passengerCapacity) {
      if (filterSeats === "5") {
        // Match exactly 5 seats
        matches = passengerCapacity === 5;
      } else if (filterSeats === "7") {
        // Match exactly 7 seats
        matches = passengerCapacity === 7;
      } else if (filterSeats === "7+") {
        // Match 7 or more seats
        matches = passengerCapacity >= 7;
      }
    }
    
    if (matches) {
      score += 15;
      matchedFilters.push("Passenger Capacity");
    }
  }

  // Drive type filter - Score if matches, don't exclude if doesn't
  if (filters.driveType && filters.driveType.length > 0) {
    const hasMatchingDrive = driveTypes.some((dt) =>
      filters.driveType!.some((filterDt) =>
        dt.toLowerCase().includes(filterDt.toLowerCase()) ||
        filterDt.toLowerCase().includes(dt.toLowerCase())
      )
    );
    if (hasMatchingDrive) {
      score += 10;
      matchedFilters.push("Drive Type");
    }
  }

  // Body type filter - STRICT: Exclude if doesn't match
  if (filters.bodyType && filters.bodyType.length > 0) {
    // PRIORITY: Use mapping if available (most accurate)
    // If no mapping, use extracted body types from pattern matching
    // bodyTypes array contains [specificType, normalizedType] from extractBodyType
    const actualBodyType = mapping ? mapping.bodyType : (bodyTypes.length > 0 ? bodyTypes[0] : null);
    const normalizedBodyType = actualBodyType ? normalizeBodyType(actualBodyType) : null;
    
    // Also check the normalized type from bodyTypes array (second element)
    // bodyTypes[1] is the normalized type returned by extractBodyType
    const extractedNormalizedType = bodyTypes.length > 1 ? bodyTypes[1] : null;
    
    // Final normalized type to use: prefer extractedNormalizedType, then normalizedBodyType
    const finalNormalizedType = extractedNormalizedType || normalizedBodyType;
    
    // Define category mappings for grouped body types
    const categoryMappings: Record<string, string[]> = {
      "Car": ["Hatchback", "Sedan", "Station Wagon", "Kei Car"],
      "Van": ["MPV", "Minivan", "Van"],
      "SUV": ["Subcompact SUV", "Compact SUV", "Midsize SUV", "Full-Size SUV", "SUV"],
      "Truck": ["Truck", "Pickup"],
      "Double Cab": ["Double Cab"],
      "Bus": ["Bus", "Mini Bus"],
    };
    
    let hasMatchingBodyType = false;
    
    // Check against filter options (now using grouped categories)
    for (const filterBt of filters.bodyType) {
      const filterBtLower = filterBt.toLowerCase();
      const categoryTypes = categoryMappings[filterBt];
      
      // Primary check: normalized body type matches filter category (STRICT)
      if (normalizedBodyType && filterBtLower === normalizedBodyType.toLowerCase()) {
        hasMatchingBodyType = true;
        break;
      }
      
      // Also check extracted normalized type
      if (extractedNormalizedType && filterBtLower === extractedNormalizedType.toLowerCase()) {
        hasMatchingBodyType = true;
        break;
      }
      
      // Secondary check: if filter is a category, check if vehicle's actual type belongs to that category
      if (categoryTypes && actualBodyType && categoryTypes.includes(actualBodyType)) {
        hasMatchingBodyType = true;
        break;
      }
      
      // Tertiary check: check all body types from extraction (both specific and normalized)
      // Only use this if mapping wasn't found (fallback)
      if (!mapping && bodyTypes.some((bt) => {
        const normalizedBt = normalizeBodyType(bt);
        // Check if normalized type matches filter (strict match)
        if (normalizedBt.toLowerCase() === filterBtLower) {
          return true;
        }
        // Check if actual type belongs to filter category (strict category check)
        if (categoryTypes && categoryTypes.includes(bt)) {
          return true;
        }
        return false;
      })) {
        hasMatchingBodyType = true;
        break;
      }
    }
    
    // STRICT FILTERING: If body type filter is active and vehicle doesn't match, exclude it
    if (!hasMatchingBodyType) {
      return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
    }
    
    // CRITICAL SAFETY CHECK: If filter is "Car" and normalized type is NOT "Car", exclude it
    // This prevents any SUVs, Vans, Minivans, Trucks, Buses, or Double Cabs from showing when "Car" is selected
    if (filters.bodyType.some(bt => bt.toLowerCase() === "car")) {
      // Use final normalized type for the check
      if (finalNormalizedType && finalNormalizedType.toLowerCase() !== "car") {
        return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
      }
      // Also check individual normalized types as backup
      if (normalizedBodyType && normalizedBodyType.toLowerCase() !== "car") {
        return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
      }
      if (extractedNormalizedType && extractedNormalizedType.toLowerCase() !== "car") {
        return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
      }
      // If we have actual body type, make sure it's in the Car category
      if (actualBodyType) {
        const carCategoryTypes = ["Hatchback", "Sedan", "Station Wagon", "Kei Car"];
        if (!carCategoryTypes.includes(actualBodyType)) {
          return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
        }
      }
      // Final check: if no normalized type but we have bodyTypes, check all of them
      if (!finalNormalizedType && bodyTypes.length > 0) {
        const allNormalizeToCar = bodyTypes.every(bt => {
          const normalized = normalizeBodyType(bt);
          return normalized.toLowerCase() === "car";
        });
        if (!allNormalizeToCar) {
          return { make, modelId, modelName, grade, score: 0, matchedFilters: [] };
        }
      }
    }
    
    // If it matches, add score
    score += 10;
    matchedFilters.push("Body Type");
  }

  // Year filter - Score if matches, don't exclude if doesn't
  if (filters.year) {
    if (vehicleYear && vehicleYear === filters.year) {
      score += 10;
      matchedFilters.push("Year");
    }
  }

  // Safety features filter - Score if has, don't exclude if doesn't
  if (filters.hasSafetyFeatures) {
    if (
      hasSpecKeyword(grade.specifications, [
        "srs airbag",
        "airbag",
        "airbags",
        "safety features",
        "toyota safety sense",
        "pre-crash safety",
        "blind spot monitor",
        "blind spot",
        "bsm",
        "parking support brake",
        "parking sensor",
        "park assist",
        "abs",
        "esp",
        "vsc",
        "vehicle stability control",
        "traction control",
        "emergency brake",
        "lane departure",
        "lane keep",
        "collision warning",
        "pedestrian detection",
      ])
    ) {
      score += 10;
      matchedFilters.push("Safety Features");
    }
  }

  // Audio system filter - Score if has, don't exclude if doesn't
  if (filters.hasAudioSystem) {
    // Check item names first (more reliable - "Speakers", "Audio Equipment", etc.)
    const hasAudioInName = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        return nameLower.includes("speaker") ||
               nameLower.includes("audio") ||
               nameLower.includes("sound system") ||
               nameLower.includes("infotainment") ||
               nameLower.includes("entertainment") ||
               nameLower.includes("stereo") ||
               nameLower.includes("radio");
      })
    );
    
    // Also check values and use keyword matching
    const hasAudioInValue = hasSpecKeyword(grade.specifications, [
      "speaker",
      "speakers",
      "display audio",
      "audio",
      "audio equipment",
      "sound system",
      "premium sound system",
      "surround sound",
      "infotainment",
      "infotainment system",
      "entertainment",
      "carplay",
      "apple carplay",
      "android auto",
      "wireless carplay",
      "wireless android",
      "smartplay",
      "touchscreen",
      "touch screen",
      "radio",
      "cd player",
      "usb audio",
      "bluetooth audio",
      "music",
      "stereo",
      "sound",
      "pioneer", // Brand name
    ]);
    
    if (hasAudioInName || hasAudioInValue) {
      score += 5;
      matchedFilters.push("Audio System");
    }
  }

  // Sunroof filter - Score if has, don't exclude if doesn't
  if (filters.hasSunroof) {
    // Check item names first (more reliable)
    const hasSunroofInName = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        return nameLower.includes("sunroof") ||
               nameLower.includes("moonroof") ||
               nameLower.includes("moon roof") ||
               nameLower.includes("panoramic") && nameLower.includes("roof") ||
               nameLower === "moonroof";
      })
    );
    
    // Also check values and use keyword matching
    const hasSunroofInValue = hasSpecKeyword(grade.specifications, [
      "sunroof",
      "moonroof",
      "moon roof",
      "panoramic glass roof",
      "panoramic sunroof",
      "panoramic roof",
      "tilt & slide",
      "tilt and slide",
      "electric moon roof",
      "electric moonroof",
      "power sunroof",
      "sliding roof",
      "opened for ventilation", // From panoramic roof description
    ]);
    
    if (hasSunroofInName || hasSunroofInValue) {
      score += 5;
      matchedFilters.push("Sunroof");
    }
  }

  // Leather seats filter - Score if has, don't exclude if doesn't
  if (filters.hasLeatherSeats) {
    // Check item names first (more reliable)
    const hasLeatherInName = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        return nameLower.includes("leather") ||
               (nameLower.includes("seat") && nameLower.includes("upholstery")) ||
               nameLower.includes("leatherette");
      })
    );
    
    // Also check values
    const hasLeatherInValue = hasSpecKeyword(grade.specifications, [
      "genuine leather",
      "leather seat",
      "leather seats",
      "leather upholstery",
      "seat upholstery",
      "synthetic leather",
      "leatherette",
      "soflex leather",
      "soflex",
      "leather-wrapped",
      "leather wrapping",
      "two tone leather",
      "leather interior",
    ]);
    
    if (hasLeatherInName || hasLeatherInValue) {
      score += 5;
      matchedFilters.push("Leather Seats");
    }
  }

  // Navigation filter - Score if has, don't exclude if doesn't
  if (filters.hasNavigation) {
    // Check item names first
    const hasNavInName = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        return nameLower.includes("navigation") ||
               nameLower.includes("gps") ||
               nameLower.includes("navi") ||
               (nameLower.includes("display") && (nameLower.includes("audio") || nameLower.includes("touch"))) ||
               nameLower.includes("touchscreen") ||
               nameLower.includes("touch screen");
      })
    );
    
    // Also check values
    const hasNavInValue = hasSpecKeyword(grade.specifications, [
      "navigation",
      "gps navigation",
      "navi",
      "gps",
      "navigation system",
      "built-in navigation",
      "integrated navigation",
      "touch screen",
      "touchscreen",
      "display audio",
      "display",
      "multi-information display",
      "tft",
      "lcd display",
      "capacitive touch screen",
    ]);
    
    if (hasNavInName || hasNavInValue) {
      score += 5;
      matchedFilters.push("Navigation");
    }
  }

  // Bluetooth filter - Score if has, don't exclude if doesn't
  if (filters.hasBluetooth) {
    // Check item names and values
    const hasBluetooth = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        const valueLower = item.value.toLowerCase();
        return nameLower.includes("bluetooth") ||
               valueLower.includes("bluetooth") ||
               (nameLower.includes("wireless") && (nameLower.includes("carplay") || nameLower.includes("android"))) ||
               valueLower.includes("wireless carplay") ||
               valueLower.includes("wireless android");
      })
    ) || hasSpecKeyword(grade.specifications, [
      "bluetooth",
      "bluetooth connectivity",
      "bluetooth audio",
      "wireless",
      "wireless connectivity",
      "wireless carplay",
      "wireless android",
    ]);
    
    if (hasBluetooth) {
      score += 5;
      matchedFilters.push("Bluetooth");
    }
  }

  // USB ports filter - Score if has, don't exclude if doesn't
  if (filters.hasUSBPorts) {
    // Check item names and values
    const hasUSB = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        const valueLower = item.value.toLowerCase();
        return nameLower.includes("usb") ||
               valueLower.includes("usb port") ||
               valueLower.includes("usb ports") ||
               valueLower.includes("rear usb");
      })
    ) || hasSpecKeyword(grade.specifications, [
      "usb port",
      "usb ports",
      "usb",
      "usb connector",
      "usb connection",
      "usb charging",
      "usb audio",
      "rear usb",
    ]);
    
    if (hasUSB) {
      score += 5;
      matchedFilters.push("USB Ports");
    }
  }

  // Parking sensors filter - Score if has, don't exclude if doesn't
  if (filters.hasParkingSensors) {
    // Check item names first
    const hasParkingInName = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        return nameLower.includes("parking") ||
               nameLower.includes("park assist") ||
               nameLower.includes("camera") ||
               nameLower.includes("rear camera") ||
               nameLower.includes("backup camera");
      })
    );
    
    // Also check values
    const hasParkingInValue = hasSpecKeyword(grade.specifications, [
      "parking sensor",
      "parking sensors",
      "park assist",
      "parking assist",
      "rear camera",
      "back camera",
      "rear view camera",
      "backup camera",
      "parking support brake",
      "parking brake",
      "reverse camera",
      "surround view",
      "360 camera",
      "panoramic view monitor",
      "pvm",
      "camera",
    ]);
    
    if (hasParkingInName || hasParkingInValue) {
      score += 5;
      matchedFilters.push("Parking Sensors");
    }
  }

  // Cruise control filter - Score if has, don't exclude if doesn't
  if (filters.hasCruiseControl) {
    if (hasSpecKeyword(grade.specifications, ["cruise control", "adaptive cruise"])) {
      score += 5;
      matchedFilters.push("Cruise Control");
    }
  }

  // Keyless entry filter - Score if has, don't exclude if doesn't
  if (filters.hasKeylessEntry) {
    if (
      hasSpecKeyword(grade.specifications, [
        "keyless",
        "keyless entry",
        "smart entry",
        "smart key",
        "push start",
        "push button start",
        "push-button start",
        "one touch start",
        "remote keyless",
        "intelligent key",
      ])
    ) {
      score += 5;
      matchedFilters.push("Keyless Entry");
    }
  }

  // Climate control filter - Score if has, don't exclude if doesn't
  if (filters.hasClimateControl) {
    if (hasSpecKeyword(grade.specifications, ["climate control", "air conditioning", "ac", "dual zone"])) {
      score += 5;
      matchedFilters.push("Climate Control");
    }
  }

  // LED lights filter - Score if has, don't exclude if doesn't
  if (filters.hasLEDLights) {
    // Check item names first (more reliable)
    const hasLEDInName = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        return nameLower.includes("led") && (
          nameLower.includes("headlamp") ||
          nameLower.includes("headlight") ||
          nameLower.includes("lamp") ||
          nameLower.includes("light")
        );
      })
    );
    
    // Also check values
    const hasLEDInValue = hasSpecKeyword(grade.specifications, [
      "led headlamp",
      "led headlamps",
      "led headlight",
      "led headlights",
      "bi-beam led",
      "dual led headlamp",
      "led lamp",
      "led lamps",
      "led clearance lamp",
      "led turn lamp",
      "led tail lamp",
      "led daytime running",
      "led light",
      "led lights",
    ]);
    
    if (hasLEDInName || hasLEDInValue) {
      score += 5;
      matchedFilters.push("LED Lights");
    }
  }

  // Alloy wheels filter - Score if has, don't exclude if doesn't
  if (filters.hasAlloyWheels) {
    // Check item names and values (wheels are often in "Tires and wheels" item)
    const hasAlloyWheels = grade.specifications.some(spec =>
      spec.items.some(item => {
        const nameLower = item.name.toLowerCase();
        const valueLower = item.value.toLowerCase();
        return (nameLower.includes("wheel") || nameLower.includes("tire")) && (
          valueLower.includes("aluminum wheel") ||
          valueLower.includes("aluminum wheels") ||
          valueLower.includes("alloy wheel") ||
          valueLower.includes("alloy wheels") ||
          valueLower.includes("aluminum") && valueLower.includes("wheel")
        );
      })
    ) || hasSpecKeyword(grade.specifications, [
      "aluminum wheel",
      "aluminum wheels",
      "alloy wheel",
      "alloy wheels",
      "aluminum alloy",
      "alloy rim",
      "alloy rims",
    ]);
    
    if (hasAlloyWheels) {
      score += 5;
      matchedFilters.push("Alloy Wheels");
    }
  }

  // Calculate percentage based on maximum possible score
  const maxPossibleScore = getMaxPossibleScore(filters);
  let percentage = 0;
  
  if (maxPossibleScore > 0 && score > 0) {
    // Calculate percentage: (actual score / max possible score) * 100
    percentage = Math.round((score / maxPossibleScore) * 100);
    
    // Ensure minimum 1% if vehicle matched at least one filter
    // This ensures we show percentages from 100% down to 1%
    if (percentage === 0 && matchedFilters.length > 0) {
      percentage = 1;
    }
  } else {
    // If no filters are active or no score, return 0 (vehicle won't be included)
    percentage = 0;
  }
  
  // Ensure percentage is between 0 and 100
  percentage = Math.max(0, Math.min(100, percentage));

  return {
    make,
    modelId,
    modelName,
    grade,
    score: percentage,
    matchedFilters,
  };
}

// Get all vehicle matches
export function getVehicleMatches(
  filters: PreferenceFilters
): VehicleMatch[] {
  const matches: VehicleMatch[] = [];

  for (const make of makes) {
    for (const model of make.models) {
      for (const grade of model.grades) {
        const match = scoreVehicle(
          make,
          model.id,
          model.name,
          grade,
          filters
        );
        
        // STRICT FILTERING: Only include vehicles with score > 0
        // The scoreVehicle function returns score: 0 when a vehicle doesn't match
        // a required filter (like fuel type or body type), so we exclude those
        if (match.score > 0) {
          matches.push(match);
        }
      }
    }
  }

  // Sort by score (highest first, 100% down to 1%), then by make name, then by model name
  matches.sort((a, b) => {
    // Primary sort: by percentage (highest first)
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // Secondary sort: by make name
    if (a.make.name !== b.make.name) {
      return a.make.name.localeCompare(b.make.name);
    }
    // Tertiary sort: by model name
    return a.modelName.localeCompare(b.modelName);
  });

  return matches;
}

// Get unique makes for filter dropdown
export function getAvailableMakes(): Make[] {
  return makes;
}
