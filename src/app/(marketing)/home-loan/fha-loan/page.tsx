import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";
import { StepProcess } from "@/components/shared/StepProcess";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";

export const metadata: Metadata = {
  title:
    "Florida FHA Loans (2026) — Requirements, Limits & How to Qualify | Make Florida Your Home",
  description:
    "Learn about FHA loans in Florida for 2026. See loan limits by county, credit score requirements, down payment details, and how FHA compares to conventional.",
  openGraph: {
    title: "Florida FHA Loans (2026) — Requirements, Limits & How to Qualify",
    description:
      "FHA loans in Florida: 3.5% down, 580 credit score. See 2026 loan limits, qualification requirements, and how to apply.",
    url: "https://www.makefloridayourhome.com/home-loan/fha-loan",
    type: "website",
  },
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
    text: "Just 3.5% down — the lowest of any conventional-style loan",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Credit scores as low as 580 accepted",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "Pair with Hometown Heroes for up to $35,000 in DPA",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Government-backed — competitive rates for all borrowers",
  },
];

const featureHeaders = ["Feature", "Details"];
const featureRows = [
  ["Down Payment", "3.5% with 580+ credit score; 10% with 500–579 credit score"],
  ["Credit Score", "580+ for 3.5% down; 500–579 for 10% down"],
  ["Debt-to-Income Ratio", "Up to 43% standard; up to 50% with compensating factors"],
  ["Mortgage Insurance", "Upfront MIP (1.75% of loan) + annual MIP (0.55%/year)"],
  ["Loan Term", "15 or 30 years fixed-rate; adjustable-rate also available"],
  ["Property Types", "Single-family, condos (FHA-approved), townhomes, 2–4 unit properties"],
  ["Occupancy", "Primary residence only — no investment properties"],
  ["Gift Funds", "100% of down payment can come from gift funds"],
];

const loanLimitsHeaders = ["County", "1 Unit", "2 Units", "3 Units", "4 Units"];
const loanLimitsRows = [
  ["Miami-Dade", "$621,000", "$795,000", "$961,350", "$1,194,625"],
  ["Broward", "$621,000", "$795,000", "$961,350", "$1,194,625"],
  ["Palm Beach", "$621,000", "$795,000", "$961,350", "$1,194,625"],
  ["Hillsborough (Tampa)", "$498,257", "$637,950", "$771,125", "$958,350"],
  ["Orange (Orlando)", "$498,257", "$637,950", "$771,125", "$958,350"],
  ["Duval (Jacksonville)", "$498,257", "$637,950", "$771,125", "$958,350"],
];

const qualificationCards = [
  {
    title: "Steady Income",
    description: "2 years of consistent employment history. Same employer not required — same field is sufficient.",
  },
  {
    title: "Manageable Debt",
    description: "Your total monthly debts (including the new mortgage) should be 43% or less of your gross monthly income.",
  },
  {
    title: "Clean Recent Credit",
    description: "No bankruptcies in the past 2 years, no foreclosures in the past 3 years, and no delinquent federal debt.",
  },
  {
    title: "Homebuyer Education",
    description: "First-time buyers using DPA programs must complete a HUD-approved homebuyer education course.",
  },
];

const steps = [
  {
    title: "Get Pre-Approved",
    description:
      "Submit your income documents, credit report, and employment history. Your lender will determine your maximum FHA loan amount and provide a pre-approval letter.",
  },
  {
    title: "Find Your Home",
    description:
      "Work with a real estate agent to find a property within FHA loan limits. For condos, confirm the complex is FHA-approved.",
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
];

const comparisonHeaders = ["Feature", "FHA Loan", "Conventional Loan"];
const comparisonRows = [
  ["Minimum Down Payment", "3.5%", "3% (some programs)"],
  ["Minimum Credit Score", "580 (3.5% down)", "620"],
  ["Mortgage Insurance", "Required for life of loan", "Removable at 80% LTV"],
  ["Upfront MIP", "1.75% of loan amount", "None"],
  ["DTI Limit", "Up to 50%", "Up to 45%"],
  ["Loan Limits", "County-specific (see above)", "Conforming: $766,550"],
  ["Property Standards", "HUD minimum standards", "Standard appraisal"],
  ["Gift Funds", "100% of down payment", "Varies by program"],
  ["Best For", "Lower credit, lower down payment", "Higher credit, want to drop MI"],
];

const articles = [
  {
    category: "Best Florida Home Buyer Programs",
    title: "105 Florida First-Time Home Buyer Grants & Programs (2026 Guide)",
    description: "Explore 105 Florida first-time homebuyer grants and assistance programs for 2026.",
    href: "/learn/first-time-homebuyer/grants-and-programs",
    image: "/images/guides/florida-first-time-homebuyer-grants.webp",
    readTime: "12 min read",
  },
  {
    category: "First-Time Buyer Guides",
    title: "What Are the Requirements to Buy a House in Florida?",
    description: "Learn the key requirements including credit, down payment, and loan options.",
    href: "/learn/requirements-to-buy-a-house-in-florida",
    image: "/images/guides/florida-homebuyer-requirements.webp",
    readTime: "7 min read",
  },
  {
    category: "Florida Income Limits & Pricing",
    title: "Florida Housing Income & Purchase Price Limits (2026)",
    description: "See 2026 Florida Housing income limits and purchase price caps by county.",
    href: "/learn/florida-housing-income-purchase-price-limits",
    image: "/images/guides/florida-housing-income-limits.webp",
    readTime: "8 min read",
  },
  {
    category: "Rent-to-Own Programs",
    title: "17 Florida Rent-to-Own Programs: Buy With No Down Payment",
    description: "Explore 17 Florida rent-to-own programs for 2026.",
    href: "/learn/fha-rent-to-own-florida-guide",
    image: "/images/guides/florida-rent-to-own-programs.webp",
    readTime: "10 min read",
  },
];

const faqs = [
  {
    question: "What credit score do I need for an FHA loan in Florida?",
    answer: "You need a minimum 580 credit score to qualify for the standard 3.5% down payment. With a score between 500 and 579, you can still get an FHA loan but must put 10% down. Most Florida DPA programs require 640+ even when paired with FHA.",
  },
  {
    question: "How much is FHA mortgage insurance?",
    answer: "FHA charges two types of mortgage insurance: an upfront premium (UFMIP) of 1.75% of the loan amount (usually rolled into the loan) and an annual premium of 0.55% of the loan amount, paid monthly. On a $300,000 loan, that's about $137/month for the annual MIP.",
  },
  {
    question: "Can I remove FHA mortgage insurance?",
    answer: "For most FHA loans made after June 2013, mortgage insurance is required for the life of the loan if you put less than 10% down. If you put 10% or more down, MIP drops off after 11 years. The most common way to eliminate FHA MIP is to refinance into a conventional loan once you reach 80% loan-to-value.",
  },
  {
    question: "What are the FHA loan limits in my Florida county?",
    answer: "FHA loan limits vary by county and are updated annually. For 2026, most Florida counties have a single-family limit of $498,257. Higher-cost counties like Miami-Dade, Broward, and Palm Beach have a limit of $621,000. Multi-unit properties have higher limits.",
  },
  {
    question: "Can I use an FHA loan with Hometown Heroes?",
    answer: "Yes. FHA is one of the most popular loan types used with Hometown Heroes and other Florida Housing DPA programs. The combination of FHA's low 3.5% down payment and up to $35,000 in Hometown Heroes assistance can dramatically reduce your out-of-pocket costs.",
  },
  {
    question: "Can I buy a condo with an FHA loan?",
    answer: "Yes, but the condo complex must be on the FHA-approved condo list. Individual unit approvals are also available for certain properties. Your lender can verify whether a specific condo is eligible before you make an offer.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FHALoanPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={
          <>
            <span className="text-brand-green">FHA Loans</span> in Florida —
            Low Down Payment, Flexible Credit
          </>
        }
        subtitle={
          <p>
            FHA loans are the most popular mortgage for Florida first-time
            buyers.{" "}
            <strong className="text-dark-green">
              Just 3.5% down with a 580 credit score
            </strong>{" "}
            — and you can stack it with Hometown Heroes for up to $35,000 in
            down payment assistance.
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/florida-fha-loan-hero.webp"
        imageAlt="Couple reviewing mortgage documents with a loan officer"
        ctaHref="/check-fha-loan-eligibility"
        ctaText="Check Your FHA Loan Eligibility"
      />

      {/* Explainer + Feature Table */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">FHA</span> Loan at a Glance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Backed by the Federal Housing Administration, FHA loans are designed
            to make homeownership accessible to borrowers with lower credit
            scores and smaller down payments.
          </p>
          <div className="mt-10">
            <DataTable
              headers={featureHeaders}
              rows={featureRows}
              caption="FHA loan features and requirements"
            />
          </div>
        </div>
      </section>

      {/* Loan Limits */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            2026 FHA <span className="text-brand-green">Loan Limits</span> by
            County
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            FHA loan limits vary by county and property type. Here are the
            limits for Florida&apos;s most popular areas.
          </p>
          <div className="mt-10">
            <DataTable
              headers={loanLimitsHeaders}
              rows={loanLimitsRows}
              caption="2026 FHA loan limits by Florida county and property units"
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

      {/* Step Process */}
      <StepProcess
        heading={
          <>
            How to Get an <span className="text-brand-green">FHA Loan</span>
          </>
        }
        steps={steps}
        bg="green-tint"
      />

      {/* FHA vs Conventional */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            FHA vs. <span className="text-brand-green">Conventional</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Not sure which loan type is right for you? Here&apos;s a
            side-by-side comparison.
          </p>
          <div className="mt-10">
            <DataTable
              headers={comparisonHeaders}
              rows={comparisonRows}
              caption="FHA loan vs conventional loan comparison"
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
        heading="See If FHA Is Right for You"
        subtitle="Get pre-approved in minutes — no credit pull, no obligation."
        ctaHref="/check-fha-loan-eligibility"
        ctaText="Check Your FHA Loan Eligibility"
      />
    </>
  );
}
