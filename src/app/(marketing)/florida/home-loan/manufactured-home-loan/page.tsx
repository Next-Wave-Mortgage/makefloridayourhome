import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Florida Manufactured Home Loan Program (2026) | Make Florida Your Home",
  description:
    "Complete guide to manufactured home loans in Florida. FHA, VA, USDA options with low or zero down payment. Learn about eligibility and titling rules.",
  openGraph: {
    title: "Florida Manufactured Home Loans | Make Florida Your Home",
    description: "Finance a manufactured home in Florida with FHA, VA, or USDA loans.",
    url: "https://makefloridayourhome.com/florida/home-loan/manufactured-home-loan",
    type: "website",
  },
};

const loanTypes = [
  {
    name: "FHA",
    down: "3.5%",
    who: "Primary residence buyers",
    requirements: "Must be permanently affixed, titled as real property, land owned or purchased with home",
  },
  {
    name: "VA",
    down: "0%",
    who: "Veterans & service members",
    requirements: "Must be permanently affixed, meet VA property standards, land ownership required",
  },
  {
    name: "USDA",
    down: "0%",
    who: "Rural area buyers",
    requirements: "Income limits apply, must be permanently affixed, titled as real estate",
  },
  {
    name: "Chattel",
    down: "Varies",
    who: "Park/community homes",
    requirements: "Home not permanently affixed, titled as personal property, higher rates and shorter terms",
  },
];

const steps = [
  "Gather income, asset, and credit documents",
  "Choose an eligible loan program",
  "Get pre-approved",
  "Select a HUD-compliant manufactured home",
  "Complete appraisal, inspection, and underwriting",
  "Close and move in",
];

const faqs = [
  { q: "Can you finance a manufactured home in Florida?", a: "Yes, using FHA, VA, USDA, conventional, or chattel loans depending on land ownership and home type." },
  { q: "Do I need to own the land?", a: "For FHA, VA, and USDA loans, yes. Chattel loans do not require owning land." },
  { q: "Are FHA loans allowed for manufactured homes?", a: "Yes, if built after June 15, 1976, permanently affixed, and titled as real property." },
  { q: "What is a chattel loan?", a: "A loan that finances the home as personal property — commonly used when the home is in a manufactured home park." },
  { q: "Can a manufactured home be converted to real property?", a: "Yes, if it is permanently affixed to a foundation and the land is owned by the borrower." },
];

export default function ManufacturedHomeLoanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
              Florida <span className="text-brand-green">Manufactured Home</span> Loan Program
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px]">
              Manufactured homes are one of the most affordable paths to homeownership in Florida — often 30% to 80% less expensive than site-built homes. Finance with FHA, VA, and USDA programs with low or zero down payment.
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

      {/* Loan options table */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            <span className="text-brand-green">Loan Options</span> for Manufactured Homes
          </h2>
          <div className="mt-6 space-y-4">
            {loanTypes.map((loan) => (
              <div key={loan.name} className="rounded-xl border border-border-gray/60 bg-green-tint px-6 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[17px] font-bold text-dark-green">{loan.name}</h3>
                  <span className="rounded-full bg-brand-green/10 px-3 py-1 text-[13px] font-bold text-brand-green">
                    {loan.down} down
                  </span>
                </div>
                <p className="mt-1 text-[13px] font-medium text-dark-green/50">{loan.who}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">{loan.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Titling */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            Land Ownership & <span className="text-brand-green">Titling</span> Rules
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-green/30 bg-white px-6 py-6">
              <p className="text-[13px] font-bold uppercase tracking-wider text-brand-green">Preferred</p>
              <h3 className="mt-2 text-[18px] font-bold text-dark-green">Real Property</h3>
              <ul className="mt-3 space-y-2 text-[14px] text-dark-green/60">
                <li>Home permanently affixed to foundation</li>
                <li>Land owned by borrower</li>
                <li>Eligible for FHA, VA, USDA, conventional</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border-gray/60 bg-white px-6 py-6">
              <p className="text-[13px] font-bold uppercase tracking-wider text-dark-green/40">Alternative</p>
              <h3 className="mt-2 text-[18px] font-bold text-dark-green">Personal Property (Chattel)</h3>
              <ul className="mt-3 space-y-2 text-[14px] text-dark-green/60">
                <li>Home not permanently affixed</li>
                <li>Land is leased (park/community)</li>
                <li>Not eligible for government-backed loans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
            How to <span className="text-brand-green">Apply</span>
          </h2>
          <ol className="mt-6 space-y-4">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4 text-[15px] text-dark-green/70">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-[13px] font-bold text-brand-green">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
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
