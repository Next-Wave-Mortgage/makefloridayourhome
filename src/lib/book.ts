/**
 * Single source of truth for "Make Florida Your Home" (the book).
 * Edition URLs and availability are edited here — never inline in JSX.
 */

export interface BookEdition {
  format: "Kindle eBook" | "Paperback" | "Hardcover" | "Google Books";
  /** Schema.org bookFormat URL */
  schemaFormat: string;
  url: string;
  /** Hidden from the page (and schema offers) until true. */
  available: boolean;
  note?: string;
}

export const bookConfig = {
  title: "Make Florida Your Home",
  subtitle:
    "The Insider's Guide to Down Payment Assistance, Hometown Heroes, and Buying Your First Florida Home Without Draining Your Savings (2026–2027 Edition)",
  author: "Phil Ganz",
  datePublished: "2026-08-11",
  /** Update whenever this page's copy changes. */
  pageUpdated: "2026-08-20",
  coverImage: "/images/book/make-florida-your-home-cover.png",
  coverAlt: "Make Florida Your Home book cover by Phil Ganz",
} as const;

export const bookEditions: BookEdition[] = [
  {
    format: "Kindle eBook",
    schemaFormat: "https://schema.org/EBook",
    url: "https://www.amazon.com/dp/B0HDRNR5WW",
    available: true,
  },
  {
    format: "Paperback",
    schemaFormat: "https://schema.org/Paperback",
    url: "https://www.amazon.com/dp/B0HDS5R32X",
    available: true,
  },
  {
    format: "Hardcover",
    schemaFormat: "https://schema.org/Hardcover",
    url: "https://www.amazon.com/dp/B0HDWJJ6N5",
    available: true,
  },
  {
    // Pending Google Play Books review (publisher account: philipdganz@gmail.com).
    // Set the live catalog URL and flip `available` once the review clears.
    format: "Google Books",
    schemaFormat: "https://schema.org/EBook",
    url: "",
    available: false,
    note: "Pending Google Play Books catalog review",
  },
];

export const liveEditions = bookEditions.filter((e) => e.available);
