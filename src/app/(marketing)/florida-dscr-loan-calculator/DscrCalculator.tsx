"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FLORIDA_COUNTIES,
  INSURANCE_TIER_RATES,
  INSURANCE_TIER_LABELS,
  FLOOD_ZONE_ANNUAL_DEFAULT,
} from "@/data/dscr/florida-counties";

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtShort(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return fmt(n);
}

function tierForDscr(dscr: number) {
  if (dscr >= 1.25)
    return {
      label: "Strong — best pricing territory",
      color: "#2FBE8F",
      note: "1.25+ typically earns the best DSCR rates and terms.",
    };
  if (dscr >= 1.0)
    return {
      label: "Qualifies with most programs",
      color: "#FFB800",
      note: "The rent covers the payment — most programs approve at 1.0+.",
    };
  if (dscr >= 0.75)
    return {
      label: "Below 1.0 — more down likely",
      color: "#F87171",
      note: "Sub-1.0 programs exist with a larger down payment and higher rate.",
    };
  return {
    label: "Unlikely to qualify as structured",
    color: "#F87171",
    note: "Try a lower price, more down, or a higher-rent strategy.",
  };
}

/* Compact labeled slider */
function SliderRow({
  label,
  display,
  min,
  max,
  step,
  value,
  onChange,
  hint,
}: {
  label: string;
  display: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[13px] font-semibold text-dark-green/70">
          {label}
          {hint ? (
            <span className="ml-1.5 font-normal text-dark-green/35">{hint}</span>
          ) : null}
        </label>
        <span className="text-[16px] font-bold text-dark-green">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="slider mt-1.5 w-full"
      />
    </div>
  );
}

/* Compact pill toggle */
function Pills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex w-full rounded-full border border-border-gray/70 bg-white p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`flex-1 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-bold transition-all duration-200 ${
            value === o.value
              ? "bg-dark-green text-white shadow-sm"
              : "text-dark-green/45 hover:text-dark-green"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function DscrCalculator() {
  const [countyName, setCountyName] = useState("Orange");
  const [price, setPrice] = useState(350_000);
  const [downPct, setDownPct] = useState(25);
  const [rate, setRate] = useState(7.5);
  const [interestOnly, setInterestOnly] = useState(false);
  const [rentalType, setRentalType] = useState<"ltr" | "str">("ltr");
  const [monthlyRent, setMonthlyRent] = useState(2_600);
  const [nightlyRate, setNightlyRate] = useState(180);
  const [occupancy, setOccupancy] = useState(65);
  const [hoa, setHoa] = useState(0);
  const [floodZone, setFloodZone] = useState(false);
  const [insuranceOverride, setInsuranceOverride] = useState<number | null>(null);

  const county =
    FLORIDA_COUNTIES.find((c) => c.name === countyName) ?? FLORIDA_COUNTIES[0];

  const calc = useMemo(() => {
    const loanAmount = price * (1 - downPct / 100);
    const monthlyRate = rate / 100 / 12;

    const pi = interestOnly
      ? loanAmount * monthlyRate
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, 360)) /
        (Math.pow(1 + monthlyRate, 360) - 1);

    const annualTaxes = (price / 1000) * county.millage;
    const taxes = annualTaxes / 12;

    const autoAnnualInsurance =
      ((price * 0.7) / 1000) * INSURANCE_TIER_RATES[county.insuranceTier] +
      (floodZone ? FLOOD_ZONE_ANNUAL_DEFAULT : 0);
    const annualInsurance = insuranceOverride ?? Math.round(autoAnnualInsurance);
    const insurance = annualInsurance / 12;

    const pitia = pi + taxes + insurance + hoa;

    const strGross = (nightlyRate * 365 * (occupancy / 100)) / 12;
    const rent = rentalType === "ltr" ? monthlyRent : strGross * 0.8;

    const dscr = pitia > 0 ? rent / pitia : 0;

    return {
      loanAmount: Math.round(loanAmount),
      pi: Math.round(pi),
      taxes: Math.round(taxes),
      annualTaxes: Math.round(annualTaxes),
      insurance: Math.round(insurance),
      annualInsurance: Math.round(annualInsurance),
      autoAnnualInsurance: Math.round(autoAnnualInsurance),
      pitia: Math.round(pitia),
      rent: Math.round(rent),
      strGross: Math.round(strGross),
      dscr,
      cashFlow: Math.round(rent - pitia),
      rentFor125: Math.round(pitia * 1.25),
      rentFor100: Math.round(pitia),
    };
  }, [price, downPct, rate, interestOnly, county, hoa, floodZone, insuranceOverride, rentalType, monthlyRent, nightlyRate, occupancy]);

  const tier = tierForDscr(calc.dscr);
  const gaugePct = Math.min(calc.dscr / 1.6, 1) * 100;

  return (
    <div className="overflow-hidden rounded-3xl border border-border-gray/50 bg-white shadow-[0_20px_60px_rgba(0,40,28,0.14)]">
      <div className="grid lg:grid-cols-[1.35fr_1fr]">
        {/* ------------------------------ Inputs ------------------------------ */}
        <div className="p-6 sm:p-8">
          {/* Row 1: county + strategy */}
          <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="dscr-county"
                  className="text-[13px] font-semibold text-dark-green/70"
                >
                  Florida County
                </label>
                <span className="text-[11px] font-semibold text-brand-green">
                  {county.millage.toFixed(2)} mills ·{" "}
                  {INSURANCE_TIER_LABELS[county.insuranceTier]}
                </span>
              </div>
              <select
                id="dscr-county"
                value={countyName}
                onChange={(e) => {
                  setCountyName(e.target.value);
                  setInsuranceOverride(null);
                }}
                className="mt-1.5 w-full rounded-xl border border-border-gray/70 bg-white px-3.5 py-2.5 text-[14px] font-semibold text-dark-green focus:border-brand-green focus:outline-none"
              >
                {FLORIDA_COUNTIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[13px] font-semibold text-dark-green/70">
                Rental Strategy
              </label>
              <div className="mt-1.5">
                <Pills
                  options={[
                    { value: "ltr" as const, label: "Long-term" },
                    { value: "str" as const, label: "Airbnb / STR" },
                  ]}
                  value={rentalType}
                  onChange={setRentalType}
                />
              </div>
            </div>
          </div>

          {/* Row 2: price + down */}
          <div className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <SliderRow
              label="Purchase Price"
              display={fmtShort(price)}
              min={75_000}
              max={2_000_000}
              step={5_000}
              value={price}
              onChange={(v) => {
                setPrice(v);
                setInsuranceOverride(null);
              }}
            />
            <SliderRow
              label="Down Payment"
              display={`${downPct}% · ${fmtShort(price * (downPct / 100))}`}
              min={15}
              max={50}
              step={1}
              value={downPct}
              onChange={setDownPct}
            />
            <SliderRow
              label="Interest Rate"
              display={`${rate.toFixed(2)}%`}
              min={5}
              max={11}
              step={0.125}
              value={rate}
              onChange={setRate}
            />
            <div>
              <label className="text-[13px] font-semibold text-dark-green/70">
                Payment Type
                <span className="ml-1.5 font-normal text-dark-green/35">
                  IO raises your ratio
                </span>
              </label>
              <div className="mt-1.5">
                <Pills
                  options={[
                    { value: "fixed" as const, label: "30-yr fixed" },
                    { value: "io" as const, label: "Interest-only" },
                  ]}
                  value={interestOnly ? "io" : "fixed"}
                  onChange={(v) => setInterestOnly(v === "io")}
                />
              </div>
            </div>
          </div>

          {/* Row 3: income */}
          <div className="mt-5 rounded-2xl bg-green-tint/70 p-4">
            {rentalType === "ltr" ? (
              <SliderRow
                label="Monthly Rent"
                hint="lender uses lease or appraiser market rent"
                display={fmt(monthlyRent)}
                min={500}
                max={15_000}
                step={50}
                value={monthlyRent}
                onChange={setMonthlyRent}
              />
            ) : (
              <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                <SliderRow
                  label="Avg. Nightly Rate"
                  display={fmt(nightlyRate)}
                  min={50}
                  max={1_000}
                  step={5}
                  value={nightlyRate}
                  onChange={setNightlyRate}
                />
                <SliderRow
                  label="Occupancy"
                  hint={`gross ${fmt(calc.strGross)} → 80% credited`}
                  display={`${occupancy}%`}
                  min={20}
                  max={95}
                  step={1}
                  value={occupancy}
                  onChange={setOccupancy}
                />
              </div>
            )}
          </div>

          {/* Row 4: costs */}
          <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-3">
            <SliderRow
              label="HOA Dues"
              display={`${fmt(hoa)}/mo`}
              min={0}
              max={1_500}
              step={25}
              value={hoa}
              onChange={setHoa}
            />
            <div>
              <label className="text-[13px] font-semibold text-dark-green/70">
                Flood Zone
              </label>
              <div className="mt-1.5">
                <Pills
                  options={[
                    { value: "no" as const, label: "No" },
                    { value: "yes" as const, label: "Yes" },
                  ]}
                  value={floodZone ? "yes" : "no"}
                  onChange={(v) => {
                    setFloodZone(v === "yes");
                    setInsuranceOverride(null);
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="dscr-insurance"
                className="text-[13px] font-semibold text-dark-green/70"
              >
                Insurance /yr
                <span className="ml-1.5 font-normal text-dark-green/35">
                  edit if quoted
                </span>
              </label>
              <input
                id="dscr-insurance"
                type="number"
                min={0}
                step={100}
                value={calc.annualInsurance}
                onChange={(e) =>
                  setInsuranceOverride(e.target.value === "" ? null : +e.target.value)
                }
                className="mt-1.5 w-full rounded-xl border border-border-gray/70 bg-white px-3.5 py-2 text-[14px] font-semibold text-dark-green focus:border-brand-green focus:outline-none"
              />
            </div>
          </div>

          <p className="mt-5 text-[11px] leading-relaxed text-dark-green/35">
            {county.name} County taxes at {county.millage.toFixed(2)} mills on
            full purchase price (no homestead exemption for investors) — est.{" "}
            {fmt(calc.annualTaxes)}/yr. Insurance is a 2026 regional estimate;
            replace with your quote. Sources: Florida TaxWatch 2025 millage,
            Florida insurance market reports. Estimates only — not a loan offer.
          </p>
        </div>

        {/* ------------------------------ Results ------------------------------ */}
        <div className="flex flex-col justify-between bg-dark-green p-6 text-white sm:p-8">
          <div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Your DSCR
                </p>
                <p
                  className="dscr-glow mt-1 text-[52px] font-bold leading-none text-green-tint"
                  style={{ "--glow-color": tier.color } as React.CSSProperties}
                >
                  {calc.dscr.toFixed(2)}
                </p>
              </div>
              <div className="pb-1 text-right">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Cash Flow
                </p>
                <p
                  className={`mt-1 text-[22px] font-bold leading-none ${
                    calc.cashFlow >= 0 ? "text-white" : "text-white/60"
                  }`}
                >
                  {calc.cashFlow >= 0 ? "+" : "−"}
                  {fmt(Math.abs(calc.cashFlow))}
                  <span className="text-[13px] font-semibold text-white/40">/mo</span>
                </p>
              </div>
            </div>

            {/* Gauge */}
            <div className="mt-4">
              <div className="relative h-2 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${gaugePct}%`, backgroundColor: tier.color }}
                />
                {/* 1.0 and 1.25 markers */}
                <span className="absolute top-0 h-full w-px bg-white/50" style={{ left: `${(1.0 / 1.6) * 100}%` }} />
                <span className="absolute top-0 h-full w-px bg-white/50" style={{ left: `${(1.25 / 1.6) * 100}%` }} />
              </div>
              <div className="relative mt-1 h-4 text-[10px] font-semibold text-white/40">
                <span className="absolute -translate-x-1/2" style={{ left: `${(1.0 / 1.6) * 100}%` }}>1.0</span>
                <span className="absolute -translate-x-1/2" style={{ left: `${(1.25 / 1.6) * 100}%` }}>1.25</span>
              </div>
              <p className="mt-1 text-[13px] font-bold" style={{ color: tier.color }}>
                {tier.label}
              </p>
              <p className="mt-0.5 text-[12px] leading-relaxed text-white/50">
                {tier.note}
              </p>
            </div>

            {/* Breakdown */}
            <div className="mt-5 space-y-1.5 rounded-2xl bg-white/[0.07] p-4 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Qualifying rent</span>
                <span className="font-bold">{fmt(calc.rent)}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Principal &amp; interest</span>
                <span className="font-semibold text-white/85">{fmt(calc.pi)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Taxes ({county.name})</span>
                <span className="font-semibold text-white/85">{fmt(calc.taxes)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Insurance</span>
                <span className="font-semibold text-white/85">{fmt(calc.insurance)}</span>
              </div>
              {hoa > 0 ? (
                <div className="flex justify-between">
                  <span className="text-white/50">HOA</span>
                  <span className="font-semibold text-white/85">{fmt(hoa)}</span>
                </div>
              ) : null}
              <div className="flex justify-between border-t border-white/15 pt-1.5">
                <span className="font-semibold text-white/70">Total PITIA</span>
                <span className="font-bold">{fmt(calc.pitia)}/mo</span>
              </div>
            </div>

            {/* Targets */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-white/[0.07] px-3 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                  Rent for 1.0
                </p>
                <p className="mt-0.5 text-[15px] font-bold">{fmt(calc.rentFor100)}</p>
              </div>
              <div className="rounded-xl bg-white/[0.07] px-3 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                  Rent for 1.25
                </p>
                <p className="mt-0.5 text-[15px] font-bold">{fmt(calc.rentFor125)}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/check-non-qm-loan-eligibility"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-dark-green transition-all hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
            >
              Check DSCR Loan Eligibility
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <p className="mt-2.5 text-center text-[11px] text-white/35">
              No tax returns · no credit pull · loan amount {fmt(calc.loanAmount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
