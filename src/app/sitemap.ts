import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { team } from "@/app/(marketing)/team/teamData";
import { books, bookHref } from "@/lib/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  /* ── Static marketing pages ──
   * Omit lastModified unless the page has a real modified date. A build-time
   * "now" changes on every deploy, and Google ignores lastmod it can't trust.
   */
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    // Core marketing pages
    {
      url: `${baseUrl}/home-loan`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hometown-heroes`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/fha-loan`,
      lastModified: new Date("2026-10-29"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/dscr-loan`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/foreign-national-loan`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/condotel-loan`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/condo-loan`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/va-loan`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/reverse-mortgage`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/dscr-loan/short-term-rental`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-loan/dscr-loan/cash-out-refinance`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fort-lauderdale-mortgage-broker`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/florida-dscr-loan-calculator`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/florida-down-payment-assistance-calculator`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/florida-down-payment-assistance-interactive-map`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Book library. Individual titles are appended below from src/lib/books.ts.
    {
      url: `${baseUrl}/books`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Free companion toolkits (not one per book yet - add here as they ship).
    {
      url: `${baseUrl}/books/approved-mortgage-playbook/toolkit`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Hub pages
    {
      url: `${baseUrl}/calculators`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/learn`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/home-affordability-calculator`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage-rates`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Funnel pages
    {
      url: `${baseUrl}/home-purchase-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-dpa-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-fha-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-va-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-usda-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-conventional-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-hometown-heroes-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-reverse-mortgage-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-heloc-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-manufactured-home-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-non-qm-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-jumbo-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-renovation-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/check-alternative-loan-eligibility`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/eligibility/schedule-a-free-call`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/florida-updates`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ── Dynamic learn/blog articles ── */
  const learnPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/learn/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date || now),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* ── Team member pages ── */
  const teamPages: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${baseUrl}/team/${member.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Book pages (one per title in src/lib/books.ts) ── */
  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${baseUrl}${bookHref(book)}`,
    lastModified: new Date(`${book.pageUpdated}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...bookPages, ...learnPages, ...teamPages];
}
