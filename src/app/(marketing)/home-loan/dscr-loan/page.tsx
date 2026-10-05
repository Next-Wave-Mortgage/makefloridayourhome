import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "DSCR Loans in Florida — Qualify on Rental Income, No Tax Returns",
  description:
    "Get a DSCR loan in Florida for your investment property. Qualify on the property's rental income — no W-2s, no tax returns, close in an LLC. Check eligibility in minutes.",
  openGraph: {
    title: "DSCR Loans in Florida — Qualify on Rental Income, No Tax Returns",
    description:
      "Get a DSCR loan in Florida for your investment property. Qualify on rental income — no W-2s or tax returns. Check eligibility in minutes.",
    url: "https://www.makefloridayourhome.com/home-loan/dscr-loan",
    type: "website",
  },
  alternates: { canonical: "/home-loan/dscr-loan" },
};

const config: ProductPageConfig = {
  path: "/home-loan/dscr-loan",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "DSCR Loans", path: "/home-loan/dscr-loan" },
  ],
  hero: {
    title: (
      <>
        <span className="text-brand-green">DSCR Loans</span> in Florida —
        Qualify on Rental Income
      </>
    ),
    subtitle: (
      <p>
        Finance your Florida investment property based on what it earns — not
        what you earn.{" "}
        <strong className="text-dark-green">
          No W-2s, no tax returns, no employment verification.
        </strong>{" "}
        If the rent covers the payment, you can qualify.
      </p>
    ),
    features: [
      {
        icon: productIcons.dollar,
        text: "Qualify on the property's rental income — not your personal income",
      },
      {
        icon: productIcons.check,
        text: "No W-2s, tax returns, or employment verification",
      },
      {
        icon: productIcons.home,
        text: "Close in an LLC and keep the loan off your personal DTI",
      },
      {
        icon: productIcons.shield,
        text: "Long-term and short-term rentals, including Airbnb properties",
      },
    ],
    image: "/images/heroes/florida-dscr-loan-hero.webp",
    imageAlt:
      "Modern single-family Florida rental home with palm trees at golden hour — the kind of investment property DSCR loans finance",
  },
  cta: {
    href: "/check-non-qm-loan-eligibility",
    text: "Check Your DSCR Loan Eligibility",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">DSCR</span> Loan at a Glance
        </>
      ),
      intro:
        "A DSCR (debt service coverage ratio) loan qualifies you on the investment property's rental income instead of your personal income — built for Florida real estate investors, self-employed buyers, and anyone scaling a rental portfolio.",
      headers: ["Feature", "Details"],
      rows: [
        ["Down Payment", "Typically 20% minimum; stronger terms at 25%+"],
        ["Credit Score", "620+ accepted by most lenders; best pricing at 700+"],
        [
          "Income Documentation",
          "None — qualification is based on the property's rent, not your income",
        ],
        [
          "DSCR Requirement",
          "1.0+ for most programs; some allow below 1.0 with a larger down payment",
        ],
        [
          "Property Types",
          <>
            Single-family, condos, townhomes, 2–4 units, and many{" "}
            <Link
              href="/home-loan/dscr-loan/short-term-rental"
              className="font-semibold text-brand-green underline-offset-2 hover:underline"
            >
              short-term rentals
            </Link>
          </>,
        ],
        [
          "Occupancy",
          "Investment properties only — not for primary residences",
        ],
        ["Vesting", "Individual or LLC/corporate entity allowed"],
        [
          "Loan Purpose",
          <>
            Purchase, rate-and-term refinance, or{" "}
            <Link
              href="/home-loan/dscr-loan/cash-out-refinance"
              className="font-semibold text-brand-green underline-offset-2 hover:underline"
            >
              cash-out refinance
            </Link>
          </>,
        ],
      ],
      caption: "DSCR loan features and requirements",
    },
    {
      type: "table",
      heading: (
        <>
          How <span className="text-brand-green">DSCR</span> Is Calculated
        </>
      ),
      intro:
        "DSCR = monthly rent ÷ full monthly payment (principal, interest, taxes, insurance, and HOA dues). Here's what different ratios mean for your approval.",
      headers: ["Scenario", "Monthly Rent", "Monthly Payment (PITIA)", "DSCR"],
      rows: [
        [
          "Strong cash flow",
          "$3,000",
          "$2,400",
          "1.25 — qualifies with best pricing",
        ],
        [
          "Break-even",
          "$2,400",
          "$2,400",
          "1.00 — qualifies with most programs",
        ],
        [
          "Negative cash flow",
          "$2,000",
          "$2,400",
          "0.83 — possible with larger down payment",
        ],
      ],
      caption: "Example DSCR calculations and what they mean for qualifying",
    },
    {
      type: "cards",
      heading: (
        <>
          <span className="text-brand-green">What</span> You Need to Qualify
        </>
      ),
      cards: [
        {
          title: "Down Payment & Reserves",
          description:
            "Plan on 20% down (25% for the best rates) plus 3–6 months of payments in reserves after closing.",
        },
        {
          title: "Credit Score",
          description:
            "Most DSCR programs start at 620. A 700+ score unlocks meaningfully better rates and lower down payment options.",
        },
        {
          title: "Rent That Covers the Payment",
          description:
            "The appraiser documents market rent for the property. When that rent meets or exceeds the full monthly payment, you qualify.",
        },
        {
          title: "No Recent Housing Events",
          description:
            "Most programs want no foreclosures, short sales, or bankruptcies in the last 2–4 years. Prior real estate investing experience helps but is not required.",
        },
      ],
    },
    {
      type: "promo",
      heading: (
        <>
          Run Your Property&apos;s Numbers —{" "}
          <span className="text-green-tint">Florida-Style</span>
        </>
      ),
      body: "Generic DSCR calculators miss what makes or breaks Florida deals: county tax millage that varies 2.6x across the state, insurance that can triple near the coast, and Airbnb income rules. Our free calculator uses your county's actual tax rate and realistic Florida insurance — with a short-term rental mode.",
      href: "/florida-dscr-loan-calculator",
      linkText: "Try the Florida DSCR Calculator",
    },
    {
      type: "guides",
      heading: (
        <>
          Specialized <span className="text-brand-green">DSCR</span> Financing
        </>
      ),
      articles: [
        {
          category: "Short-Term Rentals",
          title: "DSCR Loans for Airbnb & Vacation Rentals",
          description:
            "How lenders count Airbnb income, and Florida's short-term rental rules from Orlando to the beaches.",
          href: "/home-loan/dscr-loan/short-term-rental",
          image: "/images/heroes/florida-short-term-rental-dscr-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Refinance",
          title: "DSCR Cash-Out Refinance",
          description:
            "Pull equity from a Florida rental to buy your next property or pay off hard money.",
          href: "/home-loan/dscr-loan/cash-out-refinance",
          image: "/images/heroes/florida-dscr-cash-out-refinance-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Resort Properties",
          title: "Condotel Loans",
          description:
            "Financing condo-hotel units that conventional and FHA loans won't cover.",
          href: "/home-loan/condotel-loan",
          image: "/images/heroes/florida-condotel-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "International Investors",
          title: "Foreign National Mortgages",
          description:
            "Investing from outside the U.S.? Finance Florida rentals without U.S. credit.",
          href: "/home-loan/foreign-national-loan",
          image: "/images/heroes/florida-foreign-national-loan-hero.webp",
          readTime: "Loan guide",
        },
      ],
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get a <span className="text-brand-green">DSCR Loan</span>
        </>
      ),
      howTo: {
        name: "How to Get a DSCR Loan in Florida",
        description:
          "Step-by-step guide to financing a Florida investment property with a DSCR loan — no tax returns required.",
      },
      steps: [
        {
          title: "Check Your Eligibility",
          description:
            "Tell us about the property, your down payment, and your credit range. No tax returns or pay stubs needed — you'll know where you stand quickly.",
        },
        {
          title: "Run the Numbers",
          description:
            "We calculate the property's DSCR using actual or market rent and structure the loan — down payment, rate, and prepayment options — around your cash-flow goals.",
        },
        {
          title: "Appraisal & Rent Schedule",
          description:
            "The appraiser confirms the property's value and documents market rent. That rent schedule is what qualifies the loan.",
        },
        {
          title: "Close — Personally or in Your LLC",
          description:
            "Close in your own name or in an LLC. Many Florida investors close in an entity for liability protection and portfolio growth.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          DSCR vs. <span className="text-brand-green">Conventional</span>
        </>
      ),
      intro:
        "Both can finance a Florida rental property. Here's how they compare for investors.",
      headers: ["Feature", "DSCR Loan", "Conventional Investment Loan"],
      rows: [
        [
          "Income Documentation",
          "None — property income qualifies",
          "Full W-2s, tax returns, DTI review",
        ],
        [
          "Qualifying Ratio",
          "Property rent vs. payment (DSCR)",
          "Your personal debt-to-income ratio",
        ],
        ["Close in an LLC", "Yes", "No — individual name only"],
        [
          "Number of Properties",
          "No practical limit",
          "Capped at 10 financed properties",
        ],
        [
          "Self-Employed Friendly",
          "Yes — write-offs don't hurt you",
          "Write-offs reduce qualifying income",
        ],
        [
          "Short-Term Rentals",
          "Often allowed (program-dependent)",
          "Rarely usable for qualifying",
        ],
        ["Typical Down Payment", "20–25%", "15–25%"],
        ["Interest Rate", "Moderately higher", "Lower"],
        ["Prepayment Penalty", "Common (often buy-out options)", "None"],
      ],
      caption: "DSCR loan vs conventional investment property loan comparison",
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
          category: "Investor Market Research",
          title: "10 Cheapest Places to Buy a House in Florida (2026)",
          description:
            "Where Florida property prices are lowest — a starting point for cash-flow-focused investors.",
          href: "/learn/cheapest-places-to-buy-house-in-florida",
          image:
            "/images/learn/cheapest-places-to-buy-house-florida-2026-map-only.webp",
          readTime: "9 min read",
        },
        {
          category: "Foreign Investors",
          title: "Foreign Buyer's Guide to Florida Real Estate (2026)",
          description:
            "The buying process, taxes, and visa considerations for international buyers.",
          href: "/learn/foreign-buyers-guide-florida-real-estate",
          image:
            "/images/learn/foreign-buyers-guide-florida-real-estate-2026.webp",
          readTime: "10 min read",
        },
        {
          category: "Self-Employed Borrowers",
          title: "Florida Mortgage Assistance for Self-Employed & 1099 Workers",
          description:
            "Loan options when tax returns don't tell your whole income story.",
          href: "/learn/florida-mortgage-assistance-programs-self-employed-1099",
          image:
            "/images/learn/florida-mortgage-assistance-programs-self-employed-1099-2026.webp",
          readTime: "8 min read",
        },
        {
          category: "Loan Comparisons",
          title: "Conventional Mortgages in Florida (2026)",
          description:
            "How conventional loans work in Florida and when they beat a DSCR loan.",
          href: "/learn/conventional-mortgages-in-florida",
          image: "/images/learn/conventional-mortgages-in-florida-2026.webp",
          readTime: "8 min read",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I qualify for a DSCR loan in Florida?",
      answer:
        "You qualify based on the property, not your paycheck. Lenders look at three things: the property's debt service coverage ratio (its rent divided by its full monthly payment), your credit score, and your down payment. If market rent covers the payment (a DSCR of 1.0 or higher), you have roughly 20% down, and your credit score is 620 or better, most DSCR programs will approve the loan — with no W-2s, tax returns, or employment verification.",
    },
    {
      question: "What is the downside of a DSCR loan?",
      answer:
        "DSCR loans cost more than conventional financing: rates run moderately higher, down payments start around 20%, and most programs carry a prepayment penalty for the first 3–5 years (which you can often buy down or remove for a fee). They're also for investment properties only — you can't live in the home. For investors who can't or don't want to document personal income, those tradeoffs are usually worth it.",
    },
    {
      question: "Can my LLC get a DSCR loan?",
      answer:
        "Yes — this is one of the biggest advantages of DSCR financing. You can close in the name of an LLC or corporation, which conventional loans don't allow. Members of the LLC typically provide a personal guarantee, and the lender checks the guarantors' credit, but the loan itself belongs to the entity and stays off your personal credit profile in most cases.",
    },
    {
      question: "Do DSCR loans require 20% down?",
      answer:
        "Most Florida DSCR programs require at least 20% down on a purchase, and the strongest pricing usually starts at 25%. A handful of programs go as low as 15% down for borrowers with excellent credit and a strong DSCR, while properties with weak cash flow (a DSCR under 1.0) usually require more than 20% down to offset the risk.",
    },
    {
      question: "What DSCR ratio do I need?",
      answer:
        "A DSCR of 1.0 means the rent exactly covers the monthly payment (principal, interest, taxes, insurance, and any HOA dues), and most programs approve at 1.0 or higher. A ratio of 1.25+ typically earns the best rates. Some lenders offer 'no-ratio' or sub-1.0 programs for properties that don't cash flow yet, in exchange for a larger down payment and a higher rate.",
    },
    {
      question:
        "Can I use a DSCR loan for an Airbnb or short-term rental in Florida?",
      answer:
        "Often, yes. Many DSCR programs accept short-term rental income, using either the appraiser's market rent schedule or documented booking history (such as 12 months of AirDNA or platform statements). Florida's vacation markets make this a popular strategy — just confirm the specific property's zoning and the community's short-term rental rules first, since programs and local ordinances vary.",
    },
  ],
  closing: {
    heading: "See If a DSCR Loan Fits Your Next Property",
    subtitle:
      "Tell us about the property and your goals — no tax returns, no obligation.",
  },
};

export default function DSCRLoanPage() {
  return <ProductPage config={config} />;
}
