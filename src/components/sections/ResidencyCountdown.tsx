"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Live countdown to Amendment 3's December 31, 2026 Florida residency date,
// placed mid-article in the Amendment 3 buyer guide as a secondary CTA to the
// regular home purchase lead form. Hides itself once the deadline passes.

// 11:59:59 PM Eastern (EST, UTC-5) on December 31, 2026.
const DEADLINE = Date.parse("2027-01-01T05:00:00Z");
const FUNNEL = "/home-purchase-eligibility";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function partsLeft(now: number): Parts | null {
  const ms = DEADLINE - now;
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Tile({
  value,
  label,
  accent = false,
  tick = false,
}: {
  value: number | null;
  label: string;
  accent?: boolean;
  tick?: boolean;
}) {
  const text = value === null ? "--" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-full overflow-hidden rounded-xl px-0.5 py-3 ring-1 backdrop-blur-sm sm:py-4 ${
          accent
            ? "bg-review-gold/[0.12] ring-review-gold/40"
            : "bg-white/[0.07] ring-white/15"
        }`}
      >
        {/* Split-flap seam */}
        <span
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/25"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent"
          aria-hidden
        />
        <span
          key={tick ? text : undefined}
          className={`relative block text-center text-[26px] font-extrabold leading-none tracking-tight tabular-nums sm:text-[46px] ${
            tick && value !== null ? "animate-[a3tick_0.35s_ease-out]" : ""
          } ${accent ? "text-review-gold" : "text-white"}`}
        >
          {text}
        </span>
      </div>
      <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-white/55 sm:text-[11px] sm:tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}

// undefined before mount, null once the deadline has passed.
function useTimeLeft() {
  const [left, setLeft] = useState<Parts | null | undefined>(undefined);
  useEffect(() => {
    const tick = () => setLeft(partsLeft(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return left;
}

function MiniUnit({
  value,
  unit,
  accent = false,
  tick = false,
}: {
  value: number | undefined;
  unit: string;
  accent?: boolean;
  tick?: boolean;
}) {
  const text = value === undefined ? "--" : String(value).padStart(2, "0");
  return (
    <span
      className={`inline-flex items-baseline gap-0.5 rounded-lg px-2 py-1.5 ring-1 ${
        accent
          ? "bg-review-gold/[0.14] ring-review-gold/40"
          : "bg-white/[0.08] ring-white/15"
      }`}
    >
      <span
        key={tick ? text : undefined}
        className={`text-[18px] font-extrabold leading-none tabular-nums sm:text-[20px] ${
          tick && value !== undefined
            ? "inline-block animate-[a3tick_0.35s_ease-out]"
            : ""
        } ${accent ? "text-review-gold" : "text-white"}`}
      >
        {text}
      </span>
      <span className="text-[11px] font-bold text-white/50">{unit}</span>
    </span>
  );
}

/* Slim version for near the top of the article. */
export function ResidencyCountdownCompact() {
  const left = useTimeLeft();
  if (left === null) return null;

  return (
    <aside
      className="not-prose relative my-8 overflow-hidden rounded-2xl bg-[#062a1f] text-white shadow-[0_14px_36px_rgba(0,40,28,0.28)]"
      aria-label="Countdown to Florida's December 31, 2026 residency deadline"
    >
      <style>{`@keyframes a3tick{0%{opacity:.25;transform:translateY(-35%)}100%{opacity:1;transform:translateY(0)}}`}</style>
      <span
        className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.5),rgba(255,110,60,0.2)_45%,transparent_70%)] blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden
      />
      <div className="relative flex flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-review-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-review-gold" />
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-review-gold">
              <span className="hidden sm:inline">Residency </span>Deadline · Dec
              31, 2026
            </p>
          </div>
          <p className="mt-1 text-[15px] font-bold leading-snug">
            Time left for the full exemption
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 sm:flex-nowrap sm:justify-end">
          <div className="flex gap-1.5" role="timer" aria-live="off">
            <MiniUnit value={left?.days} unit="d" accent />
            <MiniUnit value={left?.hours} unit="h" />
            <MiniUnit value={left?.minutes} unit="m" />
            <MiniUnit value={left?.seconds} unit="s" tick />
          </div>
          <Link
            href={FUNNEL}
            className="group inline-flex items-center gap-1 whitespace-nowrap text-[14px] font-bold text-review-gold no-underline hover:text-white"
          >
            Check eligibility
            <span
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function ResidencyCountdown() {
  const left = useTimeLeft();

  // Deadline passed: retire the block.
  if (left === null) return null;
  const p = left ?? null;

  return (
    <aside
      className="not-prose relative my-10 overflow-hidden rounded-3xl bg-[#062a1f] text-white shadow-[0_24px_60px_rgba(0,40,28,0.35)]"
      aria-label="Countdown to Florida's December 31, 2026 residency deadline"
    >
      <style>{`@keyframes a3tick{0%{opacity:.25;transform:translateY(-35%)}100%{opacity:1;transform:translateY(0)}}`}</style>
      {/* Sunset glow */}
      <span
        className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.55),rgba(255,110,60,0.22)_45%,transparent_70%)] blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,150,104,0.55),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden
      />

      <div className="relative p-5 sm:p-9">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-review-gold opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-review-gold" />
          </span>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-review-gold sm:tracking-[0.16em]">
            <span className="hidden sm:inline">Florida residency </span>Deadline
            · Dec 31, 2026
          </p>
        </div>

        <p className="mt-3 text-[22px] font-bold leading-tight sm:text-[27px]">
          Time left to lock in the full Amendment 3 exemption
        </p>

        <div
          className="mt-5 grid grid-cols-4 gap-2 sm:mt-6 sm:gap-4"
          role="timer"
          aria-live="off"
        >
          <Tile value={p?.days ?? null} label="Days" accent />
          <Tile value={p?.hours ?? null} label="Hours" />
          <Tile value={p?.minutes ?? null} label="Minutes" />
          <Tile value={p?.seconds ?? null} label="Seconds" tick />
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[400px] text-[14px] leading-relaxed text-white/70">
            Moving here? Get pre-approved now so you can buy with confidence
            once you&apos;re a Florida resident.
          </p>
          <Link
            href={FUNNEL}
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#062a1f] no-underline shadow-[0_8px_24px_rgba(255,184,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-review-gold"
          >
            Check My Eligibility
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}
