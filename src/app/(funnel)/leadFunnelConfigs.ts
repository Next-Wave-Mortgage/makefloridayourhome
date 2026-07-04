export type LeadFunnelConfig = {
  source: string;
  leadIntent: string;
  programSlug: string;
  programName: string;
  programCategory: string;
  programSponsor?: string;
  description: string;
  canonicalPath: string;
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
} satisfies Record<string, LeadFunnelConfig>;
