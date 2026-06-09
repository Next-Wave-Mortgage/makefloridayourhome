import Image from "next/image";
import Link from "next/link";

interface ArticleHeroAuthor {
  name: string;
  title?: string;
  image?: string;
  slug?: string;
}

interface ArticleHeroBreadcrumb {
  label: string;
  href: string;
}

interface ArticleHeroProps {
  title: string;
  description?: string;
  tags?: string[];
  author: ArticleHeroAuthor;
  reviewer?: ArticleHeroAuthor;
  publishedDate?: string;
  updatedDate?: string | null;
  readTimeLabel: string;
  featuredImage?: string | null;
  imageAlt?: string | null;
  breadcrumbs?: ArticleHeroBreadcrumb[];
}

function getAuthorHref(author: ArticleHeroAuthor): string {
  return `/team/${author.slug ?? author.name.toLowerCase().replace(/\s+/g, "-")}`;
}

function FactCheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
        fill="rgba(255,255,255,0.2)"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AuthorBlock({
  author,
  label,
}: {
  author: ArticleHeroAuthor;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {author.image && (
        <Image
          src={author.image}
          alt={author.name}
          width={48}
          height={48}
          className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
        />
      )}
      <div>
        <div className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-[11px]">
          {label}
        </div>
        <Link
          href={getAuthorHref(author)}
          className="text-[13px] font-semibold text-white hover:underline sm:text-[14px]"
        >
          {author.name}
        </Link>
        {author.title && (
          <div className="hidden text-[11px] text-white/40 sm:block">
            {author.title}
          </div>
        )}
      </div>
    </div>
  );
}

export function ArticleHero({
  title,
  description,
  tags = [],
  author,
  reviewer,
  publishedDate,
  updatedDate,
  readTimeLabel,
  featuredImage,
  imageAlt,
  breadcrumbs = [{ label: "Articles", href: "/learn" }],
}: ArticleHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-green">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 80% at 90% 100%, rgba(0,0,0,0.20) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <svg
        className="pointer-events-none absolute -right-16 -top-10 h-[520px] w-[520px] text-white/[0.04]"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M256 0c0 0-48 96-48 208c0 48 16 88 48 112c32-24 48-64 48-112C304 96 256 0 256 0zM256 320c-80-48-192-48-240 16c48 64 160 80 240 48zM256 320c80-48 192-48 240 16c-48 64-160 80-240 48zM128 160c-64 32-112 96-128 176c80-16 160-64 192-128zM384 160c64 32 112 96 128 176c-80-16-160-64-192-128z" />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 16px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="pb-8 pt-6 sm:pb-10 sm:pt-7 lg:pb-12 lg:pt-8">
          <nav className="mb-4 flex items-center gap-2 text-[13px] text-white/45">
            <Link href="/" className="transition-colors hover:text-white/80">
              Home
            </Link>
            {breadcrumbs.map((breadcrumb) => (
              <span key={breadcrumb.href} className="contents">
                <span className="text-white/25">/</span>
                <Link
                  href={breadcrumb.href}
                  className="transition-colors hover:text-white/80"
                >
                  {breadcrumb.label}
                </Link>
              </span>
            ))}
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
            <div>
              {tags.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-[24px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[40px] lg:text-[48px]">
                {title}
              </h1>

              {description && (
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
                  {description}
                </p>
              )}

              <div className="mt-5 flex items-center gap-3 sm:mt-8 sm:gap-5">
                <AuthorBlock author={author} label="Written by" />

                {reviewer && (
                  <>
                    <div className="h-8 w-px bg-white/15 sm:h-10" />
                    <AuthorBlock author={reviewer} label="Reviewed by" />

                    <div className="hidden h-10 w-px bg-white/15 sm:block" />
                    <div className="hidden items-center gap-1.5 rounded-full bg-white/15 py-1.5 pl-2 pr-3.5 backdrop-blur-sm sm:flex">
                      <FactCheckIcon />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                        Fact Checked
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-white/45 sm:mt-4 sm:text-[13px]">
                {reviewer && (
                  <div className="mr-1 flex items-center gap-1 rounded-full bg-white/15 py-1 pl-1.5 pr-2.5 sm:hidden">
                    <FactCheckIcon size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                      Fact Checked
                    </span>
                  </div>
                )}
                {updatedDate ? (
                  <span>
                    <strong className="font-semibold text-white/60">
                      Updated
                    </strong>{" "}
                    {updatedDate}
                  </span>
                ) : (
                  publishedDate && <span>{publishedDate}</span>
                )}
                <span className="text-white/20">·</span>
                <span>{readTimeLabel}</span>
              </div>
            </div>

            {featuredImage && (
              <div className="relative hidden lg:block">
                <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  <Image
                    src={featuredImage}
                    alt={imageAlt || title}
                    width={800}
                    height={600}
                    priority
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/[0.06] blur-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
