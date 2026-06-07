import type {
  DpaAssistanceAmount,
  DpaAvailability,
  DpaCalculatorReadiness,
  DpaEligibility,
  DpaForgivenessYears,
  DpaGeography,
  DpaLimits,
  DpaLoanType,
  DpaProgramStatus,
  DpaRepaymentType,
  DpaSource,
  DpaSourceQuality,
  DpaStacking,
  FloridaDpaProgram,
} from "./types";

// Florida Down Payment Assistance Programs
// Extracted from the 105 Florida First-Time Home Buyer Grants & Programs guide.

interface DpaProgramSeed {
  id: string;
  name: string;
  counties: string[];
  amount: string;
  type: string;
  region: string;
  description: string;
  eligibilityUrl: string;
  programUrl: string | null;
}

const LAST_VERIFIED = "2026-03-24";
const VERIFIED_SOURCE_DATE = "2026-06-05";

export const FLORIDA_COUNTIES: string[] = [
  "Alachua",
  "Baker",
  "Bay",
  "Bradford",
  "Brevard",
  "Broward",
  "Calhoun",
  "Charlotte",
  "Citrus",
  "Clay",
  "Collier",
  "Columbia",
  "DeSoto",
  "Dixie",
  "Duval",
  "Escambia",
  "Flagler",
  "Franklin",
  "Gadsden",
  "Gilchrist",
  "Glades",
  "Gulf",
  "Hamilton",
  "Hardee",
  "Hendry",
  "Hernando",
  "Highlands",
  "Hillsborough",
  "Holmes",
  "Indian River",
  "Jackson",
  "Jefferson",
  "Lafayette",
  "Lake",
  "Lee",
  "Leon",
  "Levy",
  "Liberty",
  "Madison",
  "Manatee",
  "Marion",
  "Martin",
  "Miami-Dade",
  "Monroe",
  "Nassau",
  "Okaloosa",
  "Okeechobee",
  "Orange",
  "Osceola",
  "Palm Beach",
  "Pasco",
  "Pinellas",
  "Polk",
  "Putnam",
  "Santa Rosa",
  "Sarasota",
  "Seminole",
  "St. Johns",
  "St. Lucie",
  "Sumter",
  "Suwannee",
  "Taylor",
  "Union",
  "Volusia",
  "Wakulla",
  "Walton",
  "Washington",
];

const DPA_PROGRAM_SEEDS: DpaProgramSeed[] = [
  // ─── Statewide Programs ───────────────────────────────────────────────
  {
    id: "florida-hometown-heroes",
    name: "Florida Hometown Heroes Loan Program",
    counties: ["Statewide"],
    amount: "Up to $35,000",
    type: "Forgivable (0%, 5 yr)",
    region: "Statewide",
    description:
      "Up to 5% of your loan amount (max $35,000) as a 0% interest second mortgage, forgiven after 5 years if you stay in the home.",
    eligibilityUrl: "/check-hometown-heroes-eligibility",
    programUrl: "https://www.floridahometownheroesloanprogram.com/",
  },
  {
    id: "florida-assist",
    name: "Florida Assist Down Payment Loan (FL Assist)",
    counties: ["Statewide"],
    amount: "$10,000",
    type: "Deferred (0%)",
    region: "Statewide",
    description:
      "$10,000 at 0% interest with no monthly payments; repaid when you sell, refinance, or pay off your mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.floridaassistsecondmortgageprogram.com/",
  },
  {
    id: "florida-hlp",
    name: "Florida HLP Down Payment Loan (FL HLP)",
    counties: ["Statewide"],
    amount: "$12,500",
    type: "Second mortgage (3%)",
    region: "Statewide",
    description:
      "$12,500 second mortgage at 3% interest with a small monthly payment.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.floridahomeownershiploanprogram.com/",
  },
  {
    id: "florida-hfa-preferred-plus",
    name: "Florida HFA Preferred Plus Conventional Program",
    counties: ["Statewide"],
    amount: "3-5% of loan amount",
    type: "Second mortgage",
    region: "Statewide",
    description:
      "3%, 4%, or 5% of the loan amount as a repayable second mortgage with interest for conventional loan buyers.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.hfapreferredplusflorida.com/",
  },
  {
    id: "salute-our-soldiers",
    name: "Salute Our Soldiers Military Loan Program",
    counties: ["Statewide"],
    amount: "Up to $35,000",
    type: "Fixed-rate + DPA",
    region: "Statewide",
    description:
      "Special fixed-rate first mortgage with down payment and closing cost assistance for active-duty service members, veterans, and certain surviving spouses.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.saluteoursoldiersflorida.com/",
  },

  // ─── South Florida ────────────────────────────────────────────────────
  {
    id: "miami-dade-county-dpa",
    name: "Miami-Dade County Homebuyer Down Payment Assistance Program",
    counties: ["Miami-Dade"],
    amount: "Up to $35,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Interest-free, deferred-payment assistance (often up to around $35,000) to cover part of your down payment and closing costs in Miami-Dade County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.miamidadedownpaymentassistance.com/",
  },
  {
    id: "miami-dade-advocacy-trust",
    name: "Miami-Dade Advocacy Trust Grant ($28,500)",
    counties: ["Miami-Dade"],
    amount: "$28,500",
    type: "Forgivable (20 yr)",
    region: "South Florida",
    description:
      "Up to $28,500 for down payment and closing costs as a 0% interest, no-payment second mortgage fully forgiven after 20 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.miamidadeadvocacytrustgrant.com/",
  },
  {
    id: "miami-dade-hfa",
    name: "Miami-Dade HFA First-Time Homebuyer Program",
    counties: ["Miami-Dade"],
    amount: "3-5% of loan amount",
    type: "Built-in assistance",
    region: "South Florida",
    description:
      "Down payment help bundled with a Miami-Dade Housing Finance Authority first mortgage, typically a percentage of your loan amount that doesn't have to be repaid if guidelines are met.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.miamidadedownpaymentassistance.com/",
  },
  {
    id: "broward-county-hpa",
    name: "Broward County Homebuyer Purchase Assistance (HPA) Program",
    counties: ["Broward"],
    amount: "Up to $80,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "0% interest, deferred-payment second mortgage to cover down payment and closing costs for lower-income first-time buyers in Broward County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.browardcountyhomebuyerpurchaseassistanceprogram.com/",
  },
  {
    id: "broward-county-cdbg",
    name: "Broward County CDBG Purchase Assistance Program",
    counties: ["Broward"],
    amount: "Up to $40,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Extra down payment and closing-cost help funded with federal CDBG dollars, usually layered on top of Broward's main purchase-assistance options for very low- and low-income buyers.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.browardfirsttimehomebuyerprogram.com/",
  },
  {
    id: "fort-lauderdale-pa",
    name: "City of Fort Lauderdale Purchase Assistance Program",
    counties: ["Broward"],
    amount: "Up to $75,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Up to around $75,000 in 0% interest, deferred-payment assistance for down payment, closing costs, or principal reduction on a home in Fort Lauderdale.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.fortlauderdalepurchaseassistanceprogram.com/",
  },
  {
    id: "hallandale-beach-fthb",
    name: "City of Hallandale Beach First-Time Homebuyer Grant ($50,000+)",
    counties: ["Broward"],
    amount: "$50,000-$100,000",
    type: "Forgivable loan",
    region: "South Florida",
    description:
      "0% interest, forgivable loan from the Hallandale Beach CRA, typically $50,000-$100,000+ for down payment and closing costs with possible extra incentives for certain workforce buyers.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.hallandalefirsttimehomebuyerprogram.com/",
  },
  {
    id: "lauderhill-pa",
    name: "City of Lauderhill Purchase Assistance Program",
    counties: ["Broward"],
    amount: "Up to $75,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Up to about $75,000 in a deferred-payment second mortgage for down payment and closing costs on a home in Lauderhill.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.lauderhillfirsttimehomebuyerprogram.com/",
  },
  {
    id: "pembroke-pines-ship",
    name: "City of Pembroke Pines SHIP & HOME Purchase Assistance Programs",
    counties: ["Broward"],
    amount: "Up to $40,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "State SHIP and HOME funds used as a deferred-payment loan to cover part of your down payment and closing costs when you buy in Pembroke Pines.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.pembrokepinesfirsttimehomebuyerprogram.com/",
  },
  {
    id: "sunrise-fthb",
    name: "City of Sunrise First-Time Homebuyer Program",
    counties: ["Broward"],
    amount: "Up to $40,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "0% interest, deferred loan that can cover down payment, closing costs, and sometimes minor repairs when you purchase a home in Sunrise.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.sunrisefirsttimehomebuyerprogram.com/",
  },
  {
    id: "miramar-fthb",
    name: "City of Miramar First-Time Homebuyer Program",
    counties: ["Broward"],
    amount: "Up to $90,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Up to around $90,000 in 0% interest, deferred assistance for down payment and closing costs on a Miramar home.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.miramarfirsttimehomebuyerprogram.com/",
  },
  {
    id: "palm-beach-ship",
    name: "Palm Beach County SHIP Purchase Assistance Program",
    counties: ["Palm Beach"],
    amount: "Up to $100,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Up to about $100,000 as a 0% interest, long-term deferred loan for down payment, closing costs, and sometimes repair/rehab on your first home in Palm Beach County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.palmbeachfirsttimehomebuyerprogram.com/",
  },
  {
    id: "palm-beach-home",
    name: "Palm Beach County HOME First-Time Homebuyer Program",
    counties: ["Palm Beach"],
    amount: "Up to $100,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Up to about $100,000 in 0% interest, deferred assistance for down payment, closing costs, and acquisition using federal HOME funds aimed at lower-income buyers.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.palmbeachfirsttimehomebuyerprogram.com/",
  },
  {
    id: "marathon-fthb",
    name: "City of Marathon First Time Homebuyer Assistance Program",
    counties: ["Monroe"],
    amount: "Up to $20,000",
    type: "Forgivable (30 yr)",
    region: "South Florida",
    description:
      "Up to about $20,000 in down payment assistance as a 0% interest loan with no monthly payments and prorated forgiveness after a long-term residency period (often 30 years).",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.marathonhomebuyerassistanceprogram.com/",
  },
  {
    id: "monroe-county-ship",
    name: "Monroe County SHIP Homebuyer Assistance (Florida Keys)",
    counties: ["Monroe"],
    amount: "Up to $25,000",
    type: "Deferred (0%)",
    region: "South Florida",
    description:
      "Countywide SHIP assistance that can provide up to around $25,000 in 0% interest, deferred assistance for down payment and closing costs in the Florida Keys.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.monroecountydownpaymentassistanceprogram.com/",
  },

  // ─── Central Florida ──────────────────────────────────────────────────
  {
    id: "orlando-dpa",
    name: "City of Orlando Down Payment Assistance Program",
    counties: ["Orange"],
    amount: "Up to $45,000",
    type: "Forgivable (10 yr)",
    region: "Central Florida",
    description:
      "Up to $45,000 in 0% interest, forgivable help for down payment and closing costs on homes inside Orlando city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.orlandodownpaymentassistanceprogram.com/",
  },
  {
    id: "orange-county-dpa",
    name: "Orange County FL Down Payment Assistance Program",
    counties: ["Orange"],
    amount: "Up to $70,000",
    type: "Forgivable (10 yr)",
    region: "Central Florida",
    description:
      "0% interest, 10-year deferred loan up to $70,000 (very low income), $40,000 (low), or $10,000 (moderate) for down payment and closing costs.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.orangecountydownpaymentassistance.com/",
  },
  {
    id: "osceola-county-ship",
    name: "Osceola County SHIP Purchase Assistance",
    counties: ["Osceola"],
    amount: "Up to $80,000",
    type: "Deferred (0%)",
    region: "Central Florida",
    description:
      "Interest-free second mortgage up to $80,000 (very low income), $60,000 (low), or $40,000 (moderate) for down payment, closing costs, and principal reduction.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.osceolacountydownpaymentassistanceprogram.com/",
  },
  {
    id: "hands-of-central-florida",
    name: "HANDS of Central Florida Down Payment Assistance Program",
    counties: ["Orange", "Osceola", "Seminole"],
    amount: "Education only",
    type: "Counseling/cert",
    region: "Central Florida",
    description:
      "HUD-approved homebuyer education classes and one-on-one counseling that satisfy the education requirement for many Central Florida down payment assistance programs.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.handsofcentralfloridadownpaymentassistanceprogram.com/",
  },
  {
    id: "winter-haven-ship",
    name: "City of Winter Haven SHIP Purchase Assistance",
    counties: ["Polk"],
    amount: "Up to $60,000",
    type: "Forgivable (0%)",
    region: "Central Florida",
    description:
      "Up to $60,000 in SHIP-funded, 0% interest down payment and closing cost help for homes within Winter Haven city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.winterhavendownpaymentassistanceprogram.com/",
  },
  {
    id: "sumter-county-dpa",
    name: "Sumter County Down Payment Assistance Program",
    counties: ["Sumter"],
    amount: "Up to $20,000",
    type: "Deferred (0%)",
    region: "Central Florida",
    description:
      "Up to $20,000 as a 0% interest, deferred second mortgage for down payment and closing costs on a home in Sumter County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.sumtercountydownpaymentassistanceprogram.com/",
  },
  {
    id: "volusia-county-ha",
    name: "Volusia County Homebuyer Assistance Program",
    counties: ["Volusia"],
    amount: "Up to $75,000",
    type: "Forgivable (15 yr)",
    region: "Central Florida",
    description:
      "Up to $75,000 as a 0% interest, 15-year deferred/forgivable loan for down payment and closing costs anywhere in Volusia County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.volusiacountyhomebuyerassistance.com/",
  },
  {
    id: "brevard-county-ship",
    name: "Brevard County SHIP Purchase Assistance Program",
    counties: ["Brevard"],
    amount: "Up to $75,000",
    type: "Deferred (0%)",
    region: "Central Florida",
    description:
      "SHIP-funded 0% interest second mortgage that can reach roughly $60,000-$75,000 for the lowest-income households, covering down payment, closing costs, and sometimes repairs.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.brevardcountydownpaymentassistanceprogram.com/",
  },
  {
    id: "melbourne-pa",
    name: "City of Melbourne Purchase Assistance Program",
    counties: ["Brevard"],
    amount: "Up to $40,000",
    type: "Deferred (0%)",
    region: "Central Florida",
    description:
      "City of Melbourne SHIP funds can provide around $40,000+ in 0% interest assistance for down payment, closing costs, and sometimes minor repairs on homes inside city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.melbournefirsttimehomebuyerprogram.com/",
  },
  {
    id: "palm-bay-dpa",
    name: "City of Palm Bay Down Payment Assistance Program",
    counties: ["Brevard"],
    amount: "Up to $40,000",
    type: "Deferred (0%)",
    region: "Central Florida",
    description:
      "Palm Bay's SHIP-funded program offers a 0% interest, deferred second mortgage covering most or all of your minimum down payment and some closing costs.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.palmbaydownpaymentassistanceprogram.com/",
  },
  {
    id: "titusville-fthb",
    name: "City of Titusville First-Time Homebuyer Program",
    counties: ["Brevard"],
    amount: "Up to $70,000",
    type: "Forgivable (5-15 yr)",
    region: "Central Florida",
    description:
      "Up to $70,000 in assistance as a 0% interest, deferred loan for down payment, closing costs, and/or interest rate buy-down on homes within Titusville city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.titusvillefirsttimehomebuyerprogram.com/",
  },
  {
    id: "cocoa-pa",
    name: "City of Cocoa Purchase Assistance Program",
    counties: ["Brevard"],
    amount: "Up to $30,000",
    type: "Forgivable (0%)",
    region: "Central Florida",
    description:
      "Forgivable SHIP-funded purchase assistance for very low- and low-income first-time buyers in Cocoa, covering down payment, closing costs, and sometimes needed repairs.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.cityofcocoapurchaseassistanceprogram.com/",
  },

  // ─── Tampa Bay & West Central ─────────────────────────────────────────
  {
    id: "tampa-dare-to-own",
    name: 'City of Tampa "Dare to Own the Dream" Program',
    counties: ["Hillsborough"],
    amount: "Up to $50,000",
    type: "Forgivable (20 yr)",
    region: "Tampa Bay & West Central",
    description:
      'Up to $50,000 in 0% interest down payment and closing cost assistance as a "silent second" loan, fully forgivable after 20 years of continuous owner-occupancy.',
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.tampadownpaymentassistanceprogram.com/",
  },
  {
    id: "hillsborough-home-sweet-home",
    name: "Hillsborough Home Sweet Home Program",
    counties: ["Hillsborough"],
    amount: "Up to $10,000",
    type: "Deferred (0%, 30 yr)",
    region: "Tampa Bay & West Central",
    description:
      "Up to $10,000 in 0% interest down payment and closing cost assistance as a 30-year deferred second mortgage with no monthly payments.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.homesweethomeprogram.com/",
  },
  {
    id: "st-petersburg-dpa",
    name: "City of St. Petersburg Housing Down Payment Assistance Program",
    counties: ["Pinellas"],
    amount: "Up to $75,000",
    type: "Deferred/forgivable",
    region: "Tampa Bay & West Central",
    description:
      "Up to $75,000 toward down payment and closing costs for eligible first-time buyers within St. Petersburg city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.stpetersburghousingdownpaymentassistanceprogram.com/",
  },
  {
    id: "pinellas-county-hfa",
    name: "Pinellas County Housing Finance Authority First-Time Homebuyer Program",
    counties: ["Pinellas"],
    amount: "Up to $7,500",
    type: "Deferred (0%)",
    region: "Tampa Bay & West Central",
    description:
      "Up to $7,500 in 0% interest, non-amortizing down payment and closing cost assistance through the Home Key Plus second mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.pinellascountyfirsttimehomebuyerprogram.com/",
  },
  {
    id: "pasco-county-dpa",
    name: "Pasco County Down Payment Assistance Program",
    counties: ["Pasco"],
    amount: "Up to $65,000",
    type: "Deferred (0%)",
    region: "Tampa Bay & West Central",
    description:
      "Up to $65,000 in 0% interest assistance as a long-term second mortgage, with the maximum amount based on your income tier.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.pascocountydownpaymentassistanceprogram.com/",
  },
  {
    id: "hernando-county-ship",
    name: "Hernando County SHIP Down Payment Assistance Program",
    counties: ["Hernando"],
    amount: "Up to $20,000",
    type: "Deferred (0%)",
    region: "Tampa Bay & West Central",
    description:
      "Typically up to $10,000 for down payment and closing costs, with an option for additional rehab funds (often up to about $20,000) as a 0% interest subordinate loan.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.hernandocountyshipdownpaymentassistanceprogram.com/",
  },
  {
    id: "manatee-county-hfa",
    name: "Manatee County HFA Homeownership Program",
    counties: ["Manatee"],
    amount: "Up to $15,000",
    type: "Deferred (0%)",
    region: "Tampa Bay & West Central",
    description:
      "Down payment and closing cost assistance (commonly up to around $15,000) paired with a 30-year fixed-rate first mortgage as a 0% deferred second mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.manateecountyhfahomeownershipprogram.com/",
  },
  {
    id: "sarasota-own-a-home",
    name: 'Sarasota County "Own a Home Opportunity" Program',
    counties: ["Sarasota"],
    amount: "Up to $10,500",
    type: "Deferred (0%, 30 yr)",
    region: "Tampa Bay & West Central",
    description:
      "Up to $10,500 in 0% interest down payment and closing cost assistance as a 30-year deferred second mortgage with no monthly payments.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.sarasotacountydownpaymentassistanceprogram.com/",
  },

  // ─── Southwest Florida ────────────────────────────────────────────────
  {
    id: "lee-county-firstplus",
    name: "Lee County FirstPlus Down Payment Assistance Program",
    counties: ["Lee"],
    amount: "Up to $10,000",
    type: "Deferred (0%)",
    region: "Southwest Florida",
    description:
      "Up to $10,000 in down payment and closing cost assistance as a 0% interest, deferred second mortgage for FHA, VA, or USDA loan users in Lee County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.leecountydownpaymentassistanceprogram.com/firstplus-second-dpa",
  },
  {
    id: "lee-county-cdbg",
    name: "Lee County CDBG Homeownership Assistance Program",
    counties: ["Lee"],
    amount: "Up to $75,000",
    type: "Forgivable (5 yr)",
    region: "Southwest Florida",
    description:
      "Up to 50% of the lender-required down payment, plus extra subsidy if needed, capped at $75,000, as a 0% interest second mortgage forgiven over 5 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.leecountydownpaymentassistanceprogram.com/cdbg-assistance",
  },
  {
    id: "lee-county-home",
    name: "Lee County HOME Down Payment Assistance Program",
    counties: ["Lee"],
    amount: "Up to $34,000",
    type: "Forgivable (10 yr)",
    region: "Southwest Florida",
    description:
      "Up to 10% of the purchase price (capped at about $34,000) as a 0% interest second mortgage that forgives 10% per year over 10 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.leecountydownpaymentassistanceprogram.com/home-dpa",
  },
  {
    id: "collier-county-ship",
    name: "Collier County SHIP Purchase Assistance Program",
    counties: ["Collier"],
    amount: "Up to $75,000",
    type: "Deferred (0%)",
    region: "Southwest Florida",
    description:
      "Interest-free, deferred loan up to $75,000 (amount based on income level) to cover down payment and closing costs with no monthly payments.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.colliercountydownpaymentassistanceprogram.com/",
  },
  {
    id: "charlotte-county-ship",
    name: "Charlotte County SHIP Homebuyer Assistance Program",
    counties: ["Charlotte"],
    amount: "Up to $75,000",
    type: "Deferred (0%)",
    region: "Southwest Florida",
    description:
      "Up to 10% of the purchase price (up to about a $75,000 lifetime cap) as a 0% interest, deferred second mortgage for down payment, closing costs, and/or principal reduction.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.charlottecountydownpaymentassistanceprogram.com/",
  },

  // ─── North Central Florida ────────────────────────────────────────────
  {
    id: "marion-county-ship",
    name: "Marion County SHIP Purchase Assistance Program",
    counties: ["Marion"],
    amount: "Up to $10,000",
    type: "Deferred (0%)",
    region: "North Central Florida",
    description:
      "Up to about $10,000 toward down payment and closing costs for income-eligible buyers in Marion County as a 0% interest, deferred second mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.marioncountyfirsttimehomebuyerprogram.com/",
  },
  {
    id: "marion-county-pa",
    name: "Marion County Homebuyer Purchase Assistance",
    counties: ["Marion"],
    amount: "Up to $15,000",
    type: "Deferred (0%)",
    region: "North Central Florida",
    description:
      "Zero-interest second mortgage that covers part of your down payment and closing costs when buying in Marion County (outside Ocala city limits).",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.marioncountyfirsttimehomebuyerprogram.com/",
  },
  {
    id: "gainesville-dpa",
    name: "City of Gainesville Down Payment Assistance Program",
    counties: ["Alachua"],
    amount: "Up to $30,000",
    type: "Forgivable (10 yr)",
    region: "North Central Florida",
    description:
      "Up to $30,000 toward down payment and closing costs on a home inside Gainesville city limits, forgiven after about 10 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.gainesvilledownpaymentassistance.com/",
  },
  {
    id: "alachua-county-ship",
    name: "Alachua County SHIP Program",
    counties: ["Alachua"],
    amount: "Up to $15,000",
    type: "Deferred (0%)",
    region: "North Central Florida",
    description:
      "SHIP funds help first-time buyers with part of the down payment and closing costs on a new or existing home in Alachua County as a deferred second mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.alachuacountydownpaymentassistanceprogram.com/",
  },
  {
    id: "levy-county-ship",
    name: "Levy County SHIP Purchase Assistance",
    counties: ["Levy"],
    amount: "Up to $15,000",
    type: "Deferred (0%)",
    region: "North Central Florida",
    description:
      "0% interest, deferred-payment loan that can cover down payment and closing costs for income-eligible homebuyers in Levy County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.levycountydownpaymentassistanceprogram.com/",
  },
  {
    id: "columbia-county-ship",
    name: "Columbia County SHIP Purchase Assistance (SREC)",
    counties: ["Columbia"],
    amount: "Up to $10,000",
    type: "Deferred (0%)",
    region: "North Central Florida",
    description:
      "SHIP loans through Suwannee River Economic Council help with down payment and closing costs for qualified buyers in Columbia County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.columbiacountydownpaymentassistanceprogram.com/",
  },

  // ─── Northeast Florida ────────────────────────────────────────────────
  {
    id: "jacksonville-dpa",
    name: "City of Jacksonville Down-Payment Assistance Home Ownership Program",
    counties: ["Duval"],
    amount: "Up to $25,000",
    type: "Forgivable (3 yr)",
    region: "Northeast Florida",
    description:
      "Covers up to 75% of your required down payment and closing costs (max $25,000) on a home up to $335,000 in Jacksonville/Duval County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.jacksonvilledownpaymentassistancehomeownershipprogram.com/",
  },
  {
    id: "st-johns-county-ship",
    name: "St. Johns County SHIP Down Payment Assistance",
    counties: ["St. Johns"],
    amount: "Up to $100,000",
    type: "Forgivable (15 yr)",
    region: "Northeast Florida",
    description:
      "Up to $100,000 in 0% interest assistance for down payment, closing costs, principal reduction, and minor repairs via a 15-year deferred second mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.stjohnscountyfirsttimehomebuyerprogram.com/",
  },
  {
    id: "clay-county-ship",
    name: "Clay County SHIP Purchase Assistance",
    counties: ["Clay"],
    amount: "Up to $20,000",
    type: "Deferred (0%, 30 yr)",
    region: "Northeast Florida",
    description:
      "Up to $20,000 in down payment and closing cost assistance as a 0% interest, 30-year deferred second mortgage with no monthly payment.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.claycountydownpaymentassistanceprogram.com/",
  },

  // ─── Panhandle ────────────────────────────────────────────────────────
  {
    id: "pensacola-arpa",
    name: "City of Pensacola ARPA Down Payment Assistance Program",
    counties: ["Escambia"],
    amount: "Up to $30,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Up to $30,000 for down payment and closing costs as a 0% interest, deferred second mortgage with no monthly payments for buyers within Pensacola city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.pensacolaarpadownpaymentassistanceprogram.com/",
  },
  {
    id: "pensacola-escambia-ship",
    name: "SHIP First Time Homebuyers Program - Pensacola & Escambia County",
    counties: ["Escambia"],
    amount: "Up to $45,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Up to $45,000 in combined down payment and closing cost assistance as a 0% interest, deferred-payment second mortgage for buyers in Pensacola or Escambia County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.pensacolahousingassistance.com/",
  },
  {
    id: "escambia-county-hfa",
    name: "Escambia County HFA Homeownership Program",
    counties: ["Escambia"],
    amount: "Up to $10,000",
    type: "Deferred (0%, 30 yr)",
    region: "Panhandle",
    description:
      "Up to $10,000 in down payment and closing cost assistance as a 0% interest, non-amortizing 30-year deferred second mortgage paired with a fixed-rate first mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.escambiacountyhfahomeownershipprogram.com/",
  },
  {
    id: "okaloosa-county-ship",
    name: "Okaloosa County SHIP Purchase Assistance",
    counties: ["Okaloosa"],
    amount: "Up to $20,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Zero-interest SHIP loan that can cover a significant share of your down payment and closing costs for income-qualified first-time buyers in Okaloosa County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.okaloosacountydownpaymentassistanceprogram.com/",
  },
  {
    id: "santa-rosa-county-ship",
    name: "Santa Rosa County SHIP First-Time Homebuyer Program",
    counties: ["Santa Rosa"],
    amount: "Up to $35,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Zero-interest, deferred-payment loan for down payment and closing costs, with assistance amounts that can reach roughly $35,000 depending on income and need.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.santarosacountydownpaymentassistanceprogram.com/",
  },
  {
    id: "panama-city-fthb",
    name: "City of Panama City First-Time Homebuyers Program",
    counties: ["Bay"],
    amount: "Up to $50,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Up to $50,000 in assistance (typically $45,000 for down payment and up to $5,000 for closing costs) as a 0% interest, deferred second mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.panamacityfirsttimehomebuyersprogram.com/",
  },
  {
    id: "bay-county-ship",
    name: "Bay County SHIP First-Time Homebuyer Program",
    counties: ["Bay"],
    amount: "Up to $20,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "SHIP-funded, zero-interest deferred loan that helps with down payment, reasonable closing costs, and sometimes minor repairs for first-time buyers in Bay County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.baycountyshipfirsttimehomebuyerprogram.com/",
  },
  {
    id: "tallahassee-tlc",
    name: "Tallahassee Lenders' Consortium (TLC) Down Payment Assistance",
    counties: ["Leon"],
    amount: "Up to 20% of purchase price",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Down payment and closing cost assistance up to 20% of the home's purchase price, typically as a deferred, no-interest subordinate loan for buyers in Tallahassee.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.tallahasseedownpaymentassistance.com/",
  },
  {
    id: "gadsden-county-hfa",
    name: "Gadsden County HFA Down Payment Assistance",
    counties: ["Gadsden"],
    amount: "Up to $10,000",
    type: "Deferred (0%, 30 yr)",
    region: "Panhandle",
    description:
      "Up to $10,000 in down payment and closing cost assistance as a 0% interest, non-amortizing 30-year deferred second mortgage through the local HFA.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.gadsdencountydownpaymentassistanceprogram.com/",
  },

  // ─── Treasure Coast ───────────────────────────────────────────────────
  {
    id: "st-lucie-county-grant",
    name: "St. Lucie County Attainable Housing Grant Program",
    counties: ["St. Lucie"],
    amount: "$2,500 grant",
    type: "Grant (no repay)",
    region: "Treasure Coast",
    description:
      "Up to $2,500 in grant funds (no repayment) applied toward your down payment and/or closing costs at closing for low-income St. Lucie County buyers.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.stluciemartincountyhomepurchaseassistance.com/st-lucie-attainable-housing-grant",
  },
  {
    id: "martin-county-ship",
    name: "Martin County SHIP & HOME Housing Assistance Programs",
    counties: ["Martin"],
    amount: "Up to $50,000",
    type: "Deferred (0%)",
    region: "Treasure Coast",
    description:
      "0% interest, deferred loans (often up to about $50,000) for down payment, closing costs, and other purchase-related expenses using SHIP and HOME consortium funds.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.martincountyhousingassistance.com/",
  },
  {
    id: "port-st-lucie-ha",
    name: "City of Port St. Lucie Homebuyer Assistance Program",
    counties: ["St. Lucie"],
    amount: "Up to $100,000",
    type: "Land trust subsidy",
    region: "Treasure Coast",
    description:
      "Up to $100,000 in assistance through a Community Land Trust partnership to make homes permanently affordable for workforce buyers in Port St. Lucie.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.portstluciedownpaymentassistanceprogram.com/",
  },
  {
    id: "fort-pierce-hpa",
    name: "City of Fort Pierce Home Purchase Assistance Program",
    counties: ["St. Lucie"],
    amount: "Up to $15,000",
    type: "Deferred (0%)",
    region: "Treasure Coast",
    description:
      "Up to $15,000 as a 0% interest, deferred loan for down payment and closing costs for first-time buyers within Fort Pierce city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.fortpiercedownpaymentassistanceprogram.com/",
  },
  {
    id: "indian-river-county-hfa",
    name: "Indian River County HFA Down Payment Assistance",
    counties: ["Indian River"],
    amount: "Up to $10,000",
    type: "Deferred (0%, 30 yr)",
    region: "Treasure Coast",
    description:
      "Up to $10,000 as a 0% interest, 30-year deferred second mortgage with no monthly payments for buyers in Indian River County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.indianrivercountydownpaymentassistanceprogram.com/",
  },
  {
    id: "st-lucie-martin-home-consortium",
    name: "St. Lucie & Martin County HOME Consortium Purchase Assistance",
    counties: ["St. Lucie", "Martin"],
    amount: "Up to $40,000",
    type: "Gap financing (0%)",
    region: "Treasure Coast",
    description:
      'Need-based "gap" financing to keep your monthly payment affordable, with the amount determined by how much is needed to reach roughly 30% of income for housing.',
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.stluciemartincountyhomepurchaseassistance.com/",
  },
  {
    id: "indian-river-habitat",
    name: "Indian River Habitat for Humanity Homeownership Program",
    counties: ["Indian River"],
    amount: "Full home subsidy",
    type: "0% mortgage",
    region: "Treasure Coast",
    description:
      "Deeply subsidized home price plus a 0% interest mortgage for low-income families in Indian River County willing to contribute sweat equity.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.indianrivercountydownpaymentassistanceprogram.com/indian-river-habitat-for-humanity",
  },

  // ─── NEW: Statewide Programs ────────────────────────────────────────
  {
    id: "florida-hfa-preferred-grant",
    name: "Florida HFA Preferred Grant (TBA) Program",
    counties: ["Statewide"],
    amount: "3-5% of loan amount",
    type: "Forgivable (0%, 5 yr)",
    region: "Statewide",
    description:
      "3%, 4%, or 5% of the loan amount as a forgivable 0% interest second mortgage, forgiven at 20% per year over 5 years. Paired with a Fannie Mae HFA Preferred conventional first mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.ehousingplus.com/homeownership/florida-housing-finance-corporation/program-highlights/",
  },
  {
    id: "florida-hfa-advantage-plus",
    name: "Florida HFA Advantage Plus Program",
    counties: ["Statewide"],
    amount: "3-5% of loan amount",
    type: "Forgivable (0%, 5 yr)",
    region: "Statewide",
    description:
      "3%, 4%, or 5% of the loan amount as a forgivable 0% interest second mortgage, forgiven at 20% per year over 5 years. The Freddie Mac counterpart to HFA Preferred, paired with an HFA Advantage first mortgage.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products/hfa-advantage",
  },

  // ─── NEW: South Florida — Additional City Programs ──────────────────
  {
    id: "north-miami-fthb",
    name: "City of North Miami First-Time Homebuyer Program",
    counties: ["Miami-Dade"],
    amount: "Up to $80,000",
    type: "Forgivable (0%, 7-15 yr)",
    region: "South Florida",
    description:
      "Up to $40,000 SHIP (forgiven after 7 years) plus up to $40,000 HOME (forgiven after 15 years) for down payment and closing costs on a home in North Miami.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.northmiamifl.gov/243/First-Time-Homebuyer",
  },
  {
    id: "miami-beach-fthb",
    name: "City of Miami Beach First-Time Homebuyer Program",
    counties: ["Miami-Dade"],
    amount: "$40,000-$150,000",
    type: "Forgivable (15 yr)",
    region: "South Florida",
    description:
      "SHIP-funded assistance scaled by income, from $40,000 to $150,000 as a deferred forgivable loan. Fully forgiven after 15 years of continuous owner-occupancy.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.miamibeachfl.gov/city-hall/housing-and-community-development/housing-and-community/housing-services/firsttimehomebuyer/",
  },
  {
    id: "miami-gardens-pa",
    name: "City of Miami Gardens Purchase Assistance Program",
    counties: ["Miami-Dade"],
    amount: "Up to $20,000",
    type: "Deferred (SHIP)",
    region: "South Florida",
    description:
      "Up to $20,000 in SHIP-funded down payment and closing cost assistance for first-time homebuyers purchasing within Miami Gardens city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://miamigardens-fl.gov/919/Purchase-Assistance-Program",
  },
  {
    id: "hollywood-fthb",
    name: "City of Hollywood First-Time Homebuyer Purchase Assistance Program",
    counties: ["Broward"],
    amount: "Up to $50,000",
    type: "Deferred (0%, 15 yr)",
    region: "South Florida",
    description:
      "Up to $50,000 in 0% interest, 15-year deferred assistance for down payment, closing costs, and principal reduction in Hollywood's Neighborhood Pride areas.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.broward.org/Housing/Pages/Hollywood%20Homebuyer%20Purchase%20Assistance%20Program.aspx",
  },
  {
    id: "pompano-beach-fthb",
    name: "City of Pompano Beach First-Time Home Buyer Program",
    counties: ["Broward"],
    amount: "Up to $50,000",
    type: "Deferred/grant (20 yr)",
    region: "South Florida",
    description:
      "20-year deferred loan at 0% interest that reduces by 20% per year in the last 5 years, then converts to a grant. Gap financing for buyers in Pompano Beach.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.pompanobeachfl.gov/residents/housing-and-urban-improvement/ohui-programs/first-time-home-buyer",
  },
  {
    id: "coral-springs-pa",
    name: "City of Coral Springs Purchase Assistance Program",
    counties: ["Broward"],
    amount: "Up to $80,000",
    type: "Forgivable (0%, 15 yr)",
    region: "South Florida",
    description:
      "Zero-interest deferred forgivable loan up to $80,000 for income-eligible first-time homebuyers purchasing in Coral Springs. Forgiven after 15 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.coralsprings.gov/Government/Departments/Community-Development/Housing-Assistance/Purchase-Assistance",
  },
  {
    id: "davie-ship-fthb",
    name: "Town of Davie SHIP First-Time Homebuyer Program",
    counties: ["Broward"],
    amount: "Up to $90,000",
    type: "Deferred (0%, 10 yr)",
    region: "South Florida",
    description:
      "Up to $90,000 in 0% interest, 10-year deferred assistance covering closing costs, first mortgage reduction, and down payment for owner-occupied housing in Davie.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.davie-fl.gov/606/Housing-and-Community-Affairs",
  },
  {
    id: "deerfield-beach-pa",
    name: "City of Deerfield Beach Purchase Assistance Program",
    counties: ["Broward"],
    amount: "Up to $70,000",
    type: "Deferred/grant (0%)",
    region: "South Florida",
    description:
      "0% interest deferred second loan up to $70,000 for down payment, closing costs, and mortgage buy-down that reverts to a grant if conditions are met.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.deerfield-beach.com/1509/Housing-Grants",
  },
  {
    id: "margate-hpa-home",
    name: "City of Margate Homebuyer Purchase Assistance (HPA + HOME)",
    counties: ["Broward"],
    amount: "Up to $50,000",
    type: "Deferred (0%, 15 yr)",
    region: "South Florida",
    description:
      "Layered assistance using Broward County HPA funds and HOME Program funds as a 0% interest second mortgage for first-time homebuyers in Margate.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.margatefl.com/627/Homebuyer-Purchase-Assistance",
  },
  {
    id: "west-palm-beach-fthb",
    name: "City of West Palm Beach First-Time Homebuyers Program",
    counties: ["Palm Beach"],
    amount: "Up to $100,000",
    type: "Deferred (0%, 30 yr)",
    region: "South Florida",
    description:
      "Zero-interest deferred loan up to $100,000 forgiven after 30 years for low-to-moderate income first-time buyers purchasing within West Palm Beach city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "boynton-beach-ship",
    name: "City of Boynton Beach SHIP Purchase Assistance Program",
    counties: ["Palm Beach"],
    amount: "Up to $100,000",
    type: "Deferred (0%, 15-30 yr)",
    region: "South Florida",
    description:
      "0% interest deferred loan for acquisition, down payment, and closing costs, forgiven after 15-30 years for income-eligible first-time buyers in Boynton Beach.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "delray-beach-ship",
    name: "City of Delray Beach SHIP Purchase Assistance Program",
    counties: ["Palm Beach"],
    amount: "Up to $75,000",
    type: "Forgivable (0%, 10-15 yr)",
    region: "South Florida",
    description:
      "0% interest deferred loan up to $75,000 for down payment and closing costs, forgiven after 10-15 years depending on amount. Buyer must contribute 2% of purchase price.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "boca-raton-ship",
    name: "City of Boca Raton SHIP Purchase Assistance Program",
    counties: ["Palm Beach"],
    amount: "Up to $190,000",
    type: "Deferred (0%, 20 yr)",
    region: "South Florida",
    description:
      "One of the most generous city-level programs in Florida — up to $190,000 in zero-interest deferred assistance for down payment, principal reduction, closing costs, and minor rehabilitation. Forgiven after 20 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.myboca.us/396/SHIP-Purchase-Assistance-Programs",
  },
  {
    id: "jupiter-dpa",
    name: "Town of Jupiter Down Payment Assistance Program",
    counties: ["Palm Beach"],
    amount: "Up to $10,000",
    type: "Grant (HUD)",
    region: "South Florida",
    description:
      "HUD-funded grant for closing cost and down payment assistance for low-to-moderate income homebuyers purchasing in the Town of Jupiter.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.jupiter.fl.us/515/Help-Assistance-Programs",
  },
  {
    id: "palm-beach-match-pilot",
    name: "Palm Beach County Homebuyer Match Pilot Program",
    counties: ["Palm Beach"],
    amount: "Up to $50,000",
    type: "Match program",
    region: "South Florida",
    description:
      "Brand new 2026 pilot — the county matches your cash contribution dollar-for-dollar up to $50,000. Buyer contributes minimum $10,000. Phase 1 has $2M in funding for 60 participants.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://discover.pbc.gov/HED/Pages/Homebuyer-Match-Pilot-Program-.aspx",
  },
  {
    id: "riviera-beach-renaissance",
    name: "City of Riviera Beach Renaissance Homeownership Program",
    counties: ["Palm Beach"],
    amount: "Up to $35,000",
    type: "Gap financing",
    region: "South Florida",
    description:
      "Down payment, closing cost, and gap financing through the Riviera Beach CRA for low-to-moderate income first-time homebuyers. Must participate in Homebuyers Club.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://rivierabeachcdc.org/riviera-beach-renaissance/",
  },

  // ─── NEW: Tampa Bay & West Central — Additional City Programs ───────
  {
    id: "clearwater-hpa",
    name: "City of Clearwater Home Purchase Assistance Program",
    counties: ["Pinellas"],
    amount: "Up to $75,000",
    type: "Mixed deferred/amortized",
    region: "Tampa Bay & West Central",
    description:
      "HOME and SHIP funded — half amortized over 20 years after a 5-year deferral, half deferred/forgiven. For income-eligible first-time homebuyers in Clearwater city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "largo-sold-on-largo",
    name: 'City of Largo "Sold on Largo" Downpayment Assistance Program',
    counties: ["Pinellas"],
    amount: "Up to $55,700",
    type: "Deferred (0%, 20 yr)",
    region: "Tampa Bay & West Central",
    description:
      "0% deferred interest loan up to $55,700 with payments deferred 20 years for income-eligible first-time buyers (at or below 80% AMI) purchasing in Largo city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.largo.com/services/residents/housing_assistance/resources.php",
  },

  // ─── NEW: Central Florida — Additional Programs ─────────────────────
  {
    id: "seminole-county-ship",
    name: "Seminole County SHIP Purchase Assistance Program",
    counties: ["Seminole"],
    amount: "Up to $145,000",
    type: "Deferred",
    region: "Central Florida",
    description:
      "Substantial SHIP-funded purchase assistance for income-eligible first-time homebuyers (at or below 120% AMI) purchasing in Seminole County. Administered through HELP CDC.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },

  // ─── NEW: Northeast Florida — Additional Programs ───────────────────
  {
    id: "jaxhfa-home-sweet-home",
    name: "Jacksonville Housing Finance Authority (JAXHFA) Home Sweet Home Program",
    counties: ["Duval"],
    amount: "Up to $10,000",
    type: "Deferred (0%, 30 yr)",
    region: "Northeast Florida",
    description:
      "0% interest, 30-year deferred second mortgage paired with a JAXHFA fixed-rate first mortgage. Separate from the City of Jacksonville DPA program. FICO minimum 640.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "jacksonville-h2h",
    name: "Head Start to HOME Ownership (H2H) Program — Jacksonville",
    counties: ["Duval"],
    amount: "Up to $50,000",
    type: "Deferred (0%, 10 yr)",
    region: "Northeast Florida",
    description:
      "HOME-funded 0% interest second/third mortgage deferred 10 years for down payment and closing costs. Buyer minimum $500 down plus home inspection cost.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "nassau-county-ship",
    name: "Nassau County SHIP Purchase Assistance Program",
    counties: ["Nassau"],
    amount: "Up to $102,747",
    type: "Forgivable (0%, 10 yr)",
    region: "Northeast Florida",
    description:
      "0% interest deferred loan forgiven at 10% per year over 10 years. Assistance up to 30% of purchase price (max ~$102,747 for very low income). Covers down payment, closing costs, and principal reduction.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
  },
  {
    id: "flagler-county-ship",
    name: "Flagler County / City of Palm Coast Joint SHIP Purchase Assistance",
    counties: ["Flagler"],
    amount: "Up to $50,000",
    type: "Deferred (SHIP)",
    region: "Northeast Florida",
    description:
      "Joint county and City of Palm Coast SHIP program for down payment, closing costs, and essential repairs on existing homes, townhomes, condos, and manufactured homes in Flagler County.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
  },
  {
    id: "palatka-dpa-grant",
    name: "City of Palatka Down Payment Assistance Program",
    counties: ["Putnam"],
    amount: "$20,000 grant",
    type: "Grant (no repay)",
    region: "Northeast Florida",
    description:
      "$20,000 one-time grant (no repayment) for Palatka residents at or below 80% AMI. Must complete 8-hour HUD counseling class, obtain mortgage preapproval, and purchase within city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "lake-county-ship",
    name: "Lake County SHIP Home Purchase Program",
    counties: ["Lake"],
    amount: "Varies by income",
    type: "Forgivable (0%, 15 yr)",
    region: "Central Florida",
    description:
      "SHIP-funded 15-year deferred second mortgage forgiven after 15 years of occupancy. Covers down payment, closing costs, principal buy-down, and up to $5,000 in repairs. Purchase price cap $180,000.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://lakecountyfl.gov/housing/home-ownership-assistance",
  },

  // ─── NEW: Panhandle — Uncovered Counties ────────────────────────────
  {
    id: "gulf-county-ship",
    name: "Gulf County SHIP Purchase Assistance Program",
    counties: ["Gulf"],
    amount: "Up to $50,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "Up to $50,000 (not to exceed 50% of purchase price) in 0% interest deferred assistance for first-time homebuyers in Gulf County. Max purchase price $255,000.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.gulfcounty-fl.gov/county_government/s_h_i_p",
  },
  {
    id: "jackson-county-ship",
    name: "Jackson County SHIP Purchase Assistance Program",
    counties: ["Jackson"],
    amount: "Up to $20,000",
    type: "Forgivable (0%, 10 yr)",
    region: "Panhandle",
    description:
      "Zero-interest second mortgage up to $20,000 for down payment, closing costs, and principal buy-down, forgiven at 10% per year over 10 years.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://jacksoncountyfl.gov/services/community-development/housing-grants-office/",
  },
  {
    id: "madison-county-ship",
    name: "Madison County SHIP Purchase Assistance Program",
    counties: ["Madison"],
    amount: "Up to $25,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "0% interest deferred assistance up to $25,000 for very low/low income or $15,000 for moderate income. Cannot exceed 50% of purchase price. Administered by Suwannee River Economic Council.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "wakulla-county-ship",
    name: "Wakulla County SHIP Homebuyer Purchase Assistance",
    counties: ["Wakulla"],
    amount: "Up to $15,000",
    type: "Deferred (0%)",
    region: "Panhandle",
    description:
      "0% interest deferred down payment assistance and principal reduction for first-time homebuyers in Wakulla County. Awarded on first-come, first-ready-to-close basis.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },
  {
    id: "walton-county-ship",
    name: "Walton County SHIP First Time Homebuyer Assistance",
    counties: ["Walton"],
    amount: "Up to $50,000",
    type: "Deferred/forgivable",
    region: "Panhandle",
    description:
      "Deferred/forgivable loan for down payment and closing costs through the Emerald Coast Regional Council, with up to $50,000 available through Habitat for Humanity partnership.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: null,
  },

  // ─── NEW: South/Southwest Florida — Uncovered Counties ──────────────
  {
    id: "desoto-county-ship",
    name: "DeSoto County SHIP Purchase Assistance Program",
    counties: ["DeSoto"],
    amount: "Up to $20,000",
    type: "Deferred (0%)",
    region: "Southwest Florida",
    description:
      "0% non-amortizing deferred mortgage up to $20,000 for very low/low income or $15,000 for moderate income. Max purchase price $230,000. Due and payable at transfer of ownership.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.desotobocc.com/242",
  },
  {
    id: "glades-county-ship",
    name: "Glades County SHIP Purchase Assistance Program",
    counties: ["Glades"],
    amount: "Up to $100,000",
    type: "Forgivable (0%)",
    region: "Southwest Florida",
    description:
      "Interest-free deferred loan up to $100,000 per applicant, forgiven at end of term if borrower stays in compliance. Very limited funding (~3-4 applicants per year).",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.myglades.com/departments/ship_department.php",
  },
  {
    id: "highlands-county-ship",
    name: "Highlands County SHIP Purchase Assistance Program",
    counties: ["Highlands"],
    amount: "Up to $12,500",
    type: "Deferred (0%)",
    region: "Southwest Florida",
    description:
      "0% interest deferred loan for down payment, closing costs, and principal buy-down for first-time homebuyers in Highlands County. Max purchase price $250,000.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl:
      "https://www.highlandsfl.gov/departments/community_programs/housing/index.php",
  },
];

type DpaProgramOverride = {
  description?: string;
  assistance?: Partial<DpaAssistanceAmount>;
  repaymentType?: DpaRepaymentType;
  forgivenessYears?: DpaForgivenessYears;
  compatibleLoanTypes?: DpaLoanType[];
  geography?: Partial<DpaGeography>;
  eligibility?: Partial<DpaEligibility>;
  limits?: Partial<DpaLimits>;
  availability?: Partial<DpaAvailability>;
  stacking?: Partial<DpaStacking>;
  calculator?: Partial<DpaCalculatorReadiness>;
  source?: DpaSource;
  sources?: DpaSource[];
  maintenance?: Partial<FloridaDpaProgram["maintenance"]>;
};

const FLORIDA_HOUSING_PROGRAM_HIGHLIGHTS_URL =
  "https://www.ehousingplus.com/homeownership/florida-housing-finance-corporation/program-highlights/";

const FLORIDA_HOUSING_STANDARD_TERM_SHEET_URL =
  "https://www.ehousingplus.com/wp-content/uploads/FHFC-Standard-Programs-Master-Term-Sheet-03-23-26.pdf";

const FLORIDA_HOUSING_TBA_GUIDE_URL =
  "https://www.ehousingplus.com/wp-content/uploads/TBA-GUIDE-5.16.24b.pdf";

const FLORIDA_HOUSING_HOMETOWN_HEROES_URL =
  "https://www.floridahousing.org/programs/homebuyer-overview-page/hometown-heroes";

const FLORIDA_HOUSING_HOMETOWN_HEROES_BOND_GUIDE_URL =
  "https://www.ehousingplus.com/wp-content/uploads/FHFC-HTH-Bond-Guide-03-31-26.pdf";

const FLORIDA_HOUSING_HOMETOWN_HEROES_TBA_GUIDE_URL =
  "https://www.ehousingplus.com/wp-content/uploads/FHFC-HTH-TBA-Guide-FNMA-Removed-04-07-26.pdf";

const MIAMI_DADE_DPA_URL =
  "https://www.miamidade.gov/global/housing/downpayment-assistance.page";

const MIAMI_DADE_HOMEOWNERSHIP_GUIDELINES_URL =
  "https://www.miamidade.gov/housing/library/guidelines/affordable-housing-and-homeownership-program-guidelines.pdf";

const BROWARD_HPA_URL =
  "https://www.broward.org/Housing/pages/homebuyer.aspx/1000";

const BROWARD_HPA_FUNDS_URL =
  "https://www.broward.org/Housing/Documents/Broward%20County%20HPA%20funds%209.2.2025.pdf";

const LAUDERHILL_PURCHASE_ASSISTANCE_URL =
  "https://www.lauderhill-fl.gov/departments/city-manager-administration/housing-grants/purchase-assistance-program";

const LAUDERHILL_ELIGIBILITY_URL =
  "https://www.lauderhill-fl.gov/departments/city-manager-administration/housing-grants/eligibiity-criteria";

const HALLANDALE_CRA_RESIDENTIAL_PROGRAMS_URL =
  "https://cohbcra.org/programs/residential-programs/";

const HALLANDALE_CRA_FTHB_POLICY_URL =
  "https://cohbcra.org/wp-content/uploads/2025/09/FIRST-TIME-HOMEBUYER-PROGRAM.pdf";

const MIRAMAR_HOUSING_URL = "https://www.investmiramar.org/Housing";

const MIRAMAR_LOW_MODERATE_FTHB_URL =
  "https://www.investmiramar.org/Housing/First-timeHomebuyerProgram";

const MIRAMAR_MIMA_URL = "https://www.investmiramar.org/Housing/MIMA-Program";

const POMPANO_FTHB_URL =
  "https://www.pompanobeachfl.gov/residents/housing-and-urban-improvement/ohui-programs/first-time-home-buyer";

const POMPANO_FTHB_FLYER_URL =
  "https://cdn.pompanobeachfl.gov/city/pages/ohui/2026-First-Time-Homebuyer-Flyer-JMO-AG-MC-5.4.26-Revised.pdf";

const POMPANO_FTHB_POLICY_URL =
  "https://cdn.pompanobeachfl.gov/city/pages/ohui/FTHB-POLICY-UPDATE-JMO-AG-MC-3.10.2026.pdf";

const CORAL_SPRINGS_PURCHASE_ASSISTANCE_URL =
  "https://www.coralsprings.gov/Government/Departments/Community-Development/Housing-Assistance/Purchase-Assistance";

const DAVIE_HOUSING_URL =
  "https://www.davie-fl.gov/606/Housing-and-Community-Affairs";

const DEERFIELD_HOUSING_GRANTS_URL =
  "https://www.deerfield-beach.com/1509/Housing-Grants";

const MARGATE_HPA_URL =
  "https://www.margatefl.com/627/Homebuyer-Purchase-Assistance";

const FORT_LAUDERDALE_HOME_URL =
  "https://www.fortlauderdale.gov/government/departments-a-h/community-services/housing-community-development-and-homelessness/home-investment-partnerships";

const FORT_LAUDERDALE_PURCHASE_ASSISTANCE_BROCHURE_URL =
  "https://www.fortlauderdale.gov/home/showpublisheddocument/95935/639123755015770000";

const PEMBROKE_PINES_HOUSING_URL = "https://ppines.com/371/Housing-Programs";

const SUNRISE_HOUSING_PROGRAMS_URL =
  "https://www.sunrisefl.gov/departments-services/finance-administrative-services/grants/grant-programs";

const NORTH_MIAMI_FTHB_URL =
  "https://www.northmiamifl.gov/243/First-Time-Homebuyer";

const MIAMI_BEACH_FTHB_URL =
  "https://www.miamibeachfl.gov/city-hall/housing-and-community-development/housing-and-community/housing-services/firsttimehomebuyer/";

const MIAMI_GARDENS_PA_URL =
  "https://miamigardens-fl.gov/919/Purchase-Assistance-Program";

const HOLLYWOOD_FTHB_URL =
  "https://www.broward.org/Housing/Pages/Hollywood%20Homebuyer%20Purchase%20Assistance%20Program.aspx";

const PALM_BEACH_MHI_URL =
  "https://discover.pbcgov.org/HED/Pages/Mortgage%20and%20Housing%20Investments.aspx";

const PALM_BEACH_HOME_FTHB_URL =
  "https://discover.pbcgov.org/HED/Pages/HOME-First-Time-Homebuyer-Program.aspx";

const PALM_BEACH_PURCHASE_ASSISTANCE_ORIENTATION_URL =
  "https://discover.pbcgov.org/HED/PDF/MHI/Purchase%20Assistance%20Orientation%20Presentation%204.2025%20%28Phase%201%29.pdf";

const BOCA_SHIP_URL =
  "https://www.myboca.us/396/SHIP-Purchase-Assistance-Programs";

const BOCA_SHIP_NOFA_URL =
  "https://www.myboca.us/DocumentCenter/View/39171/SHIP-2025-26-Notice-of-Funding-Availability?bidId=";

const BOYNTON_SHIP_URL =
  "https://www.boynton-beach.org/371/State-Housing-Initiative-Partnership-SHI";

const BOYNTON_SHIP_FLYER_URL =
  "https://www.boynton-beach.org/DocumentCenter/View/3596/2025-SHIP-FLYER";

const PALM_BEACH_MATCH_PILOT_URL =
  "https://discover.pbcgov.org/HED/Pages/Homebuyer-Match-Pilot-Program-.aspx";

const JUPITER_HELP_PROGRAMS_URL =
  "https://www.jupiter.fl.us/515/Help-Assistance-Programs";

const DELRAY_BEACH_FTHB_URL =
  "https://www.delraybeachfl.gov/government/city-departments/neighborhood-community-services/neighborhood-services-division/first-time-homeownership-program";

const MONROE_COUNTY_SHIP_URL =
  "https://www.monroecounty-fl.gov/780/12038/State-Housing-Initiatives-Partnership-SH";

const MONROE_COUNTY_SHIP_STRATEGY_URL =
  "https://www.monroecounty-fl.gov/DocumentCenter/View/39839";

const ORLANDO_DPA_URL =
  "https://www.orlando.gov/Building-Development/Housing-and-Development-Grants-Incentives-and-Assistance/Housing-Assistance-Programs/Request-Down-Payment-Assistance";

const ORANGE_COUNTY_DPA_URL =
  "https://www.orangecountyfl.net/NeighborsHousing/HomebuyerDownPaymentAssistance/tabid/420/Default.aspx";

const ORANGE_COUNTY_DPA_FLYER_URL =
  "https://www.orangecountyfl.net/Portals/0/Library/Neighbors-Housing/docs/Down%20Payment%20Assistance%20Flyer.pdf?v=2";

const OSCEOLA_COUNTY_DPA_URL =
  "https://www.osceola.org/Services/Housing-Programs/SHIP/Purchase-AssistanceDown-Payment-Assistance";

const OSCEOLA_COUNTY_DPA_GUIDE_URL =
  "https://www.osceola.org/files/assets/county/v/1/services/housing-programs/documents/ship-program/purchase-assistance-for-first-time-homebuyers-guide.pdf";

const VOLUSIA_AHP_URL =
  "https://www.volusia.org/services/community-services/community-assistance/housing/affordable-housing-partner.stml";

const VOLUSIA_HBA_OVERVIEW_URL =
  "https://www.volusia.org/file/6098/HBA-Overview-March-25_ADA.pdf";

const BREVARD_PURCHASE_ASSISTANCE_URL =
  "https://www.brevardfl.gov/HousingAndHumanServices/HousingPrograms/PurchaseAssistanceProgram";

const MELBOURNE_HOUSING_PROGRAMS_URL =
  "https://www.melbourneflorida.org/Government/Departments/Community-Development/Housing-Urban-Improvement/Housing-Programs";

const PALM_BAY_HOUSING_PROGRAMS_URL =
  "https://www.palmbayfl.gov/government/city-departments-f-to-z/housing-programs/programs";

const TITUSVILLE_FTHB_URL =
  "https://www.titusville.com/358/First-Time-Homebuyer-Program";

const TITUSVILLE_FTHB_ELIGIBILITY_URL =
  "https://www.titusville.com/360/Eligibility";

const COCOA_PURCHASE_ASSISTANCE_URL =
  "https://www.cocoafl.gov/293/Purchase-Assistance-Program";

const TAMPA_DARE_URL =
  "https://www.tampa.gov/housing-and-community-development/programs/mortgage-assistance";

const HILLSBOROUGH_HFA_HOME_OWNERSHIP_URL =
  "https://hillsboroughcountyhfa.org/single-family/";

const HILLSBOROUGH_HFA_FIRST_MORTGAGE_URL =
  "https://hillsboroughcountyhfa.org/first-mortgage-programs/";

const HILLSBOROUGH_COUNTY_DPA_URL =
  "https://hcfl.gov/residents/human-services/affordable-housing-assistance/down-payment-assistance";

const PINELLAS_HFA_FTHB_URL =
  "https://pinellas.gov/programs/first-time-homebuyer-program/";

const PINELLAS_HFA_FAQ_URL =
  "https://pinellas.gov/programs/first-time-homebuyer-program/homebuyer-assistance-faqs/";

const PASCO_DPA_BROCHURE_URL =
  "https://www.pascocountyfl.net/Documents/Services/Community%20Development/Programs/Down%20Payment%20Assistance%20Brochure%202024.pdf";

const HERNANDO_SHIP_URL =
  "https://www.hernandocounty.us/living-here/housing-supportive-services/affordable-housing/state-housing-initiative-program/";

const HERNANDO_DPA_APPLICATION_URL =
  "https://www.hernandocounty.us/media/shwji0ib/hernando-county-down-payment-assistance-application.pdf";

const HERNANDO_LHAP_URL =
  "https://www.hernandocounty.us/media/1thcpswk/local-housing-assistance-plan-2023-2026-updated-02032026.pdf?id=10521";

const LEE_HFA_FIRSTPLUS_URL =
  "https://hfaleeco.org/firstplus-second-dpa-program/";

const LEE_FINANCIAL_ASSISTANCE_URL =
  "https://www.leegov.com/dhs/assistance/financial";

const LEE_CDBG_INFO_SHEET_URL =
  "https://www.leegov.com/dhs/Documents/Housing/CDBG%20Info%20Sheet%2005.01.2024.pdf";

const COLLIER_HOMEBUYERS_URL =
  "https://www.collier.gov/Resident-Resources/Community-and-Human-Services-Division/Housing-Programs/Homebuyers";

const CHARLOTTE_HOUSING_SERVICES_URL =
  "https://www.charlottecountyfl.gov/departments/human-services/housing.stml";

const CHARLOTTE_PURCHASE_ASSISTANCE_FAQ_URL =
  "https://www.charlottecountyfl.gov/file/451/purchase-assistance-faq.pdf";

const MARION_HOUSING_URL =
  "https://www.marionfl.org/agencies-departments/departments-facilities-offices/community-services/housing";

const MARION_PURCHASE_ASSISTANCE_OVERVIEW_URL =
  "https://www.marionfl.org/home/showpublisheddocument/6843/635628774788770000";

const GAINESVILLE_DPA_URL =
  "https://www.gainesvillefl.gov/Government-Pages/Government/Departments/Housing-Community-Development/Down-Payment-Assistance";

const GAINESVILLE_LHAP_URL =
  "https://www.gainesvillefl.gov/files/assets/public/v/1/housing-amp-community-development/documents/city-of-gainesville-2023-2026-lhap-final.pdf";

const ALACHUA_HOUSING_PROGRAMS_URL =
  "https://alachuacounty.us/Depts/CSS/House/Pages/HousingPrograms.aspx";

const ALACHUA_SHIP_NOFA_URL =
  "https://alachuacounty.us/Depts/CSS/House/Documents/ADACompliant/ACHP_SHIPNOFA23-24.pdf";

const LEVY_HOUSING_URL = "https://levycounty.org/388/Housing";

const LEVY_HOUSING_APPLICATION_URL =
  "https://www.levycounty.org/DocumentCenter/View/775/Housing-Application-Update-1025-2";

const LEVY_LHAP_URL =
  "https://www.levycounty.org/DocumentCenter/View/938/levy-25-28-LHAP";

const SREC_SHIP_URL = "https://srecinc.org/programs/ship/";

const SREC_COLUMBIA_URL = "https://srecinc.org/service-areas/columbia-county/";

const SREC_COLUMBIA_PURCHASE_APPLICATION_URL =
  "https://srecinc.org/wp-content/uploads/2024/04/2024-Application-PURCHASE-COL.pdf";

const JACKSONVILLE_HOUSING_SERVICES_URL =
  "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/housing-services";

const ST_JOHNS_DPA_URL = "https://www.sjcfl.us/ship-down-payment-assistance/";

const ST_JOHNS_SHIP_URL =
  "https://www.sjcfl.us/state-housing-initiatives-partnership-ship/";

const CLAY_FTHB_DPA_URL =
  "https://www.claycountygov.com/community/state-housing-initiative-program-ship/first-time-homebuyer-down-payment-assistance";

const PENSACOLA_HOME_BUYER_PROGRAMS_URL =
  "https://www.cityofpensacola.com/183/Home-Buyers-Programs";

const ESCAMBIA_HOME_BUYER_PROGRAMS_URL =
  "https://myescambia.com/our-services/neighborhood-human-services/neighborhood-enterprise/homebuyer-programs";

const ESCAMBIA_HFA_URL = "https://www.escambiahfa.com/";

const ESCAMBIA_HFA_HOMEOWNERSHIP_URL =
  "https://www.escambiahfa.com/homebuyers/assistance-program";

const ESCAMBIA_HFA_QUALIFY_URL =
  "https://www.escambiahfa.com/homebuyers/do-i-qualify";

const ESCAMBIA_HFA_COUNTIES_URL =
  "https://www.escambiahfa.com/participating-counties";

const OKALOOSA_SHIP_URL = "https://myokaloosa.com/index.php/housing/ship";

const OKALOOSA_SHIP_APPLICATION_URL =
  "https://myokaloosa.com/sites/default/files/Users/piouser/FillableSHIP%20Application%20REV%2011-2023%20_1.pdf";

const SANTA_ROSA_HOUSING_PROGRAMS_URL =
  "https://www.santarosa.fl.gov/341/Housing-Programs";

const SANTA_ROSA_SHIP_SUMMARY_URL =
  "https://www.santarosa.fl.gov/DocumentCenter/View/5872";

const PANAMA_CITY_HOUSING_PROGRAMS_URL =
  "https://www.panamacity.gov/857/Housing-Assistance-Programs";

const PANAMA_CITY_COMMUNITY_DEVELOPMENT_URL =
  "https://www.panamacity.gov/157/Community-Development";

const BAY_COUNTY_SHIP_APPLICATION_PROCEDURES_URL =
  "https://www.baycountyfl.gov/DocumentCenter/View/16444";

const GULF_SHIP_URL = "https://www.gulfcounty-fl.gov/county_government/s_h_i_p";

const GULF_LHAP_URL =
  "https://www.gulfcounty-fl.gov/UserFiles/Servers/Server_6500990/File/County%20Government/SHIP/GULF-2024-2027-LHAP-FINAL%202024-05282024.pdf";

const JACKSON_HOUSING_GRANTS_URL =
  "https://jacksoncountyfl.gov/services/community-development/housing-grants-office/";

const JACKSON_LHAP_URL =
  "https://jacksoncountyfl.gov/uploads/2026/03/jackson-county-lhap-2024-2027-technical-rev-2.pdf";

const LEON_FTHB_ASSISTANCE_URL =
  "https://cms.leoncountyfl.gov/Government/Departments/Human-Services-Community-Partnerships/Housing-Services/First-Time-Homebuyer-Assistance";

const GADSDEN_ECHFA_URL =
  "https://www.escambiahfa.com/participating-counties/gadsden";

const floridaHousingProgramHighlightsSource: DpaSource = {
  label: "Florida Housing program highlights via eHousingPlus",
  url: FLORIDA_HOUSING_PROGRAM_HIGHLIGHTS_URL,
  quality: "partner",
  accessedDate: VERIFIED_SOURCE_DATE,
  notes: [
    "eHousingPlus is the administrator portal for Florida Housing homebuyer loan programs.",
  ],
};

const floridaHousingStandardTermSheetSource: DpaSource = {
  label: "Florida Housing Homebuyer Loan Program master term sheet",
  url: FLORIDA_HOUSING_STANDARD_TERM_SHEET_URL,
  quality: "partner",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const floridaHousingTbaGuideSource: DpaSource = {
  label: "Florida Housing TBA lender guide",
  url: FLORIDA_HOUSING_TBA_GUIDE_URL,
  quality: "partner",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const miamiDadeDpaSource: DpaSource = {
  label: "Miami-Dade County Homebuyer Down Payment Assistance Program",
  url: MIAMI_DADE_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const browardHpaSource: DpaSource = {
  label: "Broward County Home Buyer Purchase Assistance",
  url: BROWARD_HPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const lauderhillPurchaseAssistanceSource: DpaSource = {
  label: "City of Lauderhill Purchase Assistance Program",
  url: LAUDERHILL_PURCHASE_ASSISTANCE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hallandaleCraFthbSource: DpaSource = {
  label: "Hallandale Beach CRA First Time Homebuyer Program",
  url: HALLANDALE_CRA_RESIDENTIAL_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const miramarHousingSource: DpaSource = {
  label: "City of Miramar Housing programs",
  url: MIRAMAR_HOUSING_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const pompanoFthbSource: DpaSource = {
  label: "City of Pompano Beach First Time Home Buyer Program",
  url: POMPANO_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const coralSpringsPurchaseAssistanceSource: DpaSource = {
  label: "City of Coral Springs Purchase Assistance",
  url: CORAL_SPRINGS_PURCHASE_ASSISTANCE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const davieHousingSource: DpaSource = {
  label: "Town of Davie Housing and Community Affairs",
  url: DAVIE_HOUSING_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const deerfieldHousingGrantsSource: DpaSource = {
  label: "City of Deerfield Beach Housing and Grants",
  url: DEERFIELD_HOUSING_GRANTS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const margateHpaSource: DpaSource = {
  label: "City of Margate Homebuyer Purchase Assistance",
  url: MARGATE_HPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const fortLauderdalePurchaseAssistanceSource: DpaSource = {
  label: "City of Fort Lauderdale HOME Purchase Assistance",
  url: FORT_LAUDERDALE_HOME_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const pembrokePinesHousingSource: DpaSource = {
  label: "City of Pembroke Pines Housing Programs",
  url: PEMBROKE_PINES_HOUSING_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const sunriseHousingProgramsSource: DpaSource = {
  label: "City of Sunrise Housing Assistance Programs",
  url: SUNRISE_HOUSING_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const northMiamiFthbSource: DpaSource = {
  label: "City of North Miami First-Time Homebuyer",
  url: NORTH_MIAMI_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const miamiBeachFthbSource: DpaSource = {
  label: "City of Miami Beach First Time Homebuyers",
  url: MIAMI_BEACH_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const miamiGardensPaSource: DpaSource = {
  label: "City of Miami Gardens Purchase Assistance Program",
  url: MIAMI_GARDENS_PA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hollywoodFthbSource: DpaSource = {
  label: "City of Hollywood First-Time Homebuyer Purchase Assistance",
  url: HOLLYWOOD_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const palmBeachMhiSource: DpaSource = {
  label: "Palm Beach County Mortgage and Housing Investments",
  url: PALM_BEACH_MHI_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const palmBeachHomeFthbSource: DpaSource = {
  label: "Palm Beach County HOME First-Time Homebuyer Program",
  url: PALM_BEACH_HOME_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const bocaShipSource: DpaSource = {
  label: "City of Boca Raton SHIP Purchase Assistance",
  url: BOCA_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const boyntonShipSource: DpaSource = {
  label: "City of Boynton Beach SHIP",
  url: BOYNTON_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const palmBeachMatchPilotSource: DpaSource = {
  label: "Palm Beach County Homebuyer Match Pilot Program",
  url: PALM_BEACH_MATCH_PILOT_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const jupiterHelpProgramsSource: DpaSource = {
  label: "Town of Jupiter Help and Assistance Programs",
  url: JUPITER_HELP_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const delrayBeachFthbSource: DpaSource = {
  label: "City of Delray Beach First-Time Homeownership Program",
  url: DELRAY_BEACH_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const monroeCountyShipSource: DpaSource = {
  label: "Monroe County SHIP Homebuyer's Assistance Program",
  url: MONROE_COUNTY_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const orlandoDpaSource: DpaSource = {
  label: "City of Orlando Down Payment Assistance",
  url: ORLANDO_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const orangeCountyDpaSource: DpaSource = {
  label: "Orange County Homebuyer Down Payment Assistance",
  url: ORANGE_COUNTY_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const osceolaCountyDpaSource: DpaSource = {
  label: "Osceola County Purchase Assistance/Down Payment Assistance",
  url: OSCEOLA_COUNTY_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const volusiaHbaSource: DpaSource = {
  label: "Volusia County Homebuyer Assistance Program",
  url: VOLUSIA_AHP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const brevardPurchaseAssistanceSource: DpaSource = {
  label: "Brevard County Purchase Assistance Program",
  url: BREVARD_PURCHASE_ASSISTANCE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const melbourneHousingProgramsSource: DpaSource = {
  label: "City of Melbourne Purchase Assistance Program",
  url: MELBOURNE_HOUSING_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const palmBayHousingProgramsSource: DpaSource = {
  label: "City of Palm Bay Housing Programs",
  url: PALM_BAY_HOUSING_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const titusvilleFthbSource: DpaSource = {
  label: "City of Titusville First Time Homebuyer Program",
  url: TITUSVILLE_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const cocoaPurchaseAssistanceSource: DpaSource = {
  label: "City of Cocoa Purchase Assistance Program",
  url: COCOA_PURCHASE_ASSISTANCE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const tampaDareSource: DpaSource = {
  label: 'City of Tampa "Dare to Own the Dream" Homeownership Program',
  url: TAMPA_DARE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hillsboroughHfaHomeOwnershipSource: DpaSource = {
  label: "Hillsborough County HFA Home Ownership Program",
  url: HILLSBOROUGH_HFA_HOME_OWNERSHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hillsboroughHfaFirstMortgageSource: DpaSource = {
  label: "Hillsborough County HFA Home Sweet Home first mortgage program",
  url: HILLSBOROUGH_HFA_FIRST_MORTGAGE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hillsboroughCountyDpaSource: DpaSource = {
  label: "Hillsborough County Down Payment Assistance",
  url: HILLSBOROUGH_COUNTY_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const pinellasHfaFthbSource: DpaSource = {
  label: "Pinellas County HFA First-Time Homebuyer Program",
  url: PINELLAS_HFA_FTHB_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const pinellasHfaFaqSource: DpaSource = {
  label: "Pinellas County HFA Homebuyer Assistance FAQs",
  url: PINELLAS_HFA_FAQ_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const pascoDpaBrochureSource: DpaSource = {
  label: "Pasco County Down Payment Assistance Program brochure",
  url: PASCO_DPA_BROCHURE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hernandoShipSource: DpaSource = {
  label: "Hernando County State Housing Initiatives Program",
  url: HERNANDO_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hernandoDpaApplicationSource: DpaSource = {
  label: "Hernando County Down Payment Assistance application",
  url: HERNANDO_DPA_APPLICATION_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const hernandoLhapSource: DpaSource = {
  label: "Hernando County SHIP Local Housing Assistance Plan 2023-2026",
  url: HERNANDO_LHAP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const leeHfaFirstPlusSource: DpaSource = {
  label: "Lee County HFA FirstPlus Second DPA Program",
  url: LEE_HFA_FIRSTPLUS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const leeFinancialAssistanceSource: DpaSource = {
  label: "Lee County Financial Assistance Programs",
  url: LEE_FINANCIAL_ASSISTANCE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const leeCdbgInfoSheetSource: DpaSource = {
  label: "Lee County CDBG Homeownership Assistance Program info sheet",
  url: LEE_CDBG_INFO_SHEET_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const collierHomebuyersSource: DpaSource = {
  label: "Collier County SHIP Purchase Assistance Program",
  url: COLLIER_HOMEBUYERS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const charlotteHousingServicesSource: DpaSource = {
  label: "Charlotte County Housing Services",
  url: CHARLOTTE_HOUSING_SERVICES_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const charlottePurchaseAssistanceFaqSource: DpaSource = {
  label: "Charlotte County SHIP Purchase Assistance Program overview/FAQs",
  url: CHARLOTTE_PURCHASE_ASSISTANCE_FAQ_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const marionHousingSource: DpaSource = {
  label: "Marion County Housing programs",
  url: MARION_HOUSING_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const marionPurchaseAssistanceOverviewSource: DpaSource = {
  label: "Marion County Purchase Assistance Program overview",
  url: MARION_PURCHASE_ASSISTANCE_OVERVIEW_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const gainesvilleDpaSource: DpaSource = {
  label: "City of Gainesville Down Payment Assistance",
  url: GAINESVILLE_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const gainesvilleLhapSource: DpaSource = {
  label: "City of Gainesville SHIP Local Housing Assistance Plan 2023-2026",
  url: GAINESVILLE_LHAP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const alachuaHousingProgramsSource: DpaSource = {
  label: "Alachua County Housing Programs",
  url: ALACHUA_HOUSING_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const alachuaShipNofaSource: DpaSource = {
  label: "Alachua County SHIP 2023-2024 Notice of Funding Availability",
  url: ALACHUA_SHIP_NOFA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const levyHousingSource: DpaSource = {
  label: "Levy County Housing",
  url: LEVY_HOUSING_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const levyHousingApplicationSource: DpaSource = {
  label: "Levy County Housing application update",
  url: LEVY_HOUSING_APPLICATION_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const levyLhapSource: DpaSource = {
  label: "Levy County SHIP Local Housing Assistance Plan 2025-2028",
  url: LEVY_LHAP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const srecShipSource: DpaSource = {
  label: "Suwannee River Economic Council SHIP program",
  url: SREC_SHIP_URL,
  quality: "partner",
  accessedDate: VERIFIED_SOURCE_DATE,
  notes: [
    "Suwannee River Economic Council administers SHIP services for Columbia and nearby counties.",
  ],
};

const srecColumbiaSource: DpaSource = {
  label: "Suwannee River Economic Council Columbia County services",
  url: SREC_COLUMBIA_URL,
  quality: "partner",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const srecColumbiaPurchaseApplicationSource: DpaSource = {
  label: "Columbia County SHIP Purchase Assistance application via SREC",
  url: SREC_COLUMBIA_PURCHASE_APPLICATION_URL,
  quality: "partner",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const jacksonvilleHousingServicesSource: DpaSource = {
  label: "City of Jacksonville Housing Services",
  url: JACKSONVILLE_HOUSING_SERVICES_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const stJohnsDpaSource: DpaSource = {
  label: "St. Johns County SHIP Down Payment Assistance",
  url: ST_JOHNS_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const stJohnsShipSource: DpaSource = {
  label: "St. Johns County State Housing Initiatives Partnership",
  url: ST_JOHNS_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const clayFthbDpaSource: DpaSource = {
  label: "Clay County First Time Homebuyer Down Payment Assistance",
  url: CLAY_FTHB_DPA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const pensacolaHomeBuyerProgramsSource: DpaSource = {
  label: "City of Pensacola Home Buyer Programs",
  url: PENSACOLA_HOME_BUYER_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const escambiaHomeBuyerProgramsSource: DpaSource = {
  label: "Escambia County Homebuyer Programs",
  url: ESCAMBIA_HOME_BUYER_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const escambiaHfaSource: DpaSource = {
  label: "Escambia County Housing Finance Authority",
  url: ESCAMBIA_HFA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const escambiaHfaHomeownershipSource: DpaSource = {
  label: "Escambia County HFA Homeownership Program",
  url: ESCAMBIA_HFA_HOMEOWNERSHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const escambiaHfaQualifySource: DpaSource = {
  label: "Escambia County HFA qualification criteria",
  url: ESCAMBIA_HFA_QUALIFY_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const escambiaHfaCountiesSource: DpaSource = {
  label: "Escambia County HFA participating counties",
  url: ESCAMBIA_HFA_COUNTIES_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const okaloosaShipSource: DpaSource = {
  label: "Okaloosa County SHIP Program",
  url: OKALOOSA_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const okaloosaShipApplicationSource: DpaSource = {
  label: "Okaloosa County SHIP housing application",
  url: OKALOOSA_SHIP_APPLICATION_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const santaRosaHousingProgramsSource: DpaSource = {
  label: "Santa Rosa County Housing Programs",
  url: SANTA_ROSA_HOUSING_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const santaRosaShipSummarySource: DpaSource = {
  label: "Santa Rosa County 2026 SHIP First Time Homebuyer Program Summary",
  url: SANTA_ROSA_SHIP_SUMMARY_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const panamaCityHousingProgramsSource: DpaSource = {
  label: "City of Panama City Housing Assistance Programs",
  url: PANAMA_CITY_HOUSING_PROGRAMS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const panamaCityCommunityDevelopmentSource: DpaSource = {
  label: "City of Panama City Housing and Community Services",
  url: PANAMA_CITY_COMMUNITY_DEVELOPMENT_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const bayCountyShipApplicationProceduresSource: DpaSource = {
  label: "Bay County SHIP application procedures",
  url: BAY_COUNTY_SHIP_APPLICATION_PROCEDURES_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const gulfShipSource: DpaSource = {
  label: "Gulf County SHIP",
  url: GULF_SHIP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const gulfLhapSource: DpaSource = {
  label: "Gulf County SHIP Local Housing Assistance Plan 2024-2027",
  url: GULF_LHAP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const jacksonHousingGrantsSource: DpaSource = {
  label: "Jackson County Housing Assistance Office",
  url: JACKSON_HOUSING_GRANTS_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const jacksonLhapSource: DpaSource = {
  label: "Jackson County SHIP Local Housing Assistance Plan 2024-2027",
  url: JACKSON_LHAP_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const leonFthbAssistanceSource: DpaSource = {
  label: "Leon County First-Time Homebuyer Assistance",
  url: LEON_FTHB_ASSISTANCE_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const gadsdenEchfaSource: DpaSource = {
  label: "Escambia County HFA Gadsden County program page",
  url: GADSDEN_ECHFA_URL,
  quality: "official",
  accessedDate: VERIFIED_SOURCE_DATE,
};

const verifiedFloridaHousingNotes = [
  "Verified against Florida Housing/eHousingPlus program materials; borrower-specific underwriting still requires an approved participating lender.",
];

const floridaHousingCommonEligibility: Partial<DpaEligibility> = {
  incomeLimitRequired: true,
  purchasePriceLimitRequired: true,
  primaryResidenceRequired: true,
  homebuyerEducationRequired: true,
  minimumCreditScore: 640,
  householdSizeRequired: true,
  approvedLenderRequired: true,
  propertyTypes: [
    "single-family",
    "townhome",
    "condominium",
    "manufactured housing when permitted by product guidelines",
  ],
  notes: verifiedFloridaHousingNotes,
};

const floridaHousingCommonLimits: Partial<DpaLimits> = {
  incomeLimitRequired: true,
  purchasePriceLimitRequired: true,
  incomeBasis: "florida_housing",
  usesFloridaHousingLimits: true,
  limitsSourceUrl: FLORIDA_HOUSING_PROGRAM_HIGHLIGHTS_URL,
  effectiveDate: VERIFIED_SOURCE_DATE,
  notes: [
    "Exact income and purchase price limits vary by county, product, target area, and current program guide.",
  ],
};

const floridaHousingStandardAvailability: Partial<DpaAvailability> = {
  status: "available",
  statusLastChecked: VERIFIED_SOURCE_DATE,
  sourceUrl: FLORIDA_HOUSING_PROGRAM_HIGHLIGHTS_URL,
  notes: [
    "Program highlights showed current rate and DPA offerings for standard Florida Housing programs.",
  ],
};

const floridaHousingStacking: Partial<DpaStacking> = {
  withFloridaHousingFirstMortgage: "conditional",
  withHometownHeroes: "not_allowed",
  withLocalPrograms: "unknown",
  notes: [
    "Florida Housing DPA options must be paired with eligible Florida Housing first mortgage options; external local-program stacking needs lender/program review.",
  ],
};

const VERIFIED_PROGRAM_OVERRIDES: Record<string, DpaProgramOverride> = {
  "florida-hometown-heroes": {
    description:
      "Up to 5% of the first mortgage loan amount, with a $35,000 maximum and $10,000 minimum, as a 0%, non-amortizing, 30-year deferred second mortgage for eligible Florida workers, service members, and veterans.",
    assistance: {
      display: "5% of loan amount, max $35,000",
      minAmount: 10000,
      maxAmount: 35000,
      percentOfLoan: { max: 5 },
      maxAmountSourceUrl: FLORIDA_HOUSING_HOMETOWN_HEROES_URL,
      calculationNotes:
        "Assistance is 5% of the total first mortgage loan amount, subject to the program minimum, maximum, current funding availability, and lender reservation rules.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    geography: {
      scope: "statewide",
      jurisdictionLevel: "florida_statewide",
      display: "Statewide",
      counties: [],
      eligibleAreas: ["Entire state of Florida"],
      notes: [
        "The program is statewide, but borrower/property eligibility and limits vary by program guide.",
      ],
    },
    eligibility: {
      ...floridaHousingCommonEligibility,
      firstTimeBuyerRequired: true,
      borrowerContributionRequired: "unknown",
      allowedOccupations: [
        "health care worker",
        "school staff member",
        "first responder",
        "public safety worker",
        "court employee",
        "child care worker",
        "active-duty or reserve service member",
        "Florida National Guard member",
        "eligible veteran employed full-time by a Florida-based employer",
      ],
      militaryEligible: true,
      notes: [
        ...verifiedFloridaHousingNotes,
        "Eligible borrowers must fit a current Hometown Heroes occupation/service category and be full-time/currently employed by a Florida-based employer when required by the guide.",
      ],
    },
    limits: floridaHousingCommonLimits,
    availability: {
      status: "waitlist",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: FLORIDA_HOUSING_PROGRAM_HIGHLIGHTS_URL,
      notes: [
        "Program highlights on 2026-06-04 stated no funds were available that day and the waitlist was at capacity.",
      ],
    },
    stacking: floridaHousingStacking,
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current county/product-specific income and purchase price limits",
        "borrower occupation documentation",
        "real-time reservation/funding availability",
        "local program stacking confirmation",
      ],
    },
    source: {
      label: "Florida Housing Hometown Heroes program page",
      url: FLORIDA_HOUSING_HOMETOWN_HEROES_URL,
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Florida Housing Hometown Heroes program page",
        url: FLORIDA_HOUSING_HOMETOWN_HEROES_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      floridaHousingProgramHighlightsSource,
      {
        label: "Florida Housing Hometown Heroes Bond lender guide",
        url: FLORIDA_HOUSING_HOMETOWN_HEROES_BOND_GUIDE_URL,
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Florida Housing Hometown Heroes TBA lender guide",
        url: FLORIDA_HOUSING_HOMETOWN_HEROES_TBA_GUIDE_URL,
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Monitor real-time Hometown Heroes funds and waitlist notices before recommending availability.",
        "Verify current occupation checklist and income/loan limits during each calculator data refresh.",
      ],
    },
  },
  "florida-assist": {
    assistance: {
      display: "$10,000",
      maxAmount: 10000,
      maxAmountSourceUrl: FLORIDA_HOUSING_STANDARD_TERM_SHEET_URL,
      calculationNotes:
        "Flat $10,000 second mortgage assistance when paired with eligible Florida Housing first mortgage options.",
    },
    repaymentType: "deferred",
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    eligibility: {
      ...floridaHousingCommonEligibility,
      firstTimeBuyerRequired: true,
      borrowerContributionRequired: "unknown",
      militaryEligible: "varies",
    },
    limits: floridaHousingCommonLimits,
    availability: floridaHousingStandardAvailability,
    stacking: floridaHousingStacking,
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current county/product-specific income and purchase price limits",
        "local program stacking confirmation",
      ],
    },
    source: floridaHousingStandardTermSheetSource,
    sources: [
      floridaHousingStandardTermSheetSource,
      floridaHousingProgramHighlightsSource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm borrower-specific first-time buyer, target-area, and product rules against the active lender guide.",
      ],
    },
  },
  "florida-hlp": {
    assistance: {
      display: "$12,500",
      maxAmount: 12500,
      maxAmountSourceUrl: FLORIDA_HOUSING_STANDARD_TERM_SHEET_URL,
      calculationNotes:
        "Flat $12,500 second mortgage assistance with a 3% fully amortizing payment structure when paired with eligible Florida Housing first mortgage options.",
    },
    repaymentType: "repayable_second",
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    eligibility: {
      ...floridaHousingCommonEligibility,
      firstTimeBuyerRequired: true,
      borrowerContributionRequired: "unknown",
      militaryEligible: "varies",
    },
    limits: floridaHousingCommonLimits,
    availability: floridaHousingStandardAvailability,
    stacking: floridaHousingStacking,
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current county/product-specific income and purchase price limits",
        "local program stacking confirmation",
      ],
    },
    source: floridaHousingStandardTermSheetSource,
    sources: [
      floridaHousingStandardTermSheetSource,
      floridaHousingProgramHighlightsSource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm borrower-specific first-time buyer, target-area, and product rules against the active lender guide.",
      ],
    },
  },
  "florida-hfa-preferred-plus": {
    description:
      "Historical Fannie Mae HFA Preferred PLUS-style assistance. Current Florida Housing materials should be checked before presenting this as available because Fannie Mae TBA reservations were removed after June 28, 2024.",
    assistance: {
      display: "3%, 4%, or 5% of loan amount",
      percentOfLoan: { min: 3, max: 5 },
      maxAmountSourceUrl: FLORIDA_HOUSING_STANDARD_TERM_SHEET_URL,
      calculationNotes:
        "Assistance is selected as 3%, 4%, or 5% of the total first mortgage loan amount; exact payment impact depends on the paired first mortgage rate.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 5,
      display: "Forgiven 20% per year over 5 years",
    },
    compatibleLoanTypes: ["conventional", "hfa"],
    eligibility: {
      ...floridaHousingCommonEligibility,
      firstTimeBuyerRequired: true,
      borrowerContributionRequired: "unknown",
      militaryEligible: "varies",
    },
    limits: floridaHousingCommonLimits,
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: FLORIDA_HOUSING_TBA_GUIDE_URL,
      notes: [
        "The TBA lender guide states Fannie Mae is not available with reservations made June 28, 2024 or later; current program highlights show PLUS TBA under Freddie Mac HFA Advantage.",
      ],
    },
    stacking: floridaHousingStacking,
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current active-program confirmation",
        "replacement product mapping to HFA Advantage PLUS",
      ],
    },
    source: floridaHousingStandardTermSheetSource,
    sources: [
      floridaHousingStandardTermSheetSource,
      floridaHousingProgramHighlightsSource,
      floridaHousingTbaGuideSource,
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Do not recommend this record as an active borrower option until the current lender guide confirms active Fannie Mae HFA Preferred PLUS availability.",
      ],
    },
  },
  "florida-hfa-preferred-grant": {
    description:
      "Historical Fannie Mae HFA Preferred PLUS/TBA assistance record. Current Florida Housing materials should be checked before presenting this as available because Fannie Mae TBA reservations were removed after June 28, 2024.",
    assistance: {
      display: "3%, 4%, or 5% of loan amount",
      percentOfLoan: { min: 3, max: 5 },
      maxAmountSourceUrl: FLORIDA_HOUSING_TBA_GUIDE_URL,
      calculationNotes:
        "Amount structure is known historically, but current active availability for Fannie Mae HFA Preferred PLUS is not confirmed.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 5,
      display: "Forgiven 20% per year over 5 years",
    },
    compatibleLoanTypes: ["conventional", "hfa"],
    eligibility: {
      ...floridaHousingCommonEligibility,
      firstTimeBuyerRequired: true,
      borrowerContributionRequired: "unknown",
      militaryEligible: "varies",
    },
    limits: floridaHousingCommonLimits,
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: FLORIDA_HOUSING_TBA_GUIDE_URL,
      notes: [
        "The TBA lender guide states Fannie Mae is not available with reservations made June 28, 2024 or later; current program highlights show PLUS TBA under Freddie Mac HFA Advantage.",
      ],
    },
    stacking: floridaHousingStacking,
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current active-program confirmation",
        "replacement product mapping to HFA Advantage PLUS",
      ],
    },
    source: floridaHousingTbaGuideSource,
    sources: [
      floridaHousingTbaGuideSource,
      floridaHousingProgramHighlightsSource,
      floridaHousingStandardTermSheetSource,
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Likely stale/legacy record; verify whether this should be redirected to the active Freddie Mac HFA Advantage PLUS record or retained only as historical content.",
      ],
    },
  },
  "florida-hfa-advantage-plus": {
    assistance: {
      display: "3%, 4%, or 5% of loan amount",
      percentOfLoan: { min: 3, max: 5 },
      maxAmountSourceUrl: FLORIDA_HOUSING_STANDARD_TERM_SHEET_URL,
      calculationNotes:
        "Assistance is selected as 3%, 4%, or 5% of the total first mortgage loan amount; exact payment impact depends on the paired first mortgage rate.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 5,
      display: "Forgiven 20% per year over 5 years",
    },
    compatibleLoanTypes: ["conventional", "hfa"],
    eligibility: {
      ...floridaHousingCommonEligibility,
      firstTimeBuyerRequired: true,
      borrowerContributionRequired: "unknown",
      militaryEligible: "varies",
    },
    limits: floridaHousingCommonLimits,
    availability: floridaHousingStandardAvailability,
    stacking: floridaHousingStacking,
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "selected 3%, 4%, or 5% assistance option",
        "current county/product-specific income and purchase price limits",
        "local program stacking confirmation",
      ],
    },
    source: floridaHousingStandardTermSheetSource,
    sources: [
      floridaHousingStandardTermSheetSource,
      floridaHousingProgramHighlightsSource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm active PLUS branding and product availability against the latest TBA/PLUS guide.",
      ],
    },
  },
  "miami-dade-county-dpa": {
    assistance: {
      display: "Up to $35,000",
      maxAmount: 35000,
      maxAmountSourceUrl: MIAMI_DADE_DPA_URL,
      calculationNotes:
        "Award is based on first mortgage underwriting and cannot push combined loan-to-value above program limits.",
    },
    repaymentType: "deferred",
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "portfolio"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Miami-Dade County",
      counties: ["Miami-Dade"],
      eligibleAreas: ["Miami-Dade County"],
      notes: [
        "Buyer must be a Miami-Dade County resident at application and loan closing.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "varies",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "varies",
      propertyTypes: [
        "single-family",
        "townhome",
        "condominium",
        "other eligible primary residences subject to underwriting",
      ],
      notes: [
        "Borrower must provide 1% of purchase price from their own funds.",
        "Fixed-rate first mortgages are required for the stand-alone DPA path.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "varies",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MIAMI_DADE_DPA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Income may not exceed 140% of Miami-Dade County AMI adjusted for family size.",
        "Purchase price is subject to first mortgage lender underwriting/program path.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MIAMI_DADE_DPA_URL,
      notes: [
        "Official page describes program terms but does not clearly confirm current remaining funds.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "May be available stand-alone or with Miami-Dade Homebuyer Loan Program; stacking with Florida Housing needs lender/program review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "real-time funding availability",
        "first mortgage product and CLTV underwriting",
        "stacking compatibility with Florida Housing products",
      ],
    },
    source: miamiDadeDpaSource,
    sources: [
      miamiDadeDpaSource,
      {
        label: "Miami-Dade affordable housing and homeownership guidelines",
        url: MIAMI_DADE_HOMEOWNERSHIP_GUIDELINES_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Call/check PHCD for current funding before marking available.",
        "Confirm exact application path when the buyer is also using Miami-Dade Homebuyer Loan Program financing.",
      ],
    },
  },
  "north-miami-fthb": {
    assistance: {
      display: "Up to $40,000 through SHIP or HOME",
      maxAmount: 40000,
      maxAmountSourceUrl: NORTH_MIAMI_FTHB_URL,
      calculationNotes:
        "Official page describes SHIP assistance up to $40,000 and HOME/SHIP gap financing based on the buyer's ability to repay a private lender loan; do not assume both funding sources can be stacked to $80,000 without city confirmation.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 7,
      max: 15,
      display: "7 years for SHIP; up to 15 years for HOME",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of North Miami",
      counties: ["Miami-Dade"],
      cities: ["North Miami"],
      eligibleAreas: ["City of North Miami"],
      notes: [
        "Eligible home must be a single-family home, townhome, or condominium in the City of North Miami.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "condominium"],
      notes: [
        "Buyer must not have owned a home in the last three years, subject to listed exceptions.",
        "Buyer must complete an 8-hour homebuyer education workshop through a HUD-approved agency.",
        "Buyer must have sufficient income to secure private lender financing and maintain the housing unit.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: NORTH_MIAMI_FTHB_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists a $370,000 maximum purchase price under HOME, $460,000 maximum purchase price under SHIP, and $30,000 maximum liquid assets.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: NORTH_MIAMI_FTHB_URL,
      notes: [
        "Official page says applications are open until funds are depleted and assistance is first-come, first-processed while funding is available.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly confirm whether North Miami assistance can be layered with Florida Housing or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current city funding balance",
        "whether HOME and SHIP awards can be combined for one borrower",
        "compatible first mortgage loan types",
        "borrower contribution requirement",
        "current income table by household size",
      ],
    },
    source: northMiamiFthbSource,
    sources: [northMiamiFthbSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current fund balance before presenting the program as available.",
        "Confirm whether the old $80,000 combined amount should remain in consumer-facing copy or be limited to the verified $40,000 maximum by funding source.",
      ],
    },
  },
  "miami-beach-fthb": {
    assistance: {
      display: "$40,000-$150,000",
      minAmount: 40000,
      maxAmount: 150000,
      maxAmountSourceUrl: MIAMI_BEACH_FTHB_URL,
      calculationNotes:
        "Award varies by household income and the City of Miami Beach LHAP; amount is contingent on available funding and program source allocations.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display: "Forgiven after 15 years of required occupancy",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Miami Beach",
      counties: ["Miami-Dade"],
      cities: ["Miami Beach"],
      eligibleAreas: ["City of Miami Beach"],
      notes: [
        "Applicant must purchase a qualifying home within the City of Miami Beach and provide proof of Miami-Dade County residency.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["qualifying home in Miami Beach"],
      notes: [
        "Applicant must complete first-time homebuyer training within six months before applying.",
        "Applicant must contribute at least 2% of the target property's value from their own funds.",
        "Applicant must obtain mortgage approval from an FDIC-insured bank or mortgage lender and have a qualifying FICO score.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MIAMI_BEACH_FTHB_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page describes very-low, low-, and moderate-income SHIP categories up to 120% AMI.",
        "Official page reviewed did not expose a clear current purchase price cap.",
      ],
    },
    availability: {
      status: "waitlist",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MIAMI_BEACH_FTHB_URL,
      notes: [
        "Official page says there is a waitlist at this time and program funds are contingent upon availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly confirm stacking compatibility with Florida Housing or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current waitlist/application status",
        "current purchase price cap",
        "current LHAP award table by income tier",
        "compatible first mortgage loan types",
        "minimum FICO score threshold",
      ],
    },
    source: miamiBeachFthbSource,
    sources: [miamiBeachFthbSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Monitor waitlist status before recommending a live application path.",
        "Pull the current LHAP or program overview attachment to model income-tier award amounts more precisely.",
      ],
    },
  },
  "miami-gardens-pa": {
    assistance: {
      display: "Up to $20,000",
      maxAmount: 20000,
      maxAmountSourceUrl: MIAMI_GARDENS_PA_URL,
      calculationNotes:
        "Maximum assistance is up to $20,000 for down payment and closing costs, subject to limited funds and first-qualified, first-ready, first-served processing.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 5,
      display: "Forgivable at the end of 5 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Miami Gardens",
      counties: ["Miami-Dade"],
      cities: ["Miami Gardens"],
      eligibleAreas: ["City of Miami Gardens city limits"],
      notes: [
        "Eligible property must be within City of Miami Gardens city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "duplex", "condominium"],
      notes: [
        "First-time buyer is defined as someone who has not owned a home in the last three years.",
        "Participant income must be less than or equal to 120% of median income for family size.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MIAMI_GARDENS_PA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists household-size income limits and a $382,195 property sales price cap.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MIAMI_GARDENS_PA_URL,
      notes: [
        "Official page says pre-applications are being accepted and assistance is first-qualified, first-ready, first-served with limited funds.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly confirm stacking compatibility with other DPA or first mortgage products.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund balance",
        "homebuyer education requirement",
        "approved lender or first mortgage requirements",
        "borrower contribution requirement",
        "stacking compatibility",
      ],
    },
    source: miamiGardensPaSource,
    sources: [miamiGardensPaSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm fund balance and pre-application status before presenting as available.",
        "Fill lender, education, and contribution requirements from an official application packet if available.",
      ],
    },
  },
  "hollywood-fthb": {
    assistance: {
      display: "Up to $50,000",
      maxAmount: 50000,
      maxAmountSourceUrl: HOLLYWOOD_FTHB_URL,
      calculationNotes:
        "Program can cover up to $50,000 after property-area eligibility and lender-administered first mortgage capacity are confirmed.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display: "15-year term with 1/15 annual reduction",
    },
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "portfolio"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "Hollywood Neighborhood Pride eligibility areas",
      counties: ["Broward"],
      cities: ["Hollywood"],
      eligibleAreas: ["Hollywood Neighborhood Pride eligibility areas"],
      notes: [
        "Property must be within the Neighborhood Pride Eligibility Area, verified by the official map before application.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "varies",
      propertyTypes: ["detached single-family", "townhome", "condominium"],
      notes: [
        "Eligible household income may not exceed 120% AMI.",
        "Buyer must have documented liquid assets of at least 3% of the first mortgage loan amount and contribute at least 3% of their own funds; official page says no VA variance.",
        "Program is administered by the first mortgage lender.",
        "Mobile homes, multiple dwelling units, and cooperatives are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: HOLLYWOOD_FTHB_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists 120% AMI household limits and a $679,324 maximum purchase price.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: HOLLYWOOD_FTHB_URL,
      notes: [
        "Funds are first-come, first-qualified, first-served; lender should contact Broward County to confirm funds are available for the next 60-90 days and make a soft reservation.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Because the program is lender-administered, stacking must be confirmed against the first mortgage and any other subsidy source.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "property address check against Neighborhood Pride map",
        "real-time soft-reservation/fund availability",
        "first mortgage lender overlays",
        "stacking compatibility",
      ],
    },
    source: hollywoodFthbSource,
    sources: [hollywoodFthbSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm property address against the Neighborhood Pride map before eligibility matching.",
        "Refresh funding status through Broward/Hollywood before presenting a buyer as likely eligible.",
      ],
    },
  },
  "monroe-county-ship": {
    assistance: {
      display: "Up to $45,000 on program page; strategy PDF lists $65,000",
      maxAmount: 45000,
      maxAmountSourceUrl: MONROE_COUNTY_SHIP_URL,
      calculationNotes:
        "Monroe County's current SHIP page lists up to $45,000 per home, while the 2025-2028 homebuyer strategy acknowledgement lists a $65,000 maximum award; use conservative $45,000 until the county resolves or confirms the applicable cap.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Monroe County",
      counties: ["Monroe"],
      eligibleAreas: ["Monroe County"],
      notes: [
        "Homebuyer assistance is for purchasing a home under Monroe County SHIP strategy; city-specific eligibility should still be checked for incorporated areas.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "condominium",
        "townhome",
        "new construction",
        "existing home",
      ],
      notes: [
        "Applications are processed first-qualified, first-served.",
        "Only one SHIP assistance program can be used per household.",
        "Strategy acknowledgement requires a minimum 1% buyer cash contribution, a contract or eligible under-construction unit, and a lending institution pre-qualification letter.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MONROE_COUNTY_SHIP_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official program page links 2025 Monroe County SHIP income and rental limits.",
        "Strategy acknowledgement covers very-low, low, moderate, and households up to 140% AMI.",
        "Search results surfaced an official LHAP exhibit with a purchase price limit, but this needs direct review before calculator use.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MONROE_COUNTY_SHIP_URL,
      notes: [
        "Official page confirms the program and processing basis but does not clearly state remaining funds or open/closed intake status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Strategy acknowledgement says Monroe County SHIP may be junior to additional state or federal funding sources, but also says Monroe County SHIP will maintain priority over other municipalities' contribution; stacking needs case review.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "resolve official $45,000 versus $65,000 maximum award conflict",
        "current funding/intake status",
        "first-time buyer requirement",
        "homebuyer education requirement",
        "current purchase price cap",
        "compatible first mortgage loan types",
        "shared appreciation calculation details",
      ],
    },
    source: monroeCountyShipSource,
    sources: [
      monroeCountyShipSource,
      {
        label:
          "Monroe County SHIP Homebuyer Assistance Strategy Acknowledgement",
        url: MONROE_COUNTY_SHIP_STRATEGY_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
        notes: [
          "Lists $65,000 maximum award for fiscal years 2025-2026 through 2027-2028, conflicting with the main county SHIP page's $45,000 amount.",
        ],
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Resolve conflicting official maximum award amounts before exposing a precise calculator recommendation.",
        "Review current LHAP, application, and income/purchase-price limits for first-time buyer, education, and funding status details.",
      ],
    },
  },
  "orlando-dpa": {
    assistance: {
      display: "Amount not usable while applications are closed",
      maxAmount: undefined,
      maxAmountSourceUrl: ORLANDO_DPA_URL,
      calculationNotes:
        "The City of Orlando page confirms the DPA program terms but says new applications are not being accepted due to reduced SHIP funding; do not estimate an award for new buyers until intake reopens.",
    },
    repaymentType: "unknown",
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Orlando",
      counties: ["Orange"],
      cities: ["Orlando"],
      eligibleAreas: ["City of Orlando limits"],
      notes: [
        "Property must be located within City of Orlando limits; city provides a jurisdiction locator.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: undefined,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "condominium"],
      notes: [
        "Official page states no minimum credit score is required by the city program.",
        "Buyer must have 12 consecutive months of residency in Orange, Osceola, Lake, Polk, Seminole, Volusia, or Brevard County.",
        "Buyer must secure a fixed-rate first mortgage loan commitment from a city-registered mortgage lender.",
        "Buyer must contribute at least $1,000 toward down payment and closing costs.",
        "Mobile homes, trailers, and tenant-occupied properties are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: ORLANDO_DPA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Sales price must not exceed $544,233, listed as 90% of the median area purchase price established by the U.S. Treasury Department.",
        "Total household income must not exceed the city's income eligibility limits.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: ORLANDO_DPA_URL,
      notes: [
        "Official page says the city is not accepting new applications for the Down Payment Assistance Program.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page refers buyers to Orange County assistance while Orlando intake is closed, but does not document stacking rules.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "program reopening date",
        "current award amount after reopening",
        "grant/lien term details from current program guide",
        "compatible first mortgage loan types beyond fixed-rate requirement",
        "stacking compatibility",
      ],
    },
    source: orlandoDpaSource,
    sources: [orlandoDpaSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Monitor City of Orlando page for reopened intake and updated award terms.",
        "Review current DPA program guide when intake reopens before estimating awards.",
      ],
    },
  },
  "orange-county-dpa": {
    assistance: {
      display: "$70,000 very-low; $40,000 low; $10,000 moderate",
      minAmount: 10000,
      maxAmount: 70000,
      maxAmountSourceUrl: ORANGE_COUNTY_DPA_URL,
      calculationNotes:
        "Official page tiers assistance by household income and size: $70,000 for eligible very-low-income buyers, $40,000 for low-income buyers, and $10,000 for moderate-income buyers.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year deferred payment loan forgiven annually",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Orange County",
      counties: ["Orange"],
      eligibleAreas: ["Orange County"],
      notes: [
        "Official county page does not clearly list city exclusions; confirm jurisdiction for properties inside incorporated cities.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 620,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "condominium",
        "townhome",
        "modular home",
      ],
      notes: [
        "Borrowers must complete a pre-purchase homebuyer education program and secure a first mortgage.",
        "County flyer says very-low and low-income borrowers must contribute at least $500; moderate-income borrowers must contribute at least $1,000.",
        "County flyer says buyers must have established residency over the last 12 consecutive months in Orange, Osceola, Lake, Polk, Brevard, Seminole, or Volusia County.",
        "Mobile homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: ORANGE_COUNTY_DPA_FLYER_URL,
      effectiveDate: "2024-04-01",
      notes: [
        "County flyer lists 2024 income limits and a maximum sales price of $345,000; official page should be checked for newer limits before final underwriting.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: ORANGE_COUNTY_DPA_URL,
      notes: [
        "Official page links the Neighborly application portal and does not state that intake is closed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page/flyer reviewed does not clearly document stacking with Florida Housing or city programs.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "2026 income limits and purchase price cap confirmation",
        "jurisdiction exclusions for incorporated cities",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: orangeCountyDpaSource,
    sources: [
      orangeCountyDpaSource,
      {
        label: "Orange County Down Payment Assistance Flyer",
        url: ORANGE_COUNTY_DPA_FLYER_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh income limits and purchase price cap from a newer county flyer/application if published.",
        "Confirm whether incorporated-city properties are eligible before calculator matching.",
      ],
    },
  },
  "osceola-county-ship": {
    assistance: {
      display: "$80,000 very-low; $60,000 low; $40,000 moderate",
      minAmount: 40000,
      maxAmount: 80000,
      maxAmountSourceUrl: OSCEOLA_COUNTY_DPA_URL,
      calculationNotes:
        "Maximum assistance is tiered by income and limited by need; county guide also says assistance cannot exceed 50% of the home's purchase price.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year deferred payment loan",
    },
    compatibleLoanTypes: ["fha", "va", "conventional"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Unincorporated Osceola County",
      counties: ["Osceola"],
      eligibleAreas: ["Unincorporated Osceola County tax district 300"],
      excludedAreas: ["Properties outside Osceola County tax district 300"],
      notes: [
        "Official FAQ says award letters are valid only in unincorporated Osceola County, tax district 300.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 620,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "condominium",
        "townhome",
        "villa",
        "zero-lot-line home",
        "modular or manufactured home when lot is included and program standards are met",
      ],
      notes: [
        "Buyer must contribute at least $1,000 of personal funds.",
        "Buyer must complete an approved 8-hour homebuyer education class within two years before applying.",
        "Buyer must secure a first mortgage through an approved Osceola County lender.",
        "Approved first mortgage must be fixed-rate, 15-30 years, and FHA, VA, or conventional.",
        "Post-purchase counseling is required within six months after purchase.",
        "Seller financing is not allowed.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: OSCEOLA_COUNTY_DPA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists maximum sales price of $360,000 in Osceola County.",
        "Income must be at or below 120% of median income for Osceola County; HOME/CDBG funding may require 80% limits per guide.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: OSCEOLA_COUNTY_DPA_URL,
      notes: [
        "Assistance is first-come, first-qualified, first-served while funds are available; county may establish a waiting list if funds or service capacity are exhausted.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "conditional",
      withLocalPrograms: "conditional",
      notes: [
        "County guide says applicants are encouraged to leverage available sources and that if FHFC or Orange County HFA DPA is used with Osceola County Purchase Assistance, FHFC/OCHFA assumes second position and Osceola County assumes third position.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "real-time fund/waitlist status",
        "approved lender selected",
        "exact income tier and funding source",
        "property tax district 300 verification",
      ],
    },
    source: osceolaCountyDpaSource,
    sources: [
      osceolaCountyDpaSource,
      {
        label: "Osceola County Purchase Assistance Program Guide",
        url: OSCEOLA_COUNTY_DPA_GUIDE_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm live application period/fund availability before recommending an application.",
        "Verify property jurisdiction/tax district 300 before calculator eligibility match.",
      ],
    },
  },
  "volusia-county-ha": {
    assistance: {
      display: "Up to $60,000",
      maxAmount: 60000,
      maxAmountSourceUrl: VOLUSIA_HBA_OVERVIEW_URL,
      calculationNotes:
        "Official March 2025 HBA overview lists up to $60,000 in assistance; applicant must work through an approved Affordable Housing Partner to apply and receive funds.",
    },
    repaymentType: "unknown",
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Volusia County excluding Daytona Beach and Deltona",
      counties: ["Volusia"],
      eligibleAreas: [
        "Volusia County",
        "Edgewater",
        "Oak Hill",
        "Pierson",
        "Port Orange",
      ],
      excludedAreas: ["City of Daytona Beach", "City of Deltona"],
      notes: [
        "Funds may be limited to homes purchased within Edgewater, Oak Hill, Pierson, and Port Orange.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["existing home", "new construction home"],
      notes: [
        "Applicant must work with an approved Affordable Housing Partner agency to apply and receive first-time homebuyer funds.",
        "Applicant must have received housing counseling services from a HUD-certified housing counselor within the last two years.",
        "Applicant cannot have previously received housing assistance from Volusia County.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: VOLUSIA_HBA_OVERVIEW_URL,
      effectiveDate: "2025-03",
      notes: [
        "Official March 2025 overview lists household income limits up to 80% AMI.",
        "Official overview reviewed did not expose a clear purchase price cap.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: VOLUSIA_AHP_URL,
      notes: [
        "Official AHP page confirms the program and application path but does not clearly state remaining funds or current intake status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page/overview reviewed does not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund/intake status",
        "repayment or forgiveness terms",
        "purchase price cap",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: volusiaHbaSource,
    sources: [
      volusiaHbaSource,
      {
        label: "Volusia County HBA Overview March 2025",
        url: VOLUSIA_HBA_OVERVIEW_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current AHP manual/program guidelines for repayment terms, purchase price limits, and loan-type rules.",
        "Confirm live funding availability with Volusia County or an approved Affordable Housing Partner.",
      ],
    },
  },
  "brevard-county-ship": {
    assistance: {
      display: "$75,000 very-low; $60,000 low",
      minAmount: 60000,
      maxAmount: 75000,
      maxAmountSourceUrl: BREVARD_PURCHASE_ASSISTANCE_URL,
      calculationNotes:
        "Official county page tiers maximum assistance by income and says the actual amount is the minimum needed to make the unit affordable; the program will not over-subsidize a household.",
    },
    repaymentType: "deferred",
    compatibleLoanTypes: ["fha", "va", "conventional"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Brevard County",
      counties: ["Brevard"],
      eligibleAreas: ["Brevard County"],
      notes: [
        "Official page states the home must be located in Brevard County; city program overlap should still be checked for properties inside entitlement cities.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["new home", "existing home"],
      notes: [
        "Buyer must not have had ownership interest in the past three years.",
        "Buyer must secure a 30-year fixed-rate first mortgage at current market interest rates; conventional, FHA, and VA are acceptable.",
        "Liquid assets cannot exceed $15,000.",
        "Buyer must complete a 5-hour homebuyer education workshop through Community Housing Initiative.",
        "Manufactured homes are not eligible.",
        "Proposed monthly mortgage payment cannot exceed front-end 34% and back-end 42% affordability ratios.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: BREVARD_PURCHASE_ASSISTANCE_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page confirms maximum sales price and income limits apply but refers applicants to CHI for current values.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: BREVARD_PURCHASE_ASSISTANCE_URL,
      notes: [
        "Official page confirms the program but does not clearly state current remaining funds or intake status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly document stacking rules with Florida Housing or city DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund/intake status",
        "current income limits",
        "current purchase price cap",
        "stacking compatibility with city programs and Florida Housing",
      ],
    },
    source: brevardPurchaseAssistanceSource,
    sources: [brevardPurchaseAssistanceSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current funding availability with Brevard County or CHI before marking available.",
        "Pull current income and purchase price limits from CHI/county materials before final calculator underwriting.",
      ],
    },
  },
  "melbourne-pa": {
    assistance: {
      display: "Amount not published on official page",
      maxAmount: undefined,
      maxAmountSourceUrl: MELBOURNE_HOUSING_PROGRAMS_URL,
      calculationNotes:
        "Official Melbourne page confirms SHIP purchase assistance, lien terms, and eligibility criteria but does not publish a current maximum award amount; do not use the seed amount for calculator estimates without an official cap.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 5,
      max: 15,
      display: "Lien period ranges 5-15 years depending on assistance amount",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Melbourne",
      counties: ["Brevard"],
      cities: ["Melbourne"],
      eligibleAreas: ["City of Melbourne city limits"],
      notes: ["Home must be located within Melbourne city limits."],
    },
    eligibility: {
      firstTimeBuyerRequired: "varies",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["home in Melbourne city limits"],
      notes: [
        "Official page says preference is given to first-time homebuyers, but does not state first-time buyer is an absolute requirement.",
        "Homebuyer must secure a first mortgage from an institutional mortgage lender.",
        "Homebuyer must receive homebuyer education and one-on-one counseling before closing.",
        "Minimum good-faith contribution is $1,000 for very-low-income buyers or $1,500 for low-income buyers.",
        "Mobile homes are not permitted.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MELBOURNE_HOUSING_PROGRAMS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page requires low-income criteria based on HUD income limits but does not publish purchase assistance income table or purchase price cap.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MELBOURNE_HOUSING_PROGRAMS_URL,
      notes: [
        "Official page confirms the purchase assistance program but does not clearly state whether funds or intake are currently available.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly document stacking with Florida Housing, Brevard County assistance, or other local programs.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "official maximum award amount",
        "current fund/intake status",
        "current purchase price cap",
        "compatible first mortgage loan types",
        "stacking compatibility",
        "whether first-time buyer status is required or only preferred",
      ],
    },
    source: melbourneHousingProgramsSource,
    sources: [melbourneHousingProgramsSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current Melbourne SHIP application/LHAP materials for award cap, purchase price limit, and exact first-time buyer requirement.",
        "Confirm current funding availability with CHI or Melbourne Housing and Urban Improvement.",
      ],
    },
  },
  "palm-bay-dpa": {
    assistance: {
      display: "Amount not published on official page",
      maxAmount: undefined,
      maxAmountSourceUrl: PALM_BAY_HOUSING_PROGRAMS_URL,
      calculationNotes:
        "Official Palm Bay page confirms 0% purchase assistance but does not publish a current maximum award; do not use the seed amount for calculator estimates until an official cap is verified.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year 0% mortgage loan forgiven at end of term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Palm Bay",
      counties: ["Brevard"],
      cities: ["Palm Bay"],
      eligibleAreas: ["City of Palm Bay"],
      notes: ["Program is for home purchase assistance in Palm Bay."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["home in Palm Bay"],
      notes: [
        "Applicant must not have owned a home within the previous three years.",
        "Household income may not exceed 80% AMI as defined annually by Florida Housing Finance Corporation.",
        "Applicant and co-applicant must attend local homebuyer training and counseling.",
        "Applicant must meet credit evaluation criteria required by the first mortgage lender.",
        "Applicant must provide a $1,000 buyer contribution.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "florida_housing",
      usesFloridaHousingLimits: true,
      limitsSourceUrl: PALM_BAY_HOUSING_PROGRAMS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page confirms income cannot exceed 80% AMI but does not publish a current purchase price cap.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PALM_BAY_HOUSING_PROGRAMS_URL,
      notes: [
        "Official page says the waitlist for all SHIP funding is closed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly document stacking with Florida Housing, Brevard County assistance, or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "program reopening or waitlist status",
        "official maximum award amount",
        "current purchase price cap",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: palmBayHousingProgramsSource,
    sources: [palmBayHousingProgramsSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Monitor Palm Bay SHIP waitlist status before showing as available.",
        "Find current LHAP/application materials for award cap and purchase price limit.",
      ],
    },
  },
  "titusville-fthb": {
    assistance: {
      display: "Up to $70,000",
      maxAmount: 70000,
      maxAmountSourceUrl: TITUSVILLE_FTHB_URL,
      calculationNotes:
        "Official program page says loans up to $70,000 are available; eligibility page tiers 2024-2025 subsidy as up to $70,000 for very-low-income and up to $50,000 for low-income buyers.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 5,
      max: 15,
      display:
        "5 years under $15,000; 10 years for $15,000-$40,000; 15 years over $40,000",
    },
    compatibleLoanTypes: ["fha", "va", "conventional"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Titusville",
      counties: ["Brevard"],
      cities: ["Titusville"],
      eligibleAreas: ["City of Titusville city limits"],
      notes: [
        "Buyer must purchase and occupy a new or existing home within Titusville city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "condominium",
        "townhome",
        "modular home",
      ],
      notes: [
        "Buyer must not have had ownership in the past three years.",
        "Conventional, FHA, and VA are acceptable with a 30-year fixed-rate mortgage at current market interest rates.",
        "Liquid assets cannot exceed $10,000.",
        "Buyer must complete a 5-hour homebuyer education workshop.",
        "Very-low-income buyers must contribute at least $500; low-income buyers must contribute at least $1,250.",
        "Mobile or manufactured homes are not eligible.",
        "Proposed monthly mortgage payment cannot exceed front-end 34% and back-end 42% affordability ratios.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: TITUSVILLE_FTHB_ELIGIBILITY_URL,
      effectiveDate: "2025-04",
      notes: [
        "Official eligibility page lists 2025 income limits at or below 80% AMI.",
        "Effective 2025, existing-home purchase price may not exceed $304,000; under certain SHIP conditions the purchase price may increase to $510,939.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: TITUSVILLE_FTHB_URL,
      notes: [
        "Official program page says applications are currently being accepted.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official pages reviewed do not clearly document stacking with Florida Housing, Brevard County assistance, or other local DPA.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current CHI funding level/waitlist length",
        "exact purchase price cap for buyer's funding source",
        "stacking compatibility",
        "shared appreciation/pro-rated repayment calculation for payoff scenarios",
      ],
    },
    source: titusvilleFthbSource,
    sources: [
      titusvilleFthbSource,
      {
        label: "City of Titusville First Time Homebuyer Eligibility",
        url: TITUSVILLE_FTHB_ELIGIBILITY_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current funding level and waitlist length with CHI before recommending timing.",
        "Confirm the applicable purchase price cap by funding source before final calculator approval.",
      ],
    },
  },
  "cocoa-pa": {
    assistance: {
      display: "$37,400 very-low; $32,400 low",
      minAmount: 32400,
      maxAmount: 37400,
      maxAmountSourceUrl: COCOA_PURCHASE_ASSISTANCE_URL,
      calculationNotes:
        "Official Cocoa page lists $37,400 maximum assistance for very-low-income households and $32,400 for low-income households.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year, 10% forgivable deferred-payment loan",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Cocoa",
      counties: ["Brevard"],
      cities: ["Cocoa"],
      eligibleAreas: ["City of Cocoa city limits"],
      notes: ["Home must be located within Cocoa city limits."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["new home", "existing home"],
      notes: [
        "Eligible very-low and low-income buyers may apply for down payment, closing cost, and repair assistance.",
        "Household must have the ability to obtain a 30-year fixed-rate mortgage.",
        "Mandatory homebuyer class is required through Community Housing Initiatives.",
        "Property must remain owner-occupied during the affordability term.",
        "Pre-1978 homes are not eligible.",
        "Mobile or manufactured homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: COCOA_PURCHASE_ASSISTANCE_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists a $273,000 maximum home value for existing or new construction homes.",
        "Official page confirms total income and assets must not exceed chart limits, but the text extraction did not expose the full chart.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: COCOA_PURCHASE_ASSISTANCE_URL,
      notes: [
        "Official page says assistance is provided on a first-come, first-ready basis.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly document stacking with Florida Housing, Brevard County assistance, or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund/intake status",
        "complete current income/asset chart",
        "borrower contribution requirement",
        "compatible first mortgage loan types beyond 30-year fixed requirement",
        "stacking compatibility",
      ],
    },
    source: cocoaPurchaseAssistanceSource,
    sources: [cocoaPurchaseAssistanceSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current funds and intake status before marking fully available.",
        "Pull current income/asset chart and borrower contribution rules from city/CHI materials.",
      ],
    },
  },
  "tampa-dare-to-own": {
    description:
      'Up to $50,000 in 0% interest down payment and closing cost assistance through the City of Tampa "Dare to Own the Dream" silent-second program, with the award tiered by household AMI and forgivable after 20 years of owner occupancy.',
    assistance: {
      display: "$30,000-$50,000 by AMI tier",
      minAmount: 30000,
      maxAmount: 50000,
      maxAmountSourceUrl: TAMPA_DARE_URL,
      calculationNotes:
        "Effective 2024-11-15, official city guidance lists $50,000 for 50.01%-80% AMI, $40,000 for 80.01%-120% AMI, and $30,000 for 120.01%-140% AMI; 0%-50% AMI is listed as not eligible.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 20,
      display: "Fully forgivable after 20 years of owner occupancy",
    },
    compatibleLoanTypes: ["fha", "va", "conventional"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Tampa",
      counties: ["Hillsborough"],
      cities: ["Tampa"],
      eligibleAreas: ["City of Tampa city limits"],
      notes: ["Property must be located within Tampa city limits."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 600,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "fixed-rate FHA",
        "fixed-rate VA",
        "fixed-rate conventional affordable housing product",
      ],
      notes: [
        "Buyer must begin with an approved housing counseling agency and must not be under contract before receiving a reservation number.",
        "Buyer must use a City of Tampa approved lender and approved realtor when applicable.",
        "Household income must be at or below 140% AMI and is based on household income, not only borrower income.",
        "Back-end debt ratio cannot exceed 50%.",
        "Borrower must invest at least $2,000, including at least $1,000 from the borrower's own verifiable funds.",
        "ARM loans are not allowed.",
        "A full independent buyer inspection and a passing city HQS inspection are required before closing.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: TAMPA_DARE_URL,
      effectiveDate: "2024-11-15",
      notes: [
        "Official city page lists household income up to 140% AMI and a $450,000 maximum purchase price.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: TAMPA_DARE_URL,
      notes: [
        "Official page is current as updated 2026-03-31 and lists application steps, approved lender/realtor lists, and current assistance tiers.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Official city page references possible pairing with separate City of Tampa Housing and Development Program assistance, but borrower-specific stacking needs city/lender review.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current AMI table values by household size",
        "real-time reservation/funding availability",
        "stacking compatibility with Florida Housing and Hometown Heroes",
      ],
    },
    source: tampaDareSource,
    sources: [tampaDareSource],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm active reservation/funding availability with the City of Tampa or approved counseling agency before final recommendation.",
        "Refresh approved lender/realtor lists and AMI table during each calculator update.",
      ],
    },
  },
  "hillsborough-home-sweet-home": {
    description:
      "Up to $15,000 in 0% interest, 30-year deferred second mortgage assistance for eligible first-time buyers purchasing in Hillsborough County through the Housing Finance Authority Home Sweet Home program.",
    assistance: {
      display: "Up to $15,000",
      minAmount: undefined,
      maxAmount: 15000,
      maxAmountSourceUrl: HILLSBOROUGH_HFA_FIRST_MORTGAGE_URL,
      calculationNotes:
        "Official HFA option page lists down payment assistance up to $15,000 as a 0% second mortgage; amount may depend on current program option and lender reservation.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Hillsborough County",
      counties: ["Hillsborough"],
      eligibleAreas: ["Hillsborough County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "new or existing one-to-four-unit detached or attached home",
        "condominium",
        "townhome",
      ],
      notes: [
        "Buyers and spouses, whether occupying or non-occupying, must be first-time buyers and able to permanently reside in the United States.",
        "Buyer must occupy within 60 days of closing and may never rent the property.",
        "Maximum DTI is 45%.",
        "Cosigners are permitted for FHA loans under FHA guidelines but cannot take ownership interest.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: HILLSBOROUGH_HFA_FIRST_MORTGAGE_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official HFA option page lists a $250,000 maximum sales price and household income limits of $58,660 for a 1-person household and $67,060 for 2+ person households.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: HILLSBOROUGH_HFA_HOME_OWNERSHIP_URL,
      notes: [
        "Official HFA page says down payment and closing cost assistance is currently available in the form of a 0% second mortgage.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with Florida Housing, City of Tampa DARE, or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current detailed first mortgage product/loan type matrix",
        "borrower contribution requirement",
        "real-time reservation/funding availability",
        "stacking compatibility",
      ],
    },
    source: hillsboroughHfaFirstMortgageSource,
    sources: [
      hillsboroughHfaFirstMortgageSource,
      hillsboroughHfaHomeOwnershipSource,
      hillsboroughCountyDpaSource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm live rates, lender guide, and reservation availability before final calculator launch.",
        "Pull the current lender guide to fill exact compatible first mortgage loan types and any borrower contribution rule.",
      ],
    },
  },
  "pinellas-county-hfa": {
    description:
      "Home Key Plus 2nd Mortgage assistance through the Housing Finance Authority of Pinellas County, offering 0% deferred second mortgage help for eligible first-time buyers in Pinellas, Pasco, and Polk counties.",
    assistance: {
      display: "$10,000 in Pinellas; $7,500 in Pasco/Polk",
      minAmount: 7500,
      maxAmount: 10000,
      maxAmountSourceUrl: PINELLAS_HFA_FTHB_URL,
      calculationNotes:
        "Official Pinellas HFA page lists $10,000 assistance in Pinellas County and $7,500 assistance in Pasco and Polk counties.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    geography: {
      scope: "regional",
      jurisdictionLevel: "regional",
      display: "Pinellas, Pasco, and Polk counties",
      counties: ["Pinellas", "Pasco", "Polk"],
      eligibleAreas: ["Pinellas County", "Pasco County", "Polk County"],
      notes: [
        "Program FAQ states the program covers all of Pinellas, Pasco, and Polk counties.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 660,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: true,
      propertyTypes: ["primary residence"],
      notes: [
        "First-time buyer includes someone who has never owned, has not owned in the past three years, or is a veteran.",
        "Borrower must complete an application through a participating lender, not directly with the HFA.",
        "Borrower must complete a homebuyer education class from a HUD-approved housing counseling agency.",
        "The home must remain the primary residence for the duration of the loan.",
        "Target areas may waive the first-time buyer requirement and provide higher income and purchase price limits.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PINELLAS_HFA_FTHB_URL,
      effectiveDate: "2026-05-19",
      notes: [
        "Official page lists 2026 Pinellas/Pasco Home Key 1st Mortgage income limits and maximum purchase prices for target and non-target areas.",
        "Freddie Mac HFA Conventional under 80% AMI uses a separate income test.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PINELLAS_HFA_FTHB_URL,
      notes: [
        "Official page effective 2026-05-19 lists current rates, assistance amounts, education, lender, income, and purchase price requirements.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "not_allowed",
      withLocalPrograms: "unknown",
      notes: [
        "The program uses its own Home Key first mortgage and Home Key Plus second mortgage structure; external DPA stacking is not clearly documented in the official materials reviewed.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "borrower contribution requirement",
        "full target-area census tract logic",
        "local program stacking compatibility",
      ],
    },
    source: pinellasHfaFthbSource,
    sources: [pinellasHfaFthbSource, pinellasHfaFaqSource],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh rates, assistance amounts, income limits, and target-area tract list whenever Pinellas updates the page.",
        "Confirm stacking policy with participating lender before recommending alongside city or county funds.",
      ],
    },
  },
  "pasco-county-dpa": {
    description:
      "Pasco County SHIP down payment assistance for income-eligible first-time buyers, with assistance tiered by income and provided as a 0% recorded second mortgage.",
    assistance: {
      display: "$25,000-$50,000 by income tier",
      minAmount: 25000,
      maxAmount: 50000,
      maxAmountSourceUrl: PASCO_DPA_BROCHURE_URL,
      calculationNotes:
        "Official 2024 Pasco brochure lists $50,000 for under 50% AMI, $35,000 for under 80% AMI, and $25,000 for under 120% AMI.",
    },
    repaymentType: "repayable_second",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Pasco County",
      counties: ["Pasco"],
      eligibleAreas: ["Pasco County"],
      notes: ["Eligible homes must be located in Pasco County."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family home", "townhome", "condominium"],
      notes: [
        "Homebuyer must make less than 120% AMI.",
        "Mobile or manufactured homes are not eligible.",
        "Properties in flood hazard areas, repetitive loss areas, or with sinkhole/ground settlement activity are not eligible.",
        "Very-low and low-income applicants begin repayment in five years; moderate-income applicants begin repayment immediately.",
        "Eligible homebuyers must work with Pasco County approved realtors and lenders; lenders submit applications on behalf of the homebuyer.",
        "Homeownership education through Suncoast Housing Connections is required before applying.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PASCO_DPA_BROCHURE_URL,
      effectiveDate: "2024-04-05",
      notes: [
        "Official brochure lists a purchase price cap of $275,000 and 2024 income limits up to 120% AMI.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PASCO_DPA_BROCHURE_URL,
      notes: [
        "Official brochure says funding for all income levels is first-qualified, first-served; no current live fund balance was found in the reviewed official material.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official brochure does not clearly document stacking with Florida Housing, Pinellas HFA Home Key, or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current 2026 income limits",
        "current purchase price cap",
        "real-time funding/intake status",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: pascoDpaBrochureSource,
    sources: [pascoDpaBrochureSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find or request a 2026 Pasco program brochure/page before treating the 2024 limits as final calculator values.",
        "Confirm whether county DPA applications are currently being accepted and whether the Pinellas HFA Home Key option should be surfaced separately.",
      ],
    },
  },
  "hernando-county-ship": {
    description:
      "Hernando County SHIP purchase assistance for eligible first-time buyers at or below 120% AMI, with down payment/closing cost help and possible rehabilitation assistance depending on the property and income tier.",
    assistance: {
      display: "Up to $50,000 DPA; up to $70,000 with rehab",
      minAmount: 10000,
      maxAmount: 70000,
      maxAmountSourceUrl: HERNANDO_LHAP_URL,
      calculationNotes:
        "Current application lists DPA-only tiers of $50,000 very-low, $30,000 low, and $10,000 moderate; the 2023-2026 LHAP allows up to $70,000 when assistance includes rehab.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 30,
      display: "0%, 30-year term, forgiven at the end of the term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Hernando County",
      counties: ["Hernando"],
      eligibleAreas: ["Hernando County"],
      notes: ["Eligible properties must be located within Hernando County."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family home", "townhome", "condominium"],
      notes: [
        "Applicant must be at or below 120% of the Tampa-St. Petersburg-Clearwater MSA AMI.",
        "At least one applicant must live or work in Hernando County before application.",
        "A mortgage pre-approval letter must be submitted with the application.",
        "Homebuyer education through a HUD-certified provider is required and must be provided to the SHIP office within 30 days of award letter receipt.",
        "Award letters are good for 120 days.",
        "Mobile and manufactured homes are not eligible.",
        "Properties in special flood hazard areas, repetitive loss areas, or with unrepaired/remediated/stabilized sinkhole issues are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: HERNANDO_DPA_APPLICATION_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Current application lists a $350,000 purchase price cap and household income up to 120% AMI.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: HERNANDO_SHIP_URL,
      notes: [
        "Official page and application are live, but the reviewed materials do not clearly state whether new applications are currently being accepted or how much funding remains.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with Florida Housing, Pinellas HFA Home Key, or other assistance.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund/intake status",
        "current income limit chart by household size",
        "compatible first mortgage loan types",
        "borrower contribution requirement",
        "when rehab component applies",
        "stacking compatibility",
      ],
    },
    source: hernandoShipSource,
    sources: [
      hernandoShipSource,
      hernandoDpaApplicationSource,
      hernandoLhapSource,
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm whether Hernando County is currently accepting PA/DPA applications and whether a waiting list exists.",
        "Clarify when the $70,000 LHAP maximum applies versus the $50,000 DPA-only application maximum before final calculator estimates.",
      ],
    },
  },
  "lee-county-firstplus": {
    description:
      "Lee County HFA FirstPlus provides first-time buyers with up to $10,000 for down payment and closing costs as a 0%, 30-year deferred second mortgage paired with eligible FHA, VA, or USDA-RD financing.",
    assistance: {
      display: "Up to $10,000",
      maxAmount: 10000,
      maxAmountSourceUrl: LEE_HFA_FIRSTPLUS_URL,
      calculationNotes:
        "Official HFA page lists a maximum $10,000 second mortgage; it does not publish a percentage-based calculation.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda"],
    geography: {
      scope: "regional",
      jurisdictionLevel: "regional",
      display:
        "Lee, Broward, Charlotte, Collier, DeSoto, Glades, Hendry, Palm Beach, and Sarasota counties",
      counties: [
        "Lee",
        "Broward",
        "Charlotte",
        "Collier",
        "DeSoto",
        "Glades",
        "Hendry",
        "Palm Beach",
        "Sarasota",
      ],
      eligibleAreas: [
        "Lee County",
        "Broward County",
        "Charlotte County",
        "Collier County",
        "DeSoto County",
        "Glades County",
        "Hendry County",
        "Palm Beach County",
        "Sarasota County",
      ],
      notes: [
        "Official HFA page lists a multi-county eligible area for the FirstPlus program.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: false,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["primary residence"],
      notes: [
        "First-time buyer rule applies to all borrowers and spouses, occupant or non-occupant.",
        "Borrowers cannot have owned a home within the past three years.",
        "Borrowers must be able to permanently reside in the United States.",
        "DTI requirement is 45%.",
        "Borrowers must meet normal FHA, VA, or USDA-RD underwriting requirements.",
        "Borrower must occupy the property within 60 days of closing.",
        "Homebuyer education is recommended but not required by the official HFA page.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: LEE_HFA_FIRSTPLUS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official HFA page confirms maximum income limits apply, but the extracted page does not publish the current income or purchase price table.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: LEE_HFA_FIRSTPLUS_URL,
      notes: [
        "Official HFA page says funds are first-come, first-served and continuously funded.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "not_allowed",
      withLocalPrograms: "unknown",
      notes: [
        "Program requires its own eligible first mortgage structure; official page does not clearly document stacking with other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current income limits",
        "purchase price limits if any",
        "borrower contribution requirement",
        "local program stacking compatibility",
      ],
    },
    source: leeHfaFirstPlusSource,
    sources: [leeHfaFirstPlusSource],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Pull current lender/program guide or myfirstfloridahome details to fill income and purchase price limits.",
        "Confirm whether county-specific overlays apply across the full listed multi-county service area.",
      ],
    },
  },
  "lee-county-cdbg": {
    description:
      "Lee County CDBG Homeownership Assistance provides need-based assistance for qualifying buyers purchasing eligible homes in unincorporated Lee County, capped at $75,000 and forgiven over a five-year owner-occupancy term.",
    assistance: {
      display: "Up to $75,000",
      maxAmount: 75000,
      percentOfLoan: undefined,
      maxAmountSourceUrl: LEE_CDBG_INFO_SHEET_URL,
      calculationNotes:
        "Official info sheet says Lee County determines the minimum assistance needed; assistance includes up to 50% of the lender-required minimum down payment plus possible additional subsidy so housing payment is no more than 35% of gross monthly income, capped at $75,000.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 5,
      display: "5-year second mortgage, forgiven 20% per year",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Unincorporated Lee County",
      counties: ["Lee"],
      eligibleAreas: ["Unincorporated Lee County"],
      excludedAreas: [
        "Incorporated Lee County municipalities unless separately confirmed eligible",
      ],
      notes: [
        "Official info sheet limits eligible properties to unincorporated Lee County.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: false,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family home",
        "condominium",
        "planned unit development",
      ],
      notes: [
        "Buyer does not need to be a first-time buyer but cannot own any other homes at application.",
        "Lee County does not require a minimum credit score for CDBG program approval.",
        "Buyer must obtain a new 30-year fixed-rate first mortgage; assumptions, ARM loans, balloon mortgages, and prepayment penalties are not allowed.",
        "Non-occupying co-borrowers/co-signers are not allowed.",
        "Purchaser is responsible for 50% of the lender-required minimum down payment plus closing costs.",
        "Mobile/manufactured homes, duplexes, homes with mother-in-law units, and homes with in-ground pools are not eligible.",
        "The property must pass HUD-required inspection.",
        "Maximum front-end ratio is 35%; maximum back-end ratio is 45%.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: LEE_CDBG_INFO_SHEET_URL,
      effectiveDate: "2024-05-01",
      notes: [
        "Official info sheet lists a $380,000 maximum purchase price and 2024 HUD low-income household limits.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: LEE_FINANCIAL_ASSISTANCE_URL,
      notes: [
        "Official county materials describe the program, but the current page reviewed did not publish a live fund balance or intake status for CDBG homeownership assistance.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Official info sheet allows the purchaser's required contribution to come from another down payment/closing cost assistance program or seller contribution in some cases, but full stacking rules require Lee County/lender review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current 2026 income limits",
        "current fund/intake status",
        "compatible first mortgage loan product names beyond 30-year fixed requirement",
        "city/incorporated-area exclusion mapping",
        "stacking compatibility",
      ],
    },
    source: leeCdbgInfoSheetSource,
    sources: [leeCdbgInfoSheetSource, leeFinancialAssistanceSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current 2026 CDBG info sheet or confirm 2024 limits remain active before calculator launch.",
        "Confirm current intake/funding availability with Lee County Human and Veteran Services.",
      ],
    },
  },
  "lee-county-home": {
    description:
      "Lee County HOME Down Payment Assistance provides up to 10% of the purchase price, capped at $34,200, toward down payment and closing costs for eligible buyers purchasing homes more than one year old anywhere in Lee County.",
    assistance: {
      display: "Up to 10% of purchase price, max $34,200",
      maxAmount: 34200,
      percentOfPurchasePrice: { max: 10 },
      maxAmountSourceUrl: LEE_FINANCIAL_ASSISTANCE_URL,
      calculationNotes:
        "Official Lee County page says the amount is based on demonstrated need and is up to 10% of the purchase price, not to exceed $34,200.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year second mortgage, forgiven 10% per year",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Lee County",
      counties: ["Lee"],
      eligibleAreas: ["Lee County, including incorporated city areas"],
      notes: [
        "Official county page says HOME DPA is available countywide, including incorporated city areas.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["home more than one year old"],
      notes: [
        "Buyer must be purchasing a home more than one year old.",
        "All purchasers must complete homebuyer education through a HUD-approved housing counseling agency before HOME DPA approval.",
        "The lender or mortgage loan officer must submit the HOME DPA application package after an executed purchase contract; buyer-submitted applications are not accepted.",
        "Submitting an application does not guarantee approval; eligibility depends on program requirements and fund availability.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: LEE_FINANCIAL_ASSISTANCE_URL,
      effectiveDate: "2025-12-01",
      notes: [
        "Official county page lists a $342,000 maximum purchase price effective 2025-12-01 and refers applicants to the HOME information sheet for income limits.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: LEE_FINANCIAL_ASSISTANCE_URL,
      notes: [
        "Official county page says eligibility depends on requirements and availability of funds, but it does not publish a live fund balance.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not clearly document stacking with FirstPlus, CDBG, Florida Housing, or city assistance.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current income limits",
        "first-time buyer rule confirmation",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "current fund availability",
        "stacking compatibility",
      ],
    },
    source: leeFinancialAssistanceSource,
    sources: [leeFinancialAssistanceSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Review the current HOME information sheet/application to confirm income limits, first-time buyer rules, property exclusions, and lender requirements.",
        "Confirm current fund availability before showing as available in a consumer-facing calculator.",
      ],
    },
  },
  "collier-county-ship": {
    description:
      "Collier County SHIP Purchase Assistance offers first-time buyers need-based down payment and closing cost assistance for eligible homes in Collier County, with current county guidance stating awards may reach up to $100,000.",
    assistance: {
      display: "Up to $100,000; possible $10,000 essential-services add-on",
      maxAmount: 100000,
      maxAmountSourceUrl: COLLIER_HOMEBUYERS_URL,
      calculationNotes:
        "Current Collier.gov page says applicants may qualify for up to $100,000 in Purchase Assistance and that awards are determined by household income, household size, income limits, and available funds; it separately notes awards may include up to $10,000 for Essential Services Personnel.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 30,
      display: "No repayment due if sold after 30 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Collier County",
      counties: ["Collier"],
      eligibleAreas: [
        "Unincorporated Collier County",
        "City of Naples",
        "City of Marco Island",
        "Everglades City",
      ],
      notes: [
        "Official page lists unincorporated Collier County, Naples, Marco Island, and Everglades City.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      allowedOccupations: ["essential services personnel"],
      propertyTypes: [
        "new or existing single-family home",
        "condominium",
        "mobile/manufactured home built after June 1994",
      ],
      notes: [
        "Buyer must complete a County-approved HUD-certified homebuyer education workshop.",
        "Buyer must be pre-qualified for a first mortgage loan.",
        "First-time buyer includes displaced homemakers and single parents under the official page definition.",
        "Buyer must occupy the home as a primary residence during the loan term.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: COLLIER_HOMEBUYERS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Current Collier.gov page lists a $793,938 maximum purchase price and 2026 income limits by household size for 50%, 80%, and 120% AMI.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: COLLIER_HOMEBUYERS_URL,
      notes: [
        "Official page says funds are first-come, first-qualified, upon funding availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Official page says award amount can change if more than one funding source is used, but does not provide a full stacking matrix.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "exact award tiers by income band",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "real-time fund availability",
        "stacking compatibility and essential-services add-on rules",
      ],
    },
    source: collierHomebuyersSource,
    sources: [collierHomebuyersSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Pull current application packet once accessible without verification wall to confirm award tiers and document requirements.",
        "Confirm live fund availability and essential-services add-on eligibility before final calculator launch.",
      ],
    },
  },
  "charlotte-county-ship": {
    description:
      "Charlotte County SHIP Purchase Assistance provides down payment, closing cost, and gap-funding assistance for eligible first-time buyers through participating lenders, with program status currently listed as open.",
    assistance: {
      display: "Up to $75,000",
      maxAmount: 75000,
      maxAmountSourceUrl: CHARLOTTE_PURCHASE_ASSISTANCE_FAQ_URL,
      calculationNotes:
        "Official FAQ says assistance is a 0% interest, fully forgivable mortgage of up to $75,000, and that SHIP Purchase Assistance may not exceed 50% of the primary mortgage amount.",
    },
    repaymentType: "forgivable",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Charlotte County",
      counties: ["Charlotte"],
      eligibleAreas: ["Charlotte County"],
      notes: [
        "Official FAQ says the property can be anywhere within Charlotte County.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "new or existing single-family home",
        "qualified condominium",
        "community land trust home",
      ],
      notes: [
        "Applicant must have lived in Charlotte County for at least six months or worked continuously full-time for a Charlotte County employer for at least 12 months.",
        "Borrower contribution must be at least $1,000 of the borrower's own funds, reflected in the prior two months of bank statements.",
        "Mobile and manufactured homes are not eligible.",
        "Monthly housing expense should not exceed 30% of gross monthly income and total monthly debts should not exceed 40% of gross monthly income.",
        "Buyer must be able to obtain loan approval with a participating lender and must be pre-qualified before the lender submits the SHIP application.",
        "Eligible applicants must purchase a qualified home within six months of SHIP approval.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: CHARLOTTE_PURCHASE_ASSISTANCE_FAQ_URL,
      effectiveDate: "2026-05-14",
      notes: [
        "Official FAQ lists 2026 annual income limits and a 2026 maximum property value of $544,233.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: CHARLOTTE_HOUSING_SERVICES_URL,
      notes: [
        "Official housing services page says Program Status: Open now - contact a participating lender to apply.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with Florida Housing, Lee HFA FirstPlus, or other assistance.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "forgiveness term length",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: charlottePurchaseAssistanceFaqSource,
    sources: [
      charlottePurchaseAssistanceFaqSource,
      charlotteHousingServicesSource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm the forgiveness term length from the LHAP or lender consortium materials.",
        "Refresh participating lender list and program status before calculator launch.",
      ],
    },
  },
  "marion-county-ship": {
    description:
      "Marion County SHIP Purchase Assistance provides down payment and closing cost assistance as a zero-interest deferred second mortgage for eligible buyers purchasing in Marion County outside Ocala city limits; current county page says new purchase-assistance applications are on hold.",
    assistance: {
      display: "Amount based on income and need; current max not published",
      maxAmount: undefined,
      maxAmountSourceUrl: MARION_HOUSING_URL,
      calculationNotes:
        "Official Marion County page says assistance is based on household income and need but does not publish a current maximum award; older one-page overview also does not list a dollar cap.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 20,
      max: 30,
      display:
        "20- or 30-year second mortgage, forgiven if occupied for full term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Marion County outside Ocala city limits",
      counties: ["Marion"],
      eligibleAreas: ["Marion County outside Ocala city limits"],
      excludedAreas: ["City of Ocala"],
      notes: [
        "Official county page states the home must be in Marion County and outside Ocala city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: false,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 580,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["existing homes"],
      notes: [
        "Applicant cannot currently own a home or be under contract to purchase a home.",
        "Applicant must be a Florida resident for at least one year.",
        "Applicant must contact a participating lender and receive pre-approval/commitment before completing the county application path.",
        "Homebuyer education must be completed before program approval.",
        "Buyer should set aside approximately $3,000-$4,000 for out-of-pocket prepaid and closing-cost items.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MARION_HOUSING_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official county page lists income eligibility at or below 140% AMI, but no current purchase price cap was found in reviewed materials.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MARION_HOUSING_URL,
      notes: [
        "Official county page says purchase assistance is currently on hold and new applications are not being accepted; applicants should check after July 1 for updates.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with Florida Housing, Ocala, Escambia HFA, or other DPA.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current maximum assistance amount",
        "current intake reopen date after July 1, 2026",
        "purchase price cap",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: marionHousingSource,
    sources: [marionHousingSource, marionPurchaseAssistanceOverviewSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Program is on hold; re-check Marion County after July 1, 2026 for application reopening and updated award caps.",
        "Resolve whether the legacy separate Marion County SHIP and purchase-assistance seed records should be consolidated in future data cleanup.",
      ],
    },
  },
  "marion-county-pa": {
    description:
      "Marion County Homebuyer Purchase Assistance appears to be the same current county-administered purchase-assistance pathway as Marion County SHIP, serving eligible buyers purchasing outside Ocala city limits; current intake is on hold.",
    assistance: {
      display: "Amount based on income and need; current max not published",
      maxAmount: undefined,
      maxAmountSourceUrl: MARION_HOUSING_URL,
      calculationNotes:
        "Official Marion County page does not publish a current dollar cap; the legacy seed amount should not be used for calculator estimates until Marion publishes an updated cap.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 20,
      max: 30,
      display:
        "20- or 30-year second mortgage, forgiven if occupied for full term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Marion County outside Ocala city limits",
      counties: ["Marion"],
      eligibleAreas: ["Marion County outside Ocala city limits"],
      excludedAreas: ["City of Ocala"],
      notes: [
        "Official county page states the home must be in Marion County and outside Ocala city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: false,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 580,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["existing homes"],
      notes: [
        "Applicant cannot currently own a home or be under contract to purchase a home.",
        "Applicant must be a Florida resident for at least one year.",
        "Applicant must use the Marion County participating lender path.",
        "Homebuyer education is required before program approval.",
        "Buyer is responsible for some prepaid and closing-cost items.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MARION_HOUSING_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official county page lists income eligibility at or below 140% AMI; current purchase price cap was not found in reviewed materials.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MARION_HOUSING_URL,
      notes: [
        "Official county page says purchase assistance is currently on hold and new applications are not being accepted.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current maximum assistance amount",
        "current intake reopen date after July 1, 2026",
        "purchase price cap",
        "compatible first mortgage loan types",
        "stacking compatibility",
        "deduplication decision versus marion-county-ship",
      ],
    },
    source: marionHousingSource,
    sources: [marionHousingSource, marionPurchaseAssistanceOverviewSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Treat as likely duplicate of marion-county-ship until program owner confirms whether there are two distinct Marion purchase-assistance products.",
        "Re-check after July 1, 2026 for updated program cap and application packet.",
      ],
    },
  },
  "gainesville-dpa": {
    description:
      "City of Gainesville Down Payment Assistance provides up to $30,000 for eligible buyers purchasing within Gainesville city limits, with assistance awarded as a due-on-sale loan that is forgiven after the 10-year term.",
    assistance: {
      display: "$15,000-$30,000 by income tier",
      minAmount: 15000,
      maxAmount: 30000,
      maxAmountSourceUrl: GAINESVILLE_LHAP_URL,
      calculationNotes:
        "Official city page lists up to $30,000; the 2023-2026 LHAP lists $30,000 very-low, $20,000 low, and $15,000 moderate maximum awards.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year due-on-sale loan, forgiven after the 10-year term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Gainesville",
      counties: ["Alachua"],
      cities: ["Gainesville"],
      eligibleAreas: ["City of Gainesville city limits"],
      notes: [
        "Official city page requires the property to be within Gainesville city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "new single-family home",
        "existing single-family home",
        "condominium",
        "townhouse",
      ],
      notes: [
        "Qualified buyer has not owned a home, excluding a mobile home, within the past three years; displaced homemakers, single persons with minor dependents, and certain current owners in dilapidated homes may qualify.",
        "Buyer must complete the City homebuyer education and training workshop before assistance.",
        "Buyer must qualify for a first mortgage loan from a certified Down Payment Assistance Program lender.",
        "Owner financing and lease purchases are not eligible.",
        "Mobile homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: GAINESVILLE_DPA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official city page says gross annual household income cannot exceed HUD limits.",
        "Official city page lists sales price/value caps of $258,000 for existing properties and $313,000 for new homes.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: GAINESVILLE_DPA_URL,
      notes: [
        "Official city page lists 2026 homebuyer education workshop dates and current program details.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not clearly document stacking with Alachua County SHIP or Florida Housing programs.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current HUD income limit table by household size",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: gainesvilleDpaSource,
    sources: [gainesvilleDpaSource, gainesvilleLhapSource],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh HUD income table and certified lender list before calculator launch.",
        "Check whether draft 2026-2029 LHAP changes award tiers once adopted.",
      ],
    },
  },
  "alachua-county-ship": {
    description:
      "Alachua County SHIP provides payment assistance for eligible buyers purchasing in Alachua County outside Gainesville city limits, with first-time buyer or similar displacement/single-parent eligibility paths.",
    assistance: {
      display: "Up to $15,000 per older official NOFA",
      minAmount: 10000,
      maxAmount: 15000,
      maxAmountSourceUrl: ALACHUA_SHIP_NOFA_URL,
      calculationNotes:
        "Official 2023-2024 NOFA lists up to $15,000 for households up to 50% AMI and up to $10,000 for households up to 80% AMI; current public program page does not publish a newer award cap.",
    },
    repaymentType: "unknown",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Alachua County outside Gainesville city limits",
      counties: ["Alachua"],
      eligibleAreas: ["Alachua County outside Gainesville city limits"],
      excludedAreas: ["City of Gainesville"],
      notes: [
        "Official county page says payment assistance is for purchasing in Alachua County outside Gainesville city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "County page lists eligibility paths for applicants who have not owned a primary residence in the last three years, are single parents, displaced homemakers, or displaced from homeownership due to divorce.",
        "Applicant must complete a First Time Home Buyer Course with the City of Gainesville or Neighborhood Housing Development Corporation.",
        "After the course, applicant must contact a SHIP Certified Lender for mortgage pre-approval.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: ALACHUA_SHIP_NOFA_URL,
      effectiveDate: "2024-04-01",
      notes: [
        "Official 2023-2024 NOFA lists 2024 income limits up to 80% AMI for DPA funding, but current page does not publish a newer limit table or purchase price cap.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: ALACHUA_HOUSING_PROGRAMS_URL,
      notes: [
        "Official county page confirms the program path but does not clearly state current remaining funds or application intake status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official county page reviewed does not clearly document stacking with Gainesville DPA or Florida Housing programs.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current award cap",
        "current income limits",
        "purchase price cap",
        "repayment/forgiveness terms",
        "compatible first mortgage loan types",
        "current fund/intake status",
        "stacking compatibility",
      ],
    },
    source: alachuaHousingProgramsSource,
    sources: [alachuaHousingProgramsSource, alachuaShipNofaSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current Alachua County SHIP application packet or LHAP terms for award cap, loan terms, and purchase price limits.",
        "Confirm whether funds are currently available or exhausted.",
      ],
    },
  },
  "levy-county-ship": {
    description:
      "Levy County Homebuyer Assistance helps first-time buyers with up to $30,000 for down payment, closing costs, and possible repairs as a 0% deferred loan, but current county page says SHIP purchase-assistance applications are not being accepted until August 1, 2026.",
    assistance: {
      display: "Up to $30,000",
      maxAmount: 30000,
      maxAmountSourceUrl: LEVY_HOUSING_APPLICATION_URL,
      calculationNotes:
        "Official October 2025 housing application update and 2025-2028 LHAP list a $30,000 maximum purchase-assistance award.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display:
        "0%, 10-year loan; fully forgiven if owner-occupied for 10 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Levy County",
      counties: ["Levy"],
      eligibleAreas: ["Levy County"],
      notes: ["Official SHIP page identifies Levy County SHIP funds."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["existing home", "newly constructed home"],
      notes: [
        "Applicant must complete a Levy County SHIP Program and/or HUD-approved homebuyer education class.",
        "Applicant must be pre-approved for a first mortgage through a lending institution.",
        "Applicant must contribute at least $1,000 of their own money.",
        "Mobile and manufactured homes are not eligible.",
        "Applicant must keep homeowner's insurance.",
        "Funds may be used for down payment, closing costs, and possible home repairs.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: LEVY_LHAP_URL,
      effectiveDate: "2025-06-17",
      notes: [
        "Official 2025-2028 LHAP serves very-low, low, and moderate-income households under HUD/FHFC income guidelines; current purchase price cap was not found in reviewed materials.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: LEVY_HOUSING_URL,
      notes: [
        "Official Levy County Housing page says SHIP Purchase Assistance applications are not currently being accepted and the next submission period begins August 1, 2026.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current application packet after August 1, 2026",
        "purchase price cap",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: levyHousingSource,
    sources: [levyHousingSource, levyHousingApplicationSource, levyLhapSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Re-check Levy County on or after August 1, 2026 for reopened application materials and any changed limits.",
        "Confirm purchase price cap and first mortgage requirements from the next application packet.",
      ],
    },
  },
  "columbia-county-ship": {
    description:
      "Columbia County SHIP Purchase Assistance is administered through Suwannee River Economic Council and provides tiered down payment and closing-cost assistance for eligible homebuyers, with maximum participation based on income category.",
    assistance: {
      display: "$20,000-$30,000 by income tier",
      minAmount: 20000,
      maxAmount: 30000,
      maxAmountSourceUrl: SREC_COLUMBIA_PURCHASE_APPLICATION_URL,
      calculationNotes:
        "Current SREC Columbia County application lists $30,000 very-low, $25,000 low, and $20,000 moderate maximum participation; down payment assistance cannot exceed 50% of the cost of the home including closing costs.",
    },
    repaymentType: "unknown",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Columbia County",
      counties: ["Columbia"],
      eligibleAreas: ["Columbia County"],
      notes: [
        "SREC service-area page lists Columbia County SHIP services, including down payment and closing cost assistance for homeownership.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "newly constructed home",
        "existing structure",
        "mobile home no older than five years when land/home rules are met",
      ],
      notes: [
        "Application must include a lender pre-qualification or pre-approval letter; applications without one are not accepted.",
        "Minimum client cash participation is 1% of the sales price.",
        "Applicant must complete a homeowner course before loan closing.",
        "Mobile home funds are extremely limited and may not be available.",
        "If buying a mobile home, applicant must own the land or purchase the mobile home and land together; SHIP lien is placed on both home and land.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: SREC_COLUMBIA_PURCHASE_APPLICATION_URL,
      effectiveDate: "2024-04-01",
      notes: [
        "SREC Columbia application lists a $253,000 maximum sales price and 2024 Columbia County SHIP income limits through moderate income.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: SREC_COLUMBIA_URL,
      notes: [
        "SREC page links a current purchase application, but it does not clearly publish current Columbia County remaining funds or intake cutoff.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "SREC application reviewed does not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "repayment/forgiveness terms",
        "first-time buyer rule confirmation",
        "current income limits",
        "current purchase price cap",
        "current fund/intake status",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: srecColumbiaPurchaseApplicationSource,
    sources: [
      srecColumbiaPurchaseApplicationSource,
      srecColumbiaSource,
      srecShipSource,
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "SREC is partner/administrator rather than county.gov; seek Columbia County or current LHAP confirmation for source-quality upgrade.",
        "Find repayment/forgiveness terms and current funding status before high-confidence calculator use.",
      ],
    },
  },
  "jacksonville-dpa": {
    description:
      "Jacksonville's Headstart to Homeownership Program offers up to $25,000 in down payment and closing-cost assistance for eligible low-to-moderate-income buyers purchasing a primary residence in Jacksonville/Duval County.",
    assistance: {
      display: "Up to $25,000",
      maxAmount: 25000,
      maxAmountSourceUrl: JACKSONVILLE_HOUSING_SERVICES_URL,
      calculationNotes:
        "Official Housing Services page lists financial assistance up to $25,000 for down payment and closing costs; it does not publish a current percentage formula.",
    },
    repaymentType: "unknown",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "Jacksonville/Duval County",
      counties: ["Duval"],
      cities: ["Jacksonville"],
      eligibleAreas: ["Jacksonville/Duval County"],
      notes: [
        "Official page states all homes must be in Jacksonville/Duval County to be eligible for Housing Services programs.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: false,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["primary residence"],
      notes: [
        "Eligible applicants must not currently own a home.",
        "Applicant must meet HUD household income criteria and total gross household income cannot exceed 80% AMI for Duval County.",
        "Homes must comply with Section 8 Housing Quality Standards before closing.",
        "Applicants should not sign a sales contract before being approved.",
        "Applicants must contact the Housing Services Manager for approved lenders, eligibility requirements, interest rate and terms, mortgage structure, assumability, housing standards, and lead-based paint clearance requirements.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: JACKSONVILLE_HOUSING_SERVICES_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page confirms total gross household income cannot exceed 80% AMI for Duval County but does not publish a current purchase price cap on the reviewed page.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: JACKSONVILLE_HOUSING_SERVICES_URL,
      notes: [
        "Official page says the H2H program is subject to funding limitations and provides contact information for next steps.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not clearly document stacking with Florida Housing, JHFA, or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "repayment/forgiveness terms",
        "homebuyer education requirement",
        "purchase price cap",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "real-time funding availability",
        "stacking compatibility",
      ],
    },
    source: jacksonvilleHousingServicesSource,
    sources: [jacksonvilleHousingServicesSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Contact Jacksonville Housing Services or find current H2H application packet for loan terms, purchase price cap, education, and lender rules.",
        "Do not reuse the legacy 3-year forgiveness or $335,000 cap until confirmed by official current materials.",
      ],
    },
  },
  "st-johns-county-ship": {
    assistance: {
      display: "Up to $100,000",
      maxAmount: 100000,
      maxAmountSourceUrl: ST_JOHNS_DPA_URL,
      calculationNotes:
        "Official county page lists a maximum award up to $100,000; total SHIP assistance cannot exceed the first mortgage amount.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display:
        "15-year deferred loan, forgiven 10% per year beginning in year 6",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "St. Johns County",
      counties: ["St. Johns"],
      eligibleAreas: ["St. Johns County"],
      notes: ["Official page requires the home to be in St. Johns County."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "new single-family home",
        "existing single-family home",
        "condominium",
        "duplex",
        "townhome",
        "mobile/manufactured home and land package 20 years old or newer",
      ],
      notes: [
        "Applicant must currently live or work in St. Johns County for at least 12 consecutive months.",
        "First-time homeowner means applicant has not owned a home in the last three years.",
        "Applicant must submit an application for the Housing and Financial Counseling Program.",
        "Homebuyer education class must be provided by the SJC HUD Certified Housing Counselor and certificate is good for one year.",
        "Applicants should prepare for up to 3% of the purchase price before closing; minimum $1,000 required.",
        "First mortgage must be fixed-rate; ARMs, prepayment penalties, negative amortization, balloon loans, and owner financing are not permitted.",
        "Repairs may be funded as needed for major systems but are not eligible for condominiums, duplexes, or townhomes.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: ST_JOHNS_DPA_URL,
      effectiveDate: "2025-04-01",
      notes: [
        "Official page references 2025 SHIP/HHRP combined income limits effective 2025-04-01 and lists a $400,000 purchase price cap for DPA.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: ST_JOHNS_DPA_URL,
      notes: [
        "Official page says DPA funding is subject to availability and funds are first-qualified, first-served.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Official counseling page says SHIP has evolved to an additional source of assistance that may be partnered with other state or federal assistance on an as-needed basis, but borrower-specific stacking still requires county/lender review.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current 2026 income limits",
        "compatible first mortgage loan types beyond fixed-rate rule",
        "real-time fund availability",
        "state/federal stacking details",
      ],
    },
    source: stJohnsDpaSource,
    sources: [stJohnsDpaSource, stJohnsShipSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh income limits and participating lender list when 2026 values are published.",
        "Confirm live fund availability and waitlist status before consumer recommendation.",
      ],
    },
  },
  "clay-county-ship": {
    assistance: {
      display: "Up to $20,000",
      maxAmount: 20000,
      maxAmountSourceUrl: CLAY_FTHB_DPA_URL,
      calculationNotes:
        "Official Clay County page lists up to $20,000 for down payment and closing cost assistance.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Clay County",
      counties: ["Clay"],
      eligibleAreas: ["Clay County"],
      notes: ["Official page lists the eligible area as Clay County."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "varies",
      propertyTypes: [
        "new or existing one-to-four-unit detached or attached home",
        "condominium",
        "townhome",
      ],
      notes: [
        "Buyer must be able to reside in the United States permanently.",
        "Buyer must occupy the property within 60 days of closing.",
        "Property may never be rented.",
        "Applicant should see the SHIP office for a list of participating lenders.",
        "Mobile homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: CLAY_FTHB_DPA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists approximate income limits of $78,865 for 1-2 person households and $90,694 for 3+ person households for FHA, USDA-RD, and VA loans.",
        "Official page lists a $322,925 purchase price limit.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: CLAY_FTHB_DPA_URL,
      notes: [
        "Official page confirms the program but does not clearly state remaining funds or intake status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "not_allowed",
      withLocalPrograms: "unknown",
      notes: [
        "Program appears tied to its own FHA/USDA-RD/VA first mortgage income criteria; official page does not clearly document external DPA stacking.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund/intake status",
        "borrower contribution requirement",
        "full participating lender and product matrix",
        "stacking compatibility",
      ],
    },
    source: clayFthbDpaSource,
    sources: [clayFthbDpaSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current funding and whether applications are actively being accepted.",
        "Pull participating lender/product details from Clay County SHIP office before calculator launch.",
      ],
    },
  },
  "pensacola-arpa": {
    description:
      "The City of Pensacola Homebuyer Incentive Program provided up to $30,000 in ARPA-funded down payment and closing cost assistance for low-income buyers purchasing inside Pensacola city limits, but official city guidance says all COPHIP-ARPA funds have been exhausted.",
    assistance: {
      display: "Up to $30,000; funds exhausted",
      maxAmount: 30000,
      maxAmountSourceUrl: PENSACOLA_HOME_BUYER_PROGRAMS_URL,
      calculationNotes:
        "Official city page lists up to $30,000 in ARPA-funded down payment and closing cost assistance, but states all COPHIP-ARPA Homebuyer funding was exhausted effective 2024-11-27.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Pensacola",
      counties: ["Escambia"],
      cities: ["Pensacola"],
      eligibleAreas: ["City of Pensacola city limits"],
      notes: [
        "Official city page requires homes purchased with COPHIP-ARPA to be within Pensacola city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["primary residence within Pensacola city limits"],
      notes: [
        "Applicant's total household income must be within maximum income eligibility limits.",
        "Applicant must have sufficient income and creditworthiness to qualify for primary financing from a participating lender.",
        "Applicant must complete an eight-hour HUD-certified homebuyer education class before closing.",
        "Sales price may not exceed current Florida Housing Finance Corporation annual purchase price limits.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: true,
      limitsSourceUrl: PENSACOLA_HOME_BUYER_PROGRAMS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official city page references maximum income eligibility limits and Florida Housing annual purchase price limits but does not publish a current table on the reviewed page.",
      ],
    },
    availability: {
      status: "exhausted",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PENSACOLA_HOME_BUYER_PROGRAMS_URL,
      notes: [
        "Official city page says all COPHIP-ARPA Homebuyer funding was exhausted effective 2024-11-27 and future funding will be noticed if available.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not document stacking rules, and the program is currently exhausted.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "future funding availability",
        "current income limit table",
        "first-time buyer rule confirmation",
        "compatible first mortgage loan types",
        "borrower contribution requirement",
        "stacking compatibility",
      ],
    },
    source: pensacolaHomeBuyerProgramsSource,
    sources: [pensacolaHomeBuyerProgramsSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Do not surface as available unless the City of Pensacola posts new COPHIP-ARPA funding.",
        "If reopened, confirm whether first-time buyer rules and repayment terms changed.",
      ],
    },
  },
  "pensacola-escambia-ship": {
    description:
      "Escambia County and the City of Pensacola jointly administer SHIP first-time homebuyer assistance of up to $45,000 for income-eligible buyers, but current official pages say funding is fully allocated or not yet determined.",
    assistance: {
      display: "Up to $45,000; funds fully allocated/undetermined",
      maxAmount: 45000,
      maxAmountSourceUrl: ESCAMBIA_HOME_BUYER_PROGRAMS_URL,
      calculationNotes:
        "Escambia County lists loans of up to $45,000 based on household income; City of Pensacola also lists SHIP funds up to $45,000 based on income.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display:
        "10-year forgivable loan if owner-occupied and not sold, rented, or transferred",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Escambia County and City of Pensacola",
      counties: ["Escambia"],
      cities: ["Pensacola"],
      eligibleAreas: ["Escambia County", "City of Pensacola"],
      notes: [
        "Escambia County page says the county and city jointly administer the SHIP program.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["primary residence", "non-mobile/manufactured home"],
      notes: [
        "Applicant must not have owned a home or had ownership interest in homesteaded property within the last three years.",
        "Applicant's total gross family income must not exceed 120% AMI for Escambia County adjusted for family size.",
        "Applicant must have sufficient income and creditworthiness to qualify for primary financing from a participating lender.",
        "Applicant must complete an eight-hour HUD-certified homebuyer education class before closing.",
        "Minimum buyer contribution is $500 for very-low-income buyers, $750 for low-income buyers, and $1,000 for moderate-income buyers.",
        "Mobile/manufactured homes are not eligible.",
        "Buyer must occupy the residence as primary residence and apply for homestead exemption within the first year.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: true,
      limitsSourceUrl: ESCAMBIA_HOME_BUYER_PROGRAMS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Escambia County page lists income up to 120% AMI and a $481,176 maximum sales price.",
        "City page says sales price may not exceed Florida Housing annual purchase price limits.",
      ],
    },
    availability: {
      status: "exhausted",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: ESCAMBIA_HOME_BUYER_PROGRAMS_URL,
      notes: [
        "Escambia County page says SHIP Purchase Assistance funds were fully allocated as of August 2024; City page says SHIP Homebuyer funding has not been determined.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official pages reviewed do not clearly document stacking with Florida Housing, ECHFA, HOME, or COPHIP-ARPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "future funding availability",
        "current income limit table",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: escambiaHomeBuyerProgramsSource,
    sources: [
      escambiaHomeBuyerProgramsSource,
      pensacolaHomeBuyerProgramsSource,
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Re-check Escambia County and City of Pensacola when new SHIP funding is posted.",
        "Confirm whether the city/county use identical limits and lender lists when funds reopen.",
      ],
    },
  },
  "escambia-county-hfa": {
    description:
      "Escambia County HFA offers a multi-county homeownership program pairing a 30-year fixed first mortgage with up to $10,000 in Classic DPA as a 0%, non-amortizing, 30-year deferred second mortgage.",
    assistance: {
      display: "Up to $10,000",
      maxAmount: 10000,
      maxAmountSourceUrl: ESCAMBIA_HFA_HOMEOWNERSHIP_URL,
      calculationNotes:
        "Official ECHFA Homeownership Program page lists a Classic DPA Program second mortgage up to $10,000 for down payment and/or closing costs.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional"],
    geography: {
      scope: "regional",
      jurisdictionLevel: "regional",
      display: "ECHFA participating counties",
      counties: [
        "Alachua",
        "Bay",
        "Bradford",
        "Escambia",
        "Franklin",
        "Gadsden",
        "Gulf",
        "Hernando",
        "Indian River",
        "Jackson",
        "Jefferson",
        "Leon",
        "Madison",
        "Marion",
        "Martin",
        "Okaloosa",
        "Santa Rosa",
        "St. Lucie",
        "Taylor",
        "Wakulla",
        "Walton",
      ],
      eligibleAreas: ["ECHFA participating counties"],
      notes: [
        "Official ECHFA participating-counties page lists 21 Florida counties.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "varies",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "varies",
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: true,
      propertyTypes: ["qualified property in a participating county"],
      notes: [
        "Applicant may qualify as a first-time buyer, a former homeowner who has not owned a principal residence within three years, a targeted-area buyer, or an honorably discharged veteran.",
        "Minimum 640 FICO applies for FHA, USDA-RD, and VA loans.",
        "Freddie Mac HFA Advantage conventional borrowers must complete approved homebuyer education before closing.",
        "Household income and purchase price must not exceed the participating county limits.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: ESCAMBIA_HFA_QUALIFY_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official ECHFA page says household income and purchase price must not exceed participating county limits, but the reviewed pages do not expose every county table inline.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: ESCAMBIA_HFA_URL,
      notes: [
        "Official HFA home page lists current interest rates and active Homeownership Program links.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "not_allowed",
      withLocalPrograms: "unknown",
      notes: [
        "Program is paired with ECHFA first mortgage options; official pages reviewed do not clearly document external DPA stacking.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current county-specific income and purchase price tables",
        "borrower contribution requirement",
        "full conventional/government product matrix",
        "local program stacking compatibility",
      ],
    },
    source: escambiaHfaHomeownershipSource,
    sources: [
      escambiaHfaSource,
      escambiaHfaHomeownershipSource,
      escambiaHfaQualifySource,
      escambiaHfaCountiesSource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Pull current participating county limit tables before using for exact eligibility calculations.",
        "Confirm lender reservation availability and stacking rules for each county.",
      ],
    },
  },
  "okaloosa-county-ship": {
    description:
      "Okaloosa County SHIP Purchase Assistance is a first-time homebuyer program submitted through participating lenders, but official county guidance currently says purchase-assistance applications are temporarily closed.",
    assistance: {
      display: "Current award cap not published; applications closed",
      maxAmount: undefined,
      maxAmountSourceUrl: OKALOOSA_SHIP_URL,
      calculationNotes:
        "Official county page confirms the purchase assistance program but does not publish a current dollar cap in the reviewed page or application form.",
    },
    repaymentType: "unknown",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Okaloosa County",
      counties: ["Okaloosa"],
      eligibleAreas: ["Okaloosa County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Interested applicants must first work with a participating lender to get pre-approved for a first mortgage.",
        "Applicant does not apply directly to the county; the lender submits the application on the buyer's behalf.",
        "County prioritizes special needs, then very-low/low-income statutory set-asides, then essential service personnel as defined in the LHAP.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: OKALOOSA_SHIP_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page confirms income eligibility but does not publish the current income table or purchase price cap in the reviewed material.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: OKALOOSA_SHIP_URL,
      notes: [
        "Official page says the SHIP Purchase Assistance Program is temporarily closed and not accepting applications.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not clearly document stacking with ECHFA, Florida Housing, or other DPA.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current award cap",
        "current income limits",
        "purchase price cap",
        "repayment/forgiveness terms",
        "homebuyer education requirement",
        "compatible first mortgage loan types",
        "future intake reopening",
        "stacking compatibility",
      ],
    },
    source: okaloosaShipSource,
    sources: [okaloosaShipSource, okaloosaShipApplicationSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Re-check Okaloosa County for reopening and current purchase-assistance summary.",
        "Find current LHAP or lender packet for award cap, loan terms, and purchase price limit.",
      ],
    },
  },
  "santa-rosa-county-ship": {
    description:
      "Santa Rosa County SHIP First Time Homebuyer assistance provides tiered down payment and closing-cost assistance, but the county currently says the program is not accepting applications because funds are depleted.",
    assistance: {
      display: "$25,000 moderate; $50,000 low and below",
      minAmount: 25000,
      maxAmount: 50000,
      maxAmountSourceUrl: SANTA_ROSA_SHIP_SUMMARY_URL,
      calculationNotes:
        "Official 2026 SHIP summary lists $25,000 for moderate-income households and $50,000 for low-income and below.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display:
        "10-year deferred payment loan; half forgiven after year 5 and 20% forgiven each remaining year",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Santa Rosa County",
      counties: ["Santa Rosa"],
      eligibleAreas: ["Santa Rosa County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "varies",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["new home", "existing home", "modular home"],
      notes: [
        "Applicant must use a registered lender that has completed county training.",
        "Applicant must have adequate stable income and acceptable credit as determined by a participating mortgage lender.",
        "Housing unit must be affordable with PITI not exceeding 30% of gross monthly income, with limited compensating-factor exceptions up to 39%; applications at 40% or higher are not approved.",
        "All recipients and spouses must complete a HUD-approved homebuyer education class before funding.",
        "Applicants whose total family assets exceed $25,000 are ineligible unless assets are used toward closing to reduce remaining household assets to $25,000 or less.",
        "Non-occupying co-borrowers are not allowed.",
        "Mobile/manufactured homes are not allowable; modular homes with a DCA-approved insignia are allowed.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: SANTA_ROSA_SHIP_SUMMARY_URL,
      effectiveDate: "2026-05-01",
      notes: [
        "Official 2026 summary lists low and moderate income limits effective 2026-05-01 and a maximum sales price of $544,233.",
      ],
    },
    availability: {
      status: "exhausted",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: SANTA_ROSA_HOUSING_PROGRAMS_URL,
      notes: [
        "Official county page says the SHIP First Time Homebuyer Program is not accepting applications as of 2026-01-14 due to depleted funds.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official materials reviewed do not clearly document stacking with ECHFA, Florida Housing, or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "future funding availability",
        "compatible first mortgage loan types",
        "complete registered lender list",
        "stacking compatibility",
      ],
    },
    source: santaRosaHousingProgramsSource,
    sources: [santaRosaHousingProgramsSource, santaRosaShipSummarySource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Re-check Santa Rosa County when new fiscal-year SHIP funding is released.",
        "Confirm lender list and whether the 2026 summary terms remain unchanged when applications reopen.",
      ],
    },
  },
  "panama-city-fthb": {
    description:
      "Panama City's First-Time Homebuyers Program provides purchase assistance for eligible current and future city residents buying inside Panama City limits, including up to $50,000 for down payment and up to $10,000 for eligible closing costs.",
    assistance: {
      display: "Up to $50,000 DPA plus up to $10,000 closing costs",
      maxAmount: 60000,
      maxAmountSourceUrl: PANAMA_CITY_HOUSING_PROGRAMS_URL,
      calculationNotes:
        "Official city page lists up to $50,000 for down payment assistance and up to $10,000 for eligible closing costs.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Panama City",
      counties: ["Bay"],
      cities: ["Panama City"],
      eligibleAreas: ["City of Panama City city limits"],
      notes: [
        "Official city page requires the home to be located in Panama City, Florida city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family home",
        "townhouse",
        "condominium",
        "owner-occupied side of duplex",
      ],
      notes: [
        "Applicant must submit a completed application and all required program documentation.",
        "Applicant must complete a first-time homebuyer course offered by a certified HUD-approved counseling agency before closing.",
        "Applicant must obtain pre-approval from a mortgage lender.",
        "Applicant must not have purchased or owned a home within the last three years.",
        "Property must pass standard home inspections.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PANAMA_CITY_HOUSING_PROGRAMS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official city page lists household income limits through 120% AMI and says sale price cannot exceed $300,000.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PANAMA_CITY_HOUSING_PROGRAMS_URL,
      notes: [
        "Official city page confirms program details but does not clearly state current remaining funds or intake status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not clearly document stacking with Bay County SHIP, ECHFA, or Florida Housing.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund/intake status",
        "repayment/forgiveness final terms",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: panamaCityHousingProgramsSource,
    sources: [
      panamaCityHousingProgramsSource,
      panamaCityCommunityDevelopmentSource,
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current application intake and remaining funds with Panama City Housing and Community Services.",
        "Find current loan document/LHAP for exact lien forgiveness or repayment terms.",
      ],
    },
  },
  "bay-county-ship": {
    description:
      "Bay County SHIP First-Time Homebuyer assistance helps eligible buyers with down payment, closing costs, and possible small repairs through a 15-year forgivable county SHIP loan, but current public procedures do not publish a maximum award cap.",
    assistance: {
      display: "Award amount not published in official procedures",
      maxAmount: undefined,
      maxAmountSourceUrl: BAY_COUNTY_SHIP_APPLICATION_PROCEDURES_URL,
      calculationNotes:
        "Official Bay County procedure sheet explains the application path and eligible uses, but does not publish a current maximum award amount.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display:
        "15-year occupancy term; prorated repayment if sold/moved/transferred before year 15",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Bay County",
      counties: ["Bay"],
      eligibleAreas: ["Bay County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "existing home",
        "new construction",
        "manufactured/mobile home built after June 30, 1994 when land/home requirements are met",
        "modular home",
      ],
      notes: [
        "Applicant must complete a SHIP homebuyer education class.",
        "Applicant must get pre-approved for a mortgage loan by a lender.",
        "Applicant sends pre-approval letter and lender information to Bay County Housing Services before receiving the application packet.",
        "County case manager determines eligibility and provides an award letter stating the maximum purchase price allowable.",
        "SHIP funds may be used for down payment, closing costs, and assistance with small repairs.",
        "Homebuyer education class is valid for three years from completion.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: BAY_COUNTY_SHIP_APPLICATION_PROCEDURES_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official procedure sheet says Bay County will provide an award letter stating the maximum purchase price allowable, but the current public sheet does not publish the cap or income table.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: BAY_COUNTY_SHIP_APPLICATION_PROCEDURES_URL,
      notes: [
        "Official procedure sheet provides contact/application steps but does not clearly state whether funds are currently available.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official procedure sheet does not clearly document stacking with Panama City, ECHFA, or Florida Housing assistance.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current maximum assistance amount",
        "current income limits",
        "current purchase price cap",
        "current fund/intake status",
        "compatible first mortgage loan types",
        "borrower contribution requirement",
        "stacking compatibility",
      ],
    },
    source: bayCountyShipApplicationProceduresSource,
    sources: [bayCountyShipApplicationProceduresSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Contact Bay County Housing Services or find the current full application packet/LHAP for award cap and limits.",
        "Confirm current fund availability before displaying a calculator estimate.",
      ],
    },
  },
  "tallahassee-tlc": {
    description:
      "Leon County SHIP first-time homebuyer assistance is administered through Tallahassee Lenders' Consortium and provides deferred, no-interest down payment assistance for eligible first-time buyers using approved lenders.",
    assistance: {
      display: "Amount not published on official county page",
      maxAmount: undefined,
      percentOfPurchasePrice: undefined,
      maxAmountSourceUrl: LEON_FTHB_ASSISTANCE_URL,
      calculationNotes:
        "Official Leon County page confirms SHIP funds are available for first-time homebuyers seeking down payment assistance, but does not publish a current maximum award or percentage cap.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Leon County / Tallahassee area",
      counties: ["Leon"],
      cities: ["Tallahassee"],
      eligibleAreas: ["Leon County"],
      notes: [
        "Official Leon County page refers applicants to Tallahassee Lenders' Consortium for more information.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["non-mobile home"],
      notes: [
        "First-time homebuyer includes buyers with no ownership in a principal residence during the three-year period ending on the purchase date, with listed exceptions for spouses, single parents, displaced homemakers, certain non-permanent-foundation homes, and code-noncompliant homes.",
        "Applicant must complete a homebuyer education program with a HUD-approved counseling agency before closing.",
        "Applicant must secure a first mortgage by an approved lender.",
        "Applicant must be able to contribute $500 toward down payment or closing costs.",
        "Mobile homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: LEON_FTHB_ASSISTANCE_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page confirms SHIP assistance but does not publish current income limits or purchase price cap.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: LEON_FTHB_ASSISTANCE_URL,
      notes: [
        "Official Leon County page says SHIP funds are available for first-time homebuyers seeking down payment assistance.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page reviewed does not clearly document stacking with ECHFA, Florida Housing, or other DPA.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current maximum assistance amount",
        "current income limits",
        "purchase price cap",
        "forgiveness or repayment term length",
        "compatible first mortgage loan types",
        "current TLC funding status",
        "stacking compatibility",
      ],
    },
    source: leonFthbAssistanceSource,
    sources: [leonFthbAssistanceSource],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current Tallahassee Lenders' Consortium/Leon County application packet for max award, term, and limits.",
        "Do not reuse the legacy 20% of purchase price estimate until official current materials confirm it.",
      ],
    },
  },
  "gadsden-county-hfa": {
    description:
      "Gadsden County buyers may use the Escambia County HFA participating-county program, which pairs 30-year fixed first mortgage options with up to $10,000 in Classic DPA through a 0%, non-amortizing, 30-year deferred second mortgage.",
    assistance: {
      display: "Up to $10,000",
      maxAmount: 10000,
      maxAmountSourceUrl: GADSDEN_ECHFA_URL,
      calculationNotes:
        "Official ECHFA Gadsden page lists up to $10,000 in DPA through the Classic DPA Program.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Gadsden County",
      counties: ["Gadsden"],
      eligibleAreas: ["Gadsden County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "varies",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "varies",
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: true,
      propertyTypes: [
        "attached or detached single-family home",
        "condominium",
        "townhouse/townhome",
        "PUD",
      ],
      notes: [
        "Borrowers must be first-time homebuyers, with exceptions for qualified veterans and targeted-area purchases.",
        "Borrowers must meet normal mortgage creditworthiness requirements and occupy the home as principal residence.",
        "Homeownership education certificate is required for at least one qualified borrower using Freddie Mac HFA conventional loans.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: GADSDEN_ECHFA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official Gadsden page lists income limits for governmental and Freddie Mac HFA Advantage options and purchase price limits of $544,232 non-target / $665,173 target.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: GADSDEN_ECHFA_URL,
      notes: [
        "Official ECHFA page says mortgage loans are available on a first-come, first-served basis.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "not_allowed",
      withLocalPrograms: "unknown",
      notes: [
        "Program requires ECHFA first mortgage options; official page does not clearly document external DPA stacking.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "borrower contribution requirement",
        "current lender reservation availability",
        "local program stacking compatibility",
      ],
    },
    source: gadsdenEchfaSource,
    sources: [gadsdenEchfaSource, escambiaHfaHomeownershipSource],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm live ECHFA funds/rates and any updated Gadsden limits before final calculator use.",
        "Clarify whether Gadsden local SHIP assistance exists separately from ECHFA.",
      ],
    },
  },
  "gulf-county-ship": {
    description:
      "Gulf County SHIP Purchase Assistance helps existing Gulf County residents who are first-time buyers with down payment, closing costs, principal buy-down, and other eligible purchase costs, with current public page/LHAP award caps requiring review because they conflict.",
    assistance: {
      display:
        "$20,000-$40,000 by income tier; public page also says up to $50,000",
      minAmount: 20000,
      maxAmount: 40000,
      maxAmountSourceUrl: GULF_LHAP_URL,
      calculationNotes:
        "Formal 2024-2027 LHAP lists $40,000 very-low, $30,000 low, and $20,000 moderate caps, not to exceed 40%/30%/20% of purchase price respectively; the public SHIP page separately says up to $50,000, so the calculator should use the stricter LHAP cap until reconciled.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display:
        "10-year 0% deferred loan, forgiven proportionately 10% per year",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Gulf County",
      counties: ["Gulf"],
      eligibleAreas: ["Gulf County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "newly constructed single-family home",
        "existing single-family home",
        "manufactured housing constructed after June 1994",
      ],
      notes: [
        "Applicant must be an existing Gulf County resident at application to qualify.",
        "Applicant must not have more than $50,000 in assets, excluding the assisted property, qualifying retirement accounts/plans, and necessary personal property.",
        "Applicant must not own other real property suitable for occupancy.",
        "Applicant must not have previously received SHIP/HHRP funds.",
        "Purchase assistance DTI may not exceed 35% unless the loan is VA, FHA, or another government-backed loan program and approved by the lender.",
        "Owner financing is not allowed.",
        "Rural Development or other program funds may be used with SHIP according to the county FAQ.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: GULF_LHAP_URL,
      effectiveDate: "2024-05-15",
      notes: [
        "Formal LHAP says income limits are updated annually by HUD/FHFC and lists a $255,000 maximum purchase price.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: GULF_SHIP_URL,
      notes: [
        "Official page links the ARPC Neighborly application portal and says applications are accepted until funding has been spent after required advertising.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Formal LHAP says SHIP may be leveraged with or supplement other Florida Housing programs; county FAQ says other program funds such as Rural Development may be used with SHIP.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "reconcile $50,000 public-page cap versus $40,000 LHAP cap",
        "current 2026 income limits",
        "homebuyer education requirement",
        "borrower contribution requirement",
        "compatible first mortgage loan types",
        "real-time funding availability",
      ],
    },
    source: gulfLhapSource,
    sources: [gulfLhapSource, gulfShipSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Resolve official amount conflict between Gulf County SHIP page and LHAP before high-confidence calculator use.",
        "Confirm live funding and application window with ARPC/Gulf County SHIP administrator.",
      ],
    },
  },
  "jackson-county-ship": {
    description:
      "Jackson County SHIP Purchase Assistance, administered through Apalachee Regional Planning Council, assists first-time buyers purchasing existing single-family homes or condominiums in Jackson County with down payment, closing costs, principal buy-down, and repairs needed for affordable homeownership.",
    assistance: {
      display: "Amount not published on official page",
      maxAmount: undefined,
      maxAmountSourceUrl: JACKSON_HOUSING_GRANTS_URL,
      calculationNotes:
        "Official Jackson County page confirms eligible purchase-assistance uses but does not publish a current maximum award amount in the reviewed page.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      min: 5,
      max: 10,
      display:
        "5- or 10-year zero-interest deferred mortgage; repayment due only during note term on listed defaults",
    },
    compatibleLoanTypes: ["hfa", "usda", "unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Jackson County",
      counties: ["Jackson"],
      eligibleAreas: ["Jackson County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["existing single-family home", "condominium"],
      notes: [
        "Purchase Assistance is for first-time buyers purchasing an existing single-family home or condominium within Jackson County.",
        "Funding is provided as a second or subordinate mortgage loan.",
        "Funds may be used for down payment, closing costs, principal buy-down, and repairs needed for affordable home ownership.",
        "SHIP funds may be used with a first mortgage from participating lenders, Florida Housing Finance Corporation's Bond Program, or Rural Development.",
        "Application acceptance is based on funding available.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: JACKSON_HOUSING_GRANTS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page links income limits and LHAP, but current extracted page does not expose income table or purchase price cap.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: JACKSON_HOUSING_GRANTS_URL,
      notes: [
        "Official page provides application portal and contact information but says acceptance is based on funding available without publishing remaining funds.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Official page says SHIP funds may be used with Florida Housing's Bond Program or Rural Development, but full stacking rules need lender/ARPC review.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current maximum assistance amount",
        "current income limits",
        "purchase price cap",
        "which purchases receive 5-year versus 10-year terms",
        "homebuyer education requirement",
        "borrower contribution requirement",
        "current fund/intake status",
      ],
    },
    source: jacksonHousingGrantsSource,
    sources: [jacksonHousingGrantsSource, jacksonLhapSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Review the current Jackson LHAP PDF manually or contact ARPC for award cap and exact term schedule.",
        "Confirm current funding availability and whether new construction is excluded for purchase assistance.",
      ],
    },
  },
  "broward-county-hpa": {
    assistance: {
      display: "Up to $80,000; community-specific amounts vary",
      maxAmount: 80000,
      maxAmountSourceUrl: BROWARD_HPA_FUNDS_URL,
      calculationNotes:
        "County flyer lists up to $80,000 for many service areas, with some community exceptions; verify the property city before estimating.",
    },
    repaymentType: "deferred",
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "portfolio"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Broward County service areas",
      counties: ["Broward"],
      cities: ["Plantation", "Weston", "Hollywood"],
      eligibleAreas: [
        "Plantation",
        "Weston",
        "Hollywood",
        "Broward County service areas listed by the Housing Finance Division",
      ],
      notes: [
        "Many Broward cities operate separate programs or may show no county HPA funds; city-level availability must be checked before matching.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "varies",
      propertyTypes: [
        "single-family",
        "condominium",
        "villa",
        "townhome",
        "new construction",
        "existing home",
      ],
      notes: [
        "Buyer contribution is 3% of purchase price, except the official page says this does not apply to VA loans.",
        "Mobile homes and cooperatives are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: BROWARD_HPA_URL,
      effectiveDate: "2026-05-01",
      notes: [
        "Official page shows 80% AMI limits effective May 2026 and a maximum sales price of $679,324, with higher Weston pricing possibly available.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: BROWARD_HPA_URL,
      notes: [
        "Funds are first-come, first-qualified, first-served; official page lists several cities with no funds and only specific service areas currently available.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "County HPA availability depends on the property city/service area and lender reservation; stacking needs city and lender review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "property city/service-area availability",
        "real-time city fund balance",
        "stacking compatibility with first mortgage product",
      ],
    },
    source: browardHpaSource,
    sources: [
      browardHpaSource,
      {
        label: "Broward County HPA funds flyer",
        url: BROWARD_HPA_FUNDS_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh city-by-city fund status frequently; several Broward service areas have no funds at a given time.",
        "Consider splitting this record into service-area child records before exact calculator recommendations.",
      ],
    },
  },
  "fort-lauderdale-pa": {
    assistance: {
      display: "Up to $75,000",
      maxAmount: 75000,
      maxAmountSourceUrl: FORT_LAUDERDALE_PURCHASE_ASSISTANCE_BROCHURE_URL,
      calculationNotes:
        "Official brochure lists down payment assistance up to $75,000 through a 15-year deferred payment loan; exact award depends on program underwriting and funding availability.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 15,
      display: "15-year deferred payment loan",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Fort Lauderdale",
      counties: ["Broward"],
      cities: ["Fort Lauderdale"],
      eligibleAreas: ["City of Fort Lauderdale limits"],
      notes: [
        "Eligible housing must be within City of Fort Lauderdale limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "townhome",
        "condominium",
        "villa",
        "newly constructed home",
        "existing home",
      ],
      notes: [
        "Official brochure uses HUD first-time buyer criteria, including the standard no-ownership-in-principal-residence within the past three years rule and listed exceptions.",
        "Mobile homes and manufactured housing are not eligible.",
        "Applications are obtained through listed nonprofit agencies administering the city program.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: FORT_LAUDERDALE_PURCHASE_ASSISTANCE_BROCHURE_URL,
      effectiveDate: "2025",
      notes: [
        "Official brochure lists 2025 HUD income limits for very-low, low-, and moderate-income households.",
        "Official page reviewed did not expose a clear current purchase price cap.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: FORT_LAUDERDALE_HOME_URL,
      notes: [
        "Official page states all programs are subject to funding availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official city page and brochure do not clearly confirm stacking with Florida Housing or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current city funding balance",
        "current purchase price cap",
        "homebuyer education requirement",
        "approved lender and compatible first mortgage rules",
        "borrower contribution requirement",
        "stacking compatibility",
      ],
    },
    source: fortLauderdalePurchaseAssistanceSource,
    sources: [
      fortLauderdalePurchaseAssistanceSource,
      {
        label: "City of Fort Lauderdale Purchase Assistance Program Brochure",
        url: FORT_LAUDERDALE_PURCHASE_ASSISTANCE_BROCHURE_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current funding and intake status with the city or listed nonprofit agency before recommending application.",
        "Find a current underwriting guide/application packet for purchase price, contribution, education, lender, and stacking rules.",
      ],
    },
  },
  "pembroke-pines-ship": {
    assistance: {
      display: "Amount not published on official page",
      maxAmount: undefined,
      maxAmountSourceUrl: PEMBROKE_PINES_HOUSING_URL,
      calculationNotes:
        "Official page confirms purchase assistance but does not publish a current maximum award; do not use the seed amount for calculator estimates until an official application or LHAP confirms it.",
    },
    repaymentType: "forgivable",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Pembroke Pines",
      counties: ["Broward"],
      cities: ["Pembroke Pines"],
      eligibleAreas: ["City of Pembroke Pines"],
      notes: [
        "Program serves buyers purchasing property for use as their primary residence in Pembroke Pines.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["primary residence in Pembroke Pines"],
      notes: [
        "Official page says assistance is for very-low-to-moderate-income households.",
        "Program is administered by the City of Pembroke Pines in conjunction with Community Redevelopment Associates of Florida.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PEMBROKE_PINES_HOUSING_URL,
      effectiveDate: "2026-05-01",
      notes: [
        "Official page publishes Broward income categories effective May 1, 2026.",
        "Official page reviewed did not expose a purchase assistance amount or purchase price cap.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PEMBROKE_PINES_HOUSING_URL,
      notes: [
        "Official page says funding is available on a first-come, first-qualified basis until program funds are exhausted.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly confirm whether SHIP/HOME assistance may be stacked with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "official maximum award amount",
        "loan term or forgiveness schedule",
        "current purchase price cap",
        "homebuyer education requirement",
        "approved lender or first mortgage rules",
        "borrower contribution requirement",
        "stacking compatibility",
      ],
    },
    source: pembrokePinesHousingSource,
    sources: [pembrokePinesHousingSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Replace the seed amount only after a current official application, LHAP, or program manual confirms the award cap.",
        "Request/locate the CRAFLA application packet for term, contribution, education, lender, and purchase price details.",
      ],
    },
  },
  "sunrise-fthb": {
    assistance: {
      display: "Amount not published on official page",
      maxAmount: undefined,
      maxAmountSourceUrl: SUNRISE_HOUSING_PROGRAMS_URL,
      calculationNotes:
        "Official Sunrise page confirms 0% deferred purchase assistance but does not publish a current maximum award; amount must be verified through Broward County Housing Finance Division.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 15,
      display: "15-year deferred payment second mortgage",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Sunrise",
      counties: ["Broward"],
      cities: ["Sunrise"],
      eligibleAreas: ["City of Sunrise municipal boundaries"],
      notes: [
        "Program is designed for homes within the municipal boundaries of the City of Sunrise.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["home within City of Sunrise municipal boundaries"],
      notes: [
        "Homebuyer's gross annual household income must be certified by Broward County.",
        "Official Sunrise page does not explicitly restate first-time buyer, education, lender, or contribution rules for the purchase assistance section.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: SUNRISE_HOUSING_PROGRAMS_URL,
      effectiveDate: "2025-04-01",
      notes: [
        "Official page lists FY2025 SHIP income limits effective April 1, 2025.",
        "Official page reviewed did not expose a current purchase price cap.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: SUNRISE_HOUSING_PROGRAMS_URL,
      notes: [
        "Funds are first-come, first-qualified, first-served and Broward County must be contacted for additional information and program availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly confirm stacking compatibility with Florida Housing or other local DPA.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "official maximum award amount",
        "first-time buyer requirement",
        "current purchase price cap",
        "homebuyer education requirement",
        "approved lender and compatible first mortgage rules",
        "borrower contribution requirement",
        "real-time Broward/Sunrise fund availability",
        "stacking compatibility",
      ],
    },
    source: sunriseHousingProgramsSource,
    sources: [sunriseHousingProgramsSource, browardHpaSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm maximum award and availability with Broward County Housing Finance Division.",
        "Find a current city/Broward program packet before using this record for precise calculator estimates.",
      ],
    },
  },
  "hallandale-beach-fthb": {
    assistance: {
      display: "Up to $100,000; workforce incentives up to $15,000",
      maxAmount: 100000,
      maxAmountSourceUrl: HALLANDALE_CRA_RESIDENTIAL_PROGRAMS_URL,
      calculationNotes:
        "Affordable housing buyers may receive up to $100,000; workforce buyers may receive up to $10,000 plus a possible $5,000 incentive for first responders, teachers, and nurses.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 5,
      max: 10,
      display:
        "5 years for workforce incentive; 10 years for affordable housing assistance",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "Hallandale Beach CRA district",
      counties: ["Broward"],
      cities: ["Hallandale Beach"],
      eligibleAreas: ["Hallandale Beach CRA district"],
      notes: [
        "Main first-time homebuyer assistance applies to homes in the CRA district; city-wide residential application availability should not be treated as the same geography.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      allowedOccupations: ["first responder", "teacher", "nurse"],
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "townhome",
        "condominium",
        "new single-family construction",
      ],
      notes: [
        "Applicant must contribute at least $2,000 of their own funds.",
        "Applicant must be a U.S. citizen or permanent legal resident and have resided in Florida for at least 12 months.",
        "Affordable housing occupancy requirement is at least 10 years; workforce housing occupancy requirement is at least 5 years.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: HALLANDALE_CRA_FTHB_POLICY_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Affordable buyer income is 50% to 120% of Broward County median income; workforce buyer income is above 120% and not more than 140%.",
        "Official policy page reviewed did not expose a clear current purchase price cap.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: HALLANDALE_CRA_RESIDENTIAL_PROGRAMS_URL,
      notes: [
        "HBCRA states FY 2025-2026 applications are open through June 30, 2026, subject to funding availability and appointments.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official policy confirms the HBCRA assistance structure but does not clearly document stacking with Florida Housing or other local DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current purchase price cap",
        "CRA-boundary property lookup",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: hallandaleCraFthbSource,
    sources: [
      hallandaleCraFthbSource,
      {
        label: "Hallandale Beach CRA FTHB program policy",
        url: HALLANDALE_CRA_FTHB_POLICY_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Add CRA district geocoding before exact eligibility matching.",
        "Verify purchase price cap and lender/loan-type restrictions before calculator hard approvals.",
      ],
    },
  },
  "lauderhill-pa": {
    assistance: {
      display: "Up to $75,000",
      maxAmount: 75000,
      maxAmountSourceUrl: LAUDERHILL_PURCHASE_ASSISTANCE_URL,
      calculationNotes:
        "Very-low income applicants may receive up to $75,000, low income up to $65,000, and moderate income SHIP applicants up to $40,000; not all applicants receive the maximum award.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "HOME terms vary; SHIP reduced 10% per year over 10 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Lauderhill",
      counties: ["Broward"],
      cities: ["Lauderhill"],
      eligibleAreas: ["City of Lauderhill city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "villa",
        "townhome",
        "condominium",
        "new construction with certificate of occupancy within prior 12 months",
      ],
      notes: [
        "Applicant must be able to obtain a mortgage loan from a lending institution.",
        "Applicant must contribute at least 3% of purchase price, with at least 1% from owner funds.",
        "Applicants with cash value assets exceeding $40,000 after closing are ineligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: LAUDERHILL_ELIGIBILITY_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Income cannot exceed HUD-determined amounts.",
        "Purchase price limits change annually; SHIP uses 90% average area purchase price and HOME uses 95% average area purchase price.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: LAUDERHILL_PURCHASE_ASSISTANCE_URL,
      notes: [
        "Official page says the program is open and HOME funds are limited, updated March 12, 2026.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page says the city will not accept any position less than second lien; stacking requires lien-position review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "first-time buyer rule",
        "current HUD income table",
        "current annual purchase price limits",
        "loan-type compatibility",
        "stacking/lien-position compatibility",
      ],
    },
    source: lauderhillPurchaseAssistanceSource,
    sources: [
      lauderhillPurchaseAssistanceSource,
      {
        label: "City of Lauderhill eligibility criteria",
        url: LAUDERHILL_ELIGIBILITY_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Official source did not clearly state first-time buyer requirement on reviewed pages.",
        "Refresh HOME/SHIP fund status and current purchase price limits before exact calculator approvals.",
      ],
    },
  },
  "miramar-fthb": {
    assistance: {
      display: "Up to $90,000; MIMA up to $30,000",
      maxAmount: 90000,
      percentOfPurchasePrice: { max: 10 },
      maxAmountSourceUrl: MIRAMAR_LOW_MODERATE_FTHB_URL,
      calculationNotes:
        "Low-to-moderate program provides assistance up to $90,000; the separate MIMA path provides up to 10% of purchase price capped at $30,000 for moderate-income buyers.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display:
        "15-year, 0% deferred second loan that reverts to a grant if conditions are met",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Miramar",
      counties: ["Broward"],
      cities: ["Miramar"],
      eligibleAreas: ["City of Miramar city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "townhome",
        "lender-approved condominium",
      ],
      notes: [
        "Buyer must provide a mortgage pre-approval letter and a purchase/sale contract for a Miramar property before full application.",
        "MIMA applicants must contribute at least 1% of their own funds.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MIRAMAR_LOW_MODERATE_FTHB_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Low-to-moderate FTHB maximum sales price is $679,324.",
        "MIMA household income cap is $165,000.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MIRAMAR_MIMA_URL,
      notes: [
        "MIMA page says NOW OPEN; low-to-moderate program is first-come, first-qualified until funding is exhausted.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official pages do not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current income table by household size",
        "homebuyer education requirement",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: miramarHousingSource,
    sources: [
      miramarHousingSource,
      {
        label: "City of Miramar low-to-moderate FTHB program",
        url: MIRAMAR_LOW_MODERATE_FTHB_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "City of Miramar MIMA program",
        url: MIRAMAR_MIMA_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Clarify whether homebuyer education is required for every Miramar purchase assistance path.",
        "Verify current income chart values, loan-type restrictions, and stacking rules before exact approvals.",
      ],
    },
  },
  "pompano-beach-fthb": {
    assistance: {
      display: "Up to $80,000 under HOME; up to $50,000 under SHIP",
      maxAmount: 80000,
      maxAmountSourceUrl: POMPANO_FTHB_FLYER_URL,
      calculationNotes:
        "Award is gap-based; HOME assistance may not exceed $80,000 and SHIP assistance may not exceed $50,000.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 20,
      display: "20-year deferred loan; forgiven 20% per year in years 16-20",
    },
    compatibleLoanTypes: ["fha", "va", "conventional"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Pompano Beach",
      counties: ["Broward"],
      cities: ["Pompano Beach"],
      eligibleAreas: ["City of Pompano Beach city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["one-unit single-family", "townhome", "condominium"],
      notes: [
        "Buyer must be prequalified with a first mortgage lender and have a contract before proceeding to application.",
        "Policy permits fixed-rate 15- to 30-year FHA, VA, or conventional first mortgages only.",
        "Minimum 3% down payment is required, with at least 1.5% contributed from applicant funds.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: POMPANO_FTHB_FLYER_URL,
      effectiveDate: "2026-05-04",
      notes: [
        "Flyer lists FY2026 income guidelines and PY-2025 maximum purchase price of $451,000; limits may change without notice.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: POMPANO_FTHB_URL,
      notes: [
        "Official page states the First-Time Homebuyer Purchase Assistance Program is currently open.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Policy encourages leveraging multiple sources, but stacking must satisfy underwriting and lien/recapture rules.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fund source selection",
        "current purchase price limit",
        "stacking/lien-position compatibility",
      ],
    },
    source: pompanoFthbSource,
    sources: [
      pompanoFthbSource,
      {
        label: "Pompano Beach 2026 FTHB flyer",
        url: POMPANO_FTHB_FLYER_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Pompano Beach FTHB policy manual",
        url: POMPANO_FTHB_POLICY_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh current purchase price and fund-source limits before exact calculator approvals.",
      ],
    },
  },
  "coral-springs-pa": {
    assistance: {
      display: "Up to $80,000",
      maxAmount: 80000,
      maxAmountSourceUrl: CORAL_SPRINGS_PURCHASE_ASSISTANCE_URL,
      calculationNotes:
        "Official page confirms up to $80,000 as a deferred second mortgage; detailed county underwriting should be checked through the linked Broward application process.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 15,
      display: "15-year term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Coral Springs",
      counties: ["Broward"],
      cities: ["Coral Springs"],
      eligibleAreas: ["City of Coral Springs city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: "unknown",
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["residential property"],
      notes: [
        "Official city page is brief and directs users to Broward County for application details.",
      ],
    },
    limits: {
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "unknown",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: CORAL_SPRINGS_PURCHASE_ASSISTANCE_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Income and purchase price limits require Broward County application/guideline verification.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: CORAL_SPRINGS_PURCHASE_ASSISTANCE_URL,
      notes: [
        "Official city page confirms program terms but does not clearly state current fund availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules are not stated on the official city page."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current fund availability",
        "income limits",
        "purchase price limits",
        "homebuyer education rule",
        "borrower contribution rule",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: coralSpringsPurchaseAssistanceSource,
    sources: [coralSpringsPurchaseAssistanceSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Official page is too sparse for exact calculator eligibility; verify against Broward County guidelines before recommending.",
      ],
    },
  },
  "davie-ship-fthb": {
    assistance: {
      display: "Not stated on current official page",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Current official page does not state a purchase assistance amount and says the program is closed.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 10,
      display: "10-year, 0% deferred payment loan",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "Town of Davie",
      counties: ["Broward"],
      cities: ["Davie"],
      eligibleAreas: ["Town of Davie town limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: ["All submissions must be made through a participating lender."],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: DAVIE_HOUSING_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists Broward County income limits and maximum sales price/assessed value of $679,324.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: DAVIE_HOUSING_URL,
      notes: [
        "Official page states Purchase Assistance Program status is closed and to check back for updates.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking should not be evaluated while the program is closed."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "program reopening",
        "current assistance amount",
        "eligible property types",
        "homebuyer education rule",
        "borrower contribution rule",
        "loan-type compatibility",
      ],
    },
    source: davieHousingSource,
    sources: [davieHousingSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Program is closed per official page; refresh before showing as available.",
        "Current official page does not confirm the prior $90,000 amount.",
      ],
    },
  },
  "deerfield-beach-pa": {
    assistance: {
      display: "Up to $70,000",
      maxAmount: 70000,
      maxAmountSourceUrl: DEERFIELD_HOUSING_GRANTS_URL,
      calculationNotes:
        "Maximum assistance is $70,000 and funding is limited on a first-come, first-qualified basis.",
    },
    repaymentType: "forgivable",
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Deerfield Beach",
      counties: ["Broward"],
      cities: ["Deerfield Beach"],
      eligibleAreas: ["City of Deerfield Beach city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family detached",
        "condominium",
        "townhome",
        "villa",
      ],
      notes: [
        "Applicant must have mortgage pre-approval and an executed real estate contract at application submittal.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: DEERFIELD_HOUSING_GRANTS_URL,
      effectiveDate: "2026-06-01",
      notes: [
        "FY2026 income limits are effective June 1, 2026 and subject to annual HUD changes.",
        "Official page reviewed did not clearly state a purchase price cap.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: DEERFIELD_HOUSING_GRANTS_URL,
      notes: [
        "Application portal is open; funding is limited and awarded first-come, first-qualified.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Official page does not clearly document stacking rules."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "purchase price limit",
        "homebuyer education rule",
        "borrower contribution rule",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: deerfieldHousingGrantsSource,
    sources: [deerfieldHousingGrantsSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Verify purchase price cap and borrower contribution requirements before hard approvals.",
      ],
    },
  },
  "margate-hpa-home": {
    assistance: {
      display: "Up to $40,000",
      maxAmount: 40000,
      maxAmountSourceUrl: MARGATE_HPA_URL,
      calculationNotes:
        "Assistance may be used for down payment, mortgage buydown, and closing costs, up to $40,000 per transaction.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display:
        "0% recorded second mortgage forgiven after 15-year primary-residence term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Margate",
      counties: ["Broward"],
      cities: ["Margate"],
      eligibleAreas: ["City of Margate city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "villa", "condominium"],
      notes: [
        "Program is lender-driven and administered through Broward County.",
        "Buyer may select any lender that provides a first mortgage loan meeting county guidelines.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: MARGATE_HPA_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Household gross annual income must be at or below 80% AMI.",
        "Official city page reviewed did not clearly state a purchase price cap.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: MARGATE_HPA_URL,
      notes: [
        "Funding is limited and first-come, first-qualified, first-served; lender must confirm funds are available for the area for the next 60-90 days.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Because the program is Broward County-administered and lender-driven, stacking depends on county/lender guidelines.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "real-time area fund availability",
        "purchase price limit",
        "borrower contribution rule",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: margateHpaSource,
    sources: [margateHpaSource, browardHpaSource],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Lender must verify area-specific Broward County fund availability before recommendation.",
        "Verify purchase price and borrower contribution rules against current county guidelines.",
      ],
    },
  },
  "palm-beach-ship": {
    assistance: {
      display: "Up to $100,000",
      maxAmount: 100000,
      maxAmountSourceUrl: PALM_BEACH_MHI_URL,
      calculationNotes:
        "Assistance may support gap financing, lot acquisition, down payment, rehab, and closing costs; subsidy is reserved, not guaranteed.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 30,
      display: "Forgiven at end of 30-year term",
    },
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "portfolio"],
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "varies",
      propertyTypes: [
        "single-family",
        "townhome",
        "villa",
        "condominium",
        "new construction",
        "existing home",
      ],
      notes: [
        "Applicant must secure first mortgage pre-approval before applying.",
        "County orientation materials include DTI and asset restrictions that should be checked for the active funding round.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PALM_BEACH_PURCHASE_ASSISTANCE_ORIENTATION_URL,
      effectiveDate: "2025-04-01",
      notes: [
        "Orientation materials list maximum purchase price of $568,557; active NOFA/page should be checked for current limits.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PALM_BEACH_MHI_URL,
      notes: [
        "County page states program requests are subject to funding availability; specific application windows may open and close.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Program can support purchase assistance with or without rehab/new construction, but stacking with other DPA must be verified for the active funding round.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "active NOFA/application window",
        "current income and purchase price limits",
        "borrower contribution requirement",
        "stacking compatibility with first mortgage product",
      ],
    },
    source: palmBeachMhiSource,
    sources: [
      palmBeachMhiSource,
      {
        label: "Palm Beach County purchase assistance orientation",
        url: PALM_BEACH_PURCHASE_ASSISTANCE_ORIENTATION_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Verify active NOFA/application portal before borrower-facing availability claims.",
        "Check whether current round is SHIP, HOME, or another funding source before exact eligibility scoring.",
      ],
    },
  },
  "palm-beach-home": {
    assistance: {
      display: "Up to $100,000",
      maxAmount: 100000,
      maxAmountSourceUrl: PALM_BEACH_HOME_FTHB_URL,
      calculationNotes:
        "HOME assistance may be used to acquire a first home, including acquisition, new construction, down payment, and closing costs.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 30,
      display: "0% deferred loan forgiven at end of 30-year term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Palm Beach County",
      counties: ["Palm Beach"],
      eligibleAreas: [
        "Palm Beach County eligible locations shared during orientation",
      ],
      notes: [
        "Official page says eligible locations and purchase process are shared during orientation.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["first home", "new construction when eligible"],
      notes: [
        "Applicants must have first mortgage loan approval before applying.",
        "Applicants may not currently own a home or exceed the asset limits stated by the county.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PALM_BEACH_HOME_FTHB_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Program serves households at or below 80% income limits listed on the official page.",
        "Property purchase price cannot exceed $568,557.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PALM_BEACH_HOME_FTHB_URL,
      notes: [
        "Official page states the application limit has been reached and the portal is closed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking is not documented on the official program page and should not be evaluated while the portal is closed.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "program reopening",
        "eligible location/orientation details",
        "borrower contribution rule",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: palmBeachHomeFthbSource,
    sources: [palmBeachHomeFthbSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Portal is closed; refresh before showing as available.",
        "Confirm eligible locations and current purchase price/income limits at next opening.",
      ],
    },
  },
  "boca-raton-ship": {
    assistance: {
      display: "Up to $190,000",
      maxAmount: 190000,
      maxAmountSourceUrl: BOCA_SHIP_NOFA_URL,
      calculationNotes:
        "Maximum award is based on need and income category limits in the current application packet; public NOFA states assistance may be up to $190,000.",
    },
    repaymentType: "deferred",
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Boca Raton",
      counties: ["Palm Beach"],
      cities: ["Boca Raton"],
      eligibleAreas: ["Boca Raton municipal city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: [
        "eligible owner-occupied housing",
        "property needing minor rehabilitation when eligible",
      ],
      notes: [
        "Assistance may include down payment, principal reduction, eligible closing/prepaid costs, and rehabilitation after closing.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: BOCA_SHIP_NOFA_URL,
      effectiveDate: "2025-04-08",
      notes: [
        "Maximum housing value limitation is $679,324 for all strategies.",
        "Income categories include very low, low, moderate, and 121%-140% AMI.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: BOCA_SHIP_URL,
      notes: [
        "Official page says applications are currently accepted, available funding is very limited, and new applicants may be placed on a waiting list.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Official page does not clearly document stacking rules."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "income-category award table from active application packet",
        "homebuyer education rule",
        "borrower contribution rule",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: bocaShipSource,
    sources: [
      bocaShipSource,
      {
        label: "Boca Raton 2025-26 SHIP NOFA",
        url: BOCA_SHIP_NOFA_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Pull current application packet to fill income-category award caps and borrower contribution requirements.",
        "Monitor waitlist/fund availability.",
      ],
    },
  },
  "boynton-beach-ship": {
    assistance: {
      display: "Amount varies by income/need",
      maxAmount: undefined,
      maxAmountSourceUrl: BOYNTON_SHIP_FLYER_URL,
      calculationNotes:
        "Official 2025 flyer verifies terms and eligibility but does not state a single current maximum assistance amount.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display: "0% deferred loan forgiven at end of 15-year term",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Boynton Beach",
      counties: ["Palm Beach"],
      cities: ["Boynton Beach"],
      eligibleAreas: ["City of Boynton Beach city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family",
        "townhome",
        "duplex",
        "villa",
        "condominium",
      ],
      notes: [
        "A 6-hour HUD-approved first-time homebuyer education class is required.",
        "First mortgage must be a 30-year fixed-rate loan from an institutional first mortgage lender.",
        "Minimum buyer contribution varies by income category and cannot be gifted funds.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: BOYNTON_SHIP_FLYER_URL,
      effectiveDate: "2025-04-01",
      notes: [
        "Household must be at or below 120% of Palm Beach County AMI.",
        "Maximum purchase/sales price is $636,806.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: BOYNTON_SHIP_URL,
      notes: [
        "Official page links current program materials but does not clearly state current remaining fund availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking is not clearly documented in the reviewed official flyer/page.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "current maximum assistance amount",
        "real-time fund availability",
        "loan-type compatibility beyond fixed-rate first mortgage",
        "stacking compatibility",
      ],
    },
    source: boyntonShipSource,
    sources: [
      boyntonShipSource,
      {
        label: "Boynton Beach 2025 SHIP purchase assistance flyer",
        url: BOYNTON_SHIP_FLYER_URL,
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Verify current maximum assistance amount before calculator estimates.",
        "Confirm remaining SHIP funds with the city before marking available.",
      ],
    },
  },
  "delray-beach-ship": {
    assistance: {
      display: "Up to $75,000",
      maxAmount: 75000,
      maxAmountSourceUrl: DELRAY_BEACH_FTHB_URL,
      calculationNotes:
        "Official NOFA provides up to $75,000 for eligible first-time homebuyers, subject to funding availability and the application window/capacity.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 10,
      max: 15,
      display: "Forgiven after 10 or 15 years based on amount received",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Delray Beach",
      counties: ["Palm Beach"],
      cities: ["Delray Beach"],
      eligibleAreas: ["City of Delray Beach city limits"],
      notes: [
        "Residence must be within Delray Beach city limits and serve as the buyer's primary residence.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "acquisition",
        "acquisition/rehabilitation",
        "new construction",
        "primary residence within Delray Beach city limits",
      ],
      notes: [
        "Applicant must not have owned a home within the last three years, subject to HUD first-time homebuyer exceptions.",
        "Applicant must meet lender credit standards and submit a pre-approval lender letter.",
        "Applicant must attend at least six hours of HUD-approved homebuyer education and submit the certificate.",
        "Applicant must contribute a minimum of 2% of the purchase price.",
        "Applicant housing expenses must not exceed 40% of gross monthly household income.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: DELRAY_BEACH_FTHB_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists served household categories up to 140% AMI.",
        "Official page reviewed did not expose a clear current purchase price cap.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: DELRAY_BEACH_FTHB_URL,
      notes: [
        "Official page says purchase assistance intake is closed because maximum capacity was reached.",
        "The listed 2026 application period ran from March 2, 2026 to March 30, 2026, or earlier if all funds were committed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly confirm stacking compatibility with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "future application reopen date",
        "current purchase price cap",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: delrayBeachFthbSource,
    sources: [delrayBeachFthbSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Monitor Delray Beach intake status and NOFA updates before recommending the program as available.",
        "Find current LHAP/application packet for purchase price and stacking details.",
      ],
    },
  },
  "jupiter-dpa": {
    assistance: {
      display: "Referral/resource only on official town page",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "The official Town of Jupiter page reviewed refers residents to Palm Beach County purchase assistance and other homeownership services; it does not confirm a town-funded $10,000 DPA program.",
    },
    repaymentType: "unknown",
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "Town of Jupiter",
      counties: ["Palm Beach"],
      cities: ["Jupiter"],
      eligibleAreas: ["Town of Jupiter residents seeking referrals"],
      notes: [
        "Official page is a help/referral page rather than a distinct DPA program page.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: "unknown",
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: undefined,
      notes: [
        "Reviewed official page refers to Palm Beach County Housing and Economic Development and Community Partners for homeownership services.",
      ],
    },
    limits: {
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "unknown",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl: JUPITER_HELP_PROGRAMS_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "No distinct town DPA limits were confirmed on the official town page.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: JUPITER_HELP_PROGRAMS_URL,
      notes: [
        "No distinct town DPA fund status was confirmed on the official page.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Treat as a referral resource until a distinct official DPA source is found.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "official distinct DPA program confirmation",
        "assistance amount",
        "eligibility rules",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: jupiterHelpProgramsSource,
    sources: [jupiterHelpProgramsSource],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Prior $10,000 grant claim was not confirmed on the official town page; find a distinct town DPA source or consider removing/redirecting this record.",
      ],
    },
  },
  "west-palm-beach-fthb": {
    assistance: {
      display: "Up to $100,000",
      maxAmount: 100000,
      maxAmountSourceUrl:
        "https://www.fha.com/first-time-home-buyers-program/the-city-of-west-palm-beach-first-time-homebuyers-program",
      calculationNotes:
        "A current partner directory lists up to $100,000; the reviewed city planning documents confirm HOME purchase assistance but a current official program page was not found.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 30,
      display:
        "Deferred for 30 years; forgivable at maturity per partner source",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of West Palm Beach",
      counties: ["Palm Beach"],
      cities: ["West Palm Beach"],
      eligibleAreas: ["West Palm Beach city limits"],
      notes: [
        "Current partner source states properties must be within West Palm Beach city limits.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["existing home", "new construction"],
      notes: [
        "Partner source states applicant must not have owned a home in the last three years.",
        "Official annual action plan materials confirm the city uses HOME Purchase Assistance with HOME recapture provisions.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.fha.com/first-time-home-buyers-program/the-city-of-west-palm-beach-first-time-homebuyers-program",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Partner source lists HUD/HOME-style household income limits and a $568,557 maximum purchase price; current official program limits need direct confirmation.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.fha.com/first-time-home-buyers-program/the-city-of-west-palm-beach-first-time-homebuyers-program",
      notes: [
        "A current official application/funding status page was not found during this pass.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking rules were not confirmed in the reviewed official city materials.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current official program page",
        "current funding/application status",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "FHA.com West Palm Beach First-Time Homebuyers Program",
      url: "https://www.fha.com/first-time-home-buyers-program/the-city-of-west-palm-beach-first-time-homebuyers-program",
      quality: "partner",
      accessedDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Used because a current city program page was not located; city HOME purchase assistance is separately evidenced in city planning materials.",
      ],
    },
    sources: [
      {
        label: "FHA.com West Palm Beach First-Time Homebuyers Program",
        url: "https://www.fha.com/first-time-home-buyers-program/the-city-of-west-palm-beach-first-time-homebuyers-program",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "City of West Palm Beach 2023 Annual Action Plan",
        url: "https://www.wpb.org/files/assets/city/v/2/housing/documents/caper-hopwa-reports/060923-draft-fy23-action-plan-for-public-review.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
        notes: [
          "Confirms city HOME Purchase Assistance recapture provisions, but not current amount or application status.",
        ],
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find the current City of West Palm Beach Housing and Community Development program page or application packet before using as high-confidence calculator data.",
        "Confirm whether the $100,000 maximum and purchase price cap are current.",
      ],
    },
  },
  "riviera-beach-renaissance": {
    assistance: {
      display: "Up to $50,000",
      maxAmount: 50000,
      maxAmountSourceUrl:
        "https://rbcra.com/wp-content/uploads/2023/01/THE-RIVIERA-BEACH-NEIGHBORHOOD-RECLAIM-and-RENAISSANCE-PROGRAM-01252023.pdf",
      calculationNotes:
        "Official CRA information kit lists down payment, closing cost, and housing rehabilitation assistance up to $50,000.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "Riviera Beach Community Redevelopment Area",
      counties: ["Palm Beach"],
      cities: ["Riviera Beach"],
      eligibleAreas: ["Riviera Beach Community Redevelopment Area"],
      notes: [
        "Official kit limits the home purchase assistance to single-family homes within the Community Redevelopment Area.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["single-family"],
      notes: [
        "Program is for low-to-moderate income first-time homebuyers purchasing single-family homes in the CRA.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://rbcra.com/wp-content/uploads/2023/01/THE-RIVIERA-BEACH-NEIGHBORHOOD-RECLAIM-and-RENAISSANCE-PROGRAM-01252023.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Reviewed official kit confirms income targeting but did not expose a current purchase price cap in the sampled text.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://rivierabeachcdc.org/programs/",
      notes: [
        "Riviera Beach CDC still lists the Renaissance homeownership program, but a current funding/reservation status was not confirmed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in the reviewed kit."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current funding/application status",
        "purchase price cap",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Riviera Beach CRA Renaissance Program information kit",
      url: "https://rbcra.com/wp-content/uploads/2023/01/THE-RIVIERA-BEACH-NEIGHBORHOOD-RECLAIM-and-RENAISSANCE-PROGRAM-01252023.pdf",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Riviera Beach CRA Renaissance Program information kit",
        url: "https://rbcra.com/wp-content/uploads/2023/01/THE-RIVIERA-BEACH-NEIGHBORHOOD-RECLAIM-and-RENAISSANCE-PROGRAM-01252023.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Riviera Beach CDC programs page",
        url: "https://rivierabeachcdc.org/programs/",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm whether 2026 funds are available and whether the 2023 CRA kit is still the governing application packet.",
      ],
    },
  },
  "clearwater-hpa": {
    assistance: {
      display: "25% of purchase price, max $75,000",
      maxAmount: 75000,
      percentOfPurchasePrice: { max: 25 },
      maxAmountSourceUrl:
        "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Programs-and-Services-Available-for-Residents/Purchase-Assistance-for-an-Existing-Home",
      calculationNotes:
        "For loans approved after July 1, 2025, assistance is limited to 25% of purchase price, not to exceed $75,000.",
    },
    repaymentType: "repayable_second",
    forgivenessYears: {
      max: 20,
      display:
        "50% amortized over 20 years after 5-year deferral; 50% deferred/forgiven at maturity",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Clearwater",
      counties: ["Pinellas"],
      cities: ["Clearwater"],
      eligibleAreas: ["Incorporated city limits of Clearwater"],
      notes: [
        "Official page says eligible property tax codes include CW, CWD, or CWDO.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: false,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhouse", "condominium"],
      notes: [
        "Borrower is not required to be a first-time buyer, but cannot own another property at closing.",
        "Buyer must contribute at least 1% of the purchase price from own funds.",
        "Mobile homes, manufactured homes, trailers, co-ops, rental properties, and two-to-four family properties are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Programs-and-Services-Available-for-Residents/Purchase-Assistance-for-an-Existing-Home",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Maximum sales price depends on HOME or SHIP funding source; official page directs applicants to processing agencies for current limits.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Programs-and-Services-Available-for-Residents/Purchase-Assistance-for-an-Existing-Home",
      notes: [
        "Official page states loan funds are available through approved nonprofit agencies.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current funding-source-specific sales price limit",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Clearwater Purchase Assistance for an Existing Home",
      url: "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Programs-and-Services-Available-for-Residents/Purchase-Assistance-for-an-Existing-Home",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Clearwater Purchase Assistance for an Existing Home",
        url: "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Programs-and-Services-Available-for-Residents/Purchase-Assistance-for-an-Existing-Home",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current HOME/SHIP maximum sales price limits with a processing agency before exact eligibility decisions.",
      ],
    },
  },
  "sumter-county-dpa": {
    assistance: {
      display: "Amount not stated on reviewed official eligibility page",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Official Sumter County eligibility page confirms purchase assistance rules but does not state a current assistance maximum.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Sumter County",
      counties: ["Sumter"],
      eligibleAreas: ["Sumter County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["site-built home"],
      notes: [
        "Applicant must secure a fixed-rate first mortgage; county only takes second mortgage position.",
        "Mobile, manufactured, and modular homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: true,
      limitsSourceUrl: "https://sumtercountyfl.gov/252/Eligibility-Limitations",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists 2026 moderate-income limits by household size.",
        "Official page lists the SHIP maximum purchase price as $510,939.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://sumtercountyfl.gov/252/Eligibility-Limitations",
      notes: [
        "Eligibility page is current enough for rules but does not clearly state fund availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page says purchase-assistance recipients are not eligible for other SHIP assistance for 20 years unless the outstanding balance is paid, except disaster assistance.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "assistance maximum",
        "funding/application status",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "stacking compatibility beyond SHIP reuse limitation",
      ],
    },
    source: {
      label:
        "Sumter County Down Payment Assistance eligibility and limitations",
      url: "https://sumtercountyfl.gov/252/Eligibility-Limitations",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label:
          "Sumter County Down Payment Assistance eligibility and limitations",
        url: "https://sumtercountyfl.gov/252/Eligibility-Limitations",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current Sumter County application packet or LHAP to confirm assistance maximum and term.",
      ],
    },
  },
  "seminole-county-ship": {
    assistance: {
      display: "Up to $145,000",
      maxAmount: 145000,
      maxAmountSourceUrl:
        "https://www.seminolecountyfl.gov/departments-services/community-services/community-development/community-development-programs.stml",
      calculationNotes:
        "Official county page lists up to $145,000 depending on income level and need; flyer lists maximums by income category and new/existing dwelling.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 20,
      display: "Interest-free forgivable loan for up to 20 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Seminole County",
      counties: ["Seminole"],
      eligibleAreas: ["Seminole County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["new construction", "existing home"],
      notes: [
        "Household must be at or below 120% AMI.",
        "Applicant must be pre-approved for a first mortgage through a private lender approved by Seminole County.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.seminolecountyfl.gov/departments-services/community-services/community-development/community-development-programs.stml",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "County page confirms 120% AMI threshold; exact current purchase price limit should be checked in the latest manual or LHAP.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.seminolecountyfl.gov/departments-services/community-services/community-development/community-development-programs.stml",
      notes: [
        "Official county page describes the program but does not clearly state current application/fund status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in the reviewed sources."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current funding/application status",
        "current purchase price limit",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Seminole County Community Development Programs",
      url: "https://www.seminolecountyfl.gov/departments-services/community-services/community-development/community-development-programs.stml",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Seminole County Community Development Programs",
        url: "https://www.seminolecountyfl.gov/departments-services/community-services/community-development/community-development-programs.stml",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Seminole County 2025 Purchase Assistance flyer",
        url: "https://beta.seminolecountyfl.gov/docs/default-source/pdf/2025-cd-purchase-assistance-flyer.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Seminole County Purchase Assistance manual",
        url: "https://www.seminolecountyfl.gov/docs/default-source/pdf/PurchaseAssistanceManual.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current application availability and purchase price limit from the latest Seminole County manual before high-confidence eligibility decisions.",
      ],
    },
  },
  "jaxhfa-home-sweet-home": {
    assistance: {
      display: "Up to $10,000",
      maxAmount: 10000,
      maxAmountSourceUrl:
        "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/jacksonville-housing-finance-authority/jhfa-docs-%281%29/jhfa-other-docs/annual-reports/jhfa-2024-annual-report-final",
      calculationNotes:
        "JHFA annual report says Home Sweet Home DPA was lowered in June 2023 to $10,000 and can change during the year.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["hfa", "unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Duval County / Jacksonville HFA",
      counties: ["Duval"],
      eligibleAreas: ["Duval County"],
      notes: [
        "JHFA exists to address affordable housing needs in Duval County.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Program is accessed through participating lenders with an affordable 30-year fixed-rate first mortgage.",
        "Annual report lists FY2023-2024 household income limits of $95,365 for 1-2 person households and $109,670 for 3+ person households.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/jacksonville-housing-finance-authority/jhfa-docs-%281%29/jhfa-other-docs/annual-reports/jhfa-2024-annual-report-final",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Annual report lists an effective sales price limit of $299,999 for FY2023-2024; verify current limits with JHFA/lender before calculator decisions.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/jacksonville-housing-finance-authority/jhfa-docs-%281%29/jhfa-other-docs/annual-reports/jhfa-2024-annual-report-final",
      notes: [
        "JHFA annual report says Home Sweet Home is continuously funded and never runs out of money, but rate/DPA terms can change.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Program pairs with the JHFA first mortgage; other local-program stacking requires lender review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current lender term sheet",
        "current interest rate",
        "homebuyer education rule",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Jacksonville HFA 2024 annual report",
      url: "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/jacksonville-housing-finance-authority/jhfa-docs-%281%29/jhfa-other-docs/annual-reports/jhfa-2024-annual-report-final",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Jacksonville HFA 2024 annual report",
        url: "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/jacksonville-housing-finance-authority/jhfa-docs-%281%29/jhfa-other-docs/annual-reports/jhfa-2024-annual-report-final",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Jacksonville Housing Finance Authority",
        url: "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/jacksonville-housing-finance-authority",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Pull current JHFA participating-lender term sheet for live rate, DPA amount, and exact borrower eligibility.",
      ],
    },
  },
  "jacksonville-h2h": {
    description:
      "City of Jacksonville down-payment assistance pilot providing up to 75% of required down payment or closing costs, capped at $25,000, for eligible first-time buyers purchasing in Jacksonville/Duval County.",
    assistance: {
      display: "Up to 75% of required down payment/closing costs, max $25,000",
      maxAmount: 25000,
      percentOfPurchasePrice: undefined,
      maxAmountSourceUrl:
        "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/housing-services/docs-housing-services/h2h-docs/flyer-dpa-april-2025",
      calculationNotes:
        "Official 2025 flyer states assistance provides up to 75% of the total down payment or closing costs required by the mortgage writer, not to exceed $25,000.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      min: 3,
      display:
        "Repayment terms change after 36 months; sale before 36 months triggers full repayment",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "city",
      display: "Jacksonville / Duval County",
      counties: ["Duval"],
      cities: ["Jacksonville"],
      eligibleAreas: ["Consolidated City of Jacksonville"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "patio home", "townhome", "condominium"],
      notes: [
        "Income may be up to 120% AMI.",
        "Applicant must have a minimum $500 down payment and cover the cost of a general home inspection.",
        "Mobile homes and manufactured housing are excluded.",
        "Eligible homes cannot be tenant occupied unless the tenant is the buyer.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/housing-services/docs-housing-services/h2h-docs/flyer-dpa-april-2025",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official 2025 flyer lists maximum gross income up to 120% AMI and maximum purchase price/value of $335,000.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.jacksonville.gov/departments/housing-and-neighborhoods/housing-services",
      notes: [
        "Jacksonville Housing Services page lists H2H assistance up to $25,000; flyer is dated April 2025.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official flyer says repayment is subject to mortgage rules and lender requirements; stacking is not explicitly documented.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "stacking compatibility",
        "current program funding level",
      ],
    },
    source: {
      label: "City of Jacksonville 2025 Down-Payment Assistance flyer",
      url: "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/housing-services/docs-housing-services/h2h-docs/flyer-dpa-april-2025",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Jacksonville 2025 Down-Payment Assistance flyer",
        url: "https://www.jacksonville.gov/departments/neighborhoods/housing-and-community-development/housing-services/docs-housing-services/h2h-docs/flyer-dpa-april-2025",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "City of Jacksonville Housing Services",
        url: "https://www.jacksonville.gov/departments/housing-and-neighborhoods/housing-services",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current participating lender list and whether the pilot remains open before borrower-facing recommendations.",
      ],
    },
  },
  "lake-county-ship": {
    assistance: {
      display: "$30,000-$50,000 by income category",
      minAmount: 30000,
      maxAmount: 50000,
      maxAmountSourceUrl:
        "https://lakecountyfl.gov/housing/home-ownership-assistance",
      calculationNotes:
        "Official page lists $50,000 for very-low income, $40,000 for low income, and $30,000 for moderate income; repairs tied to purchase cannot exceed $15,000.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display: "Prorated monthly forgiveness over 15 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Lake County",
      counties: ["Lake"],
      eligibleAreas: ["Lake County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "existing single-family home",
        "newly constructed home",
        "manufactured home built after June 1994 when classified as real property",
      ],
      notes: [
        "Applicant must be at least 18, creditworthy, and able to obtain a 30-year fixed-rate first mortgage from an approved lender.",
        "Applicant must not have owned a home in the last three years.",
        "New construction must have received a certificate of occupancy within the last 12 months.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://lakecountyfl.gov/housing/home-ownership-assistance",
      effectiveDate: "2025-04-01",
      notes: [
        "Official page lists FY2025-26 income limits effective 2025-04-01 for the Orlando-Kissimmee-Sanford MSA up to 120% AMI.",
        "Reviewed official page did not expose a clear purchase price cap.",
      ],
    },
    availability: {
      status: "waitlist",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://lakecountyfl.gov/housing/home-ownership-assistance",
      notes: [
        "Official page says the SHIP Home Ownership Assistance program is open and taking waitlist applications.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page requires an approved first mortgage but does not clearly document stacking with Florida Housing or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "purchase price limit",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Lake County SHIP Home Ownership Assistance",
      url: "https://lakecountyfl.gov/housing/home-ownership-assistance",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Lake County SHIP Home Ownership Assistance",
        url: "https://lakecountyfl.gov/housing/home-ownership-assistance",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current lender guidelines or LHAP for purchase price cap, exact first-mortgage compatibility, and education/contribution requirements.",
      ],
    },
  },
  "nassau-county-ship": {
    assistance: {
      display: "20%-30% of purchase price, max $102,747",
      minAmount: 68498,
      maxAmount: 102747,
      percentOfPurchasePrice: { min: 20, max: 30 },
      maxAmountSourceUrl:
        "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
      calculationNotes:
        "Official page lists maximum possible awards by income classification: $102,747 for very/extremely low, $85,622 for low, and $68,498 for moderate.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 10,
      display: "10-year deferred loan forgiven 10% annually",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Nassau County",
      counties: ["Nassau"],
      eligibleAreas: ["Nassau County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: [
        "newly constructed single-family home",
        "existing single-family home",
        "condominium",
        "manufactured home/land package under 20 years old",
      ],
      notes: [
        "Newly built homes must have a certificate of occupancy within the last 12 months.",
        "Loan defaults if the property is sold, transferred, converted to rental, loses homestead exemption, or is no longer the primary residence.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists maximum allowed home purchase price of $602,915.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
      notes: [
        "Official page confirms program structure but does not clearly state current fund/application status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed on the reviewed page."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current funding/application status",
        "first-time buyer rule",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: {
      label:
        "Nassau County Purchase Assistance Without Rehabilitation program page",
      url: "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label:
          "Nassau County Purchase Assistance Without Rehabilitation program page",
        url: "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current application/funding status and first-time buyer/education rules from the LHAP or application packet.",
      ],
    },
  },
  "flagler-county-ship": {
    assistance: {
      display: "$29,950-$49,950 purchase assistance by income category",
      minAmount: 29950,
      maxAmount: 49950,
      maxAmountSourceUrl:
        "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
      calculationNotes:
        "Official page lists purchase awards of $49,950 very-low, $39,950 low, and $29,950 moderate; repair funds are separate and not purchase assistance.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display: "15-year deferred forgivable lien",
    },
    compatibleLoanTypes: ["fha", "va", "usda", "conventional"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Flagler County",
      counties: ["Flagler"],
      eligibleAreas: ["Flagler County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: [
        "single-family residence",
        "condominium",
        "townhome",
        "manufactured home less than 5 years old when real property",
      ],
      notes: [
        "Applicants must complete a first-time home buyer class and credit counseling through Mid Florida Housing Partnership before applying.",
        "Award letter is required before proceeding with SHIP-funded transactions.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists 2025 income limits and maximum home price of $544,233.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
      notes: [
        "Official page says reviews occur as funding and priorities allow and applicants may be placed in a queue.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "conditional",
      withLocalPrograms: "conditional",
      notes: [
        "Lender guidelines say the SHIP mortgage may be subordinate to other federal and state purchase assistance programs such as Hometown Heroes and City of Palm Coast CDBG.",
      ],
    },
    calculator: {
      confidence: "high",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "real-time queue/funding status",
        "borrower contribution rule",
      ],
    },
    source: {
      label: "Flagler County Home Buying Assistance",
      url: "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Flagler County Home Buying Assistance",
        url: "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Flagler County 2025 SHIP lender guidelines",
        url: "https://www.flaglercounty.gov/files/assets/county/v/1/health-and-human-services/documents/2025-lenders-guidelines.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh queue/funding status before borrower-facing recommendations because awards depend on county-issued award letters.",
      ],
    },
  },
  "desoto-county-ship": {
    assistance: {
      display: "Up to 30% of purchase price, max $70,000",
      maxAmount: 70000,
      percentOfPurchasePrice: { max: 30 },
      maxAmountSourceUrl:
        "https://www.desotobocc.com/DocumentCenter/View/1149/Approved-2025-Local-Housing-Assistance-Plan---LHAP-PDF",
      calculationNotes:
        "Official LHAP lists up to 30% of purchase price, not to exceed $70,000, for purchase assistance with or without rehab.",
    },
    repaymentType: "deferred",
    forgivenessYears: {
      max: 30,
      display:
        "30-year deferred payment loan; 50% of award forgivable after 10 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "DeSoto County",
      counties: ["DeSoto"],
      eligibleAreas: ["DeSoto County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["newly constructed home", "existing home"],
      notes: [
        "Applicant must secure a first mortgage from an approved lender and have a valid contract before receiving an application.",
        "Applicant must make a minimum $1,500 contribution toward purchase or closing costs; homebuyer education cost may count toward that contribution.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.desotobocc.com/DocumentCenter/View/1149/Approved-2025-Local-Housing-Assistance-Plan---LHAP-PDF",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official LHAP lists purchase price up to $350,000, while the public county page says home price cannot exceed $230,000; use manual review before exact eligibility.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.desotobocc.com/242/Housing-Assistance",
      notes: [
        "County page lists purchase assistance but does not clearly state current funding/application status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "conditional",
      withLocalPrograms: "conditional",
      notes: [
        "Official LHAP states SHIP funds may be leveraged with or supplement other Florida Housing Finance Corporation programs, but borrower-specific stacking requires program/lender review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "resolved purchase price cap conflict",
        "current funding/application status",
        "compatible first mortgage loan types",
        "program-specific stacking confirmation",
      ],
    },
    source: {
      label: "DeSoto County SHIP LHAP 2023-2026",
      url: "https://www.desotobocc.com/DocumentCenter/View/1149/Approved-2025-Local-Housing-Assistance-Plan---LHAP-PDF",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "DeSoto County SHIP LHAP 2023-2026",
        url: "https://www.desotobocc.com/DocumentCenter/View/1149/Approved-2025-Local-Housing-Assistance-Plan---LHAP-PDF",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "DeSoto County Housing Assistance",
        url: "https://www.desotobocc.com/242/Housing-Assistance",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Resolve public page $230,000 price cap versus LHAP $350,000 price cap before exact calculator eligibility.",
        "Confirm current funding/application status with DeSoto County Social Services.",
      ],
    },
  },
  "glades-county-ship": {
    assistance: {
      display: "Up to $120,000 with rehab; up to $20,000 without rehab",
      minAmount: 15000,
      maxAmount: 120000,
      maxAmountSourceUrl:
        "https://floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/glades-25-28.pdf?sfvrsn=1bf1327b_15",
      calculationNotes:
        "Florida Housing-posted LHAP delivery chart lists purchase assistance with rehab up to $120,000 and purchase assistance without rehab up to $20,000 depending on income/category; county public page is sparse.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Glades County",
      counties: ["Glades"],
      eligibleAreas: ["Glades County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "County page confirms SHIP program administration and contact, but detailed public eligibility text was not found there.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/glades-25-28.pdf?sfvrsn=1bf1327b_15",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Florida Housing-posted LHAP delivery chart lists new/existing purchase price limits of $311,980.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.myglades.com/departments/ship_department.php",
      notes: [
        "County page confirms SHIP contact information but does not clearly state current funding/application status.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed public sources."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current county application packet",
        "first-time buyer rule",
        "primary residence rule",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "repayment/forgiveness terms",
        "current funding/application status",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Glades County SHIP program page",
      url: "https://www.myglades.com/departments/ship_department.php",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Glades County SHIP program page",
        url: "https://www.myglades.com/departments/ship_department.php",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Glades County SHIP LHAP 2025-2028 via Florida Housing",
        url: "https://floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/glades-25-28.pdf?sfvrsn=1bf1327b_15",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "County public page is sparse; retrieve current application packet or full LHAP strategy pages before high-confidence eligibility decisions.",
      ],
    },
  },
  "highlands-county-ship": {
    assistance: {
      display: "Up to $40,000",
      maxAmount: 40000,
      maxAmountSourceUrl:
        "https://cms2.revize.com/revize/highlandscountyfl/departments/community_programs/housing/FINAL2_NOFA%20subs%20SHIP%20HCBOCC%202023-2024%2022366_.pdf?t=202603101430220",
      calculationNotes:
        "Official NOFA lists maximum value of $40,000 for Purchase Assistance with and without Rehabilitation.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Highlands County",
      counties: ["Highlands"],
      eligibleAreas: ["Highlands County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["newly constructed home", "existing home"],
      notes: [
        "Applicant must have ability to secure a 30-year fixed-rate first mortgage; Conventional, FHA, VA, and USDA are acceptable.",
        "Applicant must have a mortgage lender pre-qualification letter and complete a homebuyer education course.",
        "Minimum cash contribution varies by income bracket from $500 to $1,400.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.highlandsfl.gov/departments/community_programs/housing/index.php",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists maximum purchase price or assessed value of $250,000 for existing or newly constructed units.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://cms2.revize.com/revize/highlandscountyfl/departments/community_programs/housing/FINAL2_NOFA%20subs%20SHIP%20HCBOCC%202023-2024%2022366_.pdf?t=202603101430220",
      notes: [
        "Official NOFA lists a March 16, 2026 to March 30, 2026 agency application period; public page says applications are received during advertised application periods.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed sources."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "borrower-facing application window",
        "repayment/forgiveness term",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Highlands County Housing",
      url: "https://www.highlandsfl.gov/departments/community_programs/housing/index.php",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Highlands County Housing",
        url: "https://www.highlandsfl.gov/departments/community_programs/housing/index.php",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Highlands County SHIP Notice of Funding Availability",
        url: "https://cms2.revize.com/revize/highlandscountyfl/departments/community_programs/housing/FINAL2_NOFA%20subs%20SHIP%20HCBOCC%202023-2024%2022366_.pdf?t=202603101430220",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current borrower-facing application period and loan term from Highlands County Housing before high-confidence recommendations.",
      ],
    },
  },
  "marathon-fthb": {
    assistance: {
      display: "Up to $20,000",
      maxAmount: 20000,
      maxAmountSourceUrl:
        "https://www.ci.marathon.fl.us/planning/page/first-time-home-buyers",
      calculationNotes:
        "Official city page lists up to $20,000 in down payment assistance loans; 2025 staff report shows recent loans were issued at $10,000 and $20,000.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 30,
      display: "Prorated forgiveness over 30 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Marathon",
      counties: ["Monroe"],
      cities: ["Marathon"],
      eligibleAreas: ["City of Marathon"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Official page states the program assists qualifying low- and moderate-income persons/families and provides homebuyer education and support.",
        "2025 staff report lists recent participants in median, moderate, and middle-income categories.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.ci.marathon.fl.us/planning/page/first-time-home-buyers",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page confirms income targeting but does not clearly publish current income or purchase price caps in the page text.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.ci.marathon.fl.us/sites/default/files/fileattachments/city_council/meeting/32994/6j_fthb_update_2025.pdf",
      notes: [
        "August 25, 2025 staff report says City Council may appropriate program funds each fiscal year and reports five loans issued in the prior fiscal year.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Official page does not clearly document stacking with Monroe County SHIP, Florida Housing, or other DPA.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current fiscal-year appropriation/funding balance",
        "purchase price cap",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Marathon First Time Home Buyers",
      url: "https://www.ci.marathon.fl.us/planning/page/first-time-home-buyers",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Marathon First Time Home Buyers",
        url: "https://www.ci.marathon.fl.us/planning/page/first-time-home-buyers",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label:
          "City of Marathon 2025 First Time Homebuyer Assistance Program update",
        url: "https://www.ci.marathon.fl.us/sites/default/files/fileattachments/city_council/meeting/32994/6j_fthb_update_2025.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current fiscal-year appropriation and application queue before presenting as available.",
        "Retrieve current application packet for income/purchase limits and stacking rules.",
      ],
    },
  },
  "winter-haven-ship": {
    assistance: {
      display: "Up to $60,000",
      maxAmount: 60000,
      maxAmountSourceUrl:
        "https://www.mywinterhaven.com/488/State-Housing-Initiatives-Partnership-SH",
      calculationNotes:
        "Official city page lists down payment assistance up to $60,000 based on household income.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 5,
      display: "5-year deferred forgivable note and mortgage",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Winter Haven",
      counties: ["Polk"],
      cities: ["Winter Haven"],
      eligibleAreas: ["Winter Haven city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family dwelling", "condominium", "townhouse"],
      notes: [
        "Applicant must be able to secure a traditional first mortgage from a financial institution or mortgage company.",
        "Applicant must not have owned a home in the past three years.",
        "Mobile homes are not eligible.",
        "Application packet includes creditworthiness criteria.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.mywinterhaven.com/488/State-Housing-Initiatives-Partnership-SH",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists homes must not exceed $544,243 and publishes income limits through 120% AMI.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.mywinterhaven.com/488/State-Housing-Initiatives-Partnership-SH",
      notes: [
        "Official page states SHIP funds are provided year round and administered first-come, first-ready.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed public sources."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Winter Haven SHIP",
      url: "https://www.mywinterhaven.com/488/State-Housing-Initiatives-Partnership-SH",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Winter Haven SHIP",
        url: "https://www.mywinterhaven.com/488/State-Housing-Initiatives-Partnership-SH",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Winter Haven DPA application packet",
        url: "https://www.mywinterhaven.com/DocumentCenter/View/1609/Down-Payment-Assistance-DPA-Application-Homebuyer-PDF",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm exact loan-type compatibility and any required buyer contribution with Guardian Community Resource Management before exact calculator recommendations.",
      ],
    },
  },
  "st-petersburg-dpa": {
    assistance: {
      display: "Up to $75,000 per current partner summary",
      maxAmount: 75000,
      maxAmountSourceUrl:
        "https://www.stpetersburghousingdownpaymentassistanceprogram.com/",
      calculationNotes:
        "Current partner summary lists up to $75,000. Official city planning documents confirm the purchase-assistance program exists and funds down payment/closing cost assistance, but a current official amount/term page was not found in this pass.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of St. Petersburg",
      counties: ["Pinellas"],
      cities: ["St. Petersburg"],
      eligibleAreas: ["St. Petersburg city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["single-family home"],
      notes: [
        "Official annual action plan describes the city's purchase-assistance first-time homebuyer program and use of SHIP, SSCRA, and HOME funds.",
        "Current partner source states assistance may apply to single-family homes, condos, or townhomes inside city limits; official property-type detail needs confirmation.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.stpete.org/Residents/Housing/Final%2022-23%20Annual%20Action%20Plan.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official planning documents confirm income-eligible purchase assistance; current amount, income tables, and purchase price caps need a current official program packet.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.stpete.org/Residents/Housing/Final%2022-23%20Annual%20Action%20Plan.pdf",
      notes: [
        "Official planning documents confirm historical funding, but a current official application status page was not found.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking rules were not confirmed in reviewed official sources.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current official program packet",
        "current official assistance maximum",
        "repayment/forgiveness terms",
        "current funding/application status",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of St. Petersburg FY 2022-2023 Annual Action Plan",
      url: "https://www.stpete.org/Residents/Housing/Final%2022-23%20Annual%20Action%20Plan.pdf",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official source confirms purchase assistance program but not current 2026 borrower terms.",
      ],
    },
    sources: [
      {
        label: "City of St. Petersburg FY 2022-2023 Annual Action Plan",
        url: "https://www.stpete.org/Residents/Housing/Final%2022-23%20Annual%20Action%20Plan.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "St. Petersburg housing DPA partner summary",
        url: "https://www.stpetersburghousingdownpaymentassistanceprogram.com/",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current official City of St. Petersburg borrower guidelines/application packet before using as high-confidence calculator data.",
      ],
    },
  },
  "manatee-county-hfa": {
    assistance: {
      display: "Up to $15,000",
      maxAmount: 15000,
      maxAmountSourceUrl: "https://manateehfa.org/",
      calculationNotes:
        "Official HFA page and eHousingPlus program highlights list down payment/closing cost assistance up to $15,000.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Manatee County",
      counties: ["Manatee"],
      eligibleAreas: ["Manatee County, including the City of Bradenton"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: true,
      propertyTypes: ["single-family home", "condominium", "townhome", "PUD"],
      notes: [
        "First-time buyer rule is waived for qualified military veterans.",
        "eHousingPlus rate chart lists FHA, USDA-RD, VA, and Freddie Mac offerings; government loans show 660 FICO and conventional offerings show 640 FICO.",
        "MCC is required for buyers who income-qualify when originating the Key to Homeownership Program.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: "https://manateehfa.org/",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official HFA page lists non-targeted purchase price limit $472,751 and targeted-area limit $600,029.",
        "Official HFA page lists maximum income limit $159,150 for loan and grant programs.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.ehousingplus.com/homeownership/hfa-of-manatee-county/program-highlights/",
      notes: [
        "eHousingPlus current program highlights list active rates and DPA offerings.",
        "Official HFA page says funds are available first-come, first-served.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Program is paired with the HFA of Manatee County first mortgage; external stacking was not confirmed.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "borrower contribution rule",
        "current borrower-specific target-area status",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Housing Finance Authority of Manatee County",
      url: "https://manateehfa.org/",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Housing Finance Authority of Manatee County",
        url: "https://manateehfa.org/",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "HFA of Manatee County eHousingPlus program highlights",
        url: "https://www.ehousingplus.com/homeownership/hfa-of-manatee-county/program-highlights/",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "HFA of Manatee County second mortgage lender guide",
        url: "https://www.ehousingplus.com/wp-content/uploads/Manatee-Final-2nd-Mtg-Guide-08-27-25.pdf",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm borrower-specific MCC requirement, target-area status, and stacking rules with participating lender.",
      ],
    },
  },
  "sarasota-own-a-home": {
    assistance: {
      display: "Up to $75,000",
      maxAmount: 75000,
      maxAmountSourceUrl:
        "https://www.herosrq.net/_files/ugd/d785c8_1cc0c8f47557481aa24e980ab09f9da9.pdf",
      calculationNotes:
        "Current Sarasota County HERO LHAP lists SHIP purchase assistance maximum award of $75,000.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 20,
      display: "Forgiven 5% per year over 20 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Sarasota County outside City of Sarasota limits",
      counties: ["Sarasota"],
      eligibleAreas: ["Sarasota County"],
      excludedAreas: ["City of Sarasota"],
      notes: [
        "LHAP states all homes purchased using this assistance must be located in Sarasota County except within the City limits of Sarasota.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family home", "townhome", "condominium"],
      notes: [
        "Applicant must have qualified for a first mortgage and have a firm financial commitment from the lender.",
        "Borrower and co-borrower must complete a qualified community homebuyer education class conducted by a HUD-certified housing counselor.",
        "Manufactured and mobile homes are not eligible.",
        "Applicants previously assisted by the county with housing rehabilitation or homebuyer assistance are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.herosrq.net/_files/ugd/d785c8_1cc0c8f47557481aa24e980ab09f9da9.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "LHAP serves very-low and low-income households and uses SHIP purchase price limits tied to 90% of average area purchase price.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.herosrq.net/ship",
      notes: [
        "HERO page states applications for SHIP purchase assistance and owner-occupied rehabilitation for 2025-2026 are currently closed and tentatively reopen in October 2026.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "LHAP states SHIP funds may be leveraged with or supplement other Florida Housing Finance Corporation programs, but borrower-specific stacking requires program/lender review.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current reopening date",
        "specific purchase price cap",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "program-specific stacking confirmation",
      ],
    },
    source: {
      label: "Sarasota County HERO SHIP program page",
      url: "https://www.herosrq.net/ship",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Sarasota County HERO SHIP program page",
        url: "https://www.herosrq.net/ship",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Sarasota County SHIP LHAP 2025-2028",
        url: "https://www.herosrq.net/_files/ugd/d785c8_1cc0c8f47557481aa24e980ab09f9da9.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh application status near the tentative October 2026 reopening.",
        "Confirm exact current purchase price cap and lender compatibility before exact calculator recommendations.",
      ],
    },
  },
  "largo-sold-on-largo": {
    assistance: {
      display: "$15,000-$55,700 down payment assistance by income category",
      minAmount: 15000,
      maxAmount: 55700,
      maxAmountSourceUrl: "https://largo.civicweb.net/document/54936/",
      calculationNotes:
        "Official LHAP excerpt lists down payment assistance of $55,700 for very-low/low income, $40,000 for moderate income, and $15,000 for 121%-140% AMI; a separate $1,500 grant covers HQS inspection, education, and counseling costs.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Largo",
      counties: ["Pinellas"],
      cities: ["Largo"],
      eligibleAreas: ["Largo city limits"],
      notes: ["Official LHAP excerpt states property tax code must be LA."],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Sold on Largo provides homebuyer education and housing counseling to prepare first-time buyers for homeownership.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl: "https://largo.civicweb.net/document/54936/",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official LHAP excerpt serves very-low, low, moderate, and 121%-140% AMI categories; purchase price cap was not confirmed in the reviewed excerpt.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.largo.com/services/residents/housing_assistance/resources.php",
      notes: [
        "Current city resources page was linked from the existing record, but current funding/application status was not clearly confirmed in this pass.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed public sources."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current funding/application status",
        "purchase price cap",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Largo SHIP LHAP Sold on Largo excerpt",
      url: "https://largo.civicweb.net/document/54936/",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Largo SHIP LHAP Sold on Largo excerpt",
        url: "https://largo.civicweb.net/document/54936/",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "City of Largo housing assistance resources",
        url: "https://www.largo.com/services/residents/housing_assistance/resources.php",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current Sold on Largo application/funding status and current LHAP for 2025-2028 before high-confidence recommendations.",
      ],
    },
  },
  "palatka-dpa-grant": {
    assistance: {
      display: "$20,000 grant",
      maxAmount: 20000,
      maxAmountSourceUrl: "https://palatka-fl.gov/CivicAlerts.aspx?AID=959",
      calculationNotes:
        "Official city news states each approved applicant received $20,000 in down payment assistance.",
    },
    repaymentType: "grant",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Palatka",
      counties: ["Putnam"],
      cities: ["Palatka"],
      eligibleAreas: ["Palatka city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 620,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Official city article says buyers must purchase within City of Palatka, have at least a 620 credit score, show verifiable income for 24 months, and complete a certified HUD first-time homebuyer course.",
        "Official workshop article states household income must be at or below 80% AMI and participants must secure mortgage preapproval.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://palatka-fl.gov/599/Workshop-highlights-housing-programs",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official workshop article confirms income at or below 80% AMI; purchase price cap was not confirmed.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://palatka-fl.gov/CivicAlerts.aspx?AID=959",
      notes: [
        "Official July 2025 city article says six loans had closed and more were in process; current remaining funds were not stated.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed city articles."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current remaining funds/application status",
        "purchase price cap",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Palatka down payment assistance update",
      url: "https://palatka-fl.gov/CivicAlerts.aspx?AID=959",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Palatka down payment assistance update",
        url: "https://palatka-fl.gov/CivicAlerts.aspx?AID=959",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "City of Palatka housing programs workshop",
        url: "https://palatka-fl.gov/599/Workshop-highlights-housing-programs",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm remaining grant funds and current application packet with Azcarate Consulting Group or the City of Palatka.",
      ],
    },
  },
  "port-st-lucie-ha": {
    assistance: {
      display: "Up to $100,000 through CLT structure",
      maxAmount: 100000,
      maxAmountSourceUrl:
        "https://cltofpbc.org/wp-content/uploads/2024/05/cltpbc-PSL-Handout-Final.pdf",
      calculationNotes:
        "CLT program handout says selected applicants receive an award letter for up to $100,000; the subsidy is tied to CLT land/deed restrictions rather than a conventional DPA second mortgage.",
    },
    repaymentType: "subsidy",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["portfolio", "unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Port St. Lucie",
      counties: ["St. Lucie"],
      cities: ["Port St. Lucie"],
      eligibleAreas: ["City of Port St. Lucie"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "condominium"],
      notes: [
        "Applicants must live and/or work in Port St. Lucie at application.",
        "Minimum gross annual household income is $70,000 and maximum is 120% AMI.",
        "Minimum earnest deposit is $1,600 and minimum buyer contribution is 1% of sales price.",
        "Applicants must complete CLT orientation, a HUD-approved live 6-hour first-time homebuyer class, a 2-hour one-on-one session, and attorney review of land lease/deed restriction.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ami",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://cltofpbc.org/wp-content/uploads/2024/05/cltpbc-PSL-Handout-Final.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Handout lists 120% AMI limits for the Port St. Lucie MSA and an asset cap of $15,000, excluding cash to close and IRS-designated retirement assets.",
        "Current maximum home price was not clearly stated in the reviewed city page or handout.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.cityofpsl.com/Government/Your-City-Government/Departments/Neighborhood-Services/Community-Programs/Housing-Programs/Homebuyer-Assistance-Program",
      notes: [
        "Official city page says current status is closed; applications opened June 12, 2024 and closed June 17, 2024.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Because the program uses CLT land/deed restrictions and approved lender financing, stacking must be confirmed with CLTPBCTC and lender.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "program reopening date",
        "purchase price cap",
        "approved lender/loan product list",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Port St. Lucie Homebuyer Assistance Program",
      url: "https://www.cityofpsl.com/Government/Your-City-Government/Departments/Neighborhood-Services/Community-Programs/Housing-Programs/Homebuyer-Assistance-Program",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Port St. Lucie Homebuyer Assistance Program",
        url: "https://www.cityofpsl.com/Government/Your-City-Government/Departments/Neighborhood-Services/Community-Programs/Housing-Programs/Homebuyer-Assistance-Program",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "CLT of Palm Beach County and the Treasure Coast PSL handout",
        url: "https://cltofpbc.org/wp-content/uploads/2024/05/cltpbc-PSL-Handout-Final.pdf",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Application window is closed; refresh city/CLT page before recommending.",
        "Confirm whether future rounds preserve the same $100,000 award and eligibility rules.",
      ],
    },
  },
  "fort-pierce-hpa": {
    assistance: {
      display: "$10,000-$15,000 typical assistance",
      minAmount: 10000,
      maxAmount: 15000,
      maxAmountSourceUrl:
        "https://www.cityoffortpierce.com/DocumentCenter/View/28919/Purchase-Assistance-Program-FAQ",
      calculationNotes:
        "Official FAQ says assistance normally ranges between $10,000 and $15,000, depending on applicant situation and costs.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      min: 10,
      max: 15,
      display: "Deferred affordability period varies from 10 to 15 years",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "city",
      jurisdictionLevel: "city",
      display: "City of Fort Pierce",
      counties: ["St. Lucie"],
      cities: ["Fort Pierce"],
      eligibleAreas: ["Fort Pierce city limits"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["home ten years old or newer"],
      notes: [
        "Applicants must secure a first mortgage from an approved lender and contribute at least $500 toward closing.",
        "Applicants must attend a mandatory orientation before submitting an application.",
        "FAQ says the home must be located in Fort Pierce city limits and be ten years old or newer.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.cityoffortpierce.com/DocumentCenter/View/28919/Purchase-Assistance-Program-FAQ",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "FAQ lists 2024 income limits and minimum gross yearly income of $30,000; purchase price cap was not confirmed in the FAQ.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.cityoffortpierce.com/503/Open-Grant-Opportunities?randid=285336",
      notes: [
        "Official grant page lists the Home Purchase Assistance Program as closed.",
        "Page lists mandatory orientations for December 4 and December 18, 2025, and says applications are subject to funding availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed city sources."],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "future application reopening",
        "purchase price cap",
        "first-time buyer rule",
        "compatible first mortgage loan types",
        "stacking compatibility",
      ],
    },
    source: {
      label: "City of Fort Pierce Home Purchase Assistance FAQ",
      url: "https://www.cityoffortpierce.com/DocumentCenter/View/28919/Purchase-Assistance-Program-FAQ",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Fort Pierce Home Purchase Assistance FAQ",
        url: "https://www.cityoffortpierce.com/DocumentCenter/View/28919/Purchase-Assistance-Program-FAQ",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "City of Fort Pierce Grant Programs",
        url: "https://www.cityoffortpierce.com/503/Open-Grant-Opportunities?randid=285336",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm current application cycle and purchase price cap before borrower-facing recommendations.",
      ],
    },
  },
  "st-lucie-martin-home-consortium": {
    assistance: {
      display: "Need-based assistance up to $50,000",
      maxAmount: 50000,
      maxAmountSourceUrl:
        "https://www.martin.fl.us/resources/home-down-payment-application",
      calculationNotes:
        "Official HOME Consortium application states assistance is the amount needed for affordability, not to exceed $50,000.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "regional",
      jurisdictionLevel: "regional",
      display: "Unincorporated St. Lucie County or Martin County",
      counties: ["St. Lucie", "Martin"],
      eligibleAreas: [
        "Unincorporated St. Lucie County",
        "Unincorporated Martin County",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family home"],
      notes: [
        "Application requires pre-approval letter from a participating lender and a First Time Homebuyer Workshop certificate within one year of issue.",
        "Homebuyers must contribute a minimum of $500 of their own funds.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.martin.fl.us/resources/home-down-payment-application",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Application is revised 2018 and lists maximum purchase price of $185,000 existing or $229,000 new construction; verify whether caps remain current before exact eligibility.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.martin.fl.us/resources/home-down-payment-application",
      notes: [
        "Official application says assistance is contingent on availability of funds; current fund status was not confirmed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in the reviewed application."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current application packet",
        "current purchase price caps",
        "current funding/application status",
        "compatible first mortgage loan types",
        "repayment/forgiveness term",
        "stacking compatibility",
      ],
    },
    source: {
      label:
        "St. Lucie/Martin County HOME Consortium purchase assistance application",
      url: "https://www.martin.fl.us/resources/home-down-payment-application",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official document is older and should be refreshed against current program staff before exact calculator decisions.",
      ],
    },
    sources: [
      {
        label:
          "St. Lucie/Martin County HOME Consortium purchase assistance application",
        url: "https://www.martin.fl.us/resources/home-down-payment-application",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Application is revised 2018; find current HOME Consortium guidelines or confirm with St. Lucie/Martin County staff.",
      ],
    },
  },
  "indian-river-habitat": {
    assistance: {
      display: "Affordable Habitat home with 0% interest mortgage",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Habitat homeownership is not a conventional DPA amount; eligible buyers purchase a Habitat home with a no-profit, no-interest mortgage.",
    },
    repaymentType: "first_mortgage",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["portfolio"],
    geography: {
      scope: "county",
      jurisdictionLevel: "nonprofit",
      display: "Indian River County Habitat service area",
      counties: ["Indian River"],
      eligibleAreas: [
        "Oslo Park",
        "Gifford",
        "Vero Lake Estates when homes are available",
      ],
      notes: [
        "Habitat page states current build areas include Oslo Park, with Gifford and Vero Lake Estates planned.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: false,
      militaryEligible: "unknown",
      propertyTypes: ["Habitat-built home"],
      notes: [
        "Selection is based on demonstrated need, ability to pay, and willingness to partner.",
        "Applicant must have adequate income for utilities, maintenance, taxes, insurance, and mortgage payments.",
        "Applicant must complete sweat equity: 300 hours for a single-adult household or 500 hours for a dual-adult household.",
        "Applicant must save at least $2,500 toward closing costs.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: "https://www.irchabitat.org/buy-a-home/",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists 2026 minimum and maximum income guidelines by household size.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.irchabitat.org/buy-a-home/",
      notes: [
        "Official page says Indian River Habitat is not accepting new registrations at this time and to check back in July.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "This is a Habitat homeownership/mortgage program, not a subordinate DPA that can be generally stacked with market purchases.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: true,
      missingData: [
        "registration reopening date",
        "available home inventory",
        "current house price/payment model",
        "first-time buyer rule",
      ],
    },
    source: {
      label: "Indian River Habitat Homebuyer Program",
      url: "https://www.irchabitat.org/buy-a-home/",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Indian River Habitat Homebuyer Program",
        url: "https://www.irchabitat.org/buy-a-home/",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Refresh when Indian River Habitat reopens registrations and publishes current inventory/payment assumptions.",
      ],
    },
  },
  "madison-county-ship": {
    assistance: {
      display: "$25,000-$35,000 by income category",
      minAmount: 25000,
      maxAmount: 35000,
      maxAmountSourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/madison-26-29.pdf?sfvrsn=e5e0377b_10",
      calculationNotes:
        "Florida Housing-posted 2026-2029 LHAP delivery chart lists $35,000 very-low, $30,000 low, and $25,000 moderate for purchase assistance with or without rehab.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Madison County",
      counties: ["Madison"],
      eligibleAreas: ["Madison County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: [
        "new construction",
        "existing home",
        "manufactured/mobile home subject to LHAP age limits",
      ],
      notes: [
        "Older LHAP text states manufactured/mobile homes no older than four years are eligible for purchase assistance strategies.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/madison-26-29.pdf?sfvrsn=e5e0377b_10",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "2026-2029 LHAP delivery chart lists purchase price limits of $325,000 for new and existing units.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/madison-26-29.pdf?sfvrsn=e5e0377b_10",
      notes: [
        "LHAP confirms planned strategy and allocation, but current application/funding status was not confirmed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "conditional",
      withLocalPrograms: "conditional",
      notes: [
        "Older Madison LHAP text allows third lien position when using Hometown Heroes with SHIP; confirm current 2026-2029 rules before recommending stacking.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "current county/SREC application packet",
        "first-time buyer rule",
        "primary residence rule",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "repayment/forgiveness terms",
        "current funding/application status",
      ],
    },
    source: {
      label: "Madison County SHIP LHAP 2026-2029 via Florida Housing",
      url: "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/madison-26-29.pdf?sfvrsn=e5e0377b_10",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Madison County SHIP LHAP 2026-2029 via Florida Housing",
        url: "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/madison-26-29.pdf?sfvrsn=e5e0377b_10",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Madison County SHIP LHAP 2023-2026 via Florida Housing",
        url: "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/madison-23-26.pdf?sfvrsn=e5e0377b_9",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find SREC/Madison County current application packet for borrower-level rules and funding status.",
      ],
    },
  },
  "wakulla-county-ship": {
    assistance: {
      display: "Up to $15,000 per prior public NOFA",
      maxAmount: 15000,
      maxAmountSourceUrl:
        "https://www.floridahousing.org/programs/special-programs/local-housing-assistance-plan-%28lhap%29/current-local-government-lhaps",
      calculationNotes:
        "Current Florida Housing LHAP index confirms Wakulla 24-27 LHAP exists; prior public NOFA listed $15,000 maximum for homebuyer purchase assistance. Current LHAP amount needs direct PDF confirmation.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Wakulla County",
      counties: ["Wakulla"],
      eligibleAreas: ["Wakulla County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Prior public NOFA describes assistance for first-time homebuyers eligible under SHIP guidelines.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.floridahousing.org/programs/special-programs/local-housing-assistance-plan-%28lhap%29/current-local-government-lhaps",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Current Florida Housing LHAP index confirms Wakulla 24-27 is the current plan, but exact purchase price caps were not extracted in this pass.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.floridahousing.org/programs/special-programs/local-housing-assistance-plan-%28lhap%29/current-local-government-lhaps",
      notes: [
        "Current application/funding status was not confirmed from county sources.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed sources."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "direct current LHAP PDF/details",
        "current application packet",
        "purchase price cap",
        "primary residence rule",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "repayment/forgiveness terms",
        "current funding/application status",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Florida Housing current LHAP index - Wakulla 24-27",
      url: "https://www.floridahousing.org/programs/special-programs/local-housing-assistance-plan-%28lhap%29/current-local-government-lhaps",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Index confirms current LHAP exists; direct PDF and county application source still need retrieval.",
      ],
    },
    sources: [
      {
        label: "Florida Housing current LHAP index - Wakulla 24-27",
        url: "https://www.floridahousing.org/programs/special-programs/local-housing-assistance-plan-%28lhap%29/current-local-government-lhaps",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Wakulla County SHIP NOFA reported by The Wakulla Sun",
        url: "https://thewakullasun.com/pdfs/e-editions/2022/TheWakullaSun-05-26-22.pdf",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Retrieve direct Wakulla 24-27 LHAP PDF and current county application packet before high-confidence calculator use.",
      ],
    },
  },
  "walton-county-ship": {
    assistance: {
      display: "Amount not safely estimable from current source",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Current Florida Housing-posted Walton LHAP confirms a First-Time Homebuyer purchase-assistance strategy, but the sampled source text did not expose a clear current maximum award.",
    },
    repaymentType: "unknown",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Walton County",
      counties: ["Walton"],
      eligibleAreas: ["Walton County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Florida Housing-posted Walton LHAP table of contents confirms Purchase Assistance with Rehabilitation/without Rehabilitation for FTHB.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/walton-25-28.pdf?sfvrsn=d01b3f7b_11",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Exact income tables and purchase price caps need extraction from the full Walton 25-28 LHAP or county/ECRC application packet.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/walton-25-28.pdf?sfvrsn=d01b3f7b_11",
      notes: [
        "LHAP confirms planned strategy, but current application/funding status was not confirmed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed source text."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "assistance maximum",
        "current application packet",
        "purchase price cap",
        "primary residence rule",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "repayment/forgiveness terms",
        "current funding/application status",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Walton County SHIP LHAP 2025-2028 via Florida Housing",
      url: "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/walton-25-28.pdf?sfvrsn=d01b3f7b_11",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Walton County SHIP LHAP 2025-2028 via Florida Housing",
        url: "https://www.floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/walton-25-28.pdf?sfvrsn=d01b3f7b_11",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Extract full Walton LHAP strategy pages or obtain ECRC/current application packet before calculator estimates.",
      ],
    },
  },
  "salute-our-soldiers": {
    assistance: {
      display: "Legacy military DPA; current active terms not confirmed",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Florida Housing published historical Salute Our Soldiers materials, but current active 2026 Florida Housing/eHousingPlus program materials do not clearly present this as a standalone active program.",
    },
    repaymentType: "unknown",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "unknown"],
    geography: {
      scope: "statewide",
      jurisdictionLevel: "florida_statewide",
      display: "Statewide, if active",
      counties: [],
      eligibleAreas: ["Florida"],
      notes: [
        "Treat as historical/uncertain until current Florida Housing or administrator materials confirm availability.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: "unknown",
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: true,
      propertyTypes: undefined,
      notes: [
        "Historical flyer targeted military service members and veterans, but current borrower rules were not confirmed in active Florida Housing/eHousingPlus materials.",
      ],
    },
    limits: {
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "unknown",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/homebuyers/salute-our-soliders-military-loan-programs-flyer.pdf?sfvrsn=b478fd7b_2",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Current income and purchase price limits were not confirmed from active materials.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.floridahousing.org/docs/default-source/programs/homebuyers/salute-our-soliders-military-loan-programs-flyer.pdf?sfvrsn=b478fd7b_2",
      notes: [
        "Historical Florida Housing flyer was found; active current availability was not confirmed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Do not stack or recommend until current active program status is verified.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "current active program confirmation",
        "assistance amount",
        "repayment terms",
        "income limits",
        "purchase price limits",
        "compatible first mortgage loan types",
        "homebuyer education rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Florida Housing historical Salute Our Soldiers flyer",
      url: "https://www.floridahousing.org/docs/default-source/programs/homebuyers/salute-our-soliders-military-loan-programs-flyer.pdf?sfvrsn=b478fd7b_2",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Historical source only; current active availability requires separate confirmation.",
      ],
    },
    sources: [
      {
        label: "Florida Housing historical Salute Our Soldiers flyer",
        url: "https://www.floridahousing.org/docs/default-source/programs/homebuyers/salute-our-soliders-military-loan-programs-flyer.pdf?sfvrsn=b478fd7b_2",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Salute Our Soldiers current partner summary",
        url: "https://www.saluteoursoldiersflorida.com/",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find current Florida Housing/eHousingPlus lender guide or official announcement before treating this as active.",
        "This may be superseded by or confused with Hometown Heroes military/veteran eligibility.",
      ],
    },
  },
  "miami-dade-advocacy-trust": {
    assistance: {
      display: "Up to $28,000",
      maxAmount: 28000,
      maxAmountSourceUrl:
        "https://www.miamidade.gov/resources/economic-advocacy/documents/hap-program-highlights.pdf",
      calculationNotes:
        "Official MDEAT HAP highlights list maximum assistance of $28,000; legacy record's $28,500 amount was not confirmed.",
    },
    repaymentType: "forgivable",
    forgivenessYears: {
      max: 15,
      display: "Forgivable over the affordability period per HAP highlights",
    },
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Miami-Dade County",
      counties: ["Miami-Dade"],
      eligibleAreas: ["Miami-Dade County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "condominium"],
      notes: [
        "MDEAT says low-to-moderate income borrowers may have any licensed Florida mortgage lender submit a HAP application on their behalf.",
        "Program is designed to increase owner-occupied home purchases for low-to-moderate-income Miami-Dade County residents.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.miamidade.gov/resources/economic-advocacy/documents/hap-program-highlights.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official highlights reference income limits and allowable financing chart; exact borrower limits must be read from the current chart.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.miamidade.gov/global/service.page?Mduid_service=ser1532378258174440",
      notes: [
        "MDEAT uses an RFA process and lender submission; funding is subject to availability.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking rules were not confirmed in reviewed official sources.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current income and purchase price chart values",
        "compatible first mortgage loan types",
        "borrower contribution amount",
        "stacking compatibility",
        "real-time funding availability",
      ],
    },
    source: {
      label: "MDEAT Homeownership Assistance Program highlights",
      url: "https://www.miamidade.gov/resources/economic-advocacy/documents/hap-program-highlights.pdf",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "MDEAT Homeownership Assistance Program highlights",
        url: "https://www.miamidade.gov/resources/economic-advocacy/documents/hap-program-highlights.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Miami-Dade Economic Advocacy Trust HAP service page",
        url: "https://www.miamidade.gov/global/service.page?Mduid_service=ser1532378258174440",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Legacy $28,500 amount was corrected to $28,000 based on official highlights; monitor new HAP highlights for changes.",
      ],
    },
  },
  "miami-dade-hfa": {
    assistance: {
      display: "$15,000",
      maxAmount: 15000,
      maxAmountSourceUrl:
        "https://www.ehousingplus.com/homeownership/hfa-of-miami-dade-county/program-highlights/",
      calculationNotes:
        "eHousingPlus program highlights list $15,000 in down payment and closing cost assistance for the HFA of Miami-Dade Single Family Program.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Miami-Dade County",
      counties: ["Miami-Dade"],
      eligibleAreas: ["Miami-Dade County"],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "condominium", "PUD"],
      notes: [
        "HFA guide requires first-time buyer status for borrower and spouse.",
        "Program is accessed through participating lenders and administrator reservation process.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.ehousingplus.com/wp-content/uploads/Miami-Final-Guide-06-17-25c.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Program guide and highlights define income and purchase price limits; borrower-specific limit values depend on target/non-target and household size.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.ehousingplus.com/homeownership/hfa-of-miami-dade-county/program-highlights/",
      notes: [
        "eHousingPlus current highlights list active HFA of Miami-Dade program offerings.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Program pairs with the HFA of Miami-Dade first mortgage; external stacking was not confirmed.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "borrower-specific target/non-target limits",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "HFA of Miami-Dade eHousingPlus program highlights",
      url: "https://www.ehousingplus.com/homeownership/hfa-of-miami-dade-county/program-highlights/",
      quality: "partner",
      accessedDate: VERIFIED_SOURCE_DATE,
      notes: [
        "eHousingPlus is the program administrator portal for the HFA single-family program.",
      ],
    },
    sources: [
      {
        label: "HFA of Miami-Dade eHousingPlus program highlights",
        url: "https://www.ehousingplus.com/homeownership/hfa-of-miami-dade-county/program-highlights/",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "HFA of Miami-Dade administrator guide",
        url: "https://www.ehousingplus.com/wp-content/uploads/Miami-Final-Guide-06-17-25c.pdf",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find direct HFA board/county page if available; current operational source is administrator-hosted.",
      ],
    },
  },
  "broward-county-cdbg": {
    description:
      "Legacy record for Broward purchase assistance/gap funding. Current official Broward materials describe the county Homebuyer Purchase Assistance program and funding by community rather than a separate clearly named countywide CDBG product.",
    assistance: {
      display:
        "Community-specific Broward HPA funding; not a standalone 3% estimate",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Official Broward funding table lists assistance by community and does not clearly confirm the legacy 3% CDBG estimate as a standalone calculator amount.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Broward County participating communities",
      counties: ["Broward"],
      eligibleAreas: ["Participating Broward County communities"],
      notes: [
        "Funding and eligibility vary by participating municipality/community and current funding table.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["unknown"],
      notes: [
        "Broward official homebuyer page says lender guidelines are used and household income must be certified by Broward County.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "hud",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.broward.org/Housing/Documents/Broward%20County%20HPA%20funds%209.2.2025.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Current funding table lists max gross household income as 80% AMI for many communities and different funding amounts by community.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.broward.org/Housing/Pages/Program.aspx",
      notes: [
        "Official Broward page says programs are first-come, first-qualified, first-served until funds are expended.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "conditional",
      notes: [
        "Legacy CDBG/gap-filler framing should be confirmed with Broward lender guidelines before stacking.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "official standalone CDBG product confirmation",
        "community-specific assistance amount",
        "purchase price cap",
        "repayment/forgiveness terms",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Broward County Housing Program Services",
      url: "https://www.broward.org/Housing/Pages/Program.aspx",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Broward County Housing Program Services",
        url: "https://www.broward.org/Housing/Pages/Program.aspx",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Broward County homebuyer programs",
        url: "https://www.broward.org/Housing/pages/homebuyer.aspx/1000",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Broward County HPA funds table",
        url: "https://www.broward.org/Housing/Documents/Broward%20County%20HPA%20funds%209.2.2025.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Consider consolidating this legacy record with Broward County HPA unless a distinct CDBG purchase-assistance product is confirmed.",
      ],
    },
  },
  "hands-of-central-florida": {
    assistance: {
      display: "Education/counseling pathway, not a direct DPA award",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "HANDS provides homebuyer education and counseling required for many local DPA programs; no direct assistance amount was confirmed on official HANDS/City of Orlando sources.",
    },
    repaymentType: "counseling",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "regional",
      jurisdictionLevel: "nonprofit",
      display: "Central Florida housing counseling service area",
      counties: ["Orange", "Osceola", "Seminole"],
      eligibleAreas: ["Central Florida"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: "unknown",
      homebuyerEducationRequired: true,
      householdSizeRequired: "unknown",
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: undefined,
      notes: [
        "City of Orlando directory identifies HANDS as providing counseling sessions and mass homeownership education seminars necessary to receive DPA such as NSP and SHIP from Central Florida cities and counties.",
      ],
    },
    limits: {
      incomeLimitRequired: "unknown",
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "unknown",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://www.orlando.gov/Directory/Homelessness-Assistance/Housing-and-Neighborhood-Development-Services-HANDS-of-Central-Florida",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Direct DPA income or purchase price limits do not apply to HANDS itself; limits belong to the downstream local DPA program.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.housingcounseling.org/home",
      notes: [
        "HANDS website lists housing counseling and homebuyer education services.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "conditional",
      withHometownHeroes: "conditional",
      withLocalPrograms: "conditional",
      notes: [
        "HANDS certification/counseling may satisfy education requirements for local programs; it is not itself a stackable funding source.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "downstream DPA program selection",
        "direct funding amount not applicable",
        "borrower eligibility belongs to city/county program",
      ],
    },
    source: {
      label: "City of Orlando HANDS of Central Florida directory",
      url: "https://www.orlando.gov/Directory/Homelessness-Assistance/Housing-and-Neighborhood-Development-Services-HANDS-of-Central-Florida",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "City of Orlando HANDS of Central Florida directory",
        url: "https://www.orlando.gov/Directory/Homelessness-Assistance/Housing-and-Neighborhood-Development-Services-HANDS-of-Central-Florida",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "HANDS housing counseling website",
        url: "https://www.housingcounseling.org/home",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Do not present HANDS as a direct DPA award; use as education/counseling prerequisite in calculator flows.",
      ],
    },
  },
  "st-lucie-county-grant": {
    assistance: {
      display: "$2,500 grant per current partner summary",
      maxAmount: 2500,
      maxAmountSourceUrl:
        "https://www.stluciemartincountyhomepurchaseassistance.com/st-lucie-attainable-housing-grant",
      calculationNotes:
        "Partner source lists $2,500 grant. Official St. Lucie LHAP confirms purchase assistance strategies but did not clearly expose this distinct Attainable Housing Grant in sampled official text.",
    },
    repaymentType: "grant",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "St. Lucie County",
      counties: ["St. Lucie"],
      eligibleAreas: ["St. Lucie County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "unknown",
      propertyTypes: ["primary residence"],
      notes: [
        "Partner source indicates grant is applied toward down payment and/or closing costs at closing.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: "unknown",
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl:
        "https://floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/st-lucie-25-28375958c2fb0d6fb69bf3ff00004a6e0f.pdf?sfvrsn=ee55377b_13",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official St. Lucie LHAP confirms county purchase-assistance strategy framework; exact Attainable Housing Grant limits need current county confirmation.",
      ],
    },
    availability: {
      status: "unknown",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl:
        "https://www.stluciemartincountyhomepurchaseassistance.com/st-lucie-attainable-housing-grant",
      notes: [
        "Current official status for the distinct $2,500 grant was not confirmed.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking and relationship to county SHIP/HOME assistance need official confirmation.",
      ],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "official distinct grant confirmation",
        "current funding/application status",
        "first-time buyer rule",
        "purchase price cap",
        "homebuyer education rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "St. Lucie Attainable Housing Grant partner summary",
      url: "https://www.stluciemartincountyhomepurchaseassistance.com/st-lucie-attainable-housing-grant",
      quality: "partner",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "St. Lucie Attainable Housing Grant partner summary",
        url: "https://www.stluciemartincountyhomepurchaseassistance.com/st-lucie-attainable-housing-grant",
        quality: "partner",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "St. Lucie County SHIP LHAP 2025-2028 via Florida Housing",
        url: "https://floridahousing.org/docs/default-source/programs/special-programs/lhap/county-lhaps/st-lucie-25-28375958c2fb0d6fb69bf3ff00004a6e0f.pdf?sfvrsn=ee55377b_13",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "unknown",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Find official St. Lucie County page/application for the distinct $2,500 Attainable Housing Grant or consider consolidating with county purchase assistance.",
      ],
    },
  },
  "martin-county-ship": {
    assistance: {
      display: "SHIP/HOME purchase assistance; current award varies",
      maxAmount: undefined,
      maxAmountSourceUrl: undefined,
      calculationNotes:
        "Official Martin County page confirms SHIP administration and current LHAP; sampled official text did not clearly expose a current purchase-assistance maximum for this record.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Martin County",
      counties: ["Martin"],
      eligibleAreas: ["Martin County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["non-mobile home"],
      notes: [
        "Official SHIP page says applicants must be Martin County residents, occupy the home as primary residence, meet household income guidelines, and mobile homes are not eligible.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "ship",
      usesFloridaHousingLimits: "unknown",
      limitsSourceUrl: "https://www.martin.fl.us/SHIP",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official SHIP page lists maximum home market value of $619,629.",
      ],
    },
    availability: {
      status: "limited",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.martin.fl.us/SHIP",
      notes: [
        "Official SHIP page says SHIP applications are open, but the notice specifically mentions rehabilitation and water/sewer hookup applications; purchase assistance status needs confirmation.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: ["Stacking rules were not confirmed in reviewed official source."],
    },
    calculator: {
      confidence: "low",
      canEstimateAmount: false,
      canDetermineBasicEligibility: false,
      missingData: [
        "current purchase assistance maximum",
        "purchase assistance open/closed status",
        "first-time buyer rule",
        "homebuyer education rule",
        "compatible first mortgage loan types",
        "borrower contribution rule",
        "repayment/forgiveness term",
        "stacking compatibility",
      ],
    },
    source: {
      label: "Martin County SHIP program page",
      url: "https://www.martin.fl.us/SHIP",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "Martin County SHIP program page",
        url: "https://www.martin.fl.us/SHIP",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      {
        label: "Martin County SHIP LHAP resource",
        url: "https://www.martin.fl.us/resources/ship-lhap",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
    ],
    maintenance: {
      status: "limited",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Confirm whether purchase assistance is currently accepting applications and extract current maximum award from Martin County LHAP/application packet.",
      ],
    },
  },
  "indian-river-county-hfa": {
    assistance: {
      display: "Up to $10,000",
      maxAmount: 10000,
      maxAmountSourceUrl:
        "https://www.escambiahfa.com/pdf/countyPDFs/new/Gov.-2024Lmts-Indian-River--St.-Lucie-Martin-5.17.24.pdf",
      calculationNotes:
        "ECHFA county flyer lists Classic DPA up to $10,000 as a 0%, non-amortizing, 30-year deferred second mortgage.",
    },
    repaymentType: "deferred",
    forgivenessYears: undefined,
    compatibleLoanTypes: ["fha", "va", "usda", "conventional", "hfa"],
    geography: {
      scope: "regional",
      jurisdictionLevel: "regional",
      display: "Indian River County via ECHFA",
      counties: ["Indian River"],
      eligibleAreas: ["Indian River County"],
      notes: [
        "This record appears to represent Indian River participation in the Escambia County Housing Finance Authority regional program.",
      ],
    },
    eligibility: {
      firstTimeBuyerRequired: true,
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: true,
      minimumCreditScore: 640,
      householdSizeRequired: true,
      borrowerContributionRequired: "unknown",
      approvedLenderRequired: true,
      militaryEligible: "varies",
      propertyTypes: ["single-family", "townhome", "condominium", "PUD"],
      notes: [
        "ECHFA regional materials describe first-time buyer requirements with exceptions for veterans and target areas.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl:
        "https://www.escambiahfa.com/pdf/countyPDFs/new/Gov.-2024Lmts-Indian-River--St.-Lucie-Martin-5.17.24.pdf",
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "ECHFA Indian River/St. Lucie/Martin flyer lists income limits by household size and county; verify current 2026 limits before exact eligibility.",
      ],
    },
    availability: {
      status: "available",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: "https://www.escambiahfa.com/homebuyers/assistance-program",
      notes: [
        "ECHFA assistance program page describes continuous regional funding; county-specific real-time reservations still require lender confirmation.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "not_allowed",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Program pairs with ECHFA first mortgage; external local stacking not confirmed.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: true,
      missingData: [
        "current 2026 county-specific limits",
        "borrower contribution rule",
        "stacking compatibility",
      ],
    },
    source: {
      label: "ECHFA Indian River/St. Lucie/Martin county flyer",
      url: "https://www.escambiahfa.com/pdf/countyPDFs/new/Gov.-2024Lmts-Indian-River--St.-Lucie-Martin-5.17.24.pdf",
      quality: "official",
      accessedDate: VERIFIED_SOURCE_DATE,
    },
    sources: [
      {
        label: "ECHFA Indian River/St. Lucie/Martin county flyer",
        url: "https://www.escambiahfa.com/pdf/countyPDFs/new/Gov.-2024Lmts-Indian-River--St.-Lucie-Martin-5.17.24.pdf",
        quality: "official",
        accessedDate: VERIFIED_SOURCE_DATE,
      },
      escambiaHfaHomeownershipSource,
      escambiaHfaQualifySource,
    ],
    maintenance: {
      status: "active",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Verify whether newer 2026 Indian River county flyer/limits supersede the 2024 ECHFA flyer before exact calculator results.",
      ],
    },
  },
  "palm-beach-match-pilot": {
    assistance: {
      display: "Dollar-for-dollar match up to $50,000",
      minAmount: 10000,
      maxAmount: 50000,
      maxAmountSourceUrl: PALM_BEACH_MATCH_PILOT_URL,
      calculationNotes:
        "County matches buyer cash contribution dollar-for-dollar up to $50,000; approved buyers must contribute at least $10,000.",
    },
    repaymentType: "grant",
    compatibleLoanTypes: ["unknown"],
    geography: {
      scope: "county",
      jurisdictionLevel: "county",
      display: "Palm Beach County",
      counties: ["Palm Beach"],
      eligibleAreas: ["Palm Beach County"],
    },
    eligibility: {
      firstTimeBuyerRequired: "unknown",
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      primaryResidenceRequired: true,
      homebuyerEducationRequired: "unknown",
      householdSizeRequired: true,
      borrowerContributionRequired: true,
      approvedLenderRequired: "unknown",
      militaryEligible: "unknown",
      propertyTypes: ["single-family", "townhome", "condominium"],
      notes: [
        "Applicants entered a random lottery selection process for 60 applications.",
        "Approved homebuyers must contribute at least $10,000.",
      ],
    },
    limits: {
      incomeLimitRequired: true,
      purchasePriceLimitRequired: true,
      incomeBasis: "program_specific",
      usesFloridaHousingLimits: false,
      limitsSourceUrl: PALM_BEACH_MATCH_PILOT_URL,
      effectiveDate: VERIFIED_SOURCE_DATE,
      notes: [
        "Official page lists low-income 80% and moderate-income 140% categories for households up to four persons.",
        "Purchase price may not exceed $700,000.",
      ],
    },
    availability: {
      status: "paused",
      statusLastChecked: VERIFIED_SOURCE_DATE,
      sourceUrl: PALM_BEACH_MATCH_PILOT_URL,
      notes: [
        "Official page states Application Closed; portal was open March 30, 2026 through April 20, 2026.",
      ],
    },
    stacking: {
      withFloridaHousingFirstMortgage: "unknown",
      withHometownHeroes: "unknown",
      withLocalPrograms: "unknown",
      notes: [
        "Stacking rules are not clearly documented on the official page.",
      ],
    },
    calculator: {
      confidence: "medium",
      canEstimateAmount: true,
      canDetermineBasicEligibility: false,
      missingData: [
        "program reopening",
        "first-time buyer rule",
        "homebuyer education rule",
        "loan-type compatibility",
        "stacking compatibility",
      ],
    },
    source: palmBeachMatchPilotSource,
    sources: [palmBeachMatchPilotSource],
    maintenance: {
      status: "paused",
      lastVerified: VERIFIED_SOURCE_DATE,
      needsReviewReasons: [
        "Application is closed; refresh for future phases before borrower-facing recommendations.",
        "Confirm first-time buyer and education rules from full program documents if reopened.",
      ],
    },
  },
};

function dollarsToNumber(value: string): number {
  return Number(value.replace(/[$,]/g, ""));
}

function parseDollarAmounts(display: string): number[] {
  return [...display.matchAll(/\$[\d,]+/g)].map((match) =>
    dollarsToNumber(match[0]),
  );
}

function parsePercentRange(display: string): { min?: number; max?: number } {
  const rangeMatch = display.match(/(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)%/);
  if (rangeMatch) {
    return {
      min: Number(rangeMatch[1]),
      max: Number(rangeMatch[2]),
    };
  }

  const singleMatch = display.match(/(\d+(?:\.\d+)?)%/);
  return singleMatch ? { max: Number(singleMatch[1]) } : {};
}

function buildAssistanceAmount(seed: DpaProgramSeed): DpaAssistanceAmount {
  const dollarAmounts = parseDollarAmounts(seed.amount);
  const assistance: DpaAssistanceAmount = {
    display: seed.amount,
  };

  if (dollarAmounts.length === 1) {
    assistance.maxAmount = dollarAmounts[0];
  } else if (dollarAmounts.length > 1) {
    assistance.minAmount = Math.min(...dollarAmounts);
    assistance.maxAmount = Math.max(...dollarAmounts);
  }

  if (assistance.maxAmount) {
    assistance.maxAmountSourceUrl = seed.programUrl ?? undefined;
  }

  if (/%/.test(seed.amount)) {
    const percent = parsePercentRange(seed.amount);
    if (/purchase price/i.test(seed.amount)) {
      assistance.percentOfPurchasePrice = percent;
    } else {
      assistance.percentOfLoan = percent;
    }
  }

  if (
    !assistance.maxAmount &&
    !assistance.percentOfLoan &&
    !assistance.percentOfPurchasePrice
  ) {
    assistance.calculationNotes =
      "Assistance amount is conditional or not safely estimable from the current source.";
  } else if (
    /varies|education|match|subsidy|full home|gap/i.test(seed.amount)
  ) {
    assistance.calculationNotes =
      "Assistance depends on buyer profile, funding availability, or program-specific underwriting.";
  }

  return assistance;
}

function inferRepaymentType(seed: DpaProgramSeed): DpaRepaymentType {
  const text = `${seed.type} ${seed.amount} ${seed.description}`.toLowerCase();

  if (text.includes("education") || text.includes("counseling"))
    return "counseling";
  if (text.includes("forgivable")) return "forgivable";
  if (text.includes("deferred")) return "deferred";
  if (text.includes("grant") || text.includes("no repay")) return "grant";
  if (text.includes("second mortgage")) return "repayable_second";
  if (text.includes("fixed-rate")) return "first_mortgage";
  if (
    text.includes("subsidy") ||
    text.includes("gap financing") ||
    text.includes("match")
  )
    return "subsidy";

  return "unknown";
}

function inferForgivenessYears(
  seed: DpaProgramSeed,
): DpaForgivenessYears | undefined {
  const source = `${seed.type} ${seed.description}`;
  if (!/forgiv/i.test(source)) return undefined;

  const rangeMatch = source.match(/(\d+)\s*[-–]\s*(\d+)\s*(?:yr|year)/i);
  if (rangeMatch) {
    return {
      min: Number(rangeMatch[1]),
      max: Number(rangeMatch[2]),
      display: `${rangeMatch[1]}-${rangeMatch[2]} years`,
    };
  }

  const singleMatch = source.match(/(\d+)\s*(?:yr|year)/i);
  if (singleMatch) {
    return {
      max: Number(singleMatch[1]),
      display: `${singleMatch[1]} years`,
    };
  }

  return undefined;
}

function inferScope(seed: DpaProgramSeed): DpaGeography["scope"] {
  if (seed.counties.includes("Statewide")) return "statewide";
  if (seed.counties.length > 1) return "regional";
  if (/^(City|Town) of /i.test(seed.name)) return "city";
  return "county";
}

function inferJurisdictionLevel(
  seed: DpaProgramSeed,
): DpaGeography["jurisdictionLevel"] {
  const scope = inferScope(seed);
  if (scope === "statewide") return "florida_statewide";
  if (scope === "city") return "city";
  if (scope === "regional") return "regional";
  if (
    /habitat|hands of|lenders consortium|consortium|nonprofit/i.test(seed.name)
  ) {
    return "nonprofit";
  }
  if (scope === "county") return "county";
  return "unknown";
}

function inferCities(seed: DpaProgramSeed): string[] | undefined {
  const cityMatch = seed.name.match(/^(?:City|Town) of ([^-:()]+?)(?:\s|$)/i);
  if (!cityMatch) return undefined;
  return [cityMatch[1].trim()];
}

function buildGeography(seed: DpaProgramSeed): DpaGeography {
  const counties = seed.counties.filter((county) => county !== "Statewide");
  return {
    scope: inferScope(seed),
    jurisdictionLevel: inferJurisdictionLevel(seed),
    display: seed.counties.includes("Statewide")
      ? "Statewide"
      : seed.counties.join(", "),
    counties,
    cities: inferCities(seed),
    eligibleAreas: undefined,
    excludedAreas: undefined,
    region: seed.region,
    notes:
      inferScope(seed) === "city"
        ? ["City-level geography should be verified before exact matching."]
        : undefined,
  };
}

function inferMinimumCreditScore(seed: DpaProgramSeed): number | undefined {
  const match = seed.description.match(
    /\b(5[8-9]\d|6\d\d|7\d\d)\+?\s*(?:credit|fico)/i,
  );
  return match ? Number(match[1]) : undefined;
}

function buildEligibility(seed: DpaProgramSeed): DpaEligibility {
  const text = `${seed.name} ${seed.type} ${seed.description}`.toLowerCase();

  return {
    eligibilityUrl: seed.eligibilityUrl,
    firstTimeBuyerRequired: text.includes("first-time") ? true : "unknown",
    incomeLimitRequired:
      /income|ami|ship|low-income|moderate-income|very low/i.test(text)
        ? true
        : "unknown",
    purchasePriceLimitRequired:
      /purchase price|price cap|sales price|max purchase/i.test(text)
        ? true
        : "unknown",
    primaryResidenceRequired:
      /primary residence|owner occup|live in the home|occupy/i.test(text)
        ? true
        : "varies",
    homebuyerEducationRequired: /education|counseling|class|course/i.test(text)
      ? true
      : "unknown",
    minimumCreditScore: inferMinimumCreditScore(seed),
    householdSizeRequired: /household|family size|ami|income/i.test(text)
      ? true
      : "unknown",
    borrowerContributionRequired:
      /contribute|buyer must contribute|minimum of \$|personal funds/i.test(
        text,
      )
        ? true
        : "unknown",
    approvedLenderRequired:
      /approved lender|participating lender|first mortgage|hfa/i.test(text)
        ? true
        : "unknown",
    allowedOccupations:
      /teacher|nurse|law enforcement|military|service member|veteran|worker/i.test(
        text,
      )
        ? []
        : undefined,
    militaryEligible: /military|veteran|service member|surviving spouse/i.test(
      text,
    )
      ? true
      : "unknown",
    propertyTypes: undefined,
  };
}

function inferCompatibleLoanTypes(seed: DpaProgramSeed): DpaLoanType[] {
  const text = `${seed.name} ${seed.type} ${seed.description}`.toLowerCase();
  const loanTypes = new Set<DpaLoanType>();

  if (text.includes("fha")) loanTypes.add("fha");
  if (text.includes(" va ") || text.includes("veteran")) loanTypes.add("va");
  if (text.includes("usda")) loanTypes.add("usda");
  if (
    text.includes("conventional") ||
    text.includes("fannie") ||
    text.includes("freddie")
  ) {
    loanTypes.add("conventional");
  }
  if (text.includes("hfa") || text.includes("florida housing"))
    loanTypes.add("hfa");

  return loanTypes.size > 0 ? [...loanTypes] : ["unknown"];
}

function inferIncomeBasis(seed: DpaProgramSeed): DpaLimits["incomeBasis"] {
  const text = `${seed.name} ${seed.description}`.toLowerCase();

  if (text.includes("florida housing")) return "florida_housing";
  if (text.includes("ship")) return "ship";
  if (
    text.includes("hud") ||
    text.includes("home-funded") ||
    text.includes("cdbg")
  ) {
    return "hud";
  }
  if (text.includes("ami")) return "ami";
  if (text.includes("income")) return "program_specific";

  return "unknown";
}

function buildLimits(
  seed: DpaProgramSeed,
  eligibility: DpaEligibility,
): DpaLimits {
  const incomeBasis = inferIncomeBasis(seed);
  const usesFloridaHousingLimits =
    incomeBasis === "florida_housing" ||
    /hometown heroes|fl assist|hfa preferred|hfa advantage/i.test(seed.name)
      ? true
      : "unknown";

  return {
    incomeLimitRequired: eligibility.incomeLimitRequired,
    purchasePriceLimitRequired: eligibility.purchasePriceLimitRequired,
    incomeBasis,
    usesFloridaHousingLimits,
    limitsSourceUrl: seed.programUrl ?? undefined,
    effectiveDate: LAST_VERIFIED,
    notes:
      eligibility.incomeLimitRequired === "unknown" ||
      eligibility.purchasePriceLimitRequired === "unknown"
        ? [
            "Limits require verified source review before exact calculator eligibility.",
          ]
        : undefined,
  };
}

function buildAvailability(seed: DpaProgramSeed): DpaAvailability {
  const status = inferStatus(seed);

  return {
    status:
      status === "limited"
        ? "limited"
        : status === "paused"
          ? "paused"
          : status === "active"
            ? "unknown"
            : "unknown",
    statusLastChecked: LAST_VERIFIED,
    sourceUrl: seed.programUrl ?? undefined,
    notes:
      status === "limited"
        ? ["Current source suggests limited or first-come availability."]
        : [
            "Program availability needs verification against the administrator.",
          ],
  };
}

function buildStacking(seed: DpaProgramSeed): DpaStacking {
  const isFloridaHousing =
    seed.counties.includes("Statewide") ||
    /florida housing|hometown heroes|fl assist|hfa preferred|hfa advantage/i.test(
      seed.name,
    );

  return {
    withFloridaHousingFirstMortgage: isFloridaHousing
      ? "conditional"
      : "unknown",
    withHometownHeroes:
      seed.id === "florida-hometown-heroes" ? "not_allowed" : "unknown",
    withLocalPrograms: isFloridaHousing ? "conditional" : "unknown",
    notes: [
      "Stacking rules need verified source review before calculator recommendations.",
    ],
  };
}

function buildCalculatorReadiness(
  seed: DpaProgramSeed,
  assistance: DpaAssistanceAmount,
  eligibility: DpaEligibility,
  limits: DpaLimits,
  sourceQuality: DpaSourceQuality,
): DpaCalculatorReadiness {
  const missingData: string[] = [];

  if (
    !assistance.maxAmount &&
    !assistance.percentOfLoan &&
    !assistance.percentOfPurchasePrice
  ) {
    missingData.push("verified assistance calculation method");
  }
  if (eligibility.firstTimeBuyerRequired === "unknown") {
    missingData.push("first-time buyer rule");
  }
  if (limits.incomeLimitRequired === "unknown") {
    missingData.push("income limits");
  }
  if (limits.purchasePriceLimitRequired === "unknown") {
    missingData.push("purchase price limits");
  }
  if (sourceQuality !== "official") {
    missingData.push("official source verification");
  }

  const canEstimateAmount =
    Boolean(assistance.maxAmount) ||
    Boolean(assistance.percentOfLoan) ||
    Boolean(assistance.percentOfPurchasePrice);
  const canDetermineBasicEligibility =
    sourceQuality !== "missing" &&
    eligibility.primaryResidenceRequired !== "unknown" &&
    eligibility.incomeLimitRequired !== "unknown";

  return {
    confidence:
      missingData.length <= 1
        ? "high"
        : missingData.length <= 3
          ? "medium"
          : "low",
    canEstimateAmount,
    canDetermineBasicEligibility,
    missingData,
  };
}

function inferSourceQuality(programUrl: string | null): DpaSourceQuality {
  if (!programUrl) return "missing";

  let hostname = "";
  try {
    hostname = new URL(programUrl).hostname.toLowerCase();
  } catch {
    return programUrl.startsWith("/") ? "current-site" : "missing";
  }

  if (hostname.includes("makefloridayourhome.com")) return "current-site";
  if (
    hostname.endsWith(".gov") ||
    hostname.includes(".gov/") ||
    hostname.endsWith(".fl.us") ||
    hostname.includes("freddiemac.com")
  ) {
    return "official";
  }

  return "partner";
}

function inferStatus(seed: DpaProgramSeed): DpaProgramStatus {
  if (!seed.programUrl) return "unknown";
  if (
    /limited funding|first-come|funding opens|very limited/i.test(
      seed.description,
    )
  ) {
    return "limited";
  }
  return "active";
}

function buildNeedsReviewReasons(
  seed: DpaProgramSeed,
  sourceQuality: DpaSourceQuality,
): string[] {
  const reasons: string[] = [];

  if (!seed.programUrl) {
    reasons.push("Missing public program source URL.");
  }

  if (sourceQuality === "partner") {
    reasons.push(
      "Confirm whether the linked source is the official program administrator.",
    );
  }

  if (
    /varies|education only|full home subsidy|gap financing|match program/i.test(
      seed.amount,
    )
  ) {
    reasons.push(
      "Assistance amount needs manual review before exact calculator estimates.",
    );
  }

  return reasons;
}

function mergeProgramOverride(
  base: FloridaDpaProgram,
  override?: DpaProgramOverride,
): FloridaDpaProgram {
  if (!override) return base;

  const source = override.source ?? base.source;
  const assistance = {
    ...base.assistance,
    ...override.assistance,
  };

  if (override.assistance && "maxAmount" in override.assistance) {
    assistance.maxAmount = override.assistance.maxAmount;
  }

  if (override.assistance && "minAmount" in override.assistance) {
    assistance.minAmount = override.assistance.minAmount;
  }

  if (override.assistance && "percentOfLoan" in override.assistance) {
    assistance.percentOfLoan = override.assistance.percentOfLoan;
  }

  if (override.assistance && "percentOfPurchasePrice" in override.assistance) {
    assistance.percentOfPurchasePrice =
      override.assistance.percentOfPurchasePrice;
  }

  return {
    ...base,
    description: override.description ?? base.description,
    assistance,
    repaymentType: override.repaymentType ?? base.repaymentType,
    forgivenessYears:
      "forgivenessYears" in override
        ? override.forgivenessYears
        : base.forgivenessYears,
    compatibleLoanTypes:
      override.compatibleLoanTypes ?? base.compatibleLoanTypes,
    geography: {
      ...base.geography,
      ...override.geography,
    },
    eligibility: {
      ...base.eligibility,
      ...override.eligibility,
    },
    limits: {
      ...base.limits,
      ...override.limits,
    },
    availability: {
      ...base.availability,
      ...override.availability,
    },
    stacking: {
      ...base.stacking,
      ...override.stacking,
    },
    calculator: {
      ...base.calculator,
      ...override.calculator,
    },
    source,
    sources: override.sources ?? [source],
    maintenance: {
      ...base.maintenance,
      ...override.maintenance,
    },
  };
}

function toFloridaDpaProgram(seed: DpaProgramSeed): FloridaDpaProgram {
  const sourceQuality = inferSourceQuality(seed.programUrl);
  const assistance = buildAssistanceAmount(seed);
  const eligibility = buildEligibility(seed);
  const limits = buildLimits(seed, eligibility);
  const source: DpaSource = {
    label: "Program website",
    url: seed.programUrl,
    quality: sourceQuality,
    accessedDate: LAST_VERIFIED,
  };

  const baseProgram: FloridaDpaProgram = {
    id: seed.id,
    name: seed.name,
    typeDisplay: seed.type,
    description: seed.description,
    region: seed.region,
    assistance,
    repaymentType: inferRepaymentType(seed),
    forgivenessYears: inferForgivenessYears(seed),
    compatibleLoanTypes: inferCompatibleLoanTypes(seed),
    geography: buildGeography(seed),
    eligibility,
    limits,
    availability: buildAvailability(seed),
    stacking: buildStacking(seed),
    calculator: buildCalculatorReadiness(
      seed,
      assistance,
      eligibility,
      limits,
      sourceQuality,
    ),
    source,
    sources: [source],
    maintenance: {
      status: inferStatus(seed),
      lastVerified: LAST_VERIFIED,
      needsReviewReasons: buildNeedsReviewReasons(seed, sourceQuality),
    },
  };

  return mergeProgramOverride(baseProgram, VERIFIED_PROGRAM_OVERRIDES[seed.id]);
}

export const FLORIDA_DPA_PROGRAMS: FloridaDpaProgram[] =
  DPA_PROGRAM_SEEDS.map(toFloridaDpaProgram);
