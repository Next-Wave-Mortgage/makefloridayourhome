import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Programs } from "@/components/sections/Programs";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { ExpertGuides } from "@/components/sections/ExpertGuides";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { DPAMapPromo } from "@/components/sections/DPAMapPromo";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Florida First-Time Homebuyer Programs & Grants (2026)",
  description:
    "See every Florida first-time homebuyer program you qualify for — Hometown Heroes, FHA, VA, USDA, down payment assistance up to $35,000+. No credit pull. Free. 2 minutes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Florida First-Time Homebuyer Programs & Grants (2026)",
    description:
      "See every Florida first-time homebuyer program you qualify for — Hometown Heroes, FHA, VA, USDA, down payment assistance up to $35,000+.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Make Florida Your Home — Florida First-Time Homebuyer Programs & Grants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Florida First-Time Homebuyer Programs & Grants (2026)",
    description:
      "See every Florida first-time homebuyer program you qualify for — Hometown Heroes, FHA, VA, USDA, down payment assistance up to $35,000+.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  name: siteConfig.company,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.webp`,
  image: `${siteConfig.url}/opengraph-image`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2430 E Commercial BLVD #3",
    addressLocality: "Fort Lauderdale",
    addressRegion: "FL",
    postalCode: "33308",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.1884,
    longitude: -80.1101,
  },
  areaServed: {
    "@type": "State",
    name: "Florida",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [siteConfig.links.bbb],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "NMLS",
    recognizedBy: {
      "@type": "Organization",
      name: "Nationwide Multistate Licensing System",
    },
    identifier: siteConfig.contact.nmls,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {
    "@type": "MortgageBroker",
    name: siteConfig.company,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/learn?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum credit score to qualify for Florida down payment assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Florida down payment assistance programs require a minimum credit score of 640. However, some FHA-based programs accept scores as low as 580. Your credit score also affects your interest rate and the amount of assistance you can receive. We can help you find programs that match your current score.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get pre-approved for a Florida homebuyer program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-approval typically takes 1–3 business days once you submit your documents. The full process from application to closing usually takes 30–45 days. Programs like Hometown Heroes and Florida Housing may add a few extra days for layered approvals, but our team keeps things moving so there are no unnecessary delays.",
      },
    },
    {
      "@type": "Question",
      name: "How much down payment assistance can first-time homebuyers get in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida buyers can receive anywhere from $10,000 to over $100,000 in combined assistance depending on the programs they qualify for. Florida Housing offers up to $10,000 in down payment and closing cost help. Hometown Heroes provides up to $35,000. Many counties offer additional SHIP funds on top of state programs — and yes, these can often be stacked.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Florida Hometown Heroes Program and who qualifies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hometown Heroes is Florida's largest down payment assistance program, offering up to $35,000 as a 0% interest, deferred second mortgage. It's available to full-time W-2 employees in over 50 eligible professions — including teachers, nurses, law enforcement, firefighters, and childcare workers. You must be a first-time buyer, meet income limits, and use a Florida Housing first mortgage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have to be a first-time homebuyer to qualify for Florida DPA programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. While many programs target first-time buyers, Florida defines \"first-time\" as anyone who hasn't owned a home in the past 3 years. Some programs — like certain county SHIP funds and VA-backed options — don't require first-time status at all. We'll help you identify every program you're eligible for, regardless of your homeownership history.",
      },
    },
  ],
};

const siteNavSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "First-Time Homebuyer Programs",
      url: `${siteConfig.url}/first-time-home-buyer`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Down Payment Assistance",
      url: `${siteConfig.url}/down-payment-assistance`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Hometown Heroes Program",
      url: `${siteConfig.url}/hometown-heroes`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "FHA Loans in Florida",
      url: `${siteConfig.url}/home-loan/fha-loan`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Home Loan Options",
      url: `${siteConfig.url}/home-loan`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Expert Guides & Articles",
      url: `${siteConfig.url}/learn`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "Mortgage Calculators",
      url: `${siteConfig.url}/calculators`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 8,
      name: "About Us",
      url: `${siteConfig.url}/about-us`,
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  name: siteConfig.company,
  url: siteConfig.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "239",
    reviewCount: "239",
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <Script
        id="sitenav-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavSchema),
        }}
      />
      <Hero />
      <Testimonials />
      <DPAMapPromo />
      <Programs />
      <WhyTrust />
      <ExpertGuides />
      <WhatWeDo />
      <FAQ />
      <FinalCTA />
    </>
  );
}
