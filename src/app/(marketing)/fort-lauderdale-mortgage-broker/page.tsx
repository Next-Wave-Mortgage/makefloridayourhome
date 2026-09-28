import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";
import { StepProcess } from "@/components/shared/StepProcess";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";
import { siteConfig } from "@/lib/site";
import { getPostBySlug } from "@/lib/blog";
import {
  googleBusinessProfile,
  organizationId,
  organizationSchema,
  philPersonId,
} from "@/lib/entity";

const pageUrl = `${siteConfig.url}/fort-lauderdale-mortgage-broker`;
const title = "Fort Lauderdale Mortgage Broker | Phil Ganz & Next Wave Mortgage";
const description =
  "Work with Phil Ganz (NMLS #37833), a Fort Lauderdale mortgage broker with 26+ years of experience. Compare lenders for FHA, VA, conventional, jumbo, condo, self-employed, and investor loans in Broward County.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fort-lauderdale-mortgage-broker" },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/heroes/fort-lauderdale-mortgage-broker-hero.webp`,
        width: 1024,
        height: 1024,
        alt: "Fort Lauderdale waterfront homes along a canal at sunset",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);

const heroFeatures = [
  {
    icon: checkIcon,
    text: "One application, multiple lenders — we shop the rate and program for you",
  },
  {
    icon: checkIcon,
    text: "Local office on East Commercial Boulevard, serving all of Broward County",
  },
  {
    icon: checkIcon,
    text: "FHA, VA, conventional, jumbo, condo, self-employed, and DSCR investor loans",
  },
  {
    icon: checkIcon,
    text: `Rated ${googleBusinessProfile.rating}/5 by ${googleBusinessProfile.reviewCount} homeowners on Google`,
  },
];

const brokerHeaders = ["", "Mortgage Broker", "Bank or Retail Lender"];
const brokerRows = [
  ["Loan options", "Programs from multiple wholesale lenders", "Only that institution's own products"],
  ["If you're declined", "Your file can go to a different lender", "You usually start over somewhere else"],
  ["Pricing", "Compares wholesale rates across lenders", "One rate sheet"],
  ["Niche loans", "Easier access to non-QM, bank statement, and DSCR programs", "Often limited or unavailable"],
  ["Who you work with", "The same broker from application to closing", "Varies — often a call center or handoffs"],
  ["Compensation", "Paid by you or the lender (never both), disclosed on your Loan Estimate", "Built into the lender's rate and fees"],
];

const localCards = [
  {
    title: "Loan Limits Are Higher Here",
    description:
      "For 2026, Broward County's FHA limit is $667,000 for a single-family home, and the conforming limit is $832,750. Above that, you're in jumbo territory — common in waterfront Fort Lauderdale neighborhoods, and a place where comparing lenders really pays off.",
    href: "/learn/florida-fha-loan-limits",
    linkText: "See every county's FHA limit",
  },
  {
    title: "Condos Need Extra Review",
    description:
      "Since the Surfside collapse, Florida requires milestone structural inspections and reserve studies for many condo buildings. Lenders now look closely at a building's reserves, inspections, and special assessments, and some buildings don't qualify for conventional financing. We check the building early so there are no surprises weeks into your contract.",
  },
  {
    title: "Flood and Wind Insurance Affect Your Payment",
    description:
      "Much of Fort Lauderdale sits in FEMA flood zones. If a home is in a high-risk zone, a federally backed mortgage requires flood insurance, and windstorm coverage is part of every Broward homeowners policy. We build realistic insurance quotes into your numbers before you make an offer.",
  },
  {
    title: "Local Down Payment Help",
    description:
      "Eligible first-time buyers may combine Florida Hometown Heroes with Broward County's Homebuyer Purchase Assistance (up to $80,000) or the City of Fort Lauderdale Purchase Assistance Program (up to about $75,000). Funding and income limits change, so we check current availability for your situation.",
    href: "/learn/broward-county-florida-first-time-homebuyer-program",
    linkText: "Broward County assistance guide",
  },
  {
    title: "Florida Closing Costs",
    description:
      "Florida charges documentary stamp tax on the mortgage note ($0.35 per $100) and intangible tax on the new mortgage (0.2%), usually paid by the buyer. In Broward, the seller customarily pays the deed stamps ($0.70 per $100). Your Loan Estimate spells out every fee up front.",
  },
  {
    title: "Investors and Second Homes",
    description:
      "Rental and short-term rental buyers can qualify with DSCR loans based on the property's rent instead of tax returns. Short-term rental rules vary by city in Broward, so confirm local ordinances before you buy.",
    href: "/florida-dscr-loan-calculator",
    linkText: "Run numbers with Broward's tax rate",
  },
];

const loanHeaders = ["Loan Type", "Often a Good Fit For"];
const loanRows = [
  ["FHA", "First-time buyers, lower credit scores, 3.5% down"],
  ["Conventional", "Good credit, as little as 3% down, and PMI that can be removed as you build equity"],
  ["VA", "Veterans and active-duty service members, $0 down"],
  ["Jumbo", "Loans above $832,750 — waterfront and luxury homes"],
  ["Bank Statement / Non-QM", "Self-employed buyers whose tax returns understate income"],
  ["DSCR", "Investors qualifying on rental income, including LLC purchases"],
  ["Down Payment Assistance", "Eligible first-time buyers who need help with cash to close"],
];

const loanLinks: Record<string, string> = {
  "FHA loans in Florida": "/home-loan/fha-loan",
  "Conventional loans": "/learn/conventional-mortgages-in-florida",
  "Home loan options": "/home-loan",
  "Self-employed guide": "/learn/florida-mortgage-assistance-programs-self-employed-1099",
  "DSCR loans": "/home-loan/dscr-loan",
  "Florida DPA programs": "/down-payment-assistance",
};

const areasServed = [
  "Fort Lauderdale",
  "Wilton Manors",
  "Oakland Park",
  "Lauderdale-by-the-Sea",
  "Lighthouse Point",
  "Pompano Beach",
  "Plantation",
  "Sunrise",
  "Davie",
  "Hollywood",
  "Dania Beach",
  "Coral Springs",
  "Weston",
  "Pembroke Pines",
  "Miramar",
];

const steps = [
  {
    title: "Talk Through Your Goals",
    description:
      "A quick call with Phil about the home, your timeline, and your finances. We'll tell you honestly which loan types make sense — and which don't.",
  },
  {
    title: "Compare Lenders and Programs",
    description:
      "We price your scenario across our lending partners, including assistance programs you may qualify for, and walk you through the tradeoffs in plain language.",
  },
  {
    title: "Get a Strong Pre-Approval",
    description:
      "Your file is reviewed up front so your pre-approval holds up. Fort Lauderdale sellers and listing agents take a well-documented pre-approval seriously.",
  },
  {
    title: "Close on Time",
    description:
      "We coordinate the appraisal, condo review, insurance, and title, and keep you and your agent updated until you have the keys.",
  },
];

const guideSlugs: { slug: string; category: string }[] = [
  { slug: "broward-county-florida-first-time-homebuyer-program", category: "Broward County" },
  { slug: "florida-fha-loan-limits", category: "Loan Limits" },
  { slug: "florida-conforming-loan-limits-by-county", category: "Loan Limits" },
  { slug: "florida-mortgage-assistance-programs-self-employed-1099", category: "Self-Employed Borrowers" },
];

const articles = guideSlugs.flatMap(({ slug, category }) => {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return [
    {
      category,
      title: post.title,
      description: post.description,
      href: `/learn/${slug}`,
      image: post.featuredImage ?? "",
      readTime: `${post.readTime} min read`,
    },
  ];
});

const faqs = [
  {
    question: "Is it worth using a mortgage broker in Fort Lauderdale?",
    answer:
      "For many buyers, yes. A broker can compare programs and pricing from multiple wholesale lenders with one application, which matters most when your situation isn't simple — a condo, a jumbo loan, self-employed income, an investment property, or down payment assistance. If one lender says no, a broker can often place the loan elsewhere. If your file is very straightforward and you already have an excellent offer from your own bank, a broker may not save you much, and it's fine to compare.",
  },
  {
    question: "How much does a mortgage broker make on a $500,000 mortgage?",
    answer:
      "Broker compensation is usually a percentage of the loan amount, commonly somewhere around 1% to 2.75%. On a $500,000 loan, that's roughly $5,000 to $13,750. Federal rules say a broker can be paid by you or by the lender on a given loan, not both, and compensation can't be tied to your interest rate. Whatever the amount, it's disclosed on your Loan Estimate and Closing Disclosure, so you can compare it against other offers.",
  },
  {
    question: "What are the downsides of using a mortgage broker?",
    answer:
      "Brokers don't fund loans themselves, so they rely on their lending partners' timelines and underwriting. Not every lender works with brokers, so a broker can't offer every product on the market. And quality varies from broker to broker. Check that your broker is licensed on NMLS Consumer Access, read recent reviews, and compare your Loan Estimate with at least one other offer.",
  },
  {
    question: "What's the difference between a mortgage broker and a mortgage lender?",
    answer:
      "A lender funds the loan with its own money and offers only its own products. A mortgage broker works with many lenders, matches you to the one that fits your situation, and manages the process through closing. Next Wave Mortgage is a licensed Florida mortgage broker (NMLS #2536820).",
  },
  {
    question: "How do I check a Fort Lauderdale mortgage broker's license?",
    answer:
      "Search the broker's name or NMLS number on NMLS Consumer Access (nmlsconsumeraccess.org). It shows active state licenses, the company they work for, and any regulatory actions. Phil Ganz is NMLS #37833, and Next Wave Mortgage is NMLS #2536820.",
  },
  {
    question: "Can I get a mortgage on a Fort Lauderdale condo?",
    answer:
      "Yes, but condos take more review than single-family homes. Lenders look at the building's reserves, insurance, milestone inspections, special assessments, and litigation. Some buildings don't qualify for conventional or FHA financing, and some buyers use portfolio or non-warrantable condo programs instead. Getting the condo questionnaire started early is one of the best ways to protect your closing date.",
  },
  {
    question: "Do I need flood insurance to buy a home in Fort Lauderdale?",
    answer:
      "If the home is in a FEMA high-risk flood zone (zones beginning with A or V) and you use a federally backed mortgage, flood insurance is required. Many Fort Lauderdale homes fall in these zones. Even outside them, Citizens Property Insurance policyholders are being phased into a flood insurance requirement. We factor flood and windstorm premiums into your payment estimate before you commit.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  inLanguage: "en-US",
  about: { "@id": organizationId },
  mainEntity: { "@id": organizationId },
  author: { "@id": philPersonId },
  reviewedBy: { "@id": philPersonId },
  publisher: { "@id": organizationId },
  primaryImageOfPage: `${siteConfig.url}/images/heroes/fort-lauderdale-mortgage-broker-hero.webp`,
  dateModified: "2026-09-28",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
    { "@type": "ListItem", position: 2, name: "Fort Lauderdale Mortgage Broker", item: pageUrl },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FortLauderdaleMortgageBrokerPage() {
  return (
    <>
      <JsonLd id="org-schema" data={organizationSchema} />
      <JsonLd id="webpage-schema" data={webPageSchema} />
      <JsonLd id="faq-schema" data={faqSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      {/* Hero */}
      <PageHero
        title={
          <>
            <span className="text-brand-green">Fort Lauderdale Mortgage Broker</span>{" "}
            | Phil Ganz &amp; Next Wave Mortgage
          </>
        }
        subtitle={
          <p>
            Buying or refinancing in Fort Lauderdale? Phil Ganz and the Next
            Wave Mortgage team compare loan programs from multiple lenders so
            you get a loan that fits your home, your income, and your timeline.{" "}
            <strong className="text-dark-green">
              26+ years of experience, based right here in Fort Lauderdale.
            </strong>
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/fort-lauderdale-mortgage-broker-hero.webp"
        imageAlt="Fort Lauderdale waterfront homes along a canal with palm trees and a docked boat at sunset"
        ctaHref="/eligibility/schedule-a-free-call"
        ctaText="Schedule a Free Call with Phil"
      />

      {/* Meet your broker */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[260px_1fr]">
            <Image
              src="/images/team/phil-ganz.webp"
              alt="Phil Ganz, Fort Lauderdale mortgage broker and President of Next Wave Mortgage"
              width={280}
              height={350}
              className="mx-auto w-[220px] rounded-2xl object-cover object-top shadow-[0_12px_32px_-10px_rgba(0,49,34,0.3)] md:w-full"
            />
            <div>
              <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px]">
                Meet Your <span className="text-brand-green">Broker</span>
              </h2>
              <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-dark-green/70">
                <p>
                  Phil Ganz is the President of Next Wave Mortgage and a
                  licensed mortgage broker (NMLS #37833) based in Fort
                  Lauderdale. For more than 26 years he has helped Florida
                  families buy, refinance, and invest, with a focus on the
                  loans that take real strategy: South Florida jumbo loans,
                  self-employed income, condos, investment properties, and
                  down payment assistance.
                </p>
                <p>
                  He&apos;s also the author of{" "}
                  <Link href="/books/make-florida-your-home" className="font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green">
                    <em>Make Florida Your Home</em>
                  </Link>{" "}
                  and{" "}
                  <Link href="/books/approved-mortgage-playbook" className="font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green">
                    <em>APPROVED: The Mortgage Playbook Your Bank May Never Show You</em>
                  </Link>
                  , and he writes the guides here on Make Florida Your Home.
                </p>
              </div>
              <dl className="mt-6 grid gap-4 text-[14.5px] sm:grid-cols-2">
                <div className="rounded-xl border border-border-gray/60 bg-green-tint p-4">
                  <dt className="font-bold text-dark-green">Office</dt>
                  <dd className="mt-1 text-dark-green/70">
                    {siteConfig.company}
                    <br />
                    2430 E Commercial Blvd #3
                    <br />
                    Fort Lauderdale, FL 33308
                    <br />
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-green underline underline-offset-2">
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
                <div className="rounded-xl border border-border-gray/60 bg-green-tint p-4">
                  <dt className="font-bold text-dark-green">Licensing &amp; Reviews</dt>
                  <dd className="mt-1 space-y-1 text-dark-green/70">
                    <p>
                      Phil Ganz, NMLS{" "}
                      <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/37833" target="_blank" rel="noopener noreferrer" className="text-brand-green underline underline-offset-2">
                        #37833
                      </a>
                    </p>
                    <p>
                      Next Wave Mortgage, NMLS{" "}
                      <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2536820" target="_blank" rel="noopener noreferrer" className="text-brand-green underline underline-offset-2">
                        #2536820
                      </a>
                    </p>
                    <p>
                      <a href={googleBusinessProfile.url} target="_blank" rel="noopener noreferrer" className="text-brand-green underline underline-offset-2">
                        {googleBusinessProfile.rating}/5 from {googleBusinessProfile.reviewCount} Google reviews
                      </a>
                    </p>
                  </dd>
                </div>
              </dl>
              <Link
                href="/team/phil-ganz"
                className="mt-5 inline-block text-[14.5px] font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green"
              >
                Read Phil&apos;s full bio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Broker vs bank */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            Mortgage Broker vs. <span className="text-brand-green">Bank</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            A broker doesn&apos;t lend its own money — it finds the right
            lender for you. Here&apos;s how that compares with going straight
            to a bank.
          </p>
          <div className="mt-10">
            <DataTable
              headers={brokerHeaders}
              rows={brokerRows}
              caption="Mortgage broker compared with a bank or retail lender"
            />
          </div>
        </div>
      </section>

      {/* Local considerations */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            What&apos;s Different About Financing in{" "}
            <span className="text-brand-green">Fort Lauderdale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Higher prices, condos, flood zones, and local assistance programs
            all shape which loan works best in Broward County.
          </p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-xl border border-border-gray/60 bg-green-tint p-6"
              >
                <h3 className="text-[17px] font-bold text-dark-green">{card.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-dark-green/60">
                  {card.description}
                </p>
                {card.href && (
                  <Link
                    href={card.href}
                    className="mt-3 text-[13.5px] font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green"
                  >
                    {card.linkText} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan options */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            Loan Options for <span className="text-brand-green">Fort Lauderdale</span> Buyers
          </h2>
          <div className="mt-10">
            <DataTable
              headers={loanHeaders}
              rows={loanRows}
              caption="Mortgage loan options available through Next Wave Mortgage in Fort Lauderdale"
            />
          </div>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-2 text-[14px]">
            {Object.entries(loanLinks).map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green">
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Step Process */}
      <StepProcess
        heading={
          <>
            How Working With <span className="text-brand-green">Phil</span> Works
          </>
        }
        steps={steps}
        bg="white"
      />

      {/* Areas served */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px]">
            Serving Fort Lauderdale and <span className="text-brand-green">Broward County</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-dark-green/60">
            From our office on East Commercial Boulevard, we help buyers and
            homeowners throughout Broward County, plus Miami-Dade, Palm Beach,
            and the rest of Florida.
          </p>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {areasServed.map((area) => (
              <li
                key={area}
                className="rounded-full border border-brand-green/20 bg-white px-4 py-1.5 text-[14px] font-medium text-dark-green/75"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expert Guides */}
      <ExpertGuidesRow
        heading={
          <>
            Broward County <span className="text-brand-green">Guides</span>
          </>
        }
        articles={articles}
        bg="white"
      />

      {/* FAQ */}
      <PageFAQ faqs={faqs} bg="green-tint" />

      {/* CTA */}
      <PageCTA
        heading="Talk to a Fort Lauderdale Mortgage Broker"
        subtitle="Tell Phil what you're planning — a free call, no credit pull, no obligation."
        ctaHref="/eligibility/schedule-a-free-call"
        ctaText="Schedule a Free Call with Phil"
      />
    </>
  );
}
