// Comprehensive vehicle body type mapping
// This file contains explicit mappings for known vehicles to ensure accurate classification

export interface VehicleBodyTypeMap {
  make: string;
  model: string;
  bodyType: string;
}

// Explicit body type mappings for known vehicles
export const vehicleBodyTypeMap: VehicleBodyTypeMap[] = [
  // TOYOTA - Cars
  { make: "Toyota", model: "Pixis", bodyType: "Car" },
  { make: "Toyota", model: "Aqua", bodyType: "Car" },
  { make: "Toyota", model: "Yaris", bodyType: "Car" },
  { make: "Toyota", model: "Yaris Ativ", bodyType: "Car" },
  { make: "Toyota", model: "Corolla", bodyType: "Car" },
  { make: "Toyota", model: "Corolla Axio", bodyType: "Car" },
  { make: "Toyota", model: "Corolla Touring", bodyType: "Car" },
  { make: "Toyota", model: "Corolla Fielder", bodyType: "Car" },
  { make: "Toyota", model: "Prius", bodyType: "Car" },
  { make: "Toyota", model: "Roomy", bodyType: "Car" },
  { make: "Toyota", model: "Sienta", bodyType: "Car" },
  
  // TOYOTA - SUVs
  { make: "Toyota", model: "Yaris Cross", bodyType: "SUV" },
  { make: "Toyota", model: "Raize", bodyType: "SUV" },
  { make: "Toyota", model: "RAV 4", bodyType: "SUV" },
  { make: "Toyota", model: "RAV4", bodyType: "SUV" },
  { make: "Toyota", model: "Corolla Cross", bodyType: "SUV" },
  { make: "Toyota", model: "Land Cruiser", bodyType: "SUV" },
  { make: "Toyota", model: "LC 300", bodyType: "SUV" },
  { make: "Toyota", model: "LC 250", bodyType: "SUV" },
  { make: "Toyota", model: "Taisor", bodyType: "SUV" },
  { make: "Toyota", model: "Urban Cruiser", bodyType: "SUV" },
  
  // TOYOTA - Double Cab
  { make: "Toyota", model: "Hilux", bodyType: "Double Cab" },
  { make: "Toyota", model: "HILUX", bodyType: "Double Cab" },
  
  // SUZUKI - Cars
  { make: "Suzuki", model: "Alto", bodyType: "Car" },
  { make: "Suzuki", model: "Swift", bodyType: "Car" },
  
  // SUZUKI - SUVs
  { make: "Suzuki", model: "Wagon R", bodyType: "Car" }, // Actually a tall hatchback/mini MPV
  { make: "Suzuki", model: "Hustler", bodyType: "SUV" },
  { make: "Suzuki", model: "Spacia", bodyType: "Car" }, // Mini MPV
  { make: "Suzuki", model: "Xbee", bodyType: "SUV" },
  { make: "Suzuki", model: "Jimny", bodyType: "SUV" },
  
  // SUZUKI - Vans
  { make: "Suzuki", model: "Every", bodyType: "Van" },
  
  // SUZUKI - Trucks
  { make: "Suzuki", model: "Mini Truck", bodyType: "Truck" },
  
  // DAIHATSU - Cars
  { make: "Daihatsu", model: "Mira", bodyType: "Car" },
  { make: "Daihatsu", model: "Taft", bodyType: "SUV" },
  
  // DAIHATSU - SUVs
  { make: "Daihatsu", model: "Rocky", bodyType: "SUV" },
  
  // HONDA - Cars
  { make: "Honda", model: "City", bodyType: "Car" },
  { make: "Honda", model: "Fit", bodyType: "Car" },
  
  // HONDA - SUVs
  { make: "Honda", model: "Vezel", bodyType: "SUV" },
  { make: "Honda", model: "WR-V", bodyType: "SUV" },
  
  // NISSAN - Cars
  { make: "Nissan", model: "Almera", bodyType: "Car" },
  { make: "Nissan", model: "Clipper", bodyType: "Car" },
  
  // NISSAN - SUVs
  { make: "Nissan", model: "X-Trail", bodyType: "SUV" },
  { make: "Nissan", model: "X Trail", bodyType: "SUV" },
  
  // MAZDA - Vans
  { make: "Mazda", model: "Scrum", bodyType: "Van" },
  
  // MITSUBISHI - SUVs
  { make: "Mitsubishi", model: "Outlander", bodyType: "SUV" },
  
  // FORD - Double Cab
  { make: "Ford", model: "Ranger", bodyType: "Double Cab" },
  { make: "Ford", model: "Raptor", bodyType: "Double Cab" },
  { make: "Ford", model: "RANGER(RAPTOR)", bodyType: "Double Cab" },
  
  // FORD - Trucks (Single Cab)
  { make: "Ford", model: "Cab", bodyType: "Truck" },
  
  // KIA - SUVs
  { make: "Kia", model: "Sonet", bodyType: "SUV" },
  
  // FOTON - Trucks
  { make: "Foton", model: "Miler", bodyType: "Truck" },
  { make: "Foton", model: "Aumark S", bodyType: "Truck" },
  
  // FOTON - Buses
  { make: "Foton", model: "Bus", bodyType: "Bus" },
];

// Helper function to get body type for a vehicle
export function getVehicleBodyType(makeName: string, modelName: string, gradeName: string): string {
  const makeLower = makeName.toLowerCase();
  const modelLower = modelName.toLowerCase();
  const gradeLower = gradeName.toLowerCase();
  
  // First, check explicit mappings
  const explicitMatch = vehicleBodyTypeMap.find(
    (mapping) =>
      mapping.make.toLowerCase() === makeLower &&
      (mapping.model.toLowerCase() === modelLower ||
       modelLower.includes(mapping.model.toLowerCase()) ||
       mapping.model.toLowerCase().includes(modelLower))
  );
  
  if (explicitMatch) {
    return explicitMatch.bodyType;
  }
  
  // Check grade name for specific patterns
  if (gradeLower.includes("double cab") || gradeLower.includes("doublecab")) {
    return "Double Cab";
  }
  
  if (gradeLower.includes("bus") || gradeLower.includes("seater")) {
    return "Bus";
  }
  
  if (gradeLower.includes("van")) {
    return "Van";
  }
  
  if (gradeLower.includes("single cab")) {
    return "Truck";
  }
  
  // Default classification based on model name patterns
  const combined = `${makeLower} ${modelLower} ${gradeLower}`;
  
  // Double Cab patterns
  if (
    combined.includes("hilux") ||
    (combined.includes("raptor") && !combined.includes("single cab")) ||
    combined.includes("ranger") && !combined.includes("single cab")
  ) {
    return "Double Cab";
  }
  
  // SUV patterns
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
    combined.includes("hustler") ||
    combined.includes("xbee") ||
    combined.includes("jimny") ||
    combined.includes("taft") ||
    combined.includes("rocky") ||
    combined.includes("wr-v") ||
    combined.includes("land cruiser") ||
    combined.includes("lc 300") ||
    combined.includes("lc 250") ||
    combined.includes("taisor") ||
    combined.includes("urban cruiser")
  ) {
    return "SUV";
  }
  
  // Van patterns
  if (
    combined.includes("van") ||
    combined.includes("every") ||
    combined.includes("scrum") ||
    combined.includes("spacia")
  ) {
    return "Van";
  }
  
  // Bus patterns
  if (
    combined.includes("bus") ||
    combined.includes("seater") ||
    (combined.includes("foton") && combined.includes("37"))
  ) {
    return "Bus";
  }
  
  // Truck patterns (single cab)
  if (
    combined.includes("truck") ||
    combined.includes("pickup") ||
    combined.includes("miler") ||
    combined.includes("aumark") ||
    combined.includes("mini truck")
  ) {
    return "Truck";
  }
  
  // Default to Car for everything else (sedans, hatchbacks, etc.)
  return "Car";
}
