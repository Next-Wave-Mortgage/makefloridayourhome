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
      // 2026-09-09: /book (single-title landing page) became the /books library.
      // The Make Florida Your Home page now lives at its own permanent URL.
      // statusCode 301 (not permanent:true, which emits a 308) per Phil's
      // requirement that the migration read as a classic HTTP 301.
      {
        source: "/book",
        destination: "/books/make-florida-your-home",
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
