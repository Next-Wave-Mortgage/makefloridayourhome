import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Florida Mortgage Calculators — Affordability, Payments & More",
  description:
    "Free Florida mortgage calculators. Estimate your home affordability, monthly payment, closing costs, and down payment assistance savings.",
  openGraph: {
    title: "Florida Mortgage Calculators — Affordability, Payments & More",
    description:
      "Free Florida mortgage calculators. Estimate your home affordability, monthly payment, closing costs, and DPA savings.",
    url: "https://www.makefloridayourhome.com/calculators",
    type: "website",
  },
  alternates: {
    canonical: "/calculators",
  },
};

export default function CalculatorsPage() {
  const calculators = [
    {
      title: "Florida Down Payment Assistance Calculator",
      description:
        "Find DPA programs that may match your county, buyer profile, income, purchase price, and loan type.",
      href: "/florida-down-payment-assistance-calculator",
      label: "New",
    },
    {
      title: "Florida Home Affordability Calculator",
      description:
        "Estimate your max home price, monthly payment, and Florida-specific cost breakdown.",
      href: "/home-affordability-calculator",
      label: "Popular",
    },
  ];

  return (
    <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-green">
            Florida mortgage tools
          </p>
          <h1 className="mt-3 text-[36px] font-black leading-tight text-dark-green sm:text-[48px]">
            Mortgage Calculators
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-dark-green/60">
            Estimate affordability, compare assistance options, and get closer
            to a realistic Florida homebuying plan.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="group rounded-lg border border-border-gray/70 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all hover:border-brand-green/30 hover:shadow-[0_8px_34px_rgba(0,105,72,0.1)]"
            >
              <span className="inline-flex rounded-full bg-green-tint px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-green">
                {calculator.label}
              </span>
              <h2 className="mt-4 text-[24px] font-black leading-tight text-dark-green">
                {calculator.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/60">
                {calculator.description}
              </p>
              <span className="mt-6 inline-flex text-[14px] font-bold text-brand-green transition-transform group-hover:translate-x-1">
                Open calculator
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
