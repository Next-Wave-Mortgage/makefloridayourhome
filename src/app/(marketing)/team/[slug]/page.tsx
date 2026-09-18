import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { team } from "../teamData";
import { BookshelfCarousel } from "@/components/team/BookshelfCarousel";
import { getPostsByAuthor } from "@/lib/blog";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  const title = member.books?.length
    ? `${member.name} — ${member.role}, Next Wave Mortgage & Author of ${member.books[0].title}`
    : `${member.name} | ${member.role}`;
  return {
    title,
    description: member.bio[0],
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      title,
      description: member.bio[0],
      url: `https://www.makefloridayourhome.com/team/${member.slug}`,
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const firstName = member.name.split(" ")[0];
  const personId = `${siteConfig.url}/team/${member.slug}#person`;
  const recentPosts = getPostsByAuthor(member.name, 6);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: member.name,
    jobTitle: `${member.role}, ${siteConfig.company}`,
    worksFor: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.company,
    },
    url: `${siteConfig.url}/team/${member.slug}`,
    image: `${siteConfig.url}${member.photo}`,
    telephone: member.phone,
    email: member.email,
    sameAs: [
      `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/${member.nmls}`,
      ...(member.sameAs ?? []),
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NMLS",
      value: member.nmls,
    },
    knowsAbout: [
      "Florida mortgages",
      "Down payment assistance",
      "First-time home buyers",
    ],
  };

  const bookSchemas = (member.books ?? []).map((book) => ({
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${siteConfig.url}${book.href}#book`,
    name: book.title,
    url: `${siteConfig.url}${book.href}`,
    image: `${siteConfig.url}${book.cover}`,
    author: { "@type": "Person", "@id": personId },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.company,
    },
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Team",
        item: `${siteConfig.url}/team`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: member.name,
        item: `${siteConfig.url}/team/${member.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {bookSchemas.map((schema, i) => (
        <Script
          key={String(schema["@id"])}
          id={`person-book-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero: photo + name + rating + contact in one block */}
      <section className="relative overflow-hidden bg-green-tint py-6 sm:py-7">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/[0.03]" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-green/[0.03]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
            <Image
              src={member.photo}
              alt={`${member.name}, ${member.role}`}
              width={280}
              height={350}
              priority
              className="w-[160px] shrink-0 rounded-2xl object-cover object-top shadow-[0_12px_32px_-10px_rgba(0,49,34,0.3)] sm:w-[188px]"
            />
            <div className="min-w-0">
              <h1 className="text-[30px] font-bold leading-tight text-dark-green sm:text-[38px]">
                {firstName}{" "}
                <span className="text-brand-green">
                  {member.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="mt-1.5 text-[15px] text-dark-green/60 sm:text-[16px]">
                {member.role}, {siteConfig.company} · NMLS #{member.nmls} ·{" "}
                <a
                  href={`https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/${member.nmls}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dark-green/25 underline-offset-2 transition-colors hover:text-brand-green"
                >
                  Verify license
                </a>
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 sm:justify-start">
                <span className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-review-gold"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </span>
                <p className="text-[13.5px] text-dark-green/55">
                  {member.googleRating}/5.0 · {member.googleReviews} Homeowners
                  on Google
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
                <Link
                  href="/eligibility/schedule-a-free-call"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                >
                  Schedule a Free Call
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
                </Link>
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-brand-green/20 bg-white px-5 py-2.5 text-[14px] font-semibold text-brand-green transition-colors hover:border-brand-green/45"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-brand-green/20 bg-white px-5 py-2.5 text-[14px] font-semibold text-brand-green transition-colors hover:border-brand-green/45"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white py-7">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-3 text-[15.5px] leading-[1.65] text-dark-green/70">
              {member.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Loan options */}
              {member.loanOptions && (
                <div>
                  <h2 className="text-[17px] font-bold text-dark-green">
                    Loan options {firstName} can help with
                  </h2>
                  <ul className="mt-2.5 space-y-1.5">
                    {member.loanOptions.map((opt) => (
                      <li
                        key={opt}
                        className="flex items-start gap-2.5 text-[14px] text-dark-green/70"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 shrink-0 text-brand-green"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Built for */}
              <div>
                <h2 className="text-[17px] font-bold text-dark-green">
                  Built for real-life borrowers
                </h2>
                <ul className="mt-2.5 space-y-1.5">
                  {member.borrowerTypes.map((bt) => (
                    <li
                      key={bt}
                      className="flex items-start gap-2.5 text-[14px] text-dark-green/70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-brand-green"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {bt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h2 className="text-[17px] font-bold text-dark-green">
                  A simple, guided process
                </h2>
                <ol className="mt-2.5 space-y-1.5">
                  {member.process.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-2.5 text-[14px] text-dark-green/70"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-[11px] font-bold text-brand-green">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest articles — surfaces the writer's existing Learn guides, no new pages */}
      {recentPosts.length > 0 && (
        <section className="bg-green-tint py-7">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-[17px] font-bold text-dark-green">
                Latest from {firstName}
              </h2>
              <ul className="mt-3 divide-y divide-border-gray/60 overflow-hidden rounded-xl border border-border-gray/60 bg-white">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/learn/${post.slug}`}
                      className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-green-tint/60"
                    >
                      <span className="text-[14.5px] font-medium text-dark-green group-hover:text-brand-green">
                        {post.title}
                      </span>
                      <span className="shrink-0 text-[12.5px] text-dark-green/45">
                        {new Date(
                          post.updatedDate || post.date,
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/learn"
                className="mt-3 inline-block text-[13.5px] font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green"
              >
                See all articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bookshelf */}
      {member.books && member.books.length > 0 && (
        <BookshelfCarousel books={member.books} firstName={firstName} />
      )}
    </>
  );
}
