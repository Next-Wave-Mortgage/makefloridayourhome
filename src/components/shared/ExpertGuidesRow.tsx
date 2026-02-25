import Link from "next/link";
import Image from "next/image";

interface Article {
  category: string;
  title: string;
  description: string;
  href: string;
  image: string;
  readTime: string;
}

interface ExpertGuidesRowProps {
  heading?: React.ReactNode;
  articles: Article[];
  bg?: "green-tint" | "white";
}

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

export function ExpertGuidesRow({
  heading,
  articles,
  bg = "white",
}: ExpertGuidesRowProps) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${bg === "green-tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {heading && (
          <h2 className="mb-10 text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, i) => (
            <Link
              key={article.title}
              href={article.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-l-[3px] border-l-brand-green/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-l-brand-green hover:shadow-[0_8px_32px_rgba(0,105,72,0.12)]"
            >
              {/* Thumbnail */}
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-5">
                <span className="pointer-events-none absolute -top-1 right-4 select-none text-[64px] font-black leading-none text-dark-green/[0.03] transition-colors duration-300 group-hover:text-brand-green/[0.08]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-dark-green/25">
                    &bull;
                  </span>
                  <span className="text-[11px] font-medium text-dark-green/35">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="mt-2 text-[15px] font-bold leading-snug text-dark-green sm:text-[16px]">
                  {article.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-dark-green/50 sm:text-[14px]">
                  {article.description}
                </p>

                <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-green transition-all duration-300 group-hover:gap-2.5">
                  Read Guide
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
