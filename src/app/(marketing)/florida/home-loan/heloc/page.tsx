import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "How a HELOC Works in Florida (2026) | Make Florida Your Home",
  description:
    "Learn how HELOCs work in Florida — rates, limits, requirements, and how to access your home equity. Compare HELOC vs cash-out refinance.",
  openGraph: {
    title: "How a HELOC Works in Florida | Make Florida Your Home",
    description: "Florida HELOC guide — rates, requirements, and how to access your equity.",
    url: "https://makefloridayourhome.com/florida/home-loan/heloc",
    type: "website",
  },
};

const requirements = [
  "15–20% minimum home equity",
  "Credit score of 640+ (best rates at 700+)",
  "Debt-to-income ratio under 43%",
  "Stable, verifiable income",
  "Strong mortgage payment history",
  "CLTV capped at 80–85%",
];

const uses = [
  "Home renovations (kitchen, bath, roof, pool)",
  "Debt consolidation at lower rates",
  "Emergency expenses or medical bills",
  "Tuition or education costs",
  "Down payment on another property",
  "Property value improvements",
];

const comparison = [
  { feature: "Loan Type", heloc: "Second mortgage", cashout: "Replaces existing mortgage" },
  { feature: "Interest Rate", heloc: "Usually variable", cashout: "Usually fixed" },
  { feature: "Closing Costs", heloc: "Low or none", cashout: "Higher" },
  { feature: "Access to Funds", heloc: "As needed (revolving)", cashout: "Lump sum at closing" },
  { feature: "Keeps Your Rate", heloc: "Yes", cashout: "No" },
  { feature: "Best For", heloc: "Ongoing/flexible expenses", cashout: "Large one-time expenses" },
];

const pros = [
  "Flexible access to cash as needed",
  "Interest-only payments during draw period",
  "Lower rates than credit cards or personal loans",
  "Pay interest only on what you use",
];

const cons = [
  "Variable interest rates can rise",
  "Payments increase after draw period ends",
  "Your home is used as collateral",
  "Rates tied to market changes",
];

const faqs = [
  { q: "Is HELOC interest tax-deductible?", a: "It may be if funds are used to buy, build, or substantially improve the home securing the loan. Consult a tax professional for your situation." },
  { q: "Can I get a HELOC with less than 20% equity?", a: "Some lenders allow it, but the best terms and rates require at least 20% equity." },
  { q: "Can I refinance a HELOC later?", a: "Yes, many borrowers refinance HELOC balances into fixed-rate loans when it makes financial sense." },
  { q: "Is a HELOC better than a personal loan?", a: "For larger borrowing needs, HELOCs typically offer lower rates since they're secured by home equity — but they carry more risk since your home is collateral." },
];

export default function HELOCPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
              How a <span className="text-brand-green">HELOC</span> Works in Florida
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px]">
              A HELOC lets you borrow against your home&apos;s equity with a revolving credit line. Draw funds as needed, pay interest only on what you use, and repay over time — typically at rates lower than credit cards or personal loans.
            </p>
            <Link
              href="/schedule-a-free-call-today"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Talk to a Specialist
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How much + rates */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            How Much Can You <span className="text-brand-green">Borrow</span>?
          </h2>
          <div className="mt-5 rounded-xl border border-border-gray/60 bg-green-tint px-6 py-6">
            <p className="text-[14px] font-medium text-dark-green/60 leading-relaxed">
              Most lenders require 20–30% equity retained. Your HELOC limit is based on your Combined Loan-to-Value (CLTV) ratio, typically capped at 80–85%.
            </p>
            <div className="mt-4 rounded-lg bg-white px-5 py-4 font-mono text-[14px] text-dark-green/70">
              (Current Mortgage + HELOC) ÷ Home Value = CLTV
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-center">
              <div>
                <p className="text-[13px] text-dark-green/40">Example Home Value</p>
                <p className="text-[20px] font-bold text-dark-green">$500,000</p>
              </div>
              <div>
                <p className="text-[13px] text-dark-green/40">Current Mortgage</p>
                <p className="text-[20px] font-bold text-dark-green">$300,000</p>
              </div>
              <div>
                <p className="text-[13px] text-dark-green/40">Potential HELOC</p>
                <p className="text-[20px] font-bold text-brand-green">~$125,000</p>
              </div>
            </div>
          </div>

          <h2 className="mt-12 text-[24px] font-bold text-dark-green sm:text-[28px]">
            Current Florida <span className="text-brand-green">HELOC Rates</span>
          </h2>
          <div className="mt-5 rounded-xl border border-border-gray/60 bg-green-tint px-6 py-6 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wider text-dark-green/40">Typical Range</p>
            <p className="mt-2 text-[36px] font-bold text-brand-green">8.5% – 10.5%</p>
            <p className="mt-1 text-[13px] text-dark-green/45">Prime + 0.25% to Prime + 2.00% · Variable rates</p>
          </div>
        </div>
      </section>

      {/* Uses + Requirements */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-[20px] font-bold text-dark-green">
                Common <span className="text-brand-green">Uses</span>
              </h2>
              <ul className="mt-4 space-y-2.5">
                {uses.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-[14px] text-dark-green/65">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green"><polyline points="20 6 9 17 4 12" /></svg>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-dark-green">
                <span className="text-brand-green">Requirements</span>
              </h2>
              <ul className="mt-4 space-y-2.5">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[14px] text-dark-green/65">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green"><polyline points="20 6 9 17 4 12" /></svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            HELOC vs <span className="text-brand-green">Cash-Out Refinance</span>
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border-gray/60">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-dark-green text-white">
                  <th className="px-5 py-3 text-left font-semibold">Feature</th>
                  <th className="px-5 py-3 text-left font-semibold">HELOC</th>
                  <th className="px-5 py-3 text-left font-semibold">Cash-Out Refi</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-green-tint" : "bg-white"}>
                    <td className="px-5 py-3 font-medium text-dark-green">{row.feature}</td>
                    <td className="px-5 py-3 text-dark-green/65">{row.heloc}</td>
                    <td className="px-5 py-3 text-dark-green/65">{row.cashout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-center text-[24px] font-bold text-dark-green sm:text-[28px]">
            <span className="text-brand-green">Pros</span> and Cons
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-green/20 bg-white px-6 py-6">
              <p className="text-[14px] font-bold uppercase tracking-wider text-brand-green">Pros</p>
              <ul className="mt-4 space-y-3">
                {pros.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px] text-dark-green/65">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green"><polyline points="20 6 9 17 4 12" /></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border-gray/60 bg-white px-6 py-6">
              <p className="text-[14px] font-bold uppercase tracking-wider text-dark-green/40">Cons</p>
              <ul className="mt-4 space-y-3">
                {cons.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[14px] text-dark-green/65">
                    <span className="mt-0.5 shrink-0 text-mid-gray">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-center text-[24px] font-bold text-dark-green sm:text-[28px]">
            Frequently Asked <span className="text-brand-green">Questions</span>
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border-gray/60 bg-green-tint px-6 py-5">
                <p className="text-[15px] font-bold text-dark-green">{faq.q}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Questions About Your Equity?"
        subtitle="Talk to a Florida mortgage specialist about your HELOC options — free, no obligation."
        ctaText="Schedule a Free Call"
        ctaHref="/schedule-a-free-call-today"
      />
    </>
  );
}
