import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { HthUrgencyBanner } from "@/components/shared/HthUrgencyBanner";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";
import { StepProcess } from "@/components/shared/StepProcess";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";

export const metadata: Metadata = {
  title: "Florida Hometown Heroes Program (2026) — Up to $35,000 in DPA",
  description:
    "Up to $35,000 in down payment assistance for Florida's frontline workers — healthcare, school staff, first responders, childcare, military, and veterans.",
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: "5% of your loan amount — minimum $10,000, up to $35,000",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "0% interest, deferred second mortgage — no monthly payments",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
        <path d="M16 3.13a4 4 0 010 7.75" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M1 21v-2a4 4 0 013-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    text: "Eligibility is based on where you work — not your job title",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "No 1% origination fee — plus doc stamp and intangible tax exemptions at closing",
  },
];

const stats = [
  { value: "$35K", label: "Maximum Assistance" },
  { value: "0%", label: "Interest Rate" },
  { value: "$10K", label: "Minimum Assistance" },
];

const incomeLimitsHeaders = [
  "County",
  "Borrower Income Limit (TBA)",
  "Household Income Limit (Bond, 1–2 / 3+ Person)",
];
const incomeLimitsRows = [
  ["Miami-Dade", "$204,300", "$136,200 / $156,630"],
  ["Broward", "$190,200", "$126,800 / $145,820"],
  ["Palm Beach", "$192,750", "$128,500 / $147,775"],
  ["Hillsborough (Tampa)", "$172,050", "$114,700 / $131,905"],
  ["Orange (Orlando)", "$172,350", "$114,900 / $132,135"],
  ["Duval (Jacksonville)", "$163,050", "$108,700 / $125,005"],
  ["Lee (Fort Myers)", "$168,600", "$112,400 / $129,260"],
];

const eligibility = [
  "At least one borrower works full-time for an eligible Florida-based employer with a physical location — hospitals, K-12 schools, fire departments, law enforcement, childcare centers, courts, and more",
  "First-time home buyer — no ownership interest in the past 3 years (veterans and buyers in federally designated targeted areas are exempt)",
  "Income at or below your county's Hometown Heroes limit",
  "Minimum 640 credit score",
  "Must use a Florida Housing first mortgage (FHA, VA, USDA, or Conventional)",
  "Property must be in Florida and used as primary residence",
  "Complete an approved homebuyer education course",
  "Remote-only workers aren't eligible — hybrid workers qualify if they report to a Florida location at least 3 days a week",
];

const steps = [
  {
    title: "Check Your Eligibility",
    description:
      "Verify your employer qualifies, confirm your income is within your county's limit, and ensure you haven't owned a home in the past 3 years. Our team can verify this in minutes.",
  },
  {
    title: "Get Pre-Approved",
    description:
      "Apply for a Florida Housing first mortgage through an approved lender. Your pre-approval letter shows sellers you're a serious buyer with financing in place.",
  },
  {
    title: "Find Your Home",
    description:
      "Work with a real estate agent to find a home within the program's purchase price and loan limits for your county. Single-family homes, condos, and townhomes all qualify.",
  },
  {
    title: "Complete Homebuyer Education",
    description:
      "Take an approved homebuyer education course online. Most take just a few hours and cost $0–$100. Your certificate is valid for two years.",
  },
  {
    title: "Close on Your Home",
    description:
      "At closing, your Hometown Heroes funds are applied as a 0% interest second mortgage. You make no payments on this loan — it's repaid only when you sell, refinance, transfer the deed, pay off your first mortgage, or move out of the home.",
  },
];

const articles = [
  {
    category: "Hometown Heroes",
    title:
      "Florida Hometown Heroes Income Limits (2026): County Eligibility Guide",
    description:
      "See Florida Hometown Heroes income limits for 2026, including county-by-county eligibility and who qualifies.",
    href: "/learn/florida-hometown-heroes-income-limits",
    image: "/images/learn/florida-hometown-heroes-income-limits-2026.webp",
    readTime: "8 min read",
  },
  {
    category: "Hometown Heroes",
    title:
      "Florida Hometown Heroes Job Eligibility (2026) | Full Approved Occupation List",
    description:
      "See which Florida jobs qualify for the Hometown Heroes program. Full eligibility checklist by occupation.",
    href: "/learn/florida-hometown-heroes-job-eligibility",
    image: "/images/learn/florida-hometown-heroes-job-eligibility-2026.webp",
    readTime: "7 min read",
  },
  {
    category: "Hometown Heroes",
    title:
      "Is Florida Hometown Heroes Still Available? 2026 Funding Status & Key Dates",
    description:
      "See when funding opens, how long the money is expected to last, and how to get ready before it runs out.",
    href: "/learn/florida-hometown-heroes-funding",
    image: "/images/learn/florida-hometown-heroes-funding-2026.webp",
    readTime: "6 min read",
  },
  {
    category: "Florida Income Limits & Pricing",
    title: "Florida Housing Income & Purchase Price Limits (2026)",
    description:
      "See 2026 Florida Housing income limits and purchase price caps by county.",
    href: "/learn/florida-housing-income-purchase-price-limits",
    image:
      "/images/learn/florida-housing-income-purchase-price-limits-2026.webp",
    readTime: "8 min read",
  },
];

const faqs = [
  {
    question: "What professions qualify for Hometown Heroes?",
    answer:
      "Eligibility is based on your employer and work location, not your job title. Qualifying employer categories include Florida-based healthcare facilities, K-12 schools, fire departments and ambulance services, law enforcement and correctional agencies, courts, licensed childcare facilities, and the military. Any full-time employee of an eligible facility can qualify — a cafeteria worker at a hospital or school counts. Only one borrower on the loan needs to meet the requirement.",
  },
  {
    question: "How much can I receive through Hometown Heroes?",
    answer:
      "The assistance is 5% of your first mortgage loan amount, with a $10,000 minimum and a $35,000 maximum — so loans of $200,000 or less receive the full $10,000. It's provided as a 0% interest, non-amortizing second mortgage and can be used for down payment, closing costs, or both.",
  },
  {
    question: "Do I have to repay the Hometown Heroes loan?",
    answer:
      "You don't make monthly payments on the Hometown Heroes second mortgage. It's a deferred loan — repayment is triggered only when you sell, refinance, transfer the deed, pay off your first mortgage, or stop living in the home as your primary residence. The balance is never forgiven — it's a 0% loan, not a grant.",
  },
  {
    question: "Can part-time or contract workers qualify?",
    answer:
      "Part-time workers, no — the program requires current, full-time employment. Self-employed and 1099 workers can qualify if they work full-time for one 1099 employer with a physical Florida location and can document it with a letter from a CPA, bookkeeper, or tax preparer. Multiple part-time 1099 jobs can't be combined to reach full-time.",
  },
  {
    question: "Do remote workers qualify for Hometown Heroes?",
    answer:
      "No. Fully remote employees aren't eligible, no matter who employs them — it's one of the most common reasons applications are denied. Hybrid employees can qualify if they report to their employer's Florida location at least 3 days a week.",
  },
  {
    question: "Can I combine Hometown Heroes with county SHIP funds?",
    answer:
      "Generally, no. Hometown Heroes is the only second mortgage allowed with its first mortgage, and it can't be combined with any other Florida Housing assistance program. Assistance from other agencies is possible only if it stands alone in third lien position — so treat additional stacking as the exception, not the plan. Our team can tell you what's realistic in your county.",
  },
  {
    question: "What are the income limits for Hometown Heroes?",
    answer:
      "Limits vary by county and by program version. The borrower-income version (TBA) counts only the income of the people on the loan and has higher limits — for example, $204,300 in Miami-Dade. The household-income version (Bond) counts everyone in the home 18 and older and has lower limits. We can look up your exact limit in seconds.",
  },
  {
    question: "Is Hometown Heroes only for first-time buyers?",
    answer:
      "Mostly, yes. You can't have owned a home — or had an ownership interest in a primary residence — within the past 3 years. There are two exemptions: veterans with an other-than-dishonorable discharge, and buyers purchasing in a federally designated targeted area. Active-duty service members are not exempt.",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Hometown Heroes Program",
      item: "https://www.makefloridayourhome.com/hometown-heroes",
    },
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

      {/* Urgency banner */}
      <HthUrgencyBanner />

      {/* Hero */}
      <PageHero
        title={
          <>
            <span className="text-brand-green">Hometown Heroes</span> Program —
            Up to $35,000 in DPA
          </>
        }
        subtitle={
          <p>
            Florida&apos;s largest down payment assistance program rewards the
            workers who serve our communities.{" "}
            <strong className="text-dark-green">
              Teachers, nurses, first responders, and other eligible frontline
              workers
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
                Run by the Florida Housing Finance Corporation, the Hometown
                Heroes Housing Program pairs a 30-year fixed first mortgage
                with down payment and closing cost assistance for eligible
                frontline workers purchasing their first home in Florida. The
                program also waives the standard 1% origination fee — a savings
                of thousands at closing. Funding is released in cycles and
                reserved first come, first served, so timing matters.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
                The assistance comes as a 0% interest, non-amortizing second
                mortgage — meaning you make no monthly payments on it.
                Repayment is only triggered when you sell, refinance, transfer
                the deed, pay off your first mortgage, or stop living in the
                home. It&apos;s a loan, not a grant — nothing is forgiven, but
                nothing is owed while you live in the home.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
                Hometown Heroes is only one possible layer. Use the{" "}
                <Link
                  href="/florida-down-payment-assistance-calculator"
                  className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
                >
                  Florida DPA calculator
                </Link>{" "}
                to compare it against local county and city assistance programs
                that may also be worth checking.
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
            Hometown Heroes has its own county income limits. Most buyers
            qualify under the borrower-income version of the program (TBA),
            which counts only the income of the people on the loan. A
            household-income version (Bond) with lower limits — and access to
            additional loan options — is also available. Here are examples for
            the most popular counties.
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
              <span className="text-brand-green">Eligibility</span> Requirements
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
