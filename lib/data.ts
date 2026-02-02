// Vehicle data structure: Make → Model → Grade → Specifications

export interface Specification {
  category: string;
  items: { name: string; value: string; highlighted?: boolean }[];
}

export interface Grade {
  id: string;
  name: string;
  specifications: Specification[];
  imageUrl?: string;
}

export interface Model {
  id: string;
  name: string;
  grades: Grade[];
}

export interface Make {
  id: string;
  name: string;
  models: Model[];
}

export const makes: Make[] = [
  {
    id: "toyota",
    name: "Toyota",
    models: [
      {
        id: "pixis",
        name: "Pixis",
        grades: [
          {
            id: "pixis-g-sa-iii",
            name: 'G "SA III"',
            imageUrl: "/Toyota-Pixis-G-SA-III.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A top-of-the-line model that takes safety and comfort into consideration",
                  },
                  { name: "Engine Type", value: "658CC/Gasoline" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Driver's seat/passenger seat heater", value: "Included" },
                  {
                    name: "Self-illuminating digital meter (blue illumination meter)",
                    value: "(with plated bezel) [TFT multi-information display]",
                  },
                  { name: "Automatic air conditioner", value: "(push type)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "155/65R14 tires and 4.5J aluminum wheels" },
                  {
                    name: "LED headlamps",
                    value: "(low/high beam, manual leveling function, LED clearance lamps)",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Safety Features", value: "Dual SRS airbags/SRS side airbags", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Splash blue metallic", value: "-B80" },
                  { name: "Sky blue metallic", value: "-B83" },
                  { name: "Plum brown crystal mica", value: "-R59" },
                  { name: "Fire quartz red metallic", value: "-R67" },
                  { name: "Bright silver metallic", value: "-S28" },
                  { name: "Shining White Pearl", value: "-W25" },
                  { name: "Black mica metallic", value: "-X07" },
                  { name: "Lemon squash crystal metallic", value: "-Y13" },
                ],
              },
            ],
          },
          {
            id: "pixis-x-sa-iii",
            name: "X ''SA III''",
            imageUrl: "/Toyota - Pixis - X ''SA III''.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A high-end model with sophisticated equipment",
                  },
                  { name: "Engine Type", value: "658CC/Gasoline" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  {
                    name: "Self-illuminating digital meter (blue illumination meter)",
                    value: "(with plated bezel) [TFT multi-information display]",
                  },
                  { name: "Manual air conditioner", value: "(dial type)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "155/65R14 tires and 4.5J steel wheels (full plastic cap)" },
                  {
                    name: "LED headlamps",
                    value: "(low/high beam, manual leveling function, LED clearance lamps)",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Safety Features", value: "Dual SRS airbags", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Splash blue metallic", value: "-B80" },
                  { name: "Sky blue metallic", value: "-B83" },
                  { name: "Plum brown crystal mica", value: "-R59" },
                  { name: "Fire quartz red metallic", value: "-R67" },
                  { name: "Bright silver metallic", value: "-S28" },
                  { name: "Shining White Pearl", value: "-W25" },
                  { name: "Black mica metallic", value: "-X07" },
                  { name: "Lemon squash crystal metallic", value: "-Y13" },
                ],
              },
            ],
          },
          {
            id: "pixis-l-sa-iii",
            name: "L ''SA III''",
            imageUrl: "/Toyota - Pixis - L ''SA III''.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A standard model that is comfortable to drive every day",
                  },
                  { name: "Engine Type", value: "658CC/Gasoline" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  {
                    name: "Self-illuminating digital meter (amber illumination meter)",
                    value: "[Multi-information display]",
                  },
                  { name: "Manual air conditioner", value: "(dial type)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "155/70R13 tires & 4.00B steel wheels (full plastic cap)" },
                  {
                    name: "Multi-reflector halogen headlamp",
                    value: "(with manual leveling function)",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Safety Features", value: "Dual SRS airbags", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Sky blue metallic", value: "-B8" },
                  { name: "Plum brown crystal mica", value: "-R59" },
                  { name: "Fire quartz red metallic", value: "-R67" },
                  { name: "Bright silver metallic", value: "-S28" },
                  { name: "White", value: "-W19" },
                  { name: "Shining White Pearl", value: "-W25" },
                  { name: "Black mica metallic", value: "-X07" },
                ],
              },
            ],
          },
          {
            id: "pixis-b-sa-iii",
            name: "B ''SA III''",
            imageUrl: "/Toyota - Pixis - B ''SA III''.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple model that is easy for everyone to use",
                  },
                  { name: "Engine Type", value: "658CC/Gasoline" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  {
                    name: "Self-illuminating digital meter (amber illumination meter)",
                    value: "[Multi-information display]",
                  },
                  { name: "Manual air conditioner", value: "(dial type)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "155/70R13 tires & 4.00B steel wheels (with center caps)" },
                  {
                    name: "Multi-reflector halogen headlamp",
                    value: "(with manual leveling function)",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Safety Features", value: "Dual SRS airbags", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Sky blue metallic", value: "-B8" },
                  { name: "Bright silver metallic", value: "-S28" },
                  { name: "White", value: "-W19" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "aqua",
        name: "Aqua",
        grades: [
          {
            id: "aqua-special-edition-z-raffine",
            name: "SPECIAL EDITION Z RAFFINE",
            imageUrl: "/TOYOTA - AQUA - SPECIAL EDITION Z RAFFINE.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A special edition car named after the French word for \"quality\"",
                  },
                  { name: "Engine Type", value: "1490CC/HYBRID" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "High-grade fabric" },
                  { name: "Front seats", value: "(separate headrest type)" },
                  {
                    name: "Multi-information display",
                    value: "(4.2-inch color TFT LCD) + digital meter (with meter illumination control function) ■ TFT [Thin Film Transistor]",
                  },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(silver painted)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires & 15x6J aluminum wheels (bronze/with center ornament)" },
                  {
                    name: "Bi-Beam LED headlamp",
                    value: "(with manual leveling function) + LED turn lamp + LED clearance lamp (with daytime running light function)",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night] and cyclist [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Body color (two tone)", value: "Dark gray - 1L7 x Clear beige metallic - 4Y3 [2WT]" },
                  { name: "Body color (two tone)", value: "Dark gray - 1L7 × Urban khaki - 6X3 [2WU]" },
                  { name: "Body color (two tone)", value: "Black mica - 209 × Dark gray - 1L7 [M54]" },
                ],
              },
            ],
          },
          {
            id: "aqua-z",
            name: "Z",
            imageUrl: "/TOYOTA - AQUA - Z.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Top-of-the-line model incorporating a variety of advanced technologies",
                  },
                  { name: "Engine Type", value: "1490CC/HYBRID" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat cover", value: "High-grade fabric" },
                  { name: "Front seats", value: "(separate headrest type)" },
                  {
                    name: "Multi-information display",
                    value: "(4.2-inch color TFT LCD) + digital meter (with meter illumination control function) ■ TFT [Thin Film Transistor]",
                  },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(silver painted)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires & 15x6J aluminum wheels (with center ornament)" },
                  {
                    name: "Bi-Beam LED headlamp",
                    value: "(with manual leveling function) + LED turn lamp + LED clearance lamp (with daytime running light function)",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night] and cyclist [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Body color (monotone)", value: "Platinum White Pearl Mica -089" },
                  { name: "Body color (monotone)", value: "Silver metallic - 1F7" },
                  { name: "Body color (monotone)", value: "Black mica - 209" },
                  { name: "Body color (monotone)", value: "Emotional Red II - 3U5" },
                  { name: "Body color (monotone)", value: "Clear beige metallic - 4Y3" },
                  { name: "Body color (monotone)", value: "Brass gold metallic - 5C2" },
                  { name: "Body color (monotone)", value: "Urban khaki - 6X3" },
                  { name: "Body color (monotone)", value: "Dark blue mica metallic - 8W7" },
                  { name: "Body color (monotone)", value: "Pop Orange Crystal Shine - 4W5" },
                  { name: "Body color (two tone)", value: "Dark gray - 1L7 × Clear beige metallic -4Y3 - [2WT]" },
                  { name: "Body color (two tone)", value: "Dark gray - 1L7 × Urban khaki - 6X3 -[2WU]" },
                  { name: "Body color (two tone)", value: "Dark gray - 1L7 × Brass gold metallic -5C2 - [2YS]" },
                  { name: "Body color (two tone)", value: "Dark gray - 1L7 × Pop orange crystal shine 4W5 - [2YR]" },
                ],
              },
            ],
          },
          {
            id: "aqua-g",
            name: "G",
            imageUrl: "/TOYOTA - AQUA - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A mid-range model with an excellent balance of functions and equipment",
                  },
                  { name: "Engine Type", value: "1490CC/HYBRID" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "High-grade fabric" },
                  { name: "Front seats", value: "(separate headrest type)" },
                  {
                    name: "Multi-information display",
                    value: "(4.2-inch color TFT LCD) + digital meter (with meter illumination control function) ■ TFT [Thin Film Transistor]",
                  },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(silver painted)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires & 15x6J steel wheels (full plastic cap)" },
                  {
                    name: "Dual LED headlamp",
                    value: "(with manual leveling function) + turn signal lamp + clearance lamp",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night] and cyclist [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "-089" },
                  { name: "Silver metallic", value: "- 1F7" },
                  { name: "Black mica", value: "- 209" },
                  { name: "Emotional Red II", value: "- 3U5" },
                  { name: "Clear beige metallic", value: "- 4Y3" },
                  { name: "Brass gold metallic", value: "- 5C2" },
                  { name: "Urban khaki", value: "- 6X3" },
                  { name: "Dark blue mica metallic", value: "- 8W7" },
                  { name: "Pop Orange Crystal Shine", value: "- 4W5" },
                ],
              },
            ],
          },
          {
            id: "aqua-x",
            name: "X",
            imageUrl: "/TOYOTA - AQUA - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "An entry model with all the necessary functions",
                  },
                  { name: "Engine Type", value: "1490CC/HYBRID" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric" },
                  {
                    name: "Front seats",
                    value: "(with integrated headrests) ■ If you select the Comfort Package or Turn Tilt Seat, the headrest will be separate.",
                  },
                  {
                    name: "Multi-information display",
                    value: "(4.2-inch color TFT LCD) + digital meter (with meter illumination control function) ■ TFT [Thin Film Transistor]",
                  },
                  { name: "Urethane 3-spoke steering wheel", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires & 15x6J steel wheels (full plastic cap)" },
                  {
                    name: "Dual LED headlamp",
                    value: "(with manual leveling function) + turn signal lamp + clearance lamp",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night] and cyclist [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Platinum White Pearl Mica", value: "-089" },
                  { name: "Silver metallic", value: "- 1F7" },
                  { name: "Black mica", value: "- 209" },
                  { name: "Emotional Red II", value: "- 3U5" },
                  { name: "Clear beige metallic", value: "- 4Y3" },
                  { name: "Brass gold metallic", value: "- 5C2" },
                  { name: "Urban khaki", value: "- 6X3" },
                  { name: "Dark blue mica metallic", value: "- 8W7" },
                  { name: "Pop Orange Crystal Shine", value: "- 4W5" },
                ],
              },
            ],
          },
          {
            id: "aqua-gr-sport",
            name: "GR SPORT",
            imageUrl: "/TOYOTA - AQUA - GR SPORT.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A sporty model that pursues driving pleasure",
                  },
                  { name: "Engine Type", value: "1490CC/HYBRID" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "AIRNUBUCK® + synthetic leather" },
                  {
                    name: "Exclusive sporty front seats",
                    value: "(with GR logo) (separate headrest type)",
                  },
                  {
                    name: "Multi-information display",
                    value: "(4.2-inch color TFT LCD) + digital meter (with meter illumination control function) ■ TFT [Thin Film Transistor]",
                  },
                  {
                    name: "Special dimpled leather-wrapped three-spoke steering wheel",
                    value: "(gunmetallic finish/GR logo)",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  {
                    name: "Tires and wheels",
                    value: "205/45R17 tires (POTENZA RE050A) & 17x7J dedicated aluminum wheels (cut and polished + black painted / with center ornament)",
                  },
                  {
                    name: "Dual LED headlamp",
                    value: "(with manual leveling function) + turn signal lamp + clearance lamp",
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night] and cyclist [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Body color (monotone)", value: "Platinum White Pearl Mica -089" },
                  { name: "Body color (monotone)", value: "Black mica - 209" },
                  { name: "Body color (monotone)", value: "Emotional Red II - 3U5" },
                  { name: "Body color (monotone)", value: "Dark Gray - 1L7" },
                  { name: "Body color (two tone)", value: "Dark Gray - 1L7 × Emotional Red II - 3U5 -［2YQ］" },
                  { name: "Body color (two tone)", value: "Dark Gray - 1L7 × Platinum White Pearl Mica 089 -［2YP］" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "yaris",
        name: "Yaris",
        grades: [
          {
            id: "yaris-g",
            name: "G",
            imageUrl: "/TOYOTA - YARIS - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple model with basic equipment",
                  },
                  { name: "Engine Type", value: "1000cc/Petrol" },
                  { name: "Transmission Type", value: "Auto" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                  { name: "Fuel Consumption", value: "20 km/L" },
                  { name: "5 Door Hatchback", value: "Spacious and practical" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric" },
                  { name: "Digital meter + 7.0-inch TFT color multi-information display", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "175/70R14 tires and 14×5 ½J steel wheels" },
                  { name: "Projector-type halogen headlamps", value: "Included" },
                  { name: "Rear combination lamp", value: "Included" },
                  { name: "Front grille", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Full Options",
                    value: "Comfort and style combined",
                    highlighted: true,
                  },
                  {
                    name: "5 Door Hatchback",
                    value: "Spacious and practical",
                    highlighted: true,
                  },
                  {
                    name: "Safety Pack",
                    value: "Parking support brake / Pre-crash safety (collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Platinum White Pearl Mica", value: "- 089" },
                  { name: "Silver metallic", value: "- 1L0" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black", value: "- 202" },
                  { name: "Sensual Red Mica", value: "- 3T3" },
                  { name: "Coral Crystal Shine", value: "- 3U7" },
                  { name: "Avant Garde Bronze Metallic", value: "- 4V8" },
                  { name: "Body color (two tone)", value: "Black – 202 × Avant-garde Bronze Metallic - 4V8［2SQ］" },
                  { name: "Body color (two tone)", value: "Black – 202 × Coral Crystal Shine - 3U7 [2SR]" },
                  { name: "Body color (two tone)", value: "Black – 202 × Massive Gray - 1L6［M22］" },
                ],
              },
            ],
          },
          {
            id: "yaris-x",
            name: "X",
            imageUrl: "/TOYOTA - YARIS - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple model with basic equipment",
                  },
                  { name: "Engine Type", value: "996/Gasoline" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "175/70R14 tires and 14×5 ½J steel wheels (with plastic full caps)" },
                  { name: "Projector-type halogen headlamps", value: "Included" },
                  { name: "Rear combination lamp", value: "Included" },
                  { name: "Front grille", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Safety Pack",
                    value: "Parking support brake (front and rear stationary objects) / Pre-crash safety (collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Drive Start Control",
                    value: "■ Standard equipment on CVT.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Platinum White Pearl Mica", value: "- 089" },
                  { name: "Silver metallic", value: "- 1L0" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black", value: "- 202" },
                  { name: "Sensual Red Mica", value: "- 3T3" },
                  { name: "Coral Crystal Shine", value: "- 3U7" },
                  { name: "Avant Garde Bronze Metallic", value: "- 4V8" },
                  { name: "Body color (two tone)", value: "Black – 202 × Avant-garde Bronze Metallic - 4V8［2SQ］" },
                  { name: "Body color (two tone)", value: "Black – 202 × Coral Crystal Shine - 3U7 [2SR]" },
                  { name: "Body color (two tone)", value: "Black – 202 × Massive Gray - 1L6［M22］" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "roomy",
        name: "Roomy",
        grades: [
          {
            id: "roomy-custom-gt",
            name: "CUSTOM GT",
            imageUrl: "/TOYOTA - ROOMY - CUSTOM GT.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Aero style equipped with all advanced features",
                  },
                  { name: "Engine Type", value: "996/Gasoline" },
                  { name: "Fuel Consumption", value: "16 km/L - 18 km/L" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric (with water-repellent function)" },
                  { name: "Front seat walk-through", value: "Included" },
                  { name: "Optitron meter", value: "(two eyes/with silver decoration)" },
                  { name: "Automatic air conditioner", value: "(push type/piano black panel)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "175/55R15 tires & 15×5J aluminum wheels (with center ornament)" },
                  { name: "LED headlamp", value: "(with auto-leveling function)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver and passenger seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                  { name: "Cool Violet Crystal Shine", value: "- P19" },
                  { name: "Plum Brown Crystal Mica", value: "- R59" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Bright Silver Metallic", value: "- S28" },
                  { name: "Pearl White III", value: "- W24" },
                  { name: "Black Mica Metallic", value: "- X07" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic - X07 x Fire Quartz Red Metallic - R67 [X96]" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic - X07 × Pearl White III - W24［X99］" },
                ],
              },
            ],
          },
          {
            id: "roomy-custom-g",
            name: "CUSTOM - G",
            imageUrl: "/TOYOTA - ROOMY - CUSTOM - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Aero style with emphasis on design and high functionality",
                  },
                  { name: "Engine Type", value: "996/Gasoline" },
                  { name: "Fuel Consumption", value: "16 km/L - 18 km/L" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat cover", value: "Fabric (with water-repellent function)" },
                  { name: "Front seat walk-through", value: "Included" },
                  { name: "Optitron meter", value: "(two eyes/with silver decoration)" },
                  { name: "Automatic air conditioner", value: "(push type/piano black panel)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "165/65R14 tires & 14×5J aluminum wheels (with center ornament)" },
                  { name: "LED headlamp", value: "(with auto-leveling function)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver and passenger seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                  { name: "Cool Violet Crystal Shine", value: "- P19" },
                  { name: "Plum Brown Crystal Mica", value: "- R59" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Bright Silver Metallic", value: "- S28" },
                  { name: "Pearl White III", value: "- W24" },
                  { name: "Black Mica Metallic", value: "- X07" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic - X07 x Fire Quartz Red Metallic - R67 [X96]" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic - X07 × Pearl White III - W24［X99］" },
                ],
              },
            ],
          },
          {
            id: "roomy-gt",
            name: "GT",
            imageUrl: "/TOYOTA - ROOMY - GT.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A highly functional casual model with enhanced running performance",
                  },
                  { name: "Engine Type", value: "996/Gasoline" },
                  { name: "Fuel Consumption", value: "16 km/L - 18 km/L" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Front seat walk-through", value: "Included" },
                  { name: "Optitron meter", value: "(two lenses)" },
                  { name: "Automatic air conditioner", value: "(push type/black panel)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "165/65R14 tires and 14x5J steel wheels (full plastic cap)" },
                  { name: "LED headlamp", value: "(with manual leveling function)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver and passenger seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                  { name: "Cool Violet Crystal Shine", value: "- P19" },
                  { name: "Plum Brown Crystal Mica", value: "- R59" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Bright Silver Metallic", value: "- S28" },
                  { name: "Pearl White III", value: "- W24" },
                  { name: "Black Mica Metallic", value: "- X07" },
                ],
              },
            ],
          },
          {
            id: "roomy-g",
            name: "G",
            imageUrl: "/TOYOTA - ROOMY - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A casual model with plenty of functionality for everyday use",
                  },
                  { name: "Engine Type", value: "996/Gasoline" },
                  { name: "Fuel Consumption", value: "16 km/L - 18 km/L" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Front seat walk-through", value: "Included" },
                  { name: "Optitron meter", value: "(two lenses)" },
                  { name: "Automatic air conditioner", value: "(push type/black panel)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "165/65R14 tires and 14x5J steel wheels (full plastic cap)" },
                  { name: "LED headlamp", value: "(with manual leveling function)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver and passenger seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                  { name: "Cool Violet Crystal Shine", value: "- P19" },
                  { name: "Plum Brown Crystal Mica", value: "- R59" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Bright Silver Metallic", value: "- S28" },
                  { name: "Pearl White III", value: "- W24" },
                  { name: "Black Mica Metallic", value: "- X07" },
                ],
              },
            ],
          },
          {
            id: "roomy-x",
            name: "X",
            imageUrl: "/TOYOTA - ROOMY - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple model with carefully selected functions for everyday use",
                  },
                  { name: "Engine Type", value: "996/Gasoline" },
                  { name: "Fuel Consumption", value: "16 km/L - 18 km/L" },
                  { name: "Transmission Type", value: "Continuously Variable Transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Front seat walk-through", value: "Included" },
                  { name: "Analog meter", value: "(monocular)" },
                  { name: "Manual air conditioner", value: "(dial type)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "165/65R14 tires and 14x5J steel wheels (full plastic cap)" },
                  { name: "Multi-reflector halogen headlamp", value: "(with manual leveling function)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver and passenger seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                  { name: "Cool Violet Crystal Shine", value: "- P19" },
                  { name: "Plum Brown Crystal Mica", value: "- R59" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Bright Silver Metallic", value: "- S28" },
                  { name: "Pearl White III", value: "- W24" },
                  { name: "Black Mica Metallic", value: "- X07" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "corolla-axio",
        name: "Corolla Axio",
        grades: [
          {
            id: "corolla-axio-ex",
            name: "EX",
            imageUrl: "/TOYOTA - COROLLA AXIO - EX.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model that combines high quality and excellent functionality",
                  },
                  { name: "Engine Type", value: "1496/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat cover", value: "Fabric (black)" },
                  { name: "Large upper box and glove box", value: "(passenger side)" },
                  { name: "Front cup holders and front console pockets", value: "Included" },
                  { name: "Parking brake lever side tray & accessory socket", value: "(DC12V, 120W)" },
                  { name: "Automatic air conditioner", value: "(with pollen removal mode) & push-button heater control panel + Nanoe X" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Rear bumper", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Leading vehicle departure notification function",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Silver metallic", value: "- 1F7" },
                  { name: "Black Mica", value: "- 209" },
                  { name: "Avant-garde Bronze Metallic", value: "- 4V8" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "corolla",
        name: "Corolla",
        grades: [
          {
            id: "corolla-wxb",
            name: "WXB",
            imageUrl: "/TOYOTA - COROLLA - WXB.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Top-of-the-line model with dynamic aluminum wheels and full equipment",
                  },
                  { name: "Engine Type", value: "1490/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Synthetic leather + REZATEC" },
                  { name: "8-inch display audio/center cluster", value: "(smoke silver metallic)" },
                  { name: "12.3-inch TFT color multi-information display/meter cluster", value: "(smoke silver metallic)" },
                  { name: "Automatic air conditioner (single mode) & heater control panel", value: "(smoke silver metallic)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Pillar and roof headlining color", value: "(black)" },
                  { name: "Sporty seats", value: "[synthetic leather + leather tech]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Bi-Beam LED headlamp + LED turn lamp + LED clearance lamp & LED daytime running light", value: "Included" },
                  { name: "LED front fog lamps", value: "Included" },
                  { name: "LED rear lamps", value: "(tail and stop lamps)" },
                  { name: "Front lower grill & front grill molding", value: "(glossy black) & (glossy silver)" },
                  { name: "Rear spoiler & rear bumper", value: "(dark metallic)" },
                  { name: "Tires and wheels", value: "215/45R17 tires and 17×7½J aluminum wheels (Dark gray metallic paint/with center ornament)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Proactive Driving Assist [PDA]",
                    value: "Included",
                    highlighted: true,
                  },
                  {
                    name: "Drive recorder (front) + rear guide monitor",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "- 089" },
                  { name: "Massive Gray", value: "- 1L6" },
                  { name: "Attitude Black Mica", value: "- 218" },
                  { name: "Sparkling Black Pearl Crystal Shine", value: "- 220" },
                  { name: "Sensual Red Mica", value: "- 3T3" },
                ],
              },
            ],
          },
          {
            id: "corolla-g",
            name: "G",
            imageUrl: "/TOYOTA - COROLLA - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model with a good balance of fuel economy and equipment",
                  },
                  { name: "Engine Type", value: "1490/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "8-inch display audio/center cluster", value: "(satin-plated finish)" },
                  { name: "7.0-inch TFT color multi-information display/meter cluster", value: "(satin-plated finish)" },
                  { name: "Automatic air conditioner (single mode) & heater control panel", value: "(silver)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Pillar and roof headlining color", value: "(white)" },
                  { name: "Normal seat (high-grade)", value: "[fabric]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "3-lamp LED headlamp + LED turn lamp + LED clearance lamp", value: "Included" },
                  { name: "LED rear lamps", value: "(tail and stop lamps)" },
                  { name: "Front lower grill & front grill molding", value: "(black) & (glossy silver)" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Tires and wheels", value: "195/65R15 tires and 15x6J steel wheels (with plastic full caps)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Proactive Driving Assist [PDA]",
                    value: "Included",
                    highlighted: true,
                  },
                  {
                    name: "Drive recorder (front) + rear guide monitor",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Platinum White Pearl Mica", value: "- 089" },
                  { name: "Silver metallic", value: "- 1F7" },
                  { name: "Attitude Black Mica", value: "- 218" },
                  { name: "Sensual Red Mica", value: "- 3T3" },
                  { name: "Blue Metallic", value: "- 8X7" },
                ],
              },
            ],
          },
          {
            id: "corolla-x",
            name: "X",
            imageUrl: "/TOYOTA - COROLLA - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Simple and standard model",
                  },
                  { name: "Engine Type", value: "1490/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "8-inch display audio/center cluster", value: "(satin-plated finish)" },
                  { name: "7.0-inch TFT color multi-information display/meter cluster", value: "(satin-plated finish)" },
                  { name: "Automatic air conditioner (single mode) & heater control panel", value: "(silver)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Pillar and roof headlining color", value: "(white)" },
                  { name: "Normal seat (high-grade)", value: "[fabric]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "3-lamp LED headlamp + LED turn lamp + LED clearance lamp", value: "Included" },
                  { name: "LED rear lamps", value: "(tail and stop lamps)" },
                  { name: "Front lower grill & front grill molding", value: "(black) & (glossy silver)" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Tires and wheels", value: "195/65R15 tires and 15x6J steel wheels (with plastic full caps)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Proactive Driving Assist [PDA]",
                    value: "Included",
                    highlighted: true,
                  },
                  {
                    name: "Drive recorder (front) + rear guide monitor",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Platinum White Pearl Mica", value: "- 089" },
                  { name: "Silver metallic", value: "- 1F7" },
                  { name: "Attitude Black Mica", value: "- 218" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "prius",
        name: "Prius",
        grades: [
          {
            id: "prius-x",
            name: "X",
            imageUrl: "/TOYOTA - PRIUS - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model equipped with items necessary for business",
                  },
                  { name: "Engine Type", value: "1797/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Audioless", value: "Included" },
                  { name: "Shift knob", value: "(glossy black finish)" },
                  { name: "Inside door handle / Front door upper trim / Power window switch / Synthetic leather front door armrest", value: "(black)" },
                  { name: "Automatic air conditioning", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "195/60R17 tires and 17×6½J steel wheels (with plastic full caps [dark gray metallic paint])" },
                  { name: "Front lower grill", value: "(black)" },
                  { name: "Rear bumper lower", value: "(black)" },
                  { name: "Center pillar garnish", value: "(black)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Super White II", value: "- 040" },
                  { name: "Silver metallic", value: "- 1L0" },
                ],
              },
            ],
          },
          {
            id: "prius-u",
            name: "U",
            imageUrl: "/TOYOTA - PRIUS - U.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "\"U\" pursues economic efficiency by adding \"evolution\" and \"monitoring\" to subscription services",
                  },
                  { name: "Engine Type", value: "1797/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Standard interior and standard specifications", value: "no additional options" },
                  { name: "Automatic air conditioning", value: "Included" },
                  { name: "Accessory socket, USB charging port, USB communication/charging port", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "195/60R17 tires and 17×6½J steel wheels (with plastic full caps [dark gray metallic paint])" },
                  { name: "Switch-type opening and closing operation", value: "Included" },
                  { name: "Aluminum wheels with plastic full caps inside", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Attitude Black Mica", value: "" },
                  { name: "Ash", value: "" },
                  { name: "Dark Blue", value: "" },
                  { name: "Platinum White Pearl Mica", value: "" },
                  { name: "Emotional Red", value: "" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "raize",
        name: "Raize",
        grades: [
          {
            id: "raize-z",
            name: "Z",
            imageUrl: "/TOYOTA - RAIZE - Z.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model with excellent design and safety features",
                  },
                  { name: "Engine Type", value: "1196/Hybrid/Gasoline - 2WD (20.7km/L) / 996 (1L- Turbo)/Gasoline - 4WD (17.4km/L) (The 1.0L turbo engine delivers torque equivalent to a 1.5L engine)" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric" },
                  { name: "LED digital speedometer + 7-inch TFT color LCD display", value: "(with multi-information display)" },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(silver painted)" },
                  { name: "Genuine leather-wrapped shift knob / Shift lever boot / Textured shift bezel", value: "(with ornament) / (double-stitched) / (with plated ornament)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "195/60R17 tires & 17x6J aluminum wheels (cut and polished + black painted / 5 holes)" },
                  { name: "LED headlamps", value: "(with auto-leveling function) + LED clearance lamps + LED front sequential turn lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Smart Assist",
                    value: "■ The Smart Assist equipment options vary depending on the grade.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Shining White Pearl", value: "- W25" },
                  { name: "Black Mica Metallic", value: "- X07" },
                  { name: "Smooth Gray Mica Metallic", value: "- S42" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Natural Beige Mica Metallic", value: "- T32" },
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic X07 x Smooth Gray Mica Metallic S42 [XL1]" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic X07 x Shining White Pearl W25 [XH3]" },
                  { name: "Body color (two tone)", value: "Black Mica Metallic X07 × Turquoise Blue Mica Metallic B86［XH6］" },
                ],
              },
            ],
          },
          {
            id: "raize-g",
            name: "G",
            imageUrl: "/TOYOTA - RAIZE - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Comfortable, high-quality and stylish model",
                  },
                  { name: "Engine Type", value: "1196/Hybrid/Gasoline - 2WD / 996 (1L- Turbo)/Gasoline - 4WD" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric (Red piping: Front seats)" },
                  { name: "LED digital speedometer + 7-inch TFT color LCD display", value: "(with multi-information display)" },
                  { name: "Urethane 3-spoke steering wheel", value: "(painted silver)" },
                  { name: "Shift knob/shift lever boot/textured shift bezel", value: "(double stitched)/(with chrome ornament for hybrid vehicles)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "195/65R16 tires & 16x6J aluminum wheels (silver painted/4 holes) ■ Gasoline vehicles only." },
                  { name: "LED headlamps", value: "(with manual leveling function) + LED clearance lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Smart Assist",
                    value: "■ The Smart Assist equipment options vary depending on the grade.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Shining White Pearl", value: "〈W25〉" },
                  { name: "Black Mica Metallic", value: "〈X07〉" },
                  { name: "Smooth Gray Mica Metallic", value: "- S42" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Natural Beige Mica Metallic", value: "- T32" },
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                ],
              },
            ],
          },
          {
            id: "raize-x",
            name: "X",
            imageUrl: "/TOYOTA - RAIZE - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A functional and simple model with carefully selected equipment",
                  },
                  { name: "Engine Type", value: "1196/Gasoline - 2WD / 996 (1L- Turbo)/Gasoline - 4WD" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Optitron meter", value: "(two-lens/with LCD multi-information display)" },
                  { name: "Urethane 3-spoke steering wheel", value: "Included" },
                  { name: "Shift knob/shift lever boot/textured shift bezel", value: "(single stitch)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "195/65R16 tires & 16x6J steel wheels (full plastic cap)" },
                  { name: "LED headlamps", value: "(with manual leveling function) + LED clearance lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Smart Assist",
                    value: "■ The Smart Assist equipment options vary depending on the grade.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Shining White Pearl", value: "- W25" },
                  { name: "Black Mica Metallic", value: "- X07" },
                  { name: "Smooth Gray Mica Metallic", value: "- S42" },
                  { name: "Fire Quartz Red Metallic", value: "- R67" },
                  { name: "Natural Beige Mica Metallic", value: "- T32" },
                  { name: "Laser Blue Crystal Shine", value: "- B82" },
                  { name: "Turquoise Blue Mica Metallic", value: "- B86" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "yaris-cross",
        name: "Yaris Cross",
        grades: [
          {
            id: "yaris-cross-gr-sport",
            name: "GR SPORT",
            imageUrl: "/TOYOTA - YARIS CROSS - GR SPORT.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model that pursues sporty driving",
                  },
                  { name: "Fuel Efficiency", value: "25.0km/L" },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Air Nubuck® + synthetic leather" },
                  { name: "Exclusive leather-wrapped three-spoke steering wheel", value: "(with GR logo) ■ The photo shows a gasoline-powered vehicle. Gasoline-powered vehicles come with paddle shifters." },
                  { name: "Special leather-wrapped shift knob", value: "Included" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black panel/plated dial) ■ Hybrid vehicles are equipped with an electric inverter compressor." },
                  { name: "Front soft armrest", value: "(with console box)" },
                  { name: "Digital meter + 7.0-inch TFT color multi-information display", value: "■ TFT [Thin Film Transistor]: Thin Film Transistor." },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "215/50R18 tires (FALKEN FK510 SUV) & exclusive 18-inch aluminum wheels (cut with luster/center ornament)" },
                  { name: "Projector-type full LED headlamps", value: "(with manual leveling function) + LED clearance lamps (with pick-up lighting function) + LED daytime running lamps (with turn signal function)" },
                  { name: "Full LED rear combination lamps", value: "(LED line-illuminated tail lamps & stop lamps + LED turn lamps + LED backup lamps)" },
                  { name: "Front bumper", value: "(with special fog bezel)" },
                  { name: "Dedicated rear bumper lower cover", value: "Included" },
                  { name: "Dedicated radiator grill", value: "(upper/lower)" },
                  { name: "Door bottom molding", value: "(with car name plate)" },
                  { name: "Auto electric retractable remote controlled colored door mirrors", value: "with LED side turn signals" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Drive Start Control",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black Mica", value: "〈209〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Platinum White Pearl Mica〈089〉[2PU]" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Sensual Red Mica〈3T3〉［2PN］" },
                ],
              },
            ],
          },
          {
            id: "yaris-cross-z-adventure",
            name: "Z ADVENTURE",
            imageUrl: "/TOYOTA - YARIS CROSS - Z ADVENTURE.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Bold style for the outdoors",
                  },
                  { name: "Fuel Efficiency", value: "26.0km/L" },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Synthetic leather" },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(decorated)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black panel/plated dial) ■ Hybrid vehicles are equipped with an electric inverter compressor." },
                  { name: "Front soft armrest", value: "(with console box)" },
                  { name: "Digital meter + 7.0-inch TFT color multi-information display", value: "■ TFT [Thin Film Transistor]: Thin Film Transistor." },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "215/50R18 tires and 18-inch aluminum wheels (cut and polished/with center ornament)" },
                  { name: "Projector-type full LED headlamps", value: "(with manual leveling function) + LED clearance lamps (with pick-up lighting function) + LED daytime running lamps (with turn signal function)" },
                  { name: "Full LED rear combination lamps", value: "(LED line-illuminated tail lamps & stop lamps + LED turn lamps + LED backup lamps)" },
                  { name: "Dedicated front bumper", value: "Included" },
                  { name: "Dedicated rear bumper", value: "Included" },
                  { name: "Radiator grille", value: "(upper/piano black decoration, lower)" },
                  { name: "Roof rails", value: "(silver)" },
                  { name: "Door bottom molding", value: "(with car name plate)" },
                  { name: "Auto electric retractable remote controlled colored door mirrors", value: "with LED side turn signals" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Drive Start Control",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black Mica", value: "〈209〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Massive Gray〈1L6〉［M23］" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Platinum White Pearl Mica〈089〉[2PU]" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Sensual Red Mica〈3T3〉［2PN］" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Beige〈4V6〉［2SG］" },
                ],
              },
            ],
          },
          {
            id: "yaris-cross-z",
            name: "Z",
            imageUrl: "/TOYOTA - YARIS CROSS - Z.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model that combines sophistication and power",
                  },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "synthetic leather + tweed-like fabric" },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(decorated)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black panel/plated dial) ■ Hybrid vehicles are equipped with an electric inverter compressor." },
                  { name: "Front soft armrest", value: "(with console box)" },
                  { name: "Digital meter + 7.0-inch TFT color multi-information display", value: "■ TFT [Thin Film Transistor]: Thin Film Transistor." },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "215/50R18 tires and 18-inch aluminum wheels (cut and polished/with center ornament)" },
                  { name: "Projector-type full LED headlamps", value: "(with manual leveling function) + LED clearance lamps (with pick-up lighting function) + LED daytime running lamps (with turn signal function)" },
                  { name: "Full LED rear combination lamps", value: "(LED line-illuminated tail lamps & stop lamps + LED turn lamps + LED backup lamps)" },
                  { name: "Front bumper", value: "Included" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Radiator grille", value: "(upper/piano black decoration, lower)" },
                  { name: "Door bottom molding", value: "(with car name plate)" },
                  { name: "Auto electric retractable remote controlled colored door mirrors", value: "with LED side turn signals" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Drive Start Control",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black Mica", value: "〈209〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                ],
              },
            ],
          },
          {
            id: "yaris-cross-g",
            name: "G",
            imageUrl: "/TOYOTA - YARIS CROSS - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A mid-range model made from high-quality fabric",
                  },
                  { name: "Fuel Efficiency", value: "19.4km/L" },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "High-grade fabric" },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(decorated)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black panel/plated dial) ■ Hybrid vehicles are equipped with an electric inverter compressor." },
                  { name: "Front soft armrest", value: "(with console box)" },
                  { name: "Digital meter + 7.0-inch TFT color multi-information display", value: "■ TFT [Thin Film Transistor]: Thin Film Transistor." },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "205/65R16 tires & 16-inch aluminum wheels (with center ornament)" },
                  { name: "Projector-type halogen headlamps", value: "(with manual leveling function) + turn lamps + LED clearance lamps + LED daytime running lamps" },
                  { name: "LED tail and stop lamps", value: "Included" },
                  { name: "Front bumper", value: "Included" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Radiator grill", value: "(upper/lower)" },
                  { name: "Door bottom molding", value: "(with car name plate)" },
                  { name: "Auto electric retractable remote controlled colored door mirrors", value: "with LED side turn signals + auxiliary mirror" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Drive Start Control",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black Mica", value: "〈209〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Massive Gray〈1L6〉［M23］" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Platinum White Pearl Mica〈089〉[2PU]" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Sensual Red Mica〈3T3〉［2PN］" },
                  { name: "Body color (two tone)", value: "Black Mica〈209〉×Beige〈4V6〉［2SG］" },
                ],
              },
            ],
          },
          {
            id: "yaris-cross-x",
            name: "X",
            imageUrl: "/TOYOTA - YARIS CROSS - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple and easy-to-use entry model",
                  },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Urethane 3-spoke steering wheel", value: "Included" },
                  { name: "Shift knob", value: "Included" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black panel/with electric inverter compressor) [Hybrid vehicle]" },
                  { name: "Manual air conditioner and dial-type heater control panel", value: "[Gasoline vehicles]" },
                  { name: "Rear console box", value: "Included" },
                  { name: "Digital meter + 7.0-inch TFT color multi-information display", value: "■ TFT [Thin Film Transistor]: Thin Film Transistor." },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "205/65R16 tires and 16-inch steel wheels (with plastic full caps)" },
                  { name: "Projector-type halogen headlamps", value: "(with manual leveling function) + turn lamps + LED clearance lamps + LED daytime running lamps" },
                  { name: "LED tail and stop lamps", value: "Included" },
                  { name: "Front bumper", value: "Included" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Radiator grill", value: "(upper/lower)" },
                  { name: "Door bottom molding", value: "Included" },
                  { name: "Auto electric retractable remote controlled colored door mirrors", value: "with LED side turn signals + auxiliary mirror" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Drive Start Control",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Black Mica", value: "〈209〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                ],
              },
            ],
          },
          {
            id: "yaris-cross-hev-premium-luxury-thailand",
            name: "HEV Premium Luxury (Thailand)",
            imageUrl: "/Toyota Yaris Cross  HEV Premium Luxury (Thailand).png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "HIGHEST GRADE - 1.5LITRE HYBRID ENGINE - ZERO MILEAGE (0KM)",
                  },
                  { name: "Transmission Type", value: "E-CVT (Electronically Controlled Continuously Variable Transmission)" },
                  { name: "Engine Capacity", value: "1.5-liter hybrid engine" },
                  { name: "Engine type, number of cylinders and layout", value: "4-cylinder, inline, 16-valve DOHC with Dual-VVT-i" },
                  { name: "Drive Type", value: "Front wheel Drive" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Ground Clearance", value: "210 mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Power Unit", value: "91 HP @ 5,500 RPM" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Dimensions", value: "4310 mm (L) x 1770 mm (W) x 1615 mm (H)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Spacious and Comfortable", value: "Included" },
                  { name: "Advanced Infotainment", value: "A 10-inch touchscreen display with Apple CarPlay and 6 speakers provides seamless connectivity and entertainment options" },
                  { name: "Panoramic Glass Roof", value: "The panoramic roof enhances the sense of spaciousness and can be opened for ventilation" },
                  { name: "Convenience Features", value: "Features like a power back door with a kick sensor, accessory socket, rear USB ports, and multiple storage spaces add to the convenience" },
                  { name: "TWO TONE LEATHER INTERIOR", value: "(ULTRA PREMIUM LUXURY PACKAGE)" },
                  { name: "MOONROOF", value: "Included" },
                  { name: "23 COLOURS OF AMBIENT LIGHTING", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "18 Inch Alloy wheels" },
                  { name: "Tyre Size", value: "215/55 R18" },
                  { name: "Headlights", value: "Full LED with chrome decoration" },
                  { name: "Foglamps", value: "LED" },
                  { name: "BLACK TOP", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "PREMIUM PIONEER SURROUND SOUND SYSTEM", value: "Included", highlighted: true },
                  { name: "KEYLESS ENTRY", value: "Included", highlighted: true },
                  { name: "SAFETY BRAKING SYSTEM", value: "Included", highlighted: true },
                  { name: "POWER TAILGATE", value: "Included", highlighted: true },
                  { name: "MULTIFUNCTION STEERING", value: "Included", highlighted: true },
                  { name: "360 DEGREE SAFETY ALARM SYSTEM", value: "Included", highlighted: true },
                  { name: "FOG LAMPS", value: "Included", highlighted: true },
                  { name: "ALLOY WHEELS", value: "Included", highlighted: true },
                  { name: "360 DEGREE BIRD VIEW CAMERA", value: "Included", highlighted: true },
                  { name: "FRONT AND REAR DASH CAM RECORDER", value: "Included", highlighted: true },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "corolla-cross",
        name: "Corolla Cross",
        grades: [
          {
            id: "corolla-cross-z",
            name: "Z",
            imageUrl: "/TOYOTA - COROLLA CROSS - Z.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "The ultimate model that offers superior quality and comfort",
                  },
                  { name: "Engine Type", value: "1986/Gasoline / 1797/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "genuine leather + fabric / Front seat type: sporty" },
                  { name: "Front seats (sporty)", value: "8-way power driver's seat (forward/backward sliding + reclining + seat height adjuster + tilt adjuster) / Electric lumbar support (driver's seat/2-way) / Seat heater (driver's seat and passenger seat)" },
                  { name: "12.3-inch TFT color multi-information display/meter cluster", value: "(silver)" },
                  { name: "3-spoke steering wheel", value: "(silver painted, genuine leather)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "225/50R18 tires and 18x7J aluminum wheels (machined and polished + dark gray metallic paint / with center ornament)" },
                  { name: "Bi-Beam LED headlamp", value: "+ LED sequential turn lamp + LED clearance lamp & LED daytime running lamp" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Parking support brake",
                    value: "(front and rear stationary objects) Illuminated number plates cannot be installed at the same time.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Cement Gray Metallic", value: "〈1H5〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sparkling Black Pearl Crystal Shine", value: "〈220〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Dark Blue Mica Metallic", value: "〈8W7〉" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉 x Platinum White Pearl Mica〈089〉 [2PS] - HYBRID ONLY" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉 x Sensual Red Mica〈3T3〉 [2YD] - HYBRID ONLY" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉×Massive Gray〈1L6〉［M10］HYBRID ONLY" },
                ],
              },
            ],
          },
          {
            id: "corolla-cross-s",
            name: "S",
            imageUrl: "/TOYOTA - COROLLA CROSS - S.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A high-end model with distinctive features and functionality",
                  },
                  { name: "Engine Type", value: "1797/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric / Front seat type: Sporty" },
                  { name: "Front seats (sporty)", value: "Driver's seat 6-way manual (forward/backward sliding + reclining + seat up/down adjuster)" },
                  { name: "7.0-inch TFT color multi-information display", value: "(speedometer display) / meter cluster (satin-plated finish)" },
                  { name: "3-spoke steering wheel", value: "(silver painted, genuine leather)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "215/60R17 tires and 17×6½J aluminum wheels (with center ornament)" },
                  { name: "Bi-Beam LED headlamp", value: "+ turn lamp + clearance lamp" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Parking support brake",
                    value: "(front and rear stationary objects) Illuminated number plates cannot be installed at the same time.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Cement Gray Metallic", value: "〈1H5〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sparkling Black Pearl Crystal Shine", value: "〈220〉" },
                  { name: "Dark Blue Mica Metallic", value: "〈8W7〉" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉 x Platinum White Pearl Mica〈089〉 [2PS]" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉×Massive Gray〈1L6〉［M10］" },
                ],
              },
            ],
          },
          {
            id: "corolla-cross-g",
            name: "G",
            imageUrl: "/TOYOTA - COROLLA CROSS - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A standard model with enhanced comfort",
                  },
                  { name: "Engine Type", value: "1986/Gasoline / 1797/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric / Front seat type: Sporty" },
                  { name: "Front seats (sporty)", value: "Driver's seat 6-way manual (forward/backward sliding + reclining + seat up/down adjuster)" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display/meter cluster", value: "(silver)" },
                  { name: "3-spoke steering wheel", value: "(silver painted, genuine leather)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "215/60R17 tires and 17×6½J steel wheels (with plastic full caps)" },
                  { name: "Bi-Beam LED headlamp", value: "+ turn lamp + clearance lamp" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Parking support brake",
                    value: "(front and rear stationary objects) Illuminated number plates cannot be installed at the same time.",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                ],
              },
            ],
          },
          {
            id: "corolla-cross-gx",
            name: "G\"X\"",
            imageUrl: "/TOYOTA - COROLLA CROSS - G\"X\".png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple model with excellent basic performance",
                  },
                  { name: "Engine Type", value: "1986/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric / Front seat type: Normal" },
                  { name: "Front seats (standard)", value: "Driver's seat 6-way manual seat (forward/backward sliding + reclining + seat up/down adjuster)" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display/meter cluster", value: "(black)" },
                  { name: "3-spoke steering wheel", value: "(urethane) ■ If the cold weather specification is selected, the three-spoke steering wheel will be wrapped in genuine leather." },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "215/60R17 tires and 17×6½J steel wheels (with plastic full caps)" },
                  { name: "Bi-Beam LED headlamp", value: "+ turn lamp + clearance lamp" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver metallic", value: "〈1L0〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "rav4",
        name: "RAV 4",
        grades: [
          {
            id: "rav4-z",
            name: "Z",
            imageUrl: "/TOYOTA - RAV 4 - Z.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Advanced plug-in hybrid model",
                  },
                  { name: "Engine Type", value: "2487/PHEV" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Synthetic leather/perforated with red stitching" },
                  { name: "Sporty front seats", value: "(synthetic leather/perforations + red stitching)" },
                  { name: "12.3-inch TFT color meter + multi-information display", value: "Included" },
                  { name: "Leather wrapped + satin plated decorative shift knob", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "235/55R19 tires & 19×7 1/2J aluminum wheels (cut and polished + painted black)" },
                  { name: "Bi-Beam LED headlamps", value: "(with auto-leveling function) + LED clearance lamps (with LED daytime running lamps [DRL] function) + LED turn lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver's and passenger's seats) + SRS knee airbags (driver's seats) + SRS side airbags (driver's and passenger's seats) + SRS curtain shield airbags (front and rear seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Gray metallic", value: "〈1G3〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Emotional Red II", value: "<3U5>" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉 x Platinum White Pearl Mica〈089〉 [2PS]" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉×Gray Metallic〈1G3〉［2QZ］" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉×Emotional Red II〈3U5〉［2SC］" },
                ],
              },
            ],
          },
          {
            id: "rav4-g",
            name: "G",
            imageUrl: "/TOYOTA - RAV 4 - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A mid-range model that combines quality and power",
                  },
                  { name: "Engine Type", value: "2487/Hybrid / 1986/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Synthetic leather (with perforations)" },
                  { name: "Comfortable heated seats + seat ventilation", value: "(driver's seat and passenger's seat)" },
                  { name: "12.3-inch TFT color meter + multi-information display", value: "Included" },
                  { name: "Leather wrapped + satin plated decorative shift knob", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "225/60R18 tires & 18×7J aluminum wheels (dark premium metallic paint) + wheel nuts" },
                  { name: "Bi-Beam LED headlamps", value: "(with auto-leveling function) + LED clearance lamps (with LED daytime running lamps [DRL] function) + LED turn lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver's and passenger's seats) + SRS knee airbags (driver's seats) + SRS side airbags (driver's and passenger's seats) + SRS curtain shield airbags (front and rear seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver Metallic", value: "〈1D6〉" },
                  { name: "Gray metallic", value: "〈1G3〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Dark Blue Mica", value: "〈8X8〉" },
                ],
              },
            ],
          },
          {
            id: "rav4-adventure",
            name: "Adventure",
            imageUrl: "/TOYOTA - RAV 4 - Adventure.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "High performance top model",
                  },
                  { name: "Engine Type", value: "2487/Hybrid / 1986/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat cover", value: "Special synthetic leather (with perforations)" },
                  { name: "Comfortable heated seats + seat ventilation", value: "(driver's seat and passenger's seat)" },
                  { name: "12.3-inch TFT color meter + multi-information display", value: "Included" },
                  { name: "Leather wrapped + satin plated decorative shift knob", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "235/55R19 tires & 19×7 1/2J aluminum wheels (matte gray paint) + wheel nuts (black)" },
                  { name: "Bi-Beam LED headlamps", value: "(with auto-leveling function) + LED clearance lamps (with LED daytime running lamps [DRL] function) + LED turn lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver's and passenger's seats) + SRS knee airbags (driver's seats) + SRS side airbags (driver's and passenger's seats) + SRS curtain shield airbags (front and rear seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Gray metallic", value: "〈1G3〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Urban Khaki", value: "〈6X3〉" },
                  { name: "Body color (two tone)", value: "Ash Gray Metallic〈1K6〉×Urban Khaki〈6X3〉［2QU］" },
                  { name: "Body color (two tone)", value: "Ash Gray Metallic〈1K6〉×Grayish Blue〈8W2〉［2TU］" },
                ],
              },
            ],
          },
          {
            id: "rav4-g-z-package",
            name: "G \"Z package\"",
            imageUrl: "/TOYOTA - RAV 4 - G \"Z package\".png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A high-end model with enhanced functionality and equipment",
                  },
                  { name: "Engine Type", value: "1986/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Synthetic leather (with perforations)" },
                  { name: "Comfortable heated seats + seat ventilation", value: "(driver's seat and passenger's seat)" },
                  { name: "12.3-inch TFT color meter + multi-information display", value: "Included" },
                  { name: "Leather wrapped + satin plated decorative shift knob", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "235/55R19 tires & 19×7 1/2J aluminum wheels (Super Chrome Metallic paint) + wheel nuts" },
                  { name: "3-lamp LED headlamp", value: "(with auto-leveling function) + LED clearance lamp + LED daytime running lamp [DRL]" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver's and passenger's seats) + SRS knee airbags (driver's seats) + SRS side airbags (driver's and passenger's seats) + SRS curtain shield airbags (front and rear seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver Metallic", value: "〈1D6〉" },
                  { name: "Gray metallic", value: "〈1G3〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Dark Blue Mica", value: "〈8X8〉" },
                ],
              },
            ],
          },
          {
            id: "rav4-x",
            name: "X",
            imageUrl: "/TOYOTA - RAV 4 - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "An entry model with attractive simple features",
                  },
                  { name: "Engine Type", value: "2487/Hybrid - 2WD / 1986/Gasoline - 4WD" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "7.0-inch TFT color multi-information display", value: "(speedometer display) + Optitron meter (with meter illumination control)" },
                  { name: "Shift knob", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "225/65R17 tires & 17x7J aluminum wheels (metallic gray paint) + wheel nuts" },
                  { name: "Bi-Beam LED headlamps", value: "(with auto-leveling function) + LED clearance lamps (with LED daytime running lamps [DRL] function) + LED turn lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS airbags",
                    value: "(driver's and passenger's seats) + SRS knee airbags (driver's seats) + SRS side airbags (driver's and passenger's seats) + SRS curtain shield airbags (front and rear seats)",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Silver Metallic", value: "〈1D6〉" },
                  { name: "Gray metallic", value: "〈1G3〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                  { name: "Dark Blue Mica", value: "〈8X8〉" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "sienta",
        name: "Sienta",
        grades: [
          {
            id: "sienta-z",
            name: "Z",
            imageUrl: "/TOYOTA SIENTA - Z.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A top-of-the-line model with a wide range of delights",
                  },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People/7 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Electroshiftmatic", value: "[Hybrid vehicle]" },
                  { name: "10-speed sequential shiftmatic with straight shift lever", value: "[Gasoline vehicle]" },
                  { name: "Leather-wrapped 3-spoke steering wheel", value: "(silver painted)" },
                  { name: "Optitron meter + 7.0-inch TFT color multi-information display", value: "[hybrid vehicle]" },
                  { name: "Optitron meter + 7.0-inch TFT color multi-information display", value: "[Gasoline vehicle]" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black)" },
                  { name: "Driver's seat armrest", value: "(with hook/left side)" },
                  { name: "Rear seat sunshade/ceramic dot", value: "(sliding door glass)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires & 15×5½J steel wheels (full plastic cap [dark gray metallic x silver metallic paint])" },
                  { name: "Bi-Beam LED headlamp", value: "(with auto-leveling function) + LED turn lamp + LED clearance lamp" },
                  { name: "Grill molding", value: "(metallic paint)" },
                  { name: "LED line-emitting tail lamps & LED stop lamps", value: "+ turn lamps & back-up lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Hands-free dual power sliding door",
                    value: "with one-touch switch (with anti-pinch function)",
                    highlighted: true,
                  },
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Adaptive High Beam System [AHS]",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Dark Gray", value: "〈1L7〉" },
                  { name: "Black", value: "〈202〉" },
                  { name: "Scarlet Metallic", value: "〈3U4〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Urban Khaki", value: "〈6X3〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                  { name: "Body color (two tone)", value: "Dark Gray〈1L7〉×Scarlet Metallic〈3U4〉［2WR］" },
                  { name: "Body color (two tone)", value: "Dark Gray〈1L7〉×Urban Khaki〈6X3〉［2WU］" },
                ],
              },
            ],
          },
          {
            id: "sienta-g",
            name: "G",
            imageUrl: "/TOYOTA SIENTA - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A standard model with the best of both worlds",
                  },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People/7 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Straight shift lever", value: "[hybrid vehicle]" },
                  { name: "10-speed sequential shiftmatic with straight shift lever", value: "[Gasoline vehicle]" },
                  { name: "Urethane 3-spoke steering wheel", value: "Included" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display", value: "[hybrid vehicle]" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display", value: "[Gasoline vehicle]" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires and 15×5½J steel wheels (full plastic cap)" },
                  { name: "Dual LED headlamp", value: "(with manual leveling function) + turn signal lamp + clearance lamp" },
                  { name: "Grille molding", value: "(black)" },
                  { name: "LED tail lamps & LED stop lamps", value: "+ turn lamps & backup lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Dual power sliding door",
                    value: "with one-touch switch (with anti-pinch function)",
                    highlighted: true,
                  },
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Automatic High Beam [AHB]",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Dark Gray", value: "〈1L7〉" },
                  { name: "Black", value: "〈202〉" },
                  { name: "Scarlet Metallic", value: "〈3U4〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Urban Khaki", value: "〈6X3〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                ],
              },
            ],
          },
          {
            id: "sienta-x",
            name: "X",
            imageUrl: "/TOYOTA SIENTA - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A simple and enjoyable entry model",
                  },
                  { name: "Engine Type", value: "1490/Hybrid/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People/7 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric" },
                  { name: "Straight shift lever", value: "[hybrid vehicle]" },
                  { name: "10-speed sequential shiftmatic with straight shift lever", value: "[Gasoline vehicle]" },
                  { name: "Urethane 3-spoke steering wheel", value: "Included" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display", value: "[hybrid vehicle]" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display", value: "[Gasoline vehicle]" },
                  { name: "Automatic air conditioner and dial-type heater control panel", value: "(piano black) [Hybrid vehicle]" },
                  { name: "Manual air conditioner and heater control panel", value: "[gasoline vehicle]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "185/65R15 tires and 15×5½J steel wheels (full plastic cap)" },
                  { name: "Dual LED headlamp", value: "(with manual leveling function) + turn signal lamp + clearance lamp" },
                  { name: "Grille molding", value: "(black)" },
                  { name: "LED tail lamps & LED stop lamps", value: "+ turn lamps & backup lamps" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Passenger side power sliding door",
                    value: "with one-touch switch (with anti-pinch function)",
                    highlighted: true,
                  },
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Automatic High Beam [AHB]",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Dark Gray", value: "〈1L7〉" },
                  { name: "Black", value: "〈202〉" },
                  { name: "Scarlet Metallic", value: "〈3U4〉" },
                  { name: "Beige", value: "〈4V6〉" },
                  { name: "Urban Khaki", value: "〈6X3〉" },
                  { name: "Grayish Blue", value: "〈8W2〉" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "corolla-touring",
        name: "Corolla Touring",
        grades: [
          {
            id: "corolla-touring-wxb",
            name: "W X B",
            imageUrl: "/TOYOTA COROLLA TOURING - W X B.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Top-of-the-line model with dynamic aluminum wheels and full equipment",
                  },
                  { name: "Engine Type", value: "1797 Hybrid / 1490 Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Synthetic leather + Rezatec" },
                  { name: "8-inch display audio/center cluster", value: "(smoke silver metallic)" },
                  { name: "12.3-inch TFT color multi-information display/meter cluster", value: "(smoke silver metallic)" },
                  { name: "Automatic air conditioner (single mode) & heater control panel", value: "(smoke silver metallic)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Pillar and roof headlining color", value: "(black)" },
                  { name: "Sporty seats", value: "[synthetic leather + leather tech]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Bi-Beam LED headlamp", value: "+ LED turn lamp + LED clearance lamp & LED daytime running light" },
                  { name: "LED front fog lamps", value: "Included" },
                  { name: "LED rear combination lamp", value: "(with light guide)" },
                  { name: "Front lower grill & front grill molding", value: "(glossy black) & (glossy silver)" },
                  { name: "Rear bumper and lower bumper", value: "(high-brightness silver)" },
                  { name: "Tires and wheels", value: "215/45R17 tires and 17×7½J aluminum wheels (Dark gray metallic paint/with center ornament)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Proactive Driving Assist [PDA]",
                    value: "Included",
                    highlighted: true,
                  },
                  {
                    name: "Drive recorder (front) + rear guide monitor",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉 x Platinum White Pearl Mica〈089〉 [2PS]" },
                  { name: "Body color (two tone)", value: "Attitude Black Mica〈218〉 x Sensual Red Mica〈3T3〉 [2YD]" },
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sparkling Black Pearl Crystal Shine", value: "〈220〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                ],
              },
            ],
          },
          {
            id: "corolla-touring-g",
            name: "G",
            imageUrl: "/TOYOTA COROLLA TOURING - G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model with a good balance of fuel economy and equipment",
                  },
                  { name: "Engine Type", value: "1797 Hybrid / 1490 Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "8-inch display audio/center cluster", value: "(satin-plated finish)" },
                  { name: "7.0-inch TFT color multi-information display/meter cluster", value: "(satin-plated finish)" },
                  { name: "Automatic air conditioner (single mode) & heater control panel", value: "(silver)" },
                  { name: "Leather-wrapped shift knob", value: "Included" },
                  { name: "Pillar and roof headlining color", value: "(white)" },
                  { name: "Normal seat (high-grade)", value: "[fabric]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "3-lamp LED headlamp", value: "+ LED turn lamp + LED clearance lamp" },
                  { name: "LED rear combination lamp", value: "Included" },
                  { name: "Front lower grill & front grill molding", value: "(black) & (glossy silver)" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Tires and wheels", value: "195/65R15 tires and 15x6J steel wheels (with plastic full caps)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Proactive Driving Assist [PDA]",
                    value: "Included",
                    highlighted: true,
                  },
                  {
                    name: "Drive recorder (front) + rear guide monitor",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sparkling Black Pearl Crystal Shine", value: "〈220〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                ],
              },
            ],
          },
          {
            id: "corolla-touring-x",
            name: "X",
            imageUrl: "/TOYOTA COROLLA TOURING - X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Simple and standard model",
                  },
                  { name: "Engine Type", value: "1797 Hybrid / 1490 Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat covering", value: "Fabric" },
                  { name: "Display audio-less/center cluster", value: "(black)" },
                  { name: "Analog meter + 4.2-inch TFT color multi-information display/meter cluster", value: "(black)" },
                  { name: "Automatic air conditioner (single mode) & heater control panel", value: "(silver)" },
                  { name: "Urethane shift knob", value: "Included" },
                  { name: "Pillar and roof headlining color", value: "(white)" },
                  { name: "Normal seat", value: "[fabric]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "3-lamp LED headlamp", value: "+ LED turn lamp + LED clearance lamp" },
                  { name: "LED rear combination lamp", value: "Included" },
                  { name: "Front lower grill & front grill moulding", value: "(black) & (black)" },
                  { name: "Rear bumper", value: "Included" },
                  { name: "Tires and wheels", value: "195/65R15 tires and 15x6J steel wheels (with plastic full caps)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Pre-crash safety",
                    value: "(collision avoidance support type with pedestrian [daytime/night], cyclist [daytime/night], and motorcycle [daytime] detection function / millimeter wave radar + monocular camera system)",
                    highlighted: true,
                  },
                  {
                    name: "Proactive Driving Assist [PDA]",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Platinum White Pearl Mica", value: "〈089〉" },
                  { name: "Massive Gray", value: "〈1L6〉" },
                  { name: "Attitude Black Mica", value: "〈218〉" },
                  { name: "Sparkling Black Pearl Crystal Shine", value: "〈220〉" },
                  { name: "Sensual Red Mica", value: "〈3T3〉" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "corolla-fielder",
        name: "Corolla Fielder",
        grades: [
          {
            id: "corolla-fielder-ex-hybrid",
            name: "EX HYBRID",
            imageUrl: "/EX HYBRID.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model that can be used for a wide range of purposes, from business to hobbies",
                  },
                  { name: "Engine Type", value: "Hybrid / 1.5L" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Hybrid system, idling stop device, variable valve timing, electric power steering, electric continuously variable transmission, charging control" },
                  { name: "Fuel consumption rate(km/L)", value: "27.8" },
                  { name: "Drive Type", value: "2WD FF" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "4,400" },
                  { name: "Overall width (mm)", value: "1,965" },
                  { name: "Overall height (mm)", value: "1,475" },
                  { name: "Interior dimensions (mm) length/width/height", value: "1,945/1,430/1,200" },
                  { name: "Gross Weight (Kg)", value: "1,445" },
                  { name: "Minimum ground clearance (mm)", value: "135" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output KW (PS)/rpm net", value: "54［74］/4,800" },
                  { name: "Maximum torque (Nm[kgf.m]/rpm) net", value: "111[11.3]/3,600〜4,400" },
                  { name: "Maximum Motor power output KW (PS) net", value: "45 [61]" },
                  { name: "Maximum Motor torque (Nm[kgf.m]) net", value: "169 [17.9]" },
                  { name: "Fuel tank capacity (L)", value: "36" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Floor mats", value: "(luxury type)" },
                  { name: "IR (infrared) cut film", value: "(rear side/back window)" },
                  { name: "Safe driving support cushion Luxury", value: "(Luxury type)" },
                  { name: "Safe Drive Support Cushion Basic", value: "(Basic Type)" },
                  { name: "Camera-integrated drive recorder", value: "DRT-H68A" },
                  { name: "Basic Navi", value: "NMZK-W73D" },
                  { name: "Seats and Interior", value: "Fabric (Black)/Black" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Roof rails", value: "Included" },
                  { name: "Rear door glass, rear quarter glass, back door glass", value: "UV-cut privacy glass" },
                  { name: "LED fog lamps", value: "Vehicles with/without rear fog lamps" },
                  { name: "Side visor", value: "(RV wide)" },
                  { name: "Number frame (deluxe)", value: "front, Rear" },
                  { name: "Mudguards", value: "Included" },
                  { name: "System rack/base rack (roof rail type)", value: "Dealer installation" },
                  { name: "Note", value: "*SOME EXTERIORS & INTERIOR, WE Have to customize" },
                ],
              },
            ],
          },
          {
            id: "corolla-fielder-ex-2wd-cvt",
            name: "EX 2WD CVT",
            imageUrl: "/EX 2WD CVT.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model that can be used for a wide range of purposes, from business to hobbies",
                  },
                  { name: "Engine Type", value: "Gasoline / 1.5 L" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Idling stop device, variable valve timing, electric power steering, automatic continuously variable transmission, charging control, mirror cycle" },
                  { name: "Fuel consumption rate(km/L)", value: "19.8" },
                  { name: "Drive Type", value: "2WD FF" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "4,400" },
                  { name: "Overall width (mm)", value: "1,965" },
                  { name: "Overall height (mm)", value: "1,475" },
                  { name: "Interior dimensions (mm) length/width/height", value: "1,795/1,300/1,200" },
                  { name: "Gross Weight (Kg)", value: "1,395" },
                  { name: "Minimum ground clearance (mm)", value: "135" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output KW (PS)/rpm net", value: "80［109］/6,000" },
                  { name: "Maximum torque (Nm[kgf.m]/rpm) net", value: "136［13.9］/4,400" },
                  { name: "Fuel tank capacity (L)", value: "42" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Floor mats", value: "(luxury type)" },
                  { name: "IR (infrared) cut film", value: "(rear side/back window)" },
                  { name: "Safe driving support cushion Luxury", value: "(Luxury type)" },
                  { name: "Safe Drive Support Cushion Basic", value: "(Basic Type)" },
                  { name: "Camera-integrated drive recorder", value: "DRT-H68A" },
                  { name: "Basic Navi", value: "NMZK-W73D" },
                  { name: "Seats", value: "Fabric (Black)/Black" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Roof rails", value: "Included" },
                  { name: "Rear door glass, rear quarter glass, back door glass", value: "UV-cut privacy glass" },
                  { name: "LED fog lamps", value: "Vehicles with/without rear fog lamps" },
                  { name: "Side visor", value: "(RV wide)" },
                  { name: "Number frame (deluxe)", value: "front, Rear" },
                  { name: "Mudguards", value: "Included" },
                  { name: "System rack/base rack (roof rail type)", value: "Dealer installation" },
                  { name: "Note", value: "*SOME EXTERIORS & INTERIOR, WE Have to customize" },
                ],
              },
            ],
          },
          {
            id: "corolla-fielder-ex-2wd-5mt",
            name: "EX 2WD 5MT",
            imageUrl: "/EX 2WD 5MT.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "A model that can be used for a wide range of purposes, from business to hobbies",
                  },
                  { name: "Engine Type", value: "Gasoline / 1.5 L (best)" },
                  { name: "Transmission Type", value: "5MT" },
                  { name: "Engine type, number of cylinders and layout", value: "Variable valve timing, electric power steering, charging control" },
                  { name: "Fuel consumption rate(km/L)", value: "17.2" },
                  { name: "Drive Type", value: "2WD FF" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "4,400" },
                  { name: "Overall width (mm)", value: "1,965" },
                  { name: "Overall height (mm)", value: "1,475" },
                  { name: "Interior dimensions (mm) length/width/height", value: "1,795/1,300/1,200" },
                  { name: "Gross Weight (Kg)", value: "1,375" },
                  { name: "Minimum ground clearance (mm)", value: "135" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output KW (PS)/rpm net", value: "80［109］/6,000" },
                  { name: "Maximum torque (Nm[kgf.m]/rpm) net", value: "138［14.1］/4,400" },
                  { name: "Fuel tank capacity (L)", value: "42" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Floor mats", value: "(luxury type)" },
                  { name: "IR (infrared) cut film", value: "(rear side/back window)" },
                  { name: "Safe driving support cushion Luxury", value: "(Luxury type)" },
                  { name: "Safe Drive Support Cushion Basic", value: "(Basic Type)" },
                  { name: "Camera-integrated drive recorder", value: "DRT-H68A" },
                  { name: "Basic Navi", value: "NMZK-W73D" },
                  { name: "Seats", value: "Fabric (Black)/Black" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Roof rails", value: "Included" },
                  { name: "Rear door glass, rear quarter glass, back door glass", value: "UV-cut privacy glass" },
                  { name: "LED fog lamps", value: "Vehicles with/without rear fog lamps" },
                  { name: "Side visor", value: "(RV wide)" },
                  { name: "Number frame (deluxe)", value: "front, Rear" },
                  { name: "Mudguards", value: "Included" },
                  { name: "System rack/base rack (roof rail type)", value: "Dealer installation" },
                  { name: "Note", value: "*SOME EXTERIORS & INTERIOR, WE Have to customize" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "urban-cruiser",
        name: "Urban Cruiser",
        grades: [
          {
            id: "urban-cruiser-taisor-v-grade",
            name: "Taisor V Grade",
            imageUrl: "/Urban Cruiser - Taisor   V Grade.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "V Grade (Highest Spec)",
                  },
                  { name: "Engine Type", value: "998/Turbo/Gasoline - 1.0L Turbo MHEV (Mild Hybrid)" },
                  { name: "Transmission Type", value: "6 Speed Auto Transmission (With Paddle Shifters)" },
                  { name: "Drive Type", value: "Front-Wheel Drive (FWD)" },
                  { name: "Passenger Capacity", value: "5 People" },
                  { name: "Fuel Consumption", value: "22 km/l (20 kmpl Petrol)" },
                  { name: "Brakes", value: "Front - Disc Rear - Drum" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Length", value: "3995 mm" },
                  { name: "Width", value: "1765 mm" },
                  { name: "Height", value: "1550 mm" },
                  { name: "Wheelbase", value: "2520 mm" },
                  { name: "Boot Space", value: "308 Litres" },
                  { name: "Fuel Tank Capacity", value: "37 Litres" },
                  { name: "Kerb Weight", value: "1450 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Power", value: "100 bhp" },
                  { name: "Torque", value: "147.6 Nm @ 2000-4500 rpm" },
                  { name: "Transmission", value: "6 Speed Automatic" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Leather wrapped Steering wheel", value: "Included" },
                  { name: "Wireless Charger", value: "Included" },
                  { name: "9\" inch Smartplay Cast Touchscreen infotainment system", value: "With Wireless Android & Apple Car Play" },
                  { name: "360 view Camera", value: "Included" },
                  { name: "Smart watch connectivity", value: "Included" },
                  { name: "Remove vehicle ignition", value: "Included" },
                  { name: "Rear AC with USB", value: "Included" },
                  { name: "Premium sound system", value: "Included" },
                  { name: "Enhanced Boot Space", value: "Included" },
                  { name: "Push Start", value: "Included" },
                  { name: "Cruise Control", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Dual tone exterior", value: "Included" },
                  { name: "Front/Rear Under Spoiler", value: "Included" },
                  { name: "Headlamp Garnish", value: "Included" },
                  { name: "Premium Front Grille with Chrome Garnish", value: "Included" },
                  { name: "Twin LED Daytime running lights", value: "Included" },
                  { name: "Roof end Spoiler extender", value: "Included" },
                  { name: "Dual tone exterior with sporty roof rails", value: "Included" },
                  { name: "16'' Alloy wheels", value: "195/60 R16" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Safety Equipment",
                    value: "6 air bags / Hill Hold Assist / Vehicle Stability Control / Sparking Sensor",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "yaris-ativ",
        name: "Yaris Ativ",
        grades: [
          {
            id: "yaris-ativ-premium-luxury",
            name: "Premium Luxury",
            imageUrl: "/Toyota Yaris Ativ Premium Luxury.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "3NR-VE / 4 cylinders inline DOHC 16 valves Dual VVT-iE" },
                  { name: "Engine Capacity", value: "1.2L" },
                  { name: "Fuel Consumption", value: "23.3 km/L" },
                  { name: "Transmission Type", value: "Automatic Super CVT-i with Sequential Shift" },
                  { name: "Drive Type", value: "2 wheel drive" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output", value: "69 (94 PS) / 6,000" },
                  { name: "Maximum torque", value: "110 (11.2 kg.-m) / 4,400" },
                ],
              },
              {
                category: "Dimensions",
                items: [
                  { name: "Overall dimensions", value: "4,425 mm x 1,740 mm x 1,480 mm" },
                  { name: "Boot Space", value: "476 litres" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Leather & PU" },
                  { name: "Seat adjustment", value: "Manual Vertical Adjust" },
                  { name: "Display", value: "TFT 7\" LED" },
                  { name: "Touchscreen", value: "9\"" },
                  { name: "Connectivity", value: "Bluetooth / Apple CarPlay and Android Auto" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlamps", value: "Full LED" },
                  { name: "Wheels", value: "16\" Alloy Wheel" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS Airbags",
                    value: "Front Pair / Side / Side Curtain",
                    highlighted: true,
                  },
                  {
                    name: "Warning System",
                    value: "BSM (Blind Spot Monitor) & RCTA (Rear Cross Traffic Alert)",
                    highlighted: true,
                  },
                  {
                    name: "Cruise Control",
                    value: "Adaptive Cruise Control with All-Speed",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
          {
            id: "yaris-ativ-sport",
            name: "Sport",
            imageUrl: "/Toyota Yaris Ativ Sport.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "3NR-VE / 4 cylinders inline DOHC 16 valves Dual VVT-iE" },
                  { name: "Engine Capacity", value: "1.2L" },
                  { name: "Transmission Type", value: "Automatic Super CVT-i with Sequential Shift" },
                  { name: "Drive Type", value: "2 wheel drive" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output", value: "69 (94 PS) / 6,000" },
                  { name: "Maximum torque", value: "110 (11.2 kg.-m) / 4,400" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Fabric" },
                  { name: "Seat adjustment", value: "Manual Vertical Adjust" },
                  { name: "Display", value: "Normal" },
                  { name: "Touchscreen", value: "8\"" },
                  { name: "Connectivity", value: "Bluetooth / Apple CarPlay and Android Auto" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlamps", value: "Full LED" },
                  { name: "Wheels", value: "16\" Alloy Wheel" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS Airbags",
                    value: "Front Pair / Side / Side Curtain",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
          {
            id: "yaris-ativ-nightshade",
            name: "NIGHTSHADE",
            imageUrl: "/Toyota Yaris Ativ NIGHTSHADE.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "3NR-VE / 4 cylinders inline DOHC 16 valves Dual VVT-iE" },
                  { name: "Engine Capacity", value: "1.2L" },
                  { name: "Transmission Type", value: "Automatic Super CVT-i with Sequential Shift" },
                  { name: "Drive Type", value: "2 wheel drive" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output", value: "69 (94 PS) / 6,000" },
                  { name: "Maximum torque", value: "110 (11.2 kg.-m) / 4,400" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Leather & PU" },
                  { name: "Seat adjustment", value: "Manual Vertical Adjust" },
                  { name: "Display", value: "TFT 7\" LED" },
                  { name: "Touchscreen", value: "9\"" },
                  { name: "Connectivity", value: "Bluetooth / Apple CarPlay and Android Auto" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlamps", value: "Full LED" },
                  { name: "Wheels", value: "16\" Alloy Wheel" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "SRS Airbags",
                    value: "Front Pair / Side / Side Curtain",
                    highlighted: true,
                  },
                  {
                    name: "Warning System",
                    value: "BSM (Blind Spot Monitor) & RCTA (Rear Cross Traffic Alert)",
                    highlighted: true,
                  },
                  {
                    name: "Cruise Control",
                    value: "Adaptive Cruise Control with All-Speed",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "lc-300",
        name: "LC 300",
        grades: [
          {
            id: "lc-300-gr-sport-3-3l-diesel-5-seater",
            name: "GR SPORT 3.3L Diesel (5-seater)",
            imageUrl: "/GR SPORT 3.5L petrol (7-seater).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Increased off-road performance to the limit",
                  },
                  { name: "Engine Type", value: "3.3L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "5 People" },
                  { name: "Fuel tank capacity", value: "80 L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "227 (309)/4,000 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "700 (71.4)/1,600-2,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,965 mm" },
                  { name: "Total width", value: "1,990 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "1,955 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,190 mm (Tilt & slide electric moon roof is not installed, it will be 1,210mm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "GR exclusive black/black & dark red: Genuine leather (We use synthetic leather leather for the seat cushions and part of the seat back and the headrest)" },
                  { name: "Comfortable thermal seat + seat ventilation", value: "Front seat, second seat left and right seat" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat 8way power seat / passenger seat 8way power seat & seat back pocket (with GR emblem)" },
                  { name: "Steering wheel", value: "Cutting carbon style + genuine leather wrapping 3-spoke steering wheel (with GR emblem) + steering heater" },
                  { name: "Meter", value: "Twin-lens Optitron meter (with meter illuminance control) + 7 inch TFT color multi-information display" },
                  { name: "Air conditioner", value: "Full-auto air conditioner with independent temperature control, front, back, left and right (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/65R18 tire & 18×7½J aluminum wheels (matted gray paint)" },
                  { name: "Front", value: "Radiator grille (GR only) / front bumper (GR only) / LED auto electric retractable remote control door mirror with side turn lamp (black painting) / door belt mall (black) / front wheel arch mall (GR only [Black])" },
                  { name: "Rear", value: "Decal of the back door / rear bumper (GR only) / rear wheel arch mall (GR only [black]) / side step (odd)" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "9.7 km/L (7.2/9.7/11.3) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "lc-300-zx-3-3l-diesel-5-seats",
            name: "ZX 3.3L Diesel (5-seats)",
            imageUrl: "/ZX 3.3L Diesel (5seats).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "The highest grade that seeks the best in everything",
                  },
                  { name: "Engine Type", value: "3.3L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "5 People" },
                  { name: "Fuel tank capacity", value: "80 L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "227 (309)/4,000 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "700 (71.4)/1,600-2,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,985 mm" },
                  { name: "Total width", value: "1,980 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "1,955 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,190 mm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Black/Neutral Beige: Genuine leather (We use synthetic leather leather for the seat cushions and part of the seat back and the headrest)" },
                  { name: "Comfortable thermal seat + seat ventilation", value: "Front seat, second seat left and right seat" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat 8way power seat, passenger seat 8way power seat & seat back pocket" },
                  { name: "Steering wheel", value: "Walnut heathered grain + genuine leather wrapping 3 spoke steering wheel + steering heater" },
                  { name: "Meter", value: "Twin-lens Optitron meter (with meter illuminance control) + 7 inch TFT color multi-information display" },
                  { name: "Air conditioner", value: "Full-auto air conditioner with independent temperature control, front, back, left and right (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/55R20 tires & 20×8J aluminum wheels (Super chrome metallic coating)" },
                  { name: "Front", value: "Radiator grille (silver painted with plating decoration) / front aero bumper (with plated mall) / LED auto-electric retractable remote control with side turn lamp (plated) / door belt mall (stainless steel) / front wheel arch mall (colored)" },
                  { name: "Rear", value: "Rear aero bumper with plating mall / rear wheel arch mall (colored) / side step (aero integrated type [LED lighting])" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "9.7 km/L (7.2/9.7/11.3) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "lc-300-gr-sport-3-5l-petrol-7-seater",
            name: "GR SPORT 3.5L petrol (7-seater)",
            imageUrl: "/GR SPORT 3.5L petrol (7-seater).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Increased off-road performance to the limit",
                  },
                  { name: "Engine Type", value: "3.5L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "7 People" },
                  { name: "Fuel tank capacity", value: "80 L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "305 (415) and 5,200 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "650 (66.3)/2,000 to 3,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,965 mm" },
                  { name: "Total width", value: "1,990 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "2,755 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,190 mm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "GR exclusive black/black & dark red: Genuine leather (We use synthetic leather leather for the seat cushions and part of the seat back and the headrest)" },
                  { name: "Comfortable thermal seat + seat ventilation", value: "Front seat, second seat left and right seat" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat 8way power seat / passenger seat 8way power seat & seat back pocket (with GR emblem)" },
                  { name: "Steering wheel", value: "Cutting carbon tone + genuine leather winding three spokes steering wheel (with GR emblem) + steering heater" },
                  { name: "Meter", value: "Two-eyed Optitron Meter (with meter illuminance control) + 7inch TFT color multi-information display" },
                  { name: "Air conditioner", value: "Full-auto air conditioner with independent temperature control, front, back, left and right (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/65R18 tire & 18×7½J aluminum wheels (matted gray paint)" },
                  { name: "Front", value: "Radiator grille (GR only) / front bumper (GR only) / LED auto electric retractable remote control door mirror with side turn lamp (black painting) / door belt mall (black) / front wheel arch mall (GR only [Black])" },
                  { name: "Rear", value: "Decal of the back door / rear bumper (GR only) / rear wheel arch mall (GR only [black]) / side step (odd)" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "7.9 km/L (5.3/8.2/9.6) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "lc-300-zx-3-5l-petrol-7-seater",
            name: "ZX 3.5L petrol (7-seater)",
            imageUrl: "/ZX 3.5L petrol (7-seater).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "The highest grade that seeks the best in everything",
                  },
                  { name: "Engine Type", value: "3.5L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "7 People" },
                  { name: "Fuel tank capacity", value: "80 L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "305 (415) and 5,200 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "650 (66.3)/2,000 to 3,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,985 mm" },
                  { name: "Total width", value: "1,980 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "2,755 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,190 mm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Black/Neutral Beige: Genuine leather (We use synthetic leather leather for the seat cushions and part of the seat back and the headrest)" },
                  { name: "Comfortable thermal seat + seat ventilation", value: "Front seat, second seat left and right seat" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat 8way power seat, passenger seat 8way power seat & seat back pocket" },
                  { name: "Steering wheel", value: "Walnut ridge + genuine leather winding three-spoke steering wheel + steering heater" },
                  { name: "Meter", value: "Two-eyed Optitron Meter (with meter illuminance control) + 7inch TFT color multi-information display" },
                  { name: "Air conditioner", value: "Full-auto air conditioner with independent temperature control, front, back, left and right (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/55R20 tires & 20×8J aluminum wheels (Super chrome metallic coating)" },
                  { name: "Front", value: "Radiator grille (silver painted with plating decoration) / front aero bumper (with plated mall) / LED auto-electric retractable remote control with side turn lamp (plated) / door belt mall (stainless steel) / front wheel arch mall (colored)" },
                  { name: "Rear", value: "Rear aero bumper with plating mall / rear wheel arch mall (colored) / side step (aero integrated type [LED lighting])" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "7.9 km/L (5.3/8.2/9.6) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "lc-300-vx-3-5l-petrol-7-seater",
            name: "VX 3.5L petrol (7-seater)",
            imageUrl: "/VX 3.5L petrol (7-seater).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "The extremes of full-scale strength and refinement",
                  },
                  { name: "Engine Type", value: "3.5L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "7 People" },
                  { name: "Fuel tank capacity", value: "80 L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "305 (415) and 5,200 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "650 (66.3)/2,000 to 3,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,950 mm" },
                  { name: "Total width", value: "1,980 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "2,755 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,210 mm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Black: Genuine leather (We use synthetic leather leather for the seat cushions and part of the seat back and the headrest)" },
                  { name: "Comfortable thermal seat + seat ventilation", value: "Front seat" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat 8way power seat, passenger seat 8way power seat & seat back pocket" },
                  { name: "Steering wheel", value: "Zebrawood heathered grain + genuine leather wrapping 3 spoke steering wheel + steering heater" },
                  { name: "Meter", value: "Two-eyed Optitron Meter (with meter illuminance control) + 7inch TFT color multi-information display" },
                  { name: "Air conditioner", value: "Full-auto air conditioner with independent temperature control, front, back, left and right (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/65R18 tires & 18×7½J aluminum wheels (Super chrome metallic paint)" },
                  { name: "Front", value: "Radiator grille (silver painting [with plated decoration]) / front bumper / LED auto electric retractable remote control with side turn lamp (plated) / door belt mall (stainless steel) / front wheel arch mall (colored)" },
                  { name: "Rear", value: "Rear bumper / rear wheel arch mall (colored) / side step (odd)" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "7.9 km/L (5.3/8.2/9.6) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "lc-300-ax-3-5l-petrol-7-seater",
            name: "AX 3.5L petrol (7-seater)",
            imageUrl: "/AX 3.5L petrol (7-seater).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "3.5L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "7 People" },
                  { name: "Fuel tank capacity", value: "80 L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "305 (415) and 5,200 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "650 (66.3)/2,000 to 3,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,950 mm" },
                  { name: "Total width", value: "1,980 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "2,755 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,210 mm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Black: Suede-like fabric" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat 8way power seat / passenger seat 4way manual seat" },
                  { name: "Steering wheel", value: "Genuine leather-wrapped 3-spoke steering wheel" },
                  { name: "Meter", value: "4-Eye Optitron Meter with Meter Ilbras Control + 4.2inch TFT Color Multi Information Display" },
                  { name: "Air conditioner", value: "Full-auto air conditioner with independent temperature control, front, back, left and right (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/65R18 tires & 18×7½J aluminum wheels (silver paint)" },
                  { name: "Front", value: "Radiator grille (silver painted [with plated decoration]) / front bumper / LED auto electric retractable remote control with side turn lamp door mirror (colored) / door belt mall (stainless steel) / front wheel arch mall (colored)" },
                  { name: "Rear", value: "Rear bumper / rear wheel arch mall (colored) / side step (odd)" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "8.0 km/L (5.4/8.3/9.7) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "lc-300-gx-3-5l-gasoline-5-seater",
            name: "GX 3.5L gasoline (5-seater)",
            imageUrl: "/GX 3.5L gasoline (5-seater).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  {
                    name: "Description",
                    value: "Entry Model: Land cruiser in your hands",
                  },
                  { name: "Engine Type", value: "3.5L V-type six-cylinder twin turbo with intercooler" },
                  { name: "Transmission Type", value: "Direct Shift-10AT (electronic control 10th speed automatic)" },
                  { name: "Drive Type", value: "Four-wheel drive (full-time 4WD)" },
                  { name: "Passenger Capacity", value: "5 People" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power <net>", value: "305 (415) and 5,200 kW(PS)/r.p.m." },
                  { name: "Maximum torque <net>", value: "650 (66.3)/2,000 to 3,600 N・m(kgf・m)/r.p.m." },
                ],
              },
              {
                category: "External Dimensions",
                items: [
                  { name: "Total length", value: "4,950 mm" },
                  { name: "Total width", value: "1,980 mm" },
                  { name: "Total height", value: "1,925 mm" },
                  { name: "Wheelbase", value: "2,850 mm" },
                  { name: "Tread (front)", value: "1,665 mm" },
                  { name: "Tread (Rear)", value: "1,665 mm" },
                  { name: "Minimum ground clearance", value: "225 mm" },
                  { name: "Minimum turning radius", value: "5.9 m" },
                ],
              },
              {
                category: "Internal Dimensions and capacity",
                items: [
                  { name: "Indoor length", value: "1,955 mm" },
                  { name: "Indoor width", value: "1,640 mm" },
                  { name: "Indoor height", value: "1,210 mm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat upholstery", value: "Black: Fabric" },
                  { name: "Center Cluster Box & Front Console Open Tray", value: "Included" },
                  { name: "Front Seat", value: "Driver's seat six-way manual seat / passenger seat four-way manual seat" },
                  { name: "Steering wheel", value: "Genuine leather-wrapped 3-spoke steering wheel" },
                  { name: "Meter", value: "4-eye Optitron meter (with meter illuminance control) + 4.2 inch TFT color multi-information display" },
                  { name: "Air conditioner", value: "Front seat left and right independent temperature control Full automatic air conditioner (S-FLOW)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Tires and wheels", value: "265/65R18 tires & 18×7½J aluminum wheels (silver paint)" },
                  { name: "Front", value: "Radiator grille (silver painted with silver coating [plated decoration]) / front bumper / LED auto electric retractable remote control with side turn lamp door mirror (colored) / door belt mall (black) / front wheel arch mall (colored)" },
                  { name: "Rear", value: "Rear bumper / rear wheel arch mall (colored) / side step (aluminum) *Manufacturer option" },
                ],
              },
              {
                category: "Suspension & Brake",
                items: [
                  { name: "Front/Rear Suspension", value: "Double Wishbone Type Independent Suspension Coil Spring / Trailing Link Axle Coil Spring" },
                  { name: "Front/Rear Brake", value: "Bentrated Discs/Benvented Discs" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Toyota Safety Sense", value: "Included", highlighted: true },
                  { name: "Blind spot monitor", value: "BSM (with close-access and stop alarm function to rear-facing vehicles)", highlighted: true },
                  { name: "Parking support brake", value: "Front and rear stationary", highlighted: true },
                  {
                    name: "SRS Airbags",
                    value: "Dual Stage SRS Airbag (front seat) + SRS knee airbag (front seat) + SRS side airbag (front seat, second seat left and right seat) + SRS curtain shield airbag (front seat, second seat, third seat)",
                    highlighted: true,
                  },
                  { name: "Fuel consumption rate", value: "8.0 km/L (5.4/8.3/9.7) [WLTC mode (city mode / suburban mode / highway mode)]", highlighted: true },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "hilux",
        name: "Hilux",
        grades: [
          {
            id: "double-cab-4x4-2-8-gr-sport-at",
            name: "Double Cab 4x4 2.8 GR Sport AT",
            imageUrl: "/Double Cab 4x4 2.8 GR Sport AT.png",
            specifications: [
              {
                category: "Exterior",
                items: [
                  { name: "Headlamps", value: "Bi-Beam LED" },
                  { name: "Roof", value: "Standard" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat Material", value: "Perforated Suede and Synthetic Leather with GR emblem" },
                  { name: "Driver's Seat", value: "8-Way Powered adjust" },
                ],
              },
              {
                category: "Speedometer and Convenience Items",
                items: [
                  { name: "Driver Information Display", value: "TFT Color Screen" },
                  { name: "Audio Equipment", value: "10.25-inch Capacitive Touch Screen" },
                  { name: "Connection System", value: "Bluetooth / Wireless Apple CarPlay/Android Auto / T-Connect* / USB" },
                  { name: "Trunk Lid", value: "Manual with Tail gate assist" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "SRS Airbags", value: "Front pair / side / side curtain / driver's knee" },
                  { name: "Reminder", value: "BSM (Blind Spot Monitor) and RCTA (Rear Cross Traffic Alert)" },
                  { name: "Cruise Control", value: "Yes" },
                  { name: "Camera", value: "PVM (Panoramic View Monitor)" },
                ],
              },
              {
                category: "Power Unit",
                items: [
                  { name: "Engine Model / Type", value: "1GD-FTV (High) / 4 cyl 16 valve DOHC VN Turbo Intercooler" },
                  { name: "Capacity", value: "2755cc" },
                  { name: "Max Output EEC net (kw/rpm)", value: "165 (224) / 3,400" },
                  { name: "Max Torque EEC net (Nm/rpm)", value: "550 / 1,600 - 2,800" },
                  { name: "Fuel Type", value: "Diesel" },
                ],
              },
              {
                category: "Transmission and Suspension",
                items: [
                  { name: "Transmission", value: "4WD with Differential Lock" },
                  { name: "Transmission System", value: "6 speed Automatic with Sequential Shift & Paddle Shift" },
                  { name: "Suspension (Front / Rear)", value: "Double wishbone with coil spring and torsion bar with Monotube Shock absorber/ Leaf spring with Monotube Shock absorber (Only GR Sport)" },
                  { name: "Wheel", value: "Alloy 17 inch (Only GR Sport Model)" },
                ],
              },
              {
                category: "Dimension",
                items: [
                  { name: "Overall Length x Width x Height (mm.)", value: "5,320 x 2,020 x 1,880" },
                  { name: "Deck Inside Length x Width x Height (mm.)", value: "1,555 x 1,540 x 480" },
                  { name: "Min. Ground Clearance (mm.)", value: "217" },
                  { name: "Seating capacity", value: "5 Seats" },
                ],
              },
            ],
          },
          {
            id: "double-cab-4x4-2-8-rocco-at",
            name: "Double Cab 4x4 2.8 Rocco AT",
            imageUrl: "/Double Cab 4x4 2.8 Rocco AT.png",
            specifications: [
              {
                category: "Exterior",
                items: [
                  { name: "Headlamps", value: "Bi-Beam LED" },
                  { name: "Roof", value: "Standard" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat Material", value: "Leather and Synthetic Leather" },
                  { name: "Driver's Seat", value: "8-Way Powered adjust" },
                ],
              },
              {
                category: "Speedometer and Convenience Items",
                items: [
                  { name: "Driver Information Display", value: "TFT 4.2" },
                  { name: "Audio Equipment", value: "10.25-inch Capacitive Touch Screen" },
                  { name: "Connection System", value: "Bluetooth / Wireless Apple CarPlay/Android Auto / T-Connect* / USB" },
                  { name: "Trunk Lid", value: "Manual with Tail gate assist" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "SRS Airbags", value: "Front pair / side / side curtain / driver's knee" },
                  { name: "Reminder", value: "BSM (Blind Spot Monitor) and RCTA (Rear Cross Traffic Alert)" },
                  { name: "Cruise Control", value: "Dynamic Radar Cruise Control" },
                  { name: "Camera", value: "PVM (Panoramic View Monitor)" },
                ],
              },
              {
                category: "Power Unit",
                items: [
                  { name: "Engine Model / Type", value: "1GD-FTV (High) / 4 cyl 16 valve DOHC VN Turbo Intercooler" },
                  { name: "Capacity", value: "2755cc" },
                  { name: "Max Output EEC net (kw/rpm)", value: "150 (204) / 3,400" },
                  { name: "Max Torque EEC net (Nm/rpm)", value: "500 / 1,600 - 2,800" },
                  { name: "Fuel Type", value: "Diesel" },
                ],
              },
              {
                category: "Transmission and Suspension",
                items: [
                  { name: "Transmission", value: "4WD with Differential Lock" },
                  { name: "Transmission System", value: "6 speed Automatic with Sequential Shift" },
                  { name: "Suspension (Front / Rear)", value: "Double wishbone with coil spring and torsion bar / Leaf spring" },
                  { name: "Wheel", value: "18\" Alloy Wheels" },
                ],
              },
              {
                category: "Dimension",
                items: [
                  { name: "Overall Length x Width x Height (mm.)", value: "5,325 x 1,900 x 1,815" },
                  { name: "Deck Inside Length x Width x Height (mm.)", value: "1,555 x 1,540 x 480" },
                  { name: "Min. Ground Clearance (mm.)", value: "217" },
                  { name: "Seating capacity", value: "5 Seats" },
                ],
              },
            ],
          },
          {
            id: "hilux-travo-overland",
            name: "Hilux Travo Overland",
            imageUrl: "/Hilux Travo Overland.png",
            specifications: [
              {
                category: "Power Unit",
                items: [
                  { name: "Engine Type", value: "2.8L Turbo" },
                  { name: "Engine type, number of cylinders and layout", value: "1GD-FTV / 4-cylinder inline DOHC 16-valve with VN Turbo and Intercooler" },
                  { name: "Max Output EEC net (kW(PS) / rpm)", value: "150 (204) / 3,000 - 3,400" },
                  { name: "Max Torque EEC net (Nm / rpm)", value: "500 / 1,600 - 2,800" },
                  { name: "Fuel Type", value: "Diesel" },
                ],
              },
              {
                category: "Transmission and Suspension",
                items: [
                  { name: "Transmission Type", value: "6-speed automatic transmission with Sequential Shift" },
                  { name: "Drive Type", value: "4-wheel drive with rear differential lock" },
                  { name: "Suspension (Front / Rear)", value: "Independent double wishbone with coil spring and stabilizer bar / Leaf Spring" },
                ],
              },
              {
                category: "Dimension",
                items: [
                  { name: "Overall Length x Width x Height (mm.)", value: "5,320 x 1,885 x 1,815" },
                  { name: "Deck Inside Length x Width x Height (mm.)", value: "1,555 x 1,540 x 480" },
                  { name: "Seating capacity", value: "5 Seats" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat Material", value: "Softex Leather" },
                  { name: "Driver Seat", value: "8-way power adjustment with electric lumbar support button" },
                  { name: "Interior Color", value: "Black" },
                  { name: "Entertainment", value: "12.3-inch touch screen" },
                  { name: "Meter", value: "Digital Meter Panel" },
                  { name: "Speakers", value: "8 Speakers" },
                  { name: "Steering Wheel", value: "Leather-wrapped" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlamps", value: "LED" },
                  { name: "Front Grille", value: "Body-colored" },
                  { name: "Wheel Arches", value: "Available" },
                  { name: "Side Stairs", value: "Available" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "SRS Airbags", value: "Front / Driver's knee airbags" },
                  { name: "Blind Spot Monitor (BSM)", value: "Yes" },
                  { name: "Cruise Control", value: "Yes" },
                  { name: "Parking support brake (Auto Brake)", value: "Yes" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "honda",
    name: "Honda",
    models: [
      {
        id: "vezel",
        name: "Vezel",
        grades: [
          {
            id: "ehev-z-play-package",
            name: "e:HEV Z・PLaY Package",
            imageUrl: "/eHEV Z・PLaY Package.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  {
                    name: "Engine type, number of cylinders and layout",
                    value: "Water-cooled inline 4-cylinder horizontally mounted",
                  },
                  { name: "Drive Type", value: "FF (Front engine, front-wheel drive) and 4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption (FF)", value: "25.3 km/L" },
                  { name: "Fuel Consumption (4WD)", value: "21.3 km/L" },
                  {
                    name: "Overall length/width/height (m)",
                    value: "FF/4WD: 4.340/1.790/1.590",
                  },
                  {
                    name: "Minimum ground clearance (Inch)",
                    value: "FF: 7.68 / 4WD: 7.09",
                  },
                  {
                    name: "Vehicle weight (kg)",
                    value: "FF: 1,380 / 4WD: 1,450",
                  },
                  {
                    name: "Room dimensions: length/width/height (m)",
                    value: "FF/4WD: 2.020/1.445/1.225",
                  },
                  { name: "Minimum turning radius (m)", value: "FF/4WD: 5.5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  {
                    name: "Engine: Maximum power (kW [PS]/rpm)",
                    value: "78 [106] / 6,000-6,400",
                  },
                  {
                    name: "Engine: Maximum torque (N·m [kgf·m]/rpm)",
                    value: "127 [13.0] / 4,500-5,000",
                  },
                  {
                    name: "Electric motor: Maximum output (kW [PS]/rpm)",
                    value: "96 [131] / 4,000-8,000",
                  },
                  {
                    name: "Electric motor: Maximum torque (N·m [kgf·m]/rpm)",
                    value: "253 [25.8] / 0-3,500",
                  },
                  {
                    name: "Fuel consumption rate (km/L)",
                    value: "FF: 25.3km/L / 4WD: 21.3km/L",
                  },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  {
                    name: "Honda CONNECT Display + ETC2.0 in-vehicle unit (linked to navigation system)",
                    value: "Included",
                    highlighted: true,
                  },
                  { name: "Heated steering wheel", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  { name: "Wireless Chargers", value: "Included", highlighted: true },
                  {
                    name: "Instrument panel garnish",
                    value: "Driver's seat/passenger seat/center",
                  },
                  { name: "Door lining garnish", value: "Front/rear" },
                  { name: "Parcel Cover", value: "Included" },
                  {
                    name: "Leather-wrapped steering wheel",
                    value: "Smooth leather",
                  },
                  { name: "Two tone", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  {
                    name: "Full LED headlights",
                    value: "With daytime running lamps (with automatic light control mechanism)",
                  },
                  { name: "LED active cornering lights", value: "Included" },
                  {
                    name: "Hands-free access power tailgate",
                    value: "With scheduled close function",
                  },
                  { name: "LED sequential turn signal lamp", value: "Front" },
                  {
                    name: "PLaY package exclusive exterior",
                    value:
                      "Front grille with color bar ornament, black painted bumper lower garnish (front/rear), light blue decorative door lower garnish",
                    highlighted: true,
                  },
                  { name: "Deceleration Selector", value: "Included" },
                  {
                    name: "18-inch aluminum wheels + steel radial tires",
                    value: "Included",
                    highlighted: true,
                  },
                  { name: "Two tone", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "ehev-z",
            name: "e:HEV Z",
            imageUrl: "/eHEV Z.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  {
                    name: "Engine type, number of cylinders and layout",
                    value: "Water-cooled inline 4-cylinder horizontally mounted",
                  },
                  { name: "Drive Type", value: "FF" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption (FF)", value: "25.3km/L" },
                  { name: "Fuel Consumption (4WD)", value: "21.3km/L" },
                  {
                    name: "Overall length/width/height (m)",
                    value: "FF/4WD: 4.340/1.790/1.590",
                  },
                  {
                    name: "Minimum ground clearance (inch)",
                    value: "FF: 7.68/4WD: 7.09",
                  },
                  {
                    name: "Vehicle weight (kg)",
                    value: "FF: 1,380/4WD: 1,450",
                  },
                  {
                    name: "Room dimensions: length/width/height (m)",
                    value: "FF/4WD: 2.020/1.445/1.225",
                  },
                  { name: "Minimum turning radius (m)", value: "FF/4WD: 5.5" },
                ],
              },
              {
                category: "Performance",
                items: [
                  {
                    name: "Engine: Maximum power (kW [PS]/rpm)",
                    value: "78［106］/6,000-6,400",
                  },
                  {
                    name: "Engine: Maximum torque (N・m [kgf・m]/rpm)",
                    value: "127［13.0］/4,500-5,000",
                  },
                  {
                    name: "Electric motor: Maximum output (kW [PS]/rpm)",
                    value: "96［131］/4,000-8,000",
                  },
                  {
                    name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)",
                    value: "253 [25.8] / 0-3,350",
                  },
                  {
                    name: "Fuel consumption rate (km/L)",
                    value: "FF: 25.3km/L/4WD: 21.3km/L",
                  },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  { name: "Heated steering wheel", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  {
                    name: "Instrument panel garnish",
                    value: "Driver's seat/passenger seat/center",
                  },
                  { name: "Door lining garnish", value: "Front/rear" },
                  { name: "Parcel Cover", value: "Included" },
                  {
                    name: "Leather-wrapped steering wheel",
                    value: "Smooth leather",
                  },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  {
                    name: "Full LED headlights",
                    value: "With daytime running lamps (with automatic light control mechanism)",
                  },
                  { name: "LED active cornering lights", value: "Included" },
                  {
                    name: "Hands-free access power tailgate",
                    value: "With scheduled close function",
                  },
                  { name: "LED sequential turn signal lamp", value: "Front" },
                  {
                    name: "e:HEV Z exclusive exterior",
                    value:
                      "Sharp silver painted bumper lower garnish (front/rear), platinum chrome plated door lower garnish",
                    highlighted: true,
                  },
                  { name: "Deceleration Selector", value: "Included" },
                  {
                    name: "18-inch aluminum wheels + steel radial tires",
                    value: "Included",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "ehev-x-hunt-package",
            name: "e:HEV X/HuNT Package",
            imageUrl: "/eHEV X HuNT Package.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption (FF)", value: "26.0 km/L" },
                  { name: "Fuel Consumption (4WD)", value: "21.5 km/L" },
                  { name: "Overall length/width/height (m)", value: "FF/4WD: 4.340/1.790/1.580" },
                  { name: "Minimum ground clearance (inch)", value: "FF: 7.3/4WD: 6.7" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,350 / 4WD: 1,430" },
                  { name: "Room dimensions: length/width/height (m)", value: "FF/4WD: 2.020/1.445/1.225" },
                  { name: "Minimum turning radius (m)", value: "FF/4WD: 5.3" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "96［131］/4,000-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,500" },
                  { name: "Fuel consumption rate (km/L)", value: "FF: 26.0km/L/4WD: 21.5km/L" },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  { name: "FABTECT (water and oil repellent)", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Smooth leather" },
                  { name: "Driver and passenger seat heaters", value: "Included" },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  { name: "Full LED headlights", value: "With daytime running lamps (with automatic light control mechanism)" },
                  { name: "HuNT Package Exclusive Exterior", value: "Included", highlighted: true },
                  { name: "Deceleration Selector", value: "Included" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "(Shark gray metallic paint Not equipped)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "ehev-x",
            name: "e:HEV X",
            imageUrl: "/eHEV X.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption (FF)", value: "26.0 km/L" },
                  { name: "Fuel Consumption (4WD)", value: "21.5 km/L" },
                  { name: "Overall length/width/height (m)", value: "FF/4WD: 4.340/1.790/1.580" },
                  { name: "Minimum ground clearance (m)", value: "FF: 7.3/4WD: 6.7" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,350/4WD: 1,430" },
                  { name: "Room dimensions: length/width/height (m)", value: "FF/4WD: 2.020/1.445/1.225" },
                  { name: "Minimum turning radius (m)", value: "FF/4WD: 5.3" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "96［131］/4,000-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,500" },
                  { name: "Fuel consumption rate (km/L)", value: "FF: 26.0km/L/4WD: 21.5km/L" },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  { name: "Driver and passenger seat heaters", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Smooth leather" },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  { name: "Full LED headlights", value: "With daytime running lamps (with automatic light control mechanism)" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                  { name: "Deceleration Selector", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "vezel-g",
            name: "G",
            imageUrl: "/G.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496 i-VTEC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "4WD" },
                  { name: "Passenger Capacity", value: "5 people" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel Consumption", value: "15.0 km/L" },
                  { name: "Overall length/width/height (m)", value: "4WD: 4.340/1.790/1.580" },
                  { name: "Minimum ground clearance (m)", value: "4WD: 6.7" },
                  { name: "Vehicle weight (kg)", value: "4WD: 1,320" },
                  { name: "Room dimensions: length/width/height (m)", value: "4WD: 2.020/1.445/1.225" },
                  { name: "Minimum turning radius (m)", value: "4WD: 5.3" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "87［118］/6,600" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "142［14.5］/4,300" },
                  { name: "Fuel consumption rate (km/L)", value: "4WD: 15.0km/L" },
                ],
              },
              {
                category: "Interior Features",
                items: [
                  { name: "Driver and passenger seat heaters", value: "Included" },
                  { name: "Fully automatic air conditioning", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Smooth leather" },
                ],
              },
              {
                category: "Exterior Features",
                items: [
                  { name: "Full LED headlights", value: "With daytime running lamps (with automatic light control mechanism)" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING", value: "Included", highlighted: true },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "city",
        name: "City",
        grades: [
          {
            id: "city-s",
            name: "S",
            imageUrl: "/CITY.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Total Displacement", value: "988" },
                  { name: "Type", value: "DOHC 3 Cylinder 12 Valve" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Fuel Type", value: "Petrol" },
                  { name: "Fuel consumption", value: "23.8 km/liter" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Horsepower kW (PS) / rpm", value: "90 (122) / 5,500" },
                  { name: "Torque N.m (kg.-m.) / rpm", value: "173 (17.6) / 2,000 - 4,500" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Total Length", value: "4580" },
                  { name: "Width", value: "1748" },
                  { name: "Height", value: "1467" },
                  { name: "Wheelbase", value: "2589" },
                ],
              },
              {
                category: "Suspension System",
                items: [
                  { name: "Front", value: "MacPherson Strut with Stabilizer Bar" },
                  { name: "Rear", value: "Torsion Beam" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Ventilated Disk" },
                  { name: "Rear", value: "Drum" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlight Type", value: "Projector" },
                  { name: "Front Grille", value: "Chromium" },
                  { name: "Wheel", value: "Steel with 15\" Cover" },
                  { name: "LED Front Fog Light", value: "Not Available" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Interior Color", value: "Black" },
                  { name: "Seat Material", value: "Fabric" },
                  { name: "Console Decoration", value: "Silver" },
                  { name: "Paddle Shift", value: "Not Available" },
                ],
              },
            ],
          },
          {
            id: "city-v",
            name: "V",
            imageUrl: "/CITY.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Total Displacement", value: "988" },
                  { name: "Type", value: "DOHC 3 Cylinder 12 Valve VTEC TURBO" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Fuel Type", value: "Petrol" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Horsepower kW (PS) / rpm", value: "90 (122) / 5,500" },
                  { name: "Torque N.m (kg.-m.) / rpm", value: "173 (17.6) / 2,000 - 4,500" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Total Length", value: "4580" },
                  { name: "Width", value: "1748" },
                  { name: "Height", value: "1467" },
                  { name: "Wheelbase", value: "2589" },
                ],
              },
              {
                category: "Suspension System",
                items: [
                  { name: "Front", value: "MacPherson Strut with Stabilizer Bar" },
                  { name: "Rear", value: "Torsion Beam" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Ventilated Disk" },
                  { name: "Rear", value: "Drum" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlight Type", value: "Projector" },
                  { name: "Front Grille", value: "Chromium" },
                  { name: "Wheel", value: "Alloy 15\" Two-tone" },
                  { name: "LED Front Fog Light", value: "Available" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Interior Color", value: "Black" },
                  { name: "Seat Material", value: "Fabric" },
                  { name: "Console Decoration", value: "Silver" },
                  { name: "Paddle Shift", value: "Not Available" },
                ],
              },
            ],
          },
          {
            id: "city-sv",
            name: "SV",
            imageUrl: "/CITY.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Total Displacement", value: "988" },
                  { name: "Type", value: "DOHC 3 Cylinder 12 Valve VTEC TURBO" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Fuel Type", value: "Petrol" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Horsepower kW (PS) / rpm", value: "90 (122) / 5,500" },
                  { name: "Torque N.m (kg.-m.) / rpm", value: "173 (17.6) / 2,000 - 4,500" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Total Length", value: "4580" },
                  { name: "Width", value: "1748" },
                  { name: "Height", value: "1467" },
                  { name: "Wheelbase", value: "2589" },
                ],
              },
              {
                category: "Suspension System",
                items: [
                  { name: "Front", value: "MacPherson Strut with Stabilizer Bar" },
                  { name: "Rear", value: "Torsion Beam" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Ventilated Disk" },
                  { name: "Rear", value: "Drum" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlight Type", value: "LED" },
                  { name: "Front Grille", value: "Chromium" },
                  { name: "Wheel", value: "Alloy 15\" Two-tone" },
                  { name: "LED Front Fog Light", value: "Available" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Interior Color", value: "Black" },
                  { name: "Seat Material", value: "Black Leather & Synthetic Leather" },
                  { name: "Console Decoration", value: "Silver" },
                  { name: "Paddle Shift", value: "Not Available" },
                ],
              },
            ],
          },
          {
            id: "city-rs",
            name: "RS",
            imageUrl: "/CITY.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Total Displacement", value: "988" },
                  { name: "Type", value: "DOHC 3 Cylinder 12 Valve VTEC TURBO" },
                  { name: "Transmission Type", value: "CVT (Continuously Variable Transmission)" },
                  { name: "Fuel Type", value: "Petrol" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Horsepower kW (PS) / rpm", value: "90 (122) / 5,500" },
                  { name: "Torque N.m (kg.-m.) / rpm", value: "173 (17.6) / 2,000 - 4,500" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Total Length", value: "4589" },
                  { name: "Width", value: "1748" },
                  { name: "Height", value: "1480" },
                  { name: "Wheelbase", value: "2589" },
                ],
              },
              {
                category: "Suspension System",
                items: [
                  { name: "Front", value: "MacPherson Strut with Stabilizer Bar" },
                  { name: "Rear", value: "Torsion Beam" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Ventilated Disk" },
                  { name: "Rear", value: "Drum" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlight Type", value: "LED" },
                  { name: "Front Grille", value: "Gloss Black" },
                  { name: "Wheel", value: "Sporty Two-tone Alloy 16\"" },
                  { name: "LED Front Fog Light", value: "Available" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Interior Color", value: "Black/Dark Red" },
                  { name: "Seat Material", value: "Black Leather & Synthetic Leather with Red Stitching" },
                  { name: "Console Decoration", value: "Piano Black" },
                  { name: "Paddle Shift", value: "Available" },
                ],
              },
            ],
          },
          {
            id: "city-ehev-sv",
            name: "e:HEV SV",
            imageUrl: "/CITY.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Total Displacement", value: "1498" },
                  { name: "Type", value: "DOHC 4 Cylinder 16 Valve i-VTEC" },
                  { name: "Transmission Type", value: "E-CVT (Electrical Continuously Variable Transmission)" },
                  { name: "Fuel Type", value: "Petrol Hybrid" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Horsepower kW (PS) / rpm", value: "72 (98) / 5,600 - 6,400" },
                  { name: "Engine: Torque N.m (kg.-m.) / rpm", value: "127 (13) / 4,500 -" },
                  { name: "Electric Motor: Horsepower kW (PS) / rpm", value: "80 (109) / 3,500 - 8,000" },
                  { name: "Electric Motor: Torque N.m (kg.-m.) / rpm", value: "253 (25.8) / 0 - 3,000" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Total Length", value: "4580" },
                  { name: "Width", value: "1748" },
                  { name: "Height", value: "1467" },
                  { name: "Wheelbase", value: "2589" },
                ],
              },
              {
                category: "Suspension System",
                items: [
                  { name: "Front", value: "MacPherson Strut with Stabilizer Bar" },
                  { name: "Rear", value: "Torsion Beam" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Disk" },
                  { name: "Rear", value: "Disk" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlight Type", value: "Projector LED" },
                  { name: "Front Grille", value: "Chromium" },
                  { name: "Wheel", value: "Two-tone Alloy 16\"" },
                  { name: "LED Front Fog Light", value: "Available" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Interior Color", value: "Black" },
                  { name: "Seat Material", value: "Black Leather & Synthetic Leather" },
                  { name: "Console Decoration", value: "Silver" },
                  { name: "Paddle Shift", value: "Not Available" },
                ],
              },
            ],
          },
          {
            id: "city-ehev-rs",
            name: "e:HEV RS",
            imageUrl: "/CITY.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Total Displacement", value: "1498" },
                  { name: "Type", value: "DOHC 4 Cylinder 16 Valve i-VTEC" },
                  { name: "Transmission Type", value: "E-CVT (Electrical Continuously Variable Transmission)" },
                  { name: "Fuel Type", value: "Petrol Hybrid" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Horsepower kW (PS) / rpm", value: "72 (98) / 5,600 - 6,400" },
                  { name: "Engine: Torque N.m (kg.-m.) / rpm", value: "127 (13) / 4,500 -" },
                  { name: "Electric Motor: Horsepower kW (PS) / rpm", value: "80 (109) / 3,500 - 8,000" },
                  { name: "Electric Motor: Torque N.m (kg.-m.) / rpm", value: "253 (25.8) / 0 - 3,000" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Total Length", value: "4589" },
                  { name: "Width", value: "1748" },
                  { name: "Height", value: "1480" },
                  { name: "Wheelbase", value: "2589" },
                ],
              },
              {
                category: "Suspension System",
                items: [
                  { name: "Front", value: "MacPherson Strut with Stabilizer Bar" },
                  { name: "Rear", value: "Torsion Beam" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Disk" },
                  { name: "Rear", value: "Disk" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Headlight Type", value: "Projector LED" },
                  { name: "Front Grille", value: "Gloss Black" },
                  { name: "Wheel", value: "Sporty Two-tone Alloy 16\"" },
                  { name: "LED Front Fog Light", value: "Available" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Interior Color", value: "Black/Dark Red" },
                  { name: "Seat Material", value: "Black Leather & Synthetic Leather with Red Stitching" },
                  { name: "Console Decoration", value: "Metallic Red" },
                  { name: "Paddle Shift", value: "Available" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fit",
        name: "Fit",
        grades: [
          {
            id: "e-hev-luxe",
            name: "e:HEV LUXE",
            imageUrl: "/FIT eHEV LUXE.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 27.6km/L, 4WD: 23.5km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 3.995/1.695/1.540, 4WD: 3.995/1.695/1.565" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135, 4WD: 0.150" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,200, 4WD: 1,280" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "90［123］/3,500-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Leather-wrapped selector lever", value: "Included" },
                  { name: "Driver and passenger seat heaters", value: "Included" },
                  { name: "Heated steering wheel", value: "Included" },
                  { name: "USB charger (Type-C/2 included)", value: "Included" },
                  { name: "Genuine leather seats *4", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                  { name: "LUXE exclusive exterior", value: "Included" },
                  { name: "LED fog lights", value: "Included" },
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "e-hev-crosstar",
            name: "e:HEV CROSSTAR",
            imageUrl: "/FIT eHEV CROSSTAR.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 27.1km/L, 4WD: 24.2km/L" },
                  { name: "Overall length/width/height (m)", value: "FF/4WD: 4.095/1.725/1.570" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.160, 4WD: 0.155" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,210, 4WD: 1,280 *7" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "90［123］/3,500-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "USB charger (Type-C/2 included)", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                  { name: "CROSSTAR exclusive exterior", value: "Included" },
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING※3", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "e-hev-rs",
            name: "e:HEV RS",
            imageUrl: "/FIT eHEV RS.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 27.2km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 4.080/1.695/1.540" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,210" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "90［123］/3,500-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Drive mode switch", value: "Included" },
                  { name: "USB charger (Type-C/2 included)", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "Side sill garnish (painted piano black)", value: "Included" },
                  { name: "Tailgate spoiler(Colored)", value: "Included" },
                  { name: "RS-exclusive exterior", value: "Included" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING *3", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "e-hev-home",
            name: "e:HEV HOME",
            imageUrl: "/FIT eHEV HOME.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 29.0km/L, 4WD: 25.3km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 3.995/1.695/1.540, 4WD: 3.995/1.695/1.565" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135, 4WD: 0.150" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,190, 4WD: 1,270" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "90［123］/3,500-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                  { name: "USB charger (Type-C/2 included)", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "15-inch steel wheels + steel radial tires + full wheel caps", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "luxe",
            name: "LUXE",
            imageUrl: "/FIT LUXE.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/i-VTEC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 17.9km/L, 4WD: 16.0km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 3.995/1.695/1.540, 4WD: 3.995/1.695/1.565" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135, 4WD: 0.150" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,100, 4WD: 1,170 *7" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "87［118］/6,600" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "142［14.5］/4,300" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Driver and passenger seat heaters", value: "Included" },
                  { name: "Heated steering wheel", value: "Included" },
                  { name: "Genuine leather seats *4", value: "Included" },
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "LED fog lights", value: "Included" },
                  { name: "LUXE exclusive exterior", value: "Included" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "crosstar",
            name: "CROSSTAR",
            imageUrl: "/FIT CROSSTAR.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/i-VTEC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 17.6km/L, 4WD: 16.1km/L" },
                  { name: "Overall length/width/height (m)", value: "FF/4WD: 4.095/1.725/1.570" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.160, 4WD: 0.155" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,110, 4WD: 1,180" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "87［118］/6,600" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "142［14.5］/4,300" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "CROSSTAR exclusive exterior", value: "Included" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING *3", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "rs",
            name: "RS",
            imageUrl: "/FIT RS.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/i-VTEC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 17.9km/L ※7" },
                  { name: "Overall length/width/height (m)", value: "FF: 4.080/1.695/1.540" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,100 ※7" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "87［118］/6,600" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "142［14.5］/4,300" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "Side sill garnish (painted piano black)", value: "Included" },
                  { name: "Tailgate spoiler(Colored)", value: "Included" },
                  { name: "RS-exclusive exterior", value: "Included" },
                  { name: "16-inch aluminum wheels + steel radial tires", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING *3", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "e-hev-basic",
            name: "e:HEV BASIC",
            imageUrl: "/FIT eHEV BASIC.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/e:HEV" },
                  { name: "Transmission Type", value: "Electric continuously variable transmission" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 30.2km/L, 4WD: 25.4km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 3.995/1.695/1.515 *7, 4WD: 3.995/1.695/1.540 *7" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135, 4WD: 0.150" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,190, 4WD: 1,260" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "78［106］/6,000-6,400" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "127［13.0］/4,500-5,000" },
                  { name: "Electric motor: Maximum output (kW [PS]/rpm)", value: "90［123］/3,500-8,000" },
                  { name: "Electric motor: Maximum torque (N・m [kgf・m]/rpm)", value: "253 [25.8] / 0-3,000" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "15-inch steel wheels + steel radial tires + full wheel caps", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING *3", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "home",
            name: "HOME",
            imageUrl: "/FIT HOME.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/i-VTEC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 18.5km/L, 4WD: 16.6km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 3.995/1.695/1.540, 4WD: 3.995/1.695/1.565" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135, 4WD: 0.150" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,090, 4WD: 1,160" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "87［118］/6,600" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "142［14.5］/4,300" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Leather-wrapped steering wheel", value: "Included" },
                  { name: "Leather-wrapped selector lever", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Full LED headlights (with daytime running lamps)", value: "Included" },
                  { name: "15-inch steel wheels + steel radial tires + full wheel caps", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "basic",
            name: "BASIC",
            imageUrl: "/FIT BASIC.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.496/i-VTEC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled inline 4-cylinder horizontally mounted" },
                  { name: "Drive Type", value: "FF/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                ],
              },
              {
                category: "Measurements & Weight",
                items: [
                  { name: "Fuel consumption rate (WLTC mode)", value: "FF: 18.7km/L, 4WD: 16.6km/L" },
                  { name: "Overall length/width/height (m)", value: "FF: 3.995/1.695/1.515 *7, 4WD: 3.995/1.695/1.540 *7" },
                  { name: "Minimum ground clearance (m)", value: "FF: 0.135, 4WD: 0.150" },
                  { name: "Vehicle weight (kg)", value: "FF: 1,080, 4WD: 1,160" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Engine: Maximum power (kW [PS]/rpm)", value: "87［118］/6,600" },
                  { name: "Engine: Maximum torque (N・m [kgf・m]/rpm)", value: "142［14.5］/4,300" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "15-inch steel wheels + steel radial tires + full wheel caps", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Honda SENSING *3", value: "Included", highlighted: true },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "wrv",
        name: "WRV",
        grades: [
          {
            id: "wrv-z",
            name: "Z",
            imageUrl: "/WRV Z.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Power Unit", value: "L15D" },
                  { name: "Total Displacement", value: "1496" },
                  { name: "Engine Type", value: "Gasoline" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "FF" },
                  { name: "Fuel consumption", value: "16.2 km/L" },
                  { name: "Minimum ground clearance", value: "195mm" },
                  { name: "Seating Capacity", value: "5" },
                  { name: "Luggage capacity", value: "458L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW [PS]/rpm)", value: "87[110]/6,600" },
                  { name: "Maximum torque (N・m [kgf・m]/rpm)", value: "142[14.5]/4,300" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Overall length", value: "4325" },
                  { name: "Overall width", value: "1790" },
                  { name: "Overall height", value: "1650" },
                  { name: "Wheelbase", value: "2650" },
                ],
              },
              {
                category: "Lights",
                items: [
                  { name: "Full LED headlights", value: "With daytime running lamps" },
                  { name: "LED Foglamps", value: "Included" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Combination seat (Black)" },
                  { name: "Steering Wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Comfort equipment", value: "Rear ventilation" },
                  { name: "Comfort equipment", value: "Fully automatic air conditioning" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "17-inch aluminum wheels (Berlina Black)" },
                  { name: "Shark Fin Antenna", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Front-seat i-side airbag system + side curtain airbag system", value: "For front and rear seats" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Paddle Shift", value: "Included" },
                  { name: "Adaptive Cruise Control", value: "Included" },
                  { name: "Lane Keeping Assist System", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "wrv-z-plus",
            name: "Z+",
            imageUrl: "/WRV Z+.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Power Unit", value: "L15D" },
                  { name: "Total Displacement", value: "1496" },
                  { name: "Engine Type", value: "Gasoline" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "FF" },
                  { name: "Fuel consumption", value: "16.2 km/L" },
                  { name: "Minimum ground clearance", value: "195mm" },
                  { name: "Seating Capacity", value: "5" },
                  { name: "Luggage capacity", value: "458L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW [PS]/rpm)", value: "87[110]/6,600" },
                  { name: "Maximum torque (N・m [kgf・m]/rpm)", value: "142[14.5]/4,300" },
                ],
              },
              {
                category: "Dimensions (mm)",
                items: [
                  { name: "Overall length", value: "4325" },
                  { name: "Overall width", value: "1790" },
                  { name: "Overall height", value: "1650" },
                  { name: "Wheelbase", value: "2650" },
                ],
              },
              {
                category: "Lights",
                items: [
                  { name: "Full LED headlights", value: "With daytime running lamps" },
                  { name: "LED Foglamps", value: "Included" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Full prime smooth sheet (Brown)" },
                  { name: "Steering Wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Comfort equipment", value: "Rear ventilation" },
                  { name: "Comfort equipment", value: "Fully automatic air conditioning" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "17-inch aluminum wheels" },
                  { name: "Sharp silver painted roof rail garnish and door lower garnish", value: "Included" },
                  { name: "Berlina Black Front Grill", value: "Included" },
                  { name: "Silver Door Moulding", value: "Included" },
                  { name: "Shark Fin Antenna", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Front-seat i-side airbag system + side curtain airbag system", value: "For front and rear seats" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Paddle Shift", value: "Included" },
                  { name: "Adaptive Cruise Control", value: "Included" },
                  { name: "Lane Keeping Assist System", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "nissan",
    name: "Nissan",
    models: [
      {
        id: "x-trail",
        name: "X-Trail",
        grades: [
          {
            id: "g-e-4orce-4wd",
            name: "G e-4ORCE (4WD)",
            imageUrl: "/G e-4ORCE (4WD).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.497L/KR15DDT(e-POWER)+BM46-MM48(HYBRID)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel used", value: "Regular unleaded gasoline" },
                  { name: "Drive Type", value: "4WD" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum torque N・m(kgf・m)/rpm", value: "250 (25.5)/2400-4000 (N・m (kgf・m)/rpm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Finisher Instroa (wood grain)", value: "Included" },
                  { name: "Finisher Chrome inner door handle", value: "Included" },
                  { name: "Finisher Inside Door Handle Bezel (Matte Chrome)", value: "Included" },
                  { name: "Roller sunshade (rear door)", value: "Included" },
                  { name: "Ambient lighting (front center tray (wireless charger), door trim, electronic shift)", value: "Included" },
                  { name: "USB power socket Type A (1 front, 1 rear)", value: "Included" },
                  { name: "USB power socket Type C (1 on the front)", value: "Included" },
                  { name: "USB power socket Type C (1 rear)", value: "Included" },
                  { name: "100V AC power supply (1500W) (1 luggage unit)", value: "Included" },
                  { name: "Cup holders (2 in front, 2 in second-row seats (in rear center armrest))", value: "Included" },
                  { name: "Folding assist grips (front seats, left and right second row seats)", value: "Included" },
                  { name: "Coat hangers (2 seats on the left and right of the second row)", value: "Included" },
                  { name: "Luggage lamp", value: "Included" },
                  { name: "Luggage hooks (4 pieces)", value: "Included" },
                  { name: "Luggage underspace", value: "Included" },
                  { name: "Luggage side pocket", value: "Included" },
                  { name: "Power socket (DC12V) (1 in front, 1 in luggage)", value: "Included" },
                  { name: "Seat fabric: Tailor Fit ™", value: "Included" },
                  { name: "Driver's and passenger's power seats (Driver's seat: slide, recline, lifter, thigh support / Passenger's seat: slide, recline)", value: "Included" },
                  { name: "Driver's seat electric lumbar support", value: "Included" },
                  { name: "Personal driving position memory system (linked to driver's seat and door mirrors)", value: "Included" },
                  { name: "Second-row folding seats (4:2:4 split, slide, recline)", value: "Included" },
                  { name: "Through rear center armrest (with cup holder)", value: "Included" },
                  { name: "Height-adjustable headrests (front seats, second seats (left and right))", value: "Included" },
                  { name: "Headrests (second (center), third (3-row seat cars only))", value: "Included" },
                  { name: "Passenger seat back pocket", value: "Included" },
                  { name: "Interior color: Black〈G〉 Seat material: Tailor Fit ™", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Remote controlled automatic back door (with hands-free function and anti-pinch mechanism)", value: "Included" },
                  { name: "Silver painted + chrome front and rear bumper lower finishers", value: "Included" },
                  { name: "Door lower chrome molding", value: "Included" },
                  { name: "Door sash molding", value: "Included" },
                  { name: "Door sash blackout", value: "Included" },
                  { name: "e-POWER emblem", value: "Included" },
                  { name: "e-4ORCE emblem", value: "Included" },
                  { name: "Colored outside door handles", value: "Included" },
                  { name: "Roof spoiler (with LED high-mounted stop lamp)", value: "Included" },
                  { name: "Emergency tire repair kit (without spare tire)", value: "Included" },
                  { name: "Scratch Shield", value: "Included" },
                  { name: "235/55R19 101V tires & 19-inch aluminum wheels (19 x 7.5J), inset: 40, PCD: 114.3 (5 holes)", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "x-e-4orce-xtreme-x-3-row-4wd",
            name: "X e-4ORCE Xtreme X [3-row] (4WD)",
            imageUrl: "/X e-4ORCE Xtreme X [3-row] (4WD).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.497L/KR15DDT(e-POWER)+BM46-MM48(HYBRID)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel used", value: "Regular unleaded gasoline" },
                  { name: "Drive Type", value: "4WD" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum torque N・m(kgf・m)/rpm", value: "250 (25.5)/2400-4000 (N・m (kgf・m)/rpm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Finisher Chrome inner door handle", value: "Included" },
                  { name: "USB power socket Type A (1 front, 1 rear)", value: "Included" },
                  { name: "Cup holders (2 in front, 2 in second-row seats (in rear center armrest), 2 in third-row seats)", value: "Included" },
                  { name: "Folding assist grips (front seats, left and right second row seats)", value: "Included" },
                  { name: "Coat hangers (2 seats on the left and right of the second row)", value: "Included" },
                  { name: "Luggage lamp", value: "Included" },
                  { name: "Luggage hooks (4 pieces)", value: "Included" },
                  { name: "Luggage underspace", value: "Included" },
                  { name: "Luggage side pocket", value: "Included" },
                  { name: "Power socket (DC12V) (1 in front, 1 in luggage)", value: "Included" },
                  { name: "Waterproof sheet (Cellcross(R)) (Exclusive design for XtremeX)", value: "Included" },
                  { name: "Driver's and passenger's power seats (Driver's seat: slide, recline, lifter, thigh support / Passenger's seat: slide, recline)", value: "Included" },
                  { name: "Driver's seat electric lumbar support", value: "Included" },
                  { name: "Personal driving position memory system (driver's seat)", value: "Included" },
                  { name: "Second-row folding seats (4:2:4 split, slide, recline)", value: "Included" },
                  { name: "Third-row folding seat (5:5 split, reclining, dive-down mechanism)", value: "Included" },
                  { name: "Rear center armrest through (with cup holder)", value: "Included" },
                  { name: "Height-adjustable headrests (front seats, second seats (left and right))", value: "Included" },
                  { name: "Headrests (second (center), third (3-row seat cars only))", value: "Included" },
                  { name: "Passenger seat back pocket", value: "Included" },
                  { name: "Interior color: Black〈G〉 Seat material: Waterproof sheet (Cellcross(R)) (Exclusive design for Xtreme X)", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Remote controlled automatic back door (with handsfree function and anti-pinch mechanism)", value: "Included" },
                  { name: "Xtreme X exclusive exterior black roof rails", value: "Included" },
                  { name: "Door sash molding", value: "Included" },
                  { name: "Door sash blackout", value: "Included" },
                  { name: "e-POWER emblem", value: "Included" },
                  { name: "e-4ORCE emblem", value: "Included" },
                  { name: "Xtreme X exclusive exterior front grille (dark finisher)", value: "Included" },
                  { name: "Exterior front under protector exclusively for Xtreme X", value: "Included" },
                  { name: "Exterior Rear Under Protector for Xtreme X", value: "Included" },
                  { name: "Xtreme X exclusive exterior gloss black outside door handle", value: "Included" },
                  { name: "Roof spoiler (with LED high-mounted stop lamp)", value: "Included" },
                  { name: "Emergency tire repair kit (without spare tire)", value: "Included" },
                  { name: "Scratch Shield", value: "Included" },
                  { name: "235/60R18 103H tires & 18-inch aluminum wheels (18 x 7.5J), inset: 40, PCD: 114.3 (5 holes) (Extremer X exclusive design)", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "x-e-4orce-xtreme-x-2-row-4wd",
            name: "X e-4ORCE Xtreme X [2-row] (4WD)",
            imageUrl: "/X e-4ORCE Xtreme X [2-row] (4WD).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.497L/KR15DDT(e-POWER)+BM46-MM48(HYBRID)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel used", value: "Regular unleaded gasoline" },
                  { name: "Drive Type", value: "4WD" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum torque N・m(kgf・m)/rpm", value: "250 (25.5)/2400-4000 (N・m (kgf・m)/rpm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Finisher Chrome inner door handle", value: "Included" },
                  { name: "USB power socket Type A (1 front, 1 rear)", value: "Included" },
                  { name: "Cup holders (2 in front, 2 in second row (in rear centerarmrest))", value: "Included" },
                  { name: "Passenger seat back pocket", value: "Included" },
                  { name: "Folding assist grips (front seats, left and right second row seats)", value: "Included" },
                  { name: "Coat hangers (2 seats on the left and right of the second row)", value: "Included" },
                  { name: "Luggage hooks (4 pieces)", value: "Included" },
                  { name: "Luggage underspace", value: "Included" },
                  { name: "Luggage side pocket", value: "Included" },
                  { name: "Power socket (DC12V) (1 in front, 1 in luggage)", value: "Included" },
                  { name: "Waterproof sheet (Cellcross(R)) (Exclusive design forXtremeX)", value: "Included" },
                  { name: "Driver's and passenger's power seats (Driver's seat: slide, recline, lifter, thigh support / Passenger's seat: slide, recline)", value: "Included" },
                  { name: "Driver's seat electric lumbar support", value: "Included" },
                  { name: "Personal driving position memory system (driver's seat)", value: "Included" },
                  { name: "Second-row folding seats (4:2:4 split, slide, recline)", value: "Included" },
                  { name: "Rear center armrest through (with cup holder)", value: "Included" },
                  { name: "Height-adjustable headrests (front seats, second seats (left and right))", value: "Included" },
                  { name: "Headrests (second (center), third (3-row seat cars only))", value: "Included" },
                  { name: "Interior color: Black〈G〉 Seat material: Waterproof sheet (Cellcross(R)) (Exclusive design for Xtreme X)", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Remote controlled automatic back door (with handsfree function and anti-pinch mechanism)", value: "Included" },
                  { name: "Xtreme X exclusive exterior black roof rails", value: "Included" },
                  { name: "Door sash molding", value: "Included" },
                  { name: "Door sash blackout", value: "Included" },
                  { name: "e-POWER emblem", value: "Included" },
                  { name: "e-4ORCE emblem", value: "Included" },
                  { name: "Xtreme X exclusive exterior front grille (dark finisher)", value: "Included" },
                  { name: "Exterior front under protector exclusively for Xtreme X", value: "Included" },
                  { name: "Exterior Rear Under Protector for Xtreme X", value: "Included" },
                  { name: "Xtreme X exclusive exterior gloss black outside door handle", value: "Included" },
                  { name: "Roof spoiler (with LED high-mounted stop lamp)", value: "Included" },
                  { name: "Emergency tire repair kit (without spare tire)", value: "Included" },
                  { name: "Scratch Shield", value: "Included" },
                  { name: "235/60R18 103H tires & 18-inch aluminum wheels (18 x 7.5J), inset: 40, PCD: 114.3 (5 holes) (Extremer X exclusive design)", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "x-e-4orce-3-row-4wd",
            name: "X e-4ORCE [3-row] (4WD)",
            imageUrl: "/X e-4ORCE [3-row] (4WD).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.497L/KR15DDT(e-POWER)+BM46-MM48(HYBRID)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel used", value: "Regular unleaded gasoline" },
                  { name: "Drive Type", value: "4WD" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum torque N・m(kgf・m)/rpm", value: "250 (25.5)/2400-4000 (N・m (kgf・m)/rpm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Finisher Chrome inner door handle", value: "Included" },
                  { name: "USB power socket Type A (1 front, 1 rear)", value: "Included" },
                  { name: "Cup holders (2 in front, 2 in second-row seats (in rear center armrest), 2 in third-row seats)", value: "Included" },
                  { name: "Folding assist grips (front seats, left and right second row seats)", value: "Included" },
                  { name: "Coat hangers (2 seats on the left and right of the second row)", value: "Included" },
                  { name: "Luggage lamp", value: "Included" },
                  { name: "Luggage hooks (4 pieces)", value: "Included" },
                  { name: "Luggage underspace", value: "Included" },
                  { name: "Luggage side pocket", value: "Included" },
                  { name: "Power socket (DC12V) (1 in front, 1 in luggage)", value: "Included" },
                  { name: "Seat fabric", value: "Included" },
                  { name: "Driver's power seat (slide, recline, lifter, thigh support)", value: "Included" },
                  { name: "Driver's seat electric lumbar support", value: "Included" },
                  { name: "Second-row folding seats (4:2:4 split, slide, recline)", value: "Included" },
                  { name: "Third-row folding seat (5:5 split, reclining, dive-down mechanism)", value: "Included" },
                  { name: "Rear center armrest through (with cup holder)", value: "Included" },
                  { name: "Height-adjustable headrests (front seats, second seats (left and right))", value: "Included" },
                  { name: "Headrests (second (center), third (3-row seat cars only))", value: "Included" },
                  { name: "Passenger seat back pocket", value: "Included" },
                  { name: "Interior color: Black〈G〉 Seat material: Fabric", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Door sash molding", value: "Included" },
                  { name: "Door sash blackout", value: "Included" },
                  { name: "e-POWER emblem", value: "Included" },
                  { name: "e-4ORCE emblem", value: "Included" },
                  { name: "Colored outside door handles", value: "Included" },
                  { name: "Roof spoiler (with LED high-mounted stop lamp)", value: "Included" },
                  { name: "Emergency tire repair kit (without spare tire)", value: "Included" },
                  { name: "Scratch Shield", value: "Included" },
                  { name: "235/60R18 103H tires & 18-inch aluminum wheels (18 x 7.5J), inset: 40, PCD: 114.3 (5 holes)", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "x-e-4orce-2-row-4wd",
            name: "X e-4ORCE [2-row] (4WD)",
            imageUrl: "/X e-4ORCE [2-row] (4WD).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.497L/KR15DDT(e-POWER)+BM46-MM48(HYBRID)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel used", value: "Regular unleaded gasoline" },
                  { name: "Drive Type", value: "4WD" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum torque N・m(kgf・m)/rpm", value: "250 (25.5)/2400-4000 (N・m (kgf・m)/rpm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Finisher Chrome inner door handle", value: "Included" },
                  { name: "USB power socket Type A (1 front, 1 rear)", value: "Included" },
                  { name: "Cup holders (2 in front, 2 in second row (in rear center armrest))", value: "Included" },
                  { name: "Folding assist grips (front seats, left and right second row seats)", value: "Included" },
                  { name: "Coat hangers (2 seats on the left and right of the second row)", value: "Included" },
                  { name: "Luggage lamp", value: "Included" },
                  { name: "Luggage hooks (4 pieces)", value: "Included" },
                  { name: "Luggage underspace", value: "Included" },
                  { name: "Luggage side pocket", value: "Included" },
                  { name: "Power socket (DC12V) (1 in front, 1 in luggage)", value: "Included" },
                  { name: "Seat fabric", value: "Included" },
                  { name: "Driver's power seat (slide, recline, lifter, thigh support)", value: "Included" },
                  { name: "Driver's seat electric lumbar support", value: "Included" },
                  { name: "Second-row folding seats (4:2:4 split, slide, recline)", value: "Included" },
                  { name: "Rear center armrest through (with cup holder)", value: "Included" },
                  { name: "Height-adjustable headrests (front seats, second seats (left and right))", value: "Included" },
                  { name: "Headrests (second (center), third (3-row seat cars only))", value: "Included" },
                  { name: "Passenger seat back pocket", value: "Included" },
                  { name: "Interior color: Black〈G〉 Seat material: Fabric", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Door sash molding", value: "Included" },
                  { name: "Door sash blackout", value: "Included" },
                  { name: "e-POWER emblem", value: "Included" },
                  { name: "e-4ORCE emblem", value: "Included" },
                  { name: "Colored outside door handles", value: "Included" },
                  { name: "Roof spoiler (with LED high-mounted stop lamp)", value: "Included" },
                  { name: "Emergency tire repair kit (without spare tire)", value: "Included" },
                  { name: "Scratch Shield", value: "Included" },
                  { name: "235/60R18 103H tires & 18-inch aluminum wheels (18 x 7.5J), inset: 40, PCD: 114.3 (5 holes)", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "s-e-4orce-4wd",
            name: "S e-4ORCE (4WD)",
            imageUrl: "/S e-4ORCE (4WD).jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.497L/KR15DDT(e-POWER)+BM46-MM48(HYBRID)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel used", value: "Regular unleaded gasoline" },
                  { name: "Drive Type", value: "4WD" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum torque N・m(kgf・m)/rpm", value: "250 (25.5)/2400-4000 (N・m (kgf・m)/rpm)" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "USB power socket Type A (1 front, 1 rear)", value: "Included" },
                  { name: "Cup holders (2 in front, 2 in second row (in rear center armrest))", value: "Included" },
                  { name: "Folding assist grips (front seats, left and right second row seats)", value: "Included" },
                  { name: "Coat hangers (2 seats on the left and right of the second row)", value: "Included" },
                  { name: "Luggage lamp", value: "Included" },
                  { name: "Luggage hooks (4 pieces)", value: "Included" },
                  { name: "Luggage underspace", value: "Included" },
                  { name: "Luggage side pocket", value: "Included" },
                  { name: "Power socket (DC12V) (1 in front, 1 in luggage)", value: "Included" },
                  { name: "Seat fabric", value: "Included" },
                  { name: "Driver's seat lifter (ratchet type)", value: "Included" },
                  { name: "Driver's seat electric lumbar support", value: "Included" },
                  { name: "Second-row folding seats (4:2:4 split, slide, recline)", value: "Included" },
                  { name: "Rear center armrest through (with cup holder)", value: "Included" },
                  { name: "Height-adjustable headrests (front seats, second seats (left and right))", value: "Included" },
                  { name: "Headrests (second (center), third (3-row seat cars only))", value: "Included" },
                  { name: "Passenger seat back pocket", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Door sash molding", value: "Included" },
                  { name: "Door sash blackout", value: "Included" },
                  { name: "e-POWER emblem", value: "Included" },
                  { name: "e-4ORCE emblem", value: "Included" },
                  { name: "Colored outside door handles", value: "Included" },
                  { name: "Roof spoiler (with LED high-mounted stop lamp)", value: "Included" },
                  { name: "Emergency tire repair kit (without spare tire)", value: "Included" },
                  { name: "Scratch Shield", value: "Included" },
                  { name: "235/60R18 103H tires & 18-inch aluminum wheels (18 x 7.5J), inset: 40, PCD: 114.3 (5 holes)", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "clipper",
        name: "Clipper",
        grades: [
          {
            id: "clipper-rio-g",
            name: "Clipper Rio G",
            imageUrl: "/Clipper Rio G.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "DOHC 12 valve VVT water-cooled inline 3-cylinder intercooler turbo" },
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "47（64）/6000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "95（9.7）/3000" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "980" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "LED room lamps (front and rear)", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "Headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                  { name: "Fabric Seats", value: "Included" },
                  { name: "Intelligent Key & Push Engine Starter request switch", value: "Included" },
                  { name: "Leather wrapped steering wheel", value: "Included" },
                  { name: "Multi function Steering wheel", value: "Included" },
                  { name: "Electronic Side doors", value: "Included" },
                  { name: "Push Start", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "Rear seat left side automatic sliding door (with anti-pinch mechanism)", value: "Included" },
                  { name: "Roof spoiler", value: "Included" },
                  { name: "165/60R14 Tyres", value: "Included" },
                  { name: "14-inch aluminum wheels", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "clipper-rio-e",
            name: "Clipper Rio E",
            imageUrl: "/Clipper Rio E.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "DOHC 12 valve VVT water-cooled inline 3-cylinder intercooler turbo" },
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "47（64）/6000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "95（9.7）/3000" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "1,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Room lamps (front and rear)", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "Headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                  { name: "Fabric Seats", value: "Included" },
                  { name: "Push Engine Starter request switch", value: "Included" },
                  { name: "Leather wrapped steering wheel", value: "Included" },
                  { name: "Multi function Steering wheel", value: "Included" },
                  { name: "Electronic Side doors", value: "Included" },
                  { name: "Push Start", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "Rear seat left side automatic sliding door (with anti-pinch mechanism)", value: "Included" },
                  { name: "Rear seat left side electric auto step", value: "Included" },
                  { name: "Roof spoiler", value: "Included" },
                  { name: "165/60R14 Tyres", value: "Included" },
                  { name: "14-inch aluminum wheels", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "clipper-gx-turbo",
            name: "GX Turbo",
            imageUrl: "/CLIPER GX Turbo.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "DOHC 12 valve VVT water-cooled inline 3-cylinder intercooler turbo" },
                  { name: "Engine Type", value: "658cc" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "47（64）/6000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "95（9.7）/3000" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "950" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Automatic Touch Air Conditioning System", value: "Included" },
                  { name: "Rear Blower", value: "Included" },
                  { name: "Front Seat Heaters", value: "Included" },
                  { name: "Electronic Side doors", value: "Included" },
                  { name: "Push Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front & Rear", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "Headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "Electronic Side Doors", value: "Included" },
                  { name: "145/80R12 Tyres", value: "Included" },
                  { name: "12-inch Wheel Cups", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "clipper-gx",
            name: "GX",
            imageUrl: "/CLIIPER GX.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658cc" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "930" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Rear Blower", value: "Included" },
                  { name: "Front Seat Heaters", value: "Included" },
                  { name: "Push Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front & Rear", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "Headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "145/80R12 Tyres", value: "Included" },
                  { name: "12-inch Wheel Cups", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "clipper-dx-gl-package",
            name: "DX GL Package",
            imageUrl: "/CLIPER DX GL Package.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658cc" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "910" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Front Seat Heaters", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front only", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "No headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "145/80R12 Tyres", value: "Included" },
                  { name: "12-inch Wheel Cups", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "clipper-dx",
            name: "DX",
            imageUrl: "/CLIPER DX.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658cc" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "910" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front only", value: "Included" },
                  { name: "No headrests for rear Seats", value: "Included" },
                  { name: "Mounted headrests for front seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Halogen headlights", value: "Included" },
                  { name: "145/80R12 Tyres", value: "Included" },
                  { name: "12-inch Steel Wheels", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          }
        ],
      },
      {
        id: "almera",
        name: "Almera",
        grades: [
          {
            id: "vl-turbo",
            name: "VL Turbo",
            imageUrl: "/VL Turbo.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L 3-cylinder turbocharged / Gasoline" },
                  { name: "Drive Type", value: "FWD" },
                  { name: "Transmission Type", value: "CVT with D-Step Logic" },
                  { name: "Fuel Consumption", value: "23.3 KM/L" },
                ],
              },
              {
                category: "Safety Equipment",
                items: [
                  { name: "Front Dual SRS Airbags / Side Airbags / Side Curtain Airbags", value: "Included" },
                  { name: "6 Airbags", value: "Included" },
                  { name: "Blind Spot Warning (BSW)", value: "Included" },
                  { name: "Rear Cross Traffic Alert (RCTA)", value: "Included" },
                  { name: "Intelligent Forward Collision Warning (IFCW)", value: "Included" },
                  { name: "Intelligent Emergency Braking (IEB)", value: "Included" },
                  { name: "Lane Departure Warning (LDW)", value: "Included" },
                  { name: "Hill Start Assist", value: "Included" },
                  { name: "Electronic Stability Control (ESC)", value: "Included" },
                  { name: "Traction Control (TCS)", value: "Included" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall Length", value: "4,495 mm" },
                  { name: "Overall Width", value: "1,740 mm" },
                  { name: "Overall Height", value: "1,460 mm" },
                  { name: "Wheelbase", value: "2,605 mm" },
                  { name: "Weight", value: "1,079 kg" },
                  { name: "Boot space", value: "482 L" },
                ],
              },
              {
                category: "Brakes & Suspension",
                items: [
                  { name: "Front Suspension", value: "Independent MacPherson Struts with Stabilizer" },
                  { name: "Front Brake", value: "Ventilated Disc Brake" },
                  { name: "Rear Suspension", value: "Torsion beam with coil spring" },
                  { name: "Rear Brake", value: "Drum Brake" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat material", value: "Black Synthetic Leather" },
                  { name: "Leather-Wrapped Steering Wheel", value: "Included" },
                  { name: "Leather & Fabric Seat Upholstery", value: "Included" },
                  { name: "Automatic Air-Condition System", value: "Included" },
                  { name: "Auto Climate Control with Rear Vents", value: "Included" },
                  { name: "Multifunction Steering Wheel with TFT Display Control Switch", value: "Included" },
                  { name: "7-inch Digital Display (Instrument Cluster)", value: "Included" },
                  { name: "7\" Digital Driver Display (TFT)", value: "Included" },
                  { name: "8-inch Touchscreen with Apple CarPlay & Android Auto", value: "Included" },
                  { name: "8\" Touchscreen with Apple CarPlay & Android Auto", value: "Included" },
                  { name: "6 Speakers Audio System", value: "Included" },
                  { name: "Wireless Charger", value: "Included" },
                  { name: "Wireless Smartphone Charging", value: "Included" },
                  { name: "Push-Button Start", value: "Included" },
                  { name: "Keyless Entry with Push Start", value: "Included" },
                  { name: "Remote Engine Start Switch on Intelligent Key", value: "Included" },
                  { name: "Remote Engine Start", value: "Included" },
                  { name: "360° Around View Monitor (AVM)", value: "Included" },
                  { name: "360° Intelligent Around View Monitor (VLT trim)", value: "Included" },
                  { name: "Rear View Camera", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Headlamps with LED Signature Light with Auto On-Off Headlamps", value: "Included" },
                  { name: "LED Headlamps with LED DRLs", value: "Included" },
                  { name: "LED Front Fog Lamps", value: "Included" },
                  { name: "Frameless Rear View Mirror", value: "Included" },
                  { name: "Chromed Front Grille", value: "Included" },
                  { name: "Body Color Front and Rear Bumpers", value: "Included" },
                  { name: "15\" x 5.5J Alloy Wheel", value: "Included" },
                  { name: "Tire Size", value: "195/65 R15" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Cruise Control", value: "Included", highlighted: true },
                  { name: "HBA (Automatic High Beam Assist)", value: "Included", highlighted: true },
                ],
              },
            ],
          },
          {
            id: "v-turbo",
            name: "V Turbo",
            imageUrl: "/V Turbo.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L 3-cylinder turbocharged / Gasoline" },
                  { name: "Drive Type", value: "FWD" },
                  { name: "Transmission Type", value: "CVT with D-Step Logic" },
                  { name: "Fuel Consumption", value: "23.3 KM/L" },
                ],
              },
              {
                category: "Safety Equipment",
                items: [
                  { name: "Front Dual SRS Airbags / Side Airbags / Side Curtain Airbags", value: "Included" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall Length", value: "4,495 mm" },
                  { name: "Overall Width", value: "1,740 mm" },
                  { name: "Overall Height", value: "1,460 mm" },
                  { name: "Wheelbase", value: "2,605 mm" },
                  { name: "Weight", value: "1,079 kg" },
                ],
              },
              {
                category: "Brakes & Suspension",
                items: [
                  { name: "Front Suspension", value: "Independent MacPherson Struts with Stabilizer" },
                  { name: "Front Brake", value: "Ventilated Disc Brake" },
                  { name: "Rear Suspension", value: "Torsion beam with coil spring" },
                  { name: "Rear Brake", value: "Drum Brake" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat material", value: "Black Synthetic Leather" },
                  { name: "Automatic Air-Condition System", value: "Included" },
                  { name: "Multifunction Steering Wheel with TFT Display Control Switch", value: "Included" },
                  { name: "7-inch Digital Display (Instrument Cluster)", value: "Included" },
                  { name: "8-inch Touchscreen with Apple CarPlay & Android Auto", value: "Included" },
                  { name: "Wireless Charger", value: "Included" },
                  { name: "LED Front Fog Lamps", value: "Included" },
                  { name: "Push-Button Start", value: "Included" },
                  { name: "Remote Engine Start Switch on Intelligent Key", value: "Included" },
                  { name: "360° Around View Monitor (AVM)", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Headlamps with LED Signature Light with Auto On-Off Headlamps", value: "Included" },
                  { name: "Chromed Front Grille", value: "Included" },
                  { name: "Body Color Front and Rear Bumpers", value: "Included" },
                  { name: "15\" x 5.5J Alloy Wheel", value: "Included" },
                  { name: "Tire Size", value: "195/65 R15" },
                ],
              },
            ],
          },
          {
            id: "el-turbo",
            name: "EL Turbo",
            imageUrl: "/EL Turbo.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L 3-cylinder turbocharged / Gasoline" },
                  { name: "Drive Type", value: "FWD" },
                  { name: "Transmission Type", value: "CVT with D-Step Logic" },
                  { name: "Fuel Consumption", value: "23.3 KM/L" },
                ],
              },
              {
                category: "Safety Equipment",
                items: [
                  { name: "Front Dual SRS Airbags / Side Airbags / Side Curtain Airbags", value: "Included" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall Length", value: "4,495 mm" },
                  { name: "Overall Width", value: "1,740 mm" },
                  { name: "Overall Height", value: "1,460 mm" },
                  { name: "Wheelbase", value: "2,605 mm" },
                  { name: "Weight", value: "1,079 kg" },
                ],
              },
              {
                category: "Brakes & Suspension",
                items: [
                  { name: "Front Suspension", value: "Independent MacPherson Struts with Stabilizer" },
                  { name: "Front Brake", value: "Ventilated Disc Brake" },
                  { name: "Rear Suspension", value: "Torsion beam with coil spring" },
                  { name: "Rear Brake", value: "Drum Brake" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat material", value: "Black Cloth with Dark Blue Trim" },
                  { name: "Automatic Air-Condition System", value: "Included" },
                  { name: "Multi-Information Display (MID)", value: "Included" },
                  { name: "Standard Audio for AM/FM, Bluetooth, USB and AUX-in", value: "Included" },
                  { name: "Push-Button Start", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Halogen Headlamps", value: "Included" },
                  { name: "Chromed Front Grille", value: "Included" },
                  { name: "Body Color Front and Rear Bumpers", value: "Included" },
                  { name: "15\" x 5.5J Alloy Wheel", value: "Included" },
                  { name: "Tire Size", value: "195/65 R15" },
                ],
              },
            ],
          },
          {
            id: "e-turbo",
            name: "E Turbo",
            imageUrl: "/E Turbo.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L 3-cylinder turbocharged / Gasoline" },
                  { name: "Drive Type", value: "FWD" },
                  { name: "Transmission Type", value: "CVT with D-Step Logic" },
                  { name: "Fuel Consumption", value: "23.3 KM/L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall Length", value: "4,495 mm" },
                  { name: "Overall Width", value: "1,740 mm" },
                  { name: "Overall Height", value: "1,460 mm" },
                  { name: "Wheelbase", value: "2,605 mm" },
                  { name: "Weight", value: "1,073 kg" },
                ],
              },
              {
                category: "Brakes & Suspension",
                items: [
                  { name: "Front Suspension", value: "Independent MacPherson Struts with Stabilizer" },
                  { name: "Front Brake", value: "Ventilated Disc Brake" },
                  { name: "Rear Suspension", value: "Torsion beam with coil spring" },
                  { name: "Rear Brake", value: "Drum Brake" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seat material", value: "Black Cloth with Dark Blue Trim" },
                  { name: "Manual control Air-Condition System", value: "Included" },
                  { name: "Multi-Information Display (MID)", value: "Included" },
                  { name: "Standard Audio for AM/FM, Bluetooth, USB and AUX-in", value: "Included" },
                  { name: "Push-Button Start", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Halogen Headlamps", value: "Included" },
                  { name: "Chromed Front Grille", value: "Included" },
                  { name: "Body Color Front and Rear Bumpers", value: "Included" },
                  { name: "Steel 15\" x 5.5J with Full Cover", value: "Included" },
                  { name: "Tire size", value: "195/65 R15" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "magnite",
        name: "Magnite",
        grades: [
          {
            id: "accenta",
            name: "Accenta",
            imageUrl: "/Accenta.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L Petrol Engine" },
                  { name: "Transmission Type", value: "EZ-Shift" },
                  { name: "Engine type, number of cylinders and layout", value: "3 Cylinder inline engine" },
                  { name: "Drive Type", value: "2WD FF" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel tank capacity (L)", value: "40L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Dimensions", value: "3994 x 1758 x 1572 mm" },
                  { name: "Ground Clearance", value: "205mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Max Output", value: "72 @ 6250" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Touchscreen Infotainment", value: "Included" },
                  { name: "Auto Climate Control", value: "Included" },
                  { name: "Analog Meter", value: "Included" },
                  { name: "Fabric Seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Halogen Headlights", value: "Included" },
                  { name: "Wheel Cups", value: "Included" },
                  { name: "Mono Tone Exterior", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "6 Airbags", value: "Included", highlighted: true },
                  { name: "ABS", value: "Included", highlighted: true },
                  { name: "Central Locking", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "n-connecta",
            name: "N-Connecta",
            imageUrl: "/N-Connecta.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L Turbocharged Petrol Engine" },
                  { name: "Transmission Type", value: "CVT Automatic" },
                  { name: "Engine type, number of cylinders and layout", value: "3 Cylinder inline engine" },
                  { name: "Drive Type", value: "2WD FF" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel tank capacity (L)", value: "40L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Dimensions", value: "3994 x 1758 x 1572 mm" },
                  { name: "Ground Clearance", value: "205mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Max Output", value: "100 @ 5000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Touchscreen Infotainment", value: "Included" },
                  { name: "Auto Climate Control", value: "Included" },
                  { name: "Rear AC vents", value: "Included" },
                  { name: "Digital Meter", value: "Included" },
                  { name: "Fabric Seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Projector-based halogen headlamps with DRL's", value: "Included" },
                  { name: "Alloy Wheels", value: "Included" },
                  { name: "Two Tone Exterior", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "6 Airbags", value: "Included", highlighted: true },
                  { name: "ABS", value: "Included", highlighted: true },
                  { name: "Central Locking", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "tekna-plus",
            name: "Tekna +",
            imageUrl: "/Tekna +.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L / 1.0L Turbocharged Petrol Engine" },
                  { name: "Transmission Type", value: "CVT Automatic / EZ Shift" },
                  { name: "Engine type, number of cylinders and layout", value: "3 Cylinder inline engine" },
                  { name: "Drive Type", value: "2WD FF" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel tank capacity (L)", value: "40L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Dimensions", value: "3994 x 1758 x 1572 mm" },
                  { name: "Ground Clearance", value: "205mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Max Output (Turbo)", value: "100 @ 5000" },
                  { name: "Max Output (Non-Turbo)", value: "72 @ 6250" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Touchscreen Infotainment", value: "Included" },
                  { name: "Auto Climate Control", value: "Included" },
                  { name: "Rear AC vents", value: "Included" },
                  { name: "Digital Meter", value: "Included" },
                  { name: "Cruise Control", value: "Included" },
                  { name: "Leather Seats", value: "Included" },
                  { name: "Ambient Lights", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Projector Headlamps", value: "Included" },
                  { name: "Fog Lamps", value: "Included" },
                  { name: "Alloy Wheels", value: "Included" },
                  { name: "Two Tone Exterior", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "6 Airbags", value: "Included", highlighted: true },
                  { name: "ABS", value: "Included", highlighted: true },
                  { name: "Central Locking", value: "Included" },
                ],
              },
            ],
          },
        ],
      }
    ],
  },
  {
    id: "suzuki",
    name: "Suzuki",
    models: [
      {
        id: "alto",
        name: "Alto",
        grades: [
          {
            id: "alto-hybrid-x",
            name: "HYBRID - X",
            imageUrl: "/SUZUKI - ALTO - HYBRID - X.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "657/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                  { name: "Fuel Consumption", value: "23 km/l" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Meter", value: "Self-luminous meter [always illuminated] - Silver decoration" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/shift indicator/idling stop fuel saving/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising range/outside temperature gauge/odometer/trip meter, etc.",
                  },
                  { name: "Air conditioner side louver ring", value: "Included" },
                  { name: "Air conditioner side louvers", value: "[black]" },
                  { name: "Air conditioner center louver", value: "Included" },
                  { name: "Inside door handle", value: "Included" },
                  { name: "Steering garnish", value: "[silver]" },
                  { name: "Rear seat head restraint", value: "Included" },
                  { name: "Back door inside grip", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering [navy]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Chrome front bumper garnish", value: "Included" },
                  { name: "Coloured door mirrors", value: "[same colour as roof]" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                  { name: "Wheels", value: "14-inch aluminum wheels" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Safety Equipment",
                    value: "6 air bags",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
          {
            id: "alto-hybrid-s",
            name: "HYBRID - S",
            imageUrl: "/SUZUKI - ALTO - HYBRID - S.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "657/Hybrid" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                  { name: "Fuel Consumption", value: "23 km/l" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Meter", value: "Self-luminous meter [always illuminated]" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/shift indicator/idling stop fuel saving/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising range/outside temperature gauge/odometer/trip meter, etc.",
                  },
                  { name: "Air conditioner side louver ring", value: "Included" },
                  { name: "Air conditioner side louvers", value: "[black]" },
                  { name: "Air conditioner center louver", value: "Included" },
                  { name: "Inside door handle", value: "Included" },
                  { name: "Back door inside grip", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering [navy]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Chrome front bumper garnish", value: "Included" },
                  { name: "Coloured door mirrors", value: "[same colour as roof]" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Safety Equipment",
                    value: "6 air bags",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
          {
            id: "alto-l",
            name: "L",
            imageUrl: "/SUZUKI - ALTO - L.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "657/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                  { name: "Fuel Consumption", value: "23 km/l" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Meter", value: "Self-luminous meter [always illuminated]" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/shift indicator/idling stop fuel saving/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising range/outside temperature gauge/odometer/trip meter, etc.",
                  },
                  { name: "Air conditioner side louver ring", value: "BLACK" },
                  { name: "Air conditioner side louvers", value: "[black]" },
                  { name: "Inside door handle", value: "BLACK" },
                  { name: "Back door inside grip", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering [navy]" },
                  { name: "Key Start", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Colored door handles", value: "Included" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Safety Equipment",
                    value: "6 air bags",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
          {
            id: "alto-a",
            name: "A",
            imageUrl: "/SUZUKI - ALTO - A.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "657/Gasoline" },
                  { name: "Transmission Type", value: "Continuously variable transmission (CVT)" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4 People" },
                  { name: "Fuel Consumption", value: "23 km/l" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Meter", value: "Self-luminous meter [always illuminated]" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/shift indicator/idling stop fuel saving/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising range/outside temperature gauge/odometer/trip meter, etc.",
                  },
                  { name: "Air conditioner side louver ring", value: "BLACK" },
                  { name: "Air conditioner side louvers", value: "[black]" },
                  { name: "Inside door handle", value: "BLACK" },
                  { name: "Back door inside grip", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering [navy]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Center Cap", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  {
                    name: "Safety Equipment",
                    value: "6 air bags",
                    highlighted: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "wagon-r",
        name: "Wagon R",
        grades: [
          {
            id: "wagon-r-stingray-hybrid-t",
            name: "Stingray - HYBRID T",
            imageUrl: "/Stingray - HYBRID T.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder + intercooler turbo" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Ground Clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,650 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,450/1,355/1,265 mm" },
                  { name: "Vehicle weight", value: "800 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "98〈10.0kg・m〉/3,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "2.3〈3.1PS〉/1,000" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "50〈5.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Shift knob", value: "Leather-wrapped shift knob" },
                  { name: "Chrome-plated shift knob button", value: "Included" },
                  { name: "Steering garnish", value: "[silver]" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/Idling stop fuel saving/Idling stop time/Eco score/Instantaneous fuel consumption/Average fuel consumption/Driving distance/Outside temperature gauge/Shift indicator/Odometer/Trip meter, etc.",
                  },
                  { name: "Instrument panel color panel", value: "[Dark violet pearl, silver]" },
                  { name: "Status Information Lamp", value: "Included" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Front door armrest", value: "[Dark Violet Pearl]" },
                  { name: "Inside door handle", value: "[plating]" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Front bench seat", value: "[with center armrest]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper", value: "[aero shape]" },
                  { name: "Rear bumper", value: "[aero shape]" },
                  { name: "Rear bumper garnish", value: "Included" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Chrome back door garnish", value: "Included" },
                  { name: "Plated door handle", value: "Included" },
                  { name: "Wheels", value: "15-inch aluminum wheels" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Radial tires", value: "[165/55R15]" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                ],
              },
            ],
          },
          {
            id: "wagon-r-custom-z-hybrid-zt",
            name: "Custom Z - HYBRID ZT",
            imageUrl: "/Custom Z - HYBRID ZT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder + intercooler turbo" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Ground Clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,650 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,450/1,355/1,265 mm" },
                  { name: "Vehicle weight", value: "800 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "98〈10.0kg・m〉/3,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "2.3〈3.1PS〉/1,000" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "50〈5.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Shift knob", value: "Leather-wrapped shift knob" },
                  { name: "Chrome-plated shift knob button", value: "Included" },
                  { name: "Steering garnish", value: "[silver]" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/Idling stop fuel saving/Idling stop time/Eco score/Instantaneous fuel consumption/Average fuel consumption/Driving distance/Outside temperature gauge/Shift indicator/Odometer/Trip meter, etc.",
                  },
                  { name: "Instrument panel color panel", value: "[Brown metallic, silver]" },
                  { name: "Status Information Lamp", value: "Included" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Front door armrest", value: "[Brown metallic]" },
                  { name: "Inside door handle", value: "[plating]" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Front bench seat", value: "[with center armrest]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper", value: "[aero shape]" },
                  { name: "Rear bumper", value: "[aero shape]" },
                  { name: "Rear bumper garnish", value: "Included" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Chrome back door garnish", value: "Included" },
                  { name: "Plated door handle", value: "Included" },
                  { name: "Wheels", value: "15-inch aluminum wheels" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Radial tires", value: "[165/55R15]" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                ],
              },
            ],
          },
          {
            id: "wagon-r-custom-z-hybrid-zx",
            name: "Custom Z - HYBRID ZX",
            imageUrl: "/Custom Z - HYBRID ZX.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel Consumption", value: "25.2 km/L" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Ground Clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,650 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,450/1,355/1,265 mm" },
                  { name: "Vehicle weight", value: "790 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "1.9〈2.6PS〉/1,500" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "40〈4.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Chrome-plated shift knob button", value: "Included" },
                  { name: "Steering garnish", value: "[silver]" },
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/Idling stop fuel saving/Idling stop time/Eco score/Instantaneous fuel consumption/Average fuel consumption/Driving distance/Outside temperature gauge/Shift indicator/Odometer/Trip meter, etc.",
                  },
                  { name: "Instrument panel color panel", value: "[Brown metallic, silver]" },
                  { name: "Status Information Lamp", value: "Included" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Front door armrest", value: "[Brown metallic]" },
                  { name: "Inside door handle", value: "[SILVER]" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Front bench seat", value: "[with center armrest]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper", value: "[aero shape]" },
                  { name: "Rear bumper", value: "[aero shape]" },
                  { name: "Rear bumper garnish", value: "Included" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Steel silver door handle", value: "Included" },
                  { name: "Wheels", value: "14-inch aluminum wheels" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Radial tires", value: "[165/55R15]" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                ],
              },
            ],
          },
          {
            id: "wagon-r-hybrid-fx-s",
            name: "HYBRID FX-S",
            imageUrl: "/HYBRID FX-S.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT / 5MT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Ground Clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,650 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,450/1,355/1,265 mm" },
                  { name: "Vehicle weight", value: "750 kg (CVT) / 730 kg (5MT)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "1.9〈2.6PS〉/1,500" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "40〈4.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Steering garnish", value: "[silver]" },
                  {
                    name: "Multi-information display",
                    value: "[color] Energy flow indicator/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/motion display/clock/outside temperature gauge/shift indicator/odometer/trip meter/tachometer/voice guidance function, etc.",
                  },
                  { name: "Instrument panel color panel", value: "[Brown]" },
                  { name: "Status Information Lamp", value: "Included" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Front door armrest", value: "[BLACK]" },
                  { name: "Inside door handle", value: "[BLACK]" },
                  { name: "Front bench seat", value: "[with center armrest]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Colored door handles", value: "Included" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                  { name: "Radial tires", value: "[165/55R15]" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                ],
              },
            ],
          },
          {
            id: "wagon-r-fx",
            name: "FX",
            imageUrl: "/FX.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Fuel Consumption", value: "24.4 km/L" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / Full-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Ground Clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,650 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,450/1,355/1,265 mm" },
                  { name: "Vehicle weight", value: "850 kg (2WD) / 910 kg (4WD)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  {
                    name: "Multi-information display",
                    value: "Eco score (CVT vehicles)/instantaneous fuel economy/average fuel economy/cruising range/outside temperature gauge/shift indicator (CVT vehicles)/odometer/trip meter, etc.",
                  },
                  { name: "Instrument panel color panel", value: "[Brown]" },
                  { name: "Eco-drive assist lighting", value: "Included" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Front door armrest", value: "[BLACK]" },
                  { name: "Inside door handle", value: "[BLACK]" },
                  { name: "Front bench seat", value: "[with center armrest]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Colored door handles", value: "Included" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                  { name: "Radial tires", value: "[165/55R15]" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "hustler",
        name: "Hustler",
        grades: [
          {
            id: "hustler-tough-wild-turbo",
            name: "Tough Wild Turbo",
            imageUrl: "/Tough Wild.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Total displacement", value: "658 (660) L" },
                  { name: "Valve mechanism", value: "DOHC 12 valve VVT" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                  { name: "Fuel consumption", value: "26 km/L" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Front grille", value: "Black" },
                  { name: "Headlamp garnish", value: "Black" },
                  { name: "Personal Table", value: "2 Drink holders (Both rear seats)" },
                  { name: "Instrument panel", value: "Body Color" },
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Seat covering", value: "Fabric seat covering (Water-repellent finish)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper garnish", value: "Plating" },
                  { name: "Colored door handles", value: "Black" },
                  { name: "Wheels", value: "15-inch aluminum wheels (Black)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Foglamps", value: "Included", highlighted: true },
                  { name: "Roof Rails", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Mono tone", value: "Steel Silver metallic / Bluish black pearl / Cool Khaki Pearl Metallic / Soft beige Mettalic / Vermilion Orange" },
                  { name: "2 tone", value: "Off Blue Mettalic" },
                ],
              },
            ],
          },
          {
            id: "hustler-tough-wild-hybrid-g-turbo",
            name: "Tough Wild HYBRID G Turbo",
            imageUrl: "/HYBRID G Turbo.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Total displacement", value: "658 (660) L" },
                  { name: "Valve mechanism", value: "DOHC 12 valve VVT" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                  { name: "Fuel consumption", value: "26 km/L" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Front grille", value: "Black" },
                  { name: "Headlamp garnish", value: "Plating" },
                  { name: "Personal Table", value: "Not Available" },
                  { name: "Instrument panel", value: "Body Color" },
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Seat covering", value: "Leather-like & fabric seat covering" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper garnish", value: "Plating" },
                  { name: "Colored door handles", value: "Black" },
                  { name: "Wheels", value: "15-inch aluminum wheels (Black)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Foglamps", value: "Included", highlighted: true },
                  { name: "Roof Rails", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Mono tone", value: "Bluish black pearl / Steel Silver metallic / Cool Khaki Pearl Metallic / Soft beige Mettalic / Vermilion Orange" },
                  { name: "2 tone", value: "Off blue metallic / Active Yellow & Gun metal / Phoenix red pearl & Gun metal / Denim blue metallic & Gun metal / Vermilion Orange & Soft beige / Off Blue Mettalic & Soft beige / Cool Khaki Pearl Metallic & Soft beige" },
                ],
              },
            ],
          },
          {
            id: "hustler-hybrid-g",
            name: "HYBRID G",
            imageUrl: "/HYBRID G.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Total displacement", value: "657 (660) L" },
                  { name: "Valve mechanism", value: "DOHC 12 valve intake and exhaust VVT" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                  { name: "Fuel consumption", value: "30 km/L" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Front grille", value: "Plating" },
                  { name: "Headlamp garnish", value: "Plating" },
                  { name: "Personal Table", value: "Not Available" },
                  { name: "Instrument panel", value: "Body Color" },
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Seat covering", value: "Leather-like & fabric seat covering" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Colored door handles", value: "[Same color as roof]" },
                  { name: "Wheels", value: "15-inch steel wheels" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Foglamps", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Mono tone", value: "Bluish black pearl / Steel Silver metallic / Cool Khaki Pearl Metallic / Soft beige Mettalic / Vermilion Orange / Off blue metallic" },
                  { name: "2 tone", value: "Active Yellow & Gun metal / Phoenix red pearl & Gun metal / Denim blue metallic & Gun metal / Vermilion Orange & Soft beige / Off Blue Mettalic & Soft beige / Cool Khaki Pearl Metallic & Soft beige" },
                ],
              },
            ],
          },
          {
            id: "hustler-hybrid-x-turbo",
            name: "HYBRID X Turbo",
            imageUrl: "/HYBRID X Turbo.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Total displacement", value: "658 (660) L" },
                  { name: "Valve mechanism", value: "DOHC 12 valve VVT" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                  { name: "Fuel consumption", value: "22 km/L" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Front grille", value: "Plating" },
                  { name: "Headlamp garnish", value: "Plating" },
                  { name: "Personal Table", value: "2 Drink holders (Both rear seats)" },
                  { name: "Instrument panel", value: "Black Pearl" },
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Seat covering", value: "Leather-like & fabric seat covering" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Plated door handle", value: "Included" },
                  { name: "Wheels", value: "15-inch aluminum wheels (Machining & Black)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Foglamps", value: "Included", highlighted: true },
                  {
                    name: "Special edition",
                    value: "Based on Hybrid X or X Turbo - Two-tone paint with white roof / Chrome grille garnish / Roof rails / Premium leather-like seat covers / Unique interior colour scheme / J Style badging",
                    highlighted: true,
                  },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Mono tone", value: "Bluish black pearl / Off blue metallic / Cool Khaki Pearl Metallic / Pure White Pearl / Soft beige Mettalic" },
                  { name: "2 tone", value: "Active Yellow & Gun metal / Phoenix red pearl & Gun metal / Denim blue metallic & Gun metal / Cool Khaki Pearl Metallic & Soft beige / Off Blue Mettalic & Soft beige" },
                ],
              },
            ],
          },
          {
            id: "hustler-hybrid-x",
            name: "HYBRID X",
            imageUrl: "/HYBRID X.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Total displacement", value: "657 (660) L" },
                  { name: "Valve mechanism", value: "DOHC 12 valve intake and exhaust VVT" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption", value: "25 km/L" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Front grille", value: "Plating" },
                  { name: "Headlamp garnish", value: "Plating" },
                  { name: "Personal Table", value: "2 Drink holders (Both rear seats)" },
                  { name: "Instrument panel", value: "Black Pearl" },
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Seat covering", value: "Leather-like & fabric seat covering" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Foglamps", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Foglamps", value: "Included", highlighted: true },
                ],
              },
              {
                category: "Colors",
                items: [
                  { name: "Mono tone", value: "Off blue metallic / Bluish black pearl / Cool Khaki Pearl Metallic / Pure White Pearl / Soft beige Mettalic" },
                  { name: "2 tone", value: "Active Yellow & Gun metal / Phoenix red pearl & Gun metal / Denim blue metallic & Gun metal / Cool Khaki Pearl Metallic & Soft beige / Off Blue Mettalic & Soft beige / Vermilion Orange & Soft beige" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "spacia",
        name: "Spacia",
        grades: [
          {
            id: "spacia-custom-hybrid-xs-turbo",
            name: "Spacia Custom HYBRID XS TURBO",
            imageUrl: "/Spacia Custom HYBRID XS TURBO.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / Full-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,785 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,170/1,345/1,415 mm" },
                  { name: "Vehicle weight", value: "910 kg (2WD) / 960 kg (4WD)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "98〈10.0kg・m〉/3,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "2.3〈3.1PS〉/1,000" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "50〈5.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Shift knob", value: "Leather-wrapped shift knob" },
                  { name: "Plated shift knob button & shaft", value: "Included" },
                  { name: "Digital Speedometer", value: "Included" },
                  {
                    name: "Multi-information display",
                    value: "[color] Energy flow indicator/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/motion display/clock/outside temperature gauge/shift indicator/odometer/trip meter/tachometer/voice guidance function, etc.",
                  },
                  { name: "Personal tables", value: "1 multi-size drink holder, 2 shopping hooks, tablet stopper, foldable (on both sides of rear seats)" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Seat piping", value: "[Bordeaux]" },
                  { name: "Rear seat slide strap", value: "(luggage floor)" },
                  { name: "Luggage room lamp", value: "Included" },
                  { name: "Front centre armrest", value: "Included" },
                  { name: "Afterglow 3-position room lamp", value: "(front, center) [LED]" },
                  { name: "Shift gate garnish", value: "[piano black]" },
                  { name: "Steering lower garnish", value: "[piano black tone]" },
                  { name: "Instrument panel upper garnish", value: "[Semi-matt Bordeaux]" },
                  { name: "Instrument panel air conditioner louver garnish", value: "Included" },
                  { name: "Front door trim garnish", value: "[Semi-matt Bordeaux x piano black]" },
                  { name: "Big open tray garnish", value: "[Piano black tone]" },
                  { name: "Rear seat centre armrest", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper", value: "[aero shape]" },
                  { name: "Rear bumper", value: "[aero shape]" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Large chrome & black front grille", value: "Included" },
                  { name: "Large chrome front bumper garnish", value: "Included" },
                  { name: "Plated door handle", value: "Included" },
                  { name: "Chrome back door garnish", value: "Included" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Wheels", value: "15-inch aluminum wheels" },
                  { name: "Radial tires", value: "[165/55R15]" },
                ],
              },
            ],
          },
          {
            id: "spacia-custom-hybrid-xs",
            name: "Spacia Custom HYBRID XS",
            imageUrl: "/Spacia Custom HYBRID XS.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / Full-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,785 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,170/1,345/1,415 mm" },
                  { name: "Vehicle weight", value: "910 kg (2WD) / 960 kg (4WD)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "1.9〈2.6PS〉/1,500" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "40〈4.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel" },
                  { name: "Shift knob", value: "Leather-wrapped shift knob" },
                  { name: "Plated shift knob button & shaft", value: "Included" },
                  { name: "Digital Speedometer", value: "Included" },
                  {
                    name: "Multi-information display",
                    value: "[color] Energy flow indicator/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/motion display/clock/outside temperature gauge/shift indicator/odometer/trip meter/tachometer/voice guidance function, etc.",
                  },
                  { name: "Personal tables", value: "1 multi-size drink holder, 2 shopping hooks, tablet stopper, foldable (on both sides of rear seats)" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Seat piping", value: "[Bordeaux]" },
                  { name: "Rear seat slide strap", value: "(luggage floor)" },
                  { name: "Luggage room lamp", value: "Included" },
                  { name: "Front centre armrest", value: "Included" },
                  { name: "Afterglow 3-position room lamp", value: "(front, center) [LED]" },
                  { name: "Shift gate garnish", value: "[piano black]" },
                  { name: "Steering lower garnish", value: "[piano black tone]" },
                  { name: "Instrument panel upper garnish", value: "Included" },
                  { name: "Instrument panel air conditioner louver garnish", value: "Included" },
                  { name: "Front door trim garnish", value: "[Semi-matt Bordeaux x piano black]" },
                  { name: "Big open tray garnish", value: "Included" },
                  { name: "Rear seat centre armrest", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper", value: "[aero shape]" },
                  { name: "Rear bumper", value: "[aero shape]" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Large chrome & black front grille", value: "Included" },
                  { name: "Large chrome front bumper garnish", value: "Included" },
                  { name: "Plated door handle", value: "Included" },
                  { name: "Chrome back door garnish", value: "Included" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Wheels", value: "15-inch aluminum wheels" },
                  { name: "Radial tires", value: "[165/55R15]" },
                ],
              },
            ],
          },
          {
            id: "spacia-custom-hybrid-gs",
            name: "Spacia Custom HYBRID GS",
            imageUrl: "/Spacia Custom HYBRID GS.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / Full-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,785 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,170/1,345/1,415 mm" },
                  { name: "Vehicle weight", value: "890 kg (2WD) / 940 kg (4WD)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "1.9〈2.6PS〉/1,500" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "40〈4.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Plated shift knob button & shaft", value: "Included" },
                  { name: "Digital Speedometer", value: "Included" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  {
                    name: "Multi-information display",
                    value: "[color] Energy flow indicator/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/motion display/clock/outside temperature gauge/shift indicator/odometer/trip meter/tachometer/voice guidance function, etc.",
                  },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering" },
                  { name: "Rear seat slide strap", value: "(luggage floor)" },
                  { name: "Luggage room lamp", value: "Included" },
                  { name: "Front centre armrest", value: "Included" },
                  { name: "Afterglow 3-position room lamp", value: "(front, center) [LED]" },
                  { name: "Shift gate garnish", value: "[piano black]" },
                  { name: "Instrument panel upper garnish", value: "Included" },
                  { name: "Instrument panel air conditioner louver garnish", value: "Included" },
                  { name: "Big open tray garnish", value: "Included" },
                  { name: "Front door trim garnish", value: "[Semi-matt Bordeaux x piano black]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front bumper", value: "[aero shape]" },
                  { name: "Rear bumper", value: "[aero shape]" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Large chrome & black front grille", value: "Included" },
                  { name: "Large chrome front bumper garnish", value: "Included" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Chrome back door garnish", value: "Included" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Wheels", value: "14-inch aluminum wheels" },
                  { name: "Radial tires", value: "[155/65R14]" },
                ],
              },
            ],
          },
          {
            id: "spacia-hybrid-x",
            name: "SPACIA HYBRID X",
            imageUrl: "/SPACIA HYBRID X.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / Full-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,785 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,170/1,345/1,415 mm" },
                  { name: "Vehicle weight", value: "880 kg (2WD) / 930 kg (4WD)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "1.9〈2.6PS〉/1,500" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "40〈4.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Digital Speedometer", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering" },
                  { name: "Rear seat slide strap", value: "(luggage floor)" },
                  {
                    name: "Multi-information display",
                    value: "[color] Energy flow indicator/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/motion display/clock/outside temperature gauge/shift indicator/odometer/trip meter/tachometer/voice guidance function, etc.",
                  },
                  { name: "Luggage room lamp", value: "Included" },
                  { name: "Rear seat centre armrest", value: "Included" },
                  { name: "Front centre armrest", value: "Included" },
                  { name: "Afterglow 3-position room lamp", value: "(front, center)" },
                  { name: "Instrument panel upper garnish", value: "Included" },
                  { name: "Instrument panel air conditioner louver garnish", value: "Included" },
                  { name: "Front door trim garnish", value: "[Brown x Cafe Latte]" },
                  { name: "Big open tray garnish", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Plated front grille", value: "Included" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                  { name: "Radial tires", value: "[155/65R14]" },
                ],
              },
            ],
          },
          {
            id: "spacia-hybrid-g",
            name: "SPACIA HYBRID G",
            imageUrl: "/SPACIA HYBRID G.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.657/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / Full-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,785 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,170/1,345/1,415 mm" },
                  { name: "Vehicle weight", value: "850 kg (2WD) / 910 kg (4WD)" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "36〈49PS〉/6,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "58〈5.9kg・m〉/5,000" },
                  { name: "Motor Maximum power (kW/rpm)", value: "1.9〈2.6PS〉/1,500" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "40〈4.1kg･m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Digital Speedometer", value: "Included" },
                  { name: "Seat covering", value: "Fabric seat covering" },
                  { name: "Afterglow 3-position room lamp", value: "(front, center)" },
                  {
                    name: "Multi-information display",
                    value: "[color] Energy flow indicator/idling stop time/eco score/instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/motion display/clock/outside temperature gauge/shift indicator/odometer/trip meter/tachometer/voice guidance function, etc.",
                  },
                  { name: "Instrument panel upper garnish", value: "Included" },
                  { name: "Instrument panel air conditioner louver garnish", value: "Included" },
                  { name: "Front door trim garnish", value: "Included" },
                  { name: "Big open tray garnish", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Plated front grille", value: "Included" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                  { name: "Radial tires", value: "[155/65R14]" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "swift",
        name: "Swift",
        grades: [
          {
            id: "swift-hybrid-mz",
            name: "HYBRID MZ",
            imageUrl: "/HYBRID MZ.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.197/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "24.5 km/L" },
                  { name: "Minimum ground clearance", value: "120 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,860 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,500 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,905/1,425/1,225 mm" },
                  { name: "Vehicle weight", value: "950 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "60〈82PS〉/5,700" },
                  { name: "Maximum torque (N・m/rpm) net", value: "108〈11kgf・m〉/4,500" },
                  { name: "Motor Maximum power (kW/rpm)", value: "2.3〈3.1PS〉/1,100" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "60〈6.1kgf・m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Leather-wrapped steering wheel [silver stitching]" },
                  { name: "Steering garnish", value: "[silver]" },
                  { name: "Paddle Shift", value: "Included" },
                  { name: "Meter", value: "Self-luminous meter [always illuminated] [voice guidance]" },
                  {
                    name: "Multi-information display",
                    value: "[color] Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/digital vehicle speed display/motion display/clock/outside temperature gauge/odometer/trip meter, etc. + [With energy flow indicator]",
                  },
                  { name: "Door garnish", value: "[satin dark silver]" },
                  { name: "Instrument panel ornament", value: "[satin dark silver]" },
                  { name: "Console ornament", value: "[Satin dark silver]" },
                  { name: "Seat covering", value: "Fabric seat covering [Melange gray & black] + [Silver stitching]" },
                  { name: "Driver's seat centre armrest", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front grille", value: "[piano black] + [With plating decoration]" },
                  { name: "Lower Grill", value: "[Gunmetallic decoration]" },
                  { name: "Rear bumper", value: "[Body color & Black]" },
                  { name: "Rear quarter garnish", value: "[black]" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Back door side spoiler", value: "Included" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "2-tone roof", value: "Included" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                  { name: "Radial tires", value: "[185/55R16]" },
                ],
              },
            ],
          },
          {
            id: "swift-hybrid-mx",
            name: "HYBRID MX",
            imageUrl: "/HYBRID MX.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.197/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "24.5 km/L" },
                  { name: "Minimum ground clearance", value: "120 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,860 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,500 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,905/1,425/1,225 mm" },
                  { name: "Vehicle weight", value: "940 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "60〈82PS〉/5,700" },
                  { name: "Maximum torque (N・m/rpm) net", value: "108〈11kgf・m〉/4,500" },
                  { name: "Motor Maximum power (kW/rpm)", value: "2.3〈3.1PS〉/1,100" },
                  { name: "Motor Maximum torque (Nm/rpm)", value: "60〈6.1kgf・m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Meter", value: "Self-luminous meter [always illuminated] [voice guidance]" },
                  {
                    name: "Multi-information display",
                    value: "[color] Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/digital vehicle speed display/motion display/clock/outside temperature gauge/odometer/trip meter, etc. + [With energy flow indicator]",
                  },
                  { name: "Door garnish", value: "[satin dark silver]" },
                  { name: "Instrument panel ornament", value: "[satin dark silver]" },
                  { name: "Console ornament", value: "[Satin dark silver]" },
                  { name: "Seat covering", value: "Fabric seat covering [Melange gray & black] + [Silver stitching]" },
                  { name: "Driver's seat centre armrest", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front grille", value: "[piano black] + [With plating decoration]" },
                  { name: "Lower Grill", value: "[Gunmetallic decoration]" },
                  { name: "Rear bumper", value: "[Body color & Black]" },
                  { name: "Rear quarter garnish", value: "[black]" },
                  { name: "Side under spoiler", value: "Included" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Back door side spoiler", value: "Included" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "2-tone roof", value: "Included" },
                  { name: "Mild hybrid emblem", value: "Left and right front fenders, back door" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                  { name: "Radial tires", value: "[185/55R16]" },
                ],
              },
            ],
          },
          {
            id: "swift-gasoline-xg",
            name: "GASOLINE XG",
            imageUrl: "/GASOLINE XG.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.197/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive)" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "23.4 km/L" },
                  { name: "Minimum ground clearance", value: "120 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,860 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,500 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,905/1,425/1,225 mm" },
                  { name: "Vehicle weight", value: "910 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "60〈82PS〉/5,700" },
                  { name: "Maximum torque (N・m/rpm) net", value: "108〈11kgf・m〉/4,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "Urethane steering wheel" },
                  { name: "Meter", value: "Self-luminous meter [always illuminated] [voice guidance]" },
                  {
                    name: "Multi-information display",
                    value: "[color] Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/digital vehicle speed display/motion display/clock/outside temperature gauge/odometer/trip meter, etc.",
                  },
                  { name: "Seat covering", value: "Fabric seat covering [black]" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Front grille", value: "[piano black]" },
                  { name: "Lower Grill", value: "Included" },
                  { name: "Rear bumper", value: "[Body color]" },
                  { name: "Rear quarter garnish", value: "[black]" },
                  { name: "2-tone roof", value: "Included" },
                  { name: "Wheels", value: "15 inch full wheel cap" },
                  { name: "Radial tires", value: "[175/65R15]" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "jimmy",
        name: "Jimmy",
        grades: [
          {
            id: "jimmy-xc-4wd-5mt",
            name: "XC 4WD/5MT",
            imageUrl: "/XC  4WD 4AT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "5MT" },
                  { name: "Drive Type", value: "Part-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "16.6 km/L" },
                  { name: "Fuel tank capacity", value: "40 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "205 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,725 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,795/1,300/1,200 mm" },
                  { name: "Vehicle weight", value: "1,040 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "96〈9.8kg・m〉/3,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Driver's vanity mirror", value: "[with ticket holder]" },
                  { name: "Passenger vanity mirror", value: "[with ticket holder]" },
                  { name: "Passenger seat entry/exit grip", value: "Included" },
                  { name: "Bronze metallic air conditioner side louver ring", value: "Included" },
                  { name: "Satin-plated air conditioner center louver", value: "Included" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  { name: "Plated parking brake button", value: "Included" },
                  { name: "Chrome-plated shift knob decoration", value: "Included" },
                  { name: "Stain-resistant luggage floor", value: "(rear seat back, luggage box)" },
                  { name: "Afterglow 3-position room lamp", value: "(rear)" },
                  {
                    name: "Multi-information display",
                    value: "Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/travel time/shift indicator (4AT vehicles)/outside temperature gauge/clock/odometer/trip meter, etc.",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Colored door mirrors", value: "[painted black]" },
                  { name: "Black two-tone roof", value: "Included" },
                  { name: "Black Top 2 Tone", value: "Included" },
                  { name: "UV-cut glass", value: "(Full page)" },
                  { name: "Heat absorbing green glass", value: "(Front desk, front door)" },
                  { name: "Smoked glass", value: "(rear quarter, back door)" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                ],
              },
            ],
          },
          {
            id: "jimmy-xc-4wd-4at",
            name: "XC 4WD/4AT",
            imageUrl: "/XC  4WD 4AT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "4AT" },
                  { name: "Drive Type", value: "Part-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "14.3 km/L" },
                  { name: "Fuel tank capacity", value: "40 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "205 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,785 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,795/1,300/1,200 mm" },
                  { name: "Vehicle weight", value: "1,050 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "96〈9.8kg・m〉/3,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Driver's vanity mirror", value: "[with ticket holder]" },
                  { name: "Passenger vanity mirror", value: "[with ticket holder]" },
                  { name: "Passenger seat entry/exit grip", value: "Included" },
                  { name: "Bronze metallic air conditioner side louver ring", value: "Included" },
                  { name: "Satin-plated air conditioner center louver", value: "Included" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  { name: "Plated parking brake button", value: "Included" },
                  { name: "Satin-plated shift knob decoration", value: "Included" },
                  { name: "Stain-resistant luggage floor", value: "(rear seat back, luggage box)" },
                  { name: "Afterglow 3-position room lamp", value: "(rear)" },
                  {
                    name: "Multi-information display",
                    value: "Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/travel time/shift indicator (4AT vehicles)/outside temperature gauge/clock/odometer/trip meter, etc.",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Colored door mirrors", value: "[painted black]" },
                  { name: "Black two-tone roof", value: "Included" },
                  { name: "Black Top 2 Tone", value: "Included" },
                  { name: "UV-cut glass", value: "(Full page)" },
                  { name: "Heat absorbing green glass", value: "(Front desk, front door)" },
                  { name: "Smoked glass", value: "(rear quarter, back door)" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                ],
              },
            ],
          },
          {
            id: "jimmy-xl-4wd-5mt",
            name: "XL 4WD/5MT",
            imageUrl: "/XL  4WD 5MT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "5MT" },
                  { name: "Drive Type", value: "Part-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "16.6 km/L" },
                  { name: "Fuel tank capacity", value: "40 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "205 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,725 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,795/1,300/1,200 mm" },
                  { name: "Vehicle weight", value: "1,040 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "96〈9.8kg・m〉/3,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Driver's vanity mirror", value: "[with ticket holder]" },
                  { name: "Passenger seat entry/exit grip", value: "Included" },
                  { name: "Chrome-plated shift knob decoration", value: "Included" },
                  { name: "Stain-resistant luggage floor", value: "(rear seat back, luggage box)" },
                  { name: "Afterglow 3-position room lamp", value: "(rear)" },
                  {
                    name: "Multi-information display",
                    value: "Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/travel time/shift indicator (4AT vehicles)/outside temperature gauge/clock/odometer/trip meter, etc.",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Colored door handles", value: "Included" },
                  { name: "Colored door mirrors", value: "[painted black]" },
                  { name: "UV-cut glass", value: "(Full page)" },
                  { name: "Heat absorbing green glass", value: "(Front desk, front door)" },
                  { name: "Smoked glass", value: "(rear quarter, back door)" },
                  { name: "Wheels", value: "16 inch steel wheels" },
                ],
              },
            ],
          },
          {
            id: "jimmy-xl-4wd-4at",
            name: "XL 4WD/4AT",
            imageUrl: "/XL  4WD 4AT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "4AT" },
                  { name: "Drive Type", value: "Part-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "14.3 km/L" },
                  { name: "Fuel tank capacity", value: "40 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "205 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,725 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,795/1,300/1,200 mm" },
                  { name: "Vehicle weight", value: "1,050 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "96〈9.8kg・m〉/3,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Driver's vanity mirror", value: "[with ticket holder]" },
                  { name: "Passenger seat entry/exit grip", value: "Included" },
                  { name: "Satin-plated shift knob decoration", value: "Included" },
                  { name: "Stain-resistant luggage floor", value: "(rear seat back, luggage box)" },
                  { name: "Afterglow 3-position room lamp", value: "(rear)" },
                  {
                    name: "Multi-information display",
                    value: "Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/travel time/shift indicator (4AT vehicles)/outside temperature gauge/clock/odometer/trip meter, etc.",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Colored door handles", value: "Included" },
                  { name: "Colored door mirrors", value: "[painted black]" },
                  { name: "UV-cut glass", value: "(Full page)" },
                  { name: "Heat absorbing green glass", value: "(Front desk, front door)" },
                  { name: "Smoked glass", value: "(rear quarter, back door)" },
                  { name: "Wheels", value: "16 inch steel wheels" },
                ],
              },
            ],
          },
          {
            id: "jimmy-xg-4wd-5mt",
            name: "XG 4WD/5MT",
            imageUrl: "/XG  4WD 5MT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "5MT" },
                  { name: "Drive Type", value: "Part-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "16.6 km/L" },
                  { name: "Fuel tank capacity", value: "40 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "205 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,725 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,795/1,300/1,200 mm" },
                  { name: "Vehicle weight", value: "1,040 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "96〈9.8kg・m〉/3,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Passenger seat entry/exit grip", value: "Included" },
                  {
                    name: "Multi-information display",
                    value: "Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/travel time/shift indicator (4AT vehicles)/outside temperature gauge/clock/odometer/trip meter, etc.",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "UV-cut glass", value: "(Full page)" },
                  { name: "Heat absorbing green glass", value: "(Front desk, front door)" },
                  { name: "Wheels", value: "16 inch steel wheels" },
                ],
              },
            ],
          },
          {
            id: "jimmy-xg-4wd-4at",
            name: "XG 4WD/4AT",
            imageUrl: "/XG  4WD 4AT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "4AT" },
                  { name: "Drive Type", value: "Part-time 4WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "14.3 km/L" },
                  { name: "Fuel tank capacity", value: "40 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "205 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,725 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,795/1,300/1,200 mm" },
                  { name: "Vehicle weight", value: "1,050 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "47〈64PS〉/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "96〈9.8kg・m〉/3,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Passenger seat entry/exit grip", value: "Included" },
                  {
                    name: "Multi-information display",
                    value: "Instantaneous fuel consumption/average fuel consumption/cruising distance/average vehicle speed/travel time/shift indicator (4AT vehicles)/outside temperature gauge/clock/odometer/trip meter, etc.",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "UV-cut glass", value: "(Full page)" },
                  { name: "Heat absorbing green glass", value: "(Front desk, front door)" },
                  { name: "Wheels", value: "16 inch steel wheels" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "xbee",
        name: "XBEE",
        grades: [
          {
            id: "xbee-hybrid-mz",
            name: "HYBRID MZ",
            imageUrl: "/SUZUKI XBEE HYBRID MZ.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.996/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder direct injection turbo" },
                  { name: "Transmission Type", value: "6AT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / 4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "18.2 km/L" },
                  { name: "Fuel tank capacity", value: "32 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,760 mm" },
                  { name: "Overall width", value: "1,670 mm" },
                  { name: "Overall height", value: "1,705 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,175/1,355/1,280 mm" },
                  { name: "Vehicle weight", value: "960 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "73〈99PS〉/5,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "150〈15.3kg・m〉/1,700-4,000" },
                  { name: "Motor Maximum power output (kW/rpm) net", value: "2.3〈3.1PS〉/1,000" },
                  { name: "Motor Maximum torque (N・m/rpm) net", value: "50〈5.1kg・m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/Idling stop fuel saving/Idling stop time/Eco score/Instantaneous fuel consumption/Average fuel consumption/Driving range/Average vehicle speed/Shift indicator/Outside temperature gauge/Clock/Odometer/Trip meter/Driving mode display (4WD vehicles), etc.",
                  },
                  { name: "Leather-wrapped steering wheel", value: "[silver stitching]" },
                  { name: "Leather-wrapped shift knob", value: "[silver stitching]" },
                  { name: "Instrument panel color panel", value: "[ivory]" },
                  { name: "Silver air conditioner side louver ring", value: "[with plated garnish]" },
                  { name: "Silver air conditioning center louver", value: "Included" },
                  { name: "Silver air conditioner garnish", value: "Included" },
                  { name: "Gear shift panel", value: "[silver painted]" },
                  { name: "Instrument panel side cap", value: "[silver painted]" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  { name: "Door trim color panel", value: "[ivory]" },
                  { name: "Door trim cloth", value: "(front door)" },
                  { name: "Personal tables", value: "[2 drink holders, 3 shopping hooks, foldable] (rear seats left and right)" },
                  { name: "Fabric seat covering", value: "[Water-repellent finish (seat surface)]" },
                  { name: "Seat piping", value: "(front seats)" },
                  { name: "Seat color accent", value: "Included" },
                  { name: "Stain-resistant luggage floor", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Plated front grille", value: "Included" },
                  { name: "Front and rear bumper garnish", value: "[silver painted / white painted for vehicles with white two-tone roof]" },
                  { name: "Front bumper under garnish", value: "[silver finish]" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Fender arch molding & side splash guard", value: "Included" },
                  { name: "Door splash guard", value: "[with color panel]" },
                  { name: "Plated door handle", value: "Included" },
                  { name: "Door mirror", value: "With LED side turn lamp" },
                  { name: "2-tone roof", value: "Included" },
                  { name: "3-tone coordination", value: "Included" },
                  { name: "A/B pillar blackout", value: "Included" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                  { name: "Coloured door mirrors", value: "(same colour as roof)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "2-tone roof specification car/3-tone coordinated specification car", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "xbee-hybrid-mv",
            name: "HYBRID MV",
            imageUrl: "/SUZUKI XBEE HYBRID MV.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.996/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder direct injection turbo" },
                  { name: "Transmission Type", value: "6AT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / 4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "18.2 km/L" },
                  { name: "Fuel tank capacity", value: "32 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,760 mm" },
                  { name: "Overall width", value: "1,670 mm" },
                  { name: "Overall height", value: "1,705 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,175/1,355/1,280 mm" },
                  { name: "Vehicle weight", value: "960 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "73〈99PS〉/5,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "150〈15.3kg・m〉/1,700-4,000" },
                  { name: "Motor Maximum power output (kW/rpm) net", value: "2.3〈3.1PS〉/1,000" },
                  { name: "Motor Maximum torque (N・m/rpm) net", value: "50〈5.1kg・m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/Idling stop fuel saving/Idling stop time/Eco score/Instantaneous fuel consumption/Average fuel consumption/Driving range/Average vehicle speed/Shift indicator/Outside temperature gauge/Clock/Odometer/Trip meter/Driving mode display (4WD vehicles), etc.",
                  },
                  { name: "Urethane steering wheel", value: "Included" },
                  { name: "Urethane shift knob", value: "Included" },
                  { name: "Instrument panel color panel", value: "[ivory]" },
                  { name: "Silver air conditioner side louver ring", value: "[with plated garnish]" },
                  { name: "Silver air conditioning center louver", value: "Included" },
                  { name: "Silver air conditioner garnish", value: "Included" },
                  { name: "Chrome-plated inside door handle", value: "Included" },
                  { name: "Door trim color panel", value: "[ivory]" },
                  { name: "Door trim cloth", value: "(front door)" },
                  { name: "Personal tables", value: "[2 drink holders, 3 shopping hooks, foldable] (rear seats left and right)" },
                  { name: "Fabric seat covering", value: "[Water-repellent finish (seat surface)]" },
                  { name: "Seat piping", value: "(front seats)" },
                  { name: "Seat color accent", value: "Included" },
                  { name: "Stain-resistant luggage floor", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Plated front grille", value: "Included" },
                  { name: "Front and rear bumper garnish", value: "[silver painted / white painted for vehicles with white two-tone roof]" },
                  { name: "Front bumper under garnish", value: "[silver finish]" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Fender arch molding & side splash guard", value: "Included" },
                  { name: "Door splash guard", value: "[with color panel]" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "2-tone roof", value: "Included" },
                  { name: "3-tone coordination", value: "Included" },
                  { name: "A/B pillar blackout", value: "Included" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                  { name: "Coloured door mirrors", value: "(same colour as roof)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "2-tone roof specification car/3-tone coordinated specification car", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "xbee-hybrid-mx",
            name: "HYBRID MX",
            imageUrl: "/SUZUKI XBEE HYBRID MX.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.996/Hybrid" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder direct injection turbo" },
                  { name: "Transmission Type", value: "6AT" },
                  { name: "Drive Type", value: "2WD (front two-wheel drive) / 4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "18.2 km/L" },
                  { name: "Fuel tank capacity", value: "32 L / GASOLINE" },
                  { name: "Minimum ground clearance", value: "180 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,760 mm" },
                  { name: "Overall width", value: "1,670 mm" },
                  { name: "Overall height", value: "1,705 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,175/1,355/1,280 mm" },
                  { name: "Vehicle weight", value: "960 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "73〈99PS〉/5,500" },
                  { name: "Maximum torque (N・m/rpm) net", value: "150〈15.3kg・m〉/1,700-4,000" },
                  { name: "Motor Maximum power output (kW/rpm) net", value: "2.3〈3.1PS〉/1,000" },
                  { name: "Motor Maximum torque (N・m/rpm) net", value: "50〈5.1kg・m〉/100" },
                ],
              },
              {
                category: "Interior",
                items: [
                  {
                    name: "Multi-information display",
                    value: "Energy flow indicator/Idling stop fuel saving/Idling stop time/Eco score/Instantaneous fuel consumption/Average fuel consumption/Driving range/Average vehicle speed/Shift indicator/Outside temperature gauge/Clock/Odometer/Trip meter/Driving mode display (4WD vehicles), etc.",
                  },
                  { name: "Urethane steering wheel", value: "Included" },
                  { name: "Urethane shift knob", value: "Included" },
                  { name: "Instrument panel color panel", value: "[ivory]" },
                  { name: "Silver air conditioner side louver ring", value: "[with plated garnish]" },
                  { name: "Silver air conditioning center louver", value: "Included" },
                  { name: "Silver air conditioner garnish", value: "Included" },
                  { name: "Door trim color panel", value: "[ivory]" },
                  { name: "Fabric seat covering", value: "Included" },
                  { name: "Seat color accent", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Plated front grille", value: "Included" },
                  { name: "Front and rear bumper garnish", value: "[silver painted / white painted for vehicles with white two-tone roof]" },
                  { name: "Front bumper under garnish", value: "[silver finish]" },
                  { name: "Roof end spoiler", value: "Included" },
                  { name: "Fender arch molding & side splash guard", value: "Included" },
                  { name: "Door splash guard", value: "[with color panel]" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "2-tone roof", value: "Included" },
                  { name: "3-tone coordination", value: "Included" },
                  { name: "A/B pillar blackout", value: "Included" },
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                  { name: "Coloured door mirrors", value: "(same colour as roof)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "2-tone roof specification car/3-tone coordinated specification car", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "every",
        name: "Every",
        grades: [
          {
            id: "every-join-turbo-high-roof-2wd-cvt",
            name: "JOIN Turbo (High Roof) 2WD/CVT",
            imageUrl: "/JOIN Turbo (High Roof) 2WD CVT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder intercooler turbo" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "2【4】" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                  { name: "Floor height above ground", value: "650 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,895 mm" },
                  { name: "Luggage compartment dimensions (length)", value: "1,820【930】 mm" },
                  { name: "Luggage compartment dimensions (width)", value: "1,280【1,385】 mm" },
                  { name: "Luggage compartment dimensions (height)", value: "1,240 mm" },
                  { name: "Wheelbase", value: "2,430 mm" },
                  { name: "Tread (front)", value: "1,310 mm" },
                  { name: "Tread (rear)", value: "1,290 mm" },
                  { name: "Vehicle weight", value: "940『950』 kg" },
                  { name: "Maximum load capacity", value: "350【250】 kg" },
                  { name: "Total vehicle weight", value: "1,400【1,410】『1,410【1,420】』 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "47＜64PS＞/6,000" },
                  { name: "Maximum torque (N・m/rpm) net", value: "95＜9.7kgf・m＞/3,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Self-luminous meter", value: "[always illuminated]" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Shift indicator", value: "Included" },
                  { name: "Eco Drive Indicator", value: "Included" },
                  { name: "Afterglow 3-position LED room lamp", value: "Included" },
                  { name: "Afterglow 3-position LED luggage compartment lamp", value: "Included" },
                  { name: "Assist grip", value: "(Passenger seat, both rear seats)" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Floor carpet", value: "Included" },
                  { name: "Fabric seat covering", value: "Included" },
                  { name: "Rear centre armrest", value: "Included" },
                  { name: "Split folding rear seats", value: "Included" },
                  { name: "Fully flat seat", value: "Included" },
                  { name: "Front seat headrest", value: "Included" },
                  { name: "Rear seat head restraint", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Chrome front hood garnish", value: "Included" },
                  { name: "Coloured door mirrors", value: "Included" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Full wheel cap", value: "Included" },
                  { name: "LED headlamps", value: "[high/low beam, with manual leveling mechanism]" },
                  { name: "Door mirror", value: "With side under mirror (passenger seat)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Lightweight shock absorbing body TECT", value: "Included" },
                  { name: "Pedestrian injury mitigation body", value: "Included" },
                  { name: "Head impact reduction interior", value: "(front seats)" },
                  { name: "Neck impact mitigating front seats", value: "Included" },
                  { name: "Dual Camera Brake Support", value: "Included" },
                  { name: "False start prevention function", value: "Included" },
                  { name: "Lane Departure Warning Function", value: "Included" },
                  { name: "Wobble warning function", value: "Included" },
                  { name: "Preceding vehicle departure notification function", value: "Included" },
                  { name: "High Beam Assist", value: "Included" },
                  { name: "Reversing brake support", value: "Included" },
                  { name: "False backward start prevention function", value: "Included" },
                  { name: "Rear parking sensor", value: "Included" },
                  { name: "Emergency Stop Signal", value: "Included" },
                  { name: "Hill Hold Control", value: "Included" },
                  { name: "Mud Escape Assist", value: "Included" },
                  { name: "Idling Stop", value: "Included" },
                  { name: "Immobilizer", value: "(Ministry of Land, Infrastructure, Transport and Tourism approved)" },
                  { name: "Security alarm system", value: "Included" },
                  { name: "Speed-linked auto door lock", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "every-join-high-roof-2wd-cvt",
            name: "JOIN (High Roof) 2WD/CVT",
            imageUrl: "/JOIN (High Roof) 2WD CVT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "2【4】" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                  { name: "Floor height above ground", value: "650 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,895 mm" },
                  { name: "Luggage compartment dimensions (length)", value: "1,820【930】 mm" },
                  { name: "Luggage compartment dimensions (width)", value: "1,280【1,385】 mm" },
                  { name: "Luggage compartment dimensions (height)", value: "1,240 mm" },
                  { name: "Wheelbase", value: "2,430 mm" },
                  { name: "Tread (front)", value: "1,310 mm" },
                  { name: "Tread (rear)", value: "1,290 mm" },
                  { name: "Vehicle weight", value: "930 kg" },
                  { name: "Maximum load capacity", value: "350【250】 kg" },
                  { name: "Total vehicle weight", value: "1,390【1.400】 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36＜49PS＞/6,200" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60＜6.1kgf・m＞/4,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Self-luminous meter", value: "[always illuminated]" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Afterglow 3-position LED room lamp", value: "Included" },
                  { name: "Afterglow 3-position LED luggage compartment lamp", value: "Included" },
                  { name: "Assist grip", value: "(Passenger seat, both rear seats)" },
                  { name: "Door trim cloth", value: "Included" },
                  { name: "Floor carpet", value: "Included" },
                  { name: "Fabric seat covering", value: "Included" },
                  { name: "Rear centre armrest", value: "Included" },
                  { name: "Split folding rear seats", value: "Included" },
                  { name: "Fully flat seat", value: "Included" },
                  { name: "Front seat headrest", value: "Included" },
                  { name: "Rear seat head restraint", value: "Included" },
                  { name: "Shift indicator", value: "Included" },
                  { name: "Eco Drive Indicator", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Chrome front hood garnish", value: "Included" },
                  { name: "Coloured door mirrors", value: "Included" },
                  { name: "Colored door handles", value: "Included" },
                  { name: "Full wheel cap", value: "Included" },
                  { name: "LED headlamps", value: "[high/low beam, with manual leveling mechanism]" },
                  { name: "Door mirror", value: "With side under mirror (passenger seat)" },
                  { name: "Security alarm system", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Lightweight shock absorbing body TECT", value: "Included" },
                  { name: "Pedestrian injury mitigation body", value: "Included" },
                  { name: "Head impact reduction interior", value: "(front seats)" },
                  { name: "Neck impact mitigating front seats", value: "Included" },
                  { name: "Dual Camera Brake Support", value: "Included" },
                  { name: "False start prevention function", value: "Included" },
                  { name: "Lane Departure Warning Function", value: "Included" },
                  { name: "Wobble warning function", value: "Included" },
                  { name: "Preceding vehicle departure notification function", value: "Included" },
                  { name: "High Beam Assist", value: "Included" },
                  { name: "Reversing brake support", value: "Included" },
                  { name: "False backward start prevention function", value: "Included" },
                  { name: "Rear parking sensor", value: "Included" },
                  { name: "Emergency Stop Signal", value: "Included" },
                  { name: "Hill Hold Control", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "every-pc-high-roof-2wd-cvt",
            name: "PC (high roof) 2WD/CVT",
            imageUrl: "/PC (high roof) 2WD CVT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "2【4】" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                  { name: "Floor height above ground", value: "650 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,895 mm" },
                  { name: "Luggage compartment dimensions (length)", value: "1,820【975】 mm" },
                  { name: "Luggage compartment dimensions (width)", value: "1,280【1,385】 mm" },
                  { name: "Luggage compartment dimensions (height)", value: "1,240 mm" },
                  { name: "Wheelbase", value: "2,430 mm" },
                  { name: "Tread (front)", value: "1,310 mm" },
                  { name: "Tread (rear)", value: "1,290 mm" },
                  { name: "Vehicle weight", value: "910 kg" },
                  { name: "Maximum load capacity", value: "350【250】 kg" },
                  { name: "Total vehicle weight", value: "1,370【1.380】 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36＜49PS＞/6,200" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60＜6.1kgf・m＞/4,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Self-luminous meter", value: "[always illuminated]" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Afterglow 3-position LED room lamp", value: "Included" },
                  { name: "Afterglow 3-position LED luggage compartment lamp", value: "Included" },
                  { name: "Assist grip", value: "(Passenger seat)" },
                  { name: "Floor carpet", value: "[Vinyl leather]" },
                  { name: "Fabric seat covering", value: "Included" },
                  { name: "Front seat headrest", value: "Included" },
                  { name: "Shift indicator", value: "Included" },
                  { name: "Eco Drive Indicator", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Chrome front hood garnish", value: "Included" },
                  { name: "Coloured door mirrors", value: "Included" },
                  { name: "Full wheel cap", value: "Included" },
                  { name: "LED headlamps", value: "[high/low beam, with manual leveling mechanism]" },
                  { name: "Door mirror", value: "With side under mirror (passenger seat)" },
                  { name: "Security alarm system", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Lightweight shock absorbing body TECT", value: "Included" },
                  { name: "Pedestrian injury mitigation body", value: "Included" },
                  { name: "Head impact reduction interior", value: "(front seats)" },
                  { name: "Neck impact mitigating front seats", value: "Included" },
                  { name: "Dual Camera Brake Support", value: "Included" },
                  { name: "False start prevention function", value: "Included" },
                  { name: "Lane Departure Warning Function", value: "Included" },
                  { name: "Wobble warning function", value: "Included" },
                  { name: "Preceding vehicle departure notification function", value: "Included" },
                  { name: "High Beam Assist", value: "Included" },
                  { name: "Reversing brake support", value: "Included" },
                  { name: "False backward start prevention function", value: "Included" },
                  { name: "Rear parking sensor", value: "Included" },
                  { name: "Emergency Stop Signal", value: "Included" },
                  { name: "Hill Hold Control", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "every-pa-limited-high-roof-2wd-cvt",
            name: "PA Limited (high roof)2WD/CVT",
            imageUrl: "/PA Limited (high roof)2WD CVT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "2【4】" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                  { name: "Floor height above ground", value: "650 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,895 mm" },
                  { name: "Luggage compartment dimensions (length)", value: "1,910【975】 mm" },
                  { name: "Luggage compartment dimensions (width)", value: "1,320【1,385】 mm" },
                  { name: "Luggage compartment dimensions (height)", value: "1,240 mm" },
                  { name: "Wheelbase", value: "2,430 mm" },
                  { name: "Tread (front)", value: "1,310 mm" },
                  { name: "Tread (rear)", value: "1,290 mm" },
                  { name: "Vehicle weight", value: "910 kg" },
                  { name: "Maximum load capacity", value: "350【250】 kg" },
                  { name: "Total vehicle weight", value: "1,370【1.380】 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36＜49PS＞/6,200" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60＜6.1kgf・m＞/4,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Self-luminous meter", value: "[always illuminated]" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Shift indicator", value: "Included" },
                  { name: "Eco Drive Indicator", value: "Included" },
                  { name: "Afterglow 3-position LED room lamp", value: "Included" },
                  { name: "Afterglow 3-position LED luggage compartment lamp", value: "Included" },
                  { name: "Assist grip", value: "Included" },
                  { name: "Floor carpet", value: "Included" },
                  { name: "Fabric seat covering", value: "Included" },
                  { name: "Front seat headrest", value: "Included" },
                  { name: "Center Cap", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Multi-reflector halogen headlamp", value: "[with manual leveling mechanism]" },
                  { name: "Door mirror", value: "With side under mirror (passenger seat)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Lightweight shock absorbing body TECT", value: "Included" },
                  { name: "Pedestrian injury mitigation body", value: "Included" },
                  { name: "Head impact reduction interior", value: "(front seats)" },
                  { name: "Driver and passenger seat SRS airbags", value: "Included" },
                  { name: "Neck impact mitigating front seats", value: "Included" },
                  { name: "Dual Camera Brake Support", value: "Included" },
                  { name: "False start prevention function", value: "Included" },
                  { name: "Lane Departure Warning Function", value: "Included" },
                  { name: "Wobble warning function", value: "Included" },
                  { name: "Preceding vehicle departure notification function", value: "Included" },
                  { name: "High Beam Assist", value: "Included" },
                  { name: "Reversing brake support", value: "Included" },
                  { name: "False backward start prevention function", value: "Included" },
                  { name: "Rear parking sensor", value: "Included" },
                  { name: "Emergency Stop Signal", value: "Included" },
                  { name: "Hill Hold Control", value: "Included" },
                  { name: "Mud Escape Assist", value: "Included" },
                  { name: "Idling Stop", value: "Included" },
                  { name: "Security alarm system", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "every-pa-high-roof-2wd-4at",
            name: "PA (high roof)2WD/4AT",
            imageUrl: "/PA (high roof)2WD 4AT.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled 4-stroke inline 3-cylinder" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "2【4】" },
                  { name: "Minimum ground clearance", value: "150 mm" },
                  { name: "Floor height above ground", value: "650 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,895 mm" },
                  { name: "Luggage compartment dimensions (length)", value: "1,910【975】 mm" },
                  { name: "Luggage compartment dimensions (width)", value: "1,320【1,385】 mm" },
                  { name: "Luggage compartment dimensions (height)", value: "1,240 mm" },
                  { name: "Wheelbase", value: "2,430 mm" },
                  { name: "Tread (front)", value: "1,310 mm" },
                  { name: "Tread (rear)", value: "1,290 mm" },
                  { name: "Vehicle weight", value: "890 kg" },
                  { name: "Maximum load capacity", value: "350【250】 kg" },
                  { name: "Total vehicle weight", value: "1,350【1.360】 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36＜49PS＞/6,200" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60＜6.1kgf・m＞/4,000" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Self-luminous meter", value: "[always illuminated]" },
                  { name: "Tachometer", value: "Included" },
                  { name: "Shift indicator", value: "Included" },
                  { name: "Eco Drive Indicator", value: "Included" },
                  { name: "Afterglow 3-position LED room lamp", value: "Included" },
                  { name: "Afterglow 3-position LED luggage compartment lamp", value: "Included" },
                  { name: "Assist grip", value: "(Passenger seat)" },
                  { name: "Floor carpet", value: "[Vinyl leather]" },
                  { name: "Vinyl leather seat covering", value: "Included" },
                  { name: "Front seat headrest", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Multi-reflector halogen headlamp", value: "[with manual leveling mechanism]" },
                  { name: "Door mirror", value: "With side under mirror (passenger seat)" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "Lightweight shock absorbing body TECT", value: "Included" },
                  { name: "Pedestrian injury mitigation body", value: "Included" },
                  { name: "Head impact reduction interior", value: "(front seats)" },
                  { name: "Driver and passenger seat SRS airbags", value: "Included" },
                  { name: "Neck impact mitigating front seats", value: "Included" },
                  { name: "Dual Camera Brake Support", value: "Included" },
                  { name: "False start prevention function", value: "Included" },
                  { name: "Lane Departure Warning Function", value: "Included" },
                  { name: "Wobble warning function", value: "Included" },
                  { name: "Preceding vehicle departure notification function", value: "Included" },
                  { name: "High Beam Assist", value: "Included" },
                  { name: "Reversing brake support", value: "Included" },
                  { name: "False backward start prevention function", value: "Included" },
                  { name: "Rear parking sensor", value: "Included" },
                  { name: "Emergency Stop Signal", value: "Included" },
                  { name: "Hill Hold Control", value: "Included" },
                  { name: "Idling Stop", value: "Included" },
                  { name: "Security alarm system", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "mini-truck",
        name: "Mini Truck",
        grades: [
          {
            id: "mini-truck-kx",
            name: "KX",
            imageUrl: "/KX.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658 / GASOLINE" },
                  { name: "Engine type, number of cylinders and layout", value: "R06A type water-cooled in-line 3-cylinder" },
                  { name: "Transmission Type", value: "5MT/4AT" },
                  { name: "Drive Type", value: "2WD/4WD (rear two-wheel drive) / High/low speed two-stage switching 4WD" },
                  { name: "Passenger Capacity", value: "2" },
                  { name: "Fuel consumption rate", value: "18.7 km/L" },
                  { name: "Fuel tank capacity", value: "34 L" },
                  { name: "Maximum load capacity", value: "350 kg" },
                  { name: "Minimum ground clearance", value: "160 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,765 mm" },
                  { name: "Cargo bed dimensions (length/width/height)", value: "1,940/1,410/290 mm" },
                  { name: "Vehicle weight", value: "730 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Suspension method", value: "BEFORE - MacPherson strut coil spring, AFTER - Leaf spring" },
                  { name: "Main Brake Type", value: "DISK break - Front, REAR - Leading/Trailing (drum brakes)" },
                  { name: "Tire", value: "145/80R12 80/78N LT" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Air conditioner", value: "[with air filter]" },
                  { name: "Power steering", value: "Included" },
                  { name: "Power windows", value: "[lock mechanism/driver's seat auto/antipinch mechanism included]" },
                  { name: "Power door lock", value: "Included" },
                  { name: "Urethane steering wheel", value: "Included" },
                  { name: "LED meter panel lighting", value: "Included" },
                  { name: "3-position LED room lamp", value: "Included" },
                  { name: "Molded door trim", value: "[with armrest]" },
                  { name: "Fabric seat covering", value: "Included" },
                  { name: "Odometer/trip meter", value: "[LCD]" },
                  { name: "Engine oil change notification function", value: "Included" },
                  { name: "Fuel level warning light", value: "Included" },
                  { name: "Entry and exit grips", value: "(driver's seat, passenger seat)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Angle post", value: "[with guard bar]" },
                  { name: "Angle post hooks", value: "(4 locations)" },
                  { name: "Cargo step", value: "(driver's side)" },
                  { name: "Cargo step", value: "(passenger side)" },
                  { name: "LED Bed Work Light", value: "Included" },
                  { name: "Rear gate chain", value: "Included" },
                  { name: "Cargo Rope Hook", value: "[19 locations]" },
                  { name: "Hooks for flat bed sheet", value: "[2 places]" },
                  { name: "Rear gate with hook", value: "Included" },
                  { name: "Plated front garnish", value: "Included" },
                  { name: "Chrome-plated fog lamp bezel", value: "Included" },
                  { name: "Coloured door mirrors", value: "Included" },
                  { name: "Plated door handle", value: "Included" },
                  { name: "Colored bumper", value: "Included" },
                  { name: "Mudflaps", value: "(front, rear)" },
                  { name: "Tires", value: "12 inch radial tires" },
                  { name: "Pillar Antenna", value: "(145/80R12 80/78N LT)" },
                  { name: "LED headlamp", value: "[with manual leveling mechanism]" },
                  { name: "Front multi-reflector halogen fog lamps", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "mini-truck-kc",
            name: "KC",
            imageUrl: "/KC air conditioning, power steering.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658 / GASOLINE" },
                  { name: "Engine type, number of cylinders and layout", value: "R06A type water-cooled in-line 3-cylinder" },
                  { name: "Transmission Type", value: "5MT/4AT" },
                  { name: "Drive Type", value: "2WD/4WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "2" },
                  { name: "Fuel consumption rate", value: "18.7 km/L" },
                  { name: "Fuel tank capacity", value: "34 L" },
                  { name: "Maximum load capacity", value: "350 kg" },
                  { name: "Minimum ground clearance", value: "160 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,765 mm" },
                  { name: "Cargo bed dimensions (length/width/height)", value: "1,940/1,410/290 mm" },
                  { name: "Vehicle weight", value: "730 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Suspension method", value: "BEFORE - MacPherson strut coil spring, AFTER - Leaf spring" },
                  { name: "Main Brake Type", value: "DISK - BEFORE, REAR - Leading/Trailing" },
                  { name: "Tire", value: "145/80R12 80/78N LT" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Air conditioner", value: "[with air filter]" },
                  { name: "Power steering", value: "Included" },
                  { name: "Power windows", value: "[lock mechanism/driver's seat auto/antipinch mechanism included]" },
                  { name: "Power door lock", value: "Included" },
                  { name: "Urethane steering wheel", value: "Included" },
                  { name: "LED meter panel lighting", value: "Included" },
                  { name: "3-position LED room lamp", value: "Included" },
                  { name: "Molded door trim", value: "[with armrest]" },
                  { name: "Vinyl leather seat covering", value: "Included" },
                  { name: "Odometer/trip meter", value: "[LCD]" },
                  { name: "Engine oil change notification function", value: "Included" },
                  { name: "Fuel level warning light", value: "Included" },
                  { name: "Entry and exit grips", value: "(driver's seat, passenger seat)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Angle post", value: "[with guard bar]" },
                  { name: "Angle post hooks", value: "(4 locations)" },
                  { name: "Cargo step", value: "(driver's side)" },
                  { name: "Cargo step", value: "(passenger side)" },
                  { name: "Cargo Rope Hook", value: "[19 locations]" },
                  { name: "Hooks for flat bed sheet", value: "[2 places]" },
                  { name: "Rear gate with hook", value: "Included" },
                  { name: "Plated front garnish", value: "Included" },
                  { name: "Colored bumper", value: "Included" },
                  { name: "Mudflaps", value: "(front, rear)" },
                  { name: "Tires", value: "12 inch radial tires" },
                  { name: "Pillar Antenna", value: "(145/80R12 80/78N LT)" },
                  { name: "Multi-reflector halogen headlamp", value: "[with manual leveling mechanism]" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "KC Air Conditioning Power Steering", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "mini-truck-kc-farm",
            name: "KC Farm",
            imageUrl: "/KC Air Conditioning Power Steering Farm.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "0.658 / GASOLINE" },
                  { name: "Engine type, number of cylinders and layout", value: "R06A type water-cooled in-line 3-cylinder" },
                  { name: "Transmission Type", value: "5MT/4AT" },
                  { name: "Drive Type", value: "High/low two-speed part-time 4WD" },
                  { name: "Passenger Capacity", value: "2" },
                  { name: "Fuel consumption rate", value: "18.7 km/L" },
                  { name: "Fuel tank capacity", value: "34 L" },
                  { name: "Maximum load capacity", value: "350 kg" },
                  { name: "Minimum ground clearance", value: "160 mm" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,765 mm" },
                  { name: "Cargo bed dimensions (length/width/height)", value: "1,940/1,410/290 mm" },
                  { name: "Vehicle weight", value: "730 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Suspension method", value: "BEFORE - MacPherson strut coil spring, AFTER - Leaf spring" },
                  { name: "Main Brake Type", value: "DISK - BEFORE, REAR - Leading/Trailing" },
                  { name: "Tire", value: "145/80R12 80/78N LT" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Air conditioner", value: "[with air filter]" },
                  { name: "Power steering", value: "Included" },
                  { name: "Power windows", value: "[lock mechanism/driver's seat auto/antipinch mechanism included]" },
                  { name: "Power door lock", value: "Included" },
                  { name: "Urethane steering wheel", value: "Included" },
                  { name: "LED meter panel lighting", value: "Included" },
                  { name: "3-position LED room lamp", value: "Included" },
                  { name: "Molded door trim", value: "[with armrest]" },
                  { name: "Vinyl leather seat covering", value: "Included" },
                  { name: "Odometer/trip meter", value: "[LCD]" },
                  { name: "Engine oil change notification function", value: "Included" },
                  { name: "Fuel level warning light", value: "Included" },
                  { name: "Entry and exit grips", value: "(driver's seat, passenger seat)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Angle post", value: "[with guard bar]" },
                  { name: "Angle Post Protector", value: "Included" },
                  { name: "Angle post hooks", value: "(4 locations)" },
                  { name: "Cargo step", value: "(driver's side)" },
                  { name: "Cargo step", value: "(passenger side)" },
                  { name: "LED Bed Work Light", value: "Included" },
                  { name: "Upper Member Guard", value: "Included" },
                  { name: "Rear gate chain", value: "Included" },
                  { name: "Cargo Rope Hook", value: "[19 locations]" },
                  { name: "Hooks for flat bed sheet", value: "[2 places]" },
                  { name: "Rear gate with hook", value: "Included" },
                  { name: "Plated front garnish", value: "Included" },
                  { name: "Colored bumper", value: "Included" },
                  { name: "Mudflaps", value: "(front, rear)" },
                  { name: "Tires", value: "12 inch radial tires" },
                  { name: "Pillar Antenna", value: "(145/80R12 80/78N LT)" },
                  { name: "Multi-reflector halogen headlamp", value: "[with manual leveling mechanism]" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "KC Air Conditioning Power Steering Farm", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fronx",
        name: "Fronx",
        grades: [
          {
            id: "fronx-alpha",
            name: "Alpha",
            imageUrl: "/fronx.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0 L Boosterjet Turbo Petrol (K10C)" },
                  { name: "Transmission Type", value: "6-speed Automatic (AT)" },
                  { name: "Engine type, number of cylinders and layout", value: "3 inline, 4-valve per cylinder" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel Consumption", value: "20km/l" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Length", value: "3995 mm" },
                  { name: "Width", value: "1765 mm" },
                  { name: "Height", value: "1550 mm" },
                  { name: "Wheelbase", value: "2520 mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Max Power", value: "~100 PS @ 5500 rpm (~99 bhp)" },
                  { name: "Max Torque", value: "~147.6 Nm @ 2000-4500 rpm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Automatic Climate Control", value: "Included" },
                  { name: "Rear AC Vents", value: "Included" },
                  { name: "Keyless entry & Smart Key", value: "Included" },
                  { name: "Push-button Start/Stop", value: "Included" },
                  { name: "Adjustable seats with headrests", value: "Included" },
                  { name: "Multifunction steering wheel", value: "Included" },
                  { name: "Power windows with driver auto up/down", value: "Included" },
                  { name: "Rear foldable seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Headlamps & DRLs", value: "Included (market dependent)" },
                  { name: "16\" Alloy Wheels", value: "Included" },
                  { name: "Body-coloured ORVMs with turn-indicators", value: "Included" },
                  { name: "Rear wiper & demister", value: "Included" },
                ],
              },
              {
                category: "Key Features",
                items: [
                  { name: "6 Airbags", value: "Included", highlighted: true },
                  { name: "ABS with EBD", value: "Included", highlighted: true },
                  { name: "ESC / Hill Hold", value: "Included (may vary by region)", highlighted: true },
                  { name: "Pedestrian protection", value: "Included" },
                  { name: "Rear parking sensors / camera", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "daihatsu",
    name: "Daihatsu",
    models: [
      {
        id: "taft",
        name: "Taft",
        grades: [
          {
            id: "taft-g-turbo-dark-chrome-venture",
            name: "G - TURBO DARK CHROME VENTURE",
            imageUrl: "/DIAHATSU  G - TURBO DARK CHROME VENTURE.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder, 12 valve DOHC, intercooler turbo horizontal" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.3 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "840 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "47[64] / 6,400" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "100[10.2]/3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Dark silver decoration", value: "(air conditioner register panel)" },
                  { name: "Dark silver decoration", value: "(instrument panel center shift bezel)" },
                  { name: "Dark silver trim", value: "(meter panel)" },
                  { name: "Front separate seats", value: "(silver stitching)" },
                  { name: "Genuine leather steering wheel", value: "(with plated ornament and silver trim)" },
                  { name: "Steering switch", value: "(for driving assistance / for switching D assist / for audio operation / for hands-free calling)" },
                  {
                    name: "TFT color multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning, maintenance information, clock mode, etc.)/tachometer",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Hood garnish", value: "(dark black plating) & gunmetal under garnish (front)" },
                  { name: "Back door garnish", value: "(dark black plating) & gunmetal under garnish (rear)" },
                  { name: "Door outer handle", value: "(black mica metallic paint)" },
                  { name: "Colored door mirrors", value: "(black mica metallic paint)" },
                  { name: "Wheels", value: "15-inch aluminum wheels (gunmetal painted)" },
                  { name: "LED fog lamps", value: "Included" },
                  { name: "Black finish", value: "(wheelhouse/roof header)/roof rail" },
                  { name: "Full LED headlamps", value: "With auto-leveling function (with clearance lamps, auto lights, and plated decoration)" },
                ],
              },
            ],
          },
          {
            id: "taft-g-turbo-chrome-venture",
            name: "G - TURBO CHROME VENTURE",
            imageUrl: "/DIAHATSU G - TURBO  CHROME VENTURE.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder, 12 valve DOHC, intercooler turbo horizontal" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.3 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "840 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "47[64] / 6,400" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "100[10.2]/3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Dark silver decoration", value: "(air conditioner register panel)" },
                  { name: "Dark silver decoration", value: "(instrument panel center shift bezel)" },
                  { name: "Dark silver trim", value: "(meter panel)" },
                  { name: "Front separate seats", value: "(silver stitching)" },
                  { name: "Genuine leather steering wheel", value: "(with plated ornament and silver trim)" },
                  { name: "Steering switch", value: "(for driving assistance / for switching D assist / for audio operation / for hands-free calling)" },
                  {
                    name: "TFT color multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning, maintenance information, clock mode, etc.)/tachometer",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Hood garnish", value: "(plated) & silver under garnish (front)" },
                  { name: "Back door garnish", value: "(chrome plated) & silver under garnish (rear)" },
                  { name: "Door outer handle", value: "(plated)" },
                  { name: "Wheels", value: "15-inch aluminum wheels (silver painted)" },
                  { name: "LED fog lamps", value: "Included" },
                  { name: "Black finish", value: "(wheelhouse/roof header)/roof rail" },
                  { name: "Full LED headlamps", value: "With auto-leveling function (with clearance lamps, auto lights, and plated decoration)" },
                ],
              },
            ],
          },
          {
            id: "taft-g-turbo",
            name: "G - TURBO",
            imageUrl: "/DIAHATSU G - TURBO.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder, 12 valve DOHC, intercooler turbo horizontal" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.3 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "840 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "47[64] / 6,400" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "100[10.2]/3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Genuine leather steering wheel", value: "(with plated ornament and silver trim)" },
                  { name: "Steering switch", value: "(for driving assistance / for switching D assist / for audio operation / for hands-free calling)" },
                  {
                    name: "TFT color multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning, maintenance information, clock mode, etc.) / tachometer / orange interior accent (meter panel)",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "15-inch aluminum wheels (gunmetal painted)" },
                  { name: "LED fog lamps", value: "Included" },
                  { name: "Black finish", value: "(wheelhouse/roof header)/roof rail" },
                  { name: "Full LED headlamps", value: "With auto-leveling function (with clearance lamps, auto lights, and plated decoration)" },
                ],
              },
            ],
          },
          {
            id: "taft-g-dark-chrome-venture",
            name: "G DARK CHROME VENTURE",
            imageUrl: "/DIAHATSU G DARK CHROME VENTURE.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12 valve DOHC horizontal installation" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.4 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "830 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "38[52] / 6,900" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "60[6.1] / 3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Dark silver decoration", value: "(air conditioner register panel)" },
                  { name: "Dark silver decoration", value: "(instrument panel center shift bezel)" },
                  { name: "Front separate seats", value: "(silver stitching)" },
                  { name: "Dark silver trim", value: "(meter panel)" },
                  { name: "Genuine leather steering wheel", value: "(with plated ornament and silver trim)" },
                  { name: "Steering switch", value: "(for driving assistance / for switching D assist / for audio operation / for hands-free calling)" },
                  {
                    name: "TFT color multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning, maintenance information, clock mode, etc.)/tachometer",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Hood garnish", value: "(dark black plating) & gunmetal under garnish (front)" },
                  { name: "Back door garnish", value: "(dark black plating) & gunmetal under garnish (rear)" },
                  { name: "Door outer handle", value: "(black mica metallic paint)" },
                  { name: "Colored door mirrors", value: "(black mica metallic paint)" },
                  { name: "Wheels", value: "15-inch aluminum wheels (gunmetal painted)" },
                  { name: "LED fog lamps", value: "Included" },
                  { name: "Black finish", value: "(wheelhouse/roof header)/roof rail" },
                  { name: "Full LED headlamps", value: "With auto-leveling function (with clearance lamps, auto lights, and plated decoration)" },
                ],
              },
            ],
          },
          {
            id: "taft-g-chrome-venture",
            name: "G CHROME VENTURE",
            imageUrl: "/DIAHATSU G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12 valve DOHC horizontal installation" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.4 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "830 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "38[52] / 6,900" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "60[6.1] / 3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Dark silver decoration", value: "(air conditioner register panel)" },
                  { name: "Dark silver decoration", value: "(instrument panel center shift bezel)" },
                  { name: "Front separate seats", value: "(silver stitching)" },
                  { name: "Dark silver trim", value: "(meter panel)" },
                  { name: "Genuine leather steering wheel", value: "(with plated ornament and silver trim)" },
                  { name: "Steering switch", value: "(for switching D assist / for audio operation / for hands-free calling)" },
                  {
                    name: "TFT color multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning, maintenance information, clock mode, etc.)/tachometer",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Hood garnish", value: "(plated) & silver under garnish (front)" },
                  { name: "Back door garnish", value: "(chrome plated) & silver under garnish (rear)" },
                  { name: "Chrome-plated outer door handle", value: "Included" },
                  { name: "Wheels", value: "15-inch aluminum wheels (silver painted)" },
                  { name: "LED fog lamps", value: "Included" },
                  { name: "Black finish", value: "(wheelhouse/roof header)/roof rail" },
                  { name: "Full LED headlamps", value: "With auto-leveling function (with clearance lamps, auto lights, and plated decoration)" },
                ],
              },
            ],
          },
          {
            id: "taft-g",
            name: "G",
            imageUrl: "/DIAHATSU G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line, 3-cylinder, 12 valves, DOHC horizontal" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.4 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "830 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "38[52] / 6,900" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "60[6.1] / 3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Genuine leather steering wheel", value: "(with plated ornament and silver trim)" },
                  { name: "Steering switch", value: "(for switching D assist / for audio operation / for hands-free calling)" },
                  {
                    name: "TFT color multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning, maintenance information, clock mode, etc.) / tachometer / orange interior accent (meter panel)",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "15-inch aluminum wheels (silver painted)" },
                  { name: "LED fog lamps", value: "Included" },
                  { name: "Black finish", value: "(wheelhouse/roof header)/roof rail" },
                  { name: "Full LED headlamps", value: "With auto-leveling function (with clearance lamps, auto lights, and plated decoration)" },
                ],
              },
            ],
          },
          {
            id: "taft-x-turbo",
            name: "X - TURBO",
            imageUrl: "/DIAHATSU X - TURBO.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder, 12 valve DOHC, intercooler turbo horizontal" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.4 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "840 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "47[64] / 6,400" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "100[10.2]/3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "(with plated ornament and silver decoration)" },
                  { name: "Steering switch", value: "(for audio operation / for hands-free calling)" },
                  {
                    name: "Multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning)",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "15-inch steel wheels (black painted) [with center caps]" },
                  { name: "Body color", value: "(wheelhouse/roof header)" },
                  { name: "Full LED headlamp", value: "With manual leveling function (with clearance lamp and auto light)" },
                ],
              },
            ],
          },
          {
            id: "taft-x",
            name: "X",
            imageUrl: "/DIAHATSU X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Description", value: "Eco IDLE non-equipped vehicle 2WD /4WD" },
                  { name: "Engine Type", value: "658/Gasoline" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line, 3-cylinder, 12 valves, DOHC horizontal" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD/4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "21.4 km/L" },
                  { name: "Fuel tank capacity", value: "30 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,395 mm" },
                  { name: "Overall width", value: "1,475 mm" },
                  { name: "Overall height", value: "1,630 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "2,050/1,305/1,270 mm" },
                  { name: "Vehicle weight", value: "830 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "38[52] / 6,900" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "60[6.1] / 3,600" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering wheel", value: "(with plated ornament and silver decoration)" },
                  { name: "Steering switch", value: "(for audio operation / for hands-free calling)" },
                  {
                    name: "Multi-information display",
                    value: "(idling stop time/accumulated time, average fuel consumption, cruising distance, outside temperature, corner sensor, half-open door warning, smart assist operation/fault/stop warning)",
                  },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "15-inch steel wheels (black painted) [with center caps]" },
                  { name: "Body color", value: "(wheelhouse/roof header)" },
                  { name: "Full LED headlamp", value: "With manual leveling function (with clearance lamp and auto light)" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "rocky",
        name: "Rocky",
        grades: [
          {
            id: "rocky-premium-g-hev",
            name: "Premium G HEV",
            imageUrl: "/ROCKY Premium G HEV.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.2L" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12-valve DOHC horizontal installation (2WD)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "28.0 KM/L" },
                  { name: "Fuel tank capacity", value: "33 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,995 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,620 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,955/1,420/1,250 mm" },
                  { name: "Vehicle weight", value: "1,070 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "60[82] / 5,600 - 2WD" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "105[10.7] / 3,200～5,200" },
                  { name: "Motor Maximum power kW[PS]/rpm", value: "78[106] / 4,372～6,329" },
                  { name: "Motor Maximum torque N･m[kgf･m]/rpm", value: "170[17.3] / 0〜4,372" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Full fabric x soft leather seats (front/rear with white stitching)" },
                  { name: "Large front door grip", value: "(black material x silver painted) / Chrome-plated inner door handle" },
                  { name: "Rear seats", value: "6:4 split folding rear seats (2-stage reclining)" },
                  { name: "One-push auto-open cup holder", value: "(driver's seat/passenger's seat)" },
                  { name: "Front console tray", value: "(with LED lighting)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "17-inch aluminum wheels (machined/hybrid only [5 holes])" },
                  { name: "Door outer handle", value: "(plated)" },
                  { name: "Hybrid-specific front grille", value: "(gunmetal paint)" },
                  { name: "Full LED headlamps", value: "(with clearance lamps/auto lights/plated decoration) (with auto leveling function and side view lamps)/LED sequential turn lamps" },
                ],
              },
            ],
          },
          {
            id: "rocky-xhev",
            name: "XHEV",
            imageUrl: "/ROCKY XHEV.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.2L" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12-valve DOHC horizontal installation (2WD)" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "28.0 KM/L" },
                  { name: "Fuel tank capacity", value: "33 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,995 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,620 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,955/1,420/1,250 mm" },
                  { name: "Vehicle weight", value: "1,060 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output kW[PS]/rpm net", value: "60[82] / 5,600-2WD" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "105[10.7] / 3,200～5,200" },
                  { name: "Motor Maximum power kW[PS]/rpm", value: "78[106] / 4,372～6,329" },
                  { name: "Motor Maximum torque N･m[kgf･m]/rpm", value: "170[17.3] / 0〜4,372" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Full fabric seats (front with red piping)" },
                  { name: "Large front door grip", value: "(red material x silver paint) / Chrome-plated inner door handle" },
                  { name: "Rear seats", value: "6:4 split folding rear seats (2-stage reclining)" },
                  { name: "One-push auto-open cup holder", value: "(driver's seat/passenger's seat)" },
                  { name: "Front console tray", value: "(with LED lighting)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "16-inch aluminum wheels (for hybrids only [5 holes])" },
                  { name: "Hybrid-specific front grille", value: "(gunmetal paint)" },
                  { name: "Door outer handle", value: "(same color as body)" },
                  { name: "Full LED headlamp", value: "(with clearance lamp/auto light/plated decoration) (with manual leveling function)" },
                ],
              },
            ],
          },
          {
            id: "rocky-premium-g",
            name: "Premium G",
            imageUrl: "/ROCKY Premium G.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.2L" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12-valve DOHC horizontal installation (2WD) IF 4WD + TURBO installation" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "20.7 KM/L" },
                  { name: "Fuel tank capacity", value: "33 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,995 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,620 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,955/1,420/1,250 mm" },
                  { name: "Vehicle weight", value: "980 / 1,050 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "64[87] / 6,000 - 2WD" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "113[11.5] / 4,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Full fabric x soft leather seats (front/rear with white stitching)" },
                  { name: "Large front door grip", value: "(black material x silver painted) / Chrome-plated inner door handle" },
                  { name: "Rear seats", value: "6:4 split folding rear seats (2-stage reclining)" },
                  { name: "One-push auto-open cup holder", value: "(driver's seat/passenger's seat)" },
                  { name: "Front console tray", value: "(with LED lighting)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "17-inch aluminum wheels (machined)" },
                  { name: "Piano black front grille", value: "Included" },
                  { name: "Door outer handle", value: "(plated)" },
                  { name: "Full LED headlamps", value: "(clearance lamps/auto lights/plated decoration) (with auto leveling function and side view lamps)/LED sequential turn lamps" },
                ],
              },
            ],
          },
          {
            id: "rocky-x",
            name: "X",
            imageUrl: "/ROCKY X.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.2L / 1.0L TURBO" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12-valve DOHC horizontal installation (2WD) IF 4WD + TURBO installation" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "20.7 KM/L / 17.4 KM/L" },
                  { name: "Fuel tank capacity", value: "33 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,995 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,620 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,955/1,420/1,250 mm" },
                  { name: "Vehicle weight", value: "970 / 1,040 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "64[87] / 6,000 - 2WD" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "113[11.5] / 4,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Full fabric seats (front with red piping)" },
                  { name: "Large front door grip", value: "(red material x silver paint) / Chrome-plated inner door handle" },
                  { name: "Rear seats", value: "6:4 split folding rear seats (2-stage reclining)" },
                  { name: "One-push auto-open cup holder", value: "(driver's seat/passenger's seat)" },
                  { name: "Front console tray", value: "(with LED lighting)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "16-inch aluminum wheels" },
                  { name: "Piano black front grille", value: "Included" },
                  { name: "Door outer handle", value: "(same color as body)" },
                  { name: "Full LED headlamp", value: "(with clearance lamp/auto light/plated decoration) (with manual leveling function)" },
                ],
              },
            ],
          },
          {
            id: "rocky-l",
            name: "L",
            imageUrl: "/ROCKY L.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.2L / 1.0L TURBO" },
                  { name: "Engine type, number of cylinders and layout", value: "Water-cooled in-line 3-cylinder 12-valve DOHC horizontal installation (2WD) IF 4WD + TURBO installation" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD / 4WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Fuel consumption rate", value: "20.7 KM/L / 17.4 KM/L" },
                  { name: "Fuel tank capacity", value: "33 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length", value: "3,995 mm" },
                  { name: "Overall width", value: "1,695 mm" },
                  { name: "Overall height", value: "1,620 mm" },
                  { name: "Interior dimensions (length/width/height)", value: "1,955/1,420/1,250 mm" },
                  { name: "Vehicle weight", value: "970 / 1,040 kg" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power output (kW/rpm) net", value: "64[87] / 6,000 - 2WD" },
                  { name: "Maximum torque N･m[kgf･m]/rpm net", value: "113[11.5] / 4,500" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Seats", value: "Full fabric seat" },
                  { name: "Large front door grip", value: "(black finish)" },
                  { name: "Rear seats", value: "6:4 split folding rear seats (2-stage reclining)" },
                  { name: "One-push auto-open cup holder", value: "(driver's seat/passenger's seat)" },
                  { name: "Front console tray", value: "(with LED lighting)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Wheels", value: "16 inch full wheel cap" },
                  { name: "Front grille", value: "Included" },
                  { name: "Door outer handle", value: "(same color as body)" },
                  { name: "Full LED headlamp", value: "(with clearance lamp/auto light/plated decoration) (with manual leveling function)" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "mira",
        name: "Mira",
        grades: [
          {
            id: "mira-g-sa3",
            name: 'G"SAⅢ"',
            imageUrl: '/DAIHATSU MIRA G SA3.png',
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Capacity", value: "658cc" },
                  { name: "Engine type, number of cylinders and layout", value: "naturally aspirated inline 3-cylinder engine" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "25.0 km/L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum Output kW［PS］/rpm", value: "36［49］/6,800" },
                  { name: "Maximum Torque N・m［kgf・m］/rpm", value: "57［5.8］/5,200" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Automatic Air Conditioning System", value: "Included" },
                  { name: "Push start", value: "Included" },
                  { name: "Keyless Entry", value: "Included" },
                  { name: "Power Shutters", value: "Included" },
                  { name: "Power mirrors", value: "Included" },
                  { name: "Digital meter Panel", value: "(Blue Ambient)" },
                  { name: "Rear Seat Headrests", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED headlights", value: "Included" },
                  { name: "Auto-folding door mirrors", value: "Included" },
                  { name: "Wheels", value: "14-inch aluminum wheels" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Dual SRS Airbags Front", value: "Included" },
                  { name: "SRS Side Airbags", value: "Included" },
                  { name: "6 Parking Sensors", value: "Included" },
                  { name: "Corner sensor operation screen", value: "Included" },
                ],
              },
              {
                category: "Dimensions",
                items: [
                  { name: "Dimensions (L X W X H)", value: "3395 x 1475 x 1500mm" },
                  { name: "Ground Clearance", value: "160mm" },
                ],
              },
            ],
          },
          {
            id: "mira-x-sa3",
            name: 'X"SAⅢ"',
            imageUrl: '/DAIHATSU MIRA X SA3.png',
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Capacity", value: "658cc" },
                  { name: "Engine type, number of cylinders and layout", value: "naturally aspirated inline 3-cylinder engine" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "25.0 km/L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum Output kW［PS］/rpm", value: "36［49］/6,800" },
                  { name: "Maximum Torque N・m［kgf・m］/rpm", value: "57［5.8］/5,200" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "Keyless Entry", value: "Included" },
                  { name: "Power Shutters", value: "Included" },
                  { name: "Power mirrors", value: "Included" },
                  { name: "Digital meter Panel", value: "(Blue Ambient)" },
                  { name: "Rear Seat Headrests", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED headlights", value: "Included" },
                  { name: "Electrically retractable door mirrors", value: "Included" },
                  { name: "Wheels", value: "14 inch full wheel cap" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Dual SRS Airbags Front", value: "Included" },
                  { name: "SRS Side Airbags", value: "Included" },
                ],
              },
              {
                category: "Dimensions",
                items: [
                  { name: "Dimensions (L X W X H)", value: "3395 x 1475 x 1500mm" },
                  { name: "Ground Clearance", value: "160mm" },
                ],
              },
            ],
          },
          {
            id: "mira-l-sa3",
            name: 'L"SAⅢ"',
            imageUrl: '/DAIHATSU MIRA L SA3.png',
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Capacity", value: "658cc" },
                  { name: "Engine type, number of cylinders and layout", value: "naturally aspirated inline 3-cylinder engine" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "25.0 km/L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum Output kW［PS］/rpm", value: "36［49］/6,800" },
                  { name: "Maximum Torque N・m［kgf・m］/rpm", value: "57［5.8］/5,200" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "Keyless Entry", value: "Included" },
                  { name: "Power Shutters", value: "Included" },
                  { name: "Digital meter Panel", value: "(Orange Ambient)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Multi-reflector halogen headlamp", value: "Included" },
                  { name: "Folding door mirror", value: "(black finish)" },
                  { name: "Wheels", value: "13 inch full wheel cap" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Dual SRS Airbags Front", value: "Included" },
                  { name: "SRS Side Airbags", value: "Included" },
                ],
              },
              {
                category: "Dimensions",
                items: [
                  { name: "Dimensions (L X W X H)", value: "3395 x 1475 x 1500mm" },
                  { name: "Ground Clearance", value: "160mm" },
                ],
              },
            ],
          },
          {
            id: "mira-b-sa3",
            name: 'B"SAⅢ"',
            imageUrl: '/DAIHATSU MIRA B SA3.png',
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Capacity", value: "658cc" },
                  { name: "Engine type, number of cylinders and layout", value: "naturally aspirated inline 3-cylinder engine" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "4" },
                  { name: "Fuel consumption rate", value: "25.0 km/L" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum Output kW［PS］/rpm", value: "36［49］/6,800" },
                  { name: "Maximum Torque N・m［kgf・m］/rpm", value: "57［5.8］/5,200" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "Keyless Entry", value: "Included" },
                  { name: "Power Shutters", value: "(Front)" },
                  { name: "Digital meter Panel", value: "(Orange Ambient)" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Multi-reflector halogen headlamp", value: "Included" },
                  { name: "Folding door mirror", value: "(black finish)" },
                  { name: "Wheels", value: "13-inch steel wheels" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Dual SRS Airbags Front", value: "Included" },
                  { name: "SRS Side Airbags", value: "Included" },
                ],
              },
              {
                category: "Dimensions",
                items: [
                  { name: "Dimensions (L X W X H)", value: "3395 x 1475 x 1500mm" },
                  { name: "Ground Clearance", value: "160mm" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "mazda",
    name: "Mazda",
    models: [
      {
        id: "scrum",
        name: "SCRUM",
        grades: [
          {
            id: "scrum-buster",
            name: "BUSTER",
            imageUrl: "/SCRUM BUSTER.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Overall height (mm)", value: "1,895" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "930" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Rear Blower", value: "Included" },
                  { name: "Front Seat Heaters", value: "Included" },
                  { name: "Push Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front & Rear", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "Headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "Silver hood garnish", value: "Included" },
                  { name: "12 inch Wheel Cups", value: "Included" },
                  { name: "Body Color side mirrors", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "scrum-pc",
            name: "PC",
            imageUrl: "/SCRUM PC.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658 CC" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Overall height (mm)", value: "1,895" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "910" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Rear Blower", value: "Included" },
                  { name: "Front Seat Heaters", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front & Rear", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                  { name: "Headrests for rear Seats", value: "Included" },
                  { name: "Separate headrests for front seats", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "LED Multi Reflector Headlights", value: "Included" },
                  { name: "12 inch Wheel Cups", value: "Included" },
                  { name: "Body Color side mirrors", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "scrum-pa-s",
            name: "PA-S",
            imageUrl: "/SCRUM PA-S.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658cc" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Overall height (mm)", value: "1,895" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "910" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Key Start", value: "Included" },
                  { name: "USB Power outlets", value: "Included" },
                  { name: "Power Shutters Front only", value: "Included" },
                  { name: "Power Side Mirrors", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Halogen Headlights", value: "Included" },
                  { name: "12 inch steel wheel", value: "Included" },
                  { name: "Black side mirrors", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "Forward Collision Warning (Auto Brake)", value: "Included" },
                  { name: "Idle Stop", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "scrum-pa",
            name: "PA",
            imageUrl: "/SCRUM PA.jpg",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine type, number of cylinders and layout", value: "water-cooled inline 3-cylinder" },
                  { name: "Engine Type", value: "658cc" },
                  { name: "Transmission Type", value: "CVT" },
                  { name: "Drive Type", value: "2WD (rear two-wheel drive)" },
                  { name: "Passenger Capacity", value: "4" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Maximum power (kW/rpm) net", value: "36(49)/6200〈kW(PS)/rpm〉" },
                  { name: "Maximum torque (N・m/rpm) net", value: "60 (6.1)/4000〈N･m(kgf･m)/rpm〉" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Overall length (mm)", value: "3,395" },
                  { name: "Overall width (mm)", value: "1,475" },
                  { name: "Overall height (mm)", value: "1,895" },
                  { name: "Wheelbase (mm)", value: "2,430" },
                  { name: "Minimum ground clearance (mm)", value: "150" },
                  { name: "Vehicle weight (kg)", value: "890" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Manual Air Conditioning System", value: "Included" },
                  { name: "Key Start", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Halogen Headlights", value: "Included" },
                  { name: "12 inch steel wheel", value: "Included" },
                  { name: "Black side mirrors", value: "Included" },
                ],
              },
              {
                category: "Safety Features",
                items: [
                  { name: "Parking Sensors and Warnings", value: "Included" },
                  { name: "SRS Airbags", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ford",
    name: "Ford",
    models: [
      {
        id: "raptor",
        name: "Raptor",
        grades: [
          {
            id: "ranger-double-cab-raptor-3-0l",
            name: "Ranger Double Cab Raptor 3.0L",
            imageUrl: "/Ranger Double Cab Raptor 3.0L.png",
            specifications: [
              {
                category: "Power Unit",
                items: [
                  { name: "Engine", value: "3.0L Gasoline V6 Twin-Turbo EcoBoost" },
                  { name: "Fuel Type", value: "Petrol" },
                  { name: "Maximum Power", value: "397 PS (292kW) / 5,650 rpm" },
                  { name: "Maximum Torque", value: "583 Nm / 3,500 rpm" },
                ],
              },
              {
                category: "Drive and Transmission",
                items: [
                  { name: "Drivetrain", value: "4WD Drivetrain" },
                  { name: "Transmission", value: "E-Shifter 10-speed Auto Transmission" },
                  { name: "Front/Rear Differential", value: "Electronic Locking Front & Rear Differential" },
                ],
              },
              {
                category: "Chassis & Suspension",
                items: [
                  { name: "Front Suspension", value: "Aluminum Double Wishbone with FOXTM 2.5\" Live Valve Internal Bypass Shock Absorbers" },
                  { name: "Rear Suspension", value: "Coil-over Shock with FOXTM Shocks Internal Bypass Reservoir Dampers and Watt's Link" },
                ],
              },
              {
                category: "Wheels and Tires",
                items: [
                  { name: "Alloywheels", value: "17\" Alloy Wheels" },
                  { name: "Tires", value: "BFGoodrich® K02 All-Terrain Tires (T285/70 R17)" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Ventilated Large Discs" },
                  { name: "Rear", value: "Ventilated Large Discs" },
                ],
              },
              {
                category: "Exterior - Lights",
                items: [
                  { name: "Matrix LED with Adaptive Front Lighting System and Adaptive Glare-Free", value: "Included" },
                  { name: "C-Clamp LED Daytime Running Lights", value: "Included" },
                  { name: "LED Fog Lamps", value: "Included" },
                  { name: "LED Taillamps", value: "Included" },
                ],
              },
              {
                category: "Exterior - Other Features",
                items: [
                  { name: "Active Valve Exhaust With 4 Selectable Exhaust Modes", value: "Included" },
                  { name: "Black Powder Coated Die Cast Aluminum Side Steps", value: "Included" },
                  { name: "Stretched Wide Body and Fender Flares", value: "Included" },
                  { name: "Easy Lift Tailgate", value: "Included" },
                  { name: "2.3 mm Steel Underbody Protection", value: "Included" },
                ],
              },
              {
                category: "Interior - Display",
                items: [
                  { name: "Meter panel", value: "12.4\" Color Information Display on Cluster" },
                  { name: "12\" Multi-Touch Screen Multi-function Display", value: "Included" },
                ],
              },
              {
                category: "Interior - Seats",
                items: [
                  { name: "10-way Power Adjustable Driver & Front Passenger Seat", value: "Included" },
                  { name: "Raptor Leather and Synthetic Leather Seats", value: "Included" },
                ],
              },
              {
                category: "Interior - Other Features",
                items: [
                  { name: "Dual Zone Climate Control Air Conditioning", value: "Included" },
                  { name: "Second Row Air Conditioning", value: "Included" },
                  { name: "Power Adjustable with Turning Indicator & Foldable Side Mirrors", value: "Included" },
                  { name: "Keyless Entry with Push Start Button", value: "Included" },
                ],
              },
              {
                category: "Audio and Connectivity",
                items: [
                  { name: "Audio", value: "Bang & Olufsen® Sound System with 10 Speakers" },
                  { name: "Wireless Apple CarPlay® and Android Auto™", value: "Included" },
                  { name: "Bluetooth with SYNC® 4A", value: "Included" },
                  { name: "FordPass Connect", value: "Included" },
                  { name: "4 USB Ports", value: "Included" },
                ],
              },
              {
                category: "Special Features",
                items: [
                  { name: "7 Selectable Drive Modes with Rotary Switch", value: "Included" },
                  { name: "Leather Steering Wheel with Audio Control", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Airbags", value: "7 Airbags: Front Dual Airbags / Front Side Airbags/ Side Curtain Airbags / and Knee Airbag" },
                  { name: "ABS with EBD", value: "Included" },
                  { name: "ESP and Traction Control System with Electric Brake Booster", value: "Included" },
                  { name: "Front & Rear Parking Sensors", value: "Included" },
                  { name: "Active Park Assist", value: "Included" },
                  { name: "Blind Spot Information System with Cross-Traffic Alert and Braking", value: "Included" },
                  { name: "Tire Pressure Monitoring System", value: "Included" },
                ],
              },
              {
                category: "Option pack (with extra cost)",
                items: [
                  { name: "Power Roller Shutter / Lights ( Electric Canapy ) + 6K additional", value: "Available" },
                ],
              },
            ],
          },
          {
            id: "ranger-double-cab-raptor-2-0l",
            name: "Ranger Double Cab Raptor 2.0L",
            imageUrl: "/Ranger Double Cab Raptor 2.0L.png",
            specifications: [
              {
                category: "Power Unit",
                items: [
                  { name: "Engine", value: "2.0L Diesel Bi-Turbo" },
                  { name: "Fuel Type", value: "Diesel" },
                  { name: "Maximum Power", value: "210 PS (155kW) / 3750 rpm" },
                  { name: "Maximum Torque", value: "500 Nm / 1,750-2,000 rpm" },
                ],
              },
              {
                category: "Drive and Transmission",
                items: [
                  { name: "Drivetrain", value: "4WD Drivetrain" },
                  { name: "Transmission", value: "E-Shifter 10-speed Auto Transmission" },
                  { name: "Front/Rear Differential", value: "Electronic Locking Rear Differential" },
                ],
              },
              {
                category: "Chassis & Suspension",
                items: [
                  { name: "Front Suspension", value: "Aluminum Double Wishbone with FOXTM 2.5\" Internal Bypass Shock Absorbers" },
                  { name: "Rear Suspension", value: "Coil-over Shock with FOXTM Shocks Internal Bypass Reservoir Dampers and Watt's Link" },
                ],
              },
              {
                category: "Wheels and Tires",
                items: [
                  { name: "Alloywheels", value: "17\" Alloy Wheels" },
                  { name: "Tires", value: "BFGoodrich® K02 All-Terrain Tires (T285/70 R17)" },
                ],
              },
              {
                category: "Brake System",
                items: [
                  { name: "Front", value: "Ventilated Large Discs" },
                  { name: "Rear", value: "Ventilated Large Discs" },
                ],
              },
              {
                category: "Exterior - Lights",
                items: [
                  { name: "Matrix LED with Adaptive Front Lighting System and Adaptive Glare-Free", value: "Included" },
                  { name: "C-Clamp LED Daytime Running Lights", value: "Included" },
                  { name: "LED Fog Lamps", value: "Included" },
                  { name: "LED Taillamps", value: "Included" },
                ],
              },
              {
                category: "Exterior - Other Features",
                items: [
                  { name: "Black Powder Coated Die Cast Aluminum Side Steps", value: "Included" },
                  { name: "Stretched Wide Body and Fender Flares", value: "Included" },
                  { name: "Easy Lift Tailgate", value: "Included" },
                  { name: "2.3 mm Steel Underbody Protection", value: "Included" },
                ],
              },
              {
                category: "Interior - Display",
                items: [
                  { name: "Meter panel", value: "12.4\" Color Information Display on Cluster" },
                  { name: "12\" Multi-Touch Screen Multi-function Display", value: "Included" },
                ],
              },
              {
                category: "Interior - Seats",
                items: [
                  { name: "10-way Power Adjustable Driver & Front Passenger Seat", value: "Included" },
                  { name: "Raptor Leather and Synthetic Leather Seats", value: "Included" },
                ],
              },
              {
                category: "Interior - Other Features",
                items: [
                  { name: "Dual Zone Climate Control Air Conditioning", value: "Included" },
                  { name: "Second Row Air Conditioning", value: "Included" },
                  { name: "Power Adjustable with Turning Indicator & Foldable Side Mirrors", value: "Included" },
                  { name: "Keyless Entry with Push Start Button", value: "Included" },
                ],
              },
              {
                category: "Audio and Connectivity",
                items: [
                  { name: "Audio", value: "6 Speakers" },
                  { name: "Wireless Apple CarPlay® and Android Auto™", value: "Included" },
                  { name: "Bluetooth with SYNC® 4A", value: "Included" },
                  { name: "FordPass Connect", value: "Included" },
                  { name: "4 USB Ports", value: "Included" },
                ],
              },
              {
                category: "Special Features",
                items: [
                  { name: "7 Selectable Drive Modes with Rotary Switch", value: "Included" },
                  { name: "Leather Steering Wheel with Audio Control", value: "Included" },
                ],
              },
              {
                category: "Safety",
                items: [
                  { name: "Airbags", value: "Front Dual Airbags / Front Side Airbags/ Side Curtain Airbags / and Knee Airbag" },
                  { name: "ABS with EBD", value: "Included" },
                  { name: "ESP and Traction Control System with Electric Brake Booster", value: "Included" },
                  { name: "Front & Rear Parking Sensors", value: "Included" },
                  { name: "Active Park Assist", value: "Included" },
                  { name: "Blind Spot Information System with Cross-Traffic Alert and Braking", value: "Included" },
                  { name: "Tire Pressure Monitoring System", value: "Included" },
                ],
              },
              {
                category: "Option pack (with extra cost)",
                items: [
                  { name: "Power Roller Shutter / Lights ( Electric Canapy ) + 6K additional", value: "Available" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "foton",
    name: "Foton",
    models: [
      {
        id: "truck",
        name: "Truck",
        grades: [
          {
            id: "miler-10-ft",
            name: "Miler 10 ½ft",
            imageUrl: "/Miler 10 ½ft.jpg",
            specifications: [
              {
                category: "GVW (Gross Vehicle Weight)",
                items: [
                  { name: "GVW (Gross Vehicle Weight)", value: "4495" },
                ],
              },
              {
                category: "Payload",
                items: [
                  { name: "Payload", value: "2.5T" },
                ],
              },
              {
                category: "Vehicle",
                items: [
                  { name: "Vehicle", value: "Miler" },
                ],
              },
              {
                category: "Cabin Type",
                items: [
                  { name: "Cabin Type", value: "1730" },
                ],
              },
              {
                category: " Persons",
                items: [
                  { name: " Persons", value: "3" },
                ],
              },
              {
                category: "(mm） Wheelbase",
                items: [
                  { name: "(mm） Wheelbase", value: "2480" },
                ],
              },
              {
                category: "（mm）Overall",
                items: [
                  { name: "（mm）Overall", value: "4965×1980×2215" },
                ],
              },
              {
                category: "（mm）\ninternal size of cargo",
                items: [
                  { name: "（mm）\ninternal size of cargo", value: "3070×1870×400" },
                ],
              },
              {
                category: "Engine",
                items: [
                  { name: "Model", value: "4F25" },
                  { name: "（L）\nDisplacement", value: "2.5L" },
                  { name: "（kw）\nPower", value: "96" },
                  { name: "（Nm）\nTorque", value: "320" },
                ],
              },
              {
                category: "Gearbox",
                items: [
                  { name: "Gearbox", value: "5MT" },
                ],
              },
              {
                category: "Frame",
                items: [
                  { name: "Frame", value: "170x55x4" },
                ],
              },
              {
                category: "（t）Front alxe tonnage",
                items: [
                  { name: "（t）Front alxe tonnage", value: "1.8" },
                ],
              },
              {
                category: "（t）Rear alxe tonnage",
                items: [
                  { name: "（t）Rear alxe tonnage", value: "3.5" },
                ],
              },
              {
                category: "Speed ratio",
                items: [
                  { name: "Speed ratio", value: "5.125" },
                ],
              },
              {
                category: "Brake system",
                items: [
                  { name: "Type", value: "Hydraulic" },
                  { name: "brake", value: "Front disc/rear drum" },
                ],
              },
              {
                category: "Front leaf spring",
                items: [
                  { name: "Front leaf spring", value: "3pcs" },
                ],
              },
              {
                category: "Rear leaf spring",
                items: [
                  { name: "Rear leaf spring", value: "3+1pcs" },
                ],
              },
              {
                category: "Tyre",
                items: [
                  { name: " Size", value: "205/75R17.5" },
                  { name: " Number", value: "4+1" },
                ],
              },
            ],
          },
          {
            id: "miler-12-ft",
            name: "Miler 12 ½ft",
            imageUrl: "/Miler 12 ½ft.png",
            specifications: [
              {
                category: "GVW (Gross Vehicle Weight)",
                items: [
                  { name: "GVW (Gross Vehicle Weight)", value: "4495" },
                ],
              },
              {
                category: "Payload",
                items: [
                  { name: "Payload", value: "2.5T" },
                ],
              },
              {
                category: "Vehicle",
                items: [
                  { name: "Vehicle", value: "Miler" },
                ],
              },
              {
                category: "Cabin Type",
                items: [
                  { name: "Cabin Type", value: "1730" },
                ],
              },
              {
                category: " Persons",
                items: [
                  { name: " Persons", value: "3" },
                ],
              },
              {
                category: "(mm） Wheelbase",
                items: [
                  { name: "(mm） Wheelbase", value: "2900" },
                ],
              },
              {
                category: "（mm）Overall",
                items: [
                  { name: "（mm）Overall", value: "5535*1970*2110" },
                ],
              },
              {
                category: "（mm）\ninternal size of cargo",
                items: [
                  { name: "（mm）\ninternal size of cargo", value: "3700*1870*400" },
                ],
              },
              {
                category: "Engine",
                items: [
                  { name: "Model", value: "4F20" },
                  { name: "（L）\nDisplacement", value: "2L" },
                  { name: "（kw）\nPower", value: "92" },
                  { name: "（Nm）\nTorque", value: "320" },
                ],
              },
              {
                category: "Gearbox",
                items: [
                  { name: "Gearbox", value: "5MT" },
                ],
              },
              {
                category: "Frame",
                items: [
                  { name: "Frame", value: "170x55x4" },
                ],
              },
              {
                category: "（t）Front alxe tonnage",
                items: [
                  { name: "（t）Front alxe tonnage", value: "1.8" },
                ],
              },
              {
                category: "（t）Rear alxe tonnage",
                items: [
                  { name: "（t）Rear alxe tonnage", value: "3.5" },
                ],
              },
              {
                category: "Speed ratio",
                items: [
                  { name: "Speed ratio", value: "4.33" },
                ],
              },
              {
                category: "Brake system",
                items: [
                  { name: "Type", value: "Hydraulic" },
                  { name: "brake", value: "Front disc/rear drum" },
                ],
              },
              {
                category: "Front leaf spring",
                items: [
                  { name: "Front leaf spring", value: "3pcs" },
                ],
              },
              {
                category: "Rear leaf spring",
                items: [
                  { name: "Rear leaf spring", value: "3+1pcs" },
                ],
              },
              {
                category: "Tyre",
                items: [
                  { name: " Size", value: "195/75R16" },
                  { name: " Number", value: "6+1" },
                ],
              },
            ],
          },
          {
            id: "aumark-s-14-ft",
            name: "Aumark S 14 ½ft",
            imageUrl: "/14 ½ft.jpg",
            specifications: [
              {
                category: "GVW (Gross Vehicle Weight)",
                items: [
                  { name: "GVW (Gross Vehicle Weight)", value: "6000" },
                ],
              },
              {
                category: "Payload",
                items: [
                  { name: "Payload", value: "3.5T" },
                ],
              },
              {
                category: "Vehicle",
                items: [
                  { name: "Vehicle", value: "Aumark S" },
                ],
              },
              {
                category: "Cabin Type",
                items: [
                  { name: "Cabin Type", value: "1880" },
                ],
              },
              {
                category: " Persons",
                items: [
                  { name: " Persons", value: "3" },
                ],
              },
              {
                category: "(mm） Wheelbase",
                items: [
                  { name: "(mm） Wheelbase", value: "3360" },
                ],
              },
              {
                category: "（mm）Overall",
                items: [
                  { name: "（mm）Overall", value: "5995×2200×2330" },
                ],
              },
              {
                category: "（mm）\ninternal size of cargo",
                items: [
                  { name: "（mm）\ninternal size of cargo", value: "4170×1960×400" },
                ],
              },
              {
                category: "Engine",
                items: [
                  { name: "Model", value: "ISF 2.8" },
                  { name: "（L）\nDisplacement", value: "2.8L" },
                  { name: "（kw）\nPower", value: "96" },
                  { name: "（Nm）\nTorque", value: "310" },
                ],
              },
              {
                category: "Gearbox",
                items: [
                  { name: "Gearbox", value: "5MT" },
                ],
              },
              {
                category: "Frame",
                items: [
                  { name: "Frame", value: "180×65×4.5" },
                ],
              },
              {
                category: "（t）Front alxe tonnage",
                items: [
                  { name: "（t）Front alxe tonnage", value: "2.4" },
                ],
              },
              {
                category: "（t）Rear alxe tonnage",
                items: [
                  { name: "（t）Rear alxe tonnage", value: "3.5" },
                ],
              },
              {
                category: "Speed ratio",
                items: [
                  { name: "Speed ratio", value: "4.875" },
                ],
              },
              {
                category: "Brake system",
                items: [
                  { name: "Type", value: "Hydraulic " },
                  { name: "brake", value: "Front and rear drums" },
                ],
              },
              {
                category: "Front leaf spring",
                items: [
                  { name: "Front leaf spring", value: "3pcs" },
                ],
              },
              {
                category: "Rear leaf spring",
                items: [
                  { name: "Rear leaf spring", value: "5+2pcs" },
                ],
              },
              {
                category: "Tyre",
                items: [
                  { name: " Size", value: "215/75R17.5 〇7.00R16" },
                  { name: " Number", value: "4+1" },
                ],
              },
            ],
          },
          {
            id: "aumark-s-16-ft",
            name: "Aumark S 16 ½ft",
            imageUrl: "/Aumark S 16 ½ft.jpg",
            specifications: [
              {
                category: "GVW (Gross Vehicle Weight)",
                items: [
                  { name: "GVW (Gross Vehicle Weight)", value: "8500" },
                ],
              },
              {
                category: "Payload",
                items: [
                  { name: "Payload", value: "5.5T" },
                ],
              },
              {
                category: "Vehicle",
                items: [
                  { name: "Vehicle", value: "Aumark S" },
                ],
              },
              {
                category: "Cabin Type",
                items: [
                  { name: "Cabin Type", value: "2060" },
                ],
              },
              {
                category: " Persons",
                items: [
                  { name: " Persons", value: "3" },
                ],
              },
              {
                category: "(mm） Wheelbase",
                items: [
                  { name: "(mm） Wheelbase", value: "3800" },
                ],
              },
              {
                category: "（mm）Overall",
                items: [
                  { name: "（mm）Overall", value: "6950×2270×2390" },
                ],
              },
              {
                category: "（mm）\ninternal size of cargo",
                items: [
                  { name: "（mm）\ninternal size of cargo", value: "5140×2100×550" },
                ],
              },
              {
                category: "Engine",
                items: [
                  { name: "Model", value: "ISF3.8s4R154" },
                  { name: "（L）\nDisplacement", value: "3.7L" },
                  { name: "（kw）\nPower", value: "115" },
                  { name: "（Nm）\nTorque", value: "500" },
                ],
              },
              {
                category: "Gearbox",
                items: [
                  { name: "Gearbox", value: "6MT" },
                ],
              },
              {
                category: "Frame",
                items: [
                  { name: "Frame", value: "214×65×5" },
                ],
              },
              {
                category: "（t）Front alxe tonnage",
                items: [
                  { name: "（t）Front alxe tonnage", value: "2.85" },
                ],
              },
              {
                category: "（t）Rear alxe tonnage",
                items: [
                  { name: "（t）Rear alxe tonnage", value: "6" },
                ],
              },
              {
                category: "Speed ratio",
                items: [
                  { name: "Speed ratio", value: "4.3/〇3.909" },
                ],
              },
              {
                category: "Brake system",
                items: [
                  { name: "Type", value: "Air brakes" },
                  { name: "brake", value: "Front disc/rear drum" },
                ],
              },
              {
                category: "Front leaf spring",
                items: [
                  { name: "Front leaf spring", value: "3pcs" },
                ],
              },
              {
                category: "Rear leaf spring",
                items: [
                  { name: "Rear leaf spring", value: "8+6pcs" },
                ],
              },
              {
                category: "Tyre",
                items: [
                  { name: " Size", value: "215/75R17.5" },
                  { name: " Number", value: "6+1" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bus",
        name: "Bus",
        grades: [
          {
            id: "37-seater",
            name: "37 Seater",
            imageUrl: "/37 SEATER.png",
            specifications: [
              {
                category: "Basic\nspecification",
                items: [
                  { name: "Model and body structure", value: "Semi-monocoque" },
                  { name: "Product model", value: "BJ6946" },
                  { name: "Exterior dimensions（mm）", value: "9380×2500×3400" },
                  { name: "Wheelbase ( mm )", value: "4710" },
                  { name: "Inner height(mm)", value: "1960" },
                  { name: "Curb weight(T)", value: "9.85" },
                  { name: "Fuel consumption", value: "4km/l" },
                ],
              },
              {
                category: "Engine Specifications",
                items: [
                  { name: "Model/Brand", value: "YC6J245-52" },
                  { name: "Type", value: "In-line,six-cylinder, water cooling, four-\nstroke, DI, intercooling, diesel engine" },
                  { name: "Displacement /L", value: "6.5L" },
                  { name: "Emission", value: "Euro 5" },
                  { name: "KW(PS)/rpm ", value: "180/2500" },
                  { name: "Torque", value: "890/1200-1700" },
                ],
              },
              {
                category: "Chassis",
                items: [
                  { name: "Transmission", value: "FAST 6DS95T(6-speed manual gear box)" },
                  { name: "Retarder", value: "Electromagnetic retarder Telma" },
                  { name: "Front axle", value: "4.5T maintenance-free Front axle" },
                  { name: "Rear axle", value: "9.5T maintenance-free Rear axle" },
                  { name: "Clutch", value: "SACHS Brand φ430clutch" },
                  { name: "Steering", value: "Integral power steering" },
                  { name: "Braking", value: "Front & Rear Disk brake" },
                  { name: "Suspension structure", value: "Koman air suspension with 6 airbags(F2 /R4)" },
                  { name: "Fuel tank capacity", value: "185L *2 =370L ，Filling from L&R side" },
                  { name: "Tyre ＆ rim", value: "10R22.5 with Spare Tyre / Alloy Wheels" },
                ],
              },
              {
                category: "Body Specification",
                items: [
                  { name: "Body frame", value: "Semi- monocoque body structure,Concave floor" },
                  { name: "Front passenger door", value: "Auto Door (Pneumatic) Outward Swing Door" },
                  { name: "Rear windshield", value: "Tempered glass,F green" },
                  { name: "Front windshield", value: "Laminating glass, colorless" },
                  { name: "Side window", value: "All Closed, Tinted,Tail window sliding" },
                  { name: "Side window glass color", value: "Forest Green" },
                  { name: "Driver Window", value: "Single layer inner sliding, colorless" },
                  { name: "Luggage door", value: "Manual flipping-type door" },
                  { name: "Air outlet", value: "Air outlet for reading lamp" },
                  { name: "Top windshield", value: "One roof hatch,With ventilation" },
                  { name: "Floor", value: "15mm PVC floor" },
                ],
              },
              {
                category: "Passenger seat",
                items: [
                  { name: "Number of Seats", value: "37 Passenger seats+ One Driver Seats+ One Tour Guide Seats , " },
                  { name: "Passenger seat inclosure", value: "Holding handle" },
                  { name: "", value: "Seats needs to move front, back as well as left and right ( sliding seats)" },
                  { name: "", value: "Foot rest for each seat" },
                  { name: "", value: "Magazing holder & plastic table with cup holder for each seat" },
                  { name: "", value: "removable and washable head cloth" },
                  { name: "", value: "two points belt" },
                ],
              },
              {
                category: "Driver seat",
                items: [
                  { name: "Comfort", value: "Adjustable airbag driver seat" },
                  { name: "Driver seat inclosure", value: "Driver seat inclosure" },
                  { name: "Guide seat", value: "High back guide seat with three point safety belt" },
                  { name: "Sun-visor", value: "Manual sun-visor" },
                ],
              },
              {
                category: "Lights",
                items: [
                  { name: "Light and signal system", value: "LED Strip lamp" },
                  { name: "Headlights", value: "LED headlamp" },
                  { name: "Floorlights", value: "LED Strip Light for Floor and Steps" },
                ],
              },
              {
                category: "Technology",
                items: [
                  { name: "Visual and audio system", value: "MP3 Player" },
                  { name: "Vehicle CCTV System", value: "6 way cameras ( Including luggage compartment ) & 1 TB storage with Monitor" },
                ],
              },
              {
                category: "Others",
                items: [
                  { name: "Refrigerator、water fountains", value: "Refrigerator、water fountains" },
                  { name: "mechanical fan", value: "mechanical fan" },
                  { name: "USB ports for each seat", value: "USB ports for each seat" },
                  { name: "10.4-inch integrated central control system+Front 22'' fixed LCD", value: "10.4-inch integrated central control system+Front 22'' fixed LCD" },
                  { name: "Exterior Body Light", value: "Exterior Body Light" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kia",
    name: "Kia",
    models: [
      {
        id: "sonet",
        name: "Sonet",
        grades: [
          {
            id: "sonet-gtx-plus",
            name: "GTX Plus",
            imageUrl: "/Kia Sonet GTX Plus.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L Turbocharged" },
                  { name: "Transmission", value: "7-Automatic, G1.0T-GDi Smart stream 7DCT" },
                  { name: "Fuel Efficiency", value: "18.4 kmpl" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Boot Capacity", value: "385 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Length", value: "3995mm" },
                  { name: "Width", value: "1790mm" },
                  { name: "Height", value: "1642mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Power", value: "118 bhp @ 6000rpm" },
                  { name: "Torque", value: "172 Nm@1500-4000rpm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering Wheel", value: "Leatherette wrapped D-cut steering wheel with GT line logo" },
                  { name: "Roof Lining", value: "Sporty All Black Roof Lining" },
                  { name: "Interior Lighting", value: "LED Ambient Sound Lighting" },
                  { name: "Seats", value: "Black Leatherette Seats (White Inserts & Tubular pattern)" },
                  { name: "Interior Theme", value: "All Black Interiors with Sporty White Inserts" },
                  { name: "Seat Adjustment", value: "Power Seat Adjust (4 Way)" },
                  { name: "Infotainment", value: "(10.25\") HD Touchscreen Navigation with Wired Android Auto & Apple CarPlay", highlighted: true },
                  { name: "Audio System", value: "BOSE premium 7 speaker system with dynamic speed compensation", highlighted: true },
                  { name: "Instrument Cluster", value: "Full Digital Cluster with 26.04 cm (10.25\")", highlighted: true },
                  { name: "Smartphone Wireless Charger", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Grille", value: "Kia Signature Tiger nose grille with Knurled Premium Dark Metallic Surround" },
                  { name: "Headlamps", value: "Crown Jewel LED headlamps" },
                  { name: "Tail Lamps", value: "Star Map LED Connected Tail Lamps" },
                  { name: "High Mount Stop Lamp", value: "Included" },
                  { name: "Shark fin antenna", value: "Included" },
                  { name: "Wheels", value: "16-inch Sporty Crystal Cut Alloy Wheels" },
                  { name: "Bumpers", value: "Body Color Front & Rear bumper" },
                  { name: "Spoiler", value: "Spoiler - Body Color" },
                ],
              },
              {
                category: "Features",
                items: [
                  { name: "Rear view camera with guidelines", value: "Included" },
                  { name: "Paddle shifters", value: "Included" },
                  { name: "Multi drive modes", value: "Normal/Eco/Sports" },
                  { name: "Traction modes", value: "Sand/Mud/Wet" },
                  { name: "Electric Sunroof", value: "Included" },
                ],
              },
            ],
          },
          {
            id: "sonet-htx",
            name: "HTX",
            imageUrl: "/Kia Sonet HTX.png",
            specifications: [
              {
                category: "General Information",
                items: [
                  { name: "Engine Type", value: "1.0L Turbocharged" },
                  { name: "Transmission", value: "7-Automatic, G1.0T-GDi Smart stream 7DCT" },
                  { name: "Fuel Efficiency", value: "18.4 kmpl" },
                  { name: "Drive Type", value: "2WD" },
                  { name: "Passenger Capacity", value: "5" },
                  { name: "Boot Capacity", value: "385 L" },
                ],
              },
              {
                category: "Dimensions & Weight",
                items: [
                  { name: "Length", value: "3995mm" },
                  { name: "Width", value: "1790mm" },
                  { name: "Height", value: "1642mm" },
                ],
              },
              {
                category: "Performance",
                items: [
                  { name: "Power", value: "118 bhp @ 6000rpm" },
                  { name: "Torque", value: "172 Nm@1500-4000rpm" },
                ],
              },
              {
                category: "Interior",
                items: [
                  { name: "Steering Wheel", value: "Leatherette wrapped D-cut steering wheel with Sonet logo" },
                  { name: "Roof Lining", value: "Premium Beige Roof Lining" },
                  { name: "Interior Design", value: "Connected Infotainment & Cluster Design - Black High Gloss, Silver finish with Silver Deco AC vents garnish" },
                  { name: "Seats", value: "Black & Beige Semi Leatherette Seats / Black & Brown Leatherette Seats" },
                  { name: "Interior Theme", value: "Black & Beige Dual Tone Interior / All Black Interiors with Premium Brown Inserts" },
                  { name: "Seat Adjustment", value: "Manual Seat Adjust" },
                  { name: "Infotainment", value: "20.32 cm (8.0\") Touchscreen with Wireless Android Auto & Apple CarPlay", highlighted: true },
                  { name: "Audio System", value: "6 Speakers (Including Tweeters)" },
                  { name: "Instrument Cluster", value: "Advance 10.67 cm (4.2\") Color instrument cluster", highlighted: true },
                  { name: "Smartphone Wireless Charger", value: "Included" },
                ],
              },
              {
                category: "Exterior",
                items: [
                  { name: "Grille", value: "Kia Signature Tiger nose grille with Knurled Matte Chrome Surround" },
                  { name: "Headlamps", value: "Crown Jewel LED headlamps" },
                  { name: "Tail Lamps", value: "Star Map LED Connected Tail Lamps" },
                  { name: "High Mount Stop Lamp", value: "Included" },
                  { name: "Shark fin antenna", value: "Included" },
                  { name: "Wheels", value: "16-inch Crystal Cut Alloy Wheels (Different Design)" },
                  { name: "Bumpers", value: "Front & Rear Bumper (Different Style)" },
                  { name: "Spoiler", value: "No Spoiler" },
                ],
              },
              {
                category: "Features",
                items: [
                  { name: "Rear view camera with guidelines", value: "Included" },
                  { name: "Paddle shifters", value: "Included" },
                  { name: "Multi drive modes", value: "Normal/Eco/Sports" },
                  { name: "Traction modes", value: "Sand/Mud/Wet" },
                  { name: "Electric Sunroof", value: "Included" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

