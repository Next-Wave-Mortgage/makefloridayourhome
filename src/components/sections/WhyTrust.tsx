import Image from "next/image";
import Link from "next/link";

import type { ReactNode } from "react";

const valueProps: {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  featured?: boolean;
}[] = [
  {
    title: "Expertise",
    description: (
      <>
        Our team specializes in Florida&apos;s first-time homebuyer and down
        payment assistance programs. We know{" "}
        <strong className="text-brand-green">which options stack</strong> and how
        to structure your loan for the biggest savings.
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "Savings",
    featured: true,
    description: (
      <>
        From state grants to local SHIP funds and Hometown Heroes, we help you
        uncover every dollar of assistance you qualify for—often saving buyers{" "}
        <strong className="text-brand-green">$25,000 – $100,000</strong> at
        closing.
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Local Guidance",
    description: (
      <>
        We&apos;re Florida-based, working{" "}
        <strong className="text-brand-green">county by county</strong> to match
        you with programs actually available where you&apos;re buying—plus local
        lenders who know how to close them fast.
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function WhyTrust() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            Why Thousands of Floridians{" "}
            <span className="text-brand-green">Trust</span> Make Florida Your
            Home
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
            Proudly helping first-time buyers in every Florida county — from
            Miami-Dade to Duval, Hillsborough to Orange.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          {/* Left — Phil Ganz image */}
          <div className="relative mx-auto w-[320px] shrink-0">
            {/* Decorative green bracket — top-left */}
            <div className="absolute -top-3 -left-3 z-10 h-16 w-16 rounded-tl-2xl border-t-[3px] border-l-[3px] border-brand-green sm:-top-4 sm:-left-4 sm:h-20 sm:w-20" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/phil_ganz_florida_mortgage_expert.webp"
                alt="Phil Ganz — Florida Mortgage Expert"
                width={457}
                height={678}
                className="w-full object-cover"
              />

              {/* Name badge overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent px-6 pb-6 pt-20">
                <span className="inline-block rounded-md bg-brand-green px-4 py-1.5 text-[14px] font-bold text-white shadow-sm">
                  Phil Ganz
                </span>
                <p className="mt-1.5 text-[13px] font-medium text-white/70">
                  Florida Mortgage Expert
                </p>
              </div>
            </div>

            {/* Decorative green bracket — bottom-right */}
            <div className="absolute -right-3 -bottom-3 h-16 w-16 rounded-br-2xl border-r-[3px] border-b-[3px] border-brand-green/40 sm:-right-4 sm:-bottom-4 sm:h-20 sm:w-20" />
          </div>

          {/* Right — Value propositions */}
          <div className="space-y-4">
            {valueProps.map((prop, i) => (
              <div
                key={prop.title}
                className={`group relative overflow-hidden rounded-xl border-l-[3px] py-5 pr-5 pl-6 transition-all duration-300 hover:border-l-brand-green hover:shadow-[0_4px_24px_rgba(0,105,72,0.08)] sm:py-6 sm:pr-6 sm:pl-7 ${
                  prop.featured
                    ? "border-l-brand-green bg-green-tint/50 shadow-[0_2px_8px_rgba(0,105,72,0.06)] hover:bg-green-tint/70"
                    : "border-l-brand-green/25 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:bg-green-tint/40"
                }`}
              >
                {/* Large background number */}
                <span
                  className={`pointer-events-none absolute -top-1 right-4 select-none text-[72px] font-black leading-none transition-colors duration-300 sm:text-[80px] ${
                    prop.featured
                      ? "text-brand-green/[0.06] group-hover:text-brand-green/[0.10]"
                      : "text-brand-green/[0.03] group-hover:text-brand-green/[0.07]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      prop.featured
                        ? "bg-brand-green text-white shadow-[0_4px_12px_rgba(0,105,72,0.25)] group-hover:shadow-[0_4px_16px_rgba(0,105,72,0.35)]"
                        : "bg-green-tint text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(0,105,72,0.25)]"
                    }`}
                  >
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-dark-green">
                      {prop.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-dark-green/55 sm:text-[15px]">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-brand-green/10 bg-green-tint/60 px-8 py-7 sm:flex-row sm:justify-between sm:py-6">
          <div>
            <h3 className="text-center text-[20px] font-bold text-dark-green sm:text-left sm:text-[22px]">
              Talk to a Florida Mortgage Expert
            </h3>
            <p className="mt-1 text-center text-[14px] text-dark-green/50 sm:text-left">
              Free consultation — no obligation, no credit pull
            </p>
          </div>
          <Link
            href="/schedule-a-free-call-today"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
          >
            Schedule a Call
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
  );
}
