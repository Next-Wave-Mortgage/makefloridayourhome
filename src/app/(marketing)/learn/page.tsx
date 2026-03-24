import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Mortgage Articles & Florida Homebuyer Resources",
  description:
    "Expert guides on Florida home loans, down payment assistance, first-time buyer programs, and more. Updated for 2026.",
  openGraph: {
    title: "Mortgage Articles",
    description: "Expert guides on Florida home loans and buyer programs.",
    url: "https://www.makefloridayourhome.com/learn",
    type: "website",
  },
  alternates: {
    canonical: "/learn",
  },
};

export default function LearnPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            Mortgage <span className="text-brand-green">Articles</span>
          </h1>
          <p className="mt-3 text-[17px] text-dark-green/60">
            Expert guides on Florida home loans, programs, and homebuyer
            resources.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-[16px] text-dark-green/50">
              Articles coming soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/learn/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border-gray/60 bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                >
                  {post.featuredImage && (
                    <div className="aspect-[16/9] overflow-hidden bg-green-tint">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        width={600}
                        height={338}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col px-6 py-5">
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand-green/8 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-green"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-[17px] font-bold leading-snug text-dark-green group-hover:text-brand-green transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-dark-green/55 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[12px] text-dark-green/40">
                      <span>{post.author}</span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
