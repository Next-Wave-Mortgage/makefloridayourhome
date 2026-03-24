import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { ExpertGuidesRow } from "@/components/shared/ExpertGuidesRow";
import { DPAMapPromo } from "@/components/sections/DPAMapPromo";

export const metadata: Metadata = {
  title:
    "Florida Down Payment Assistance Programs (2026)",
  description:
    "Explore Florida down payment assistance programs for 2026. Learn about Hometown Heroes, Florida Assist, SHIP funds, and how to qualify for up to $35,000+ in aid.",
  alternates: { canonical: "/down-payment-assistance" },
  openGraph: {
    title: "Florida Down Payment Assistance Programs (2026)",
    description:
      "Explore Florida down payment assistance programs for 2026. Learn about Hometown Heroes, Florida Assist, SHIP funds, and how to qualify.",
    url: "https://www.makefloridayourhome.com/down-payment-assistance",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const heroFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: "Up to $35,000 with Hometown Heroes — 0% interest",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Stack state, county, and federal programs together",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Many programs are forgivable after 5–15 years",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "Covers down payment, closing costs, or both",
  },
];


const requirements = [
  "Minimum 640 credit score (580 for some FHA-based programs)",
  "Must be a first-time buyer — no ownership in the past 3 years",
  "Property must be your primary residence in Florida",
  "Must complete a HUD-approved homebuyer education course",
  "Meet income and purchase price limits for your county",
];

const articles = [
  {
    category: "Best Florida Home Buyer Programs",
    title: "105 Florida First-Time Home Buyer Grants & Programs (2026 Guide)",
    description:
      "Explore 105 Florida first-time homebuyer grants and assistance programs for 2026.",
    href: "/learn/first-time-homebuyer/grants-and-programs",
    image: "/images/guides/florida-first-time-homebuyer-grants.webp",
    readTime: "33 min read",
  },
  {
    category: "Rent-to-Own Programs",
    title: "17 Florida Rent-to-Own Programs: Buy With No Down Payment",
    description:
      "Explore 17 Florida rent-to-own programs for 2026. Learn how buyers may purchase with little or no down payment.",
    href: "/learn/fha-rent-to-own-florida-guide",
    image: "/images/guides/florida-rent-to-own-programs.webp",
    readTime: "10 min read",
  },
  {
    category: "Florida Income Limits & Pricing",
    title: "Florida Housing Income & Purchase Price Limits (2026)",
    description:
      "See 2026 Florida Housing income limits and purchase price caps by county.",
    href: "/learn/florida-housing-income-purchase-price-limits",
    image: "/images/guides/florida-housing-income-limits.webp",
    readTime: "8 min read",
  },
  {
    category: "First-Time Buyer Guides",
    title: "What Are the Requirements to Buy a House in Florida?",
    description:
      "Learn the key requirements to buy a house in Florida, including credit, down payment, and loan options.",
    href: "/learn/requirements-to-buy-a-house-in-florida",
    image: "/images/guides/florida-homebuyer-requirements.webp",
    readTime: "7 min read",
  },
];

const faqs = [
  {
    question: "How much down payment assistance can I get in Florida?",
    answer:
      "It depends on which programs you qualify for. Hometown Heroes offers up to $35,000. Florida Assist provides up to $7,500. County SHIP funds can add $10,000–$60,000 more. Many buyers stack multiple programs together, sometimes totaling $50,000–$100,000+ in combined assistance.",
  },
  {
    question: "Do I have to pay back down payment assistance?",
    answer:
      "It depends on the program. Most Florida DPA programs are structured as deferred second mortgages — meaning you don't make monthly payments. Repayment is triggered when you sell, refinance, or transfer the home. Some programs, like HFA Preferred grants, are forgivable after a set period (typically 3–5 years).",
  },
  {
    question: "Can I use down payment assistance for closing costs too?",
    answer:
      "Yes. Most Florida DPA programs can be applied to both the down payment and closing costs. Hometown Heroes and Florida Assist explicitly allow assistance funds to be used for either purpose.",
  },
  {
    question: "Do I need to be a first-time buyer to get DPA in Florida?",
    answer:
      "Not always. While many programs target first-time buyers (no ownership in the past 3 years), some county SHIP programs and VA-backed options don't require first-time buyer status. We'll help you identify programs you're eligible for regardless of your history.",
  },
  {
    question: "What credit score do I need for down payment assistance?",
    answer:
      "Most Florida DPA programs require a minimum 640 credit score. Some FHA-based options accept scores as low as 580. A higher credit score may qualify you for more programs and better interest rates.",
  },
  {
    question: "Can I combine Hometown Heroes with other programs?",
    answer:
      "Yes. Hometown Heroes can be stacked with county SHIP funds and other local programs in many cases. However, you cannot combine it with Florida Assist — you must choose one or the other for your state-level DPA. Our team can help you determine the best combination.",
  },
  {
    question: "How long does it take to get approved for DPA?",
    answer:
      "Pre-approval for your first mortgage typically takes 1–3 business days. Adding a DPA program may extend the timeline by 5–10 business days for the layered approval process. Total time from application to closing is usually 30–45 days.",
  },
  {
    question: "Are there purchase price limits for DPA programs?",
    answer:
      "Yes. Florida Housing sets maximum purchase price limits by county. These limits vary — for example, higher-cost counties like Miami-Dade and Monroe have higher caps. We can provide your county's exact limits instantly.",
  },
  {
    question: "What types of homes qualify for DPA?",
    answer:
      "Single-family homes, condos, townhomes, and manufactured homes (on a permanent foundation) are generally eligible. The property must be your primary residence. For FHA loans, condos must be on the FHA-approved list.",
  },
  {
    question: "Can I use DPA with a VA or USDA loan?",
    answer:
      "VA and USDA loans already offer 0% down payment, but DPA can still be used to cover closing costs. Some county SHIP programs can be layered on top of VA or USDA loans to further reduce your out-of-pocket expenses.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.makefloridayourhome.com" },
    { "@type": "ListItem", position: 2, name: "Down Payment Assistance", item: "https://www.makefloridayourhome.com/down-payment-assistance" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DownPaymentAssistancePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <PageHero
        title={
          <>
            <span className="text-brand-green">Down Payment</span> Assistance
            Programs in Florida
          </>
        }
        subtitle={
          <p>
            The down payment is the biggest barrier for most Florida buyers.{" "}
            <strong className="text-dark-green">
              State and local programs can cover most or all of it
            </strong>{" "}
            — often as a forgivable loan or 0% interest second mortgage.
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/florida-down-payment-assistance-hero.webp"
        imageAlt="Happy family celebrating in front of Florida home with SOLD sign"
        ctaHref="/check-dpa-eligibility"
        ctaText="Check Your Florida DPA Eligibility"
      />

      {/* Interactive DPA Map */}
      <DPAMapPromo />

      {/* 105 Programs Promo */}
      <section className="bg-green-tint py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            {/* Featured image */}
            <div className="relative h-[200px] sm:h-[260px]">
              <Image
                src="/images/learn/florida-first-time-homebuyer-grants-programs-2026.webp"
                alt="105 Florida First-Time Home Buyer Grants & Programs"
                fill
                className="object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-6 flex gap-5 sm:bottom-6 sm:left-8 sm:gap-6">
                {[
                  { value: "105", label: "Programs" },
                  { value: "48", label: "Counties" },
                  { value: "$35K+", label: "Max Aid" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block text-[24px] font-extrabold leading-none text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] sm:text-[28px]">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Complete Guide
              </p>
              <h2 className="mt-3 text-[26px] font-bold leading-tight text-dark-green sm:text-[32px] lg:text-[36px]">
                <span className="text-brand-green">105</span>{" "}Florida First-Time
                Home Buyer Grants &amp; Programs
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-dark-green/60">
                Every grant, forgivable loan, and deferred program available to
                Florida buyers in 2026 — organized by county, amount, and type.
                The most comprehensive list you&apos;ll find anywhere.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/learn/first-time-homebuyer/grants-and-programs"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                >
                  View All 105 Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                </Link>
                <span className="text-[14px] text-dark-green/40">
                  33 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              <span className="text-brand-green">Eligibility</span>{" "}
              Requirements
            </h2>
            <p className="mt-4 text-center text-[16px] leading-relaxed text-dark-green/60">
              Most Florida DPA programs share these core requirements.
            </p>

            <div className="mt-10 space-y-4">
              {requirements.map((req, i) => (
                <div
                  key={req}
                  className="flex items-start gap-4 rounded-xl border border-border-gray/60 bg-green-tint px-6 py-5 transition-all duration-300 hover:border-brand-green/30"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-[13px] font-black text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed text-dark-green/80">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Guides */}
      <ExpertGuidesRow
        heading={
          <>
            From Our <span className="text-brand-green">Experts</span>
          </>
        }
        articles={articles}
        bg="green-tint"
      />

      {/* FAQ */}
      <PageFAQ faqs={faqs} bg="white" />

      {/* CTA */}
      <PageCTA
        heading="Find Out How Much DPA You Qualify For"
        subtitle="Check your eligibility in minutes — no credit pull, no obligation."
        ctaHref="/check-dpa-eligibility"
        ctaText="Check Your Florida DPA Eligibility"
      />
    </>
  );
}
