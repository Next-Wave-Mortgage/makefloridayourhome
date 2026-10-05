import { siteConfig } from "@/lib/site";

/**
 * Structured-data entities for Next Wave Mortgage and Phil Ganz.
 *
 * Every page that describes the business or Phil should reference these
 * @ids so Google and AI search see one consistent entity graph:
 * Phil Ganz → Next Wave Mortgage → Fort Lauderdale → mortgage broker.
 *
 * NAP and rating must match the Google Business Profile exactly
 * (verified September 28, 2026).
 */

export const organizationId = `${siteConfig.url}/#organization`;
export const philPersonId = `${siteConfig.url}/team/phil-ganz#person`;

/** Reviewer byline for product pages (see ProductPage `review`). */
export const philReviewer = {
  name: "Phil Ganz",
  role: "President, Next Wave Mortgage",
  nmls: "37833",
  href: "/team/phil-ganz",
  photo: "/images/team/phil-ganz.webp",
  personId: philPersonId,
};

export const googleBusinessProfile = {
  url: "https://www.google.com/maps?cid=9639328104066597809",
  rating: "4.9",
  reviewCount: "119",
  asOf: "September 2026",
};

export const officeAddress = {
  "@type": "PostalAddress",
  streetAddress: "2430 E Commercial Blvd #3",
  addressLocality: "Fort Lauderdale",
  addressRegion: "FL",
  postalCode: "33308",
  addressCountry: "US",
} as const;

const areaServed = [
  { "@type": "City", name: "Fort Lauderdale", sameAs: "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida" },
  { "@type": "AdministrativeArea", name: "Broward County", sameAs: "https://en.wikipedia.org/wiki/Broward_County,_Florida" },
  { "@type": "AdministrativeArea", name: "Miami-Dade County" },
  { "@type": "AdministrativeArea", name: "Palm Beach County" },
  { "@type": "State", name: "Florida" },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  "@id": organizationId,
  name: siteConfig.company,
  alternateName: ["Next Wave Mortgage", siteConfig.name],
  description:
    "Fort Lauderdale mortgage broker led by Phil Ganz (NMLS #37833), helping Florida buyers and homeowners compare loan options from multiple lenders.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.webp`,
  image: `${siteConfig.url}/opengraph-image`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: officeAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.1892806,
    longitude: -80.1125658,
  },
  hasMap: googleBusinessProfile.url,
  areaServed,
  founder: { "@id": philPersonId },
  employee: { "@id": philPersonId },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    googleBusinessProfile.url,
    "https://www.nextwavemortgage.com",
    siteConfig.links.bbb,
    "https://www.zillow.com/lender-profile/makefloridayourhome/",
    "https://www.yelp.com/biz/phil-ganz-next-wave-mortgage-fort-lauderdale-2",
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2536820",
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "NMLS",
    value: siteConfig.contact.nmls,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "NMLS",
    recognizedBy: {
      "@type": "Organization",
      name: "Nationwide Multistate Licensing System",
    },
    identifier: siteConfig.contact.nmls,
  },
  knowsAbout: [
    "Mortgage brokerage",
    "FHA loans",
    "VA loans",
    "Conventional loans",
    "Jumbo loans",
    "DSCR loans",
    "Bank statement loans",
    "Florida down payment assistance",
    "Reverse mortgages",
  ],
};
