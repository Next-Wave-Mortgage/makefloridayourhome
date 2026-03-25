"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import FloridaCountyMap from "@/components/maps/FloridaCountyMap";
import {
  DPA_PROGRAMS,
  FLORIDA_COUNTIES,
  getCountyPrograms,
  type DPAProgram,
} from "@/data/dpa-programs";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const STATEWIDE_PROGRAMS = DPA_PROGRAMS.filter((p) =>
  p.counties.includes("Statewide")
);

function buildCountyProgramMap(): Map<string, number> {
  const map = new Map<string, number>();
  for (const county of FLORIDA_COUNTIES) {
    const count = getCountyPrograms(county).length;
    if (count > 0) map.set(county, count);
  }
  return map;
}

function typeColor(type: string): string {
  const t = type.toLowerCase();
  if (t.includes("grant")) return "bg-emerald-100 text-emerald-800";
  if (t.includes("forgivable")) return "bg-blue-100 text-blue-800";
  if (t.includes("deferred")) return "bg-amber-100 text-amber-800";
  return "bg-gray-100 text-gray-700";
}

/* ------------------------------------------------------------------ */
/*  Program Card                                                       */
/* ------------------------------------------------------------------ */

function ProgramCard({ program }: { program: DPAProgram }) {
  return (
    <div className="rounded-xl border border-border-gray/60 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-bold leading-snug text-dark-green">
          {program.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeColor(program.type)}`}
        >
          {program.type}
        </span>
      </div>

      <div className="mb-3 flex items-baseline gap-1.5">
        <span className="text-2xl font-extrabold text-brand-green">
          {program.amount}
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-dark-green/70">
        {program.description}
      </p>

      <div className="flex flex-wrap gap-2">
        <Link
          href={program.eligibilityUrl}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:shadow-md"
        >
          Check Eligibility
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        {program.programUrl && (
          <a
            href={program.programUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border-gray px-4 py-2.5 text-sm font-semibold text-dark-green transition-colors hover:border-brand-green hover:text-brand-green"
          >
            Program Details
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  County Search                                                      */
/* ------------------------------------------------------------------ */

function CountySearch({
  onSelect,
  selectedCounty,
}: {
  onSelect: (county: string) => void;
  selectedCounty: string | null;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return FLORIDA_COUNTIES;
    const q = query.toLowerCase();
    return FLORIDA_COUNTIES.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-sm">
      <div className="relative">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mid-gray"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search for your county..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full rounded-xl border border-border-gray bg-white py-3 pl-10 pr-4 text-sm text-dark-green placeholder:text-mid-gray focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
        />
        {selectedCounty && (
          <button
            onClick={() => {
              setQuery("");
              onSelect("");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-mid-gray hover:text-dark-green"
            aria-label="Clear selection"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border-gray bg-white py-1 shadow-lg">
          {filtered.map((county) => {
            const count = getCountyPrograms(county).length;
            return (
              <li key={county}>
                <button
                  onClick={() => {
                    onSelect(county);
                    setQuery(county);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-green-tint ${
                    selectedCounty === county
                      ? "bg-green-tint font-semibold text-brand-green"
                      : "text-dark-green"
                  }`}
                >
                  <span>{county} County</span>
                  <span className="rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-semibold text-brand-green">
                    {count} program{count !== 1 ? "s" : ""}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {open && filtered.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-border-gray bg-white px-4 py-3 text-sm text-mid-gray shadow-lg">
          No counties found
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Statewide Banner                                                   */
/* ------------------------------------------------------------------ */

function StatewideBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-brand-green/20 bg-gradient-to-r from-green-tint to-white p-5 sm:p-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-dark-green">
              {STATEWIDE_PROGRAMS.length} Statewide Programs Available Everywhere
            </h3>
            <p className="text-sm text-dark-green/60">
              These programs are available in all 67 Florida counties
            </p>
          </div>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-brand-green transition-transform ${expanded ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-5 grid gap-4">
          {STATEWIDE_PROGRAMS.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  County Panel (sidebar / bottom sheet)                              */
/* ------------------------------------------------------------------ */

function CountyPanel({
  county,
  onClose,
}: {
  county: string;
  onClose: () => void;
}) {
  const programs = useMemo(() => getCountyPrograms(county), [county]);
  const localPrograms = programs.filter(
    (p) => !p.counties.includes("Statewide")
  );
  const statewidePrograms = programs.filter((p) =>
    p.counties.includes("Statewide")
  );

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-border-gray bg-white shadow-2xl lg:static lg:inset-auto lg:z-auto lg:max-h-none lg:rounded-2xl lg:border lg:border-border-gray/60 lg:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        {/* Drag handle (mobile) */}
        <div className="sticky top-0 z-10 flex justify-center bg-white pb-2 pt-3 lg:hidden">
          <div className="h-1.5 w-12 rounded-full bg-border-gray" />
        </div>

        <div className="px-5 pb-6 pt-2 lg:p-6">
          {/* Header */}
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-dark-green sm:text-2xl">
                {county} County
              </h2>
              <p className="mt-1 text-sm text-dark-green/60">
                {programs.length} program{programs.length !== 1 ? "s" : ""}{" "}
                available ({localPrograms.length} local +{" "}
                {statewidePrograms.length} statewide)
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-gray text-dark-green/60 transition-colors hover:bg-green-tint hover:text-dark-green"
              aria-label="Close panel"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Local programs */}
          {localPrograms.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-dark-green/50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Local Programs
              </h3>
              <div className="grid gap-3">
                {localPrograms.map((p) => (
                  <ProgramCard key={p.id} program={p} />
                ))}
              </div>
            </div>
          )}

          {/* Statewide programs */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-dark-green/50">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
              </svg>
              Statewide Programs
            </h3>
            <div className="grid gap-3">
              {statewidePrograms.map((p) => (
                <ProgramCard key={p.id} program={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Tooltip                                                            */
/* ------------------------------------------------------------------ */

function MapTooltip({
  county,
  programCount,
}: {
  county: string;
  programCount: number;
}) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-4 z-30 -translate-x-1/2 rounded-lg border border-border-gray bg-white px-3.5 py-2 shadow-lg">
      <p className="text-sm font-bold text-dark-green">{county} County</p>
      <p className="text-xs text-dark-green/60">
        {programCount} program{programCount !== 1 ? "s" : ""} available
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Interactive Map                                               */
/* ------------------------------------------------------------------ */

export function InteractiveMap() {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  const countyProgramMap = useMemo(() => buildCountyProgramMap(), []);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleCountyClick = useCallback((county: string) => {
    setSelectedCounty((prev) => (prev === county ? null : county));
  }, []);

  const handleCountyHover = useCallback((county: string | null) => {
    setHoveredCounty(county);
  }, []);

  const handleSearchSelect = useCallback((county: string) => {
    if (!county) {
      setSelectedCounty(null);
      return;
    }
    setSelectedCounty(county);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedCounty(null);
  }, []);

  // Stats
  const totalPrograms = DPA_PROGRAMS.length;
  const countiesWithPrograms = 67;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-tint to-white px-5 pb-8 pt-12 sm:px-8 sm:pb-12 sm:pt-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-dark-green sm:text-4xl lg:text-5xl">
              <span className="text-brand-green">Florida</span> Down Payment
              Assistance Map
            </h1>
            <p className="mt-4 text-lg text-dark-green/70 sm:text-xl">
              Explore {totalPrograms} programs across {countiesWithPrograms}{" "}
              counties. Click your county to see what help is available.
            </p>

            {/* Stats row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-brand-green" />
                <span className="text-sm font-semibold text-dark-green">
                  {totalPrograms} Programs
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-brand-green/50" />
                <span className="text-sm font-semibold text-dark-green">
                  {countiesWithPrograms} Counties Covered
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-sm font-semibold text-dark-green">
                  {STATEWIDE_PROGRAMS.length} Statewide
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="mt-8 flex justify-center">
              <CountySearch
                onSelect={handleSearchSelect}
                selectedCounty={selectedCounty}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statewide Banner */}
      <section className="px-5 pb-6 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <StatewideBanner />
        </div>
      </section>

      {/* Map + Panel */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Map */}
            <div
              ref={mapContainerRef}
              className="relative flex-1 lg:sticky lg:top-24"
            >
              <div className="overflow-hidden rounded-2xl border border-border-gray/60 bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-6">
                {/* Legend */}
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-dark-green/60">
                  <span className="font-semibold uppercase tracking-wider">
                    Legend:
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-3 w-3 rounded-sm bg-brand-green/30" />
                    Fewer programs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-3 w-3 rounded-sm bg-brand-green" />
                    More programs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-3 w-3 rounded-sm bg-green-tint border border-border-gray" />
                    No local programs
                  </span>
                </div>

                {/* SVG Map */}
                <div className="relative">
                  <FloridaCountyMap
                    countiesWithPrograms={countyProgramMap}
                    selectedCounty={selectedCounty}
                    onCountyClick={handleCountyClick}
                    onCountyHover={handleCountyHover}
                  />
                  {hoveredCounty && (
                    <MapTooltip
                      county={hoveredCounty}
                      programCount={countyProgramMap.get(hoveredCounty) ?? STATEWIDE_PROGRAMS.length}
                    />
                  )}
                </div>

                <p className="mt-3 text-center text-xs text-dark-green/40">
                  Click any county to view available programs. All counties
                  qualify for {STATEWIDE_PROGRAMS.length} statewide programs.
                </p>
              </div>
            </div>

            {/* Side panel */}
            <div className="w-full lg:w-[440px] xl:w-[480px]">
              {selectedCounty ? (
                <CountyPanel
                  county={selectedCounty}
                  onClose={handleClosePanel}
                />
              ) : (
                <div className="rounded-2xl border border-dashed border-border-gray bg-green-tint/50 p-8 text-center lg:p-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#006948"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-dark-green">
                    Select a County
                  </h3>
                  <p className="mt-2 text-sm text-dark-green/60">
                    Click on the map or use the search bar above to explore down
                    payment assistance programs in your area.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-brand-green to-dark-green px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to Buy Your Florida Home?
          </h2>
          <p className="mt-3 text-lg text-white/80">
            Our team specializes in down payment assistance programs. We&apos;ll
            help you find and stack every program you qualify for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/check-dpa-eligibility"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-green shadow-lg transition-all hover:shadow-xl"
            >
              Check Your Florida Down Payment Assistance Eligibility
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
