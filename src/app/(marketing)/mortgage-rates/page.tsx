import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Current Mortgage Rates in Florida | Make Florida Your Home",
  description:
    "Today's Florida mortgage rates updated regularly. Compare 30-year fixed, 15-year fixed, and more. Get personalized quotes with no obligation.",
  openGraph: {
    title: "Current Mortgage Rates in Florida | Make Florida Your Home",
    description:
      "Today's Florida mortgage rates. Compare 30-year fixed, 15-year fixed, and more.",
    url: "https://www.makefloridayourhome.com/mortgage-rates",
    type: "website",
  },
  alternates: {
    canonical: "/mortgage-rates",
  },
};

const rateFactors = [
  "Loan amount and county loan limits",
  "Property type (single-family vs. condo)",
  "Occupancy (primary residence vs. second home)",
  "Insurance and HOA-related risk factors",
];

const bestRateSteps = [
  "Keep credit balances low and avoid new debt before applying.",
  "Choose the loan program that best fits your profile, not just the lowest advertised rate.",
  "Compare total loan cost, including fees and credits.",
  "Understand when discount points make sense — and when they don't.",
  "Factor in Florida-specific costs like insurance and HOA dues early in the process.",
];

export default function MortgageRatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
              Current Mortgage{" "}
              <span className="text-brand-green">Rates</span> in Florida
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px]">
              Our daily updates provide the most accurate and competitive rates,
              helping you make informed decisions whether you are buying a home,
              refinancing, or investing in real estate.
            </p>
            <Link
              href="/home-purchase-eligibility"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Get Your Personalized Rates
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <p className="mt-3 text-[13px] text-dark-green/40">
              Rates updated regularly · Personalized quotes available · No
              obligation
            </p>
          </div>
        </div>
      </section>

      {/* Rate cards */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-gray/60 bg-green-tint px-8 py-8 text-center">
              <p className="text-[13px] font-bold uppercase tracking-wider text-dark-green/40">
                30-Year Fixed
              </p>
              <p className="mt-3 text-[48px] font-bold text-brand-green">
                6.18<span className="text-[24px]">%</span>
              </p>
              <p className="mt-1 text-[13px] text-dark-green/40">Avg. rate</p>
            </div>
            <div className="rounded-2xl border border-border-gray/60 bg-green-tint px-8 py-8 text-center">
              <p className="text-[13px] font-bold uppercase tracking-wider text-dark-green/40">
                15-Year Fixed
              </p>
              <p className="mt-3 text-[48px] font-bold text-brand-green">
                5.50<span className="text-[24px]">%</span>
              </p>
              <p className="mt-1 text-[13px] text-dark-green/40">Avg. rate</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-[12px] text-dark-green/35">
            Data Source: Freddie Mac&apos;s Primary Mortgage Market Survey. Averages
            are for conforming mortgages with 20% down. Rates subject to change
            without notice. Last updated December 24, 2025.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">
            {/* Intro */}
            <div>
              <p className="text-[16px] leading-relaxed text-dark-green/65">
                Florida&apos;s mortgage market is shifting in real time. Interest
                rates move daily, housing demand varies by region, and insurance
                and property costs continue to shape affordability. For buyers
                and homeowners, understanding what&apos;s happening right now can
                help avoid costly mistakes and uncover better financing
                opportunities.
              </p>
            </div>

            {/* Expert Analysis */}
            <div>
              <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
                Expert Analysis on Florida Mortgage{" "}
                <span className="text-brand-green">Rate Trends</span>
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-dark-green/65">
                <p>
                  Mortgage rates in Florida generally follow national trends, but
                  local factors can influence the final rate a borrower receives.
                  Rates change daily, influenced by inflation data, bond market
                  activity, and Federal Reserve signals.
                </p>
                <p>In Florida, final rate outcomes are also shaped by:</p>
                <ul className="space-y-2 pl-1">
                  {rateFactors.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p>
                  When rates are volatile, timing matters. A strategic
                  approach — watching trends instead of reacting to
                  headlines — often leads to better results.
                </p>
              </div>
            </div>

            {/* How to get lowest rate */}
            <div>
              <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
                How Florida Buyers Can Secure the{" "}
                <span className="text-brand-green">Lowest Possible Rate</span>
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-dark-green/65">
                <p>
                  Getting the lowest possible mortgage rate in Florida is often
                  about preparation and strategy, not timing the market
                  perfectly. Steps that frequently make the biggest difference:
                </p>
                <ol className="space-y-3 pl-1">
                  {bestRateSteps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-[12px] font-bold text-brand-green">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
                <p>
                  In many cases, borrowers qualify for better terms than they
                  expect — but only if the loan is structured correctly from the
                  start.
                </p>
              </div>
            </div>

            {/* What this means */}
            <div className="rounded-2xl border border-brand-green/20 bg-white px-7 py-7">
              <h2 className="text-[20px] font-bold text-dark-green sm:text-[24px]">
                What This Means for{" "}
                <span className="text-brand-green">Florida Buyers</span>
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-dark-green/60">
                <p>
                  For buyers actively shopping in Florida, small shifts in
                  mortgage rates can meaningfully impact monthly payments and
                  purchasing power. In a changing market, staying flexible with
                  your rate lock and being prepared with updated documentation
                  can help you move quickly if pricing improves.
                </p>
                <p>
                  Buyers who understand their loan options and total monthly
                  costs — including insurance and HOA fees — are often better
                  positioned to act confidently when the right opportunity comes
                  along.
                </p>
              </div>
              <Link
                href="/home-purchase-eligibility"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              >
                Check Today&apos;s Rates
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h2 className="text-[28px] font-bold text-dark-green sm:text-[34px]">
              Have <span className="text-brand-green">Questions?</span>
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
              Schedule a{" "}
              <strong className="text-dark-green">free 15-minute consult</strong>{" "}
              with a Florida mortgage expert.
            </p>
            <Link
              href="/eligibility/schedule-a-free-call"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Schedule Now
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
