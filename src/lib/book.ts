/**
 * Compatibility shim for "Make Florida Your Home" (book #1).
 *
 * The library now lives in `src/lib/books.ts`. This file keeps the old
 * `bookConfig` / `liveEditions` names alive for components that predate
 * the /books library (BookPromo, ExitIntentPopup). New code should import
 * from `@/lib/books`.
 */
import { getBook, liveEditions as live, bookHref } from "@/lib/books";

const mfyh = getBook("make-florida-your-home")!;

export const bookConfig = {
  title: mfyh.title,
  subtitle: mfyh.subtitle,
  author: mfyh.author,
  datePublished: mfyh.datePublished,
  pageUpdated: mfyh.pageUpdated,
  coverImage: mfyh.coverImage,
  coverAlt: mfyh.coverAlt,
  isbn: mfyh.isbn,
  googleBooksUrl: mfyh.googleBooksUrl,
  /** Canonical page for the book inside the /books library. */
  href: bookHref(mfyh),
} as const;

export const bookEditions = mfyh.editions;
export const liveEditions = live(mfyh);
