import type { Metadata } from "next";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Get an FHA Loan in Florida — 3.5% Down, Fast Pre-Approval",
  description:
    "Apply for an FHA loan in Florida with 3.5% down and a 580 credit score. Check your eligibility in minutes and pair FHA with up to $35,000 in down payment assistance.",
  openGraph: {
    title: "Get an FHA Loan in Florida — 3.5% Down, Fast Pre-Approval",
    description:
      "Apply for an FHA loan in Florida with 3.5% down and a 580 credit score. Check your eligibility in minutes.",
    url: "https://www.makefloridayourhome.com/home-loan/fha-loan",
    type: "website",
  },
  alternates: { canonical: "/home-loan/fha-loan" },
};

const config: ProductPageConfig = {
  path: "/home-loan/fha-loan",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "FHA Loans", path: "/home-loan/fha-loan" },
  ],
  hero: {
    title: (
      <>
        <span className="text-brand-green">FHA Loans</span> in Florida — Low
        Down Payment, Flexible Credit
      </>
    ),
    subtitle: (
      <p>
        FHA loans are the most popular mortgage for Florida first-time buyers.{" "}
        <strong className="text-dark-green">
          Just 3.5% down with a 580 credit score
        </strong>{" "}
        — and you can stack it with Hometown Heroes for up to $35,000 in down
        payment assistance.
      </p>
    ),
    features: [
      {
        icon: productIcons.dollar,
        text: "Just 3.5% down — the lowest of any conventional-style loan",
      },
      {
        icon: productIcons.check,
        text: "Credit scores as low as 580 accepted",
      },
      {
        icon: productIcons.home,
        text: "Pair with Hometown Heroes for up to $35,000 in DPA",
      },
      {
        icon: productIcons.shield,
        text: "Government-backed — competitive rates for all borrowers",
      },
    ],
    image: "/images/heroes/florida-fha-loan-hero.webp",
    imageAlt: "Couple reviewing mortgage documents with a loan officer",
  },
  cta: {
    href: "/check-fha-loan-eligibility",
    text: "Check Your FHA Loan Eligibility",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">FHA</span> Loan at a Glance
        </>
      ),
      intro:
        "Backed by the Federal Housing Administration, FHA loans are designed to make homeownership accessible to borrowers with lower credit scores and smaller down payments.",
      headers: ["Feature", "Details"],
      rows: [
        [
          "Down Payment",
          "3.5% with 580+ credit score; 10% with 500–579 credit score",
        ],
        ["Credit Score", "580+ for 3.5% down; 500–579 for 10% down"],
        [
          "Debt-to-Income Ratio",
          "Up to 43% standard; up to 50% with compensating factors",
        ],
        [
          "Mortgage Insurance",
          "Upfront MIP (1.75% of loan) + annual MIP (0.55%/year)",
        ],
        [
          "Loan Term",
          "15 or 30 years fixed-rate; adjustable-rate also available",
        ],
        [
          "Property Types",
          "Single-family, condos (FHA-approved), townhomes, 2–4 unit properties",
        ],
        ["Occupancy", "Primary residence only — no investment properties"],
        ["Gift Funds", "100% of down payment can come from gift funds"],
      ],
      caption: "FHA loan features and requirements",
    },
    {
      type: "table",
      heading: (
        <>
          2026 FHA <span className="text-brand-green">Loan Limits</span> by
          County
        </>
      ),
      intro:
        "FHA loan limits vary by county and property type. Here are the limits for Florida's most popular areas.",
      headers: ["County", "2026 FHA Limit (1-Unit)"],
      rows: [
        ["Most Florida counties (51 of 67)", "$541,287"],
        ["Duval, St. Johns, Clay, Nassau (Jacksonville area)", "$580,750"],
        ["Miami-Dade, Broward, Palm Beach", "$667,000"],
        ["Collier (Naples)", "$764,750"],
        ["Monroe (Key West)", "$990,150"],
      ],
      caption: "2026 FHA loan limits by Florida county and property units",
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
          title: "Steady Income",
          description:
            "2 years of consistent employment history. Same employer not required — same field is sufficient.",
        },
        {
          title: "Manageable Debt",
          description:
            "Your total monthly debts (including the new mortgage) should be 43% or less of your gross monthly income.",
        },
        {
          title: "Clean Recent Credit",
          description:
            "No bankruptcies in the past 2 years, no foreclosures in the past 3 years, and no delinquent federal debt.",
        },
        {
          title: "Homebuyer Education",
          description:
            "First-time buyers using DPA programs must complete a HUD-approved homebuyer education course.",
        },
      ],
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get an <span className="text-brand-green">FHA Loan</span>
        </>
      ),
      howTo: {
        name: "How to Get an FHA Loan in Florida",
        description:
          "Step-by-step guide to getting an FHA loan in Florida with as little as 3.5% down.",
      },
      steps: [
        {
          title: "Get Pre-Approved",
          description:
            "Submit your income documents, credit report, and employment history. Your lender will determine your maximum FHA loan amount and provide a pre-approval letter.",
        },
        {
          title: "Find Your Home",
          description:
            "Work with a real estate agent to find a property within FHA loan limits. For condos, confirm the project is FHA-approved or eligible through Single-Unit Approval.",
        },
        {
          title: "Complete the Appraisal",
          description:
            "FHA requires an appraisal to confirm the home meets HUD minimum property standards and is worth the purchase price.",
        },
        {
          title: "Close on Your Loan",
          description:
            "At closing, you'll pay your 3.5% down payment (or use DPA funds), upfront MIP, and closing costs. Then you get the keys.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          FHA vs. <span className="text-brand-green">Conventional</span>
        </>
      ),
      intro:
        "Not sure which loan type is right for you? Here's a side-by-side comparison.",
      headers: ["Feature", "FHA Loan", "Conventional Loan"],
      rows: [
        ["Minimum Down Payment", "3.5%", "3% (some programs)"],
        ["Minimum Credit Score", "580 (3.5% down)", "620"],
        [
          "Mortgage Insurance",
          "Required for life of loan",
          "Removable at 80% LTV",
        ],
        ["Upfront MIP", "1.75% of loan amount", "None"],
        ["DTI Limit", "Up to 50%", "Up to 45%"],
        [
          "Loan Limits",
          "County-specific (see above)",
          "Conforming: $832,750 (most FL counties)",
        ],
        ["Property Standards", "HUD minimum standards", "Standard appraisal"],
        ["Gift Funds", "100% of down payment", "Varies by program"],
        [
          "Best For",
          "Lower credit, lower down payment",
          "Higher credit, want to drop MI",
        ],
      ],
      caption: "FHA loan vs conventional loan comparison",
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
          category: "Complete FHA Guide",
          title:
            "Florida FHA Loans (2026): Requirements, Loan Limits by County & How to Qualify",
          description:
            "The full guide — credit scores, MIP costs, DTI rules, county limits, and Florida condo and insurance issues.",
          href: "/learn/fha-loan-eligibility-requirements-florida",
          image:
            "/images/learn/fha-loan-eligibility-requirements-florida-2026.webp",
          readTime: "10 min read",
        },
        {
          category: "Best Florida Home Buyer Programs",
          title:
            "105 Florida First-Time Home Buyer Grants & Programs (2026 Guide)",
          description:
            "Explore 105 Florida first-time homebuyer grants and assistance programs for 2026.",
          href: "/learn/first-time-homebuyer/grants-and-programs",
          image: "/images/guides/florida-first-time-homebuyer-grants.webp",
          readTime: "12 min read",
        },
        {
          category: "First-Time Buyer Guides",
          title: "What Are the Requirements to Buy a House in Florida?",
          description:
            "Learn the key requirements including credit, down payment, and loan options.",
          href: "/learn/requirements-to-buy-a-house-in-florida",
          image: "/images/guides/florida-homebuyer-requirements.webp",
          readTime: "7 min read",
        },
        {
          category: "Florida Income Limits & Pricing",
          title: "Florida Housing Income & Purchase Price Limits (2026)",
          description:
            "See 2026 Florida Housing income limits and purchase price caps by county.",
          href: "/learn/florida-housing-income-purchase-price-limits",
          image: "/images/guides/florida-housing-income-limits.webp",
          readTime: "8 min read",
        },
        {
          category: "Rent-to-Own Programs",
          title:
            "10 Florida Rent-to-Own Programs (2026): Buy With Little or No Down Payment",
          description:
            "Compare the rent-to-own and lease-purchase programs operating in Florida.",
          href: "/learn/florida-rent-to-own-programs",
          image: "/images/guides/florida-rent-to-own-programs.webp",
          readTime: "8 min read",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How fast can I get pre-approved for an FHA loan in Florida?",
      answer:
        "With your documents ready — pay stubs, W-2s, and bank statements — FHA pre-approval typically takes 24 to 48 hours, and often same-day. From accepted offer to closing usually runs 30 to 45 days, including the FHA appraisal. Starting with an eligibility check tells you your price range before you shop.",
    },
    {
      question: "How much is FHA mortgage insurance?",
      answer:
        "FHA charges two types of mortgage insurance: an upfront premium (UFMIP) of 1.75% of the loan amount (usually rolled into the loan) and an annual premium of 0.55% of the loan amount, paid monthly. On a $300,000 loan, that's about $137/month for the annual MIP.",
    },
    {
      question: "Can I remove FHA mortgage insurance?",
      answer:
        "For most FHA loans made after June 2013, mortgage insurance is required for the life of the loan if you put less than 10% down. If you put 10% or more down, MIP drops off after 11 years. The most common way to eliminate FHA MIP is to refinance into a conventional loan once you reach 80% loan-to-value.",
    },
    {
      question: "What are the FHA loan limits in my Florida county?",
      answer:
        "FHA loan limits vary by county and are updated annually. For 2026, most Florida counties have a single-family limit of $541,287. Higher-cost counties go up from there — $667,000 in Miami-Dade, Broward, and Palm Beach, and $990,150 in Monroe County. Multi-unit properties have higher limits.",
    },
    {
      question: "Can I use an FHA loan with Hometown Heroes?",
      answer:
        "Yes. FHA is one of the most popular loan types used with Hometown Heroes and other Florida Housing DPA programs. The combination of FHA's low 3.5% down payment and up to $35,000 in Hometown Heroes assistance can dramatically reduce your out-of-pocket costs.",
    },
    {
      question: "Can I buy a condo with an FHA loan?",
      answer:
        "Yes. The condo generally must either be in an FHA-approved project or qualify through FHA's Single-Unit Approval process, which can provide a route in an otherwise unapproved project when its requirements are met. Your lender can verify whether a specific condo is eligible before you make an offer.",
    },
  ],
  closing: {
    heading: "See If FHA Is Right for You",
    subtitle: "Get pre-approved in minutes — no credit pull, no obligation.",
  },
};

export default function FHALoanPage() {
  return <ProductPage config={config} />;
}
