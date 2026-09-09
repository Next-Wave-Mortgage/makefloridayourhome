"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * "The Bookshelf" — an editorial bookshelf carousel for an author's team
 * page, composed to fit one 1080p viewport. The active book is the hero:
 * ~410px tall, standing on the shelf, breaking above and below the
 * editorial panel and overlapping its left edge. The next book stands on
 * the same shelf, partly behind the panel's right side. Desktop is an
 * absolutely-positioned stage; below lg it falls back to a stacked panel.
 */

const featureIcons = {
  home: (
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22 V12 H15 V22" />
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 6v2m0 8v2" />
    </>
  ),
  people: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
} as const;

export type FeatureIcon = keyof typeof featureIcons;

/** Display shape one shelf slide needs. TeamMemberBook satisfies it as-is. */
export interface ShelfBook {
  title: string;
  tagline: string;
  cover: string;
  coverAlt: string;
  href: string;
  buyLinks: { label: string; url: string }[];
  features: { icon: FeatureIcon; text: string }[];
}

const FeatureGlyph = ({ icon }: { icon: FeatureIcon }) => (
  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-tint text-brand-green ring-1 ring-brand-green/10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {featureIcons[icon]}
    </svg>
  </span>
);

/** Google Play triangle, from the official Google Play mark in /images/retailers/google.svg */
const PlayGlyph = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="16"
    viewBox="0 0 28 32"
    aria-hidden="true"
  >
    <path
      d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z"
      fill="#ea4335"
    />
    <path
      d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z"
      fill="#fbbc04"
    />
    <path
      d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z"
      fill="#4285f4"
    />
    <path
      d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
      fill="#34a853"
    />
  </svg>
);

const buyLinkIcon = (label: string) =>
  label === "Amazon" ? (
    <Image
      src="/images/retailers/amazon-icon.svg"
      alt=""
      width={15}
      height={15}
      className="h-[15px] w-[15px]"
    />
  ) : label === "Google Play" ? (
    <PlayGlyph />
  ) : null;

const buyLinkText = (label: string) =>
  label === "Amazon"
    ? "Buy on Amazon"
    : label === "Google Play"
      ? "Get on Google Play"
      : label;

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {dir === "left" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

/** A standing hardcover: front cover image + CSS spine, pages, and back board */
const Book3D = ({
  src,
  alt,
  width,
  height,
  thickness = 30,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  thickness?: number;
  priority?: boolean;
}) => (
  <span className="block" style={{ perspective: "1100px" }}>
    <span
      className="book-3d block"
      style={
        {
          width,
          height,
          "--book-w": `${width}px`,
          "--book-t": `${thickness}px`,
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        width={280}
        height={448}
        priority={priority}
        className="book-3d-cover"
        style={{ width, height }}
      />
    </span>
  </span>
);

/** Soft plant-shadow silhouette, cast on the wall behind the shelf */
const PlantShadow = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={`pointer-events-none absolute fill-dark-green ${className}`}
    aria-hidden
  >
    <path d="M100 200 C 96 140 78 100 40 78 C 70 82 90 100 98 122 C 96 80 84 48 58 22 C 92 40 104 78 104 110 C 112 70 132 44 168 34 C 138 58 118 92 112 132 C 126 110 148 100 172 102 C 144 112 122 134 112 164 Z" />
  </svg>
);

const valueStrip = [
  {
    icon: "compass",
    label: "Real Strategies",
    sub: "From decades of experience",
  },
  { icon: "shield", label: "Actionable Advice", sub: "You can use right away" },
  {
    icon: "people",
    label: "Built for Real People",
    sub: "Not Wall Street jargon",
  },
  { icon: "home", label: "A Stronger Tomorrow", sub: "For you and your family" },
] as const;

/** Title/copy/benefits/CTAs for one book — shared by desktop panel and mobile card */
const BookDetails = ({
  book,
  center = false,
}: {
  book: ShelfBook;
  center?: boolean;
}) => (
  <div className={center ? "text-center" : "text-left"}>
    <p
      className={`flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.28em] text-brand-green ${center ? "justify-center" : ""}`}
    >
      Featured Book
      <span className="h-px w-9 bg-brand-green/30" aria-hidden />
    </p>
    <h3 className="mt-2.5 font-serif text-[28px] font-bold leading-[1.08] text-dark-green lg:text-[40px]">
      <Link
        href={book.href}
        className="transition-colors hover:text-brand-green"
      >
        {book.title}
      </Link>
    </h3>
    <p className="mt-3 max-w-[620px] text-[15.5px] leading-relaxed text-dark-green/60 lg:text-[16.5px]">
      {book.tagline}
    </p>

    <div
      className={`mt-4 flex flex-wrap gap-x-7 gap-y-2.5 ${center ? "justify-center" : ""}`}
    >
      {book.features.map((f) => (
        <span
          key={f.text}
          className="flex items-center gap-2.5 text-left text-[12.5px] font-semibold leading-snug text-dark-green/70"
        >
          <FeatureGlyph icon={f.icon} />
          <span className="max-w-[130px]">{f.text}</span>
        </span>
      ))}
    </div>

    <div
      className={`mt-5 flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <Link
        href={book.href}
        className="group inline-flex h-[50px] items-center gap-2.5 rounded-full bg-brand-green px-7 text-[14.5px] font-bold text-white shadow-[0_12px_26px_-10px_rgba(0,105,72,0.65),0_2px_5px_rgba(0,105,72,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(0,105,72,0.7)]"
      >
        Learn About the Book
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
      {book.buyLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener"
          className="inline-flex h-[46px] items-center gap-2 rounded-full border border-dark-green/15 bg-white/80 px-5 text-[13px] font-bold text-dark-green backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green/35 hover:bg-white"
        >
          {buyLinkIcon(link.label)}
          {buyLinkText(link.label)}
        </a>
      ))}
    </div>
  </div>
);

/** Restrained dimensional wood shelf with contact shadows (positions in %) */
const Shelf = ({ shadows }: { shadows: { left: string; width: string }[] }) => (
  <div className="absolute inset-x-1 bottom-0 z-30" aria-hidden>
    {/* lit top surface, holding the contact shadows */}
    <div className="relative h-[11px] rounded-t-[3px] bg-gradient-to-b from-[#EFD9B4] via-[#E2C495] to-[#D2AE7C] shadow-[0_1px_0_rgba(255,255,255,0.55)_inset]">
      {shadows.map((s, i) => (
        <span
          key={i}
          className="absolute top-[-4px] h-[13px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(45,55,45,0.36),transparent_68%)]"
          style={{ left: s.left, width: s.width }}
        />
      ))}
    </div>
    {/* grained front lip */}
    <div className="h-[16px] [background-image:repeating-linear-gradient(90deg,rgba(112,80,42,0.13)_0px,rgba(112,80,42,0)_4px,rgba(112,80,42,0)_46px,rgba(112,80,42,0.13)_49px),linear-gradient(180deg,#C9A371,#A87E51)]" />
    {/* dark underside + drop shadow onto the wall */}
    <div className="h-[7px] rounded-b-[5px] bg-gradient-to-b from-[#845F33] to-[#674823] shadow-[0_16px_28px_-6px_rgba(64,45,20,0.45)]" />
  </div>
);

export function BookshelfCarousel({
  books,
  firstName = "Phil",
  showHeader = true,
  showValueStrip = true,
  bg = "tint",
}: {
  books: ShelfBook[];
  firstName?: string;
  /** "The Bookshelf / Books by …" header block (team-page framing). */
  showHeader?: boolean;
  /** The Real Strategies / Actionable Advice strip under the shelf. */
  showValueStrip?: boolean;
  bg?: "tint" | "white";
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"fwd" | "back">("fwd");
  const book = books[index];
  const nextIndex = (index + 1) % books.length;
  const nextBook = books[nextIndex];
  const swapAnim =
    direction === "fwd" ? "animate-slide-in" : "animate-slide-in-back";

  const go = (to: number) => {
    setDirection(to >= index ? "fwd" : "back");
    setIndex(((to % books.length) + books.length) % books.length);
  };

  return (
    <section
      className={`relative overflow-hidden py-10 ${bg === "tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <PlantShadow className="-top-8 -left-10 w-[280px] rotate-[18deg] opacity-[0.06] blur-[3px] lg:w-[340px]" />
      <PlantShadow className="-right-16 top-16 w-[240px] rotate-[-115deg] opacity-[0.05] blur-[4px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        {showHeader && (
          <>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-brand-green">
              The Bookshelf
            </p>
            <h2 className="mt-2 text-center font-serif text-[36px] font-bold leading-tight text-dark-green sm:text-[46px]">
              Books by <span className="text-brand-green">{firstName}</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-[15.5px] leading-relaxed text-dark-green/60">
              Practical, no-nonsense guides to homeownership, wealth, and
              making smarter financial decisions.
            </p>
          </>
        )}

        {/* ————— Desktop stage ————— */}
        <div
          className={`relative mx-auto hidden h-[458px] max-w-[1300px] lg:block ${showHeader ? "mt-12" : "mt-3"}`}
        >
          {/* next book, standing on the shelf behind the panel's right edge */}
          {books.length > 1 && (
            <button
              type="button"
              onClick={() => go(nextIndex)}
              aria-label={`Show ${nextBook.title}`}
              className="absolute right-0 bottom-[30px] z-[5] origin-bottom-left rotate-[4deg] cursor-pointer"
            >
              <Book3D
                src={nextBook.cover}
                alt={nextBook.coverAlt}
                width={204}
                height={326}
                thickness={30}
              />
            </button>
          )}

          {/* featured slide: hero book breaking out of the editorial panel */}
          <div key={book.href} className={`absolute inset-0 z-20 ${swapAnim}`}>
            <div className="absolute bottom-[74px] left-[150px] flex min-h-[326px] w-[1060px] items-center rounded-[24px] border border-dark-green/10 bg-[#FDFCF8] py-9 pr-12 pl-[184px] shadow-[0_30px_80px_-32px_rgba(0,49,34,0.35),0_4px_16px_rgba(0,49,34,0.05)]">
              <BookDetails book={book} />
            </div>
            <Link
              href={book.href}
              className="absolute bottom-[28px] left-[36px] z-10 block"
              aria-label={book.title}
            >
              <Book3D
                src={book.cover}
                alt={book.coverAlt}
                width={256}
                height={410}
                thickness={38}
                priority
              />
            </Link>
          </div>

          <Shelf
            shadows={[
              { left: "2%", width: "21%" },
              { left: "83.5%", width: "15%" },
            ]}
          />

          {/* arrows, attached to the books */}
          {books.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous book"
                className="absolute top-[44%] left-0 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-dark-green/10 bg-white text-brand-green shadow-[0_6px_18px_rgba(0,49,34,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-tint"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next book"
                className="absolute top-[44%] right-[176px] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-dark-green/10 bg-white text-brand-green shadow-[0_6px_18px_rgba(0,49,34,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-tint"
              >
                <Chevron dir="right" />
              </button>
            </>
          )}
        </div>

        {/* ————— Mobile / tablet ————— */}
        <div
          className={`relative mx-auto max-w-[620px] lg:hidden ${showHeader ? "mt-8" : "mt-2"}`}
        >
          <div key={book.href} className={swapAnim}>
            <div className="rounded-[24px] border border-dark-green/10 bg-[#FDFCF8] p-6 pb-0 shadow-[0_24px_60px_-28px_rgba(0,49,34,0.35)] sm:p-8 sm:pb-0">
              <div className="flex justify-center">
                <Link href={book.href} aria-label={book.title}>
                  <Book3D
                    src={book.cover}
                    alt={book.coverAlt}
                    width={160}
                    height={256}
                    thickness={26}
                    priority
                  />
                </Link>
              </div>
              <div className="mt-6 pb-7">
                <BookDetails book={book} center />
              </div>
            </div>
          </div>
          <div className="relative mt-0" aria-hidden>
            <div className="h-[9px] rounded-t-[3px] bg-gradient-to-b from-[#EFD9B4] to-[#D2AE7C]" />
            <div className="h-[13px] [background-image:linear-gradient(180deg,#C9A371,#A87E51)]" />
            <div className="h-[6px] rounded-b-[4px] bg-gradient-to-b from-[#845F33] to-[#674823] shadow-[0_12px_20px_-6px_rgba(64,45,20,0.4)]" />
          </div>
          {books.length > 1 && (
            <div className="absolute inset-y-0 -inset-x-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous book"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-green/10 bg-white text-brand-green shadow-[0_5px_14px_rgba(0,49,34,0.2)]"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next book"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-green/10 bg-white text-brand-green shadow-[0_5px_14px_rgba(0,49,34,0.2)]"
              >
                <Chevron dir="right" />
              </button>
            </div>
          )}
        </div>

        {/* pagination, tucked under the shelf */}
        {books.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-2.5">
            {books.map((b, i) => (
              <button
                key={b.href}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${b.title}`}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-[24px] bg-brand-green"
                    : "w-[8px] bg-dark-green/20 hover:bg-dark-green/35"
                }`}
              />
            ))}
          </div>
        )}

        {showValueStrip && (
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-dark-green/10">
            {valueStrip.map((v) => (
              <div
                key={v.label}
                className="flex items-center gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <FeatureGlyph icon={v.icon} />
                <div>
                  <p className="text-[13.5px] font-bold text-dark-green">
                    {v.label}
                  </p>
                  <p className="mt-0.5 text-[12px] text-dark-green/55">
                    {v.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
