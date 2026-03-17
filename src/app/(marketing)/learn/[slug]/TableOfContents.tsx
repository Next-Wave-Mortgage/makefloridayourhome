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

    const els = article.querySelectorAll("h2, h3");
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

/** Desktop sidebar TOC */
export function TableOfContents() {
  const { headings, activeId } = useHeadings();

  if (headings.length === 0) return null;

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
