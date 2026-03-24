import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const features: {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    title: "First-Time Homebuyer Programs",
    description:
      "Grants, loans, and assistance designed for new Florida buyers",
    href: "/first-time-home-buyer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Down Payment Assistance",
    description: "Programs that cover part or all of your down payment",
    href: "/down-payment-assistance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
    title: "Hometown Heroes Program",
    description: "Up to $35,000 in aid for qualifying Florida professionals",
    href: "/hometown-heroes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Home Loan Programs",
    description: "Compare FHA, VA, USDA, and conventional loan options",
    href: "/home-loan",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M13 7h5" />
        <path d="M13 11h5" />
        <path d="M13 15h3" />
      </svg>
    ),
  },
  {
    title: "Affordability Calculator",
    description: "Estimate your budget and monthly payments in minutes",
    href: "/home-affordability-calculator",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="10" y2="18" />
        <line x1="14" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    title: "County Program Guides",
    description: "Find assistance specific to your Florida county",
    href: "/florida-down-payment-assistance-interactive-map",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
  {
    title: "Local Expert Support",
    description: "Connect with mortgage specialists who know your area",
    href: "/eligibility/schedule-a-free-call",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Step-by-Step Buying Guides",
    description: "Clear guides from pre-approval to closing day",
    href: "/learn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Income & Price Limit Lookups",
    description: "Check income caps and purchase price limits by county",
    href: "/learn/florida-housing-income-purchase-price-limits",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
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
);

export function WhatWeDo() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            What <span className="text-brand-green">Does</span> Make Florida
            Your Home Do?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
            We guide first-time buyers through every step — from finding
            programs to closing day.
          </p>
        </div>

        {/* Mission card — dark green with Ryan's photo */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-brand-green shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
            {/* Text */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:py-12 lg:pr-4 lg:pl-12">
              <p className="text-[16px] leading-relaxed text-white/80 sm:text-[17px]">
                Make Florida Your Home is your trusted guide to buying your
                first home in Florida.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-white/80 sm:text-[17px]">
                We don&apos;t sell homes—we help you unlock every dollar of down
                payment assistance, find the{" "}
                <strong className="text-white">
                  best loan for your situation
                </strong>
                , and connect with local experts who know your county programs
                inside and out.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-white/80 sm:text-[17px]">
                Our mission:{" "}
                <strong className="text-white">
                  simplify the process, save you money
                </strong>
                , and turn first-time buyers into Florida homeowners.
              </p>
              <Link
                href="/home-purchase-eligibility"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-brand-green transition-all duration-300 hover:bg-brand-green hover:text-white hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              >
                See What You Qualify For
                <ArrowIcon />
              </Link>
            </div>

            {/* Ryan's photo card */}
            <div className="relative mx-auto flex w-[280px] items-end justify-center px-6 pt-6 lg:mx-0 lg:w-[340px] lg:px-8 lg:pt-8 lg:pr-8">
              <div className="relative z-[1] overflow-hidden rounded-t-2xl bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.2)]">
                <Image
                  src="/images/ryan-skerritt-florida-mortgage-expert.webp"
                  alt="Ryan Skerritt — Florida Mortgage Expert"
                  width={457}
                  height={600}
                  priority
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, i) => {
            const isFeatured = i < 3;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className={`group relative flex items-start gap-4 overflow-hidden rounded-xl border-l-[3px] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-brand-green hover:shadow-[0_8px_32px_rgba(0,105,72,0.12)] ${
                  isFeatured
                    ? "border-l-brand-green bg-green-tint/50 shadow-[0_2px_8px_rgba(0,105,72,0.06)] hover:bg-green-tint/70"
                    : "border-l-brand-green/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:bg-green-tint/40"
                }`}
              >
                {/* Background number */}
                <span
                  className={`pointer-events-none absolute -top-1 right-3 select-none text-[56px] font-black leading-none transition-colors duration-300 ${
                    isFeatured
                      ? "text-brand-green/[0.06] group-hover:text-brand-green/[0.10]"
                      : "text-brand-green/[0.03] group-hover:text-brand-green/[0.07]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                    isFeatured
                      ? "bg-brand-green text-white shadow-[0_4px_12px_rgba(0,105,72,0.25)] group-hover:shadow-[0_4px_16px_rgba(0,105,72,0.35)]"
                      : "bg-green-tint text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(0,105,72,0.25)]"
                  }`}
                >
                  {feature.icon}
                </div>

                <div className="relative">
                  <h3 className="text-[15px] font-bold leading-snug text-dark-green">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-dark-green/50">
                    {feature.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-green opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn More
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
