import Image from "next/image";
import {
  bookAnalyticsKey,
  liveRetailers,
  type Book,
  type Retailer,
} from "@/lib/books";
import { TrackedRetailerLink } from "./TrackedRetailerLink";

/**
 * Brand accent per retailer so the typographic tiles read as distinct
 * marks even without a logo file. When `/public/images/retailers/<slug>.svg`
 * (or .png) exists and is referenced in `books.ts`, the logo is shown instead.
 */
const accent: Record<Retailer["slug"], string> = {
  amazon: "text-[#FF9900]",
  apple: "text-[#111111]",
  "barnes-noble": "text-[#2E7D4F]",
  kobo: "text-[#BF0000]",
  google: "text-[#1A73E8]",
  bookshop: "text-[#5B3E90]",
  everand: "text-[#1E7B67]",
  fable: "text-[#0F1F3D]",
  smashwords: "text-[#2B6CB0]",
  thalia: "text-[#1F5E9E]",
  vivlio: "text-[#E4572E]",
  "angus-robertson": "text-[#1B3A6B]",
};

function Tile({
  retailer,
  bookKey,
  bookTitle,
}: {
  retailer: Retailer;
  bookKey: string;
  bookTitle: string;
}) {
  const key = retailer.slug.replace(/-/g, "_");
  return (
    <TrackedRetailerLink
      href={retailer.url}
      retailer={key}
      bookKey={bookKey}
      ariaLabel={`Get ${bookTitle} on ${retailer.name} (opens in a new tab)`}
      className="group flex min-h-[84px] items-center justify-center rounded-xl border border-border-gray/60 bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-[0_6px_20px_rgba(0,105,72,0.10)] focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:outline-none"
    >
      {retailer.logo ? (
        <Image
          src={retailer.logo}
          alt={retailer.name}
          width={160}
          height={48}
          className="h-8 w-auto max-w-[140px] object-contain opacity-90 transition-opacity group-hover:opacity-100"
        />
      ) : (
        <span
          className={`text-[17px] font-black tracking-tight sm:text-[18px] ${accent[retailer.slug]}`}
        >
          {retailer.name}
        </span>
      )}
    </TrackedRetailerLink>
  );
}

interface RetailerGridProps {
  book: Book;
  /** Optional heading override for the primary group. */
  heading?: string;
  bg?: "white" | "green-tint";
  id?: string;
}

export function RetailerGrid({
  book,
  heading = "Where to Buy",
  bg = "green-tint",
  id = "where-to-buy",
}: RetailerGridProps) {
  const buy = liveRetailers(book, "buy");
  const discover = liveRetailers(book, "discover");
  const bookKey = bookAnalyticsKey(book);

  if (buy.length === 0 && discover.length === 0) return null;

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${bg === "green-tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-brand-green">
              {heading.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            {book.title} is stocked wherever you already buy books. Every link
            opens the retailer in a new tab.
          </p>

          {buy.length > 0 && (
            <div className="mt-10">
              <p className="text-[12px] font-bold tracking-[0.15em] text-dark-green/40 uppercase">
                Buy the Book
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {buy.map((r) => (
                  <Tile
                    key={r.slug}
                    retailer={r}
                    bookKey={bookKey}
                    bookTitle={book.title}
                  />
                ))}
              </div>
            </div>
          )}

          {discover.length > 0 && (
            <div className="mt-10">
              <p className="text-[12px] font-bold tracking-[0.15em] text-dark-green/40 uppercase">
                Read or Discover on Other Platforms
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {discover.map((r) => (
                  <Tile
                    key={r.slug}
                    retailer={r}
                    bookKey={bookKey}
                    bookTitle={book.title}
                  />
                ))}
              </div>
            </div>
          )}

          <p className="mt-8 text-center text-[13px] text-dark-green/40">
            More retailers are added as each one lists the title.
          </p>
        </div>
      </div>
    </section>
  );
}
