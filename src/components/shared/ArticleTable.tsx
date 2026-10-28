"use client";

import { useEffect, useRef, useState } from "react";

// Article tables scroll inside their frame when they are wider than the
// column. A fade and a hint show only while there is more to the right, so a
// wide table never looks clipped. Tables with four or more columns whose rows
// get cramped at the column width are widened ("is-dense") so they scroll
// instead of stacking text into very tall rows.

const CRAMPED_ROW_PX = 150;
export function ArticleTable(props: React.ComponentProps<"table">) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [denseCols, setDenseCols] = useState(0);
  const [moreRight, setMoreRight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const update = () => {
      setMoreRight(wrap.scrollLeft + wrap.clientWidth < wrap.scrollWidth - 2);
      setScrolled(wrap.scrollLeft > 2);
    };
    const table = tableRef.current;
    if (table) {
      const rows = Array.from(table.rows);
      const cols = rows[0]?.cells.length ?? 0;
      const tallest = Math.max(0, ...rows.map((row) => row.offsetHeight));
      if (cols >= 4 && tallest > CRAMPED_ROW_PX) setDenseCols(cols);
    }
    update();
    wrap.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(wrap);
    return () => {
      wrap.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="table-frame">
      <div
        ref={wrapRef}
        className={`table-wrap${scrolled ? " is-scrolled" : ""}`}
      >
        <table
          {...props}
          ref={tableRef}
          className={denseCols ? "is-dense" : undefined}
          style={
            denseCols
              ? ({ "--table-cols": denseCols } as React.CSSProperties)
              : undefined
          }
        />
      </div>
      {moreRight && (
        <>
          <span className="table-fade" aria-hidden />
          <span className="table-hint" aria-hidden>
            Scroll for more
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </>
      )}
    </div>
  );
}
