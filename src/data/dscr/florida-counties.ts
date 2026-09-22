// Florida county data for the DSCR loan calculator.
//
// millage: county AVERAGE TOTAL millage (county + school + municipal +
// special districts), Florida TaxWatch "2025 How Florida Counties Compare".
// Investment property pays on ~full assessed value (no homestead exemption;
// the 10% non-homestead cap only limits later increases, and assessed value
// resets to just value on purchase).
//
// insuranceTier: rough annual landlord (DP-3) premium band, keyed off 2026
// Florida market reporting (MoneyGeek / regional agency surveys). Expressed
// as dollars per $1,000 of dwelling coverage per year; the calculator treats
// dwelling coverage as ~70% of purchase price and lets the user override.

export type InsuranceTier = "inland" | "metroInland" | "coastal" | "seCoast" | "keys";

// Annual premium per $1,000 of dwelling coverage.
export const INSURANCE_TIER_RATES: Record<InsuranceTier, number> = {
  inland: 13,
  metroInland: 16,
  coastal: 22,
  seCoast: 30,
  keys: 40,
};

export const INSURANCE_TIER_LABELS: Record<InsuranceTier, string> = {
  inland: "Inland Florida",
  metroInland: "Inland metro",
  coastal: "Coastal",
  seCoast: "Southeast Florida coast",
  keys: "Florida Keys",
};

// Median annual NFIP-style flood premium adder when the property is in a
// flood zone; user-adjustable in the UI.
export const FLOOD_ZONE_ANNUAL_DEFAULT = 1100;

export interface FloridaCounty {
  name: string;
  millage: number;
  insuranceTier: InsuranceTier;
}

export const FLORIDA_COUNTIES: FloridaCounty[] = [
  { name: "Alachua", millage: 16.56, insuranceTier: "metroInland" },
  { name: "Baker", millage: 15.42, insuranceTier: "inland" },
  { name: "Bay", millage: 12.28, insuranceTier: "coastal" },
  { name: "Bradford", millage: 17.35, insuranceTier: "inland" },
  { name: "Brevard", millage: 15.6, insuranceTier: "coastal" },
  { name: "Broward", millage: 19.84, insuranceTier: "seCoast" },
  { name: "Calhoun", millage: 15.94, insuranceTier: "inland" },
  { name: "Charlotte", millage: 16.92, insuranceTier: "coastal" },
  { name: "Citrus", millage: 14.96, insuranceTier: "coastal" },
  { name: "Clay", millage: 15.05, insuranceTier: "metroInland" },
  { name: "Collier", millage: 11.05, insuranceTier: "coastal" },
  { name: "Columbia", millage: 15.38, insuranceTier: "inland" },
  { name: "DeSoto", millage: 19.15, insuranceTier: "inland" },
  { name: "Dixie", millage: 17.69, insuranceTier: "coastal" },
  { name: "Duval", millage: 17.86, insuranceTier: "coastal" },
  { name: "Escambia", millage: 17.54, insuranceTier: "coastal" },
  { name: "Flagler", millage: 14.65, insuranceTier: "coastal" },
  { name: "Franklin", millage: 18.21, insuranceTier: "coastal" },
  { name: "Gadsden", millage: 12.04, insuranceTier: "inland" },
  { name: "Gilchrist", millage: 16.49, insuranceTier: "inland" },
  { name: "Glades", millage: 16.84, insuranceTier: "inland" },
  { name: "Gulf", millage: 18.96, insuranceTier: "coastal" },
  { name: "Hamilton", millage: 14.47, insuranceTier: "inland" },
  { name: "Hardee", millage: 16.95, insuranceTier: "inland" },
  { name: "Hendry", millage: 15.77, insuranceTier: "inland" },
  { name: "Hernando", millage: 18.64, insuranceTier: "coastal" },
  { name: "Highlands", millage: 16.7, insuranceTier: "inland" },
  { name: "Hillsborough", millage: 15.73, insuranceTier: "metroInland" },
  { name: "Holmes", millage: 18.6, insuranceTier: "inland" },
  { name: "Indian River", millage: 15.44, insuranceTier: "coastal" },
  { name: "Jackson", millage: 14.57, insuranceTier: "inland" },
  { name: "Jefferson", millage: 13.64, insuranceTier: "inland" },
  { name: "Lafayette", millage: 14.95, insuranceTier: "inland" },
  { name: "Lake", millage: 16.65, insuranceTier: "metroInland" },
  { name: "Lee", millage: 15.97, insuranceTier: "coastal" },
  { name: "Leon", millage: 15.2, insuranceTier: "metroInland" },
  { name: "Levy", millage: 17.89, insuranceTier: "coastal" },
  { name: "Liberty", millage: 16.96, insuranceTier: "inland" },
  { name: "Madison", millage: 15.66, insuranceTier: "inland" },
  { name: "Manatee", millage: 17.29, insuranceTier: "coastal" },
  { name: "Marion", millage: 12.08, insuranceTier: "metroInland" },
  { name: "Martin", millage: 15.47, insuranceTier: "coastal" },
  { name: "Miami-Dade", millage: 17.59, insuranceTier: "seCoast" },
  { name: "Monroe", millage: 8.82, insuranceTier: "keys" },
  { name: "Nassau", millage: 13.28, insuranceTier: "coastal" },
  { name: "Okaloosa", millage: 12.89, insuranceTier: "coastal" },
  { name: "Okeechobee", millage: 15.35, insuranceTier: "inland" },
  { name: "Orange", millage: 16.67, insuranceTier: "metroInland" },
  { name: "Osceola", millage: 15.23, insuranceTier: "metroInland" },
  { name: "Palm Beach", millage: 18.72, insuranceTier: "seCoast" },
  { name: "Pasco", millage: 16.15, insuranceTier: "coastal" },
  { name: "Pinellas", millage: 19.39, insuranceTier: "coastal" },
  { name: "Polk", millage: 16.19, insuranceTier: "metroInland" },
  { name: "Putnam", millage: 16.89, insuranceTier: "inland" },
  { name: "Santa Rosa", millage: 12.81, insuranceTier: "coastal" },
  { name: "Sarasota", millage: 13.48, insuranceTier: "coastal" },
  { name: "Seminole", millage: 15.18, insuranceTier: "metroInland" },
  { name: "St. Johns", millage: 13.47, insuranceTier: "coastal" },
  { name: "St. Lucie", millage: 22.85, insuranceTier: "coastal" },
  { name: "Sumter", millage: 12.28, insuranceTier: "metroInland" },
  { name: "Suwannee", millage: 16.49, insuranceTier: "inland" },
  { name: "Taylor", millage: 15.83, insuranceTier: "coastal" },
  { name: "Union", millage: 17.23, insuranceTier: "inland" },
  { name: "Volusia", millage: 19.21, insuranceTier: "coastal" },
  { name: "Wakulla", millage: 14.22, insuranceTier: "coastal" },
  { name: "Walton", millage: 9.76, insuranceTier: "coastal" },
  { name: "Washington", millage: 15.35, insuranceTier: "inland" },
];
