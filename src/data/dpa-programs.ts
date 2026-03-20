// Florida Down Payment Assistance Programs
// Extracted from the 70 Florida First-Time Home Buyer Grants & Programs guide

export interface DPAProgram {
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

export const DPA_PROGRAMS: DPAProgram[] = [
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
    programUrl:
      "https://www.fortlauderdalepurchaseassistanceprogram.com/",
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
    programUrl:
      "https://www.pembrokepinesfirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.monroecountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.osceolacountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.winterhavendownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.sumtercountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.brevardcountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.melbournefirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.palmbaydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.titusvillefirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.cityofcocoapurchaseassistanceprogram.com/",
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
    programUrl:
      "https://www.pinellascountyfirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.pascocountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.manateecountyhfahomeownershipprogram.com/",
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
    programUrl:
      "https://www.sarasotacountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.colliercountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.charlottecountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.marioncountyfirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.marioncountyfirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.alachuacountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.levycountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.columbiacountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.stjohnscountyfirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.claycountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.pensacolaarpadownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.escambiacountyhfahomeownershipprogram.com/",
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
    programUrl:
      "https://www.okaloosacountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.santarosacountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.panamacityfirsttimehomebuyersprogram.com/",
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
    programUrl:
      "https://www.baycountyshipfirsttimehomebuyerprogram.com/",
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
    programUrl:
      "https://www.gadsdencountydownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.portstluciedownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.fortpiercedownpaymentassistanceprogram.com/",
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
    programUrl:
      "https://www.stluciemartincountyhomepurchaseassistance.com/",
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
    programUrl: "https://www.ehousingplus.com/homeownership/florida-housing-finance-corporation/program-highlights/",
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
    programUrl: "https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products/hfa-advantage",
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
    programUrl: "https://www.miamibeachfl.gov/city-hall/housing-and-community-development/housing-and-community/housing-services/firsttimehomebuyer/",
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
    programUrl: "https://www.broward.org/Housing/Pages/Hollywood%20Homebuyer%20Purchase%20Assistance%20Program.aspx",
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
    programUrl: "https://www.pompanobeachfl.gov/residents/housing-and-urban-improvement/ohui-programs/first-time-home-buyer",
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
    programUrl: "https://www.coralsprings.gov/Government/Departments/Community-Development/Housing-Assistance/Purchase-Assistance",
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
    programUrl: "https://discover.pbc.gov/HED/Pages/Homebuyer-Match-Pilot-Program-.aspx",
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
    name: "City of Largo \"Sold on Largo\" Downpayment Assistance Program",
    counties: ["Pinellas"],
    amount: "Up to $55,700",
    type: "Deferred (0%, 20 yr)",
    region: "Tampa Bay & West Central",
    description:
      "0% deferred interest loan up to $55,700 with payments deferred 20 years for income-eligible first-time buyers (at or below 80% AMI) purchasing in Largo city limits.",
    eligibilityUrl: "/check-dpa-eligibility",
    programUrl: "https://www.largo.com/services/residents/housing_assistance/resources.php",
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
    programUrl: "https://www.nassaucountyfl.com/186/Down-Payment-Closing-Cost-Assistance",
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
    programUrl: "https://www.flaglercounty.gov/County-Services/Housing/Home-Buying-Assistance",
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
    programUrl: "https://jacksoncountyfl.gov/services/community-development/housing-grants-office/",
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
    programUrl: "https://www.highlandsfl.gov/departments/community_programs/housing/index.php",
  },
];

/**
 * Returns all DPA programs available in a given county,
 * including statewide programs.
 */
export function getCountyPrograms(county: string): DPAProgram[] {
  return DPA_PROGRAMS.filter(
    (program) =>
      program.counties.includes("Statewide") ||
      program.counties.includes(county)
  );
}
