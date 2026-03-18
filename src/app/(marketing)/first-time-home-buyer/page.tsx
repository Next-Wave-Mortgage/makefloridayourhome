import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";

export const metadata: Metadata = {
  title:
    "Florida First-Time Home Buyer Programs & Grants (2026) | Make Florida Your Home",
  description:
    "Explore Florida first-time home buyer programs, grants, and down payment assistance for 2026. See income limits, requirements, and how to qualify.",
  openGraph: {
    title: "Florida First-Time Home Buyer Programs & Grants (2026)",
    description:
      "Explore Florida first-time home buyer programs, grants, and down payment assistance for 2026. See income limits, requirements, and how to qualify.",
    url: "https://makefloridayourhome.com/first-time-home-buyer",
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
    text: "Up to $35,000 through Hometown Heroes alone",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Stack multiple programs for maximum savings",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "FHA, VA, USDA, and conventional loan options",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Free pre-approval — no credit pull required",
  },
];

const requirementsHeaders = ["Requirement", "Typical Minimum", "Notes"];
const requirementsRows = [
  ["Credit Score", "640 (580 for FHA)", "Higher scores unlock better rates and more programs"],
  ["Down Payment", "0% – 3.5%", "Many DPA programs cover the full down payment"],
  ["Debt-to-Income Ratio", "45% or less", "Some programs allow up to 50% with compensating factors"],
  ["Employment History", "2 years", "Consistent income in the same field preferred"],
  ["Homebuyer Education", "Required by most programs", "HUD-approved course, available online"],
  ["First-Time Buyer Status", "No ownership in past 3 years", "Florida's definition — not necessarily your first home ever"],
];

const grantsHeaders = ["Program", "Max Assistance", "Type", "Repayment", "Key Requirement"];
const grantsRows = [
  ["Florida Hometown Heroes", "Up to $35,000", "0% deferred second mortgage", "Repaid at sale, refi, or payoff", "W-2 employee in 50+ eligible professions"],
  ["Florida Housing (FL HLP)", "Up to $10,000", "0% deferred second mortgage", "Deferred for 15 years, then forgiven", "Income and purchase price limits apply"],
  ["Florida Assist", "Up to $7,500", "0% deferred second mortgage", "Repaid at sale, refi, or transfer", "Must use FL Housing first mortgage"],
  ["County SHIP Funds", "Varies by county ($10K–$60K)", "Grant or deferred loan", "Varies — many are forgivable", "Must buy in participating county"],
  ["HFA Preferred / Advantage", "Up to 5% of loan amount", "Grant or forgivable loan", "3-year forgivable option available", "Income limits; use with FL Housing mortgage"],
];

const faqs = [
  {
    question: "What qualifies as a 'first-time home buyer' in Florida?",
    answer: "Florida defines a first-time home buyer as someone who has not owned a home — or had an ownership interest in a primary residence — within the past 3 years. This means you may qualify even if you owned a home before, as long as it was more than 3 years ago.",
  },
  {
    question: "What credit score do I need to buy a home in Florida?",
    answer: "Most Florida assistance programs require a minimum credit score of 640. However, FHA loans accept scores as low as 580 with a 3.5% down payment. Your credit score also affects your interest rate and the number of programs you qualify for.",
  },
  {
    question: "How much down payment assistance can I get in Florida?",
    answer: "Florida buyers can receive anywhere from $7,500 to over $100,000 in combined assistance depending on the programs they qualify for. Hometown Heroes offers up to $35,000, Florida Housing offers up to $10,000, and county SHIP funds can add even more. Many of these programs can be stacked.",
  },
  {
    question: "Do I need to take a homebuyer education course?",
    answer: "Yes, most Florida down payment assistance programs require completion of a HUD-approved homebuyer education course. These courses are available online, typically cost $0–$100, and can be completed in a few hours. The certificate is valid for 12 months.",
  },
  {
    question: "Can I buy a condo with first-time buyer programs?",
    answer: "Yes. Condos, townhomes, and single-family homes are all eligible. For FHA loans, the condo complex must be on the FHA-approved list. Conventional loans are more flexible with condo eligibility.",
  },
  {
    question: "Are there income limits for Florida first-time buyer programs?",
    answer: "Yes. Each program has its own income limits that vary by county and household size. For example, Hometown Heroes uses Florida Housing income limits, which range from roughly $80,000 to $130,000+ depending on your county. We help you identify your exact limits.",
  },
  {
    question: "How long does the home buying process take in Florida?",
    answer: "From pre-approval to closing, the typical timeline is 30–45 days. Adding down payment assistance programs may add 5–10 business days for layered approvals. The pre-approval itself usually takes 1–3 business days once you submit your documents.",
  },
  {
    question: "Can I use multiple assistance programs at the same time?",
    answer: "Absolutely. Many Florida buyers stack programs — for example, using a Florida Housing first mortgage with Hometown Heroes AND county SHIP funds. The key is ensuring each program allows layering, which our team helps you navigate.",
  },
  {
    question: "What types of loans are available for first-time buyers?",
    answer: "Florida first-time buyers can choose from FHA (3.5% down, 580+ credit), Conventional (3% down, 620+ credit), VA (0% down for veterans), and USDA (0% down for rural areas). Each loan type has different requirements and benefits.",
  },
  {
    question: "Do I have to live in the home I buy?",
    answer: "Yes. All Florida first-time buyer assistance programs require the property to be your primary residence. You typically must move in within 60 days of closing and maintain it as your primary residence for a set period — usually 5 to 15 years depending on the program.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FirstTimeHomeBuyerPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={
          <>
            <span className="text-brand-green">First-Time</span> Home Buyer
            Programs in Florida
          </>
        }
        subtitle={
          <p>
            Florida offers some of the most generous first-time home buyer
            programs in the country.{" "}
            <strong className="text-dark-green">
              Grants, zero-interest loans, and down payment assistance
            </strong>{" "}
            can save you tens of thousands at closing.
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/florida-first-time-homebuyer-hero.webp"
        imageAlt="Young couple with keys in front of their new Florida home"
      />

      {/* Explainer */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
                <span className="text-brand-green">Why</span> Florida Is One of
                the Best States for First-Time Buyers
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-dark-green/60">
                Florida has no state income tax, a booming housing market, and
                more than 50 state and local assistance programs designed to
                help first-time buyers close on a home with less money out of
                pocket.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
                Whether you&apos;re a teacher, nurse, veteran, or simply buying
                your first home, there&apos;s likely a program — or a
                combination of programs — that can put homeownership within
                reach.
              </p>
            </div>

            {/* Callout cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: "$35K", label: "Max Hometown Heroes assistance" },
                { value: "50+", label: "State & local programs available" },
                { value: "0%", label: "Down payment possible with VA/USDA" },
                { value: "580", label: "Minimum credit score for FHA" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-gray/60 bg-green-tint p-6 text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
                >
                  <span className="block text-[32px] font-black text-brand-green">
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

      {/* Requirements Table */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">Requirements</span> for
            First-Time Buyer Programs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Every program has its own criteria, but here are the typical
            minimums you&apos;ll need to meet.
          </p>
          <div className="mt-10">
            <DataTable
              headers={requirementsHeaders}
              rows={requirementsRows}
              caption="Florida first-time home buyer program requirements"
            />
          </div>
        </div>
      </section>

      {/* Income Limits */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
                <span className="text-brand-green">Income</span> Limits by
                County
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-dark-green/60">
                Florida Housing sets income limits based on your county and
                household size. These limits determine your eligibility for
                state-level assistance programs.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Limits are updated annually — 2026 limits are currently in effect",
                  "Household income includes all adult earners",
                  "Higher limits in high-cost counties like Miami-Dade and Monroe",
                  "Hometown Heroes uses the same income limits as Florida Housing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                    <span className="text-[15px] text-dark-green/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-brand-green/20 bg-green-tint p-6 sm:p-8">
              <h3 className="text-[18px] font-bold text-dark-green">
                Not sure about your county&apos;s limits?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/60">
                Income and purchase price limits vary significantly across
                Florida&apos;s 67 counties. Our team can look up your exact
                limits in minutes and tell you which programs you qualify for —
                at no cost and with no obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grants Table */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">Grants</span> &amp; Down Payment
            Assistance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            These are the top programs Florida first-time buyers use to reduce
            or eliminate out-of-pocket closing costs.
          </p>
          <div className="mt-10">
            <DataTable
              headers={grantsHeaders}
              rows={grantsRows}
              caption="Florida first-time home buyer grants and assistance programs"
            />
          </div>
        </div>
      </section>

      {/* Homebuyer Education */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              <span className="text-brand-green">Homebuyer</span> Education
              Course
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-dark-green/60">
              Most Florida assistance programs require a HUD-approved homebuyer
              education course. The good news: it&apos;s easier than you think.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                title: "Online & Self-Paced",
                description:
                  "Complete the course from home in just a few hours. Available 24/7 through HUD-approved providers.",
              },
              {
                title: "Low or No Cost",
                description:
                  "Most online courses cost $0–$100. Some providers offer free courses for buyers using certain assistance programs.",
              },
              {
                title: "Valid for 12 Months",
                description:
                  "Your certificate is good for one year, giving you plenty of time to find and close on your home.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border-gray/60 bg-green-tint p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
              >
                <h3 className="text-[17px] font-bold text-dark-green">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} bg="green-tint" />

      {/* CTA */}
      <PageCTA
        heading="Ready to Buy Your First Florida Home?"
        subtitle="See every program you qualify for — in minutes, with no credit pull."
      />
    </>
  );
}
