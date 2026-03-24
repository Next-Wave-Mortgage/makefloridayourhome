import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";
import { StepProcess } from "@/components/shared/StepProcess";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";

export const metadata: Metadata = {
  title:
    "Florida Hometown Heroes Program (2026) — Up to $35,000 in DPA",
  description:
    "Learn about Florida's Hometown Heroes Program for 2026. Up to $35,000 in down payment assistance for teachers, nurses, law enforcement, and 50+ professions.",
  alternates: { canonical: "/hometown-heroes" },
  openGraph: {
    title: "Florida Hometown Heroes Program (2026) — Up to $35,000 in DPA",
    description:
      "Up to $35,000 in down payment assistance for Florida's essential workers. See if you qualify.",
    url: "https://www.makefloridayourhome.com/hometown-heroes",
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
    text: "Up to $35,000 — the largest state DPA program in Florida",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "0% interest, deferred second mortgage — no monthly payments",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
        <path d="M16 3.13a4 4 0 010 7.75" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M1 21v-2a4 4 0 013-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    text: "50+ eligible professions — not just first responders",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Can be stacked with county SHIP funds for even more savings",
  },
];

const stats = [
  { value: "$35K", label: "Maximum Assistance" },
  { value: "0%", label: "Interest Rate" },
  { value: "50+", label: "Eligible Professions" },
];

const incomeLimitsHeaders = ["County", "1–2 Person Household", "3+ Person Household"];
const incomeLimitsRows = [
  ["Miami-Dade", "$118,800", "$136,620"],
  ["Broward", "$118,800", "$136,620"],
  ["Palm Beach", "$118,800", "$136,620"],
  ["Hillsborough (Tampa)", "$99,360", "$115,920"],
  ["Orange (Orlando)", "$99,360", "$115,920"],
  ["Duval (Jacksonville)", "$93,600", "$109,200"],
  ["Lee (Fort Myers)", "$91,080", "$106,260"],
];

const eligibility = [
  "Full-time W-2 employee in one of 50+ eligible professions",
  "First-time home buyer (no ownership interest in past 3 years)",
  "Meet Florida Housing income limits for your county",
  "Minimum 640 credit score",
  "Must use a Florida Housing first mortgage (FHA, VA, USDA, or Conventional)",
  "Property must be in Florida and used as primary residence",
  "Complete a HUD-approved homebuyer education course",
];

const steps = [
  {
    title: "Check Your Eligibility",
    description:
      "Verify your profession qualifies, confirm you meet income limits for your county, and ensure you haven't owned a home in the past 3 years. Our team can verify this in minutes.",
  },
  {
    title: "Get Pre-Approved",
    description:
      "Apply for a Florida Housing first mortgage through an approved lender. Your pre-approval letter shows sellers you're a serious buyer with financing in place.",
  },
  {
    title: "Find Your Home",
    description:
      "Work with a real estate agent to find a home within Florida Housing's purchase price limits for your county. Single-family homes, condos, and townhomes all qualify.",
  },
  {
    title: "Complete Homebuyer Education",
    description:
      "Take a HUD-approved homebuyer education course online. Most take just a few hours and cost $0–$100. Your certificate is valid for 12 months.",
  },
  {
    title: "Close on Your Home",
    description:
      "At closing, your Hometown Heroes funds are applied as a 0% interest second mortgage. You make no payments on this loan — it's repaid only when you sell, refinance, or pay off your first mortgage.",
  },
];

const articles = [
  {
    category: "Hometown Heroes",
    title: "Florida Hometown Heroes Income Limits (2026): County Eligibility Guide",
    description:
      "See Florida Hometown Heroes income limits for 2026, including county-by-county eligibility and who qualifies.",
    href: "/learn/florida-hometown-heroes-income-limits",
    image: "/images/learn/florida-hometown-heroes-income-limits-2026.webp",
    readTime: "8 min read",
  },
  {
    category: "Hometown Heroes",
    title: "Florida Hometown Heroes Job Eligibility (2026) | Full Approved Occupation List",
    description:
      "See which Florida jobs qualify for the Hometown Heroes program. Full eligibility checklist by occupation.",
    href: "/learn/florida-hometown-heroes-job-eligibility",
    image: "/images/learn/florida-hometown-heroes-job-eligibility-2026.webp",
    readTime: "7 min read",
  },
  {
    category: "Hometown Heroes",
    title: "Florida Hometown Heroes Approved Lenders (2026): Find a Participating Company",
    description:
      "Learn how to verify participating mortgage companies and secure up to $35,000 in assistance.",
    href: "/learn/florida-hometown-heroes-approved-lenders",
    image: "/images/learn/florida-hometown-heroes-approved-lenders-2026.webp",
    readTime: "6 min read",
  },
  {
    category: "Florida Income Limits & Pricing",
    title: "Florida Housing Income & Purchase Price Limits (2026)",
    description:
      "See 2026 Florida Housing income limits and purchase price caps by county.",
    href: "/learn/florida-housing-income-purchase-price-limits",
    image: "/images/learn/florida-housing-income-purchase-price-limits-2026.webp",
    readTime: "8 min read",
  },
];

const faqs = [
  {
    question: "What professions qualify for Hometown Heroes?",
    answer:
      "Over 50 professions qualify, including teachers, nurses, physicians, law enforcement officers, firefighters, paramedics, childcare workers, juvenile justice employees, active military, veterans, and many more. The full list covers community workers across education, healthcare, public safety, and government sectors.",
  },
  {
    question: "How much can I receive through Hometown Heroes?",
    answer:
      "Up to $35,000, provided as a 0% interest, non-amortizing second mortgage. The exact amount is calculated as up to 5% of your first mortgage loan amount, capped at $35,000. This can be used for down payment, closing costs, or both.",
  },
  {
    question: "Do I have to repay the Hometown Heroes loan?",
    answer:
      "You don't make monthly payments on the Hometown Heroes second mortgage. It's a deferred loan — repayment is triggered only when you sell, refinance, transfer the property, or pay off your first mortgage. If you stay in the home, you don't repay until one of those events occurs.",
  },
  {
    question: "Can part-time or contract workers qualify?",
    answer:
      "No. Hometown Heroes requires you to be a current, full-time W-2 employee. Independent contractors, part-time workers, and self-employed individuals do not qualify for this specific program — though other Florida DPA programs may be available to them.",
  },
  {
    question: "Can I combine Hometown Heroes with county SHIP funds?",
    answer:
      "In many cases, yes. Hometown Heroes can be layered with county-level SHIP funds, potentially increasing your total assistance to $50,000 or more. Availability depends on your county and remaining SHIP allocations. Our team helps you identify all stackable programs.",
  },
  {
    question: "What are the income limits for Hometown Heroes?",
    answer:
      "Hometown Heroes uses the same income limits as Florida Housing, which vary by county and household size. For example, a 1–2 person household in Miami-Dade can earn up to $118,800. Limits are updated annually. We can look up your exact limit in seconds.",
  },
  {
    question: "Is Hometown Heroes only for first-time buyers?",
    answer:
      "Yes. You must be a first-time home buyer, which Florida defines as not having owned a home — or having an ownership interest in a primary residence — within the past 3 years. If you sold your previous home more than 3 years ago, you may qualify again.",
  },
  {
    question: "How long does the Hometown Heroes approval process take?",
    answer:
      "The full process from application to closing typically takes 30–45 days. The Hometown Heroes layer adds about 5–10 business days to a standard mortgage timeline for the additional approval steps. Pre-approval itself takes 1–3 business days.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Florida Hometown Heroes Program",
  description:
    "Step-by-step guide to applying for up to $35,000 in down payment assistance through Florida's Hometown Heroes program.",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.makefloridayourhome.com",
    },
    { "@type": "ListItem", position: 2, name: "Hometown Heroes Program", item: "https://www.makefloridayourhome.com/hometown-heroes" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HometownHeroesPage() {
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
            <span className="text-brand-green">Hometown Heroes</span>{" "}
            Program — Up to $35,000 in DPA
          </>
        }
        subtitle={
          <p>
            Florida&apos;s largest down payment assistance program rewards the
            workers who serve our communities.{" "}
            <strong className="text-dark-green">
              Teachers, nurses, first responders, and 50+ more professions
            </strong>{" "}
            can receive up to $35,000 toward their first home.
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/florida-hometown-heroes-hero.webp"
        imageAlt="Florida professional holding house keys in front of a new home"
        ctaHref="/check-hometown-heroes-eligibility"
        ctaText="Check Your Hometown Heroes Eligibility"
      />

      {/* Explainer + Stats */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
                <span className="text-brand-green">What</span> Is Hometown
                Heroes?
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-dark-green/60">
                Launched by the Florida Legislature, the Hometown Heroes Housing
                Program provides down payment and closing cost assistance to
                eligible community workers purchasing their first home in
                Florida.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
                The assistance comes as a 0% interest, non-amortizing second
                mortgage — meaning you make no monthly payments on it. Repayment
                is only triggered when you sell, refinance, or pay off your
                first mortgage.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-gray/60 bg-green-tint p-6 text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
                >
                  <span className="block text-[36px] font-black text-brand-green">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[14px] font-medium text-dark-green/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
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

      {/* Income Limits Table */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">Income</span> Limits by County
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Hometown Heroes uses Florida Housing income limits. Here are
            examples for the most popular counties.
          </p>
          <div className="mt-10">
            <DataTable
              headers={incomeLimitsHeaders}
              rows={incomeLimitsRows}
              caption="Hometown Heroes income limits by Florida county"
            />
          </div>
        </div>
      </section>

      {/* Eligibility Checklist */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              <span className="text-brand-green">Eligibility</span>{" "}
              Requirements
            </h2>
            <p className="mt-4 text-center text-[16px] leading-relaxed text-dark-green/60">
              You must meet all of these criteria to qualify for Hometown
              Heroes.
            </p>

            <div className="mt-10 space-y-4">
              {eligibility.map((req) => (
                <div
                  key={req}
                  className="flex items-start gap-4 rounded-xl border border-border-gray/60 bg-green-tint px-6 py-5 transition-all duration-300 hover:border-brand-green/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-brand-green"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[15px] font-medium leading-relaxed text-dark-green/80">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step Process */}
      <StepProcess
        heading={
          <>
            How to <span className="text-brand-green">Apply</span>
          </>
        }
        steps={steps}
        bg="white"
      />

      {/* FAQ */}
      <PageFAQ faqs={faqs} bg="green-tint" />

      {/* CTA */}
      <PageCTA
        heading="See If You Qualify for Hometown Heroes"
        subtitle="Check your eligibility in minutes — no credit pull, no obligation."
        ctaHref="/check-hometown-heroes-eligibility"
        ctaText="Check Your Hometown Heroes Eligibility"
      />
    </>
  );
}
