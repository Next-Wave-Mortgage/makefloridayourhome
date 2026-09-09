import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { getBook, liveEditions, bookHref } from "@/lib/books";
import {
  authorSchema,
  buildBookBreadcrumb,
  buildBookSchema,
  buildFaqSchema,
} from "@/lib/bookSchema";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { RetailerGrid } from "@/components/books/RetailerGrid";
import { AlsoByPhilGanz } from "@/components/books/AlsoByPhilGanz";
import { TrackedRetailerLink } from "@/components/books/TrackedRetailerLink";
import { bookAnalyticsKey } from "@/lib/books";

const book = getBook("reverse-mortgage-inheritance-strategy")!;
const editions = liveEditions(book);
const pageUrl = `${siteConfig.url}${bookHref(book)}`;
const bookKey = bookAnalyticsKey(book);

const pageTitle = "The Reverse Mortgage Inheritance Strategy by Phil Ganz";
const pageDescription =
  "The adult child's guide to a parent's reverse mortgage: who owns the house, what happens to the inheritance, what heirs must do when the loan comes due, and when Phil Ganz would say no.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/books/reverse-mortgage-inheritance-strategy" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "book",
    images: [
      {
        url: `${siteConfig.url}${book.ogImage ?? book.coverImage}`,
        width: 1200,
        height: 1920,
        alt: book.coverAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteConfig.url}${book.ogImage ?? book.coverImage}`],
  },
};

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const introParagraphs = [
  "Most families treat a reverse mortgage as a last resort. Used properly, it is one of the most powerful financial tools your parents own. Somebody in your family has raised the idea, which makes it your decision as much as theirs, and you are being asked what you think before anyone has told you how it actually works.",
  "This book is written for you, not for them. Your parents' house is the largest asset they hold and the only one earning nothing. It does not compound and it pays no dividend. It sits on a street doing nothing while every other asset in the family works. A reverse mortgage is the instrument that puts it to work, and used at the right time it can fund their retirement, keep your own money where it belongs, and leave more behind rather than less.",
  "Most families never get that far, because they answer the wrong question. They ask whether a reverse mortgage is good or bad. The real question is quieter: whose money pays for your parents' next ten years, theirs or yours?",
];

const chapters = [
  {
    n: "01",
    title: "Mom Said She's Considering a Reverse Mortgage",
    blurb:
      "Why the adult child ends up holding this decision, and the one question to answer before anything else.",
  },
  {
    n: "02",
    title: "What a Reverse Mortgage Really Is",
    blurb:
      "The HECM, the age 62 rule, HUD counseling, and how the amount a borrower can access is actually calculated.",
  },
  {
    n: "03",
    title: "Does the Bank Own Mom's House?",
    blurb:
      "No. Title stays with the borrower. Where the fear came from, and the harder concern underneath it.",
  },
  {
    n: "04",
    title: "What Happens to Our Inheritance?",
    blurb:
      "The non-recourse guarantee, the 95 percent rule for an underwater house, and the arithmetic of what is left.",
  },
  {
    n: "05",
    title: "What Happens When Mom or Dad Dies?",
    blurb:
      "The servicer's notification clock, the 30-day letter, the six-month deadline, and the two 90-day extensions.",
  },
  {
    n: "06",
    title: "What Happens If They Need Assisted Living?",
    blurb:
      "The principal residence requirement and its single exception: twelve consecutive months in a health care institution.",
  },
  {
    n: "07",
    title: "Taxes, Insurance and Maintenance: What Never Goes Away",
    blurb:
      "The loan removes the mortgage payment and nothing else. The four obligations that put a loan in default.",
  },
  {
    n: "08",
    title: "How Much Does a Reverse Mortgage Really Cost?",
    blurb:
      "Line by line through a real closing statement: the origination fee cap, the 2 percent upfront premium, the 0.50 percent annual premium.",
  },
  {
    n: "09",
    title: "HECM vs HELOC vs Selling vs Downsizing",
    blurb:
      "The same house, four ways to get money out of it, compared on cost, risk, and who ends up holding the bill.",
  },
  {
    n: "10",
    title: "Protecting a Non-Borrowing Spouse",
    blurb:
      "The narrow, conditional protection for a spouse under 62, and why it only works if the paperwork was right at closing.",
  },
  {
    n: "11",
    title: "The Reverse Mortgage Line of Credit",
    blurb:
      "The unused line grows every month, compounding at the loan's own rate, whether or not anybody touches it.",
  },
  {
    n: "12",
    title: "Five Times I Would NOT Recommend One",
    blurb:
      "A short expected stay, obligations they cannot carry, a resident who cannot be protected, a cheaper path, and someone else driving the decision.",
  },
  {
    n: "13",
    title: "Questions Every Adult Child Should Ask the Loan Officer",
    blurb:
      "The specific questions, and the answers that should end the conversation.",
  },
  {
    n: "14",
    title: "The Family Meeting",
    blurb:
      "How to have the conversation with siblings and parents so that nobody is surprised later.",
  },
  {
    n: "15",
    title: "What Happens After Closing",
    blurb:
      "Annual occupancy certifications, servicer statements, and the paperwork heirs will need to find.",
  },
  {
    n: "16",
    title: "What Heirs Need to Do When the Loan Becomes Due",
    blurb:
      "The step-by-step for the estate: respond in writing, get the appraisal, choose between keep, sell, and deed-in-lieu.",
  },
];

const whoItsFor = [
  "Adult children whose parent is considering, or already has, a reverse mortgage",
  "Homeowners 62 and older who want their family to understand the decision",
  "Heirs who have just received the due-and-payable letter",
  "Siblings trying to agree on whether to keep or sell the family home",
  "Families weighing a reverse mortgage against a HELOC, selling, or downsizing",
  "A spouse under 62 who is not on the loan",
  "Realtors working with older sellers and their families",
  "Financial planners, CPAs, and estate professionals advising clients with home equity",
];

const learnItems = [
  {
    lead: "Who actually owns the house",
    rest: "title stays with the borrower, and what the lender's lien does and does not allow",
  },
  {
    lead: "What the inheritance really looks like",
    rest: "the non-recourse guarantee, the 95 percent rule, and how to size what is left on any given date",
  },
  {
    lead: "The clock that starts at death",
    rest: "60 days for the servicer to notify HUD, 30 days after that to notify the family, 30 days to state intent, six months to act, and up to two 90-day extensions",
  },
  {
    lead: "What never goes away",
    rest: "property taxes, hazard insurance, HOA dues, and upkeep are still the borrower's, and missing any of them can put the loan in default",
  },
  {
    lead: "What it costs, line by line",
    rest: "the origination fee ceiling, the 2 percent upfront mortgage insurance premium, and the 0.50 percent annual premium that rides on the balance",
  },
  {
    lead: "When the line of credit is the whole point",
    rest: "how the unused line grows and compounds, and why timing the loan early can matter more than the amount",
  },
  {
    lead: "When the answer is no",
    rest: "five situations where Phil would not put a client into this loan, said flatly",
  },
  {
    lead: "What to do when the loan comes due",
    rest: "a working checklist for the estate, from the first letter to the closing table",
  },
];

const stats = [
  { value: "62+", label: "Minimum borrower age" },
  { value: "95%", label: "Rule for an underwater sale" },
  { value: "12 mo", label: "Outside window for heirs" },
  { value: "16", label: "Chapters, 189 pages" },
];

const relatedResources = [
  {
    title: "Check Reverse Mortgage Eligibility",
    description:
      "See whether a Florida reverse mortgage or HECM option fits. Two minutes, no credit pull.",
    href: "/check-reverse-mortgage-eligibility",
  },
  {
    title: "Reverse Mortgage Closing Costs in Florida",
    description:
      "Every fee on a Florida HECM closing statement, including doc stamps and how costs are paid.",
    href: "/learn/reverse-mortgage-closing-costs-florida",
  },
  {
    title: "How a HELOC Works in Florida",
    description:
      "The conventional alternative the book compares against, with Florida-specific rules.",
    href: "/learn/how-does-heloc-work-in-florida",
  },
  {
    title: "Florida Property Tax Exemptions for Seniors",
    description:
      "The tax bill is one of the four obligations that never goes away. These exemptions lower it.",
    href: "/learn/florida-property-tax-exemptions-for-seniors",
  },
  {
    title: "Florida Senior Homebuyer Grants & Programs",
    description:
      "Programs for older homeowners and buyers that can change the downsizing math.",
    href: "/learn/florida-senior-homebuyer-grants-programs",
  },
  {
    title: "Talk With Phil's Team",
    description:
      "Bring the questions from Chapter 13. A licensed loan officer will answer them.",
    href: "/contact-us",
  },
];

const authorBio = [
  "Phil Ganz is a nationally ranked top 1% mortgage originator and President of Next Wave Mortgage (NMLS #2536820), the Fort Lauderdale-based lender behind MakeFloridaYourHome.com. Over 26+ years in the mortgage industry he has helped thousands of families through the biggest financial decision of their lives.",
  "He wrote The Reverse Mortgage Inheritance Strategy because the adult children of his clients kept asking the same questions, usually after the decision had already been made. The book answers them in order, with the arithmetic shown, and includes the chapter he considers the most important one: the five situations where he would not recommend the loan at all.",
  "Phil holds individual NMLS license #37833 and specializes in home financing for Florida families, including reverse mortgages, first-time buyers, and down payment assistance.",
];

const faqs = [
  {
    question: "What happens to a reverse mortgage when the borrower dies?",
    answer:
      "The loan becomes due and payable. The servicer has 60 days to notify HUD and then 30 days to notify the estate or heirs. The letter gives the family 30 days to state, in writing, what they intend to do: keep the house by paying off the balance, sell it, or hand it back. It is 30 days to state an intention, not 30 days to close a sale. The servicer must take the first legal step toward foreclosure no later than six months from the start of its clock, and HUD allows up to two 90-day extensions when the family is actively working toward a sale or payoff, so twelve months is the outside edge of the family's time.",
  },
  {
    question: "Does a reverse mortgage eliminate an inheritance?",
    answer:
      "No, but it changes what the inheritance is. The house is still part of the estate. What heirs inherit is the equity left after the loan balance is paid, and that balance grows every month because interest and mortgage insurance are added to it rather than paid. Whether anything is left depends on the home's value, how long the loan ran, and how much was drawn. The book walks through how to estimate that number on any given date.",
  },
  {
    question: "Can children inherit a house with a reverse mortgage on it?",
    answer:
      "Yes. Title passes through the estate the same way it would without the loan. The difference is that the lender's lien must be satisfied. Heirs who want to keep the house pay off the balance, typically with a new mortgage or cash. Heirs who do not want it can sell, or sign a deed in lieu of foreclosure and walk away with no personal liability.",
  },
  {
    question: "Can heirs keep the house?",
    answer:
      "Yes, and they have a specific advantage when the loan balance exceeds the home's value. Under the 95 percent rule, the estate or heirs may satisfy the loan by paying the lesser of the full balance or 95 percent of the current appraised value. If the house is worth more than the balance, heirs simply pay the balance, usually by refinancing into a conventional mortgage in their own names.",
  },
  {
    question: "Does the reverse mortgage lender own the home?",
    answer:
      "No. The Consumer Financial Protection Bureau's answer is that title to the home remains with the borrower. In fact, holding title in your own name or living trust is a condition of getting the loan at all. The lender holds a lien, the same way any mortgage lender does. The borrower can sell, refinance, or leave the house to heirs at any time, subject to paying the loan off.",
  },
  {
    question:
      "What happens if the loan balance is more than the house is worth?",
    answer:
      "The HECM is non-recourse and insured by FHA. Neither the borrower nor the heirs ever owe more than the home is worth, and the lender cannot come after other assets or the estate for the shortfall. The estate or heirs can sell the house for at least 95 percent of appraised value and the FHA insurance fund absorbs the rest, or they can deed the house to the lender and owe nothing.",
  },
  {
    question: "How much time do heirs have after the borrower dies?",
    answer:
      "Practically, six months from the servicer's clock, with up to two 90-day extensions for a total of twelve months. The extensions are not automatic. The family has to show it is actively listing the property or arranging a payoff. The book's Chapter 16 is a working checklist for using that time well.",
  },
  {
    question: "What does a reverse mortgage cost?",
    answer:
      "The largest items are the FHA upfront mortgage insurance premium of 2 percent of the home's maximum claim amount (the appraised value, capped at the HECM lending limit), an origination fee that is capped at $6,000 and can be negotiated lower, third-party closing costs, and an annual mortgage insurance premium of 0.50 percent of the outstanding balance that accrues onto the loan rather than being billed. In the worked example in the book, putting the loan on a $480,000 house costs roughly $19,000, which is why the loan rewards a long stay and punishes a short one.",
  },
  {
    question: "Is this book about Florida only?",
    answer:
      "No. The HECM is a federal program and the rules in the book apply nationwide. The book is written for any family in the United States. Florida-specific details, like documentary stamp taxes on the closing statement, are covered separately on this site.",
  },
  {
    question: "Which edition should I buy?",
    answer:
      "The content is identical across editions. The paperback and hardcover are on Amazon. The ebook is on Apple Books, Kobo, Google Play Books, and the other retailers listed on this page, and the Google Play edition is free.",
  },
];

/* ------------------------------------------------------------------ */
/*  Structured data                                                    */
/* ------------------------------------------------------------------ */

const bookSchema = buildBookSchema(book, pageDescription);
const breadcrumbSchema = buildBookBreadcrumb(book);
const faqSchema = buildFaqSchema(faqs);

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

const CheckIcon = () => (
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
);

function EditionButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {editions.map((edition, i) => (
        <TrackedRetailerLink
          key={edition.format}
          href={edition.url}
          retailer={
            edition.format === "Google Play Books" ? "google" : "amazon"
          }
          bookKey={bookKey}
          format={edition.format.toLowerCase().replace(/\s+/g, "_")}
          className={
            i === 0
              ? "group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              : "inline-flex items-center justify-center rounded-full border-2 border-brand-green/20 px-8 py-4 text-[16px] font-bold text-brand-green transition-colors hover:bg-brand-green/5"
          }
        >
          {edition.format === "Paperback"
            ? "Get the Paperback"
            : edition.format === "Google Play Books"
              ? "Read Free on Google Play"
              : edition.format}
          {i === 0 && <ArrowIcon />}
        </TrackedRetailerLink>
      ))}
    </div>
  );
}

export default function ReverseMortgageBookPage() {
  return (
    <>
      <JsonLd id="book-schema" data={bookSchema} />
      <JsonLd id="author-schema" data={authorSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="faq-schema" data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-green-tint">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/[0.03]" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-green/[0.03]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
            <div className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
              <nav
                aria-label="Breadcrumb"
                className="mb-5 text-[13px] text-dark-green/50"
              >
                <Link href="/" className="hover:text-brand-green">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/books" className="hover:text-brand-green">
                  Books
                </Link>
                <span className="mx-2">/</span>
                <span className="text-dark-green/80">{book.title}</span>
              </nav>

              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[13px] font-semibold tracking-[0.2em] text-brand-green uppercase">
                  The Phil Ganz Mortgage Library
                </p>
                {book.badge && (
                  <span className="rounded-full bg-brand-green px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-white uppercase">
                    {book.badge}
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-[32px] leading-[1.15] font-bold tracking-tight text-dark-green sm:text-[40px] lg:text-[48px]">
                The Reverse Mortgage{" "}
                <span className="text-brand-green">Inheritance Strategy</span>
              </h1>

              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-dark-green/70 sm:text-[18px]">
                Don&apos;t Just Protect the House,{" "}
                <strong className="text-dark-green">
                  Protect the Family Wealth.
                </strong>{" "}
                The adult child&apos;s guide to a parent&apos;s reverse
                mortgage.
              </p>

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
                    Published September 6, 2026 · Page updated September 9, 2026
                  </p>
                </div>
              </div>

              {/* Mobile cover */}
              <div className="mx-auto mt-10 w-full max-w-[240px] lg:hidden">
                <Image
                  src={book.coverImage}
                  alt={book.coverAlt}
                  width={500}
                  height={800}
                  className="h-auto w-full rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                  priority
                />
              </div>

              <div className="mt-10">
                <EditionButtons />
                <p className="mt-4 text-[14px] text-dark-green/50">
                  Also on Apple Books, Kobo, and more.{" "}
                  <a
                    href="#where-to-buy"
                    className="font-semibold text-brand-green underline-offset-2 hover:underline"
                  >
                    See every retailer
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="relative hidden py-16 lg:block lg:py-20">
              <div className="absolute top-10 -right-6 bottom-10 w-full rounded-3xl bg-brand-green/10" />
              <div className="relative mx-auto max-w-[400px]">
                <Image
                  src={book.coverImage}
                  alt={book.coverAlt}
                  width={1000}
                  height={1600}
                  className="h-auto w-full rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
            </div>
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
            Rules described in the book follow the FHA Home Equity Conversion
            Mortgage (HECM) program as administered by HUD, which applies
            nationwide.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white pb-4 sm:pb-6">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="rounded-2xl border border-border-gray/60 bg-green-tint p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
              <div>
                <p className="text-[13px] font-semibold tracking-[0.2em] text-brand-green uppercase">
                  Who This Book Is For
                </p>
                <h2 className="mt-3 text-[26px] leading-tight font-bold text-dark-green sm:text-[30px]">
                  The people who will{" "}
                  <span className="text-brand-green">
                    live with the decision
                  </span>
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-green/65">
                  The borrower signs the loan. Everyone below inherits its
                  consequences. The book is addressed to them.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {whoItsFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 text-[15px] leading-snug text-dark-green/80"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the book */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[42px]">
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
              <blockquote className="mt-7 rounded-xl border-l-[3px] border-l-brand-green bg-green-tint px-6 py-5">
                <p className="text-[15.5px] leading-relaxed text-dark-green/80 italic">
                  &ldquo;Used deliberately, the house pays for what is coming.
                  Ignored, it gets spent anyway, and nobody chose it.&rdquo;
                </p>
                <footer className="mt-2 text-[13px] font-semibold text-dark-green/50">
                  Phil Ganz, from the back cover
                </footer>
              </blockquote>
            </div>

            <div>
              <p className="text-[13px] font-semibold tracking-[0.2em] text-brand-green uppercase lg:mt-4">
                What Readers Will Learn
              </p>
              <div className="mt-4 space-y-3">
                {learnItems.map((item) => (
                  <div
                    key={item.lead}
                    className="flex items-start gap-4 rounded-xl border border-border-gray/60 bg-white px-6 py-4 transition-all duration-300 hover:border-brand-green/30"
                  >
                    <CheckIcon />
                    <span className="text-[15px] leading-relaxed text-dark-green/80">
                      <strong className="font-bold text-dark-green">
                        {item.lead}
                      </strong>{" "}
                      — {item.rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter list */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[42px]">
            Sixteen Chapters, in the{" "}
            <span className="text-brand-green">Order the Questions Come</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-dark-green/60">
            The book follows the sequence a family actually goes through, from
            the first phone call to the day the loan comes due. Every chapter
            ends with what it means for your family.
          </p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((ch) => (
              <li
                key={ch.n}
                className="rounded-xl border border-border-gray/60 bg-white p-5 transition-all duration-300 hover:border-brand-green/30"
              >
                <span className="text-[12px] font-black tracking-[0.15em] text-brand-green/70">
                  CHAPTER {ch.n}
                </span>
                <h3 className="mt-1.5 text-[15.5px] leading-snug font-bold text-dark-green">
                  {ch.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-dark-green/60">
                  {ch.blurb}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related resources on this site */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[42px]">
            Free Resources{" "}
            <span className="text-brand-green">That Go With the Book</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            The book is national. These guides and tools cover the Florida
            specifics and the next step, and they are free with or without it.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-xl border border-border-gray/60 bg-green-tint/50 p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16px] font-bold text-dark-green transition-colors group-hover:text-brand-green">
                    {r.title}
                  </h3>
                  <span className="shrink-0 text-brand-green/50 transition-colors group-hover:text-brand-green">
                    <ArrowIcon />
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {r.description}
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
                  alt="Phil Ganz, President of Next Wave Mortgage and author of The Reverse Mortgage Inheritance Strategy"
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
              <p className="text-[13px] font-semibold tracking-[0.2em] text-brand-green uppercase">
                About the Author
              </p>
              <h2 className="mt-3 text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[40px]">
                <Link
                  href="/team/phil-ganz"
                  className="text-brand-green hover:underline"
                >
                  Phil Ganz
                </Link>
                , Author of The Reverse Mortgage Inheritance Strategy
              </h2>
              <p className="mt-3 text-[15px] font-medium text-dark-green/60">
                Mortgage Expert · NMLS #37833 · President, Next Wave Mortgage
              </p>

              <div className="mt-7 rounded-xl border-l-[3px] border-l-brand-green bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <p className="text-[13px] font-bold tracking-[0.13em] text-brand-green uppercase">
                  Why I Wrote This Book
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70">
                  &ldquo;I have been doing this for 26 years. In that time I
                  have talked more people out of this loan than I have put into
                  it, and the ones I talked out of it are the reason I am
                  willing to advocate for it anywhere else in this book. A
                  product that is right for everyone is a product nobody should
                  trust.&rdquo;
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

      {/* Editions on Amazon / Google */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[42px]">
            Choose Your <span className="text-brand-green">Edition</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Same book in every format. More retailers below.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {editions.map((edition) => (
              <TrackedRetailerLink
                key={edition.format}
                href={edition.url}
                retailer={
                  edition.format === "Google Play Books" ? "google" : "amazon"
                }
                bookKey={bookKey}
                format={edition.format.toLowerCase().replace(/\s+/g, "_")}
                className="group flex flex-col items-center rounded-xl border border-border-gray/60 bg-green-tint/50 p-8 text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_24px_rgba(0,105,72,0.08)]"
              >
                <h3 className="text-[18px] font-bold text-dark-green">
                  {edition.format}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {edition.format === "Paperback"
                    ? "The everyday print edition. 189 pages."
                    : edition.format === "Hardcover"
                      ? "Durable and gift-ready."
                      : edition.format === "Kindle eBook"
                        ? "Instant delivery. Read on any device."
                        : "Free to read on Google Play."}
                </p>
                <span className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-[14px] font-bold text-white transition-shadow duration-300 group-hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]">
                    {edition.format === "Google Play Books"
                      ? "Read on Google Play"
                      : "Buy on Amazon"}
                    <ArrowIcon />
                  </span>
                </span>
              </TrackedRetailerLink>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border-gray/60 px-6 py-5 text-center">
            <p className="text-[12px] font-bold tracking-[0.15em] text-dark-green/40 uppercase">
              Publication Details
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-dark-green/50">
              {book.title}: {book.subtitle} &middot; Published September 6, 2026
              &middot; Author: Phil Ganz &middot; Publisher:{" "}
              {book.publisher.name} &middot; 189 pages
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-dark-green/50">
              Paperback ISBN 979-8172370588 &middot; Hardcover ISBN
              979-8172404962 &middot; eBook ISBN 979-8233841170 &middot;{" "}
              <a
                href={book.googleBooksUrl}
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

      {/* Where to buy: every live retailer */}
      <RetailerGrid book={book} />

      {/* Also by */}
      <AlsoByPhilGanz currentSlug={book.slug} bg="white" />

      {/* FAQ */}
      <PageFAQ
        heading={
          <>
            Reverse Mortgage{" "}
            <span className="text-brand-green">Questions Families Ask</span>
          </>
        }
        faqs={faqs}
        bg="green-tint"
        description="Short answers to the questions the book answers in full. The rules below follow the federal HECM program and apply nationwide."
      />

      {/* CTA */}
      <PageCTA
        heading="Bring the Questions From Chapter 13"
        subtitle="A licensed loan officer will walk your family through the numbers for your parents' house. No credit pull, no obligation."
        ctaHref="/check-reverse-mortgage-eligibility"
        ctaText="Check Reverse Mortgage Eligibility"
      />
    </>
  );
}
