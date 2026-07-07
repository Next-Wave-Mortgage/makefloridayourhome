export type LeadFunnelConfig = {
  source: string;
  leadIntent: string;
  programSlug: string;
  programName: string;
  programCategory: string;
  programSponsor?: string;
  description: string;
  canonicalPath: string;
  heroHeadline?: string;
};

export const leadFunnelConfigs = {
  homePurchase: {
    source: "mfyh-home-purchase",
    leadIntent: "home-purchase",
    programSlug: "mfyh-home-purchase",
    programName: "Florida Home Purchase Program Match",
    programCategory: "first-time-buyer",
    description:
      "Answer a few quick questions and we'll match you with every program, grant, and rate available to you.",
    canonicalPath: "/home-purchase-eligibility",
  },
  dpa: {
    source: "mfyh-dpa",
    leadIntent: "dpa",
    programSlug: "mfyh-dpa",
    programName: "Florida Down Payment Assistance Programs",
    programCategory: "down-payment-assistance",
    description:
      "Answer a few quick questions and we'll match you with every DPA program you qualify for.",
    canonicalPath: "/check-dpa-eligibility",
  },
  fha: {
    source: "mfyh-fha",
    leadIntent: "fha",
    programSlug: "mfyh-fha",
    programName: "Florida FHA Loan Program",
    programCategory: "fha",
    description:
      "As little as 3.5% down with flexible credit requirements - find out in 2 minutes.",
    canonicalPath: "/check-fha-loan-eligibility",
  },
  va: {
    source: "mfyh-va",
    leadIntent: "va",
    programSlug: "mfyh-va",
    programName: "Florida VA Loan Program",
    programCategory: "va",
    description:
      "Zero down payment and no PMI for eligible veterans and active-duty service members.",
    canonicalPath: "/check-va-loan-eligibility",
  },
  conventional: {
    source: "mfyh-conventional",
    leadIntent: "conventional",
    programSlug: "mfyh-conventional",
    programName: "Florida Conventional Loan Program",
    programCategory: "conventional",
    description:
      "Competitive rates with as little as 3% down - find out in 2 minutes.",
    canonicalPath: "/check-conventional-loan-eligibility",
  },
  usda: {
    source: "mfyh-usda",
    leadIntent: "usda",
    programSlug: "mfyh-usda",
    programName: "Florida USDA Loan Program",
    programCategory: "usda",
    description:
      "No down payment required in eligible rural and suburban areas - find out in 2 minutes.",
    canonicalPath: "/check-usda-loan-eligibility",
  },
  hometownHeroes: {
    source: "mfyh-hometown-heroes",
    leadIntent: "hometown-heroes",
    programSlug: "florida-hometown-heroes",
    programName: "Florida Hometown Heroes Housing Program",
    programCategory: "down-payment-assistance",
    programSponsor: "Florida Housing Finance Corporation",
    description:
      "Up to $35,000 toward your down payment and closing costs for Florida's frontline community workers - teachers, nurses, first responders, and more.",
    canonicalPath: "/check-hometown-heroes-eligibility",
  },
  reverseMortgage: {
    source: "mfyh-reverse-mortgage",
    leadIntent: "reverse-mortgage",
    programSlug: "mfyh-reverse-mortgage",
    programName: "Florida Reverse Mortgage Program",
    programCategory: "reverse-mortgage",
    description:
      "See if a Florida reverse mortgage or HECM option could help you access home equity with no required monthly mortgage payment.",
    canonicalPath: "/check-reverse-mortgage-eligibility",
  },
  heloc: {
    source: "mfyh-heloc",
    leadIntent: "heloc",
    programSlug: "mfyh-heloc",
    programName: "Florida HELOC and Home Equity Program",
    programCategory: "heloc",
    description:
      "Find out if a Florida HELOC or home equity option fits your goals for renovations, debt payoff, or cash access.",
    canonicalPath: "/check-heloc-eligibility",
  },
  manufacturedHome: {
    source: "mfyh-manufactured-home",
    leadIntent: "manufactured-home",
    programSlug: "mfyh-manufactured-home",
    programName: "Florida Manufactured Home Loan Program",
    programCategory: "manufactured-home",
    description:
      "Check eligibility for manufactured home financing in Florida, including FHA, VA, USDA, and conventional options where available.",
    canonicalPath: "/check-manufactured-home-loan-eligibility",
  },
  nonQm: {
    source: "mfyh-non-qm",
    leadIntent: "non-qm",
    programSlug: "mfyh-non-qm",
    programName: "Florida Non-QM and Self-Employed Mortgage Program",
    programCategory: "non-qm",
    description:
      "See options for self-employed, 1099, bank-statement, DSCR, and non-traditional income mortgage scenarios in Florida.",
    canonicalPath: "/check-non-qm-loan-eligibility",
  },
  jumbo: {
    source: "mfyh-jumbo",
    leadIntent: "jumbo",
    programSlug: "mfyh-jumbo",
    programName: "Florida Jumbo Mortgage Program",
    programCategory: "jumbo",
    description:
      "Check options for higher-balance Florida mortgage financing when your loan amount may exceed conforming limits.",
    canonicalPath: "/check-jumbo-loan-eligibility",
  },
  renovation: {
    source: "mfyh-renovation",
    leadIntent: "renovation",
    programSlug: "mfyh-renovation",
    programName: "Florida Renovation and FHA 203(k) Loan Program",
    programCategory: "renovation",
    description:
      "See if a renovation mortgage, FHA 203(k), or fixer-upper financing option can help you buy and repair a Florida home.",
    canonicalPath: "/check-renovation-loan-eligibility",
  },
  scheduleCall: {
    source: "mfyh-schedule-call",
    leadIntent: "schedule-call",
    programSlug: "mfyh-schedule-call",
    programName: "Free Mortgage Consultation",
    programCategory: "consultation",
    description:
      "Answer a few quick questions so your Florida mortgage expert calls prepared - then pick your time.",
    canonicalPath: "/eligibility/schedule-a-free-call",
    heroHeadline: "Let's Get You on the Calendar",
  },
  alternativeLoans: {
    source: "mfyh-alternative-loans",
    leadIntent: "alternative-loans",
    programSlug: "mfyh-alternative-loans",
    programName: "Florida Alternative Mortgage Program",
    programCategory: "alternative-loans",
    description:
      "Explore mortgage options for DACA, ITIN, foreign buyer, tribal housing, and other alternative borrower scenarios in Florida.",
    canonicalPath: "/check-alternative-loan-eligibility",
  },
} satisfies Record<string, LeadFunnelConfig>;
