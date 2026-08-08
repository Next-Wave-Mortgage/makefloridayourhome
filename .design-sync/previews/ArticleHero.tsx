import * as React from "react";
import { ArticleHero } from "makefloridayourhome";

export const FullWithReviewer = () => (
  <ArticleHero
    title="105 Florida First-Time Home Buyer Grants & Programs (2026 Guide)"
    description="Explore 105 Florida first-time homebuyer grants and assistance programs for 2026 — including Hometown Heroes, Florida Assist, and county SHIP funds."
    tags={["down payment assistance", "first-time buyer"]}
    author={{
      name: "Phil Ganz",
      title: "Licensed Loan Officer",
      image: "/images/team/phil-ganz.webp",
      slug: "phil-ganz",
    }}
    reviewer={{
      name: "Ryan Skerritt",
      title: "Senior Mortgage Advisor",
      image: "/images/team/ryan-skerritt.webp",
      slug: "ryan-skerritt",
    }}
    publishedDate="January 12, 2026"
    updatedDate="August 1, 2026"
    readTimeLabel="33 min read"
    featuredImage="/images/guides/florida-first-time-homebuyer-grants.webp"
    imageAlt="Florida first-time homebuyer reviewing grant paperwork at a kitchen table"
  />
);

export const Minimal = () => (
  <ArticleHero
    title="What Are the Requirements to Buy a House in Florida?"
    author={{
      name: "Phil Ganz",
      title: "Licensed Loan Officer",
      image: "/images/team/phil-ganz.webp",
      slug: "phil-ganz",
    }}
    publishedDate="July 18, 2026"
    readTimeLabel="7 min read"
  />
);
