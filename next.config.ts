import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://static.hsappstatic.net https://lead-form.nextwavemortgage.com https://booking.nextwavemortgage.com https://news.google.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://www.nextwavemortgage.com https://lead-form.nextwavemortgage.com https://booking.nextwavemortgage.com",
      "frame-src https://meetings.hubspot.com https://news.google.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const mortgageRatesCacheHeaders = [
  ...securityHeaders,
  {
    key: "Vercel-CDN-Cache-Control",
    value: "max-age=300, stale-while-revalidate=86400",
  },
];

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      // Retire the empty program directory in favor of the loan options hub.
      {
        source: "/programs",
        destination: "/home-loan",
        statusCode: 301,
      },
      // 2026-09-09: /book (single-title landing page) became the /books library.
      // The Make Florida Your Home page now lives at its own permanent URL.
      // statusCode 301 (not permanent:true, which emits a 308) per Phil's
      // requirement that the migration read as a classic HTTP 301.
      {
        source: "/book",
        destination: "/books/make-florida-your-home",
        statusCode: 301,
      },
      // 2026-09-10 backlink-recovery 301s: legacy URLs that still hold real
      // dofollow backlinks (Ahrefs broken-backlinks report) pointed at the
      // closest modern equivalent. Garbage/scraper targets stay 404 on purpose.
      {
        source: "/florida/blog/types-of-reverse-mortgages",
        destination: "/books/reverse-mortgage-inheritance-strategy",
        statusCode: 301,
      },
      {
        source: "/florida/explore/tampa",
        destination: "/learn/cheapest-places-to-buy-house-in-florida",
        statusCode: 301,
      },
      {
        source: "/florida/home-loan/va-loan/mortgage-loans-top-facts",
        destination: "/home-loan",
        statusCode: 301,
      },
      {
        source: "/hometown-heroes-eligibility-check",
        destination: "/check-hometown-heroes-eligibility",
        statusCode: 301,
      },
      {
        source: "/real-estate/schedule-a-free-call",
        destination: "/eligibility/schedule-a-free-call",
        statusCode: 301,
      },
      {
        source: "/microsite/100-percent-fha-zero-down-program-eligibility",
        destination: "/check-fha-loan-eligibility",
        statusCode: 301,
      },
      {
        source: "/microsite/hometown-heroes-refinance-eligibility",
        destination: "/check-hometown-heroes-eligibility",
        statusCode: 301,
      },
      // 2026-09-18: short URL for print/QR use on the physical APPROVED book
      // (Phil's moat-list item #4 — "track the book traffic"). UTM tags let
      // the existing GA4 + GHL attribution pipeline (src/lib/tracking.ts)
      // carry "arrived via the physical book" all the way through to a lead
      // form submission with no other code changes needed.
      {
        source: "/approved",
        destination:
          "/books/approved-mortgage-playbook?utm_source=book&utm_medium=qr&utm_campaign=approved",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/mortgage-rates",
        headers: mortgageRatesCacheHeaders,
      },
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
