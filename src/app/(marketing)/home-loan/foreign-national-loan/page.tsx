import type { Metadata } from "next";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

export const metadata: Metadata = {
  title: "Foreign National Mortgage in Florida — No U.S. Credit Needed",
  description:
    "Foreign national mortgages for Florida second homes and rentals. No U.S. credit score, SSN, or residency needed — qualify with your assets or rental income.",
  openGraph: {
    title: "Foreign National Mortgage in Florida — No U.S. Credit Needed",
    description:
      "Finance a Florida second home or investment property as a non-U.S. resident. No U.S. credit score or SSN required.",
    url: "https://www.makefloridayourhome.com/home-loan/foreign-national-loan",
    type: "website",
    images: [
      {
        url: "https://www.makefloridayourhome.com/images/og/florida-foreign-national-loan.webp",
        width: 1200,
        height: 630,
        alt: "Waterfront condominium tower on Biscayne Bay in Miami at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreign National Mortgage in Florida — No U.S. Credit Needed",
    description:
      "Finance a Florida second home or investment property as a non-U.S. resident. No U.S. credit score or SSN required.",
    images: [
      "https://www.makefloridayourhome.com/images/og/florida-foreign-national-loan.webp",
    ],
  },
  alternates: { canonical: "/home-loan/foreign-national-loan" },
};

const config: ProductPageConfig = {
  path: "/home-loan/foreign-national-loan",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    {
      name: "Foreign National Loans",
      path: "/home-loan/foreign-national-loan",
    },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida Foreign National Mortgage",
    description:
      "Mortgage financing for non-U.S. residents buying a second home or investment property in Florida, without a U.S. credit score or Social Security number.",
    loanType: "Foreign national mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">Foreign National Mortgages</span> in
        Florida
      </>
    ),
    subtitle: (
      <p>
        Live outside the U.S. and want a home in Miami, Orlando, or anywhere in
        Florida?{" "}
        <strong className="text-dark-green">
          You can finance it without a U.S. credit score, Social Security
          number, or residency.
        </strong>{" "}
        Qualify with your passport, your assets, or the property&apos;s rental
        income.
      </p>
    ),
    features: [
      {
        icon: productIcons.check,
        text: "No U.S. credit history or Social Security number required",
      },
      {
        icon: productIcons.dollar,
        text: "Qualify on rental income (DSCR) or documented foreign income",
      },
      {
        icon: productIcons.home,
        text: "Second homes, rentals, and condos — including many Miami buildings",
      },
      {
        icon: productIcons.shield,
        text: "Close in your own name or a U.S. LLC",
      },
    ],
    image: "/images/heroes/florida-foreign-national-loan-hero.webp",
    imageAlt:
      "Modern waterfront condominium tower on Biscayne Bay in Miami at golden hour, framed by palm trees",
  },
  cta: {
    href: "/check-non-qm-loan-eligibility",
    text: "Check Your Foreign National Loan Options",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">Foreign National</span> Loan at a
          Glance
        </>
      ),
      intro:
        "A foreign national mortgage is built for buyers who live outside the United States. Instead of U.S. credit and tax returns, lenders look at your passport, your assets, and either your income or the property's rent.",
      headers: ["Feature", "Typical Terms"],
      rows: [
        [
          "Down Payment",
          "Usually 25%–30%; condotels, short-term rentals, and larger loans may require 30%–40%",
        ],
        [
          "U.S. Credit Score",
          "Not required — an international credit report or bank reference letters are often accepted",
        ],
        [
          "Social Security Number",
          "Not required; some programs ask for an ITIN, many do not",
        ],
        [
          "Income Documentation",
          "Either the property's rental income (DSCR) or verified income from your home country",
        ],
        [
          "Reserves",
          "Commonly 6–12 months of payments, with at least part held in a U.S. bank account",
        ],
        [
          "Occupancy",
          "Second home or investment property — not a primary residence for buyers living abroad",
        ],
        [
          "Property Types",
          "Single-family homes, townhomes, condos, 2–4 units; condotels with select programs",
        ],
        ["Vesting", "Your own name or a U.S. LLC (common for rentals)"],
      ],
      caption: "Foreign national mortgage features and typical requirements",
    },
    {
      type: "table",
      heading: (
        <>
          Which Loan Fits{" "}
          <span className="text-brand-green">Your Situation</span>
        </>
      ),
      intro:
        '"Foreign buyer" covers very different borrowers. Your residency status decides which programs are open to you — and some buyers qualify for better terms than they expect.',
      headers: ["Your Situation", "Usually the Best Fit"],
      rows: [
        [
          "Living abroad, buying a Florida rental",
          "Foreign national DSCR loan — qualifies on the property's rent",
        ],
        [
          "Living abroad, buying a vacation or second home",
          "Foreign national second-home loan — qualifies on your assets and foreign income",
        ],
        [
          "Living in the U.S. on a work visa with an SSN",
          "Often conventional or FHA financing, with lower down payments",
        ],
        [
          "Living in the U.S. with an ITIN instead of an SSN",
          "ITIN mortgage programs",
        ],
        [
          "U.S. permanent resident (green card)",
          "The same loan programs as U.S. citizens",
        ],
      ],
      caption: "Mortgage options by residency status for Florida buyers",
    },
    {
      type: "cards",
      heading: (
        <>
          <span className="text-brand-green">What</span> You&apos;ll Need
        </>
      ),
      cards: [
        {
          title: "Passport & Entry Documents",
          description:
            "A valid passport is required. Some programs also ask for a current U.S. visa or entry record, while many investment-property programs do not.",
        },
        {
          title: "Down Payment & Reserves",
          description:
            "Show where your down payment and reserves come from. Funds are wired to a U.S. account before closing, and lenders verify their source.",
        },
        {
          title: "Credit References",
          description:
            "No U.S. credit score needed. Lenders typically accept an international credit report or reference letters from your bank or credit card issuer.",
        },
        {
          title: "Income or Rental Qualification",
          description:
            "Either document your income (often with a letter from your employer or accountant), or qualify on the property's market rent with a DSCR loan.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          What&apos;s <span className="text-brand-green">Different</span> in
          Florida
        </>
      ),
      intro:
        "Florida is the top U.S. state for international buyers — and it has rules and costs that national guides skip.",
      headers: ["Florida Factor", "What It Means for You"],
      rows: [
        [
          "SB 264 buyer affidavit",
          "Every Florida buyer signs an affidavit at closing. People domiciled in certain countries of concern (including China, Russia, Iran, and Cuba) face purchase restrictions; most buyers from Canada, Latin America, and Europe are not affected. Confirm with your closing attorney.",
        ],
        [
          "Condo building approval",
          "Lenders review each condo building's finances. Since Florida's post-Surfside safety and reserve laws, some buildings are harder to finance — check the building before you make an offer.",
        ],
        [
          "No homestead exemption",
          "Homestead tax savings are only for Florida residents' primary homes. Budget for full, non-homestead property taxes on a second home or rental.",
        ],
        [
          "Insurance costs",
          "Wind and flood insurance can be significant near the coast, and the lender counts it in your payment — and in your DSCR if you're qualifying on rent.",
        ],
        [
          "Short-term rental rules",
          "Vacation-rental rules vary by city and condo association. Confirm Airbnb rentals are allowed before relying on that income.",
        ],
        [
          "Selling later (FIRPTA)",
          "When a foreign owner sells, the buyer generally withholds a percentage of the sale price for the IRS. Plan for it with a tax advisor.",
        ],
      ],
      caption: "Florida-specific considerations for foreign national buyers",
    },
    {
      type: "table",
      heading: (
        <>
          What a Foreign National Loan{" "}
          <span className="text-brand-green">Costs</span>
        </>
      ),
      intro:
        "A mortgage for foreign nationals costs more than a typical U.S. home loan, mainly because the lender can't rely on U.S. credit history. Here's what non-resident buyers should budget for in Florida.",
      headers: ["Cost", "What to Expect"],
      rows: [
        [
          "Interest rate",
          "Higher than a conventional mortgage. Your rate depends mostly on your down payment, the property type, the loan size, and — for rentals — the property's DSCR. A larger down payment is the most reliable way to lower it.",
        ],
        [
          "Down payment",
          "Usually 25%–30%. Condotels, short-term rentals, larger loans, and condo buildings with financing issues can push it to 30%–40%.",
        ],
        [
          "Florida mortgage taxes",
          "Florida charges documentary stamp tax on the note (0.35% of the loan amount) and intangible tax on the mortgage (0.2%) — about $2,750 on a $500,000 loan.",
        ],
        [
          "Title insurance",
          "Florida sets title insurance premiums by state rule, so the base premium is the same at every title company. Endorsements and closing fees still vary.",
        ],
        [
          "Prepayment penalty",
          "Many investment-property programs charge one if you pay off or refinance in the first few years. Ask whether a shorter penalty or no-penalty option is available.",
        ],
        [
          "Reserves",
          "Not a fee, but cash you must still have after closing — commonly 6–12 months of payments.",
        ],
        [
          "International paperwork",
          "Certified translations, international wire fees, and — if you close from abroad — notarizing a power of attorney at a U.S. consulate or with an apostille.",
        ],
      ],
      caption: "Typical costs of a foreign national mortgage in Florida",
    },
    {
      type: "promo",
      heading: (
        <>
          Buying a Rental? Run the Numbers{" "}
          <span className="text-green-tint">First</span>
        </>
      ),
      body: "Most foreign national investors qualify with a DSCR loan, where the rent has to cover the payment. Our free Florida DSCR calculator uses your county's real property tax rate and realistic Florida insurance — including a short-term rental mode.",
      href: "/florida-dscr-loan-calculator",
      linkText: "Try the Florida DSCR Calculator",
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get a{" "}
          <span className="text-brand-green">Foreign National Loan</span>
        </>
      ),
      howTo: {
        name: "How to Get a Foreign National Mortgage in Florida",
        description:
          "Step-by-step guide to financing a Florida second home or investment property as a non-U.S. resident.",
      },
      steps: [
        {
          title: "Check Your Options",
          description:
            "Tell us where you live, the property you're considering, and your down payment. We'll match you with the program that fits — DSCR, second home, or another option.",
        },
        {
          title: "Gather Your Documents",
          description:
            "Passport, proof of funds, and credit references. Documents in another language may need certified translations, so start early.",
        },
        {
          title: "Make Your Offer & Appraisal",
          description:
            "Once your offer is accepted, the appraisal confirms the property's value — and for rentals, its market rent. For condos, the lender also reviews the building.",
        },
        {
          title: "Wire Funds & Close",
          description:
            "Wire your down payment and closing costs to the U.S. title company. Many international buyers close remotely with a power of attorney or mail-away signing.",
        },
      ],
    },
    {
      type: "guides",
      heading: (
        <>
          Related <span className="text-brand-green">Guides</span>
        </>
      ),
      articles: [
        {
          category: "Foreign Buyers",
          title: "Foreign Buyer's Guide to Florida Real Estate (2026)",
          description:
            "The buying process, taxes, and visa considerations for international buyers.",
          href: "/learn/foreign-buyers-guide-florida-real-estate",
          image:
            "/images/learn/foreign-buyers-guide-florida-real-estate-2026.webp",
          readTime: "10 min read",
        },
        {
          category: "Investor Financing",
          title: "DSCR Loans in Florida",
          description:
            "Qualify on the property's rental income — no tax returns, close in an LLC.",
          href: "/home-loan/dscr-loan",
          image: "/images/heroes/florida-dscr-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Investor Tools",
          title: "Florida DSCR Loan Calculator",
          description:
            "County-level property taxes, Florida insurance estimates, and Airbnb mode.",
          href: "/florida-dscr-loan-calculator",
          image: "/images/og/florida-dscr-loan-calculator.webp",
          readTime: "Free tool",
        },
        {
          category: "Resort Properties",
          title: "Condotel Loans in Florida",
          description:
            "Buying a unit in a condo-hotel? How to finance resort buildings that conventional loans exclude.",
          href: "/home-loan/condotel-loan",
          image: "/images/heroes/florida-condotel-loan-hero.webp",
          readTime: "Loan guide",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can a foreign national get a mortgage in Florida?",
      answer:
        "Yes. Non-U.S. residents can finance Florida second homes and investment properties through foreign national loan programs. You don't need U.S. citizenship, a green card, a U.S. credit score, or a Social Security number. Lenders qualify you on your passport, your assets, and either your verified income or the property's rental income.",
    },
    {
      question: "How much down payment does a foreign national need?",
      answer:
        "Most foreign national programs require 25% to 30% down. Condotels, short-term rentals, higher loan amounts, and some condo buildings may require 30% to 40%. You'll also need reserves — commonly 6 to 12 months of payments — held after closing.",
    },
    {
      question: "Do I need a U.S. credit score or Social Security number?",
      answer:
        "No. Foreign national programs are designed for buyers without U.S. credit. Lenders usually accept an international credit report or reference letters from your bank or card issuer instead. Some programs ask for an ITIN, but many do not require one to get the loan.",
    },
    {
      question: "Are foreign national mortgage rates higher?",
      answer:
        "Yes. Rates on foreign national loans are typically higher than on a conventional U.S. mortgage because the lender is working without U.S. credit history or tax returns. How much higher depends on your down payment, the property, the loan size, and whether you qualify on rental income. Putting more down and choosing a property that's easy to finance — such as a single-family home or a well-run condo building — usually earns the best pricing.",
    },
    {
      question: "Can I rent out my Florida property, including on Airbnb?",
      answer:
        "Yes, if you finance it as an investment property. Many foreign national investors use a DSCR loan, which qualifies on the property's rent instead of your income. For short-term rentals, confirm that the city and any condo association allow them — Florida rules vary widely from one area to the next.",
    },
    {
      question: "Can I buy a Miami condo with a foreign national loan?",
      answer:
        "Often, yes. Condos are among the most popular purchases for international buyers. The lender reviews the building's finances, insurance, and reserves, and some Florida buildings are harder to finance after recent condo safety laws. It's best to check the specific building before you make an offer.",
    },
    {
      question:
        "Does Florida restrict which foreign buyers can purchase property?",
      answer:
        "Florida's SB 264 restricts purchases by certain people and entities domiciled in specific countries of concern, including China, Russia, Iran, and Cuba, and every buyer signs an affidavit at closing. Buyers from most countries — including Canada, Latin America, and Europe — are not affected. Because the rules depend on your citizenship, domicile, and the property's location, confirm your situation with a Florida real estate attorney.",
    },
  ],
  closing: {
    heading: "See Which Foreign National Program Fits Your Purchase",
    subtitle:
      "Tell us about the property and where you live — no U.S. credit needed, no obligation.",
  },
};

export default function ForeignNationalLoanPage() {
  return <ProductPage config={config} />;
}
