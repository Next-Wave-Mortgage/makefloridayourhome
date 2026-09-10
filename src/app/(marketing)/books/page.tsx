import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { bookHref, books } from "@/lib/books";
import {
  authorSchema,
  buildLibraryBreadcrumb,
  buildLibrarySchema,
} from "@/lib/bookSchema";
import {
  BookshelfCarousel,
  type ShelfBook,
} from "@/components/team/BookshelfCarousel";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";

const pageTitle = "Mortgage Books by Phil Ganz | Homebuying & Mortgage Guides";
const pageDescription =
  "The Phil Ganz Mortgage Library: practical guides for homebuyers, homeowners, families, and real estate professionals navigating mortgages, home equity, homeownership, and generational wealth.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/books" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.url}/books`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${books[0].coverImage}`,
        width: 1000,
        height: 1600,
        alt: books[0].coverAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const librarySchema = buildLibrarySchema();
const breadcrumbSchema = buildLibraryBreadcrumb();

const audiences = [
  "First-time and repeat homebuyers",
  "Homeowners deciding what to do with their equity",
  "Adult children helping aging parents",
  "Realtors, financial planners, and estate professionals",
];

export default function BooksLibraryPage() {
  // Newest first, so a new release always leads the shelf.
  const shelf = [...books].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  // Map library entries onto the shelf carousel's display shape.
  const shelfBooks: ShelfBook[] = shelf.map((book) => {
    const buyLinks = [];
    const amazon = book.retailers.find(
      (r) => r.slug === "amazon" && r.available && r.url,
    );
    if (amazon) buyLinks.push({ label: "Amazon", url: amazon.url });
    const google = book.retailers.find(
      (r) => r.slug === "google" && r.available && r.url,
    );
    if (google) buyLinks.push({ label: "Google Play", url: google.url });
    return {
      title: book.title,
      tagline: book.positioning,
      cover: book.coverImage,
      coverAlt: book.coverAlt,
      href: bookHref(book),
      buyLinks,
      features: book.features,
    };
  });

  return (
    <>
      <JsonLd id="library-schema" data={librarySchema} />
      <JsonLd id="author-schema" data={authorSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-green-tint">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/[0.03]" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-green/[0.03]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="text-[13px] text-dark-green/50"
          >
            <Link href="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark-green/80">Books</span>
          </nav>

          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.2em] text-brand-green uppercase">
                The Phil Ganz Mortgage Library
              </p>
              <h1 className="mt-3 text-[34px] leading-[1.12] font-bold tracking-tight text-dark-green sm:text-[44px] lg:text-[52px]">
                Mortgage Books by{" "}
                <span className="text-brand-green">Phil Ganz</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-dark-green/70 sm:text-[19px]">
                Practical guides for homebuyers, homeowners, families, and real
                estate professionals navigating mortgages, home equity,
                homeownership, and generational wealth. Written by a nationally
                ranked top 1% mortgage originator, in plain English.
              </p>

              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {audiences.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2.5 text-[15px] text-dark-green/75"
                  >
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
                      className="mt-0.5 shrink-0 text-brand-green"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Author card */}
            <div className="rounded-2xl border border-border-gray/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/team/phil-ganz.webp"
                  alt="Phil Ganz, Mortgage Expert and author"
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <div>
                  <p className="text-[16px] font-bold text-dark-green">
                    Phil Ganz
                  </p>
                  <p className="text-[13px] text-dark-green/55">
                    President, Next Wave Mortgage · NMLS #37833
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-dark-green/65">
                26+ years in mortgage lending. Thousands of families helped.
                Every book in this library turns the questions he answers daily
                into a plan a reader can follow.
              </p>
              <Link
                href="/team/phil-ganz"
                className="mt-4 inline-block text-[14px] font-bold text-brand-green hover:underline"
              >
                About the author →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shelf */}
      <section className="bg-white pt-14 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto flex max-w-[1300px] items-end justify-between gap-4">
            <h2 className="text-[26px] leading-tight font-bold text-dark-green sm:text-[32px]">
              The <span className="text-brand-green">Books</span>
            </h2>
            <p className="text-[14px] text-dark-green/50">
              {shelf.length} {shelf.length === 1 ? "title" : "titles"}
            </p>
          </div>
        </div>
      </section>
      <BookshelfCarousel
        books={shelfBooks}
        showHeader={false}
        showValueStrip={false}
        bg="white"
      />

      {/* Every title, statically — the carousel features one book at a time,
          so this compact index keeps both books fully crawlable on /books. */}
      <section className="bg-white pb-14 sm:pb-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <ul className="mx-auto grid max-w-[1300px] gap-4 sm:grid-cols-2">
            {shelf.map((book) => (
              <li
                key={book.slug}
                className="flex items-center gap-5 rounded-2xl border border-border-gray/60 bg-white p-5"
              >
                <Link href={bookHref(book)} className="shrink-0">
                  <Image
                    src={book.coverImage}
                    alt={book.coverAlt}
                    width={140}
                    height={224}
                    className="h-[104px] w-auto rounded-[4px] shadow-[0_6px_14px_-4px_rgba(0,49,34,0.3)]"
                  />
                </Link>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold tracking-[0.12em] text-dark-green/45 uppercase">
                    {new Date(book.datePublished).getFullYear()} · Phil Ganz
                  </p>
                  <h3 className="mt-1 text-[17px] leading-snug font-bold text-dark-green">
                    <Link
                      href={bookHref(book)}
                      className="transition-colors hover:text-brand-green"
                    >
                      {book.title}
                    </Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[13.5px] leading-relaxed text-dark-green/60">
                    {book.positioning}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How the library works */}
      <section className="bg-green-tint py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                title: "Educational first",
                body: "Each book is written to answer the questions families actually ask, with the arithmetic shown. No sales pitch inside the covers.",
              },
              {
                title: "Free tools behind every book",
                body: "The calculators, eligibility checkers, and program guides the books reference live on this site and are free with or without the book.",
              },
              {
                title: "Everywhere you buy books",
                body: "Amazon, Apple Books, Kobo, Google Play, and a growing list of retailers. Each book page shows exactly where it is stocked.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-gray/60 bg-white p-7"
              >
                <h3 className="text-[18px] font-bold text-dark-green">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-green/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Have a Question the Books Don't Answer?"
        subtitle="Talk with a licensed loan officer about your own situation. No credit pull, no obligation."
        ctaHref="/contact-us"
        ctaText="Talk With Phil's Team"
      />
    </>
  );
}
