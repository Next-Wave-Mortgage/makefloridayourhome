import Link from "next/link";
import Image from "next/image";
import { bookHref, liveRetailers, type Book } from "@/lib/books";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function formatYear(iso: string) {
  return new Date(`${iso}T00:00:00`).getFullYear();
}

/**
 * Library card used on /books. Cover + title + positioning + audience +
 * year + Learn More + Buy. Laid out so 2, 6, or 12 of these read the same.
 */
export function BookCard({
  book,
  priority,
}: {
  book: Book;
  priority?: boolean;
}) {
  const href = bookHref(book);
  const primary = liveRetailers(book, "buy")[0];
  const retailerCount = liveRetailers(book).length;

  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-border-gray/60 bg-white transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_8px_32px_rgba(0,105,72,0.10)]">
      <Link
        href={href}
        className="relative block bg-green-tint px-8 pt-10 pb-8 sm:px-10"
        aria-label={`${book.title}: learn more`}
      >
        {book.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-brand-green px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-white uppercase">
            {book.badge}
          </span>
        )}
        <div className="relative mx-auto w-full max-w-[220px]">
          <div className="absolute -right-3 -bottom-3 h-full w-full rounded-xl bg-brand-green/10" />
          <Image
            src={book.coverImage}
            alt={book.coverAlt}
            width={600}
            height={960}
            priority={priority}
            className="relative h-auto w-full rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.20)] transition-transform duration-500 group-hover/card:-translate-y-1"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-7 pt-6 pb-7 sm:px-8">
        <p className="text-[12px] font-semibold tracking-[0.18em] text-brand-green uppercase">
          {formatYear(book.datePublished)} · {book.author}
        </p>
        <h3 className="mt-2 text-[22px] leading-tight font-bold text-dark-green sm:text-[24px]">
          <Link href={href} className="hover:text-brand-green">
            {book.title}
          </Link>
        </h3>
        <p className="mt-2 text-[14px] leading-snug text-dark-green/55">
          {book.subtitle}
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-dark-green/75">
          {book.positioning}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center">
          <Link
            href={href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-[15px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
          >
            Learn More
            <ArrowIcon />
          </Link>
          {primary && (
            <Link
              href={`${href}#where-to-buy`}
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-green/20 px-6 py-3 text-[15px] font-bold text-brand-green transition-colors hover:bg-brand-green/5"
            >
              Buy the Book
            </Link>
          )}
        </div>
        {retailerCount > 0 && (
          <p className="mt-3 text-[13px] text-dark-green/45">
            Available at {retailerCount}{" "}
            {retailerCount === 1 ? "retailer" : "retailers"}, including{" "}
            {primary?.name}.
          </p>
        )}
      </div>
    </article>
  );
}
