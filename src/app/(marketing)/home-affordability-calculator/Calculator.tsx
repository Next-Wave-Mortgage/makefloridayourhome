"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtShort(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return fmt(n);
}

export function Calculator() {
  const [income, setIncome] = useState(70_000);
  const [downPayment, setDownPayment] = useState(20_000);
  const [debts, setDebts] = useState(500);
  const [rate, setRate] = useState(6.18);
  const [term, setTerm] = useState<30 | 15>(30);

  const calc = useMemo(() => {
    const monthlyIncome = income / 12;
    const maxHousing = monthlyIncome * 0.28;
    const availableForMortgage = Math.max(maxHousing - debts * 0.1, maxHousing * 0.7);

    // Estimate taxes + insurance first to find what's left for P&I
    // We iterate: guess home price, compute taxes/ins, compute P&I budget, compute home price
    const monthlyRate = rate / 100 / 12;
    const payments = term * 12;

    // Monthly insurance estimate (Florida avg)
    const insurance = 200;

    // Iterative solver
    let homePrice = 250_000;
    for (let i = 0; i < 20; i++) {
      const taxes = (homePrice * 0.01) / 12;
      const pmi = downPayment / homePrice < 0.2 ? (homePrice - downPayment) * 0.005 / 12 : 0;
      const piTarget = maxHousing - taxes - insurance - pmi;
      if (piTarget <= 0) {
        homePrice = downPayment;
        break;
      }
      const loanAmount =
        monthlyRate > 0
          ? (piTarget * (1 - Math.pow(1 + monthlyRate, -payments))) / monthlyRate
          : piTarget * payments;
      homePrice = loanAmount + downPayment;
    }

    homePrice = Math.max(homePrice, 0);
    const loanAmount = Math.max(homePrice - downPayment, 0);
    const taxes = (homePrice * 0.01) / 12;
    const pmi = downPayment / homePrice < 0.2 ? loanAmount * 0.005 / 12 : 0;
    const pi =
      monthlyRate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, payments)) /
          (Math.pow(1 + monthlyRate, payments) - 1)
        : loanAmount / payments;

    const totalMonthly = pi + taxes + insurance + pmi;

    return {
      homePrice: Math.round(homePrice),
      monthlyPayment: Math.round(totalMonthly),
      pi: Math.round(pi),
      taxes: Math.round(taxes),
      insurance: Math.round(insurance),
      pmi: Math.round(pmi),
      loanAmount: Math.round(loanAmount),
    };
  }, [income, downPayment, debts, rate, term]);

  // Donut chart
  const segments = [
    { label: "Principal & Interest", value: calc.pi, color: "#006948" },
    { label: "Property Taxes", value: calc.taxes, color: "#00BDA5" },
    { label: "Home Insurance", value: calc.insurance, color: "#2E4136" },
    ...(calc.pmi > 0
      ? [{ label: "PMI", value: calc.pmi, color: "#ABACAC" }]
      : []),
  ];
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let cumulative = 0;
  const gradientStops = segments
    .map((seg) => {
      const start = (cumulative / total) * 100;
      cumulative += seg.value;
      const end = (cumulative / total) * 100;
      return `${seg.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
        {/* Inputs */}
        <div className="space-y-8">
          {/* Income */}
          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <label className="text-[14px] font-semibold text-dark-green">
                Annual Income
              </label>
              <span className="text-[22px] font-bold text-brand-green">
                {fmt(income)}
              </span>
            </div>
            <input
              type="range"
              min={20000}
              max={500000}
              step={5000}
              value={income}
              onChange={(e) => setIncome(+e.target.value)}
              className="slider w-full"
            />
            <div className="mt-1 flex justify-between text-[11px] text-mid-gray">
              <span>$20K</span>
              <span>$500K</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <label className="text-[14px] font-semibold text-dark-green">
                Down Payment
              </label>
              <span className="text-[22px] font-bold text-brand-green">
                {fmt(downPayment)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={200000}
              step={2500}
              value={downPayment}
              onChange={(e) => setDownPayment(+e.target.value)}
              className="slider w-full"
            />
            <div className="mt-1 flex justify-between text-[11px] text-mid-gray">
              <span>$0</span>
              <span>$200K</span>
            </div>
          </div>

          {/* Monthly Debts */}
          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <label className="text-[14px] font-semibold text-dark-green">
                Monthly Debts
              </label>
              <span className="text-[22px] font-bold text-brand-green">
                {fmt(debts)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={5000}
              step={50}
              value={debts}
              onChange={(e) => setDebts(+e.target.value)}
              className="slider w-full"
            />
            <div className="mt-1 flex justify-between text-[11px] text-mid-gray">
              <span>$0</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <label className="text-[14px] font-semibold text-dark-green">
                Interest Rate
              </label>
              <span className="text-[22px] font-bold text-brand-green">
                {rate.toFixed(2)}%
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={10}
              step={0.05}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="slider w-full"
            />
            <div className="mt-1 flex justify-between text-[11px] text-mid-gray">
              <span>2.00%</span>
              <span>10.00%</span>
            </div>
          </div>

          {/* Loan Term Toggle */}
          <div>
            <label className="mb-3 block text-[14px] font-semibold text-dark-green">
              Loan Term
            </label>
            <div className="inline-flex rounded-full border-2 border-border-gray/60 p-1">
              <button
                type="button"
                onClick={() => setTerm(30)}
                className={`rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-200 ${
                  term === 30
                    ? "bg-dark-green text-white shadow-sm"
                    : "text-dark-green/50 hover:text-dark-green"
                }`}
              >
                30 years
              </button>
              <button
                type="button"
                onClick={() => setTerm(15)}
                className={`rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-200 ${
                  term === 15
                    ? "bg-dark-green text-white shadow-sm"
                    : "text-dark-green/50 hover:text-dark-green"
                }`}
              >
                15 years
              </button>
            </div>
          </div>
        </div>

        {/* Results card */}
        <div className="lg:sticky lg:top-8">
          <div className="rounded-2xl border border-border-gray/60 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-[12px] font-bold uppercase tracking-wider text-dark-green/40">
              You can afford
            </p>
            <p className="mt-2 text-[42px] font-bold leading-none text-dark-green transition-all duration-300">
              {fmt(calc.homePrice)}
            </p>
            <p className="mt-2 text-[15px] text-dark-green/50">
              with a monthly payment of{" "}
              <span className="font-bold text-brand-green">
                {fmt(calc.monthlyPayment)}/mo
              </span>
            </p>

            {/* Donut */}
            <div className="mt-8 flex items-center gap-6">
              <div
                className="h-32 w-32 shrink-0 rounded-full transition-all duration-500"
                style={{
                  background: `conic-gradient(${gradientStops})`,
                  mask: "radial-gradient(circle at center, transparent 42%, black 43%)",
                  WebkitMask:
                    "radial-gradient(circle at center, transparent 42%, black 43%)",
                }}
              />
              <div className="space-y-2.5">
                {segments.map((seg) => (
                  <div key={seg.label} className="flex items-center gap-2.5">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: seg.color }}
                    />
                    <div>
                      <p className="text-[12px] text-dark-green/50">
                        {seg.label}
                      </p>
                      <p className="text-[14px] font-bold text-dark-green">
                        {fmt(seg.value)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan details */}
            <div className="mt-8 space-y-3 border-t border-border-gray/40 pt-6">
              <div className="flex justify-between text-[14px]">
                <span className="text-dark-green/50">Loan Amount</span>
                <span className="font-semibold text-dark-green">
                  {fmt(calc.loanAmount)}
                </span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-dark-green/50">Down Payment</span>
                <span className="font-semibold text-dark-green">
                  {fmt(downPayment)}{" "}
                  <span className="text-[12px] text-dark-green/40">
                    ({calc.homePrice > 0 ? Math.round((downPayment / calc.homePrice) * 100) : 0}%)
                  </span>
                </span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-dark-green/50">Loan Term</span>
                <span className="font-semibold text-dark-green">
                  {term} years
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/home-purchase-eligibility"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              >
                Check Your Eligibility
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/schedule-a-free-call-today"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-green/20 px-6 py-3.5 text-[14px] font-bold text-brand-green transition-all hover:bg-brand-green/5"
              >
                Schedule a Free Call
              </Link>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] leading-relaxed text-dark-green/30">
            Estimates based on 28% DTI rule. Florida property tax at 1.0%,
            insurance at $200/mo avg. Actual amounts may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
