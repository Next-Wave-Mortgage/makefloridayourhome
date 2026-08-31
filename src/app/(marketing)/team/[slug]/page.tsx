import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { team } from "../teamData";

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

const ArrowIcon = () => (
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
);

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

      {/* Header */}
      <section className="relative overflow-hidden bg-green-tint py-14 text-center sm:py-16">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/[0.03]" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-green/[0.03]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            {firstName}{" "}
            <span className="text-brand-green">
              {member.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-3 text-[16px] text-dark-green/60 sm:text-[17px]">
            {member.role}, {siteConfig.company} · Mortgage Expert · NMLS #
            {member.nmls}
          </p>
          {member.books && member.books.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {member.books.map((book) => (
                <Link
                  key={book.href}
                  href={book.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-white px-5 py-2.5 text-[14px] font-semibold text-brand-green transition-all duration-300 hover:border-brand-green/50 hover:shadow-[0_2px_12px_rgba(0,105,72,0.12)]"
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
                  >
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                  Author of {book.title}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Profile */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-4xl items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
            {/* Sidebar */}
            <div className="lg:sticky lg:top-8">
              <div className="rounded-2xl border border-border-gray/60 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    width={280}
                    height={350}
                    className="w-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-review-gold"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-[13px] text-dark-green/50">
                  Rated {member.googleRating}/5.0 by {member.googleReviews}{" "}
                  Homeowners on Google
                </p>

                {/* Contact card */}
                <div className="mt-5 space-y-3">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 rounded-xl border border-border-gray/60 bg-green-tint px-4 py-3 text-[14px] font-medium text-brand-green transition-colors hover:text-dark-green"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    className="flex items-center gap-3 rounded-xl border border-border-gray/60 bg-green-tint px-4 py-3 text-[14px] font-medium text-brand-green transition-colors hover:text-dark-green"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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

                <p className="mt-4 text-center text-[12px] text-dark-green/40">
                  NMLS #{member.nmls} ·{" "}
                  <a
                    href={`https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/${member.nmls}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-brand-green"
                  >
                    Verify license
                  </a>
                </p>
              </div>
            </div>

            {/* Bio content */}
            <div>
              <div className="space-y-4 text-[16px] leading-relaxed text-dark-green/70">
                {member.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Loan options */}
              {member.loanOptions && (
                <div className="mt-10">
                  <h2 className="text-[20px] font-bold text-dark-green">
                    Loan options {firstName} can help with
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {member.loanOptions.map((opt) => (
                      <li
                        key={opt}
                        className="flex items-start gap-3 text-[15px] text-dark-green/70"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
              <div className="mt-10">
                <h2 className="text-[20px] font-bold text-dark-green">
                  Built for real-life borrowers
                </h2>
                <ul className="mt-4 space-y-2">
                  {member.borrowerTypes.map((bt) => (
                    <li
                      key={bt}
                      className="flex items-start gap-3 text-[15px] text-dark-green/70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
              <div className="mt-10">
                <h2 className="text-[20px] font-bold text-dark-green">
                  A simple, guided process
                </h2>
                <ol className="mt-4 space-y-3">
                  {member.process.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-[15px] text-dark-green/70"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-[12px] font-bold text-brand-green">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Closing */}
              <div className="mt-10 rounded-xl border border-brand-green/20 bg-green-tint px-6 py-5">
                <p className="text-[15px] leading-relaxed text-dark-green/60">
                  {member.closingNote}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/eligibility/schedule-a-free-call"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                >
                  Schedule a Free Call
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookshelf */}
      {member.books && member.books.length > 0 && (
        <section className="bg-green-tint py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                The Bookshelf
              </p>
              <h2 className="mt-3 text-center text-[26px] font-bold leading-tight text-dark-green sm:text-[32px]">
                Books by <span className="text-brand-green">{firstName}</span>
              </h2>
              <div className="mt-8 space-y-4">
                {member.books.map((book) => (
                  <div
                    key={book.href}
                    className="flex flex-col items-center gap-6 rounded-2xl border border-border-gray/60 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:gap-8 sm:p-7"
                  >
                    <Link href={book.href} className="shrink-0">
                      <Image
                        src={book.cover}
                        alt={book.coverAlt}
                        width={220}
                        height={352}
                        className="h-[176px] w-auto rounded-[4px] shadow-[0_10px_24px_-6px_rgba(0,49,34,0.35)] transition-transform duration-300 hover:-translate-y-1"
                      />
                    </Link>
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <h3 className="text-[20px] font-bold text-dark-green">
                        <Link
                          href={book.href}
                          className="transition-colors hover:text-brand-green"
                        >
                          {book.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60">
                        {book.tagline}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                        <Link
                          href={book.href}
                          className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-[14px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                        >
                          About the Book
                          <ArrowIcon />
                        </Link>
                        {book.buyLinks.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center rounded-full border-2 border-brand-green/20 px-6 py-[10px] text-[14px] font-bold text-brand-green transition-colors hover:bg-brand-green/5"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
