import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

const ogImage =
  "https://www.makefloridayourhome.com/images/og/florida-va-loan.webp";

const linkClass =
  "font-semibold text-brand-green underline-offset-2 hover:underline";

export const metadata: Metadata = {
  title: "VA Loans in Florida (2026): Limits, Funding Fee & Rules",
  description:
    "Florida VA loans with $0 down and no mortgage insurance. See 2026 funding fees, loan limits, condo rules, and how disabled veterans save twice.",
  openGraph: {
    title: "VA Loans in Florida (2026): Limits, Funding Fee & Rules",
    description:
      "$0 down, no mortgage insurance, and no loan limit with full entitlement — plus the Florida property tax exemptions disabled veterans can stack on top.",
    url: "https://www.makefloridayourhome.com/home-loan/va-loan",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Veteran couple in front of their Florida home with an American flag on the porch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VA Loans in Florida (2026): Limits, Funding Fee & Rules",
    description:
      "$0 down, no mortgage insurance, and no loan limit with full entitlement — plus the Florida property tax exemptions disabled veterans can stack on top.",
    images: [ogImage],
  },
  alternates: { canonical: "/home-loan/va-loan" },
};

const config: ProductPageConfig = {
  path: "/home-loan/va-loan",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "VA Loans", path: "/home-loan/va-loan" },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida VA Home Loan",
    description:
      "VA-guaranteed mortgage financing for eligible veterans, active-duty service members, and surviving spouses buying or refinancing a primary residence in Florida.",
    loanType: "VA mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">VA Loans</span> in Florida
      </>
    ),
    subtitle: (
      <p>
        You earned the best mortgage benefit available.{" "}
        <strong className="text-dark-green">
          Buy a Florida home with $0 down and no monthly mortgage insurance
        </strong>{" "}
        — and if you have a service-connected disability, Florida&apos;s
        property tax exemptions can lower your costs even further.
      </p>
    ),
    features: [
      { icon: productIcons.dollar, text: "$0 down payment — no PMI, ever" },
      {
        icon: productIcons.check,
        text: "No loan limit with full entitlement",
      },
      {
        icon: productIcons.shield,
        text: "Funding fee waived for veterans receiving disability pay",
      },
      {
        icon: productIcons.home,
        text: "Single-family, approved condos, and 2–4 unit homes",
      },
    ],
    image: "/images/heroes/florida-va-loan-hero.webp",
    imageAlt:
      "Veteran couple standing on the front walkway of their Florida home with palm trees and an American flag",
  },
  cta: {
    href: "/check-va-loan-eligibility",
    text: "Check Your VA Loan Eligibility",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">VA Loan</span> at a Glance
        </>
      ),
      intro:
        "VA loans are made by private lenders and guaranteed by the U.S. Department of Veterans Affairs. That guarantee is why they can offer $0 down and no mortgage insurance.",
      headers: ["Feature", "VA Loan in Florida"],
      rows: [
        ["Down Payment", "$0 with full entitlement"],
        [
          "Credit Score",
          "VA sets no minimum; most lenders look for 580–620",
        ],
        ["Mortgage Insurance", "None — no monthly PMI or MIP"],
        [
          "VA Funding Fee",
          "0.5%–3.3% one-time fee, can be financed into the loan; waived for veterans receiving disability compensation",
        ],
        [
          "Loan Limit",
          "None with full entitlement. With entitlement still tied to another VA loan, the county conforming limit applies ($832,750 in most Florida counties for 2026; $990,150 in Monroe)",
        ],
        [
          "Income Review",
          "Debt-to-income (41% guideline) plus VA residual income — what's left each month after the house payment and bills",
        ],
        [
          "Property Types",
          <>
            Single-family, townhomes,{" "}
            <Link href="/home-loan/condo-loan" className={linkClass}>
              VA-approved condos
            </Link>
            , manufactured homes on land, and 2–4 unit homes you live in
          </>,
        ],
        ["Occupancy", "Primary residence only"],
        [
          "Seller Concessions",
          "Seller can pay normal closing costs plus up to 4% in concessions",
        ],
        [
          "Who's Eligible",
          "Veterans, active-duty service members, Guard and Reserve members who meet service requirements, and some surviving spouses",
        ],
      ],
      caption: "Florida VA loan features and typical requirements",
    },
    {
      type: "table",
      heading: (
        <>
          2026 VA <span className="text-brand-green">Funding Fee</span>
        </>
      ),
      intro:
        "The funding fee is a one-time charge that keeps the VA program running. It depends on your down payment and whether you've used your VA benefit before. These rates have been in effect since April 7, 2023.",
      headers: ["Loan Type", "First Use", "Subsequent Use"],
      rows: [
        ["Purchase, less than 5% down", "2.15%", "3.3%"],
        ["Purchase, 5% to under 10% down", "1.5%", "1.5%"],
        ["Purchase, 10% or more down", "1.25%", "1.25%"],
        ["Cash-out refinance", "2.15%", "3.3%"],
        ["Rate reduction refinance (IRRRL)", "0.5%", "0.5%"],
        ["Loan assumption", "0.5%", "0.5%"],
      ],
      caption:
        "VA funding fee by loan type and prior use. Source: U.S. Department of Veterans Affairs.",
    },
    {
      type: "table",
      heading: (
        <>
          How Disabled Veterans <span className="text-brand-green">Save Twice</span>{" "}
          in Florida
        </>
      ),
      intro: (
        <>
          A service-connected disability rating can waive the VA funding fee
          and unlock Florida property tax exemptions on the same home. On a
          $400,000 purchase with $0 down, a first-time VA borrower would
          normally owe an $8,600 funding fee. A veteran receiving disability
          compensation pays $0. Read the full{" "}
          <Link
            href="/learn/florida-va-disability-property-tax-exemptions"
            className={linkClass}
          >
            Florida VA disability property tax guide
          </Link>{" "}
          for application steps.
        </>
      ),
      headers: ["Benefit", "Who Qualifies", "What It Saves"],
      rows: [
        [
          "VA funding fee exemption",
          "Veterans receiving VA disability compensation, surviving spouses receiving DIC, and active-duty Purple Heart recipients",
          "The entire funding fee — 2.15% of the loan on a first-use, $0-down purchase",
        ],
        [
          "$5,000 disability exemption (s. 196.24, F.S.)",
          "Honorably discharged Florida residents with a 10%+ service-connected disability",
          "$5,000 off the assessed value; not limited to homestead property",
        ],
        [
          "Total exemption (ss. 196.081 & 196.091, F.S.)",
          "Veterans with a permanent and total service-connected disability, or who use a wheelchair due to service",
          "No property taxes on the homestead — often thousands per year",
        ],
        [
          "Combat-related discount (s. 196.082, F.S.)",
          "Veterans 65+ with a permanent, combat-related disability",
          "A homestead discount equal to the disability percentage",
        ],
        [
          "Deployment exemption (s. 196.173, F.S.)",
          "Service members deployed outside the U.S. on a designated operation",
          "Exempts the share of the year you were deployed",
        ],
      ],
      caption:
        "VA funding fee exemption and Florida property tax benefits for disabled veterans",
    },
    {
      type: "cards",
      heading: (
        <>
          Florida VA <span className="text-brand-green">Situations</span> We
          Help With
        </>
      ),
      cards: [
        {
          title: "PCS Orders to a Florida Base",
          description:
            "Buying near Eglin, MacDill, NAS Jacksonville, Mayport, Pensacola, Patrick, or Tyndall? You can often get approved with your orders before you report, and BAH counts as qualifying income.",
        },
        {
          title: "Buying a Condo",
          description:
            "The condo building must be on VA's approved list, and Florida's post-Surfside reserve rules have pushed some buildings off. Send us the building name before you make an offer.",
        },
        {
          title: "A Second VA Loan",
          description:
            "Kept your last home as a rental? You may still have remaining entitlement for a second VA loan. Your down payment depends on the county limit and how much entitlement is in use.",
        },
        {
          title: "Assuming a Seller's VA Loan",
          description:
            "VA loans are assumable, so you may be able to take over a seller's lower rate with a 0.5% funding fee. You'll need to qualify and cover the seller's equity.",
        },
        {
          title: "House Hacking a 2–4 Unit",
          description:
            "Live in one unit and rent the others. Rental income from the other units can help you qualify, and you still get $0 down.",
        },
        {
          title: "After Bankruptcy or Foreclosure",
          description:
            "VA is often more forgiving than other loans: about two years after a Chapter 7 discharge, and sometimes during a Chapter 13 plan with trustee approval.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          What&apos;s <span className="text-brand-green">Different</span> in
          Florida
        </>
      ),
      intro:
        "The VA rules are national, but Florida homes come with a few extra checks that affect your approval and your monthly payment.",
      headers: ["Florida Factor", "What It Means for You"],
      rows: [
        [
          "Homeowners & flood insurance",
          "Florida premiums are high, and flood insurance is required in FEMA flood zones. Both count in your payment, so they affect your debt-to-income and residual income.",
        ],
        [
          "Termite inspection",
          "VA generally requires a wood-destroying insect (termite) inspection in Florida. In many cases the seller can pay for it.",
        ],
        [
          "VA appraisal",
          "A VA appraiser checks the home's value and minimum property requirements, such as a sound roof and working systems. Older roofs can be a sticking point in Florida.",
        ],
        [
          "Condo approvals",
          <>
            New structural inspection and reserve laws have changed which
            buildings qualify. See our{" "}
            <Link href="/home-loan/condo-loan" className={linkClass}>
              Florida condo financing guide
            </Link>{" "}
            before you shop.
          </>,
        ],
        [
          "Hometown Heroes",
          <>
            Veterans and active-duty members can qualify for{" "}
            <Link href="/hometown-heroes" className={linkClass}>
              Florida Hometown Heroes
            </Link>{" "}
            without being first-time buyers. It can help with closing costs
            when funding is available.
          </>,
        ],
        [
          "Homestead exemption",
          "File for Florida's homestead exemption after you move in. It's separate from, and can stack with, the disabled veteran exemptions above.",
        ],
      ],
      caption: "Florida-specific considerations for VA homebuyers",
    },
    {
      type: "promo",
      heading: (
        <>
          Have a VA <span className="text-green-tint">Disability Rating</span>?
        </>
      ),
      body: "Florida offers some of the strongest property tax exemptions for disabled veterans in the country — up to a total exemption on your homestead. See what you qualify for and how to apply.",
      href: "/learn/florida-va-disability-property-tax-exemptions",
      linkText: "Read the VA Disability Tax Guide",
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get a <span className="text-brand-green">VA Loan</span> in
          Florida
        </>
      ),
      howTo: {
        name: "How to Get a VA Loan in Florida",
        description:
          "Step-by-step guide to buying a Florida home with a VA-guaranteed mortgage.",
      },
      steps: [
        {
          title: "Get Your Certificate of Eligibility",
          description:
            "Your COE shows the lender your VA entitlement. We can usually pull it for you in minutes with your permission.",
        },
        {
          title: "Get Pre-Approved",
          description:
            "We review your income, credit, and residual income, including BAH and disability pay, and confirm whether your funding fee is waived.",
        },
        {
          title: "Find Your Home & Order the VA Appraisal",
          description:
            "Once your offer is accepted, a VA appraiser confirms value and property condition. Condos need to be in a VA-approved building.",
        },
        {
          title: "Close & Claim Your Exemptions",
          description:
            "Close with $0 down, move in, then file for Florida's homestead and any disabled veteran exemptions with your county property appraiser.",
        },
      ],
    },
    {
      type: "guides",
      heading: (
        <>
          Related <span className="text-brand-green">Guides</span>
        </>
      ),
      articles: [
        {
          category: "Veteran Benefits",
          title: "Florida VA Disability Property Tax Exemptions",
          description:
            "Exemption amounts by disability rating and how to apply with your county.",
          href: "/learn/florida-va-disability-property-tax-exemptions",
          image: "/images/learn/florida-va-disability-property-tax-exemptions-2026.webp",
          readTime: "Guide",
        },
        {
          category: "Florida Programs",
          title: "Florida Hometown Heroes Program",
          description:
            "Down payment and closing cost help that veterans can use without being first-time buyers.",
          href: "/hometown-heroes",
          image: "/images/heroes/florida-hometown-heroes-hero.webp",
          readTime: "Program guide",
        },
        {
          category: "Loan Limits",
          title: "Florida Conforming Loan Limits by County (2026)",
          description:
            "The limits that apply when part of your VA entitlement is still in use.",
          href: "/learn/florida-conforming-loan-limits-by-county",
          image: "/images/learn/florida-conforming-loan-limits-by-county-2026.webp",
          readTime: "County table",
        },
        {
          category: "Assistance",
          title: "Florida Housing Grants for Disabled Homebuyers",
          description:
            "Grants and programs that can pair with a VA loan for veterans with disabilities.",
          href: "/learn/florida-housing-grants-for-disabled",
          image: "/images/learn/florida-housing-grants-for-disabled-2026.webp",
          readTime: "Guide",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is there a VA loan limit in Florida?",
      answer:
        "Not if you have full entitlement. Since 2020, veterans with full entitlement can borrow with $0 down at any price their income supports. If part of your entitlement is tied to another VA loan, the county conforming limit is used to figure your down payment: $832,750 in most Florida counties for 2026 and $990,150 in Monroe County.",
    },
    {
      question: "Who doesn't have to pay the VA funding fee?",
      answer:
        "You're exempt if you receive VA compensation for a service-connected disability, are eligible for that compensation but receive retirement or active-duty pay instead, are a surviving spouse receiving Dependency and Indemnity Compensation, have a proposed or memorandum disability rating before closing, or are an active-duty service member with a Purple Heart.",
    },
    {
      question: "Can I use a VA loan to buy a condo in Florida?",
      answer:
        "Yes, if the condo building is on VA's approved list. Florida's newer condo safety and reserve laws have caused some buildings to lose approval or face special assessments, so check the building before you make an offer.",
    },
    {
      question: "Can I combine a VA loan with Florida Hometown Heroes?",
      answer:
        "Often, yes. Veterans and active-duty service members can use Hometown Heroes without being first-time homebuyers, and the assistance can help cover closing costs. Income limits apply, and funding is released in rounds, so availability changes during the year.",
    },
    {
      question: "Can I buy a home in Florida before my PCS move?",
      answer:
        "Usually, yes. With PCS orders in hand, lenders can typically count your new duty station pay and BAH. VA expects you to move in within a reasonable time after closing, generally about 60 days. A spouse can often satisfy occupancy if you're deployed.",
    },
    {
      question: "Can someone assume my VA loan when I sell?",
      answer:
        "Yes. VA loans are assumable with lender approval, and buyers don't have to be veterans. If the buyer isn't a veteran who substitutes their own entitlement, your entitlement stays tied to that loan until it's paid off, which can affect your next VA purchase.",
    },
  ],
  closing: {
    heading: "Put Your VA Benefit to Work in Florida",
    subtitle:
      "Check your eligibility in a few minutes, and we'll confirm your entitlement, your funding fee, and what you can afford, with no obligation.",
  },
};

export default function VaLoanPage() {
  return <ProductPage config={config} />;
}
