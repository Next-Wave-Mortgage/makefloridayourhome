import type { Metadata } from "next";
import { MortgageRatesDashboard } from "@/components/sections/MortgageRatesDashboard";
import { mortgageRatesFaqs } from "@/lib/mortgage-rates-faq";
import { getMortgageMarketSnapshot } from "@/lib/rates";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Florida Mortgage Rates Today | Live Benchmark Dashboard",
  description:
    "Compare current Florida mortgage rate benchmarks, daily rate-lock indices, Florida housing market context, and compliant mortgage rate methodology.",
  openGraph: {
    title: "Florida Mortgage Rates Today",
    description:
      "Live benchmark mortgage rates and Florida housing context from FRED.",
    url: `${siteConfig.url}/mortgage-rates`,
    type: "website",
  },
  alternates: {
    canonical: "/mortgage-rates",
  },
};

export const dynamic = "force-dynamic";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mortgageRatesFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default async function MortgageRatesPage() {
  const snapshot = await getMortgageMarketSnapshot();

  return (
    <>
      <script
        id="mortgage-rates-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MortgageRatesDashboard snapshot={snapshot} />
    </>
  );
}
