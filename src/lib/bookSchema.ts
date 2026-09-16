/**
 * Schema.org builders for the /books section. One place, so every book page
 * emits the same Person @id (merged with /team/phil-ganz#person), the same
 * Organization @id, and the same Book/@id convention (`<page>#book`) that the
 * team bookshelf already uses.
 */
import { siteConfig } from "@/lib/site";
import {
  bookHref,
  books,
  liveEditions,
  liveRetailers,
  type Book,
} from "@/lib/books";

export const authorId = `${siteConfig.url}/team/phil-ganz#person`;
export const organizationId = `${siteConfig.url}/#organization`;

export const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": authorId,
  name: "Phil Ganz",
  jobTitle: "Mortgage Expert / President",
  worksFor: {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.company,
  },
  url: `${siteConfig.url}/team/phil-ganz`,
  image: `${siteConfig.url}/images/team/phil-ganz.webp`,
  sameAs: [
    "https://www.amazon.com/author/philganz",
    "https://www.goodreads.com/philganz",
    "https://openlibrary.org/authors/OL16593148A",
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/individual/37833",
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "NMLS",
    value: "37833",
  },
};

export function bookId(book: Book) {
  return `${siteConfig.url}${bookHref(book)}#book`;
}

function publisherNode(book: Book) {
  if (book.publisher.type === "Organization") {
    return {
      "@type": "Organization",
      "@id": organizationId,
      name: book.publisher.name,
    };
  }
  return { "@type": "Person", "@id": authorId, name: book.publisher.name };
}

export function buildBookSchema(book: Book, description: string) {
  const pageUrl = `${siteConfig.url}${bookHref(book)}`;
  const sameAs = [
    book.googleBooksUrl,
    book.goodreadsUrl,
    book.openLibraryUrl,
    ...liveRetailers(book).map((r) => r.url),
  ].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": bookId(book),
    name: book.title,
    alternateName: book.subtitle,
    author: { "@type": "Person", "@id": authorId },
    publisher: publisherNode(book),
    datePublished: book.datePublished,
    inLanguage: "en-US",
    isbn: book.isbn,
    ...(book.pages ? { numberOfPages: book.pages } : {}),
    image: `${siteConfig.url}${book.ogImage ?? book.coverImage}`,
    url: pageUrl,
    sameAs,
    description,
    genre: ["Personal Finance", "Real Estate"],
    workExample: liveEditions(book).map((edition) => ({
      "@type": "Book",
      bookFormat: edition.schemaFormat,
      name: `${book.title} (${edition.format})`,
      ...(edition.isbn ? { isbn: edition.isbn } : {}),
      offers: {
        "@type": "Offer",
        url: edition.url,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    })),
  };
}

export function buildBookBreadcrumb(book: Book) {
  return {
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
    ],
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** /books library: a CollectionPage listing every Book by @id. */
export function buildLibrarySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/books#library`,
    name: "Mortgage Books by Phil Ganz",
    url: `${siteConfig.url}/books`,
    description:
      "The Phil Ganz Mortgage Library: practical guides for homebuyers, homeowners, families, and real estate professionals navigating mortgages, home equity, and generational wealth.",
    about: { "@type": "Person", "@id": authorId },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: books.map((book, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Book",
          "@id": bookId(book),
          name: book.title,
          url: `${siteConfig.url}${bookHref(book)}`,
          image: `${siteConfig.url}${book.coverImage}`,
          author: { "@type": "Person", "@id": authorId },
          datePublished: book.datePublished,
          isbn: book.isbn,
        },
      })),
    },
  };
}

export function buildLibraryBreadcrumb() {
  return {
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
    ],
  };
}
