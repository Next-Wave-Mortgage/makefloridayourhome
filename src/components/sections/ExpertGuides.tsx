import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    category: "Best Florida Home Buyer Programs",
    title: "70 Florida First-Time Home Buyer Grants & Programs (2026 Guide)",
    description:
      "Explore 70 Florida first-time homebuyer grants and assistance programs for 2026. Learn eligibility, benefits, and how to qualify statewide and locally.",
    href: "/learn/first-time-homebuyer/grants-and-programs",
    image: "/images/guides/florida-first-time-homebuyer-grants.png",
    readTime: "33 min read",
  },
  {
    category: "Rent-to-Own Programs",
    title: "17 Florida Rent-to-Own Programs: Buy With No Down Payment",
    description:
      "Explore 17 Florida rent-to-own programs for 2026. Learn how buyers may purchase with little or no down payment, plus risks, rules, and alternatives.",
    href: "/florida-rent-to-own-programs",
    image: "/images/guides/florida-rent-to-own-programs.png",
    readTime: "10 min read",
  },
  {
    category: "Florida Income Limits & Pricing",
    title:
      "Florida Housing Income & Purchase Price Limits (2026) | County-by-County Guide",
    description:
      "See 2026 Florida Housing income limits and purchase price caps by county. Learn who qualifies for Florida Housing loans, grants, and down payment assistance.",
    href: "/florida-housing-income-purchase-price-limits",
    image: "/images/guides/florida-housing-income-limits.png",
    readTime: "8 min read",
  },
  {
    category: "First-Time Buyer Guides",
    title:
      "What Are the Requirements to Buy a House in Florida? 7 Rules for First-Time Buyers",
    description:
      "Learn the key requirements to buy a house in Florida, including credit, down payment, and loan options. These 7 rules help first-time buyers understand what it takes to qualify.",
    href: "/requirements-to-buy-house-in-florida",
    image: "/images/guides/florida-homebuyer-requirements.png",
    readTime: "7 min read",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
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

export function ExpertGuides() {
  return (
    <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            From Our <span className="text-brand-green">Experts</span>
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
            Discover our most trusted guides and expert-written resources to help
            you buy a home in Florida with confidence.
          </p>
        </div>

        {/* Article grid: featured left, 3 stacked right */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:gap-6">
          {/* Featured article */}
          <Link
            href={articles[0].href}
            className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,105,72,0.3)] lg:row-span-3 lg:min-h-0"
          >
            {/* Full-bleed background image */}
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark gradient overlay — deeper bottom for text, lighter top to show image */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/55 to-dark-green/15" />

            {/* Large watermark number */}
            <span className="pointer-events-none absolute -top-6 -right-4 select-none text-[200px] font-black leading-none text-white/[0.06] sm:text-[240px]">
              01
            </span>

            {/* Content */}
            <div className="relative p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="w-fit rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {articles[0].category}
                </span>
                <span className="text-[12px] font-medium text-white/40">
                  {articles[0].readTime}
                </span>
              </div>

              <h3 className="mt-5 text-[24px] font-bold leading-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] sm:text-[28px] lg:text-[32px]">
                {articles[0].title}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                {articles[0].description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                Read Guide
                <ArrowIcon />
              </span>
            </div>
          </Link>

          {/* Side articles */}
          {articles.slice(1).map((article, i) => (
            <Link
              key={article.title}
              href={article.href}
              className="group relative flex overflow-hidden rounded-2xl border-l-[3px] border-l-brand-green/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-l-brand-green hover:shadow-[0_8px_32px_rgba(0,105,72,0.12)]"
            >
              {/* Thumbnail image */}
              <div className="relative hidden w-[180px] shrink-0 overflow-hidden sm:block">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="180px"
                />
              </div>

              {/* Content */}
              <div className="relative flex-1 py-5 pr-5 pl-6 sm:py-5 sm:pr-6 sm:pl-6">
                {/* Background number */}
                <span className="pointer-events-none absolute -top-1 right-4 select-none text-[64px] font-black leading-none text-brand-green/[0.03] transition-colors duration-300 group-hover:text-brand-green/[0.08]">
                  {String(i + 2).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                      {article.category}
                    </span>
                    <span className="hidden text-[11px] text-dark-green/25 sm:inline">
                      &bull;
                    </span>
                    <span className="hidden text-[11px] font-medium text-dark-green/35 sm:inline">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-1.5 pr-8 text-[16px] font-bold leading-snug text-dark-green sm:text-[17px]">
                    {article.title}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-dark-green/50 sm:text-[14px]">
                    {article.description}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-green transition-all duration-300 group-hover:gap-2.5">
                    Read Guide
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-brand-green px-8 py-7 shadow-lg sm:flex sm:items-center sm:justify-between sm:px-10 sm:py-8">
          <h3 className="text-[20px] font-bold text-white sm:text-[22px]">
            Stay Current on Florida&apos;s 2026 Grants
          </h3>
          <Link
            href="/mortgage-articles"
            className="group mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-brand-green transition-all duration-300 hover:bg-white/90 hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)] sm:mt-0"
          >
            See Latest Updates
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
