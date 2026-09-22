import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { DscrCalculator } from "./DscrCalculator";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { DataTable } from "@/components/shared/DataTable";
import { FLORIDA_COUNTIES } from "@/data/dscr/florida-counties";

export const metadata: Metadata = {
  title: "Florida DSCR Loan Calculator (2026) — All 67 Counties' Real Taxes",
  description:
    "Free Florida DSCR calculator with every county's actual 2025 tax millage, realistic insurance estimates, flood zones & an Airbnb mode. See if your rental qualifies in seconds.",
  openGraph: {
    title: "Florida DSCR Loan Calculator — All 67 Counties' Real Taxes & Insurance",
    description:
      "The only DSCR calculator built for Florida: county-level property taxes, realistic insurance, flood zones, and short-term rental income. Free, no sign-up.",
    url: "https://www.makefloridayourhome.com/florida-dscr-loan-calculator",
    type: "website",
    images: [
      {
        url: "https://www.makefloridayourhome.com/images/og/florida-dscr-loan-calculator.webp",
        width: 1200,
        height: 630,
        alt: "Aerial view of a Florida rental home neighborhood with palm trees and a waterway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida DSCR Loan Calculator — All 67 Counties' Real Taxes",
    description:
      "Free DSCR calculator built for Florida: real county tax rates, realistic insurance, flood zones, and an Airbnb mode.",
  },
  alternates: { canonical: "/florida-dscr-loan-calculator" },
};

const countyTableHeaders = ["County", "Avg. Total Millage (2025)", "Est. Annual Taxes on $300K"];
const countyTableRows = FLORIDA_COUNTIES.map((c) => [
  c.name,
  c.millage.toFixed(2),
  `$${Math.round((300_000 / 1000) * c.millage).toLocaleString()}`,
]);

const faqs = [
  {
    question: "Why does this calculator ask for my Florida county?",
    answer:
      "Because property taxes are the biggest hidden variable in a Florida DSCR calculation. The same $350,000 property carries roughly $3,100 a year in taxes in Walton County but about $8,000 in St. Lucie County — enough to move your DSCR by a quarter point or more. We apply each county's average total millage rate (Florida TaxWatch 2025) to the full purchase price, because investment properties get no homestead exemption.",
  },
  {
    question: "How is DSCR calculated?",
    answer:
      "DSCR = monthly qualifying rent ÷ full monthly payment (PITIA: principal, interest, taxes, insurance, and association dues). A ratio of 1.0 means the rent exactly covers the payment. Most DSCR programs approve at 1.0 or higher, and 1.25+ typically earns the best pricing.",
  },
  {
    question: "Why is insurance such a big factor in Florida?",
    answer:
      "Florida landlord insurance often costs two to three times the national average, and it varies enormously within the state — an inland Ocala rental might run $3,000 a year while a comparable coastal South Florida property runs $9,000 or more, before flood coverage. Because insurance sits inside PITIA, an underestimated premium quietly sinks DSCR deals. Our estimates are regional; replace them with your actual quote for a precise ratio.",
  },
  {
    question: "Can I use Airbnb income to qualify?",
    answer:
      "Often, yes. Many DSCR lenders accept short-term rental income using booking history or market data, though they commonly credit around 80% of gross to account for seasonality and expenses — which is how this calculator's short-term rental mode works. Confirm the property's local short-term rental rules first; Florida cities and HOAs vary widely.",
  },
  {
    question: "What if my DSCR comes out below 1.0?",
    answer:
      "You still have options: a larger down payment, an interest-only payment structure (which lowers the qualifying payment), a higher-rent strategy, or a lender's sub-1.0 program at a higher rate. The calculator's 'to improve your ratio' panel shows exactly how much rent you'd need for 1.0 and 1.25.",
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

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Florida DSCR Loan Calculator",
  url: "https://www.makefloridayourhome.com/florida-dscr-loan-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free DSCR calculator for Florida investment properties with county-level property taxes, regional insurance estimates, flood zone costs, and short-term rental income.",
};

export default function FloridaDscrCalculatorPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* Hero + calculator */}
      <section className="relative bg-brand-green pb-8 pt-12 sm:pt-14">
        {/* subtle texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/60">
                Free Investor Tool
              </p>
              <h1 className="mt-2 text-[30px] font-bold leading-tight text-white sm:text-[38px]">
                Florida <span className="text-green-tint">DSCR Loan</span>{" "}
                Calculator
              </h1>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
                Pick your county, set the price and down payment, then enter
                the rent. We add up the full monthly payment using that
                county&apos;s real tax rate and a realistic Florida insurance
                estimate. If the rent covers the payment, your DSCR is 1.0 or
                higher and the deal likely qualifies.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pb-1">
              <span className="rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[12px] font-semibold text-white/75">
                All 67 counties&apos; real tax rates
              </span>
              <span className="rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[12px] font-semibold text-white/75">
                Florida insurance built in
              </span>
              <span className="rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[12px] font-semibold text-white/75">
                Airbnb mode
              </span>
            </div>
          </div>
          <div className="mt-6">
            <DscrCalculator />
          </div>
        </div>
        {/* fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" />
      </section>

      {/* How the calculator works */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px]">
            How This Calculator Figures Your{" "}
            <span className="text-brand-green">DSCR</span>
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-dark-green/70">
            <p>
              Your debt service coverage ratio is a single division:{" "}
              <strong className="text-dark-green">
                monthly qualifying rent &divide; total monthly payment (PITIA)
              </strong>
              . A DSCR of 1.0 means the rent exactly covers the payment. Most
              DSCR lenders approve at 1.0 or above, and 1.25+ usually unlocks
              the best pricing. The hard part isn&apos;t the division —
              it&apos;s getting the payment right, and that&apos;s where
              Florida trips up generic calculators.
            </p>
            <p>
              <strong className="text-dark-green">Property taxes:</strong> we
              apply your county&apos;s average total millage — county, school
              board, municipal, and special district levies combined, per
              Florida TaxWatch&apos;s 2025 comparison — to the full purchase
              price. Investment properties get no homestead exemption, and the
              assessed value resets to market value when you buy, so the tax
              bill the previous owner paid is usually lower than the one
              you&apos;ll pay. Buyers who budget off the listing&apos;s
              current tax bill routinely overstate their DSCR.
            </p>
            <p>
              <strong className="text-dark-green">Insurance:</strong> Florida
              is the most expensive property insurance market in the country,
              and the spread within the state is enormous — an inland Ocala
              rental might insure for $3,000 a year while a comparable coastal
              South Florida home runs $9,000 or more before flood coverage. We
              estimate a landlord (DP-3) premium from your county&apos;s
              region and let you overwrite it the moment you have a real
              quote. If the property sits in a FEMA flood zone, the flood
              toggle adds a typical NFIP premium.
            </p>
            <p>
              <strong className="text-dark-green">
                Short-term rentals:
              </strong>{" "}
              for Airbnb and vacation properties, the calculator turns your
              nightly rate and occupancy into gross monthly income, then
              credits 80% of it — the haircut most DSCR lenders apply to
              short-term rental income to account for seasonality and
              expenses. Worked example: a $350,000 Orlando-area home renting
              at $180/night with 65% occupancy grosses about $3,559 a month,
              of which $2,847 counts toward your ratio.
            </p>
          </div>
        </div>
      </section>

      {/* County millage table */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            2025 Property Tax Rates for All{" "}
            <span className="text-brand-green">67 Florida Counties</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-dark-green/60">
            These are the average total millage rates the calculator uses —
            one mill equals $1 of tax per $1,000 of assessed value. Investors
            pay on roughly the full purchase price, so on the same $300,000
            property your tax bill ranges from about $2,600 in Monroe County
            to $6,900 in St. Lucie.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <DataTable
              headers={countyTableHeaders}
              rows={countyTableRows}
              caption="Average total property tax millage by Florida county, 2025 (Florida TaxWatch), with estimated annual taxes on a $300,000 investment purchase"
            />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-dark-green/40">
            Source: Florida TaxWatch, 2025 How Florida Counties Compare.
            Average total millage includes county, school, municipal, and
            special district levies; your parcel&apos;s exact rate depends on
            its taxing districts.
          </p>
        </div>
      </section>

      {/* Why Florida is different */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            Why Florida DSCR Math Is{" "}
            <span className="text-brand-green">Different</span>
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-border-gray/60 bg-green-tint p-6">
              <h3 className="text-[17px] font-bold text-dark-green">
                County taxes swing 2.6x
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                From 8.82 mills in Monroe County to 22.85 in St. Lucie, the same
                property price produces wildly different tax bills — and
                investors pay on full value, with no homestead exemption.
              </p>
            </div>
            <div className="rounded-xl border border-border-gray/60 bg-green-tint p-6">
              <h3 className="text-[17px] font-bold text-dark-green">
                Insurance can break the deal
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                Florida&apos;s insurance market is the nation&apos;s most
                expensive. Coastal and South Florida premiums run 2–3x inland
                rates, and flood zones add more — all of it inside your PITIA.
              </p>
            </div>
            <div className="rounded-xl border border-border-gray/60 bg-green-tint p-6">
              <h3 className="text-[17px] font-bold text-dark-green">
                Short-term rental capital
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                Orlando, the Gulf beaches, and South Florida are among
                America&apos;s biggest Airbnb markets. Our STR mode credits 80%
                of gross income, the way most DSCR lenders underwrite it.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-dark-green/60">
            New to DSCR loans? Start with our full guide:{" "}
            <Link
              href="/home-loan/dscr-loan"
              className="font-bold text-brand-green underline-offset-2 hover:underline"
            >
              DSCR Loans in Florida — requirements, rates, and how to qualify
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ
        heading={
          <>
            Calculator <span className="text-brand-green">FAQs</span>
          </>
        }
        description="How the Florida DSCR math works — and what lenders actually count."
        faqs={faqs}
        bg="green-tint"
      />

      {/* Schedule CTA */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-[28px] font-bold text-dark-green sm:text-[34px]">
              Ready to Run a <span className="text-brand-green">Real Deal?</span>
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
              Get actual DSCR pricing for your property —{" "}
              <strong className="text-dark-green">
                no tax returns, no obligation
              </strong>
              .
            </p>
            <Link
              href="/check-non-qm-loan-eligibility"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Check Your Eligibility
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
