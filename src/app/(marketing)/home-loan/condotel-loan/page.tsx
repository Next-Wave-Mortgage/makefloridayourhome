import type { Metadata } from "next";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

const ogImage =
  "https://www.makefloridayourhome.com/images/og/florida-condotel-loan.webp";

export const metadata: Metadata = {
  title: "Condotel Loans in Florida — Financing for Condo-Hotel Units",
  description:
    "Condotel loans for Florida condo-hotel units conventional and FHA loans won't cover. Second homes and rentals in Orlando, Miami Beach, Destin, and more.",
  openGraph: {
    title: "Condotel Loans in Florida — Financing for Condo-Hotel Units",
    description:
      "Finance a Florida condo-hotel unit as a second home or investment — even when conventional and FHA loans say no.",
    url: "https://www.makefloridayourhome.com/home-loan/condotel-loan",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Beachfront Florida condo-hotel tower with a resort pool and cabanas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condotel Loans in Florida — Financing for Condo-Hotel Units",
    description:
      "Finance a Florida condo-hotel unit as a second home or investment — even when conventional and FHA loans say no.",
    images: [ogImage],
  },
  alternates: { canonical: "/home-loan/condotel-loan" },
};

const config: ProductPageConfig = {
  path: "/home-loan/condotel-loan",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "Condotel Loans", path: "/home-loan/condotel-loan" },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida Condotel Loan",
    description:
      "Portfolio and non-QM mortgage financing for condo-hotel (condotel) units in Florida, for second homes and investment properties.",
    loanType: "Condotel mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">Condotel Loans</span> in Florida
      </>
    ),
    subtitle: (
      <p>
        Found the perfect unit in a beachfront resort or an Orlando condo-hotel,
        only to hear that conventional and FHA loans won&apos;t touch it?{" "}
        <strong className="text-dark-green">
          Condotel loans are built for exactly these buildings.
        </strong>{" "}
        Finance a condo-hotel unit as a second home or an investment.
      </p>
    ),
    features: [
      {
        icon: productIcons.home,
        text: "For units with a front desk, rental program, or hotel services",
      },
      {
        icon: productIcons.check,
        text: "An option when Fannie Mae, Freddie Mac, and FHA won't lend",
      },
      {
        icon: productIcons.dollar,
        text: "Second-home and investment financing, including LLC closings",
      },
      {
        icon: productIcons.shield,
        text: "Foreign national buyers can often qualify too",
      },
    ],
    image: "/images/heroes/florida-condotel-loan-hero.webp",
    imageAlt:
      "Beachfront Florida condo-hotel tower on the Gulf coast with a resort pool, cabanas, and palm trees",
  },
  cta: {
    href: "/check-non-qm-loan-eligibility",
    text: "Check Your Condotel Loan Options",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">Condotel</span> Loan at a Glance
        </>
      ),
      intro:
        "A condotel is a condominium building that operates like a hotel. You own your unit, but the building may have a front desk, a rental program, and daily housekeeping. Those hotel features are what make condotel financing different.",
      headers: ["Feature", "Typical Terms"],
      rows: [
        [
          "Down Payment",
          "Usually 25%–40%; second-home use often starts near 25%, investment use is commonly 30%–40%",
        ],
        ["Credit Score", "Often 680 or higher, depending on the program"],
        [
          "Loan Type",
          "Portfolio or non-QM financing — condotels don't qualify for conventional or FHA loans",
        ],
        [
          "Unit Size",
          "Many programs set a minimum size (often 400–600 sq. ft.) and prefer a full kitchen",
        ],
        [
          "Occupancy",
          "Second home or investment property — not a primary residence",
        ],
        [
          "Qualifying Income",
          "Your personal income, or the unit's rental history with some DSCR programs",
        ],
        ["Reserves", "Commonly 6–12 months of payments after closing"],
        ["Vesting", "Your own name or an LLC (program-dependent)"],
      ],
      caption: "Condotel loan features and typical requirements",
    },
    {
      type: "table",
      heading: (
        <>
          Condotel vs. <span className="text-brand-green">Regular Condo</span>
        </>
      ),
      intro:
        "Fannie Mae, Freddie Mac, and FHA treat hotel-style buildings as ineligible. Here's what typically separates a condotel from a condo you could finance with a standard loan.",
      headers: ["Feature", "Condotel", "Regular Condo"],
      rows: [
        ["Front desk & check-in", "Yes — like a hotel", "No"],
        [
          "Rental program",
          "On-site program that rents units nightly, often sharing revenue",
          "Owners rent on their own, if the association allows it",
        ],
        ["Daily housekeeping", "Common", "No"],
        [
          "Owner use",
          "May be limited by the rental program's rules",
          "Unrestricted",
        ],
        [
          "Conventional & FHA financing",
          "Not eligible",
          "Eligible if the building meets agency standards",
        ],
        [
          "Financing you'll use",
          "Condotel (portfolio or non-QM) loan",
          "Conventional, FHA, VA, or other standard loans",
        ],
      ],
      caption: "Condotel vs regular condo financing comparison",
    },
    {
      type: "cards",
      heading: (
        <>
          <span className="text-brand-green">What</span> Lenders Look At
        </>
      ),
      cards: [
        {
          title: "The Unit Itself",
          description:
            "Square footage and a working kitchen matter. Small hotel-room-style units without kitchens are the hardest to finance.",
        },
        {
          title: "The Rental Program",
          description:
            "Lenders review whether renting through the hotel program is mandatory, how revenue is split, and how much personal use you keep.",
        },
        {
          title: "The Building's Finances",
          description:
            "Reserves, insurance, and pending special assessments all count — especially for Florida buildings working through new condo safety requirements.",
        },
        {
          title: "Your Down Payment & Credit",
          description:
            "A larger down payment and a stronger credit score open more programs and better pricing, and reserves after closing are usually required.",
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
        "Florida has more condo-hotels than almost anywhere — from Orlando near the theme parks to Miami Beach, Fort Lauderdale, Clearwater, Destin, and Panama City Beach. These Florida factors affect both your loan and your returns.",
      headers: ["Florida Factor", "What It Means for You"],
      rows: [
        [
          "Condo safety laws",
          "Florida's post-Surfside laws require structural inspections and fully funded reserves for many condo buildings, including condotels. Ask about recent inspections and any planned special assessments before you buy.",
        ],
        [
          "Transient rental taxes",
          "Rentals of six months or less owe Florida sales tax plus county surtax and tourist development tax. Hotel rental programs usually collect and remit them — confirm who handles it.",
        ],
        [
          "Insurance & hurricane season",
          "The building's master wind policy flows into your association dues, and storm season can affect rental income. Lenders count both.",
        ],
        [
          "No homestead exemption",
          "Condotels are second homes or investments, so expect full, non-homestead property taxes.",
        ],
        [
          "Seasonal income",
          "Florida resort revenue swings with the seasons. Ask the rental program for 12–24 months of owner statements to see a full year of income.",
        ],
      ],
      caption: "Florida-specific considerations for condotel buyers",
    },
    {
      type: "promo",
      heading: (
        <>
          Estimate Your Unit&apos;s{" "}
          <span className="text-green-tint">Cash Flow</span>
        </>
      ),
      body: "Our free Florida DSCR calculator includes a short-term rental mode, county-level property taxes, and realistic Florida insurance — a quick way to see whether a condotel unit's rental income covers the payment.",
      href: "/florida-dscr-loan-calculator",
      linkText: "Try the Florida DSCR Calculator",
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get a <span className="text-brand-green">Condotel Loan</span>
        </>
      ),
      howTo: {
        name: "How to Get a Condotel Loan in Florida",
        description:
          "Step-by-step guide to financing a Florida condo-hotel unit as a second home or investment property.",
      },
      steps: [
        {
          title: "Check the Building First",
          description:
            "Send us the building name before you make an offer. Some condotel projects are financeable and some aren't, and knowing early saves your deposit and your time.",
        },
        {
          title: "Gather the Rental Program Details",
          description:
            "Get the rental program agreement, recent owner statements, and the association's budget. Lenders use them to review the building and your income.",
        },
        {
          title: "Choose Your Program",
          description:
            "We'll match you with a second-home, investment, or DSCR condotel program based on how you plan to use the unit and your down payment.",
        },
        {
          title: "Appraisal & Closing",
          description:
            "The appraisal confirms the unit's value against similar condotel sales. Then you close — in person, by mail, or in your LLC if the program allows.",
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
            "Qualify on rental income instead of your personal income — no tax returns required.",
          href: "/home-loan/dscr-loan",
          image: "/images/heroes/florida-dscr-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "International Buyers",
          title: "Foreign National Mortgages in Florida",
          description:
            "How non-residents finance Florida vacation homes and rentals without U.S. credit.",
          href: "/home-loan/foreign-national-loan",
          image: "/images/heroes/florida-foreign-national-loan-hero.webp",
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
          category: "Loan Comparisons",
          title: "Conventional Mortgages in Florida (2026)",
          description:
            "How conventional loans work — and why their condo rules exclude hotel-style buildings.",
          href: "/learn/conventional-mortgages-in-florida",
          image: "/images/learn/conventional-mortgages-in-florida-2026.webp",
          readTime: "8 min read",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a condotel?",
      answer:
        "A condotel (or condo-hotel) is a condominium building that operates like a hotel. Each unit is individually owned, but the building typically has a front desk, a rental program that books units to nightly guests, and services like housekeeping. Owners can often use their unit part of the year and earn rental income the rest of the time.",
    },
    {
      question: "Can you get a mortgage on a condotel in Florida?",
      answer:
        "Yes, but not with a conventional or FHA loan. Fannie Mae, Freddie Mac, and FHA consider hotel-style buildings ineligible, so condotel units are financed with portfolio or non-QM loans from lenders who keep the loans on their own books. Not every condotel building qualifies, so it's best to check the specific project before you make an offer.",
    },
    {
      question: "How much down payment do I need for a condotel?",
      answer:
        "Plan on 25% to 40% down. Programs for second-home use often start near 25%, while investment-property programs commonly require 30% to 40%. The building, the unit's size, and your credit score can all move that number.",
    },
    {
      question: "Can I use the condotel unit myself?",
      answer:
        "Usually, yes — within the rental program's rules. Many programs let owners block out personal stays, while some limit owner use during peak season or require units to stay in the rental pool. Lenders look at these rules too, because programs that strip away owner use can be harder to finance.",
    },
    {
      question: "How is condotel rental income used to qualify?",
      answer:
        "It depends on the program. Some condotel loans qualify you on your personal income, like a standard mortgage. Others — including certain DSCR programs — can use the unit's rental history, usually documented with 12 to 24 months of statements from the rental program.",
    },
    {
      question: "Can foreign nationals buy and finance a Florida condotel?",
      answer:
        "Often, yes. Condotels are popular with international buyers who want a Florida vacation home that earns income while they're away. Foreign national condotel financing is available from select programs, typically with a larger down payment and reserves held in a U.S. account.",
    },
  ],
  closing: {
    heading: "Find Out If Your Condotel Unit Can Be Financed",
    subtitle:
      "Send us the building and your plans for the unit — we'll tell you which programs fit, with no obligation.",
  },
};

export default function CondotelLoanPage() {
  return <ProductPage config={config} />;
}
