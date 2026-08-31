/**
 * Single source of truth for "Make Florida Your Home" (the book).
 * Edition URLs, ISBNs, and availability are edited here — never inline in JSX.
 */

export interface BookEdition {
  format: "Kindle eBook" | "Paperback" | "Hardcover" | "Google Play Books";
  /** Schema.org bookFormat URL */
  schemaFormat: string;
  url: string;
  /** Hidden from the page (and schema offers) until true. */
  available: boolean;
  isbn?: string;
  note?: string;
}

export const bookConfig = {
  title: "Make Florida Your Home",
  subtitle:
    "The Insider's Guide to Down Payment Assistance, Hometown Heroes, and Buying Your First Florida Home Without Draining Your Savings (2026–2027 Edition)",
  author: "Phil Ganz",
  datePublished: "2026-08-11",
  /** Update whenever this page's copy changes. */
  pageUpdated: "2026-08-31",
  coverImage: "/images/book/make-florida-your-home-cover.png",
  coverAlt: "Make Florida Your Home book cover by Phil Ganz",
  /** Canonical print ISBN (paperback) — used as the Book schema's isbn. */
  isbn: "9798191565255",
  /** Google Books preview URL (entity corroboration for schema sameAs). */
  googleBooksUrl: "https://books.google.com/books?id=JGQDEgAAQBAJ",
} as const;

export const bookEditions: BookEdition[] = [
  {
    format: "Kindle eBook",
    schemaFormat: "https://schema.org/EBook",
    url: "https://www.amazon.com/dp/B0HDRNR5WW",
    available: true,
    // Kindle editions carry an ASIN (B0HDRNR5WW), not an ISBN.
  },
  {
    format: "Paperback",
    schemaFormat: "https://schema.org/Paperback",
    url: "https://www.amazon.com/dp/B0HDS5R32X",
    available: true,
    isbn: "9798191565255",
  },
  {
    format: "Hardcover",
    schemaFormat: "https://schema.org/Hardcover",
    url: "https://www.amazon.com/dp/B0HDWJJ6N5",
    available: true,
    isbn: "9798192189283",
  },
  {
    format: "Google Play Books",
    schemaFormat: "https://schema.org/EBook",
    url: "https://play.google.com/store/books/details?id=JGQDEgAAQBAJ",
    available: true,
  },
];

export const liveEditions = bookEditions.filter((e) => e.available);
