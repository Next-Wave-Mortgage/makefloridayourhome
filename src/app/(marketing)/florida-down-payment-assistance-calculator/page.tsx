import type { Metadata } from "next";
import Script from "next/script";
import { PageCTA } from "@/components/shared/PageCTA";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { ToolHero } from "@/components/shared/ToolHero";
import { DpaCalculator } from "@/components/dpa/DpaCalculator";
import { DpaCalculatorSeoSections } from "@/components/dpa/DpaCalculatorSeoSections";
import { FLORIDA_COUNTIES, FLORIDA_DPA_PROGRAMS } from "@/data/dpa";
import {
  getDpaProgramCountsByCounty,
  toDpaCalculatorProgramSummaries,
} from "@/lib/dpa-calculator";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Florida Down Payment Assistance Calculator (2026) | Find DPA Programs",
  description:
    "Use our Florida down payment assistance calculator to find DPA programs that may help with your down payment or closing costs by county, income, buyer status, and loan type.",
  keywords: [
    "Florida down payment assistance calculator",
    "Florida DPA calculator",
    "down payment assistance Florida",
    "Florida first-time home buyer grants calculator",
    "Florida homebuyer assistance programs",
  ],
  alternates: {
    canonical: "/florida-down-payment-assistance-calculator",
  },
  openGraph: {
    title:
      "Florida Down Payment Assistance Calculator (2026) | Find DPA Programs",
    description:
      "Use our Florida down payment assistance calculator to find DPA programs that may help with your down payment or closing costs by county, income, buyer status, and loan type.",
    url: `${siteConfig.url}/florida-down-payment-assistance-calculator`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is this Florida DPA calculator an approval?",
    answer:
      "No. The calculator shows programs that may be worth checking based on your county, buyer profile, and loan scenario. Final eligibility depends on income limits, purchase price limits, funding availability, lender approval, and program administrator review.",
  },
  {
    question: "What does the calculator use to find matches?",
    answer:
      "It uses the site's Florida down payment assistance database, including program geography, assistance amount, buyer requirements, loan compatibility, source quality, and calculator-readiness notes.",
  },
  {
    question: "Do I need to be a first-time homebuyer?",
    answer:
      "Many Florida DPA programs require first-time buyer status, usually meaning no ownership in a primary residence during the last three years. Some programs vary, so the calculator separates likely matches from programs that need review.",
  },
  {
    question: "Can Florida DPA help with closing costs too?",
    answer:
      "Often, yes. Many down payment assistance programs can be used for down payment, closing costs, or both. The exact use depends on the program, lender, and first mortgage structure.",
  },
  {
    question: "Why do some results say manual review?",
    answer:
      "Manual review means the program may be relevant, but funding status, city jurisdiction, income limits, purchase price limits, or source details need to be verified before relying on the result.",
  },
  {
    question: "Can I stack statewide and local DPA programs?",
    answer:
      "Sometimes. Stacking rules vary by program and lender. The calculator can surface multiple programs, but a mortgage expert must verify which options can be combined for your exact scenario.",
  },
  {
    question: "What is the best Florida down payment assistance calculator?",
    answer:
      "A useful Florida down payment assistance calculator should check more than a purchase price or county. This calculator uses a maintained database of 105 Florida DPA programs and considers geography, buyer status, income, purchase price, credit score, loan type, program confidence, and manual-review flags.",
  },
  {
    question:
      "Can this calculator find county and city DPA programs in Florida?",
    answer:
      "Yes. The calculator checks statewide, county, city, regional, and specialty assistance programs where the database supports matching. Some city-specific programs still need address-level verification before applying.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
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
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Florida Down Payment Assistance Calculator",
      item: `${siteConfig.url}/florida-down-payment-assistance-calculator`,
    },
  ],
};

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Florida Down Payment Assistance Calculator",
  url: `${siteConfig.url}/florida-down-payment-assistance-calculator`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "A Florida down payment assistance calculator that matches buyers with DPA programs based on county, city, buyer status, income, purchase price, credit score, and loan type.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "MortgageBroker",
    name: siteConfig.company,
    url: siteConfig.url,
  },
};

export default function FloridaDpaCalculatorPage() {
  const calculatorPrograms =
    toDpaCalculatorProgramSummaries(FLORIDA_DPA_PROGRAMS);
  const countyCounts = getDpaProgramCountsByCounty(
    FLORIDA_COUNTIES,
    calculatorPrograms,
  );
  const commonPrograms = [
    "florida-hometown-heroes",
    "florida-assist",
    "florida-hlp",
    "florida-hfa-preferred-plus",
  ]
    .map((id) => calculatorPrograms.find((program) => program.id === id))
    .filter((program): program is NonNullable<typeof program> =>
      Boolean(program),
    );

  return (
    <>
      <Script
        id="florida-dpa-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="florida-dpa-calculator-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="florida-dpa-calculator-web-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />

      <ToolHero
        title="Florida Down Payment Assistance Calculator"
        description="Find Florida down payment assistance programs that may help with your down payment or closing costs based on county, income, buyer status, and loan type."
        tags={["down payment assistance", "calculator", "florida"]}
        breadcrumbs={[{ label: "Calculators", href: "/calculators" }]}
        cta={{
          href: "/check-dpa-eligibility",
          label: "Check My DPA Eligibility",
          note: "Start the guided eligibility funnel and verify which programs are realistic for your scenario.",
        }}
      />

      <section
        id="florida-dpa-calculator"
        className="bg-green-tint/60 pb-10 sm:pb-12 lg:pb-16"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #006948 0px, #006948 24px, transparent 24px)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <DpaCalculator
            counties={FLORIDA_COUNTIES}
            programs={calculatorPrograms}
          />
        </div>
      </section>

      <DpaCalculatorSeoSections
        countyCounts={countyCounts}
        commonPrograms={commonPrograms}
      />

      <PageFAQ
        faqs={faqItems}
        bg="white"
        heading={
          <>
            Florida DPA Calculator{" "}
            <span className="text-brand-green">Questions</span>
          </>
        }
        description="The calculator is built to narrow the list, not replace lender or program administrator review."
      />

      <PageCTA
        heading="Ready to verify your exact Florida DPA options?"
        subtitle="Send your scenario through the eligibility funnel and our team can confirm which programs are realistic before you apply."
        ctaHref="/check-dpa-eligibility"
        ctaText="Verify My DPA Options"
      />
    </>
  );
}
