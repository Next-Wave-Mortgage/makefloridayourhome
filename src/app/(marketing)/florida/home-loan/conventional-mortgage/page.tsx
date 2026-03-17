import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Conventional Mortgages in Florida | Make Florida Your Home",
  description:
    "Complete guide to conventional mortgages in Florida. Learn about eligibility, down payment options, PMI, loan limits, and how to get the best rates.",
  openGraph: {
    title: "Conventional Mortgages in Florida | Make Florida Your Home",
    description: "Complete guide to conventional mortgages in Florida.",
    url: "https://makefloridayourhome.com/florida/home-loan/conventional-mortgage",
    type: "website",
  },
};

const eligibility = [
  { label: "Credit Score", detail: "Minimum 620; higher scores unlock better rates and lower PMI" },
  { label: "Income & Employment", detail: "Stable, verifiable income with typically two years consistent history" },
  { label: "Debt-to-Income (DTI)", detail: "Below 45%, though some borrowers qualify higher with compensating factors" },
  { label: "Assets & Reserves", detail: "Sufficient funds for down payment, closing costs, and sometimes cash reserves" },
];

const downPaymentOptions = [
  { percent: "3%", description: "For qualified first-time homebuyers" },
  { percent: "5%", description: "For repeat buyers" },
  { percent: "10–20%", description: "Stronger pricing and reduced PMI" },
];

const faqs = [
  { q: "What credit score do I need?", a: "Most lenders require a minimum of 620 for conventional loans in Florida." },
  { q: "Can first-time homebuyers use a conventional loan?", a: "Yes, with down payments as low as 3% for qualified first-time buyers." },
  { q: "Is PMI required?", a: "Yes, when your down payment is less than 20%. PMI can be removed once you reach 20% equity." },
  { q: "Can I use it for investment properties?", a: "Yes — conventional loans work for primary residences, second homes, and investment properties." },
  { q: "Are conventional loans better than FHA?", a: "Neither is universally better. Conventional loans often offer lower long-term costs for borrowers with strong credit, while FHA is more flexible for lower credit scores." },
];

export default function ConventionalMortgagePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
              <span className="text-brand-green">Conventional</span> Mortgages in Florida
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px]">
              Conventional mortgages are one of the most popular home loan options in Florida, offering flexibility, competitive interest rates, and long-term savings for qualified buyers.
            </p>
            <Link
              href="/home-purchase-eligibility"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Check Your Eligibility
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            What Is a <span className="text-brand-green">Conventional</span> Mortgage?
          </h2>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-dark-green/65">
            <p>
              A conventional mortgage is a home loan not insured or guaranteed by the federal government. Unlike FHA, VA, or USDA loans, these mortgages are backed by private lenders following Fannie Mae and Freddie Mac guidelines.
            </p>
            <p>
              Borrowers with strong qualifications often receive lower long-term costs, competitive rates, and greater flexibility for primary residences, second homes, and investment properties.
            </p>
          </div>

          {/* Why popular */}
          <h2 className="mt-12 text-[24px] font-bold text-dark-green sm:text-[28px]">
            Why They&apos;re <span className="text-brand-green">Popular</span> in Florida
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Competitive interest rates for strong credit borrowers",
              "Lower mortgage insurance costs vs. FHA loans",
              "Works for primary homes, second homes, and investments",
              "PMI can be removed once you build 20% equity",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border-gray/60 bg-green-tint px-5 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-[14px] text-dark-green/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            <span className="text-brand-green">Eligibility</span> Requirements
          </h2>
          <div className="mt-6 space-y-4">
            {eligibility.map((item) => (
              <div key={item.label} className="rounded-xl border border-border-gray/60 bg-white px-6 py-5">
                <p className="text-[15px] font-bold text-dark-green">{item.label}</p>
                <p className="mt-1 text-[14px] text-dark-green/60">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Down payment */}
          <h2 className="mt-12 text-[24px] font-bold text-dark-green sm:text-[28px]">
            <span className="text-brand-green">Down Payment</span> Options
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {downPaymentOptions.map((opt) => (
              <div key={opt.percent} className="rounded-xl border border-border-gray/60 bg-white px-6 py-6 text-center">
                <p className="text-[32px] font-bold text-brand-green">{opt.percent}</p>
                <p className="mt-2 text-[13px] text-dark-green/55">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PMI + Loan Limits */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            Understanding <span className="text-brand-green">PMI</span>
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-green/65">
            When your down payment is less than 20%, lenders require Private Mortgage Insurance (PMI) to protect against default. PMI is removable once your loan balance reaches 80% of the home&apos;s value and must be automatically canceled at 78%.
          </p>

          <h2 className="mt-12 text-[24px] font-bold text-dark-green sm:text-[28px]">
            Florida <span className="text-brand-green">Loan Limits</span>
          </h2>
          <div className="mt-5 rounded-xl border border-border-gray/60 bg-green-tint px-6 py-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-dark-green/40">Standard Limit</p>
                <p className="mt-1 text-[28px] font-bold text-brand-green">$766,550</p>
                <p className="text-[13px] text-dark-green/50">Most Florida counties, one-unit</p>
              </div>
              <div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-dark-green/40">High-Cost Areas</p>
                <p className="mt-1 text-[28px] font-bold text-brand-green">$1,149,825</p>
                <p className="text-[13px] text-dark-green/50">Higher-cost counties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-center text-[24px] font-bold text-dark-green sm:text-[28px]">
            Frequently Asked <span className="text-brand-green">Questions</span>
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border-gray/60 bg-white px-6 py-5">
                <p className="text-[15px] font-bold text-dark-green">{faq.q}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Ready to Get Started?"
        subtitle="Check your eligibility in under 2 minutes. No credit pull, no obligation."
        ctaText="Check My Eligibility"
        ctaHref="/home-purchase-eligibility"
      />
    </>
  );
}
