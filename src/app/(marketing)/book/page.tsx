import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { bookConfig, liveEditions } from "@/lib/book";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title:
    "Make Florida Your Home — Phil Ganz's Guide to Florida Down Payment Assistance",
  description:
    "Florida handed out $50 million in down payment help last year. Phil Ganz's book shows first-time buyers every program — Hometown Heroes, FHA, and 105 more.",
  alternates: { canonical: "/book" },
  openGraph: {
    title:
      "Make Florida Your Home — Phil Ganz's Guide to Florida Down Payment Assistance",
    description:
      "The insider's guide to down payment assistance, Hometown Heroes, and buying your first Florida home without draining your savings.",
    url: "https://www.makefloridayourhome.com/book",
    type: "book",
    images: [
      {
        url: `${siteConfig.url}${bookConfig.coverImage}`,
        width: 1600,
        height: 2560,
        alt: bookConfig.coverAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Make Florida Your Home — Phil Ganz's Guide to Florida Down Payment Assistance",
    description:
      "The insider's guide to down payment assistance, Hometown Heroes, and buying your first Florida home without draining your savings.",
    images: [`${siteConfig.url}${bookConfig.coverImage}`],
  },
};

/* ------------------------------------------------------------------ */
/*  Content (book description used verbatim from the Amazon listing)   */
/* ------------------------------------------------------------------ */

const introParagraphs = [
  "Last year, Florida handed out $50 million in down payment help. It was claimed in about six months — by the buyers who knew to ask.",
  "Most Florida renters believe the down payment is the wall between them and owning a home. Here's what almost nobody tells them: Florida has quietly built one of the most generous homebuyer assistance systems in the country — 105 separate programs across all 67 counties, from the statewide Hometown Heroes program (up to $35,000 at 0% interest with no monthly payment) to county and city programs that reach six figures.",
  "The money is real. It's first-come, first-served. And nobody's job is to tell you it exists.",
  "In this plain-English guide, Phil Ganz — a nationally ranked top 1% mortgage originator who has helped thousands of families buy homes — walks you through every door in the wall:",
];

const chapterBullets = [
  {
    lead: "Hometown Heroes, completely explained",
    rest: "the five eligibility tests, the remote-worker trap, and what happens to the money later",
  },
  {
    lead: "Your county's programs",
    rest: "how to read the 105-program landscape and the five questions that size up any offer of assistance",
  },
  {
    lead: "The loan menu without the mystery",
    rest: "FHA, VA, USDA, and 3%-down conventional, compared honestly",
  },
  {
    lead: "The 90-day plan",
    rest: "from your first calculator to keys in hand, in the right order",
  },
  {
    lead: "What Florida actually costs",
    rest: "insurance, flood zones, doc stamps, and the tax breaks that start the day you own",
  },
  {
    lead: "The nine mistakes that kill deals",
    rest: "every one of them preventable",
  },
];

const closingParagraphs = [
  "Every chapter ends with a QR code to free, continuously updated online tools — eligibility checkers, calculators, and a live county-by-county program map — so this book never goes stale. No credit pull. No obligation. No folklore.",
  "The wall has a door. This book hands you the handle.",
];

const stats = [
  { value: "$50M", label: "Claimed in DPA Last Year" },
  { value: "105", label: "Programs Explained" },
  { value: "67", label: "Florida Counties Covered" },
  { value: "$35K", label: "Max Hometown Heroes Aid" },
];

const freeTools = [
  {
    title: "Florida DPA Interactive Map",
    description:
      "Every down payment assistance program in all 67 counties, on one live map.",
    href: "/florida-down-payment-assistance-interactive-map",
  },
  {
    title: "Florida DPA Calculator",
    description:
      "Size up your down payment assistance options for the county you're buying in.",
    href: "/florida-down-payment-assistance-calculator",
  },
  {
    title: "Hometown Heroes Program Guide",
    description:
      "Eligibility rules, income limits, and funding status for Florida's largest DPA program.",
    href: "/hometown-heroes",
  },
  {
    title: "105 Grants & Programs Guide",
    description:
      "The complete list of Florida first-time home buyer grants and programs.",
    href: "/learn/first-time-homebuyer/grants-and-programs",
  },
  {
    title: "Down Payment Assistance Hub",
    description:
      "How Florida DPA works — forgivable loans, deferred seconds, and grants.",
    href: "/down-payment-assistance",
  },
  {
    title: "FHA Loan Guide",
    description:
      "The first-time buyer's loan of choice — 3.5% down with flexible credit.",
    href: "/home-loan/fha-loan",
  },
];

const authorBio = [
  "Phil Ganz is a nationally ranked top 1% mortgage originator and President of Next Wave Mortgage (NMLS #2536820), the Fort Lauderdale-based lender behind MakeFloridaYourHome.com. Over 26+ years in the mortgage industry, he has helped thousands of families move from “maybe someday” to keys-in-hand.",
  "He wrote Make Florida Your Home for one reason: Florida's homebuyer assistance money is real, generous, and chronically unclaimed — because nobody's job is to tell buyers it exists. The book turns the 105-program landscape he navigates daily into a plain-English plan any first-time buyer can follow.",
  "Phil specializes in Florida home financing — first-time buyers, down payment assistance layering, self-employed income, and VA benefits — and holds individual NMLS license #37833.",
];

const faqs = [
  {
    question: "Who is Make Florida Your Home written for?",
    answer:
      "Florida renters and first-time buyers — especially anyone who believes the down payment puts homeownership out of reach. Florida counts you as a first-time buyer if you haven't owned a home in the past 3 years, so the book applies to far more people than most expect. If you're planning to buy anywhere in Florida in the next year or two, this is the playbook.",
  },
  {
    question: "What does the book cover?",
    answer:
      "The complete Florida home-buying landscape: a full chapter on the Hometown Heroes program, how to navigate all 105 down payment assistance programs across 67 counties, an honest comparison of FHA, VA, USDA, and 3%-down conventional loans, what Florida really costs — insurance, flood zones, and doc stamps — plus a 90-day plan from first calculator to closing and the nine preventable mistakes that kill deals.",
  },
  {
    question: "Will the book stay current as Florida's programs change?",
    answer:
      "Yes — it was built for that. This is the 2026–2027 edition, and every chapter ends with a QR code to continuously updated tools on this site, where income limits, funding status, and program details are maintained as Florida Housing and county agencies update them.",
  },
  {
    question: "Do I need to buy the book to use the free tools?",
    answer:
      "No. The eligibility checkers, calculators, and the county-by-county program map are free on this website, with no credit pull and no obligation. The book pulls everything together into a start-to-finish plan — the tools are free either way.",
  },
  {
    question: "Who is Phil Ganz?",
    answer:
      "Phil Ganz is a nationally ranked top 1% mortgage originator, a licensed loan originator (NMLS #37833), and President of Next Wave Mortgage in Fort Lauderdale, Florida. He has spent 26+ years in the mortgage industry and has helped thousands of families buy homes, with a focus on Florida first-time buyers and down payment assistance programs.",
  },
  {
    question:
      "What's the difference between the Kindle, paperback, hardcover, and Google Play editions?",
    answer:
      "The content is identical in all four. Kindle and Google Play Books deliver instantly — pick whichever ecosystem you read in. The paperback is the everyday print edition, and the hardcover is the durable, gift-ready version.",
  },
];

/* ------------------------------------------------------------------ */
/*  Structured data                                                    */
/* ------------------------------------------------------------------ */

/**
 * Canonical Person @id for Phil lives on his profile page
 * (/team/phil-ganz#person) — the same @id is emitted there, so Google
 * merges the author of this book with the profile entity.
 */
const authorId = `${siteConfig.url}/team/phil-ganz#person`;

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": authorId,
  name: "Phil Ganz",
  jobTitle: "Mortgage Expert / President",
  worksFor: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company,
  },
  url: `${siteConfig.url}/team/phil-ganz`,
  image: `${siteConfig.url}/images/team/phil-ganz.webp`,
  sameAs: [
    "https://www.amazon.com/author/philganz",
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/37833",
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "NMLS",
    value: "37833",
  },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${siteConfig.url}/book#book`,
  name: bookConfig.title,
  alternateName: bookConfig.subtitle,
  author: { "@type": "Person", "@id": authorId },
  publisher: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company,
  },
  datePublished: bookConfig.datePublished,
  inLanguage: "en-US",
  bookFormat: "https://schema.org/EBook",
  isbn: bookConfig.isbn,
  image: `${siteConfig.url}${bookConfig.coverImage}`,
  url: `${siteConfig.url}/book`,
  sameAs: [bookConfig.googleBooksUrl],
  description:
    "Florida has quietly built one of the most generous homebuyer assistance systems in the country — 105 programs across all 67 counties, from Hometown Heroes (up to $35,000 at 0% interest) to county programs reaching six figures. Phil Ganz walks first-time Florida buyers through every one, in plain English.",
  genre: ["Real Estate", "Personal Finance"],
  workExample: liveEditions.map((edition) => ({
    "@type": "Book",
    bookFormat: edition.schemaFormat,
    name: `${bookConfig.title} (${edition.format})`,
    ...(edition.isbn ? { isbn: edition.isbn } : {}),
    offers: {
      "@type": "Offer",
      url: edition.url,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.makefloridayourhome.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Make Florida Your Home (The Book)",
      item: "https://www.makefloridayourhome.com/book",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

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

function EditionButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {liveEditions.map((edition, i) => (
        <a
          key={edition.format}
          href={edition.url}
          target="_blank"
          rel="noopener"
          className={
            i === 0
              ? "group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              : "inline-flex items-center justify-center rounded-full border-2 border-brand-green/20 px-8 py-4 text-[16px] font-bold text-brand-green transition-colors hover:bg-brand-green/5"
          }
        >
          {edition.format === "Kindle eBook"
            ? "Get the Kindle Edition"
            : edition.format}
          {i === 0 && <ArrowIcon />}
        </a>
      ))}
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      <Script
        id="book-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <Script
        id="author-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-green-tint">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/[0.03]" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-green/[0.03]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
            {/* Left — content */}
            <div className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                The Book · 2026–2027 Edition
              </p>
              <h1 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-tight text-dark-green sm:text-[40px] lg:text-[48px]">
                <span className="text-brand-green">Make Florida</span> Your Home
              </h1>

              <div className="mt-5 max-w-xl text-[17px] leading-relaxed text-dark-green/70 sm:text-[18px]">
                <p>
                  The Insider&apos;s Guide to Down Payment Assistance, Hometown
                  Heroes, and Buying Your First Florida Home{" "}
                  <strong className="text-dark-green">
                    Without Draining Your Savings
                  </strong>
                </p>
              </div>

              {/* Byline */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/images/team/phil-ganz.webp"
                  alt="Phil Ganz, Mortgage Expert"
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <div>
                  <p className="text-[14px] font-semibold text-dark-green">
                    Written by{" "}
                    <Link
                      href="/team/phil-ganz"
                      className="text-brand-green hover:underline"
                    >
                      Phil Ganz
                    </Link>
                    , Mortgage Expert · NMLS #37833
                  </p>
                  <p className="text-[12.5px] text-dark-green/50">
                    Published August 11, 2026 · Page updated August 31, 2026
                  </p>
                </div>
              </div>

              {/* Mobile cover */}
              <div className="mx-auto mt-10 w-full max-w-[240px] lg:hidden">
                <Image
                  src={bookConfig.coverImage}
                  alt={bookConfig.coverAlt}
                  width={480}
                  height={768}
                  className="h-auto w-full rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                  priority
                />
              </div>

              {/* CTAs */}
              <div className="mt-10">
                <EditionButtons />
                <p className="mt-4 text-[14px] text-dark-green/50">
                  Every chapter links to free online tools — no credit pull, no
                  obligation.
                </p>
              </div>
            </div>

            {/* Right — book cover */}
            <div className="relative hidden py-16 lg:block lg:py-20">
              <div className="absolute -right-6 top-10 bottom-10 w-full rounded-3xl bg-brand-green/10" />
              <div className="relative mx-auto max-w-[400px]">
                <Image
                  src={bookConfig.coverImage}
                  alt={bookConfig.coverAlt}
                  width={800}
                  height={1280}
                  className="h-auto w-full rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reader reviews — thin trust strip */}
      <section className="border-b border-border-gray/40 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[220px_1fr_1fr] lg:gap-8">
            {/* Rating summary */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center gap-1 lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-review-gold"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-[15px] font-bold text-dark-green">
                5.0 on Amazon
              </p>
              <a
                href="https://www.amazon.com/dp/B0HDRNR5WW"
                target="_blank"
                rel="noopener"
                className="mt-1 inline-block text-[13px] text-dark-green/50 underline underline-offset-2 transition-colors hover:text-brand-green"
              >
                Read reviews on Amazon
              </a>
            </div>

            {/* Review 1 */}
            <figure className="rounded-xl border border-border-gray/60 bg-green-tint/50 px-6 py-5">
              <blockquote>
                <p className="text-[15px] font-bold leading-snug text-dark-green">
                  &ldquo;The must read home buying book&rdquo;
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-dark-green/60">
                  &ldquo;If you&rsquo;re thinking about buying your first home
                  in Florida &hellip; absolutely worth reading.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-3 text-[12.5px] font-medium text-dark-green/50">
                Tara · ★★★★★ · Verified Purchase
              </figcaption>
            </figure>

            {/* Review 2 */}
            <figure className="rounded-xl border border-border-gray/60 bg-green-tint/50 px-6 py-5">
              <blockquote>
                <p className="text-[15px] font-bold leading-snug text-dark-green">
                  &ldquo;Could literally save you thousands of dollars&rdquo;
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-dark-green/60">
                  &ldquo;Didn&rsquo;t realize how much Florida actually offers
                  first-time buyers until this book laid it out.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-3 text-[12.5px] font-medium text-dark-green/50">
                James · ★★★★★ · Verified Purchase
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border-gray/60 bg-green-tint p-6 text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
              >
                <span className="block text-[32px] font-black text-brand-green sm:text-[36px]">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[13px] font-medium text-dark-green/60 sm:text-[14px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] text-dark-green/40">
            Program data verified against{" "}
            <a
              href="https://www.floridahousing.org/live-local-act/hometown-heroes-program"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-brand-green"
            >
              Florida Housing Finance Corporation
            </a>{" "}
            and county program administrators.
          </p>
        </div>
      </section>

      {/* Inside the book */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
                <span className="text-brand-green">Inside</span> the Book
              </h2>
              {introParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-5 text-[16px] leading-relaxed text-dark-green/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <div className="space-y-4 lg:mt-16">
                {chapterBullets.map((bullet) => (
                  <div
                    key={bullet.lead}
                    className="flex items-start gap-4 rounded-xl border border-border-gray/60 bg-white px-6 py-5 transition-all duration-300 hover:border-brand-green/30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-brand-green"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[15px] leading-relaxed text-dark-green/80">
                      <strong className="font-bold text-dark-green">
                        {bullet.lead}
                      </strong>{" "}
                      — {bullet.rest}
                    </span>
                  </div>
                ))}
              </div>
              {closingParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-5 text-[16px] leading-relaxed text-dark-green/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free tools the book links to */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            The Book Links to{" "}
            <span className="text-brand-green">Free Tools</span> on This Site
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Every chapter ends with a QR code to a continuously updated tool or
            guide here on MakeFloridaYourHome.com. They&apos;re free with or
            without the book.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-xl border border-border-gray/60 bg-green-tint/50 p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16px] font-bold text-dark-green transition-colors group-hover:text-brand-green">
                    {tool.title}
                  </h3>
                  <span className="shrink-0 text-brand-green/50 transition-colors group-hover:text-brand-green">
                    <ArrowIcon />
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the author */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
            <div className="mx-auto w-full max-w-[260px] lg:max-w-none">
              <div className="relative">
                <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl bg-brand-green/10" />
                <Image
                  src="/images/team/phil-ganz.webp"
                  alt="Phil Ganz, President of Next Wave Mortgage and author of Make Florida Your Home"
                  width={640}
                  height={640}
                  className="relative h-auto w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="mt-6 space-y-2 text-center lg:text-left">
                <p className="text-[14px] font-semibold text-dark-green">
                  4.9 ★ · 100+ Google Reviews
                </p>
                <p className="text-[13px] text-dark-green/50">
                  NMLS #37833 ·{" "}
                  <a
                    href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/37833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-brand-green"
                  >
                    Verify on NMLS Consumer Access
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                About the Author
              </p>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[40px]">
                <Link
                  href="/team/phil-ganz"
                  className="text-brand-green hover:underline"
                >
                  Phil Ganz
                </Link>
                , Author of Make Florida Your Home
              </h2>
              <p className="mt-3 text-[15px] font-medium text-dark-green/60">
                Mortgage Expert · NMLS #37833 · President, Next Wave Mortgage
              </p>

              <div className="mt-7 rounded-xl border-l-[3px] border-l-brand-green bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <p className="text-[13px] font-bold uppercase tracking-[0.13em] text-brand-green">
                  Why I Wrote This Book
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70">
                  &ldquo;Florida buyers were constantly asking me the same
                  question: &lsquo;How much money do I actually need to buy a
                  home?&rsquo; I wrote Make Florida Your Home to put
                  Florida&apos;s major assistance programs, eligibility rules,
                  and homebuying strategies in one place &mdash; without the
                  jargon.&rdquo;
                </p>
              </div>

              {authorBio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-5 text-[16px] leading-relaxed text-dark-green/60"
                >
                  {paragraph}
                </p>
              ))}
              <Link
                href="/team/phil-ganz"
                className="group mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-brand-green hover:underline"
              >
                Read Phil&apos;s full profile
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editions */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            Choose Your <span className="text-brand-green">Edition</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Same book, four ways to read it.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {liveEditions.map((edition) => (
              <a
                key={edition.format}
                href={edition.url}
                target="_blank"
                rel="noopener"
                className="group flex flex-col items-center rounded-xl border border-border-gray/60 bg-green-tint/50 p-8 text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_24px_rgba(0,105,72,0.08)]"
              >
                <h3 className="text-[18px] font-bold text-dark-green">
                  {edition.format}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {edition.format === "Kindle eBook"
                    ? "Instant delivery. Read on any device."
                    : edition.format === "Paperback"
                      ? "The everyday print edition."
                      : edition.format === "Hardcover"
                        ? "Durable and gift-ready."
                        : "Preview free, read on Google."}
                </p>
                <span className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-[14px] font-bold text-white transition-shadow duration-300 group-hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]">
                    {edition.format === "Google Play Books"
                      ? "Read on Google Play"
                      : "Buy on Amazon"}
                    <ArrowIcon />
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Publication details */}
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border-gray/60 px-6 py-5 text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-dark-green/40">
              Publication Details
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-dark-green/50">
              {bookConfig.title} &mdash; 2026&ndash;2027 Edition &middot;
              Published August 11, 2026 &middot; Author: Phil Ganz &middot;
              Publisher: {siteConfig.company}
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-dark-green/50">
              Paperback ISBN 979-8191565255 &middot; Hardcover ISBN
              979-8192189283 &middot; Kindle ASIN B0HDRNR5WW &middot;{" "}
              <a
                href={bookConfig.googleBooksUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-brand-green"
              >
                Google Books record
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ
        faqs={faqs}
        bg="green-tint"
        description="Quick answers about the book, the editions, and the free tools behind every chapter. Can't find what you're looking for?"
      />

      {/* CTA */}
      <PageCTA
        heading="Start Before You Finish Chapter One"
        subtitle="The book gives you the plan. The free tools tell you what you qualify for — no credit pull, no obligation."
        ctaHref="/home-purchase-eligibility"
        ctaText="Check Your Home Purchase Eligibility"
      />
    </>
  );
}
