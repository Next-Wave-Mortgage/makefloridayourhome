"use client";

import { useMemo, useState } from "react";
import { FLORIDA_COUNTIES } from "@/data/dscr/florida-counties";

// Florida disabled veteran property tax savings estimate.
//
// Millage is each county's AVERAGE total millage (Florida TaxWatch 2025), so
// results are estimates; real bills vary by city and taxing district.
//
// Standard homestead (s. 196.031): first $25,000 off all levies, plus a second
// exemption on assessed value above $50,000 for non-school levies, indexed for
// inflation since 2025 ($26,411 for 2026, for a $51,411 non-school total).
// Update HOMESTEAD_SECOND each year. We apply both against total millage, which
// slightly understates the homestead tax and therefore keeps savings
// conservative.
//
// Veteran benefits:
// - "partial": $5,000 off assessed value (s. 196.24, rating of 10% or more).
// - "total": full exemption from ad valorem taxes (s. 196.081 permanent and
//   total, or s. 196.091 wheelchair-bound).
// - "combat65": $5,000 (s. 196.24), then a discount equal to the disability
//   percentage on the remaining value (s. 196.082(6) applies other exemptions
//   first).
//
// Prorated refund (s. 196.081(1)(b); DOR FAQ R. 08/2024): for a total
// exemption on a home acquired Jan 1–Nov 1, the share of that year's ad
// valorem taxes from the transfer date (counted) through Dec 31.

type Situation = "partial" | "total" | "combat65";

const SITUATIONS: { value: Situation; label: string }[] = [
  { value: "partial", label: "Rated 10%–90% (or 100%, not P&T)" },
  { value: "total", label: "100% permanent & total (P&T)" },
  { value: "combat65", label: "Age 65+, combat-related" },
];

const HOMESTEAD_FIRST = 25_000;
const HOMESTEAD_SECOND = 26_411;
const VETERAN_5K = 5_000;

// Illustrative rate for the buying-power line (Phil Ganz's Express Lane example).
const ILLUSTRATIVE_RATE = 0.065;

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

function homesteadTaxable(value: number) {
  const second = Math.min(Math.max(value - 50_000, 0), HOMESTEAD_SECOND);
  return Math.max(0, value - HOMESTEAD_FIRST - second);
}

// Proration ratio per DOR: days from the transfer date through Dec 31,
// counting the transfer date, over days in the year. Null when the date is
// outside Jan 1–Nov 1.
export function refundRatio(isoDate: string): number | null {
  const m = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const year = Number(m[1]);
  const day = Date.UTC(year, Number(m[2]) - 1, Number(m[3]));
  const nov1 = Date.UTC(year, 10, 1);
  const dec31 = Date.UTC(year, 11, 31);
  if (day > nov1) return null;
  const daysInYear = (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 86_400_000;
  const remaining = (dec31 - day) / 86_400_000 + 1;
  return remaining / daysInYear;
}

function todayIso() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function Field({
  label,
  htmlFor,
  aside,
  children,
}: {
  label: string;
  htmlFor?: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={htmlFor}
          className="text-[13px] font-semibold text-dark-green/70"
        >
          {label}
        </label>
        {aside ? (
          <span className="text-[11px] font-semibold text-brand-green">{aside}</span>
        ) : null}
      </div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border-gray/70 bg-white px-3.5 py-2.5 text-[14px] font-semibold text-dark-green focus:border-brand-green focus:outline-none";

export function VeteranTaxSavingsCalculator() {
  const [countyName, setCountyName] = useState("Hillsborough");
  const [value, setValue] = useState(400_000);
  const [situation, setSituation] = useState<Situation>("total");
  const [rating, setRating] = useState(60);
  const [boughtThisYear, setBoughtThisYear] = useState(false);
  const [closingDate, setClosingDate] = useState(todayIso);

  const county =
    FLORIDA_COUNTIES.find((c) => c.name === countyName) ?? FLORIDA_COUNTIES[0];

  const calc = useMemo(() => {
    const rate = county.millage / 1000;
    const baseTaxable = homesteadTaxable(value);
    const homesteadTax = baseTaxable * rate;

    let yourTaxable = baseTaxable;
    if (situation === "total") yourTaxable = 0;
    if (situation === "partial") yourTaxable = Math.max(0, baseTaxable - VETERAN_5K);
    if (situation === "combat65") {
      yourTaxable = Math.max(0, baseTaxable - VETERAN_5K) * (1 - rating / 100);
    }
    const yourTax = yourTaxable * rate;
    const savings = homesteadTax - yourTax;

    const ratio =
      situation === "total" && boughtThisYear ? refundRatio(closingDate) : null;
    const refund = ratio === null ? null : homesteadTax * ratio;

    const r = ILLUSTRATIVE_RATE / 12;
    const buyingPower = (savings / 12) * ((1 - Math.pow(1 + r, -360)) / r);

    return {
      buyingPower: Math.round(buyingPower / 100) * 100,
      homesteadTax: Math.round(homesteadTax),
      yourTax: Math.round(yourTax),
      savings: Math.round(savings),
      monthly: Math.round(savings / 12),
      refund: refund === null ? null : Math.round(refund),
    };
  }, [county, value, situation, rating, boughtThisYear, closingDate]);

  const afterNov1 = situation === "total" && boughtThisYear && calc.refund === null;

  return (
    <div className="not-prose my-10 overflow-hidden rounded-3xl border border-border-gray/50 bg-white shadow-[0_20px_60px_rgba(0,40,28,0.14)]">
      <div className="grid lg:grid-cols-[1.25fr_1fr]">
        {/* Inputs */}
        <div className="space-y-5 p-6 sm:p-8">
          <p className="text-[18px] font-bold leading-snug text-dark-green">
            Florida Disabled Veteran Property Tax Savings Calculator
          </p>

          <Field
            label="Florida county"
            htmlFor="vet-county"
            aside={`${county.millage.toFixed(2)} mills avg.`}
          >
            <select
              id="vet-county"
              value={countyName}
              onChange={(e) => setCountyName(e.target.value)}
              className={inputClass}
            >
              {FLORIDA_COUNTIES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Home value" htmlFor="vet-value" aside={fmtShort(value)}>
            <input
              id="vet-value"
              type="range"
              min={100_000}
              max={1_500_000}
              step={5_000}
              value={value}
              onChange={(e) => setValue(+e.target.value)}
              className="slider w-full"
            />
          </Field>

          <Field label="Your situation" htmlFor="vet-situation">
            <select
              id="vet-situation"
              value={situation}
              onChange={(e) => setSituation(e.target.value as Situation)}
              className={inputClass}
            >
              {SITUATIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </Field>

          {situation === "combat65" ? (
            <Field label="Permanent disability rating" htmlFor="vet-rating" aside={`${rating}%`}>
              <input
                id="vet-rating"
                type="range"
                min={10}
                max={100}
                step={10}
                value={rating}
                onChange={(e) => setRating(+e.target.value)}
                className="slider w-full"
              />
            </Field>
          ) : null}

          {situation === "total" ? (
            <div className="rounded-2xl bg-green-tint/70 p-4">
              <label className="flex items-center gap-2.5 text-[13px] font-semibold text-dark-green/80">
                <input
                  type="checkbox"
                  checked={boughtThisYear}
                  onChange={(e) => setBoughtThisYear(e.target.checked)}
                  className="h-4 w-4 accent-brand-green"
                />
                I bought (or will close on) this home this year
              </label>
              {boughtThisYear ? (
                <div className="mt-3">
                  <Field label="Closing date" htmlFor="vet-closing">
                    <input
                      id="vet-closing"
                      type="date"
                      value={closingDate}
                      onChange={(e) => setClosingDate(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              ) : null}
            </div>
          ) : null}

          <p className="text-[11px] leading-relaxed text-dark-green/40">
            Estimates only. Uses {county.name} County&apos;s average total
            millage (Florida TaxWatch 2025) and the standard homestead
            exemption. Your actual bill depends on your city, taxing districts,
            and assessed value. Non-ad valorem charges such as solid waste and
            CDD fees are not included and are not exempt.
          </p>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-5 bg-brand-green p-6 text-white sm:p-8" aria-live="polite">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/45">
              Estimated yearly savings
            </p>
            <p className="mt-1 text-[48px] font-bold leading-none text-green-tint">
              {fmt(calc.savings)}
            </p>
            <p className="mt-2 text-[14px] text-white/60">
              About {fmt(calc.monthly)} a month
            </p>
          </div>

          <div className="space-y-2 rounded-2xl bg-white/[0.07] p-4 text-[13px]">
            <div className="flex justify-between gap-4">
              <span className="text-white/55">Tax with homestead only</span>
              <span className="font-semibold text-white/85">{fmt(calc.homesteadTax)}/yr</span>
            </div>
            <div className="flex justify-between gap-4 border-t border-white/15 pt-2">
              <span className="font-semibold text-white/75">Tax with your veteran benefit</span>
              <span className="font-bold">{fmt(calc.yourTax)}/yr</span>
            </div>
          </div>

          {calc.refund !== null ? (
            <div className="rounded-2xl bg-white/[0.07] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/45">
                Estimated prorated refund
              </p>
              <p className="mt-1 text-[24px] font-bold leading-none">{fmt(calc.refund)}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-white/55">
                Paid after your exemption is granted for next year. No separate
                refund application is needed.
              </p>
            </div>
          ) : null}

          {situation === "total" && boughtThisYear ? (
            <div className="rounded-2xl bg-white/[0.12] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                Potential mortgage buying power
              </p>
              <p className="mt-1 text-[24px] font-bold leading-none">
                ~{fmt(calc.buyingPower)}
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-white/65">
                If the lender recognizes your exemption, {fmt(calc.monthly)} a month
                at an illustrative 6.5% over 30 years. Not a promise of approval.
              </p>
              <a
                href="#the-next-wave-veteran-mortgage-express-lane"
                className="mt-2 inline-block text-[12px] font-bold text-green-tint underline underline-offset-4 hover:text-white"
              >
                See the Next Wave Veteran Mortgage Express Lane
              </a>
            </div>
          ) : null}

          {afterNov1 ? (
            <p className="rounded-2xl bg-white/[0.07] p-4 text-[12px] leading-relaxed text-white/60">
              Closings after November 1 don&apos;t qualify for the prorated
              refund. Your exemption starts with next year&apos;s taxes.
            </p>
          ) : null}

          {situation === "partial" ? (
            <p className="text-[12px] leading-relaxed text-white/55">
              If the VA later rates you permanent and total, your homestead
              taxes could drop to {fmt(0)}, a savings of about{" "}
              {fmt(calc.homesteadTax)} a year.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
