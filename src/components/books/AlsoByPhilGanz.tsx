import Link from "next/link";
import Image from "next/image";
import { bookHref, otherBooks } from "@/lib/books";

/**
 * Cross-link module: every book page points at every other book, and back
 * to the library. This is the internal-link spine of the /books section.
 */
export function AlsoByPhilGanz({
  currentSlug,
  bg = "white",
}: {
  currentSlug: string;
  bg?: "white" | "green-tint";
}) {
  const others = otherBooks(currentSlug);
  if (others.length === 0) return null;

  return (
    <section
      className={`py-16 sm:py-20 ${bg === "green-tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.2em] text-brand-green uppercase">
                Also by Phil Ganz
              </p>
              <h2 className="mt-2 text-[26px] leading-tight font-bold text-dark-green sm:text-[32px]">
                More from the{" "}
                <span className="text-brand-green">Mortgage Library</span>
              </h2>
            </div>
            <Link
              href="/books"
              className="text-[15px] font-bold text-brand-green hover:underline"
            >
              Browse all books →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {others.map((book) => (
              <Link
                key={book.slug}
                href={bookHref(book)}
                className="group flex items-center gap-5 rounded-2xl border border-border-gray/60 bg-white p-5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_6px_24px_rgba(0,105,72,0.10)]"
              >
                <Image
                  src={book.coverImage}
                  alt={book.coverAlt}
                  width={200}
                  height={320}
                  className="h-auto w-[84px] shrink-0 rounded-md shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-0.5 sm:w-[96px]"
                />
                <div className="min-w-0">
                  {book.badge && (
                    <span className="mb-1 inline-block rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[10.5px] font-bold tracking-[0.12em] text-brand-green uppercase">
                      {book.badge}
                    </span>
                  )}
                  <h3 className="text-[17px] leading-snug font-bold text-dark-green transition-colors group-hover:text-brand-green sm:text-[19px]">
                    {book.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-3 text-[14px] leading-relaxed text-dark-green/60">
                    {book.positioning}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
