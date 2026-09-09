"use client";

import type { ReactNode } from "react";

interface TrackedRetailerLinkProps {
  href: string;
  /** GA4 retailer key, e.g. "amazon", "apple", "barnes_noble". */
  retailer: string;
  /** GA4 book key, e.g. "reverse_mortgage_inheritance_strategy". */
  bookKey: string;
  /** Optional edition/format label, e.g. "paperback". */
  format?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

/**
 * Outbound retailer link that reports two GA4 events per click:
 *
 *   book_retailer_click   { retailer, book_title, format }
 *   book_<retailer>_click { book_title, format }
 *
 * The first powers cross-retailer reports; the second matches the per-retailer
 * event names requested for the book funnel (book_amazon_click, etc).
 */
export function TrackedRetailerLink({
  href,
  retailer,
  bookKey,
  format,
  className,
  children,
  ariaLabel,
}: TrackedRetailerLinkProps) {
  const track = () => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    const params = {
      retailer,
      book_title: bookKey,
      format,
      link_url: href,
    };
    window.gtag("event", "book_retailer_click", params);
    window.gtag("event", `book_${retailer}_click`, {
      book_title: bookKey,
      format,
      link_url: href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={track}
      onAuxClick={track}
      className={className}
      aria-label={ariaLabel}
      data-retailer={retailer}
      data-book={bookKey}
    >
      {children}
    </a>
  );
}
