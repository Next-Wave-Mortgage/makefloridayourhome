/** Single source of truth for site-wide configuration. */
export const siteConfig = {
  name: "Make Florida Your Home",
  company: "Next Wave Mortgage, LLC",
  description:
    "Florida mortgage experts helping you find the right home loan. Purchase, refinance, and specialty programs.",
  url: "https://www.makefloridayourhome.com",
  ogImage: "/og-default.png",
  links: {
    facebook: "",
    instagram: "",
    bbb: "https://www.bbb.org/us/fl/fort-lauderdale/profile/mortgage-lenders/next-wave-mortgage-llc-0633-92035313/",
    nmlsConsumerAccess: "http://www.nmlsconsumeraccess.org",
  },
  contact: {
    phone: "617-529-9317",
    email: "hello@makefloridayourhome.com",
    address: "2430 E Commercial BLVD #3, Fort Lauderdale, FL 33308",
    nmls: "2536820",
  },
} as const;
