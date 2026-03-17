import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Make Florida Your Home`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://makefloridayourhome.com/learn/${slug}`,
      type: "article",
      ...(post.featuredImage && { images: [post.featuredImage] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/learn"
            className="mb-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-green hover:text-dark-green transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            All Articles
          </Link>
          {post.tags && post.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-[28px] font-bold leading-snug text-dark-green sm:text-[36px] lg:text-[42px]">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-[14px] text-dark-green/50">
            <span>By {post.author}</span>
            <span>·</span>
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {post.updatedDate && (
              <>
                <span>·</span>
                <span>
                  Updated{" "}
                  {new Date(post.updatedDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="bg-white pt-8">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article content */}
      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose-mfyh">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-green-tint py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-xl text-center">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
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
      </section>
    </>
  );
}
