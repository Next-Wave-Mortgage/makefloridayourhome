import * as React from "react";
import { PageHero } from "makefloridayourhome";

const DollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const PercentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const WithFeatures = () => (
  <PageHero
    title={
      <>
        <span className="text-brand-green">Hometown Heroes</span> Program — Up
        to $35,000 in DPA
      </>
    }
    subtitle={
      <p>
        Florida&apos;s largest down payment assistance program rewards the
        workers who serve our communities.{" "}
        <strong className="text-dark-green">
          Teachers, nurses, first responders, and other eligible frontline
          workers
        </strong>{" "}
        can receive up to $35,000 toward their first home.
      </p>
    }
    features={[
      {
        icon: <DollarIcon />,
        text: "5% of your loan amount — minimum $10,000, up to $35,000",
      },
      {
        icon: <PercentIcon />,
        text: "0% interest second mortgage — no monthly payments",
      },
      {
        icon: <HomeIcon />,
        text: "Works with FHA, VA, USDA, and conventional loans",
      },
      {
        icon: <ClockIcon />,
        text: "Funds reserved first come, first served each cycle",
      },
    ]}
    image="/images/heroes/florida-hometown-heroes-hero.webp"
    imageAlt="Florida professional holding house keys in front of a new home"
    ctaHref="/check-hometown-heroes-eligibility"
    ctaText="Check Your Hometown Heroes Eligibility"
  />
);

export const Minimal = () => (
  <PageHero
    title={
      <>
        <span className="text-brand-green">FHA Loans</span> in Florida Made
        Simple
      </>
    }
    subtitle={
      <p>
        Buy your Florida home with as little as 3.5% down and flexible credit
        requirements. See what you qualify for in minutes.
      </p>
    }
    image="/images/heroes/florida-fha-loan-hero.webp"
    imageAlt="Young couple standing in front of their new Florida home"
    ctaHref="/home-purchase-eligibility"
    ctaText="Check Your Home Purchase Eligibility"
  />
);
