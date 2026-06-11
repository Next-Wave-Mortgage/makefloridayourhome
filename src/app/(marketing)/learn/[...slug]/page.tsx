import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArticleHero } from "@/components/shared/ArticleHero";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { TableOfContents, MobileTableOfContents } from "./TableOfContents";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug: slug.split("/") }));
}

function formatArticleDate(date: string) {
  const dateOnlyMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const parsedDate = dateOnlyMatch
    ? new Date(
        Number(dateOnlyMatch[1]),
        Number(dateOnlyMatch[2]) - 1,
        Number(dateOnlyMatch[3]),
      )
    : new Date(date);

  return parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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
    title: post.title,
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

  const publishedDate = formatArticleDate(post.date);

  const updatedDate = post.updatedDate
    ? formatArticleDate(post.updatedDate)
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
  const itemListSchema =
    h3Matches && h3Matches.length > 5
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
            url: `${canonicalUrl}#${heading
              .replace(/^### /, "")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`,
          })),
        }
      : null;

  // Prefer frontmatter FAQs; keep legacy MDX details support for older articles.
  const faqSchema = (() => {
    const frontmatterFaqs =
      post.faqs?.filter((faq) => faq.question && faq.answer) ?? [];

    if (frontmatterFaqs.length > 0) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: frontmatterFaqs.map((qa) => ({
          "@type": "Question",
          name: qa.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: qa.answer,
          },
        })),
      };
    }

    const summaryRegex = new RegExp(
      "<summary>(.*?)</summary>\\s*<div[^>]*>(.*?)</div>",
      "gs",
    );
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
    const subcat = slug[0]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c: string) => c.toUpperCase());
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
      <ArticleHero
        title={post.title}
        description={post.description}
        tags={post.tags}
        author={{
          name: post.author,
          title: post.authorTitle,
          image: post.authorImage,
        }}
        reviewer={
          post.reviewedBy
            ? {
                name: post.reviewedBy,
                title: post.reviewedByTitle,
                image: post.reviewedByImage,
                slug: post.reviewedBySlug,
              }
            : undefined
        }
        publishedDate={publishedDate}
        updatedDate={updatedDate}
        readTimeLabel={post.readTime + " min read"}
        featuredImage={post.featuredImage}
        imageAlt={post.imageAlt || post.title}
      />

      {/* Article — green band behind the overlap, then light bg */}
      <div
        className="bg-green-tint/60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #006948 0px, #006948 24px, transparent 24px)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid md:grid-cols-[minmax(0,1fr)_260px] md:gap-8 lg:grid-cols-[minmax(0,860px)_1fr] lg:gap-10">
            <article className="overflow-hidden rounded-t-3xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.07)]">
              {/* Mobile featured image — sits at top of card, edge to edge */}
              {post.featuredImage && (
                <div className="lg:hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.imageAlt || post.title}
                    width={860}
                    height={484}
                    priority
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              )}
              <div className="px-6 pb-10 pt-8 sm:px-12 sm:pb-14 sm:pt-10">
                <MobileTableOfContents />
                <div className="prose-mfyh">
                  <MDXRemote
                    source={post.content}
                    options={{
                      mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [rehypeSlug],
                      },
                    }}
                    components={{
                      table: (props: React.ComponentProps<"table">) => (
                        <div className="table-wrap">
                          <table {...props} />
                        </div>
                      ),
                    }}
                  />
                </div>
                {/* CTA inside the card */}
                <div className="mt-12 rounded-2xl bg-green-tint px-6 py-12 text-center sm:mt-16 sm:px-10">
                  <h2 className="text-[28px] font-bold text-dark-green sm:text-[34px]">
                    Ready to{" "}
                    <span className="text-brand-green">Get Started?</span>
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
                    Check your eligibility in under 2 minutes. No credit pull,
                    no obligation.
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
                      href="/eligibility/schedule-a-free-call"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green/20 px-8 py-4 text-[15px] font-bold text-brand-green transition-all hover:bg-brand-green/5"
                    >
                      Schedule a Free Call
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar TOC */}
            <aside className="pt-8">
              <TableOfContents
                showMapPromo={
                  post.tags?.some((t) =>
                    ["down payment assistance", "dpa", "grants"].includes(
                      t.toLowerCase(),
                    ),
                  ) ?? false
                }
                currentSlug={slugStr}
              />
            </aside>
          </div>
        </div>
      </div>
      {post.faqs && post.faqs.length > 0 && (
        <PageFAQ
          faqs={post.faqs}
          heading={
            <>
              Florida Housing{" "}
              <span className="text-brand-green">Questions</span>
            </>
          }
          description="Quick answers about income limits, purchase price caps, loan limits, and which Florida Housing table applies."
          bg="white"
        />
      )}
    </>
  );
}
