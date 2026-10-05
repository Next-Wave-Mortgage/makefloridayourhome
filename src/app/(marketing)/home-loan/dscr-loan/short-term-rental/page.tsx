import type { Metadata } from "next";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

const ogImage =
  "https://www.makefloridayourhome.com/images/og/florida-short-term-rental-dscr-loan.webp";

export const metadata: Metadata = {
  title: "DSCR Loans for Airbnb & Short-Term Rentals in Florida",
  description:
    "Finance a Florida Airbnb or vacation rental with a DSCR loan. Qualify on short-term rental income, not tax returns — from Orlando to the beaches.",
  openGraph: {
    title: "DSCR Loans for Airbnb & Short-Term Rentals in Florida",
    description:
      "Qualify for a Florida vacation rental loan on the property's Airbnb income — no tax returns, close in an LLC.",
    url: "https://www.makefloridayourhome.com/home-loan/dscr-loan/short-term-rental",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Central Florida vacation rental home with a private pool and screened lanai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSCR Loans for Airbnb & Short-Term Rentals in Florida",
    description:
      "Qualify for a Florida vacation rental loan on the property's Airbnb income — no tax returns, close in an LLC.",
    images: [ogImage],
  },
  alternates: { canonical: "/home-loan/dscr-loan/short-term-rental" },
};

const config: ProductPageConfig = {
  path: "/home-loan/dscr-loan/short-term-rental",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "DSCR Loans", path: "/home-loan/dscr-loan" },
    {
      name: "Short-Term Rentals",
      path: "/home-loan/dscr-loan/short-term-rental",
    },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida Short-Term Rental DSCR Loan",
    description:
      "DSCR mortgage financing for Florida Airbnb and vacation rental properties, qualified on short-term rental income instead of personal income.",
    loanType: "DSCR mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">DSCR Loans</span> for Airbnb &amp;
        Short-Term Rentals in Florida
      </>
    ),
    subtitle: (
      <p>
        Buying a vacation rental near the parks, on the Gulf, or along the
        Atlantic?{" "}
        <strong className="text-dark-green">
          A short-term rental DSCR loan qualifies you on the property&apos;s
          Airbnb income — not your tax returns.
        </strong>{" "}
        Close in your LLC and keep growing your portfolio.
      </p>
    ),
    features: [
      {
        icon: productIcons.dollar,
        text: "Qualify on booking history or projected short-term rental income",
      },
      {
        icon: productIcons.check,
        text: "No W-2s, tax returns, or personal income verification",
      },
      {
        icon: productIcons.home,
        text: "Single-family homes, townhomes, and condos that allow rentals",
      },
      {
        icon: productIcons.shield,
        text: "Purchase, refinance, or cash-out — personally or in an LLC",
      },
    ],
    image: "/images/heroes/florida-short-term-rental-dscr-hero.webp",
    imageAlt:
      "Two-story Central Florida vacation rental home with a private pool, screened lanai, and palm trees",
  },
  cta: {
    href: "/check-non-qm-loan-eligibility",
    text: "Check Your Short-Term Rental Loan Options",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          Short-Term Rental <span className="text-brand-green">DSCR</span> Loans
          at a Glance
        </>
      ),
      intro:
        "A short-term rental DSCR loan works like any DSCR loan — the property's income has to cover its payment — but it uses Airbnb and vacation rental income instead of a long-term lease.",
      headers: ["Feature", "Typical Terms"],
      rows: [
        [
          "Down Payment",
          "Commonly 25% for short-term rentals; some programs allow 20% with strong credit",
        ],
        [
          "Credit Score",
          "Often 660–700+, with the best pricing at higher scores",
        ],
        [
          "Qualifying Income",
          "Booking history, projected short-term rental income, or long-term market rent",
        ],
        [
          "DSCR Requirement",
          "Usually 1.0 or higher; some programs go lower with more down",
        ],
        [
          "Property Types",
          "Single-family, townhomes, 2–4 units, and condos where rentals are allowed",
        ],
        ["Vesting", "Your own name or an LLC"],
        [
          "Loan Purpose",
          "Purchase, rate-and-term refinance, or cash-out refinance",
        ],
        [
          "Prepayment Penalty",
          "Common on investor loans; shorter or no-penalty options often cost more in rate",
        ],
      ],
      caption: "Short-term rental DSCR loan features and typical requirements",
    },
    {
      type: "table",
      heading: (
        <>
          How Lenders Count <span className="text-brand-green">Airbnb</span>{" "}
          Income
        </>
      ),
      intro:
        "This is where short-term rental loans differ most from program to program. There are three common ways to document the income — and the right one depends on whether the property already has a rental track record.",
      headers: ["Method", "When It's Used", "What You'll Provide"],
      rows: [
        [
          "Booking history",
          "The property has rented short-term for about 12 months",
          "Platform earnings statements, property manager reports, or similar records",
        ],
        [
          "Projected short-term income",
          "A purchase or a new rental with no history yet",
          "A market data report or an appraiser's short-term rental analysis (lender-specific)",
        ],
        [
          "Long-term market rent",
          "Fallback when short-term income can't be used",
          "The appraiser's rent schedule — the home qualifies as if leased year-round",
        ],
      ],
      caption: "How DSCR lenders document short-term rental income",
    },
    {
      type: "cards",
      heading: (
        <>
          Four Checks <span className="text-brand-green">Before</span> You Buy
        </>
      ),
      cards: [
        {
          title: "Is It Legal at This Address?",
          description:
            "Short-term rental rules are set city by city and county by county in Florida. Confirm the zoning allows nightly rentals before you count on Airbnb income.",
        },
        {
          title: "What Do the HOA or Condo Rules Say?",
          description:
            "An association can restrict rentals even where the county allows them — minimum stays, caps on rental units, or outright bans. Read the documents first.",
        },
        {
          title: "Licenses & Taxes",
          description:
            "Florida vacation rentals generally need a state license from the DBPR, plus registration for state and local rental taxes. Budget the time and cost up front.",
        },
        {
          title: "Seasonality & Insurance",
          description:
            "Florida rental income swings with the seasons, and coastal insurance is costly. Underwrite the slow months, not just peak season.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          Florida Short-Term Rental{" "}
          <span className="text-brand-green">Rules</span>
        </>
      ),
      intro:
        "Florida limits how far cities and counties can regulate vacation rentals — but older local rules still apply, and the differences between neighboring areas can be dramatic.",
      headers: ["Topic", "What to Know"],
      rows: [
        [
          "State law",
          "Under Florida law, local governments can't ban vacation rentals or regulate how long or how often guests stay — unless the rule was adopted on or before June 1, 2011. Those older rules still apply.",
        ],
        [
          "Recent legislation",
          "A 2024 bill that would have overhauled vacation rental rules (SB 280) was vetoed, so the existing framework is unchanged.",
        ],
        [
          "Orlando vs. Kissimmee",
          "The City of Orlando allows home sharing only when the owner lives on-site and is present. Many resort communities in Osceola County (Kissimmee) — such as ChampionsGate and Reunion — are zoned and built for vacation rentals.",
        ],
        [
          "Beach and South Florida cities",
          "Rules vary widely along the coasts, and some cities enforce long-standing restrictions with steep fines. Check the specific city and neighborhood.",
        ],
        [
          "Licensing",
          "Vacation rentals are generally licensed by the Florida Department of Business and Professional Regulation (DBPR), and some counties add their own registration.",
        ],
        [
          "Rental taxes",
          "Stays of six months or less owe Florida sales tax plus county surtax and tourist development tax. Platforms collect some of these in many counties — confirm what you still need to file.",
        ],
      ],
      caption: "Florida short-term rental rules investors should know",
    },
    {
      type: "promo",
      heading: (
        <>
          Will the Airbnb Income{" "}
          <span className="text-green-tint">Cover the Payment?</span>
        </>
      ),
      body: "Our free Florida DSCR calculator has a short-term rental mode: enter a nightly rate and occupancy, and it credits 80% of gross income the way most lenders do — with your county's real property tax rate and realistic Florida insurance.",
      href: "/florida-dscr-loan-calculator",
      linkText: "Run Your Airbnb Numbers",
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get a{" "}
          <span className="text-brand-green">Short-Term Rental Loan</span>
        </>
      ),
      howTo: {
        name: "How to Get a DSCR Loan for a Short-Term Rental in Florida",
        description:
          "Step-by-step guide to financing a Florida Airbnb or vacation rental with a DSCR loan.",
      },
      steps: [
        {
          title: "Confirm the Property Can Be Rented",
          description:
            "Check zoning and any HOA or condo rules for the address. A great deal on a home that can't be rented nightly won't qualify on Airbnb income.",
        },
        {
          title: "Check Your Eligibility",
          description:
            "Tell us about the property, your down payment, and your credit range. We'll match you with a program that accepts short-term rental income.",
        },
        {
          title: "Document the Income",
          description:
            "Provide booking history if the home already rents, or a market data report or appraiser analysis for a purchase. We'll tell you which your program uses.",
        },
        {
          title: "Appraisal & Close in Your LLC",
          description:
            "The appraisal confirms value and rental income. Then close in your own name or your LLC — and get the property listed.",
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
          category: "Investor Financing",
          title: "DSCR Loans in Florida",
          description:
            "How DSCR loans work for long-term rentals, requirements, and how they compare with conventional loans.",
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
            "Financing condo-hotel units with a front desk and on-site rental program.",
          href: "/home-loan/condotel-loan",
          image: "/images/heroes/florida-condotel-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "International Buyers",
          title: "Foreign National Mortgages in Florida",
          description:
            "How non-residents finance Florida vacation rentals without U.S. credit.",
          href: "/home-loan/foreign-national-loan",
          image: "/images/heroes/florida-foreign-national-loan-hero.webp",
          readTime: "Loan guide",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I get a DSCR loan for an Airbnb in Florida?",
      answer:
        "Yes. Many DSCR programs accept short-term rental income, so you can qualify for a Florida Airbnb or vacation rental based on what the property earns instead of your personal income. You'll typically need around 25% down, a credit score in the mid-600s or higher, and a property where nightly rentals are allowed by local zoning and any HOA or condo rules.",
    },
    {
      question:
        "How do lenders calculate Airbnb income on a home I haven't bought yet?",
      answer:
        "For a purchase with no rental history, lenders that accept short-term income usually rely on projected income — either a market data report for comparable vacation rentals or an appraiser's short-term rental analysis, depending on the program. Many lenders then count only part of the projected gross, often around 80%, to allow for vacancy and seasonality. If projected short-term income isn't allowed, the home can still qualify on long-term market rent.",
    },
    {
      question:
        "How much down payment do I need for a short-term rental DSCR loan?",
      answer:
        "Plan on about 25% down for most short-term rental DSCR programs. Some lenders allow 20% for borrowers with strong credit and a healthy DSCR, while condos, lower-DSCR properties, and larger loans can require more.",
    },
    {
      question: "Are Airbnbs legal in Orlando and Kissimmee?",
      answer:
        "It depends on exactly where the home is. The City of Orlando limits short-term rentals to home sharing, where the owner lives on-site and is present. Many resort communities in Osceola County around Kissimmee — such as ChampionsGate and Reunion — are zoned and designed for vacation rentals, but HOA rules still vary. Always confirm the zoning and community rules for a specific address before you buy.",
    },
    {
      question:
        "Can I refinance my long-term rental into an Airbnb with a DSCR loan?",
      answer:
        "Often, yes. If the property is allowed to rent short-term, a DSCR refinance or cash-out refinance can use short-term rental income — usually with about 12 months of booking history — or long-term market rent until that history exists. A cash-out refinance can also fund furnishings and setup for the switch.",
    },
    {
      question: "Do I need a Florida vacation rental license?",
      answer:
        "Generally, yes. Florida vacation rentals are licensed through the Department of Business and Professional Regulation (DBPR), and you'll also need to register for state and local rental taxes. Some counties and cities require their own registration as well, so check the local rules for the property's location.",
    },
  ],
  closing: {
    heading: "See If Your Vacation Rental Qualifies",
    subtitle:
      "Tell us about the property and your plans — no tax returns, no obligation.",
  },
};

export default function ShortTermRentalDSCRPage() {
  return <ProductPage config={config} />;
}
