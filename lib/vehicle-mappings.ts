// Explicit vehicle mappings for accurate filtering
// Format: "Make|Model|Grade" -> { bodyType, fuelType, passengerCapacity, year }

export interface VehicleMapping {
  bodyType: string;
  fuelType: string;
  passengerCapacity: number;
  year: number;
}

export const vehicleMappings: Record<string, VehicleMapping> = {
  // Toyota Pixis
  "Toyota|Pixis|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|L": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|B": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  
  // Toyota Aqua
  "Toyota|Aqua|Special Edition Z Raffine": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|Z": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|G": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Aqua|GR Sport": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Yaris
  "Toyota|Yaris|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Toyota Roomy
  "Toyota|Roomy|Custom GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|Custom G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Roomy|X": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Axio
  "Toyota|Corolla Axio|EX": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla
  "Toyota|Corolla|WXB": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|G": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla|X": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Toyota Prius
  "Toyota|Prius|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Prius|U": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Raize
  "Toyota|Raize|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Raize|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Yaris Cross
  "Toyota|Yaris Cross|GR Sport": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Z Adventure": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Cross|Premium Luxury": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Cross
  "Toyota|Corolla Cross|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|S": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|G": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Cross|G\"X\"": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota RAV4
  "Toyota|RAV 4|Z": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|G": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|Adventure": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|G \"Z package\"": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  "Toyota|RAV 4|X": { bodyType: "Midsize SUV", fuelType: "PHEV", passengerCapacity: 5, year: 2025 },
  
  // Toyota Sienta
  "Toyota|Sienta|Z": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|G": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Sienta|X": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Touring
  "Toyota|Corolla Touring|W X B": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|G": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Touring|X": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Corolla Fielder
  "Toyota|Corolla Fielder|EX Hybrid": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 2WD CVT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 2WD 5MT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Toyota|Corolla Fielder|EX 4WD CVT": { bodyType: "Station Wagon", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Urban Cruiser Taisor
  "Toyota|Urban Cruiser|Taisor   V Grade": { bodyType: "Compact SUV", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  
  // Toyota Land Cruiser 300
  "Toyota|Land Cruiser 300|GR Sport": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|ZX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|VX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|AX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|GX": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  
  // Toyota Yaris Ativ
  "Toyota|Yaris Ativ|Premium Luxury": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Sport": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Yaris Ativ|Nightshade": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Suzuki Alto
  "Suzuki|Alto|X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|S": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|L": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Alto|A": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  
  // Suzuki Spacia
  "Suzuki|Spacia|X": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia|G": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID XS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID GS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "Suzuki|Spacia Custom|HYBRID XS TURBO": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  
  // Suzuki Hustler
  "Suzuki|Hustler|X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|G": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|Tough Wild": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|Tough Wild Turbo": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|HYBRID G": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|HYBRID G Turbo": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|HYBRID X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Hustler|HYBRID X Turbo": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Suzuki Wagon R
  "Suzuki|Wagon R|FX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|FX-S": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|ZX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|ZT": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Suzuki|Wagon R|T": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  
  // Suzuki Swift
  "Suzuki|Swift|MZ": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Swift|MX": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|Swift|XG": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Suzuki Jimny
  "Suzuki|Jimny|XC": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XL": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XG": { bodyType: "SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  
  // Suzuki XBEE (Crosby)
  "Suzuki|XBEE|HYBRID MZ": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MV": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Suzuki|XBEE|HYBRID MX": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Honda Fit
  "Honda|Fit|Basic": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Home": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|RS": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Luxe": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Fit|Crosstar": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Honda Vezel
  "Honda|Vezel|X HuNT Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|Z・PLaY Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|Vezel|X": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Honda ZR-V
  "Honda|ZR-V|e HEV X Special Edition": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Honda|ZR-V|e HEV Z Special Edition": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Nissan X-Trail
  "Nissan|X-Trail|S": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|X": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "Nissan|X-Trail|G": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  
  // Toyota Hilux (Double Cab)
  "Toyota|Hilux|Double Cab 4x4 2.8 GR Sport AT": { bodyType: "Double Cab", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Hilux|Double Cab 4x4 2.8 Rocco AT": { bodyType: "Double Cab", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "TOYOTA HILUX|Unknown|Double Cab 4x4 2.8 GR Sport AT": { bodyType: "Double Cab", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "TOYOTA HILUX|Unknown|Double Cab 4x4 2.8 Rocco AT": { bodyType: "Double Cab", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },

  "DAIHATSU ROCKY|Unknown|L": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "DAIHATSU ROCKY|Unknown|Premium G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "DAIHATSU ROCKY|Unknown|Premium G HEV": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "DAIHATSU ROCKY|Unknown|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "DAIHATSU ROCKY|Unknown|XHEV": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  // Daihatsu Taft - multiple format variations for matching
  "Daihatsu|Taft|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|G - TURBO": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|G - TURBO CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|G - TURBO DARK CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|G CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|G DARK CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Daihatsu|Taft|X - TURBO": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  // Keep old format for backward compatibility
  "DAIHATSU TAFT|Unknown|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|G - TURBO": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|G - TURBO CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|G - TURBO DARK CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|G CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|G DARK CHROME VENTURE": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "DAIHATSU TAFT|Unknown|X - TURBO": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "FORD|RANGER(RAPTOR)|Ranger Double Cab Raptor 2.0L": { bodyType: "Double Cab", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "FORD|RANGER(RAPTOR)|Ranger Double Cab Raptor 3.0L": { bodyType: "Double Cab", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "FOTON|Bus|37 Seater": { bodyType: "Bus", fuelType: "Gasoline", passengerCapacity: 37, year: 2025 },
  "FOTON|Bus|Foton BJ6946": { bodyType: "Bus", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|Honda City": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|RS": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|S": { bodyType: "Car", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|SPECIFICATION": { bodyType: "Car", fuelType: "Electric", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|SV": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|V": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|e:HEV RS": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA CITY|Unknown|e:HEV SV": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|BASIC": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|CROSSTAR": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|HOME": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|LUXE": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|RS": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|e:HEV BASIC": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|e:HEV CROSSTAR": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|e:HEV HOME": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|e:HEV LUXE": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA FIT|Unknown|e:HEV RS": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA VEZEL|Unknown|G": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA VEZEL|Unknown|e:HEV X": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA VEZEL|Unknown|e:HEV X/HuNT Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA VEZEL|Unknown|e:HEV Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA VEZEL|Unknown|e:HEV Z・PLaY Package": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "HONDA WR|V|Details": { bodyType: "Compact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA WR|V|Z": { bodyType: "Compact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA WR|V|Z & Z+ Special Edition BLACK STYLE": { bodyType: "Compact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "HONDA WR|V|Z+": { bodyType: "Compact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "KIA SONET|Unknown|Kia Sonet GTX Plus": { bodyType: "Midsize SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "MAZDA|SCRUM|BUSTER": { bodyType: "Minivan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "MAZDA|SCRUM|PA": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "MAZDA|SCRUM|PA-S": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "MAZDA|SCRUM|PC": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "MITSUBISHI OUTLANDER|Unknown|G (7-seater/5-seater)": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "MITSUBISHI OUTLANDER|Unknown|M (5-seater)": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "MITSUBISHI OUTLANDER|Unknown|P (7-seater/5-seater)": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "MITSUBISHI OUTLANDER|Unknown|P Executive Package (7-seater/5-seater)": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "NISSAN CLIPPER|Unknown|Clipper Rio E": { bodyType: "Car", fuelType: "Electric", passengerCapacity: 5, year: 2025 },
  "NISSAN CLIPPER|Unknown|Clipper Rio G": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "NISSAN CLIPPER|Unknown|DX": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "NISSAN CLIPPER|Unknown|DX GL Package": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "NISSAN CLIPPER|Unknown|GX": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "NISSAN CLIPPER|Unknown|GX Turbo": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "NISSAN X TRAIL|Unknown|G e-4ORCE (4WD)": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "NISSAN X TRAIL|Unknown|S e-4ORCE (4WD)": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "NISSAN X TRAIL|Unknown|X e-4ORCE Xtreme X [2-row] (4WD)": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "NISSAN X TRAIL|Unknown|X e-4ORCE Xtreme X [3-row] (4WD)": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 7, year: 2025 },
  "NISSAN X TRAIL|Unknown|X e-4ORCE [2-row] (4WD)": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "NISSAN X TRAIL|Unknown|X e-4ORCE [3-row] (4WD)": { bodyType: "Midsize SUV", fuelType: "Hybrid", passengerCapacity: 7, year: 2025 },
  "SUZUKI HUSTLER|Unknown|HYBRID G": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI HUSTLER|Unknown|HYBRID G Turbo": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI HUSTLER|Unknown|HYBRID X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI HUSTLER|Unknown|HYBRID X Turbo": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI HUSTLER|Unknown|Tough Wild": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI HUSTLER|Unknown|Tough Wild Turbo": { bodyType: "Hatchback", fuelType: "Gasoline (Turbo)", passengerCapacity: 5, year: 2025 },
  "SUZUKI JIMNY|Unknown|XC 4WD/4AT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI JIMNY|Unknown|XC 4WD/5MT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI JIMNY|Unknown|XG 4WD/4AT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI JIMNY|Unknown|XG 4WD/5MT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI JIMNY|Unknown|XL 4WD/4AT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI JIMNY|Unknown|XL 4WD/5MT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  // Alternative formats from data.ts
  "Suzuki|Jimny|XC 4WD/4AT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XC 4WD/5MT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XG 4WD/4AT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XG 4WD/5MT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XL 4WD/4AT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Jimny|XL 4WD/5MT": { bodyType: "Subcompact SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI MINI TRUCK|Unknown|KC Air Conditioning Power Steering Farm": { bodyType: "Truck", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI MINI TRUCK|Unknown|KC air conditioning, power steering": { bodyType: "Truck", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI MINI TRUCK|Unknown|KX": { bodyType: "Truck", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI SWIFT|Unknown|GASOLINE XG": { bodyType: "Car", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI SWIFT|Unknown|HYBRID MX": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI SWIFT|Unknown|HYBRID MZ": { bodyType: "Car", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI WAGON R|Unknown|Custom Z - HYBRID ZT": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI WAGON R|Unknown|Custom Z - HYBRID ZX": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI WAGON R|Unknown|FX": { bodyType: "Kei Car", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "SUZUKI WAGON R|Unknown|HYBRID FX-S": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI WAGON R|Unknown|Stingray - HYBRID T": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI XBEE|Unknown|HYBRID MV": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI XBEE|Unknown|HYBRID MX": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI XBEE|Unknown|HYBRID MZ": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "SUZUKI|ALTO|A": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|ALTO|HYBRID - S": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|ALTO|HYBRID - X": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|ALTO|L": { bodyType: "Hatchback", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|EVERY|JOIN (High Roof) 2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI|EVERY|JOIN Turbo (High Roof) 2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI|EVERY|PA (high roof)2WD/4AT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI|EVERY|PA Limited (high roof)2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI|EVERY|PC (high roof) 2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  // Alternative formats from data.ts
  "Suzuki|Every|JOIN (High Roof) 2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Every|JOIN Turbo (High Roof) 2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Every|PA (high roof)2WD/4AT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Every|PA Limited (high roof)2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Suzuki|Every|PC (high roof) 2WD/CVT": { bodyType: "Van", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "SUZUKI|SPACIA|SPACIA HYBRID G": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|SPACIA|SPACIA HYBRID X": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|SPACIA|Spacia Custom HYBRID GS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|SPACIA|Spacia Custom HYBRID XS": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "SUZUKI|SPACIA|Spacia Custom HYBRID XS TURBO": { bodyType: "Kei Car", fuelType: "Hybrid", passengerCapacity: 4, year: 2025 },
  "TOYOTA LC 250|Unknown|GX(diesel 4WD, 5-seater)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "TOYOTA LC 250|Unknown|VX(diesel/Petrol 4WD, 7-seater)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 7, year: 2025 },
  "TOYOTA LC 250|Unknown|ZX(diesel, 4WD, 7-seater)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 7, year: 2025 },
  "TOYOTA LC 300|Unknown|AX 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "TOYOTA LC 300|Unknown|GR SPORT 3.3L Diesel (5-seater)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "TOYOTA LC 300|Unknown|GR SPORT 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "TOYOTA LC 300|Unknown|GX 3.5L gasoline (5-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA LC 300|Unknown|VX 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "TOYOTA LC 300|Unknown|ZX 3.3L Diesel (5seats)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  // Additional mappings for LC 300 with exact grade names from data.ts
  "Toyota|LC 300|GR SPORT 3.3L Diesel (5-seater)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|LC 300|GR SPORT 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "Toyota|LC 300|GX 3.5L gasoline (5-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|LC 300|VX 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "Toyota|LC 300|ZX 3.3L Diesel (5seats)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  // Also add mappings for Land Cruiser 300 variations
  "Toyota|Land Cruiser 300|GR SPORT 3.3L Diesel (5-seater)": { bodyType: "Full-Size SUV", fuelType: "Diesel", passengerCapacity: 5, year: 2025 },
  "Toyota|Land Cruiser 300|GR SPORT 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "TOYOTA LC 300|Unknown|ZX 3.5L petrol (7-seater)": { bodyType: "Full-Size SUV", fuelType: "Gasoline", passengerCapacity: 7, year: 2025 },
  "TOYOTA YARIS CROSS(THAILAND)|Unknown|Toyota Yaris Cross HEV Premium Luxury (Thailand)": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|AQUA|G": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|AQUA|GR SPORT": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|AQUA|SPECIAL EDITION Z RAFFINE": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|AQUA|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|AQUA|Z": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA AXIO|EX": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA CROSS|G": { bodyType: "Compact SUV", fuelType: "Electric", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA CROSS|G“X”": { bodyType: "Compact SUV", fuelType: "Electric", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA CROSS|S": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA CROSS|Z": { bodyType: "Compact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA FILDER|EX 2WD 5MT": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA FILDER|EX 2WD CVT": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA FILDER|EX 4WD CVT": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA FILDER|EX HYBRID": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA TOURING|TOYOTA COROLLA TOURING - G": { bodyType: "Station Wagon", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA TOURING|TOYOTA COROLLA TOURING - W X B": { bodyType: "Station Wagon", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA TOURING|TOYOTA COROLLA TOURING - X": { bodyType: "Station Wagon", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA|G": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA|WXB": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|COROLLA|X": { bodyType: "Sedan", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|PRIUS|U": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|PRIUS|X": { bodyType: "Sedan", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAIZE|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAIZE|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAIZE|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAV 4|Adventure": { bodyType: "Midsize SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAV 4|G": { bodyType: "Midsize SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAV 4|G “Z package”": { bodyType: "Midsize SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAV 4|X": { bodyType: "Midsize SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|RAV 4|Z": { bodyType: "Midsize SUV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|ROOMY|CUSTOM - G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|ROOMY|CUSTOM GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|ROOMY|G": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|ROOMY|GT": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|ROOMY|X": { bodyType: "MPV", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|SIENTA 2025|TOYOTA SIENTA - G": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 7, year: 2025 },
  "TOYOTA|SIENTA 2025|TOYOTA SIENTA - X": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 7, year: 2025 },
  "TOYOTA|SIENTA 2025|TOYOTA SIENTA - Z": { bodyType: "Minivan", fuelType: "Hybrid", passengerCapacity: 7, year: 2025 },
  "TOYOTA|YARIS CROSS|G": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|YARIS CROSS|GR SPORT": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|YARIS CROSS|X": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|YARIS CROSS|Z": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|YARIS CROSS|Z ADVENTURE": { bodyType: "Subcompact SUV", fuelType: "Hybrid", passengerCapacity: 5, year: 2025 },
  "TOYOTA|YARIS|G": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "TOYOTA|YARIS|X": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 5, year: 2025 },
  "Toyota|Pixis|B ''SA III''": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|G “SA III”": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|L ''SA III''": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
  "Toyota|Pixis|X ''SA III''": { bodyType: "Hatchback", fuelType: "Gasoline", passengerCapacity: 4, year: 2025 },
};

// Helper function to get vehicle mapping (with fuzzy matching)
export function getVehicleMapping(
  makeName: string,
  modelName: string,
  gradeName: string
): VehicleMapping | null {
  // Try exact match first
  const exactKey = `${makeName}|${modelName}|${gradeName}`;
  if (vehicleMappings[exactKey]) {
    return vehicleMappings[exactKey];
  }
  
  // Try normalized variations
  const normalizedGrade = gradeName
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'");
  
  const normalizedKey = `${makeName}|${modelName}|${normalizedGrade}`;
  if (vehicleMappings[normalizedKey]) {
    return vehicleMappings[normalizedKey];
  }
  
  // Try case-insensitive match
  for (const [key, value] of Object.entries(vehicleMappings)) {
    const [make, model, grade] = key.split("|");
    if (
      make.toLowerCase() === makeName.toLowerCase() &&
      model.toLowerCase() === modelName.toLowerCase() &&
      grade.toLowerCase() === gradeName.toLowerCase()
    ) {
      return value;
    }
  }
  
  // Try partial grade name match (for cases like "Sienta Z" matching "Sienta Z 5-seater")
  for (const [key, value] of Object.entries(vehicleMappings)) {
    const [make, model, grade] = key.split("|");
    if (
      make.toLowerCase() === makeName.toLowerCase() &&
      model.toLowerCase() === modelName.toLowerCase() &&
      gradeName.toLowerCase().includes(grade.toLowerCase())
    ) {
      return value;
    }
  }
  
  // Try matching with "Unknown" model (for cases where model name wasn't properly extracted)
  // Also try case-insensitive model matching and handle model name variations
  for (const [key, value] of Object.entries(vehicleMappings)) {
    const [make, model, grade] = key.split("|");
    const makeMatch = make.toLowerCase() === makeName.toLowerCase();
    
    // Handle model name variations (e.g., "LC 300" vs "Land Cruiser 300")
    const modelLower = model.toLowerCase();
    const modelNameLower = modelName.toLowerCase();
    const modelMatch = modelLower === "unknown" || 
                       modelLower === modelNameLower ||
                       modelNameLower.includes(modelLower) ||
                       modelLower.includes(modelNameLower) ||
                       // Special case: "LC 300" should match "Land Cruiser 300"
                       (modelNameLower.includes("lc") && modelLower.includes("land cruiser")) ||
                       (modelLower.includes("lc") && modelNameLower.includes("land cruiser")) ||
                       // Handle abbreviations: "LC 250" matches "LC 250" or "Land Cruiser 250"
                       (modelNameLower.replace(/\s+/g, "") === modelLower.replace(/\s+/g, ""));
    
    const gradeMatch = gradeName.toLowerCase().includes(grade.toLowerCase()) || 
                       grade.toLowerCase().includes(gradeName.toLowerCase()) ||
                       gradeName.toLowerCase() === grade.toLowerCase();
    
    if (makeMatch && modelMatch && gradeMatch) {
      return value;
    }
  }
  
  // Try reverse partial match (grade in mapping contains grade name)
  for (const [key, value] of Object.entries(vehicleMappings)) {
    const [make, model, grade] = key.split("|");
    if (
      make.toLowerCase() === makeName.toLowerCase() &&
      (model.toLowerCase() === modelName.toLowerCase() || model.toLowerCase() === "unknown") &&
      grade.toLowerCase().includes(gradeName.toLowerCase())
    ) {
      return value;
    }
  }
  
  return null;
}

// Normalize body types to match filter options (grouped categories)
export function normalizeBodyType(bodyType: string): string {
  const normalized: Record<string, string> = {
    // Car category
    "Hatchback": "Car",
    "Sedan": "Car",
    "Station Wagon": "Car",
    "Kei Car": "Car",
    // Van category
    "MPV": "Van",
    "Minivan": "Van",
    // SUV category
    "Subcompact SUV": "SUV",
    "Compact SUV": "SUV",
    "Midsize SUV": "SUV",
    "Full-Size SUV": "SUV",
    "SUV": "SUV",
    // Truck category
    "Truck": "Truck",
    "Pickup": "Truck",
    // Double Cab category
    "Double Cab": "Double Cab",
    // Bus category
    "Bus": "Bus",
    "Mini Bus": "Bus",
  };
  return normalized[bodyType] || "Car";
}

// Normalize fuel types to match filter options
export function normalizeFuelType(fuelType: string): string {
  const normalized: Record<string, string> = {
    "Gasoline": "Petrol",
    "Gasoline (Turbo)": "Petrol",
    "Hybrid": "Hybrid",
    "PHEV": "Hybrid", // Plug-in Hybrid
    "Diesel": "Diesel",
    "Electric": "Electric",
  };
  return normalized[fuelType] || fuelType;
}
