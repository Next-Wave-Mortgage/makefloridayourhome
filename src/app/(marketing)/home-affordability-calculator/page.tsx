import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title:
    "Florida Home Affordability Calculator (2026)",
  description:
    "How much home can you afford in Florida? Use our free calculator to estimate your max home price, monthly payment, and payment breakdown.",
  openGraph: {
    title: "Florida Home Affordability Calculator",
    description:
      "How much home can you afford? Free calculator with real-time estimates.",
    url: "https://www.makefloridayourhome.com/home-affordability-calculator",
    type: "website",
  },
  alternates: {
    canonical: "/home-affordability-calculator",
  },
};

export default function AffordabilityCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            Florida Home{" "}
            <span className="text-brand-green">Affordability</span> Calculator
          </h1>
          <p className="mt-3 text-[17px] text-dark-green/60">
            Get an instant estimate based on your income, debt, and
            Florida-specific costs.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Calculator />
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="bg-green-tint py-16 sm:py-20">
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
