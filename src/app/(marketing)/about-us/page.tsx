import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Make Florida Your Home",
  description:
    "Next Wave Mortgage is committed to finding the best rates and loan options for Florida homebuyers. Your trusted mortgage partner.",
  openGraph: {
    title: "About Us | Make Florida Your Home",
    description:
      "Next Wave Mortgage is committed to finding the best rates and loan options for Florida homebuyers.",
    url: "https://www.makefloridayourhome.com/about-us",
    type: "website",
  },
  alternates: {
    canonical: "/about-us",
  },
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Transparency",
    body: "No hidden fees, no surprises. We walk you through every detail so you always know exactly where you stand.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Speed",
    body: "Some of the fastest turn times in the industry. We move quickly so you never miss an opportunity.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Personal Service",
    body: "From application to closing and beyond, you work with real people who know your file inside and out.",
  },
];

const stats = [
  { number: "59K+", label: "Contacts Helped" },
  { number: "50+", label: "Florida Programs" },
  { number: "4.9", label: "Google Rating" },
];

const CALENDAR_URL = "/eligibility/schedule-a-free-call";

export default function AboutUsPage() {
  return (
    <>
      {/* Header banner */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            <span className="text-brand-green">About</span> Us
          </h1>
          <p className="mt-3 text-[17px] text-dark-green/60">
            Your Trusted Mortgage Partner
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[26px] font-bold leading-snug text-dark-green sm:text-[32px]">
              More than a lender —{" "}
              <span className="text-brand-green">
                your mortgage advisor
              </span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px]">
              At Next Wave Mortgage, we are committed to finding the best rates
              and loan options for our clients. We provide personalized service
              at every step of the loan process, from application to closing and
              beyond.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[36px] font-bold text-brand-green sm:text-[44px]">
                  {stat.number}
                </p>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-dark-green/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="text-center text-[26px] font-bold text-dark-green sm:text-[32px]">
            What sets us <span className="text-brand-green">apart</span>
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border-gray/60 bg-white px-6 py-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <span className="text-brand-green">{v.icon}</span>
                <h3 className="mt-4 text-[17px] font-bold text-dark-green">
                  {v.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/55">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization callout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-brand-green/20 bg-green-tint px-8 py-8 text-center sm:px-12">
            <h3 className="text-[20px] font-bold text-dark-green sm:text-[24px]">
              Florida <span className="text-brand-green">specialists</span>
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-dark-green/60 sm:text-[16px]">
              Our team specializes in Florida&apos;s{" "}
              <Link
                href="/first-time-home-buyer"
                className="font-semibold text-brand-green underline underline-offset-2 hover:text-dark-green transition-colors"
              >
                first-time homebuyer
              </Link>{" "}
              and{" "}
              <Link
                href="/down-payment-assistance"
                className="font-semibold text-brand-green underline underline-offset-2 hover:text-dark-green transition-colors"
              >
                down payment assistance
              </Link>{" "}
              programs. We know which options stack and how to structure your
              loan for the biggest savings.
            </p>
            <Link
              href="/home-purchase-eligibility"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Check Your Eligibility
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-green"
              >
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
              <strong className="text-dark-green">
                free 15-minute consult
              </strong>{" "}
              with a Florida mortgage expert.
            </p>
            <Link
              href={CALENDAR_URL}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Schedule Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
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
