import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

const ogImage =
  "https://www.makefloridayourhome.com/images/og/florida-condo-loan.webp";

const linkClass =
  "font-semibold text-brand-green underline-offset-2 hover:underline";

export const metadata: Metadata = {
  title: "Florida Condo Loans — Non-Warrantable & FHA Condo Financing",
  description:
    "Florida condo won't qualify for a conventional loan? Learn why buildings become non-warrantable, how to check FHA approval, and your loan options.",
  openGraph: {
    title: "Florida Condo Loans — Non-Warrantable & FHA Condo Financing",
    description:
      "How to finance a Florida condo — including non-warrantable buildings and units that need FHA approval.",
    url: "https://www.makefloridayourhome.com/home-loan/condo-loan",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Oceanfront condominium building in Fort Lauderdale with royal palms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Condo Loans — Non-Warrantable & FHA Condo Financing",
    description:
      "How to finance a Florida condo — including non-warrantable buildings and units that need FHA approval.",
    images: [ogImage],
  },
  alternates: { canonical: "/home-loan/condo-loan" },
};

const config: ProductPageConfig = {
  path: "/home-loan/condo-loan",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "Condo Loans", path: "/home-loan/condo-loan" },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida Condo Loan",
    description:
      "Mortgage financing for Florida condominiums, including non-warrantable condo loans and FHA, VA, and conventional condo financing.",
    loanType: "Condominium mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">Florida Condo Loans</span>, Including
        Non-Warrantable Condos
      </>
    ),
    subtitle: (
      <p>
        Found the right condo, then heard the building &quot;doesn&apos;t
        qualify&quot;? Since Florida&apos;s post-Surfside condo laws, it happens
        constantly.{" "}
        <strong className="text-dark-green">
          A non-warrantable condo loan can still get you to closing.
        </strong>{" "}
        We check the building first, then match you with the loan that fits.
      </p>
    ),
    features: [
      {
        icon: productIcons.home,
        text: "Financing for buildings conventional lenders turn down",
      },
      {
        icon: productIcons.check,
        text: "We check FHA, VA, and conventional eligibility for your building",
      },
      {
        icon: productIcons.dollar,
        text: "Primary homes, second homes, and investment condos",
      },
      {
        icon: productIcons.shield,
        text: "Refinance into a conventional loan later if the building qualifies",
      },
    ],
    image: "/images/heroes/florida-condo-loan-hero.webp",
    imageAlt:
      "Mid-rise oceanfront condominium building in Fort Lauderdale with glass balconies and royal palms",
  },
  cta: {
    href: "/check-non-qm-loan-eligibility",
    text: "Check Your Condo Loan Options",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          <span className="text-brand-green">Condo Loan</span> Options in
          Florida
        </>
      ),
      intro:
        "With a condo, the lender reviews the building as well as you. Which loan you can use depends on whether the building meets each program's standards.",
      headers: ["Loan Type", "Building Must Be…", "Typical Down Payment"],
      rows: [
        [
          "Conventional",
          "Warrantable — meets Fannie Mae or Freddie Mac project standards",
          "3%–5% for a primary home; more for second homes and rentals",
        ],
        [
          <Link key="fha" href="/home-loan/fha-loan" className={linkClass}>
            FHA
          </Link>,
          "FHA-approved, or the unit qualifies through Single-Unit Approval",
          "3.5% with a 580+ credit score",
        ],
        [
          "VA",
          "VA-approved (eligible veterans and service members)",
          "0% for eligible borrowers",
        ],
        [
          "Non-warrantable condo loan",
          "Any building a portfolio or non-QM lender will accept",
          "Often 15%–25%",
        ],
        [
          <Link key="dscr" href="/home-loan/dscr-loan" className={linkClass}>
            DSCR (investors)
          </Link>,
          "Rentable under the association's rules; some programs allow non-warrantable",
          "Usually 20%–25%",
        ],
        [
          <Link
            key="condotel"
            href="/home-loan/condotel-loan"
            className={linkClass}
          >
            Condotel loan
          </Link>,
          "A condo-hotel with a front desk or rental program",
          "Usually 25%–40%",
        ],
      ],
      caption: "Florida condo loan options by building eligibility",
    },
    {
      type: "table",
      heading: (
        <>
          What Makes a Condo{" "}
          <span className="text-brand-green">Non-Warrantable?</span>
        </>
      ),
      intro:
        "A condo is \"warrantable\" when the building meets Fannie Mae and Freddie Mac standards, so conventional lenders can sell the loan. When it doesn't, it's non-warrantable — usually for one of these reasons.",
      headers: ["Common Reason", "Why Lenders Care"],
      rows: [
        [
          "Critical repairs or safety issues",
          "Unresolved structural problems — often found during Florida's required inspections — make a building ineligible until they're fixed.",
        ],
        [
          "Underfunded reserves or large special assessments",
          "Thin reserves or big pending assessments signal financial strain on owners and the association.",
        ],
        [
          "Too many owners behind on dues",
          "High delinquency rates raise the risk that the association can't pay its bills.",
        ],
        [
          "One owner holds too many units",
          "A single investor or developer owning a large share of units concentrates risk in one owner.",
        ],
        [
          "Too much commercial space",
          "Buildings with a large share of retail or office space fall outside residential project rules.",
        ],
        [
          "Pending litigation",
          "Lawsuits involving the association — especially over construction defects or safety — can block approval.",
        ],
        [
          "Hotel-style operations",
          <>
            Front desks, rental pools, and daily rentals make a building a{" "}
            <Link href="/home-loan/condotel-loan" className={linkClass}>
              condotel
            </Link>
            , which conventional and FHA loans exclude.
          </>,
        ],
        [
          "Inadequate insurance",
          "Master policies that don't meet coverage requirements — a growing issue in Florida's insurance market — can disqualify a building.",
        ],
      ],
      caption: "Common reasons a Florida condo is non-warrantable",
    },
    {
      type: "table",
      heading: (
        <>
          Is Your Florida Condo{" "}
          <span className="text-brand-green">FHA-Approved?</span>
        </>
      ),
      intro:
        "FHA is the most common way first-time buyers finance a condo — but only if the building qualifies. Here's how to check, and what to do if it doesn't.",
      headers: ["Question", "Answer"],
      rows: [
        [
          "How do I check?",
          <>
            Search HUD&apos;s{" "}
            <a
              href="https://entp.hud.gov/idapp/html/condlook.cfm"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              FHA approved condo lookup
            </a>{" "}
            by state, county, or project name. Look for an approval status of
            &quot;Approved&quot; and check the expiration date.
          </>,
        ],
        [
          "Why do buildings lose approval?",
          "FHA requires strong owner-occupancy, limited dues delinquencies, funded reserves, and adequate insurance. Many Florida buildings fell short as inspection, reserve, and insurance costs rose — and approvals expire unless the association renews them.",
        ],
        [
          "What if it's not on the list?",
          "Ask about FHA Single-Unit Approval, which can clear one unit in an unapproved building when the project meets FHA's requirements. Only a limited number of units per building can use it.",
        ],
        [
          "What about VA and conventional?",
          <>
            VA keeps its own approved-condo list, which you can request through
            VA&apos;s{" "}
            <a
              href="https://lgy.va.gov/lgyhub/condo-report"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              condo report tool
            </a>
            . Conventional eligibility isn&apos;t public — a lender has to
            review the building.
          </>,
        ],
        [
          "Can you check it for me?",
          "Yes. Send us the building name and we'll check FHA, VA, and conventional eligibility before you make an offer — and line up a non-warrantable option if none of them work.",
        ],
      ],
      caption: "How to check whether a Florida condo is FHA-approved",
    },
    {
      type: "table",
      heading: (
        <>
          Florida&apos;s Condo Laws and{" "}
          <span className="text-brand-green">Your Loan</span>
        </>
      ),
      intro:
        "After the 2021 Surfside collapse, Florida rewrote its condo safety rules. They make buildings safer — and they're the main reason so many condos now have financing problems.",
      headers: ["What Changed", "How It Affects Buyers"],
      rows: [
        [
          "Milestone structural inspections",
          "Many condo buildings three stories or taller now need periodic structural inspections. Problems found must be repaired, and lenders may hold off until they are.",
        ],
        [
          "Structural integrity reserve studies (SIRS)",
          "Associations must study and fund reserves for key structural components and can no longer waive that funding. Dues and assessments have risen sharply in many buildings.",
        ],
        [
          "Special assessments",
          "Large assessments for repairs or reserves are common. Lenders review them, and you may need to pay or qualify with them included.",
        ],
        [
          "Insurance costs",
          "Rising master-policy premiums push up dues — and buildings with coverage gaps can lose loan eligibility.",
        ],
        [
          "Lender watch lists",
          "Fannie Mae flags buildings with unresolved safety or repair issues as unavailable for financing. Lenders check that status on every conventional condo loan.",
        ],
      ],
      caption: "How Florida's condo safety laws affect condo financing",
    },
    {
      type: "cards",
      heading: (
        <>
          Get These <span className="text-brand-green">Before</span> You Make an
          Offer
        </>
      ),
      cards: [
        {
          title: "Condo Questionnaire & Budget",
          description:
            "The association's answers about owner-occupancy, delinquencies, litigation, and commercial space — plus the current budget and reserve balance.",
        },
        {
          title: "Milestone Inspection & SIRS",
          description:
            "The latest structural inspection and reserve study show what repairs are coming and how they'll be paid for.",
        },
        {
          title: "Special Assessment History",
          description:
            "Ask about current and planned assessments, the amount per unit, and the payment schedule.",
        },
        {
          title: "Master Insurance Policy",
          description:
            "Confirm wind, flood, and liability coverage — and when the policy renews, since premiums can jump.",
        },
      ],
    },
    {
      type: "promo",
      heading: (
        <>
          Buying With <span className="text-green-tint">FHA?</span>
        </>
      ),
      body: "If your building is FHA-approved — or your unit can use Single-Unit Approval — FHA lets you buy with 3.5% down and a 580 credit score, and you can pair it with Florida down payment assistance.",
      href: "/check-fha-loan-eligibility",
      linkText: "Check Your FHA Eligibility",
    },
    {
      type: "steps",
      heading: (
        <>
          How to Finance a{" "}
          <span className="text-brand-green">Florida Condo</span>
        </>
      ),
      howTo: {
        name: "How to Finance a Condo in Florida",
        description:
          "Step-by-step guide to financing a Florida condo, including non-warrantable buildings.",
      },
      steps: [
        {
          title: "Send Us the Building",
          description:
            "Before you make an offer, tell us the building name and address. We'll check FHA, VA, and conventional eligibility and flag known issues.",
        },
        {
          title: "Request the Association Documents",
          description:
            "Get the questionnaire, budget, reserve study, milestone inspection, and insurance details. They decide which loans are available.",
        },
        {
          title: "Choose Your Loan",
          description:
            "If the building is warrantable or approved, use conventional, FHA, or VA. If not, we'll match you with a non-warrantable condo program.",
        },
        {
          title: "Appraisal, Review & Closing",
          description:
            "The appraisal and the lender's building review run together. Once both clear, you close — and you can refinance later if the building becomes warrantable.",
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
          category: "First-Time Buyers",
          title: "FHA Loans in Florida",
          description:
            "3.5% down with a 580 credit score — and how FHA condo approval works.",
          href: "/home-loan/fha-loan",
          image: "/images/heroes/florida-fha-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Resort Properties",
          title: "Condotel Loans in Florida",
          description:
            "Financing condo-hotel units with a front desk and rental program.",
          href: "/home-loan/condotel-loan",
          image: "/images/heroes/florida-condotel-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Investor Financing",
          title: "DSCR Loans in Florida",
          description:
            "Buying a condo to rent out? Qualify on the unit's rent instead of your income.",
          href: "/home-loan/dscr-loan",
          image: "/images/heroes/florida-dscr-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "International Buyers",
          title: "Foreign National Mortgages in Florida",
          description:
            "How non-residents finance Miami and Florida condos without U.S. credit.",
          href: "/home-loan/foreign-national-loan",
          image: "/images/heroes/florida-foreign-national-loan-hero.webp",
          readTime: "Loan guide",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a non-warrantable condo?",
      answer:
        "A non-warrantable condo is a unit in a building that doesn't meet Fannie Mae and Freddie Mac standards, so conventional lenders can't sell the loan. Common reasons include critical repairs, underfunded reserves, high dues delinquencies, one owner holding too many units, pending litigation, too much commercial space, or hotel-style operations. You can still finance it — just with a non-warrantable condo loan from a portfolio or non-QM lender.",
    },
    {
      question: "Can you get a mortgage on a non-warrantable condo in Florida?",
      answer:
        "Yes. Portfolio and non-QM lenders offer non-warrantable condo loans for primary homes, second homes, and investment properties. Expect a larger down payment than a conventional loan — often 15% to 25% — and a somewhat higher rate. If the building later becomes warrantable, you may be able to refinance into a conventional loan.",
    },
    {
      question: "How do I know if a condo is FHA-approved?",
      answer:
        "Search HUD's FHA approved condo lookup online by state, county, or project name, and check that the status is approved and not expired. If the building isn't listed, FHA Single-Unit Approval may still work for an individual unit. A lender can also check FHA, VA, and conventional eligibility for you before you make an offer.",
    },
    {
      question: "Why are so many Florida condos non-warrantable now?",
      answer:
        "After the 2021 Surfside collapse, Florida required milestone structural inspections and fully funded structural reserves for many condo buildings. Those rules uncovered repairs and pushed up dues and special assessments, while master insurance premiums also rose. Buildings with unresolved repairs, thin reserves, or insurance gaps often lose conventional and FHA eligibility.",
    },
    {
      question:
        "What is the difference between a warrantable and non-warrantable condo?",
      answer:
        "A warrantable condo is in a building that meets Fannie Mae and Freddie Mac project standards, so it qualifies for conventional financing. A non-warrantable condo doesn't meet those standards, so it needs a portfolio or non-QM loan. The difference is about the building, not the buyer — the same unit can change status as the association's finances, repairs, and insurance change.",
    },
    {
      question: "How much down payment do I need for a non-warrantable condo?",
      answer:
        "Plan on roughly 15% to 25% down, depending on the program, your credit score, and whether the condo is your primary home, a second home, or a rental. Condotels and buildings with more serious issues can require more.",
    },
  ],
  closing: {
    heading: "Not Sure If Your Building Qualifies?",
    subtitle:
      "Send us the condo you're considering — we'll check every loan option before you make an offer, with no obligation.",
  },
};

export default function CondoLoanPage() {
  return <ProductPage config={config} />;
}
