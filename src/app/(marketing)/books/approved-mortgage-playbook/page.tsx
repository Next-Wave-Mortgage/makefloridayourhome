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

const book = getBook("approved-mortgage-playbook")!;
const editions = liveEditions(book);
const pageUrl = `${siteConfig.url}${bookHref(book)}`;
const bookKey = bookAnalyticsKey(book);

const pageTitle =
  "APPROVED by Phil Ganz: The Mortgage Playbook Your Bank May Never Show You";
const pageDescription =
  "48 real buyer questions, each with a 30-second answer: FHA loans, gift funds, co-signers, seller credits, zero-down programs, and exactly what to do after a bank says no.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/books/approved-mortgage-playbook" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "book",
    images: [
      {
        url: `${siteConfig.url}${book.ogImage ?? book.coverImage}`,
        width: 1000,
        height: 1600,
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
  "One bank's no isn't the end of your house search. It means one loan structure at one lender didn't work — not that homeownership is impossible. You might need a different loan, a different way to show your income, or a lender whose menu includes something your bank's doesn't.",
  "APPROVED puts 48 real buyer questions into four parts. You start with why you were told no, work through the FHA deal-savers, explore the hidden menu beyond FHA, and finish with a playbook for your next conversation. Every question gets a 30-second answer up front, then the explanation in short sections with real dollar figures and the arithmetic shown, so you can open straight to the problem you're facing.",
  "The question running through the whole book is simple: is that a HUD rule, or is that this lender's rule? Banks have different menus, and you need to know which limit you're actually hearing.",
];

const parts = [
  {
    label: "Part I",
    title: "Why You Were Told No",
    start: 1,
    blurb:
      "What a denial actually means, who decides an approval, and why your bank's box is smaller than the rulebook.",
    chapters: [
      "The Bank Said No. Now What?",
      "Why Your Bank's Box Is Smaller Than the Rulebook",
      "Is FHA Really the Loan of Last Resort?",
      "What Actually Decides an Approval?",
      "Why Doesn't My Broker Just Find the Lowest Rate?",
      "Is Conventional Always Cheaper Than FHA?",
    ],
  },
  {
    label: "Part II",
    title: "The FHA Deal-Savers",
    start: 7,
    blurb:
      "The flexibilities most buyers never hear about: gift funds, co-borrowers, seller credits, income the computer missed, and more.",
    chapters: [
      "Can I Really Buy With 3.5% Down?",
      "Can Someone Help Me Qualify Without Moving In?",
      "Co-Signer or Co-Borrower: What's the Difference?",
      "Can My Family Just Give Me the Money?",
      "How Much Can the Seller Pay?",
      "Lower Price or Seller Credit: Which One Actually Saves Me Money?",
      "What Is Down Payment Assistance, and Can I Stack It With FHA?",
      "Why Would I Ever Choose an Adjustable Rate?",
      "Can My First Home Be a Fourplex?",
      "The Appraisal Found Repairs. Does Closing Really Stop?",
      'The Computer Said "Refer." Am I Done?',
      "Is 43% Really the Maximum DTI?",
      "Do Student Loans Kill My Mortgage?",
      "Does Overtime Count?",
      "When the Paystub Tells the Wrong Story",
      "Can Untaxed Income Count for More?",
      "Can a Roommate Help Me Qualify?",
      "I'm on Leave. Can I Still Qualify?",
      "I Have No Credit Score. Is That a No?",
      "How Long After a Bankruptcy or Foreclosure?",
      "The Condo Isn't FHA-Approved. Now What?",
      "Can I Get FHA on a Manufactured Home?",
      "The House Needs Work. Do I Walk Away?",
      "Should I Just Build It?",
      "Can I Take Over Someone's Low-Rate Mortgage?",
      "What Is a 2-1 Buydown, Really?",
    ],
  },
  {
    label: "Part III",
    title: "The Hidden Menu Beyond FHA",
    start: 33,
    blurb:
      "The programs your bank may not offer at all: zero-down loans, self-employed workarounds, and buying for family.",
    chapters: [
      "HomeReady, Home Possible, HomeOne",
      "Zero Down: VA",
      "Zero Down: USDA",
      "I'm Self-Employed and My Tax Returns Look Bad",
      "I Have Assets, Not Income",
      "When the Property Qualifies More Than You Do",
      "Buying a Home for a Parent or an Adult Child",
      "I Already Own a Home and Want Another",
      "Doctors, Nurses, Teachers, First Responders",
      "Should I Refinance or Get a HELOC?",
      "Reverse Mortgages, Briefly",
      "Buying After a Divorce",
      "Getting Your Credit Mortgage-Ready",
    ],
  },
  {
    label: "Part IV",
    title: "The Playbook",
    start: 46,
    blurb:
      "Turning everything above into your next conversation, with checklists and the exact questions to ask.",
    chapters: [
      "The APPROVED Checklist",
      "Questions to Ask Any Loan Officer",
      "Think You Were Told No Too Quickly?",
    ],
  },
];

const whoItsFor = [
  "Buyers a bank has already told no",
  "First-time buyers who assume they can't qualify yet",
  "Self-employed borrowers whose tax returns undersell the business",
  "Families gifting a down payment or co-signing to help someone qualify",
  "Buyers with student loans, thin credit, or no credit score at all",
  "Anyone comparing FHA against conventional, VA, or USDA",
  "Parents buying for an adult child, or children buying for a parent",
  "Realtors and loan officers who want the deal-saver playbook",
];

const learnItems = [
  {
    lead: "Why the bank said no",
    rest: "the difference between one lender's overlay box and the actual HUD rulebook, and how to tell which one turned you down",
  },
  {
    lead: "The real FHA minimum",
    rest: "buying with 3.5 percent down, what counts toward it, and the credit realities behind the headline number",
  },
  {
    lead: "Gift funds, done right",
    rest: "who is allowed to give you the down payment, the documentation that keeps it clean, and why nobody should ever write “cousin” on the gift letter",
  },
  {
    lead: "Seller credits, program by program",
    rest: "how much the seller can pay toward your costs on conventional, FHA, USDA, and VA — including the VA move that pays off your debts",
  },
  {
    lead: "Co-signers and co-borrowers",
    rest: "how someone can help you qualify without moving in, and what each label actually commits them to",
  },
  {
    lead: "Income the computer missed",
    rest: "overtime, untaxed income, roommate rent, parental leave, and self-employed returns that look worse than the business really is",
  },
  {
    lead: "The hidden menu beyond FHA",
    rest: "HomeReady and Home Possible, zero-down VA and USDA, bank statement loans, and buying a home for a parent or adult child",
  },
  {
    lead: "The playbook after a no",
    rest: "the APPROVED Checklist, the questions to ask any loan officer, and the exact words for your next conversation",
  },
];

const stats = [
  { value: "48", label: "Buyer questions answered" },
  { value: "30 sec", label: "Answer up front, every chapter" },
  { value: "3.5%", label: "FHA minimum down payment" },
  { value: "389", label: "Pages across 4 parts" },
];

const relatedResources = [
  {
    title: "Check FHA Loan Eligibility",
    description:
      "See whether the FHA structures in the book fit your file. Two minutes, no credit pull.",
    href: "/check-fha-loan-eligibility",
  },
  {
    title: "Florida Down Payment Assistance",
    description:
      "Chapter 13 asks whether DPA stacks with FHA. Here is every Florida program that can.",
    href: "/down-payment-assistance",
  },
  {
    title: "Down Payment Assistance Calculator",
    description:
      "The county-by-county calculator behind the book's assistance examples. Free, no signup.",
    href: "/florida-down-payment-assistance-calculator",
  },
  {
    title: "First-Time Home Buyer Guide",
    description:
      "The Florida-specific companion to Part I: programs, timelines, and first steps.",
    href: "/first-time-home-buyer",
  },
  {
    title: "FHA Loans in Florida",
    description:
      "Requirements, limits, and the Florida details that sit alongside the book's national rules.",
    href: "/home-loan/fha-loan",
  },
  {
    title: "Talk With Phil's Team",
    description:
      "Bring the questions from Chapter 47. A licensed loan officer will answer them.",
    href: "/contact-us",
  },
];

const authorBio = [
  "Phil Ganz is a nationally ranked top 1% mortgage originator and President of Next Wave Mortgage (NMLS #2536820), the Fort Lauderdale-based lender behind MakeFloridaYourHome.com. Over 26+ years in the mortgage industry he has helped thousands of families through the biggest financial decision of their lives.",
  "He wrote APPROVED because the most expensive sentence in home buying is “the bank said no, so we stopped looking.” The 48 questions in the book are the ones real buyers ask after a denial, answered the way he answers them across the desk: the 30-second version first, then the explanation with the arithmetic shown.",
  "Phil holds individual NMLS license #37833 and specializes in home financing for Florida families, including FHA loans, first-time buyers, and down payment assistance.",
];

const faqs = [
  {
    question: "What is APPROVED about?",
    answer:
      "APPROVED is a consumer guide to what a mortgage denial actually means and what to do next. It puts 48 real buyer questions into four parts: why you were told no, the FHA deal-savers, the loan programs beyond FHA that your bank may not offer, and a playbook for your next lender conversation. Each chapter opens with a 30-second answer, then explains the rule with real dollar figures. It is educational, not a loan offer.",
  },
  {
    question: "Can I really buy a house with 3.5 percent down?",
    answer:
      "Yes. The FHA minimum down payment is 3.5 percent of the purchase price for borrowers who meet the program's credit requirements, and the entire amount can come from an allowable gift rather than your own savings. The book walks through what counts toward the 3.5 percent, how gift funds are documented, and how seller credits can cover closing costs on top of it.",
  },
  {
    question: "Can my family give me the down payment?",
    answer:
      "Yes. FHA allows gift funds from family members and other approved donors to cover the entire down payment. The catch is the paperwork: HUD's definition of family does not include everyone you consider family, so the same gift can require different documentation depending on who gives it and how the relationship is labeled. Chapter 10 covers the gift letter, the paper trail, and the labeling traps that stall closings.",
  },
  {
    question: "Can someone help me qualify without moving in?",
    answer:
      "Often, yes. FHA permits non-occupant co-borrowers, meaning a parent or other qualifying person can be on the loan and lend you their income and credit without living in the house. The book explains how it works, what the co-borrower is actually committing to, and the difference between a co-signer and a co-borrower.",
  },
  {
    question: "How much can the seller pay toward my costs?",
    answer:
      "It depends on the program. FHA and USDA allow seller contributions up to 6 percent of the price, conventional loans allow 3 percent at the lowest down payments (more as your down payment grows), and VA allows all customary closing costs plus a separate 4 percent concession that can even pay off the buyer's debts. Chapter 11 compares all four side by side, and Chapter 12 shows when a seller credit beats a lower price.",
  },
  {
    question: "What should I do after a bank says no?",
    answer:
      "First, get the specific reason in writing. Then ask the question the book is built around: is that a HUD rule, or is that this lender's rule? Many denials are one lender's overlay, a stricter in-house standard sitting on top of the actual program rules, which means a different lender can approve the same file. Part IV gives you the APPROVED Checklist and the exact questions to ask the next loan officer.",
  },
  {
    question: "Is this book only about FHA loans?",
    answer:
      "No. FHA gets the deepest treatment because it saves the most denied deals, but Part III covers the menu beyond it: HomeReady, Home Possible, and HomeOne, zero-down VA and USDA loans, bank statement and asset-based programs for the self-employed, buying for a parent or adult child, and professional programs for doctors, nurses, teachers, and first responders.",
  },
  {
    question: "Can I get a mortgage if I'm self-employed?",
    answer:
      "Yes. Self-employed borrowers can qualify for the same conventional and FHA loans as anyone else, and when tax write-offs make the returns look thin, there are bank statement and asset-based programs designed for exactly that file. The book explains how underwriters read self-employment income and which alternatives exist when the standard math doesn't work.",
  },
  {
    question: "Is this book about Florida only?",
    answer:
      "No. The rules in the book are federal program rules, written to HUD Handbook 4000.1, and they apply nationwide. Florida-specific details, like the state's down payment assistance programs and county-level examples, are covered free on this site.",
  },
  {
    question: "Which edition should I buy?",
    answer:
      "The content is identical across editions. The paperback and hardcover are the illustrated print editions on Amazon, and the Kindle edition delivers instantly to any device. More retailers are being added as each one lists the title.",
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
          retailer="amazon"
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
            : edition.format}
          {i === 0 && <ArrowIcon />}
        </TrackedRetailerLink>
      ))}
    </div>
  );
}

export default function ApprovedBookPage() {
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
                <span className="text-brand-green">APPROVED</span>: The
                Mortgage Playbook Your Bank May Never Show You
              </h1>

              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-dark-green/70 sm:text-[18px]">
                One bank&apos;s no isn&apos;t the end of your house search.{" "}
                <strong className="text-dark-green">
                  48 real buyer questions, each with a 30-second answer
                </strong>{" "}
                &mdash; and the programs your bank may never mention.
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
                    Published September 12, 2026 · Page updated September 15,
                    2026
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
                  All three formats ship from Amazon. More retailers are on the
                  way.
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
            Written to HUD Handbook 4000.1. The program rules described in the
            book are federal and apply nationwide; lender overlays vary, which
            is the point.
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
                  The people the bank&apos;s box{" "}
                  <span className="text-brand-green">doesn&apos;t fit</span>
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-green/65">
                  A denial means the file didn&apos;t fit one lender&apos;s
                  box. The book is for everyone standing outside it.
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
                  &ldquo;You deserve to understand why you were turned down
                  before you decide what to do next.&rdquo;
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

      {/* Chapter list: 48 questions in four parts */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[42px]">
            48 Questions, in the{" "}
            <span className="text-brand-green">Order Buyers Ask Them</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Every chapter title is a real buyer&apos;s question, and the first
            paragraph answers it. Four parts take you from the day the bank
            says no to the day you sign.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {parts.map((part) => (
              <div
                key={part.label}
                className="rounded-xl border border-border-gray/60 bg-white p-6 sm:p-7"
              >
                <span className="text-[12px] font-black tracking-[0.15em] text-brand-green/70 uppercase">
                  {part.label}
                </span>
                <h3 className="mt-1.5 text-[20px] leading-snug font-bold text-dark-green">
                  {part.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-dark-green/60">
                  {part.blurb}
                </p>
                <ol className="mt-4 space-y-1.5 sm:columns-2 sm:gap-6 sm:space-y-0">
                  {part.chapters.map((title, i) => (
                    <li
                      key={title}
                      className="flex items-start gap-2 py-[3px] text-[13.5px] leading-snug break-inside-avoid text-dark-green/75"
                    >
                      <span className="w-5 shrink-0 text-right font-bold text-brand-green/60 tabular-nums">
                        {part.start + i}
                      </span>
                      {title}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
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
                  alt="Phil Ganz, President of Next Wave Mortgage and author of APPROVED"
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
                , Author of APPROVED
              </h2>
              <p className="mt-3 text-[15px] font-medium text-dark-green/60">
                Mortgage Expert · NMLS #37833 · President, Next Wave Mortgage
              </p>

              <div className="mt-7 rounded-xl border-l-[3px] border-l-brand-green bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <p className="text-[13px] font-bold tracking-[0.13em] text-brand-green uppercase">
                  Why I Wrote This Book
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70">
                  &ldquo;Every week I close loans for buyers another lender
                  turned down. Not because I&apos;m a magician &mdash; because
                  their file never needed magic. It needed a different loan, a
                  different way to document the same income, or somebody
                  willing to check whether the rule was HUD&apos;s or just that
                  bank&apos;s.&rdquo;
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

      {/* Editions on Amazon */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] leading-tight font-bold text-dark-green sm:text-[36px] lg:text-[42px]">
            Choose Your <span className="text-brand-green">Edition</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Same book in every format.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {editions.map((edition) => (
              <TrackedRetailerLink
                key={edition.format}
                href={edition.url}
                retailer="amazon"
                bookKey={bookKey}
                format={edition.format.toLowerCase().replace(/\s+/g, "_")}
                className="group flex flex-col items-center rounded-xl border border-border-gray/60 bg-green-tint/50 p-8 text-center transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_24px_rgba(0,105,72,0.08)]"
              >
                <h3 className="text-[18px] font-bold text-dark-green">
                  {edition.format}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                  {edition.format === "Paperback"
                    ? "The everyday print edition. 389 illustrated pages."
                    : edition.format === "Hardcover"
                      ? "Durable and gift-ready."
                      : "Instant delivery. Read on any device."}
                </p>
                <span className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-[14px] font-bold text-white transition-shadow duration-300 group-hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]">
                    Buy on Amazon
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
              {book.title}: {book.subtitle} &middot; Published September 12,
              2026 &middot; Author: Phil Ganz &middot; Publisher:{" "}
              {book.publisher.name} &middot; 389 pages
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-dark-green/50">
              Paperback ISBN 979-8173583147 &middot; Hardcover ISBN
              979-8173583840 &middot; Kindle ASIN B0HJLMGJZY
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
            Questions Buyers Ask{" "}
            <span className="text-brand-green">After the Bank Says No</span>
          </>
        }
        faqs={faqs}
        bg="green-tint"
        description="Short answers to the questions the book answers in full. The program rules below are federal and apply nationwide."
      />

      {/* CTA */}
      <PageCTA
        heading="Told No? Get a Second Opinion"
        subtitle="A licensed loan officer will look at your actual file and tell you which programs fit — and whether that no was a program rule or just one bank's rule. No credit pull, no obligation."
        ctaHref="/check-fha-loan-eligibility"
        ctaText="Check Your FHA Loan Eligibility"
      />
    </>
  );
}
