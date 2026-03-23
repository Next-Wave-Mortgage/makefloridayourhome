import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { DataTable } from "@/components/shared/DataTable";

export const metadata: Metadata = {
  title:
    "Florida Home Loan Options (2026) — FHA, VA, USDA, Conventional & More | Make Florida Your Home",
  description:
    "Compare Florida home loan options for 2026: FHA, Conventional, VA, USDA, Reverse Mortgage, Manufactured Home, and HELOC. Find the best fit for your situation.",
  openGraph: {
    title: "Florida Home Loan Options (2026)",
    description:
      "Compare FHA, VA, USDA, Conventional, and specialty loan programs available in Florida.",
    url: "https://www.makefloridayourhome.com/home-loan",
    type: "website",
  },
  alternates: { canonical: "/home-loan" },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const heroFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    text: "Side-by-side comparison of every major loan type",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: "0% down options available with VA and USDA loans",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Stack any loan type with Florida DPA programs",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Expert guidance to find your best-fit program",
  },
];

const mortgageOptionsHeaders = [
  "Loan Type",
  "Min. Down Payment",
  "Min. Credit Score",
  "Best For",
  "MI Required?",
  "DPA Compatible?",
];
const mortgageOptionsRows = [
  ["FHA", "3.5%", "580", "First-time buyers, lower credit", "Yes (life of loan)", "Yes"],
  ["Conventional", "3%", "620", "Good credit, want to drop MI", "Yes (removable at 80% LTV)", "Yes"],
  ["VA", "0%", "580–620*", "Veterans & active military", "No", "Yes (closing costs)"],
  ["USDA", "0%", "640", "Rural area buyers", "Yes (reduced rate)", "Yes"],
  ["Reverse Mortgage", "N/A", "N/A", "Homeowners 62+", "Yes (FHA HECM)", "No"],
  ["Manufactured Home", "3.5%–5%", "580–620", "Factory-built homes", "Varies by loan type", "Yes"],
  ["HELOC", "N/A", "620–680", "Existing homeowners", "No", "No"],
];

const bestByBuyerHeaders = ["Buyer Profile", "Recommended Loan", "Why"];
const bestByBuyerRows = [
  ["First-time buyer, lower credit", "FHA", "Lowest credit requirements (580), 3.5% down, stackable with Hometown Heroes"],
  ["First-time buyer, good credit", "Conventional", "Lower MI costs, MI removable at 80% LTV, competitive rates"],
  ["Veteran or active military", "VA", "0% down, no MI, competitive rates — best deal for eligible borrowers"],
  ["Buying in a rural area", "USDA", "0% down, reduced MI, designed for rural communities"],
  ["Self-employed, non-traditional income", "Non-QM", "Flexible income documentation — bank statements, 1099s accepted"],
  ["Homeowner 62+, need cash flow", "Reverse Mortgage", "Convert home equity to income — no monthly mortgage payments"],
  ["Own a home, need cash", "HELOC", "Access equity without refinancing your first mortgage"],
];

const loanTypes = [
  {
    id: "fha",
    title: "FHA Loans",
    accentWord: "FHA",
    description:
      "Backed by the Federal Housing Administration, FHA loans are the most popular choice for Florida first-time buyers. With just 3.5% down and a 580 credit score, they offer the lowest barrier to entry. FHA loans can be paired with Hometown Heroes and other Florida DPA programs.",
    href: "/home-loan/fha-loan",
    linkText: "FHA Loan Details",
    articles: [
      { title: "FHA Loan Eligibility Requirements in Florida", href: "/learn/fha-loan-eligibility-requirements-florida", image: "/images/learn/fha-loan-eligibility-requirements-florida-2026.jpg" },
      { title: "Florida FHA Loan Limits by County (2026)", href: "/learn/florida-fha-loan-limits", image: "/images/learn/florida-fha-loan-limits-2026.jpg" },
      { title: "FHA 203k Loan in Florida: Rehab & Renovation Guide", href: "/learn/fha-203k-loan-florida", image: "/images/learn/fha-203k-loan-florida-2026.jpg" },
    ],
  },
  {
    id: "conventional",
    title: "Conventional Loans",
    accentWord: "Conventional",
    description:
      "Conventional loans aren't backed by a government agency — they follow guidelines set by Fannie Mae and Freddie Mac. They require a 620+ credit score and as little as 3% down. The big advantage: private mortgage insurance (PMI) can be removed once you reach 80% loan-to-value, saving you money over time.",
    articles: [
      { title: "Conventional Mortgages in Florida: Full Guide", href: "/learn/conventional-mortgages-in-florida", image: "/images/learn/conventional-mortgages-in-florida-2026.jpg" },
      { title: "Requirements to Buy a House in Florida", href: "/learn/requirements-to-buy-a-house-in-florida", image: "/images/learn/requirements-to-buy-a-house-in-florida-2026.jpg" },
    ],
  },
  {
    id: "va",
    title: "VA Loans",
    accentWord: "VA",
    description:
      "Available to veterans, active-duty service members, and eligible surviving spouses, VA loans offer 0% down payment and no mortgage insurance. They're backed by the Department of Veterans Affairs and typically offer the best rates available. VA loans can be combined with county DPA programs for closing cost assistance.",
    articles: [
      { title: "Florida VA Disability Property Tax Exemptions", href: "/learn/florida-va-disability-property-tax-exemptions", image: "/images/learn/florida-va-disability-property-tax-exemptions-2026.jpg" },
      { title: "Florida Housing Income & Purchase Price Limits (2026)", href: "/learn/florida-housing-income-purchase-price-limits", image: "/images/learn/florida-housing-income-purchase-price-limits-2026.jpg" },
    ],
  },
  {
    id: "usda",
    title: "USDA Loans",
    accentWord: "USDA",
    description:
      "USDA loans are designed for buyers purchasing in USDA-eligible rural areas — and many Florida suburbs qualify. They offer 0% down payment and reduced mortgage insurance rates. Income limits apply based on your county and household size.",
    articles: [
      { title: "USDA Loans in Florida: Eligibility, Income Limits & Map", href: "/learn/usda-loans-florida", image: "/images/learn/usda-loans-florida-2026.jpg" },
    ],
  },
  {
    id: "reverse",
    title: "Reverse Mortgages",
    accentWord: "Reverse",
    description:
      "A reverse mortgage (HECM) lets homeowners age 62 and older convert home equity into cash — either as a lump sum, monthly payments, or a line of credit. No monthly mortgage payments are required. The loan is repaid when the borrower sells, moves, or passes away.",
    articles: [
      { title: "Reverse Mortgage Closing Costs in Florida", href: "/learn/reverse-mortgage-closing-costs-florida", image: "/images/learn/reverse-mortgage-closing-costs-florida-2026.jpg" },
    ],
  },
  {
    id: "manufactured",
    title: "Manufactured Home Loans",
    accentWord: "Manufactured",
    description:
      "Florida has one of the largest manufactured housing markets in the country. FHA, VA, and conventional loans are all available for manufactured homes on permanent foundations. Down payments start at 3.5% for FHA. The home must meet HUD code standards and be classified as real property.",
    articles: [
      { title: "Florida Manufactured Home Loan Program Guide", href: "/learn/florida-manufactured-home-loan-program", image: "/images/learn/florida-manufactured-home-loan-program-2026.jpg" },
    ],
  },
  {
    id: "heloc",
    title: "HELOCs",
    accentWord: "HELOCs",
    description:
      "A Home Equity Line of Credit lets existing homeowners borrow against their home's equity. It works like a credit card with a revolving balance. HELOCs are ideal for home improvements, debt consolidation, or large expenses. Most lenders require at least 15–20% equity and a 620+ credit score.",
    articles: [
      { title: "How a HELOC Works in Florida: Rates, Limits & Examples", href: "/learn/how-does-heloc-work-in-florida", image: "/images/learn/how-does-heloc-work-in-florida-2026.jpg" },
    ],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.makefloridayourhome.com/" },
    { "@type": "ListItem", position: 2, name: "Home Loan Options", item: "https://www.makefloridayourhome.com/home-loan" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomeLoanPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <PageHero
        title={
          <>
            Florida <span className="text-brand-green">Home Loan</span>{" "}
            Options for Every Buyer
          </>
        }
        subtitle={
          <p>
            FHA, Conventional, VA, USDA, and specialty programs —{" "}
            <strong className="text-dark-green">
              compare every loan type available to Florida buyers
            </strong>{" "}
            and find the one that fits your credit, income, and goals.
          </p>
        }
        features={heroFeatures}
        image="/images/heroes/florida-home-loan-options-hero.webp"
        imageAlt="Aerial view of a Florida neighborhood at golden hour"
      />

      {/* Mortgage Options Table */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">Compare</span> Florida Mortgage
            Options
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            A side-by-side look at the 7 most common loan types available to
            Florida buyers.
          </p>
          <div className="mt-10">
            <DataTable
              headers={mortgageOptionsHeaders}
              rows={mortgageOptionsRows}
              caption="Comparison of Florida mortgage loan types"
            />
          </div>
          <p className="mt-4 text-center text-[13px] text-dark-green/40">
            *VA has no official minimum credit score, but most lenders require
            580–620.
          </p>
        </div>
      </section>

      {/* Best Loan by Buyer Type */}
      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            Best <span className="text-brand-green">Loan</span> by Buyer Type
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16px] leading-relaxed text-dark-green/60">
            Not sure where to start? Find your profile below.
          </p>
          <div className="mt-10">
            <DataTable
              headers={bestByBuyerHeaders}
              rows={bestByBuyerRows}
              caption="Recommended Florida loan types by buyer profile"
            />
          </div>
        </div>
      </section>

      {/* Individual Loan Type Sections */}
      {loanTypes.map((loan, index) => {
        const bgClass = index % 2 === 0 ? "bg-white" : "bg-green-tint";
        return (
          <section key={loan.id} className={`${bgClass} py-16 sm:py-20 lg:py-24`}>
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
                  <span className="text-brand-green">{loan.accentWord}</span>{" "}
                  {loan.title.replace(loan.accentWord + " ", "").replace(loan.accentWord, "")}
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-dark-green/60">
                  {loan.description}
                </p>

                {loan.href && (
                  <Link
                    href={loan.href}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                  >
                    {loan.linkText}
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
                )}

                {loan.articles.length > 0 && (
                  <div className="mt-10">
                    <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-dark-green/40">
                      Related Reading
                    </span>
                    <div className={`mt-4 grid gap-4 ${loan.articles.length >= 3 ? "sm:grid-cols-3" : loan.articles.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1 sm:max-w-sm"}`}>
                      {loan.articles.map((article) => (
                        <Link
                          key={article.href}
                          href={article.href}
                          className="group overflow-hidden rounded-xl border border-border-gray/60 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green/30 hover:shadow-[0_8px_32px_rgba(0,105,72,0.12)]"
                        >
                          <div className="relative h-[140px] w-full overflow-hidden">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, 33vw"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-[14px] font-bold leading-snug text-dark-green line-clamp-2">
                              {article.title}
                            </h3>
                            <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-green transition-all duration-300 group-hover:gap-2.5">
                              Read Guide
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <PageCTA
        heading="Find Your Best Florida Loan"
        subtitle="Compare your options with a licensed Florida mortgage expert — free, no obligation."
      />
    </>
  );
}
