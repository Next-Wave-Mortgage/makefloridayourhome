import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { team } from "@/app/(marketing)/team/teamData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  /* ── Static marketing pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    // Core marketing pages
    { url: `${baseUrl}/home-loan`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/down-payment-assistance`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/hometown-heroes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/first-time-home-buyer`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/home-loan/fha-loan`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/florida-down-payment-assistance-interactive-map`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Hub pages
    { url: `${baseUrl}/programs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/calculators`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/home-affordability-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mortgage-rates`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    // Funnel pages
    { url: `${baseUrl}/home-purchase-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/check-dpa-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/check-fha-loan-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/check-va-loan-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/check-usda-loan-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/check-conventional-loan-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/check-hometown-heroes-eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/eligibility/schedule-a-free-call`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
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
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...learnPages, ...teamPages];
}
