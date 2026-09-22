import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";
import { StepProcess } from "@/components/shared/StepProcess";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";

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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const heroFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: "Qualify on the property's rental income — not your personal income",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "No W-2s, tax returns, or employment verification"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "Close in an LLC and keep the loan off your personal DTI",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Long-term and short-term rentals, including Airbnb properties",
  },
];

const featureHeaders = ["Feature", "Details"];
const featureRows = [
  ["Down Payment", "Typically 20% minimum; stronger terms at 25%+"],
  ["Credit Score", "620+ accepted by most lenders; best pricing at 700+"],
  ["Income Documentation", "None — qualification is based on the property's rent, not your income"],
  ["DSCR Requirement", "1.0+ for most programs; some allow below 1.0 with a larger down payment"],
  ["Property Types", "Single-family, condos, townhomes, 2–4 units, and many short-term rentals"],
  ["Occupancy", "Investment properties only — not for primary residences"],
  ["Vesting", "Individual or LLC/corporate entity allowed"],
  ["Loan Purpose", "Purchase, rate-and-term refinance, or cash-out refinance"],
];

const dscrExampleHeaders = ["Scenario", "Monthly Rent", "Monthly Payment (PITIA)", "DSCR"];
const dscrExampleRows = [
  ["Strong cash flow", "$3,000", "$2,400", "1.25 — qualifies with best pricing"],
  ["Break-even", "$2,400", "$2,400", "1.00 — qualifies with most programs"],
  ["Negative cash flow", "$2,000", "$2,400", "0.83 — possible with larger down payment"],
];

const qualificationCards = [
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
];

const steps = [
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
];

const comparisonHeaders = ["Feature", "DSCR Loan", "Conventional Investment Loan"];
const comparisonRows = [
  ["Income Documentation", "None — property income qualifies", "Full W-2s, tax returns, DTI review"],
  ["Qualifying Ratio", "Property rent vs. payment (DSCR)", "Your personal debt-to-income ratio"],
  ["Close in an LLC", "Yes", "No — individual name only"],
  ["Number of Properties", "No practical limit", "Capped at 10 financed properties"],
  ["Self-Employed Friendly", "Yes — write-offs don't hurt you", "Write-offs reduce qualifying income"],
  ["Short-Term Rentals", "Often allowed (program-dependent)", "Rarely usable for qualifying"],
  ["Typical Down Payment", "20–25%", "15–25%"],
  ["Interest Rate", "Moderately higher", "Lower"],
  ["Prepayment Penalty", "Common (often buy-out options)", "None"],
];

const articles = [
  {
    category: "Investor Market Research",
    title: "10 Cheapest Places to Buy a House in Florida (2026)",
    description:
      "Where Florida property prices are lowest — a starting point for cash-flow-focused investors.",
    href: "/learn/cheapest-places-to-buy-house-in-florida",
    image: "/images/learn/cheapest-places-to-buy-house-florida-2026-map-only.webp",
    readTime: "9 min read",
  },
  {
    category: "Foreign Investors",
    title: "Foreign Buyer's Guide to Florida Real Estate (2026)",
    description:
      "How non-U.S. citizens buy and finance Florida property — DSCR loans are a common fit.",
    href: "/learn/foreign-buyers-guide-florida-real-estate",
    image: "/images/learn/foreign-buyers-guide-florida-real-estate-2026.webp",
    readTime: "10 min read",
  },
  {
    category: "Self-Employed Borrowers",
    title: "Florida Mortgage Assistance for Self-Employed & 1099 Workers",
    description:
      "Loan options when tax returns don't tell your whole income story.",
    href: "/learn/florida-mortgage-assistance-programs-self-employed-1099",
    image: "/images/learn/florida-mortgage-assistance-programs-self-employed-1099-2026.webp",
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
  {
    category: "Loan Limits",
    title: "Florida Conforming Loan Limits by County (2026)",
    description:
      "The county-by-county loan limits that shape conventional and jumbo financing.",
    href: "/learn/florida-conforming-loan-limits-by-county",
    image: "/images/learn/florida-conforming-loan-limits-by-county-2026.webp",
    readTime: "7 min read",
  },
];

const faqs = [
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
    question: "Can I use a DSCR loan for an Airbnb or short-term rental in Florida?",
    answer:
      "Often, yes. Many DSCR programs accept short-term rental income, using either the appraiser's market rent schedule or documented booking history (such as 12 months of AirDNA or platform statements). Florida's vacation markets make this a popular strategy — just confirm the specific property's zoning and the community's short-term rental rules first, since programs and local ordinances vary.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a DSCR Loan in Florida",
  description:
    "Step-by-step guide to financing a Florida investment property with a DSCR loan — no tax returns required.",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.description,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.makefloridayourhome.com/" },
    { "@type": "ListItem", position: 2, name: "Home Loans", item: "https://www.makefloridayourhome.com/home-loan" },
    { "@type": "ListItem", position: 3, name: "DSCR Loans", item: "https://www.makefloridayourhome.com/home-loan/dscr-loan" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DSCRLoanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <PageHero
        title={
          <>
            <span className="text-brand-green">DSCR Loans</span> in Florida —
            Qualify on Rental Income
          </>
        }
        subtitle={
          <p>
            Finance your Florida investment property based on what it earns —
            not what you earn.{" "}
            <strong className="text-dark-green">
              No W-2s, no tax returns, no employment verification.
            </strong>{" "}
            If the rent covers the payment, you can qualify.
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/florida-dscr-loan-hero.webp"
        imageAlt="Modern single-family Florida rental home with palm trees at golden hour — the kind of investment property DSCR loans finance"
        ctaHref="/check-non-qm-loan-eligibility"
        ctaText="Check Your DSCR Loan Eligibility"
      />

      {/* Explainer + Feature Table */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">DSCR</span> Loan at a Glance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            A DSCR (debt service coverage ratio) loan qualifies you on the
            investment property&apos;s rental income instead of your personal
            income — built for Florida real estate investors, self-employed
            buyers, and anyone scaling a rental portfolio.
          </p>
          <div className="mt-10">
            <DataTable
              headers={featureHeaders}
              rows={featureRows}
              caption="DSCR loan features and requirements"
            />
          </div>
        </div>
      </section>

      {/* How DSCR Is Calculated */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            How <span className="text-brand-green">DSCR</span> Is Calculated
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            DSCR = monthly rent &divide; full monthly payment (principal,
            interest, taxes, insurance, and HOA dues). Here&apos;s what
            different ratios mean for your approval.
          </p>
          <div className="mt-10">
            <DataTable
              headers={dscrExampleHeaders}
              rows={dscrExampleRows}
              caption="Example DSCR calculations and what they mean for qualifying"
            />
          </div>
        </div>
      </section>

      {/* Qualification Cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">What</span> You Need to Qualify
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {qualificationCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border-gray/60 bg-green-tint p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
              >
                <h3 className="text-[17px] font-bold text-dark-green">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator promo */}
      <section className="bg-brand-green py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[28px] font-bold leading-tight text-white sm:text-[36px]">
              Run Your Property&apos;s Numbers —{" "}
              <span className="text-green-tint">Florida-Style</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Generic DSCR calculators miss what makes or breaks Florida deals:
              county tax millage that varies 2.6x across the state, insurance
              that can triple near the coast, and Airbnb income rules. Our free
              calculator uses your county&apos;s actual tax rate and realistic
              Florida insurance — with a short-term rental mode.
            </p>
            <Link
              href="/florida-dscr-loan-calculator"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-bold text-dark-green transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
            >
              Try the Florida DSCR Calculator
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Step Process */}
      <StepProcess
        heading={
          <>
            How to Get a <span className="text-brand-green">DSCR Loan</span>
          </>
        }
        steps={steps}
        bg="green-tint"
      />

      {/* DSCR vs Conventional */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            DSCR vs. <span className="text-brand-green">Conventional</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Both can finance a Florida rental property. Here&apos;s how they
            compare for investors.
          </p>
          <div className="mt-10">
            <DataTable
              headers={comparisonHeaders}
              rows={comparisonRows}
              caption="DSCR loan vs conventional investment property loan comparison"
            />
          </div>
        </div>
      </section>

      {/* Expert Guides */}
      <ExpertGuidesRow
        heading={
          <>
            Related <span className="text-brand-green">Guides</span>
          </>
        }
        articles={articles}
        bg="green-tint"
      />

      {/* FAQ */}
      <PageFAQ faqs={faqs} bg="white" />

      {/* CTA */}
      <PageCTA
        heading="See If a DSCR Loan Fits Your Next Property"
        subtitle="Tell us about the property and your goals — no tax returns, no obligation."
        ctaHref="/check-non-qm-loan-eligibility"
        ctaText="Check Your DSCR Loan Eligibility"
      />
    </>
  );
}
