import * as React from "react";
import { ExpertGuidesRow } from "makefloridayourhome";

const articles = [
  {
    category: "Best Florida Home Buyer Programs",
    title: "105 Florida First-Time Home Buyer Grants & Programs (2026 Guide)",
    description:
      "Explore 105 Florida first-time homebuyer grants and assistance programs for 2026.",
    href: "/learn/first-time-homebuyer/grants-and-programs",
    image: "/images/guides/florida-first-time-homebuyer-grants.webp",
    readTime: "33 min read",
  },
  {
    category: "Rent-to-Own Programs",
    title: "17 Florida Rent-to-Own Programs: Buy With No Down Payment",
    description:
      "Explore 17 Florida rent-to-own programs for 2026. Learn how buyers may purchase with little or no down payment.",
    href: "/learn/fha-rent-to-own-florida-guide",
    image: "/images/guides/florida-rent-to-own-programs.webp",
    readTime: "10 min read",
  },
  {
    category: "Florida Income Limits & Pricing",
    title: "Florida Housing Income & Purchase Price Limits (2026)",
    description:
      "See 2026 Florida Housing income limits and purchase price caps by county.",
    href: "/learn/florida-housing-income-purchase-price-limits",
    image: "/images/guides/florida-housing-income-limits.webp",
    readTime: "8 min read",
  },
  {
    category: "First-Time Buyer Guides",
    title: "What Are the Requirements to Buy a House in Florida?",
    description:
      "Learn the key requirements to buy a house in Florida, including credit, down payment, and loan options.",
    href: "/learn/requirements-to-buy-a-house-in-florida",
    image: "/images/guides/florida-homebuyer-requirements.webp",
    readTime: "7 min read",
  },
];

export const GreenTint = () => (
  <ExpertGuidesRow
    heading={
      <>
        From Our <span className="text-brand-green">Experts</span>
      </>
    }
    articles={articles}
    bg="green-tint"
  />
);

export const WhiteNoHeading = () => (
  <ExpertGuidesRow articles={articles.slice(0, 4)} bg="white" />
);
