/**
 * Single source of truth for every book in the Phil Ganz library.
 *
 * Adding a book = adding one entry to `books` below. The /books library,
 * the per-book pages, the team bookshelf, the sitemap, and the retailer
 * grids all read from here. Edition URLs, ISBNs, and retailer availability
 * are edited here, never inline in JSX.
 *
 * Retailer rule (from Phil): a retailer is only shown once the title is
 * actually live there. Flip `available` to true when it is.
 */

export type EditionFormat =
  | "Kindle eBook"
  | "Paperback"
  | "Hardcover"
  | "Google Play Books";

export interface BookEdition {
  format: EditionFormat;
  /** Schema.org bookFormat URL */
  schemaFormat: string;
  url: string;
  /** Hidden from the page (and schema offers) until true. */
  available: boolean;
  isbn?: string;
  asin?: string;
}

export type RetailerSlug =
  | "amazon"
  | "apple"
  | "barnes-noble"
  | "kobo"
  | "google"
  | "bookshop"
  | "everand"
  | "fable"
  | "smashwords"
  | "thalia"
  | "vivlio"
  | "angus-robertson";

export interface Retailer {
  slug: RetailerSlug;
  name: string;
  url: string;
  /** "buy" = primary storefronts. "discover" = subscription / regional / discovery platforms. */
  group: "buy" | "discover";
  /** Only rendered when true. Set from the Draft2Digital page for the title. */
  available: boolean;
  /**
   * Optional logo file under /public/images/retailers/. When present the
   * tile shows the mark; otherwise the retailer name is set in type.
   */
  logo?: string;
}

export interface Book {
  /** URL segment under /books/ */
  slug: string;
  title: string;
  subtitle: string;
  /** Short line used on the library page and cross-link modules. */
  positioning: string;
  /** One or two sentences for cards, schema, and social. */
  shortDescription: string;
  author: "Phil Ganz";
  datePublished: string;
  /** Update whenever the page copy changes. */
  pageUpdated: string;
  coverImage: string;
  /** Larger JPG for OpenGraph / Twitter cards. Falls back to coverImage. */
  ogImage?: string;
  coverAlt: string;
  /** Canonical print ISBN used as the Book schema isbn. */
  isbn: string;
  /** Google Books record for schema sameAs. */
  googleBooksUrl?: string;
  /** Draft2Digital / Books2Read universal link for the ebook. */
  universalLink?: string;
  publisher: { type: "Organization" | "Person"; name: string };
  badge?: "New Release";
  editions: BookEdition[];
  retailers: Retailer[];
  /** Print length shown in publication details. */
  pages?: number;
}

const coverPath = (file: string) => `/images/book/${file}`;

export const books: Book[] = [
  {
    slug: "make-florida-your-home",
    title: "Make Florida Your Home",
    subtitle:
      "The Insider's Guide to Down Payment Assistance, Hometown Heroes, and Buying Your First Florida Home Without Draining Your Savings (2026–2027 Edition)",
    positioning:
      "For Florida buyers who want to understand grants, down payment assistance, and first-time homebuyer programs.",
    shortDescription:
      "Florida has quietly built one of the most generous homebuyer assistance systems in the country: 105 programs across all 67 counties, from Hometown Heroes to county programs reaching six figures. Phil Ganz walks first-time Florida buyers through every one, in plain English.",
    author: "Phil Ganz",
    datePublished: "2026-08-11",
    pageUpdated: "2026-09-09",
    coverImage: coverPath("make-florida-your-home-cover.png"),
    coverAlt: "Make Florida Your Home book cover by Phil Ganz",
    isbn: "9798191565255",
    googleBooksUrl: "https://books.google.com/books?id=JGQDEgAAQBAJ",
    universalLink: "https://books2read.com/u/bPYLzx",
    publisher: { type: "Organization", name: "Next Wave Mortgage, LLC" },
    editions: [
      {
        format: "Kindle eBook",
        schemaFormat: "https://schema.org/EBook",
        url: "https://www.amazon.com/dp/B0HDRNR5WW",
        available: true,
        asin: "B0HDRNR5WW",
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
    ],
    retailers: [
      {
        slug: "amazon",
        name: "Amazon",
        url: "https://www.amazon.com/dp/B0HDRNR5WW",
        group: "buy",
        available: true,
      },
      {
        slug: "apple",
        name: "Apple Books",
        url: "https://books.apple.com/us/book/make-florida-your-home/id6804850324",
        group: "buy",
        available: true,
      },
      {
        slug: "barnes-noble",
        name: "Barnes & Noble",
        url: "",
        group: "buy",
        available: false,
      },
      {
        slug: "kobo",
        name: "Kobo",
        url: "https://www.kobo.com/search?query=9798235549173",
        group: "buy",
        available: true,
      },
      {
        slug: "google",
        name: "Google Play Books",
        url: "https://play.google.com/store/books/details?id=JGQDEgAAQBAJ",
        group: "buy",
        available: true,
      },
      {
        slug: "bookshop",
        name: "Bookshop.org",
        url: "",
        group: "buy",
        available: false,
      },
      {
        slug: "everand",
        name: "Everand",
        url: "https://www.everand.com/book/1078609749",
        group: "discover",
        available: true,
      },
      {
        slug: "fable",
        name: "Fable",
        url: "https://fable.co/book/x-9798235549173",
        group: "discover",
        available: true,
      },
      {
        slug: "smashwords",
        name: "Smashwords",
        url: "https://www.smashwords.com/books/view/2091843",
        group: "discover",
        available: true,
      },
      {
        slug: "thalia",
        name: "Thalia",
        url: "https://www.thalia.de/shop/home/artikeldetails/EAN9798235549173",
        group: "discover",
        available: true,
      },
      {
        slug: "vivlio",
        name: "Vivlio",
        url: "https://www.vivlio.fr/search?search=9798235549173",
        group: "discover",
        available: true,
      },
      {
        slug: "angus-robertson",
        name: "Angus & Robertson",
        url: "https://www.angusrobertson.com.au/books/x/p/9798235549173",
        group: "discover",
        available: true,
      },
    ],
  },
  {
    slug: "reverse-mortgage-inheritance-strategy",
    title: "The Reverse Mortgage Inheritance Strategy",
    subtitle: "Don't Just Protect the House, Protect the Family Wealth",
    positioning:
      "For adult children and families trying to understand how a parent's reverse mortgage affects the house, the inheritance, and everyone's money.",
    shortDescription:
      "Written for the adult child of a reverse mortgage borrower. What the loan really is, who owns the house, what happens to the inheritance, what heirs must do when the loan comes due, and the five situations where Phil Ganz would not recommend one.",
    author: "Phil Ganz",
    datePublished: "2026-09-06",
    pageUpdated: "2026-09-09",
    coverImage: coverPath("reverse-mortgage-inheritance-strategy-cover.webp"),
    ogImage: coverPath("reverse-mortgage-inheritance-strategy-cover.jpg"),
    coverAlt:
      "The Reverse Mortgage Inheritance Strategy book cover by Phil Ganz",
    isbn: "9798172370588",
    googleBooksUrl: "https://books.google.com/books?id=TcMJEgAAQBAJ",
    universalLink: "https://books2read.com/u/mveJXX",
    publisher: { type: "Person", name: "Phil Ganz" },
    badge: "New Release",
    pages: 189,
    editions: [
      {
        format: "Kindle eBook",
        schemaFormat: "https://schema.org/EBook",
        url: "",
        // Kindle edition is still in KDP review. Flip on with the ASIN once live.
        available: false,
      },
      {
        format: "Paperback",
        schemaFormat: "https://schema.org/Paperback",
        url: "https://www.amazon.com/dp/B0HJ19LW2N",
        available: true,
        isbn: "9798172370588",
        asin: "B0HJ19LW2N",
      },
      {
        format: "Hardcover",
        schemaFormat: "https://schema.org/Hardcover",
        url: "https://www.amazon.com/dp/B0HJ167Q6V",
        available: true,
        isbn: "9798172404962",
        asin: "B0HJ167Q6V",
      },
      {
        format: "Google Play Books",
        schemaFormat: "https://schema.org/EBook",
        url: "https://play.google.com/store/books/details?id=TcMJEgAAQBAJ",
        available: true,
      },
    ],
    retailers: [
      {
        slug: "amazon",
        name: "Amazon",
        url: "https://www.amazon.com/dp/B0HJ19LW2N",
        group: "buy",
        available: true,
      },
      {
        slug: "apple",
        name: "Apple Books",
        url: "https://books.apple.com/us/book/the-reverse-mortgage-inheritance-strategy/id6809240455",
        group: "buy",
        available: true,
      },
      {
        slug: "barnes-noble",
        name: "Barnes & Noble",
        url: "",
        group: "buy",
        available: false,
      },
      {
        slug: "kobo",
        name: "Kobo",
        url: "https://www.kobo.com/search?query=9798233841170",
        group: "buy",
        available: true,
      },
      {
        slug: "google",
        name: "Google Play Books",
        url: "https://play.google.com/store/books/details?id=TcMJEgAAQBAJ",
        group: "buy",
        available: true,
      },
      {
        slug: "bookshop",
        name: "Bookshop.org",
        url: "",
        group: "buy",
        available: false,
      },
      {
        slug: "everand",
        name: "Everand",
        url: "",
        group: "discover",
        // Not yet listed on the Books2Read page for this title.
        available: false,
      },
      {
        slug: "fable",
        name: "Fable",
        url: "https://fable.co/book/x-9798233841170",
        group: "discover",
        available: true,
      },
      {
        slug: "smashwords",
        name: "Smashwords",
        url: "https://www.smashwords.com/books/view/2100007",
        group: "discover",
        available: true,
      },
      {
        slug: "thalia",
        name: "Thalia",
        url: "https://www.thalia.de/shop/home/artikeldetails/EAN9798233841170",
        group: "discover",
        available: true,
      },
      {
        slug: "vivlio",
        name: "Vivlio",
        url: "https://www.vivlio.fr/search?search=9798233841170",
        group: "discover",
        available: true,
      },
      {
        slug: "angus-robertson",
        name: "Angus & Robertson",
        url: "https://www.angusrobertson.com.au/books/x/p/9798233841170",
        group: "discover",
        available: true,
      },
    ],
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function bookHref(book: Pick<Book, "slug">): string {
  return `/books/${book.slug}`;
}

export function liveEditions(book: Book): BookEdition[] {
  return book.editions.filter((e) => e.available && e.url);
}

export function liveRetailers(book: Book, group?: Retailer["group"]) {
  return book.retailers.filter(
    (r) => r.available && r.url && (group ? r.group === group : true),
  );
}

/** Books other than the one given, for "Also by Phil Ganz" modules. */
export function otherBooks(slug: string): Book[] {
  return books.filter((b) => b.slug !== slug);
}

/** GA4-safe key for a book title, e.g. "reverse_mortgage_inheritance_strategy". */
export function bookAnalyticsKey(book: Pick<Book, "slug">): string {
  return book.slug.replace(/-/g, "_");
}
