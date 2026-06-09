"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  getDpaMatchFitLabel,
  getFeaturedDpaMatch,
  matchDpaPrograms,
  type DpaBuyerStatus,
  type DpaCalculatorInput,
  type DpaCalculatorLoanType,
  type DpaCalculatorProgramSummary,
  type DpaCreditScoreRange,
  type DpaFirstTimeBuyerAnswer,
  type DpaMatchResult,
} from "@/lib/dpa-calculator";

interface DpaCalculatorProps {
  counties: string[];
  programs: DpaCalculatorProgramSummary[];
}

const firstTimeOptions: {
  label: string;
  value: DpaFirstTimeBuyerAnswer;
}[] = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Not sure", value: "unsure" },
];

const statusOptions: { label: string; value: DpaBuyerStatus }[] = [
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "First responder", value: "first-responder" },
  { label: "Military or veteran", value: "military" },
  { label: "Public service", value: "public-service" },
  { label: "Disabled buyer", value: "disabled" },
  { label: "Senior", value: "senior" },
  { label: "Single parent", value: "single-parent" },
];

const creditOptions: { label: string; value: DpaCreditScoreRange }[] = [
  { label: "680+", value: "680-plus" },
  { label: "640-679", value: "640-679" },
  { label: "620-639", value: "620-639" },
  { label: "580-619", value: "580-619" },
  { label: "Below 580", value: "below-580" },
  { label: "Not sure", value: "unknown" },
];

const loanOptions: { label: string; value: DpaCalculatorLoanType }[] = [
  { label: "Not sure yet", value: "not-sure" },
  { label: "FHA", value: "fha" },
  { label: "Conventional", value: "conventional" },
  { label: "VA", value: "va" },
  { label: "USDA", value: "usda" },
];

const stepDetails = [
  {
    title: "Where are you buying?",
    description: "County is enough to start. City helps with local programs.",
  },
  {
    title: "What kind of buyer are you?",
    description: "Choose what applies. Skip anything that does not fit.",
  },
  {
    title: "What do you know so far?",
    description: "Add estimates if you have them. Not sure is fine.",
  },
];

function numberOrUndefined(value: string): number | undefined {
  const normalized = Number(value.replace(/[^\d.]/g, ""));
  return Number.isFinite(normalized) && normalized > 0 ? normalized : undefined;
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatDate(value?: string): string {
  if (!value) return "Source date not listed";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function shortDescription(value: string): string {
  const [firstSentence] = value.split(/(?<=\.)\s+/);
  return firstSentence || value;
}

function visibleReasons(result: DpaMatchResult): string[] {
  return result.whyMatched.length > 0
    ? result.whyMatched.slice(0, 2)
    : ["Available in the selected area."];
}

function visibleVerification(result: DpaMatchResult): string {
  return (
    result.needsVerification[0] ??
    "Final eligibility still depends on lender and program review."
  );
}

interface DropdownOption<Value extends string> {
  label: string;
  value: Value;
}

function CustomDropdown<Value extends string>({
  id,
  value,
  options,
  placeholder,
  onChange,
  hasError = false,
  prominent = false,
}: {
  id: string;
  value: Value | "";
  options: DropdownOption<Value>[];
  placeholder: string;
  onChange: (value: Value) => void;
  hasError?: boolean;
  prominent?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);
  const listboxId = `${id}-listbox`;

  function chooseOption(nextValue: Value) {
    onChange(nextValue);
    setIsOpen(false);
  }

  return (
    <div
      className="relative mt-2"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        id={id}
        type="button"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        className={`flex w-full items-center justify-between gap-3 rounded-xl bg-white text-left text-dark-green outline-none transition-[border-color,box-shadow,transform] focus:border-brand-green ${
          prominent
            ? "h-[56px] border-2 px-4 text-[16px] font-black shadow-[0_8px_22px_rgba(0,105,72,0.07)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,105,72,0.12)] focus:shadow-[0_12px_28px_rgba(0,105,72,0.12)]"
            : "h-[48px] border px-4 text-[15px] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,105,72,0.08)]"
        } ${hasError ? "border-red-500" : "border-brand-green/20"}`}
      >
        <span
          className={
            selectedOption ? "truncate" : "truncate text-dark-green/35"
          }
        >
          {selectedOption?.label ?? placeholder}
        </span>
        <span
          aria-hidden="true"
          className={`h-2.5 w-2.5 shrink-0 rotate-45 border-b-2 border-r-2 border-brand-green transition-transform ${
            isOpen ? "translate-y-1 rotate-[225deg]" : "-translate-y-0.5"
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 mt-2 max-h-[260px] overflow-y-auto rounded-xl border border-brand-green/20 bg-white p-1.5 shadow-[0_18px_42px_rgba(0,43,30,0.16)]"
        >
          {options.map((option) => {
            const selected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => chooseOption(option.value)}
                className={`flex min-h-10 w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[14px] font-bold transition-colors ${
                  selected
                    ? "bg-brand-green text-white"
                    : "text-dark-green/72 hover:bg-green-tint hover:text-dark-green"
                }`}
              >
                <span className="truncate">{option.label}</span>
                {selected && (
                  <span
                    aria-hidden="true"
                    className="h-2 w-4 rotate-[-45deg] border-b-2 border-l-2 border-white"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ResultCard({
  result,
  input,
  isFeatured = false,
}: {
  result: DpaMatchResult;
  input: DpaCalculatorInput;
  isFeatured?: boolean;
}) {
  const fitLabel = getDpaMatchFitLabel(result, input);
  const detailsId = `dpa-details-${result.program.id}`;

  function openDetails() {
    const details = document.getElementById(
      detailsId,
    ) as HTMLDetailsElement | null;
    if (!details) return;

    details.open = true;
    details.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <article
      className={`rounded-lg border bg-white p-5 shadow-[0_2px_18px_rgba(0,0,0,0.04)] sm:p-6 ${
        isFeatured
          ? "border-brand-green shadow-[0_12px_36px_rgba(0,105,72,0.12)]"
          : "border-border-gray/70"
      }`}
    >
      {isFeatured && (
        <p className="mb-3 text-[12px] font-black text-brand-green">
          Start here
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-[20px] font-black leading-tight text-dark-green sm:text-[23px]">
            {isFeatured
              ? `Start here: ${result.program.name}`
              : result.program.name}
          </h3>
          <p className="mt-2 text-[13px] font-bold text-brand-green">
            {fitLabel}
          </p>
          <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-dark-green/62">
            {shortDescription(result.program.description)}
          </p>
        </div>

        <div className="rounded-lg bg-green-tint px-4 py-3 sm:min-w-[148px] sm:text-right">
          <span className="block text-[12px] font-bold text-dark-green/45">
            Assistance
          </span>
          <span className="mt-1 block text-[18px] font-black text-brand-green">
            {result.program.assistanceDisplay}
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-4 border-t border-border-gray/70 pt-4 md:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-[13px] font-black text-dark-green">Why it fits</p>
          <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-dark-green/68">
            {visibleReasons(result).map((reason) => (
              <li key={reason} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-black text-dark-green">
            Verify before applying
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-dark-green/60">
            {visibleVerification(result)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-border-gray/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href="/check-dpa-eligibility"
            className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-[13px] font-bold text-white transition-shadow hover:shadow-[0_4px_18px_rgba(0,105,72,0.28)]"
          >
            Verify this option
          </Link>
          <button
            type="button"
            onClick={openDetails}
            className="text-[13px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
          >
            See why this matched
          </button>
        </div>
      </div>

      <details
        id={detailsId}
        className="group mt-4 border-t border-border-gray/70 pt-4"
      >
        <summary className="cursor-pointer list-none text-[13px] font-black text-dark-green marker:hidden">
          Program details
          <span className="ml-2 text-brand-green group-open:hidden">+</span>
          <span className="ml-2 hidden text-brand-green group-open:inline">
            -
          </span>
        </summary>

        <div className="mt-4 grid gap-4 text-[13px] md:grid-cols-2">
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="font-bold text-dark-green/40">Area</dt>
              <dd className="mt-1 font-semibold text-dark-green">
                {result.program.geography.display}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-dark-green/40">Type</dt>
              <dd className="mt-1 font-semibold text-dark-green">
                {result.program.typeDisplay}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-dark-green/40">Availability</dt>
              <dd className="mt-1 font-semibold text-dark-green">
                {formatLabel(result.program.availability.status)}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-dark-green/40">Data confidence</dt>
              <dd className="mt-1 font-semibold text-dark-green">
                {formatLabel(result.program.calculator.confidence)}
              </dd>
            </div>
          </dl>

          <div className="space-y-3">
            {result.needsVerification.length > 1 && (
              <div>
                <p className="font-bold text-dark-green/45">More to verify</p>
                <ul className="mt-1.5 space-y-1 text-dark-green/60">
                  {result.needsVerification.slice(1).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-dark-green/45">
              Source:{" "}
              {result.program.source.url ? (
                <a
                  href={result.program.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-2 hover:text-dark-green"
                >
                  {result.program.source.label}
                </a>
              ) : (
                result.program.source.label
              )}
            </p>
            <p className="text-dark-green/45">
              Last reviewed{" "}
              {formatDate(result.program.maintenance.lastVerified)}
            </p>
          </div>
        </div>
      </details>
    </article>
  );
}

function ResultGroup({
  title,
  description,
  results,
  input,
  showAll,
}: {
  title: string;
  description: string;
  results: DpaMatchResult[];
  input: DpaCalculatorInput;
  showAll: boolean;
}) {
  if (results.length === 0) return null;

  const visible = showAll ? results : results.slice(0, 4);

  return (
    <section className="mt-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[19px] font-black text-dark-green">{title}</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-dark-green/50">
            {description}
          </p>
        </div>
        <span className="rounded-full bg-green-tint px-3 py-1 text-[12px] font-bold text-dark-green/60">
          {results.length}
        </span>
      </div>
      <div className="mt-4 space-y-4">
        {visible.map((result) => (
          <ResultCard key={result.program.id} result={result} input={input} />
        ))}
      </div>
    </section>
  );
}

export function DpaCalculator({ counties, programs }: DpaCalculatorProps) {
  const [step, setStep] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [submittedInput, setSubmittedInput] =
    useState<DpaCalculatorInput | null>(null);
  const [countyError, setCountyError] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<DpaCalculatorInput>({
    county: "",
    city: "",
    firstTimeBuyer: "yes",
    buyerStatuses: [],
    creditScoreRange: "640-679",
    loanType: "not-sure",
  });

  const matches = useMemo(
    () => (submittedInput ? matchDpaPrograms(submittedInput, programs) : []),
    [submittedInput, programs],
  );
  const countyOptions = useMemo(
    () => counties.map((county) => ({ label: county, value: county })),
    [counties],
  );

  const featuredMatch = getFeaturedDpaMatch(matches, submittedInput);
  const selectedCountyLabel =
    submittedInput?.county || input.county || "your county";
  const currentStep = stepDetails[step];
  const progressPercent = ((step + 1) / stepDetails.length) * 100;

  const otherGoodMatches = useMemo(
    () =>
      matches.filter(
        (match) =>
          match.program.id !== featuredMatch?.program.id &&
          match.tier !== "manual-review",
      ),
    [featuredMatch?.program.id, matches],
  );

  const closerLookMatches = useMemo(
    () =>
      matches.filter(
        (match) =>
          match.program.id !== featuredMatch?.program.id &&
          match.tier === "manual-review",
      ),
    [featuredMatch?.program.id, matches],
  );

  function updateInput(update: Partial<DpaCalculatorInput>) {
    setInput((current) => ({ ...current, ...update }));
    setSubmittedInput(null);
    setShowAll(false);
    if ("county" in update) setCountyError(false);
  }

  function toggleStatus(status: DpaBuyerStatus) {
    setInput((current) => {
      const hasStatus = current.buyerStatuses.includes(status);
      return {
        ...current,
        buyerStatuses: hasStatus
          ? current.buyerStatuses.filter((item) => item !== status)
          : [...current.buyerStatuses, status],
      };
    });
    setSubmittedInput(null);
    setShowAll(false);
  }

  function goForward() {
    if (step === 0 && !input.county) {
      setCountyError(true);
      return;
    }

    if (step < 2) {
      setStep((current) => current + 1);
      return;
    }

    setSubmittedInput(input);
    setShowAll(false);
    window.setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  const primaryButtonLabel = step === 2 ? "Show programs" : "Continue";

  return (
    <div className="mx-auto max-w-[1240px]">
      <div className="space-y-6">
        <div className="min-h-[470px] rounded-lg border border-brand-green/15 bg-white shadow-[0_18px_60px_rgba(0,105,72,0.11)] md:min-h-[540px]">
          <div className="border-b border-border-gray/70 px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-brand-green sm:text-[11px]">
                    Florida DPA Finder
                  </p>
                  <h2 className="text-[23px] font-black leading-[1.05] text-dark-green sm:text-[31px] lg:text-[34px]">
                    Find your Florida DPA options.
                  </h2>
                  <p className="mt-2 max-w-xl text-[13px] font-semibold leading-relaxed text-dark-green/62 sm:text-[15px]">
                    Answer 3 quick questions. No contact info.
                  </p>
                </div>
                <div className="w-fit shrink-0 rounded-full border border-brand-green/15 bg-green-tint/80 px-3 py-1.5 text-left sm:rounded-lg sm:px-3.5 sm:py-2.5">
                  <span className="hidden text-[9px] font-black uppercase tracking-[0.14em] text-brand-green/65 sm:block">
                    Question
                  </span>
                  <span className="block text-[13px] font-black leading-none text-brand-green sm:mt-1 sm:text-[16px]">
                    {step + 1}
                    <span className="text-[11px] text-dark-green/40">
                      {" "}
                      of {stepDetails.length}
                    </span>
                  </span>
                </div>
              </div>

              <div
                aria-label={`Step ${step + 1} of ${stepDetails.length}`}
                aria-valuemax={stepDetails.length}
                aria-valuemin={1}
                aria-valuenow={step + 1}
                className="mt-4 h-1.5 overflow-hidden rounded-full bg-green-tint sm:mt-4"
                role="progressbar"
              >
                <div
                  className="h-full rounded-full bg-brand-green transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-6">
            {step === 0 && (
              <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-8">
                <div className="max-w-2xl">
                  <p className="mb-3 hidden text-[12px] font-black uppercase tracking-[0.14em] text-brand-green/80 sm:block">
                    Start with location
                  </p>
                  <h2 className="text-[32px] font-black leading-[1.02] text-dark-green sm:text-[40px] lg:text-[42px] 2xl:text-[48px]">
                    {currentStep.title}
                  </h2>
                  <p className="mt-3 hidden max-w-xl text-[16px] font-semibold leading-relaxed text-dark-green/60 sm:block sm:text-[17px]">
                    {currentStep.description}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:pt-1">
                  <div>
                    <label
                      htmlFor="dpa-county"
                      className="flex items-center justify-between gap-3 text-[14px] font-black text-dark-green"
                    >
                      <span>Florida county</span>
                      <span className="rounded-full bg-brand-green px-2.5 py-1 text-[10px] font-black text-white">
                        Required
                      </span>
                    </label>
                    <CustomDropdown
                      id="dpa-county"
                      value={input.county}
                      options={countyOptions}
                      placeholder="Select a county"
                      onChange={(county) => updateInput({ county })}
                      hasError={countyError}
                      prominent
                    />
                    {countyError && (
                      <p className="mt-2 text-[13px] font-semibold text-red-700">
                        Choose a Florida county first.
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="dpa-city"
                      className="flex items-center justify-between gap-3 text-[14px] font-bold text-dark-green"
                    >
                      <span>City or town</span>
                      <span className="rounded-full bg-green-tint px-2.5 py-1 text-[10px] font-black text-dark-green/45">
                        Optional
                      </span>
                    </label>
                    <input
                      id="dpa-city"
                      value={input.city ?? ""}
                      onChange={(event) =>
                        updateInput({ city: event.target.value })
                      }
                      placeholder="Example: Fort Lauderdale"
                      className="mt-2 h-[56px] w-full rounded-xl border border-border-gray bg-white px-4 text-[16px] font-semibold text-dark-green outline-none transition-[border-color,box-shadow] placeholder:text-dark-green/30 focus:border-brand-green focus:shadow-[0_10px_24px_rgba(0,105,72,0.08)]"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 max-w-3xl">
                  <h2 className="text-[27px] font-black leading-tight text-dark-green sm:text-[38px]">
                    {currentStep.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
                    {currentStep.description}
                  </p>
                </div>

                <fieldset>
                  <legend className="text-[13px] font-bold text-dark-green">
                    Are you a first-time homebuyer?
                  </legend>
                  <div className="mt-3 grid grid-cols-3 rounded-lg border border-border-gray bg-green-tint p-1">
                    {firstTimeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          updateInput({ firstTimeBuyer: option.value })
                        }
                        aria-pressed={input.firstTimeBuyer === option.value}
                        className={`rounded-md px-3 py-2.5 text-[13px] font-bold transition-colors ${
                          input.firstTimeBuyer === option.value
                            ? "bg-white text-brand-green shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                            : "text-dark-green/55 hover:text-dark-green"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-5">
                  <legend className="text-[13px] font-bold text-dark-green">
                    Anything else we should know?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {statusOptions.map((option) => {
                      const checked = input.buyerStatuses.includes(
                        option.value,
                      );
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleStatus(option.value)}
                          aria-pressed={checked}
                          className={`rounded-full border px-4 py-2.5 text-[13px] font-bold transition-colors ${
                            checked
                              ? "border-brand-green bg-brand-green text-white"
                              : "border-border-gray bg-white text-dark-green/60 hover:border-brand-green/40 hover:text-dark-green"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </div>
            )}

            {step === 2 && (
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 max-w-3xl">
                  <h2 className="text-[27px] font-black leading-tight text-dark-green sm:text-[38px]">
                    {currentStep.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
                    {currentStep.description}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[13px] font-bold text-dark-green">
                      Household income
                    </span>
                    <span className="relative mt-2 block">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] font-black text-dark-green/35">
                        $
                      </span>
                      <input
                        inputMode="numeric"
                        value={
                          input.householdIncome
                            ? formatNumber(input.householdIncome)
                            : ""
                        }
                        onChange={(event) =>
                          updateInput({
                            householdIncome: numberOrUndefined(
                              event.target.value,
                            ),
                          })
                        }
                        placeholder="85,000"
                        className="w-full rounded-lg border border-border-gray bg-white py-3 pl-8 pr-4 text-[15px] font-semibold text-dark-green outline-none transition-colors placeholder:text-dark-green/30 focus:border-brand-green"
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-bold text-dark-green">
                      Household size
                    </span>
                    <input
                      inputMode="numeric"
                      value={input.householdSize ?? ""}
                      onChange={(event) =>
                        updateInput({
                          householdSize: numberOrUndefined(event.target.value),
                        })
                      }
                      placeholder="3"
                      className="mt-2 w-full rounded-lg border border-border-gray bg-white px-4 py-3 text-[15px] font-semibold text-dark-green outline-none transition-colors placeholder:text-dark-green/30 focus:border-brand-green"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-bold text-dark-green">
                      Estimated purchase price
                    </span>
                    <span className="relative mt-2 block">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] font-black text-dark-green/35">
                        $
                      </span>
                      <input
                        inputMode="numeric"
                        value={
                          input.purchasePrice
                            ? formatNumber(input.purchasePrice)
                            : ""
                        }
                        onChange={(event) =>
                          updateInput({
                            purchasePrice: numberOrUndefined(
                              event.target.value,
                            ),
                          })
                        }
                        placeholder="375,000"
                        className="w-full rounded-lg border border-border-gray bg-white py-3 pl-8 pr-4 text-[15px] font-semibold text-dark-green outline-none transition-colors placeholder:text-dark-green/30 focus:border-brand-green"
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-bold text-dark-green">
                      Credit score range
                    </span>
                    <CustomDropdown
                      id="dpa-credit-score"
                      value={input.creditScoreRange}
                      options={creditOptions}
                      placeholder="Select credit score"
                      onChange={(creditScoreRange) =>
                        updateInput({
                          creditScoreRange,
                        })
                      }
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="text-[13px] font-bold text-dark-green">
                    Preferred loan type
                  </span>
                  <CustomDropdown
                    id="dpa-loan-type"
                    value={input.loanType}
                    options={loanOptions}
                    placeholder="Select loan type"
                    onChange={(loanType) =>
                      updateInput({
                        loanType,
                      })
                    }
                  />
                </label>
              </div>
            )}

            <div className="mx-auto mt-8 flex max-w-5xl items-center justify-between gap-3 border-t border-border-gray/70 pt-5">
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(current - 1, 0))}
                disabled={step === 0}
                className="rounded-full px-1 py-2 text-[13px] font-bold text-dark-green/50 transition-colors hover:text-dark-green disabled:cursor-not-allowed disabled:opacity-35"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goForward}
                className="rounded-full bg-brand-green px-6 py-2.5 text-[13px] font-bold text-white transition-shadow hover:shadow-[0_4px_18px_rgba(0,105,72,0.28)]"
              >
                {primaryButtonLabel}
              </button>
            </div>
          </div>
        </div>

        {submittedInput && (
          <div ref={resultsRef} aria-live="polite">
            <div className="rounded-lg border border-brand-green/20 bg-green-tint p-5 sm:p-6">
              <h2 className="text-[24px] font-black leading-tight text-dark-green sm:text-[28px]">
                We found {formatNumber(matches.length)} programs worth checking
                in {selectedCountyLabel}.
              </h2>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-dark-green/60">
                These are programs to verify, not approvals.
              </p>
            </div>

            {featuredMatch && (
              <section className="mt-6">
                <h2 className="mb-4 text-[20px] font-black text-dark-green">
                  Start here
                </h2>
                <ResultCard
                  result={featuredMatch}
                  input={submittedInput}
                  isFeatured
                />
              </section>
            )}

            <ResultGroup
              title="Other good options"
              description="Programs that may also be worth checking."
              results={otherGoodMatches}
              input={submittedInput}
              showAll={showAll}
            />
            <ResultGroup
              title="Needs a closer look"
              description="Programs where funding, geography, or rules need more verification."
              results={closerLookMatches}
              input={submittedInput}
              showAll={showAll}
            />

            {matches.length > 9 && (
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="mt-6 w-full rounded-full border border-brand-green/30 bg-white px-5 py-3 text-[14px] font-bold text-brand-green transition-colors hover:bg-green-tint"
              >
                {showAll
                  ? "Show fewer programs"
                  : `Show all ${formatNumber(matches.length)} programs`}
              </button>
            )}

            <div className="mt-6 rounded-lg border border-border-gray/70 bg-white p-5">
              <h2 className="text-[15px] font-black text-dark-green">
                Why some programs are not shown
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-dark-green/55">
                Clear geographic mismatches and first-time-buyer mismatches are
                hidden by default. Funding, income limits, purchase price
                limits, and lender overlays can still change final availability.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
