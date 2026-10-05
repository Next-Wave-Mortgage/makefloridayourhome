import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

const ogImage =
  "https://www.makefloridayourhome.com/images/og/florida-reverse-mortgage.webp";

const linkClass =
  "font-semibold text-brand-green underline-offset-2 hover:underline";

export const metadata: Metadata = {
  title: "Reverse Mortgages in Florida (2026): HECM, Purchase & Jumbo",
  description:
    "Florida reverse mortgages for homeowners 62+. See the 2026 HECM limit of $1,249,125, HECM for Purchase, jumbo reverse loans, condo rules, and costs.",
  openGraph: {
    title: "Reverse Mortgages in Florida (2026): HECM, Purchase & Jumbo",
    description:
      "Turn Florida home equity into tax-free cash with no monthly mortgage payment — or buy your next Florida home with a reverse mortgage.",
    url: "https://www.makefloridayourhome.com/home-loan/reverse-mortgage",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Retired couple enjoying coffee on the screened lanai of their Florida home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Mortgages in Florida (2026): HECM, Purchase & Jumbo",
    description:
      "Turn Florida home equity into tax-free cash with no monthly mortgage payment — or buy your next Florida home with a reverse mortgage.",
    images: [ogImage],
  },
  alternates: { canonical: "/home-loan/reverse-mortgage" },
};

const config: ProductPageConfig = {
  path: "/home-loan/reverse-mortgage",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "Reverse Mortgages", path: "/home-loan/reverse-mortgage" },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida Reverse Mortgage (HECM)",
    description:
      "FHA-insured Home Equity Conversion Mortgages and proprietary jumbo reverse mortgages for Florida homeowners age 62 and older, including HECM for Purchase.",
    loanType: "Reverse mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">Reverse Mortgages</span> in Florida
      </>
    ),
    subtitle: (
      <p>
        If you&apos;re 62 or older, your Florida home can work for you.{" "}
        <strong className="text-dark-green">
          Turn your equity into tax-free cash with no monthly mortgage payment
        </strong>{" "}
        — or use a reverse mortgage to buy your next home in Florida, keeping
        more of your savings in the bank.
      </p>
    ),
    features: [
      {
        icon: productIcons.dollar,
        text: "No monthly mortgage payment required",
      },
      {
        icon: productIcons.home,
        text: "You keep the title and stay in your home",
      },
      {
        icon: productIcons.check,
        text: "Buy a new Florida home with HECM for Purchase",
      },
      {
        icon: productIcons.shield,
        text: "FHA-insured: you never owe more than the home is worth",
      },
    ],
    image: "/images/heroes/florida-reverse-mortgage-hero.webp",
    imageAlt:
      "Retired couple smiling over morning coffee on the screened pool lanai of their Florida home",
  },
  cta: {
    href: "/check-reverse-mortgage-eligibility",
    text: "Check Your Reverse Mortgage Options",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">Reverse Mortgage</span> at a Glance
        </>
      ),
      intro:
        "Most reverse mortgages are Home Equity Conversion Mortgages (HECMs), insured by the FHA. Instead of you paying the lender each month, the lender pays you, and the loan is repaid when you sell, move out, or pass away.",
      headers: ["Feature", "HECM Reverse Mortgage"],
      rows: [
        ["Minimum Age", "62 (youngest borrower on the loan)"],
        [
          "Home",
          "Your primary residence — you need to live there most of the year",
        ],
        [
          "Equity",
          "Substantial equity; any existing mortgage is paid off from the proceeds",
        ],
        ["Monthly Mortgage Payment", "None required — you can pay voluntarily"],
        [
          "2026 Lending Limit",
          "$1,249,125 maximum home value used in the calculation (HECM, nationwide)",
        ],
        [
          "How You Get Paid",
          "Line of credit, monthly payments, lump sum (fixed rate), or a mix",
        ],
        [
          "Your Obligations",
          "Pay property taxes, homeowners insurance, and any HOA dues, and keep the home in good repair",
        ],
        [
          "Counseling",
          "A session with a HUD-approved counselor is required before you apply",
        ],
        [
          "Property Types",
          <>
            Single-family, 2–4 units you live in,{" "}
            <Link href="/home-loan/condo-loan" className={linkClass}>
              FHA-approved condos
            </Link>
            , and qualifying manufactured homes
          </>,
        ],
      ],
      caption: "Florida reverse mortgage (HECM) features and requirements",
    },
    {
      type: "table",
      heading: (
        <>
          Three <span className="text-brand-green">Ways</span> to Use a Reverse
          Mortgage
        </>
      ),
      intro:
        "Florida homeowners use reverse mortgages in three main ways. The right one depends on your home's value and whether you're staying or moving.",
      headers: ["Option", "Best For", "How It Works"],
      rows: [
        [
          "HECM (traditional)",
          "Staying in your current home",
          "Pays off any existing mortgage, then gives you a line of credit, monthly payments, or a lump sum. An unused line of credit grows over time.",
        ],
        [
          "HECM for Purchase",
          "Moving to Florida or downsizing",
          "Buy a new primary residence with one down payment and no monthly mortgage payment afterward. The rest of your savings stays invested.",
        ],
        [
          "Jumbo (proprietary) reverse",
          "Homes worth more than the HECM limit",
          "Private programs that can lend on higher-value homes, and some accept condos that aren't FHA-approved. Terms vary by lender.",
        ],
      ],
      caption: "Traditional HECM, HECM for Purchase, and jumbo reverse mortgages compared",
    },
    {
      type: "cards",
      heading: (
        <>
          Florida <span className="text-brand-green">Situations</span> We Help
          With
        </>
      ),
      cards: [
        {
          title: "Retiring to Florida",
          description:
            "Selling up north? HECM for Purchase lets you buy your Florida home with roughly 45%–65% down, depending on your age, and no mortgage payment afterward.",
        },
        {
          title: "Downsizing to a Villa or Condo",
          description:
            "Move to a smaller home or a 55+ community and keep more cash from your sale. Condos need to be FHA-approved for a HECM, or financed with a jumbo reverse program.",
        },
        {
          title: "Paying Off Your Current Mortgage",
          description:
            "A reverse mortgage can retire your existing mortgage so you no longer have a monthly payment, freeing up your Social Security and retirement income.",
        },
        {
          title: "Higher-Value Coastal Homes",
          description:
            "Homes in Naples, Palm Beach, Sarasota, or the Keys often exceed the HECM limit. Jumbo reverse mortgages can unlock more of that equity.",
        },
        {
          title: "A Younger Spouse",
          description:
            "If your spouse is under 62, they can often be listed as an eligible non-borrowing spouse, which lets them stay in the home if you pass away first.",
        },
        {
          title: "A Standby Line of Credit",
          description:
            "Open a HECM line of credit early and leave it untouched. The available amount grows over time and can cover hurricane repairs, healthcare, or market downturns.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          What It <span className="text-brand-green">Costs</span>
        </>
      ),
      intro: (
        <>
          Most reverse mortgage costs are paid from the loan itself, not out of
          pocket. See our full{" "}
          <Link
            href="/learn/reverse-mortgage-closing-costs-florida"
            className={linkClass}
          >
            Florida reverse mortgage closing costs guide
          </Link>{" "}
          for a detailed breakdown.
        </>
      ),
      headers: ["Cost", "HECM Amount"],
      rows: [
        [
          "Upfront mortgage insurance (MIP)",
          "2% of the home's value, up to the $1,249,125 limit",
        ],
        ["Annual mortgage insurance", "0.5% of the loan balance per year"],
        [
          "Origination fee",
          "Greater of $2,500 or 2% of the first $200,000 plus 1% above that, capped at $6,000",
        ],
        ["HUD counseling", "Typically $125–$200, often the only out-of-pocket cost"],
        [
          "Third-party costs",
          "Appraisal, title insurance, recording, and Florida taxes, similar to other mortgages",
        ],
      ],
      caption: "Typical HECM reverse mortgage costs",
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
        "Florida's retirees, weather, and condo laws make a few reverse mortgage details especially important here.",
      headers: ["Florida Factor", "What It Means for You"],
      rows: [
        [
          "Homestead exemption stays",
          <>
            You still own your home, so you keep your homestead exemption and
            any{" "}
            <Link
              href="/learn/florida-property-tax-exemptions-for-seniors"
              className={linkClass}
            >
              senior property tax exemptions
            </Link>
            .
          </>,
        ],
        [
          "Insurance is your responsibility",
          "Keeping homeowners, wind, and (in flood zones) flood insurance in force is a loan requirement. Rising Florida premiums are part of the lender's financial review, and a set-aside can be built in to cover them.",
        ],
        [
          "Snowbirds",
          "The home must be your primary residence. If you split the year between states, Florida needs to be where you live most of the year.",
        ],
        [
          "Condo safety laws",
          <>
            Post-Surfside inspections and reserve rules have changed which
            buildings are FHA-approved, and special assessments count as
            property charges. Check your building early, and see our{" "}
            <Link href="/home-loan/condo-loan" className={linkClass}>
              Florida condo financing guide
            </Link>
            .
          </>,
        ],
        [
          "Hurricane repairs",
          "You're responsible for keeping the home in good repair. A HECM line of credit can be a ready source of funds after a storm.",
        ],
      ],
      caption: "Florida-specific considerations for reverse mortgage borrowers",
    },
    {
      type: "promo",
      heading: (
        <>
          Thinking About <span className="text-green-tint">Your Heirs</span>?
        </>
      ),
      body: "Heirs are never personally responsible for more than the home is worth, and they can keep the home by paying off the loan or 95% of its appraised value, whichever is less. Our free book explains how to use a reverse mortgage to protect family wealth.",
      href: "/books/reverse-mortgage-inheritance-strategy",
      linkText: "Get The Reverse Mortgage Inheritance Strategy",
    },
    {
      type: "steps",
      heading: (
        <>
          How to Get a <span className="text-brand-green">Reverse Mortgage</span>{" "}
          in Florida
        </>
      ),
      howTo: {
        name: "How to Get a Reverse Mortgage in Florida",
        description:
          "Step-by-step guide to getting a HECM or jumbo reverse mortgage on a Florida home.",
      },
      steps: [
        {
          title: "Talk Through Your Goals",
          description:
            "Staying, moving, or buying? We'll estimate what you could receive and compare HECM, HECM for Purchase, and jumbo options.",
        },
        {
          title: "Complete HUD Counseling",
          description:
            "Meet with an independent, HUD-approved counselor by phone or in person. It's required, and it helps you and your family make an informed decision.",
        },
        {
          title: "Apply & Get an Appraisal",
          description:
            "We review your income, credit, and property charges, and an FHA appraiser confirms your home's value and condition.",
        },
        {
          title: "Close & Choose Your Payout",
          description:
            "Sign your documents, then take your funds as a line of credit, monthly payments, a lump sum, or a combination.",
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
          category: "Costs",
          title: "Reverse Mortgage Closing Costs in Florida",
          description:
            "Every fee explained, and which ones are paid from the loan.",
          href: "/learn/reverse-mortgage-closing-costs-florida",
          image: "/images/learn/reverse-mortgage-closing-costs-florida-2026.webp",
          readTime: "Guide",
        },
        {
          category: "Free Book",
          title: "The Reverse Mortgage Inheritance Strategy",
          description:
            "How a reverse mortgage can protect the home and the family wealth.",
          href: "/books/reverse-mortgage-inheritance-strategy",
          image: "/images/book/reverse-mortgage-inheritance-strategy-cover.webp",
          readTime: "Free book",
        },
        {
          category: "Senior Savings",
          title: "Florida Property Tax Exemptions for Seniors",
          description:
            "Homestead and senior exemptions you keep with a reverse mortgage.",
          href: "/learn/florida-property-tax-exemptions-for-seniors",
          image: "/images/learn/florida-property-tax-exemptions-for-seniors-2026.webp",
          readTime: "Guide",
        },
        {
          category: "Senior Programs",
          title: "Florida Senior Homebuyer Grants & Programs",
          description:
            "Assistance programs for older Florida buyers and homeowners.",
          href: "/learn/florida-senior-homebuyer-grants-programs",
          image: "/images/learn/florida-senior-homebuyer-grants-programs-2026.webp",
          readTime: "Guide",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What are the requirements for a reverse mortgage in Florida?",
      answer:
        "For a HECM, the youngest borrower must be at least 62, the home must be your primary residence, and you need substantial equity. You'll complete HUD-approved counseling, and the lender reviews your income and credit to confirm you can keep up with property taxes, insurance, and HOA dues.",
    },
    {
      question: "What is the 2026 reverse mortgage limit?",
      answer:
        "The HECM maximum claim amount for 2026 is $1,249,125 nationwide. Your home can be worth more, but the HECM calculation stops at that value. For higher-value homes, a jumbo (proprietary) reverse mortgage may provide more money.",
    },
    {
      question: "Can I buy a home in Florida with a reverse mortgage?",
      answer:
        "Yes. HECM for Purchase lets you buy a new primary residence with a single down payment, commonly about 45% to 65% of the price depending on your age and rates, and no monthly mortgage payment afterward. It's popular with retirees relocating to Florida or downsizing.",
    },
    {
      question: "Can I get a reverse mortgage on a Florida condo?",
      answer:
        "Yes, if the building is FHA-approved, or if the unit qualifies for FHA single-unit approval. Some jumbo reverse mortgage programs also lend on condos without FHA approval. Florida's newer condo safety laws have changed some buildings' status, so check yours early.",
    },
    {
      question: "What happens to my home when I pass away?",
      answer:
        "The loan becomes due. Your heirs can sell the home and keep any remaining equity, or keep the home by paying off the loan. A HECM is non-recourse, so heirs never owe more than the home is worth. They can satisfy the loan for the lesser of the balance or 95% of the appraised value.",
    },
    {
      question: "Can I lose my home with a reverse mortgage?",
      answer:
        "You keep the title, and there's no monthly mortgage payment. But the loan can become due if you stop living in the home as your primary residence, don't pay property taxes or insurance, or let the home fall into disrepair. A lender can build in a set-aside for taxes and insurance to help prevent that.",
    },
  ],
  closing: {
    heading: "See What Your Florida Home Could Do for You",
    subtitle:
      "Get a no-obligation estimate of your reverse mortgage options, whether you're staying put or buying your next home.",
  },
};

export default function ReverseMortgagePage() {
  return <ProductPage config={config} />;
}
