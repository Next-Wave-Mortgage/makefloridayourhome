import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getBook, bookHref } from "@/lib/books";
import { authorSchema } from "@/lib/bookSchema";
import { JsonLd } from "@/components/shared/JsonLd";
import { ApprovedChecklistToolkit } from "@/components/books/ApprovedChecklistToolkit";

const book = getBook("approved-mortgage-playbook")!;
const pageUrl = `${siteConfig.url}${bookHref(book)}/toolkit`;

const pageTitle =
  "The APPROVED Checklist: Free Mortgage Denial Checklist | Phil Ganz";
const pageDescription =
  "Free, interactive version of the APPROVED Checklist from Phil Ganz's book — what to check before accepting a mortgage denial, the papers you'll need, and the questions to ask any loan officer.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/books/approved-mortgage-playbook/toolkit" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${book.ogImage ?? book.coverImage}`,
        width: 1000,
        height: 1600,
        alt: book.coverAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Books",
      item: `${siteConfig.url}/books`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: book.title,
      item: `${siteConfig.url}${bookHref(book)}`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "The APPROVED Checklist",
      item: pageUrl,
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
  isPartOf: { "@id": `${siteConfig.url}/#organization` },
  about: { "@id": `${siteConfig.url}${bookHref(book)}#book` },
  author: { "@type": "Person", "@id": authorSchema["@id"] },
};

export default function ApprovedChecklistPage() {
  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="webpage-schema" data={webPageSchema} />
      <JsonLd id="author-schema" data={authorSchema} />

      <div className="bg-white pb-20 pt-12 sm:pt-16">
        <div className="mx-auto max-w-[880px] px-5 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-[13px] text-dark-green/50"
          >
            <Link href="/books" className="hover:text-brand-green">
              Books
            </Link>
            <span className="mx-1.5">/</span>
            <Link
              href={bookHref(book)}
              className="hover:text-brand-green"
            >
              APPROVED
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-dark-green/70">Toolkit</span>
          </nav>

          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[46px]">
            The APPROVED Checklist
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-green/70 sm:text-[18px]">
            A free, interactive version of the checklist from{" "}
            <Link
              href={bookHref(book)}
              className="font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green"
            >
              APPROVED
            </Link>
            . Check off what&rsquo;s been tried, see what&rsquo;s still open,
            and know exactly what to ask before you accept a no.
          </p>
        </div>

        <div className="mt-12">
          <ApprovedChecklistToolkit />
        </div>
      </div>
    </>
  );
}
