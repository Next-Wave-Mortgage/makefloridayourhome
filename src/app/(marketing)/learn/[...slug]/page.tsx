import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { TableOfContents, MobileTableOfContents } from "./TableOfContents";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const post = getPostBySlug(slugStr);
  if (!post) return {};

  const url = `https://www.makefloridayourhome.com/learn/${slugStr}`;

  return {
    title: `${post.title} | Make Florida Your Home`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: "Make Florida Your Home",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author],
      section: "Florida Homebuying",
      ...(post.featuredImage && {
        images: [
          {
            url: `https://www.makefloridayourhome.com${post.featuredImage}`,
            alt: post.imageAlt || post.title,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.featuredImage && {
        images: [`https://www.makefloridayourhome.com${post.featuredImage}`],
      }),
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    ...(post.tags && { keywords: post.tags.join(", ") }),
    other: {
      "article:published_time": post.date,
      "article:modified_time": post.updatedDate || post.date,
      "article:author": post.author,
      ...(post.reviewedBy && { "article:reviewer": post.reviewedBy }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const post = getPostBySlug(slugStr);
  if (!post) notFound();

  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const updatedDate = post.updatedDate
    ? new Date(post.updatedDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const canonicalUrl = `https://www.makefloridayourhome.com/learn/${slugStr}`;

  const wordCount = post.content.trim().split(/\s+/).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.featuredImage
      ? `https://www.makefloridayourhome.com${post.featuredImage}`
      : undefined,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: `https://www.makefloridayourhome.com/team/${post.author.toLowerCase().replace(/\s+/g, "-")}`,
      jobTitle: post.authorTitle,
    },
    ...(post.reviewedBy && {
      reviewedBy: {
        "@type": "Person",
        name: post.reviewedBy,
        url: `https://www.makefloridayourhome.com/team/${post.reviewedBySlug}`,
        jobTitle: post.reviewedByTitle,
      },
    }),
    publisher: {
      "@type": "Organization",
      name: "Make Florida Your Home",
      url: "https://www.makefloridayourhome.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.makefloridayourhome.com/images/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    wordCount,
    ...(post.tags && { keywords: post.tags.join(", ") }),
    about: {
      "@type": "Thing",
      name: post.description,
    },
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Make Florida Your Home",
      url: "https://www.makefloridayourhome.com",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose-mfyh > p:first-of-type"],
    },
  };

  // Extract H3 headings for ItemList schema (listicle programs)
  const h3Matches = post.content.match(/^### .+$/gm);
  const itemListSchema = h3Matches && h3Matches.length > 5
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: post.title,
        description: post.description,
        numberOfItems: h3Matches.length,
        itemListElement: h3Matches.map((heading: string, i: number) => ({
          "@type": "ListItem",
          position: i + 1,
          name: heading.replace(/^### /, ""),
          url: `${canonicalUrl}#${heading.replace(/^### /, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
        })),
      }
    : null;

  // Extract FAQ pairs from <details><summary>Q</summary><div>A</div></details> pattern
  const faqSchema = (() => {
    const summaryRegex = new RegExp("<summary>(.*?)</summary>\\s*<div[^>]*>(.*?)</div>", "gs");
    const qaPairs: { question: string; answer: string }[] = [];
    let match;
    while ((match = summaryRegex.exec(post.content)) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim();
      if (question && answer) {
        qaPairs.push({ question, answer });
      }
    }
    if (qaPairs.length === 0) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qaPairs.map((qa) => ({
        "@type": "Question",
        name: qa.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: qa.answer,
        },
      })),
    };
  })();

  // Build breadcrumb — add intermediate segments for nested slugs
  const breadcrumbItems = [
    { name: "Home", item: "https://www.makefloridayourhome.com" },
    { name: "Articles", item: "https://www.makefloridayourhome.com/learn" },
  ];
  if (slug.length > 1) {
    // Add intermediate breadcrumb for subcategory (e.g., "First-Time Homebuyer")
    const subcat = slug[0].replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
    breadcrumbItems.push({
      name: subcat,
      item: `https://www.makefloridayourhome.com/learn/${slug[0]}`,
    });
  }
  breadcrumbItems.push({ name: post.title, item: canonicalUrl });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema),
          }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Article Hero */}
      <section className="relative overflow-hidden bg-brand-green">
        {/* Layered gradient: bright highlight top-left, deep shadow bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)",
              "radial-gradient(ellipse 50% 80% at 90% 100%, rgba(0,0,0,0.20) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Large decorative palm-leaf silhouette — top right */}
        <svg
          className="pointer-events-none absolute -right-16 -top-10 h-[520px] w-[520px] text-white/[0.04]"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M256 0c0 0-48 96-48 208c0 48 16 88 48 112c32-24 48-64 48-112C304 96 256 0 256 0zM256 320c-80-48-192-48-240 16c48 64 160 80 240 48zM256 320c80-48 192-48 240 16c-48 64-160 80-240 48zM128 160c-64 32-112 96-128 176c80-16 160-64 192-128zM384 160c64 32 112 96 128 176c-80-16-160-64-192-128z" />
        </svg>

        {/* Subtle diagonal lines texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 16px)",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="pb-8 pt-6 sm:pb-10 sm:pt-7 lg:pb-12 lg:pt-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-[13px] text-white/45">
              <Link
                href="/"
                className="transition-colors hover:text-white/80"
              >
                Home
              </Link>
              <span className="text-white/25">/</span>
              <Link
                href="/learn"
                className="transition-colors hover:text-white/80"
              >
                Articles
              </Link>
            </nav>

            {/* Two-column: content left, image right */}
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
              {/* Left column */}
              <div>
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-[24px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[40px] lg:text-[48px]">
                  {post.title}
                </h1>

                {/* Description */}
                {post.description && (
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
                    {post.description}
                  </p>
                )}

                {/* Authors row */}
                <div className="mt-5 flex items-center gap-3 sm:mt-8 sm:gap-5">
                  {/* Written by */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {post.authorImage && (
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={48}
                        height={48}
                        className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
                      />
                    )}
                    <div>
                      <div className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-[11px]">
                        Written by
                      </div>
                      <Link
                        href={`/team/${post.author.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[13px] font-semibold text-white hover:underline sm:text-[14px]"
                      >
                        {post.author}
                      </Link>
                      {post.authorTitle && (
                        <div className="hidden text-[11px] text-white/40 sm:block">
                          {post.authorTitle}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Reviewed by */}
                  {post.reviewedBy && (
                    <>
                      <div className="h-8 w-px bg-white/15 sm:h-10" />
                      <div className="flex items-center gap-2 sm:gap-3">
                        {post.reviewedByImage && (
                          <Image
                            src={post.reviewedByImage}
                            alt={post.reviewedBy}
                            width={48}
                            height={48}
                            className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
                          />
                        )}
                        <div>
                          <div className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-[11px]">
                            Reviewed by
                          </div>
                          <Link
                            href={`/team/${post.reviewedBySlug}`}
                            className="text-[13px] font-semibold text-white hover:underline sm:text-[14px]"
                          >
                            {post.reviewedBy}
                          </Link>
                          {post.reviewedByTitle && (
                            <div className="hidden text-[11px] text-white/40 sm:block">
                              {post.reviewedByTitle}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Fact Checked badge — desktop only inline, mobile in date line */}
                  {post.reviewedBy && (
                    <>
                      <div className="hidden h-10 w-px bg-white/15 sm:block" />
                      <div className="hidden items-center gap-1.5 rounded-full bg-white/15 py-1.5 pl-2 pr-3.5 backdrop-blur-sm sm:flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                        <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                          Fact Checked
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Date line */}
                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-white/45 sm:mt-4 sm:text-[13px]">
                  {/* Mobile fact checked badge */}
                  {post.reviewedBy && (
                    <div className="mr-1 flex items-center gap-1 rounded-full bg-white/15 py-1 pl-1.5 pr-2.5 sm:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        Fact Checked
                      </span>
                    </div>
                  )}
                  <span>
                    {updatedDate
                      ? <><strong className="font-semibold text-white/60">Updated</strong> {updatedDate}</>
                      : publishedDate}
                  </span>
                  <span className="text-white/20">·</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Right: Featured image */}
              {post.featuredImage && (
                <div className="relative hidden lg:block">
                  <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt || post.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  {/* Glow effect behind image */}
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/[0.06] blur-2xl" />
                </div>
              )}
            </div>
          </div>
        </div>

      </section>

      {/* Article — green band behind the overlap, then light bg */}
      <div
        className="bg-green-tint/60"
        style={{
          backgroundImage: "linear-gradient(to bottom, #006948 0px, #006948 24px, transparent 24px)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-[minmax(0,860px)_1fr] lg:gap-10">
          <article className="overflow-hidden rounded-t-3xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.07)]">
            {/* Mobile featured image — sits at top of card, edge to edge */}
            {post.featuredImage && (
              <div className="lg:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.featuredImage}
                  alt={post.imageAlt || post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
            <div className="px-6 pb-10 pt-8 sm:px-12 sm:pb-14 sm:pt-10">
            <MobileTableOfContents />
            <div className="prose-mfyh">
              <MDXRemote
                source={post.content}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>
            {/* CTA inside the card */}
            <div className="mt-12 rounded-2xl bg-green-tint px-6 py-12 text-center sm:mt-16 sm:px-10">
              <h2 className="text-[28px] font-bold text-dark-green sm:text-[34px]">
                Ready to <span className="text-brand-green">Get Started?</span>
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
                Check your eligibility in under 2 minutes. No credit pull, no
                obligation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/home-purchase-eligibility"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                >
                  Check My Eligibility
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
                <Link
                  href="/schedule-a-free-call-today"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green/20 px-8 py-4 text-[15px] font-bold text-brand-green transition-all hover:bg-brand-green/5"
                >
                  Schedule a Free Call
                </Link>
              </div>
            </div>
            </div>
          </article>

          {/* Sidebar TOC */}
          <aside className="pt-20">
            <TableOfContents showMapPromo={post.tags?.some((t) => ["down payment assistance", "dpa", "grants"].includes(t.toLowerCase())) ?? false} />
          </aside>
          </div>
        </div>
      </div>
    </>
  );
}
