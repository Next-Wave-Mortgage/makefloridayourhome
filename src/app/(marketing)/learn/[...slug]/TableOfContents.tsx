"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function useHeadings() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const els = article.querySelectorAll("h2");
    const items: TocItem[] = [];

    els.forEach((el) => {
      if (!el.id) {
        el.id =
          el.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || "";
      }
      items.push({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return { headings, activeId };
}

function scrollToHeading(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

const PROGRAMS_SLUG = "first-time-homebuyer/grants-and-programs";

function ProgramsPromoCard() {
  return (
    <a
      href="/learn/first-time-homebuyer/grants-and-programs"
      className="group mt-5 block overflow-hidden rounded-2xl border border-brand-green/20 bg-white transition-all hover:border-brand-green/40 hover:shadow-[0_4px_20px_rgba(0,105,72,0.1)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/learn/florida-first-time-homebuyer-grants-programs-2026.png"
        alt="105 Florida first-time home buyer grants and programs"
        className="h-36 w-full object-cover"
        width={600}
        height={144}
        loading="lazy"
      />
      <div className="p-4">
        <div className="text-[14px] font-bold leading-snug text-dark-green">
          105 Florida DPA Programs
        </div>
        <p className="mt-1 text-[12px] leading-relaxed text-dark-green/60">
          The complete guide to every down payment assistance program in Florida for 2026.
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-bold text-brand-green transition-colors group-hover:text-brand-green/80">
          View All Programs
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function MapPromoCard() {
  return (
    <a
      href="/florida-down-payment-assistance-interactive-map"
      className="group mt-5 block overflow-hidden rounded-2xl border border-brand-green/20 bg-white transition-all hover:border-brand-green/40 hover:shadow-[0_4px_20px_rgba(0,105,72,0.1)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/dpa-map-promo.webp"
        alt="Interactive Florida down payment assistance map"
        className="h-36 w-full object-cover"
        width={600}
        height={144}
        loading="lazy"
      />
      <div className="p-4">
        <div className="text-[14px] font-bold leading-snug text-dark-green">
          Interactive DPA Map
        </div>
        <p className="mt-1 text-[12px] leading-relaxed text-dark-green/60">
          Explore 105 programs across 48 Florida counties. Click your county to find assistance near you.
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-bold text-brand-green transition-colors group-hover:text-brand-green/80">
          Explore the Map
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}

/** Desktop sidebar TOC */
export function TableOfContents({ showMapPromo = false, currentSlug = "" }: { showMapPromo?: boolean; currentSlug?: string }) {
  const { headings, activeId } = useHeadings();

  if (headings.length === 0) return null;

  const isOnProgramsPage = currentSlug === PROGRAMS_SLUG;

  return (
    <nav className="sticky top-24 hidden max-h-[calc(100vh-120px)] overflow-y-auto lg:block">
      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
        In This Article
      </div>
      <ul className="mt-3 space-y-0.5 border-l border-border-gray">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(h.id);
              }}
              className={`block border-l-2 py-1.5 text-[13px] leading-snug transition-colors ${
                h.level === 3 ? "pl-6" : "pl-4"
              } ${
                activeId === h.id
                  ? "border-brand-green font-semibold text-brand-green"
                  : "border-transparent text-dark-green/50 hover:text-dark-green/80"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-border-gray/60 py-2 text-[12px] font-semibold text-dark-green/40 transition-colors hover:border-brand-green/40 hover:text-brand-green"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        Back to top
      </button>
      {!isOnProgramsPage && <ProgramsPromoCard />}
      {showMapPromo && <MapPromoCard />}
    </nav>
  );
}

/** Mobile collapsible TOC */
export function MobileTableOfContents() {
  const { headings } = useHeadings();
  const [open, setOpen] = useState(false);

  if (headings.length === 0) return null;

  const h2s = headings.filter((h) => h.level === 2);

  return (
    <div className="mb-6 lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-border-gray/60 bg-green-tint/50 px-4 py-3"
      >
        <span className="text-[13px] font-bold text-dark-green">
          Table of Contents
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-dark-green/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className="mt-2 space-y-0.5 rounded-xl border border-border-gray/60 bg-white px-4 py-3">
          {h2s.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  setTimeout(() => scrollToHeading(h.id), 100);
                }}
                className="block py-1.5 text-[13px] leading-snug text-dark-green/60 transition-colors hover:text-brand-green"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
