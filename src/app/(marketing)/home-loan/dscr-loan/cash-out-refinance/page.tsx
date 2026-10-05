import type { Metadata } from "next";
import {
  ProductPage,
  productIcons,
  type ProductPageConfig,
} from "@/components/sections/ProductPage";
import { philReviewer } from "@/lib/entity";

const ogImage =
  "https://www.makefloridayourhome.com/images/og/florida-dscr-cash-out-refinance.webp";

export const metadata: Metadata = {
  title: "DSCR Cash-Out Refinance in Florida — Tap Your Rental Equity",
  description:
    "Pull cash from a Florida rental with a DSCR cash-out refinance. Qualify on rent, not tax returns — fund your next property, repairs, or a hard money payoff.",
  openGraph: {
    title: "DSCR Cash-Out Refinance in Florida — Tap Your Rental Equity",
    description:
      "Refinance a Florida rental and pull out equity based on the property's rent — no tax returns, close in an LLC.",
    url: "https://www.makefloridayourhome.com/home-loan/dscr-loan/cash-out-refinance",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Renovated single-story Florida rental home with palm trees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSCR Cash-Out Refinance in Florida — Tap Your Rental Equity",
    description:
      "Refinance a Florida rental and pull out equity based on the property's rent — no tax returns, close in an LLC.",
    images: [ogImage],
  },
  alternates: { canonical: "/home-loan/dscr-loan/cash-out-refinance" },
};

const config: ProductPageConfig = {
  path: "/home-loan/dscr-loan/cash-out-refinance",
  breadcrumbs: [
    { name: "Home Loans", path: "/home-loan" },
    { name: "DSCR Loans", path: "/home-loan/dscr-loan" },
    {
      name: "Cash-Out Refinance",
      path: "/home-loan/dscr-loan/cash-out-refinance",
    },
  ],
  review: { reviewer: philReviewer, lastReviewed: "2026-10-05" },
  loanProduct: {
    name: "Florida DSCR Cash-Out Refinance",
    description:
      "DSCR cash-out refinance for Florida investment properties, qualified on the property's rental income instead of personal income.",
    loanType: "DSCR mortgage",
  },
  hero: {
    title: (
      <>
        <span className="text-brand-green">DSCR Cash-Out Refinance</span> in
        Florida
      </>
    ),
    subtitle: (
      <p>
        Your Florida rental has built equity — put it to work.{" "}
        <strong className="text-dark-green">
          A DSCR cash-out refinance lets you pull cash from an investment
          property based on its rent, not your tax returns.
        </strong>{" "}
        Use it for your next purchase, renovations, or to pay off a short-term
        loan.
      </p>
    ),
    features: [
      {
        icon: productIcons.dollar,
        text: "Cash out up to roughly 70%–75% of the property's value",
      },
      {
        icon: productIcons.check,
        text: "Qualify on the property's rent — no W-2s or tax returns",
      },
      {
        icon: productIcons.home,
        text: "Refinance out of hard money or private loans after a rehab",
      },
      {
        icon: productIcons.shield,
        text: "Close in your own name or keep the property in your LLC",
      },
    ],
    image: "/images/heroes/florida-dscr-cash-out-refinance-hero.webp",
    imageAlt:
      "Renovated single-story Florida rental home with a metal roof, fresh landscaping, and palm trees",
  },
  cta: {
    href: "/check-non-qm-loan-eligibility",
    text: "Check Your Cash-Out Refinance Options",
  },
  sections: [
    {
      type: "table",
      heading: (
        <>
          DSCR <span className="text-brand-green">Cash-Out</span> Refinance at a
          Glance
        </>
      ),
      intro:
        "A DSCR cash-out refinance replaces your current loan with a larger one and hands you the difference. Like every DSCR loan, it qualifies on whether the property's rent covers the new payment.",
      headers: ["Feature", "Typical Terms"],
      rows: [
        [
          "Maximum Loan-to-Value",
          "Commonly 70%–75% of the appraised value; some programs go higher for strong files",
        ],
        [
          "Seasoning",
          "Many programs want about 6 months of ownership before using the new appraised value",
        ],
        [
          "Credit Score",
          "Often 660–700+, with the best pricing and highest LTVs at higher scores",
        ],
        [
          "DSCR Requirement",
          "Usually 1.0 or higher at the new, larger payment",
        ],
        [
          "Income Documentation",
          "None — the property's lease or market rent qualifies the loan",
        ],
        [
          "Rental Income Used",
          "Current lease, market rent from the appraisal, or short-term rental history",
        ],
        [
          "Cash-Out Limits",
          "Some programs cap the cash you can take at closing, depending on LTV and credit",
        ],
        ["Vesting", "Your own name or an LLC"],
      ],
      caption: "DSCR cash-out refinance features and typical requirements",
    },
    {
      type: "table",
      heading: (
        <>
          How Much Cash Could You{" "}
          <span className="text-brand-green">Take Out?</span>
        </>
      ),
      intro:
        "Here's a simple example for a Florida rental worth $400,000 with a 75% LTV program. Your actual numbers depend on the appraisal, your program's limits, and your closing costs.",
      headers: ["Step", "Example"],
      rows: [
        ["Appraised value", "$400,000"],
        ["Maximum new loan (75% LTV)", "$300,000"],
        ["Pay off current mortgage", "– $180,000"],
        [
          "Estimated closing costs (including Florida mortgage taxes)",
          "– $9,000",
        ],
        ["Cash to you at closing", "About $111,000"],
        [
          "Does the rent still cover the payment?",
          "The new, larger payment must still meet your program's DSCR minimum",
        ],
      ],
      caption:
        "Example DSCR cash-out refinance calculation for a Florida rental",
    },
    {
      type: "cards",
      heading: (
        <>
          How Florida Investors{" "}
          <span className="text-brand-green">Use the Cash</span>
        </>
      ),
      cards: [
        {
          title: "Buy the Next Property",
          description:
            "Turn equity in one rental into the down payment on the next — the core of the buy, rehab, rent, refinance (BRRRR) strategy.",
        },
        {
          title: "Pay Off Hard Money",
          description:
            "Bought and renovated with a short-term loan? A DSCR refinance replaces it with long-term financing based on the finished property's rent.",
        },
        {
          title: "Renovate or Harden the Property",
          description:
            "Fund upgrades, a new roof, or impact windows — improvements that can also help with Florida insurance costs.",
        },
        {
          title: "Build Reserves",
          description:
            "Keep cash on hand for vacancies, storm season, and the next opportunity without selling a property.",
        },
      ],
    },
    {
      type: "table",
      heading: (
        <>
          Cash-Out vs. <span className="text-brand-green">Rate-and-Term</span>
        </>
      ),
      intro:
        "Not every DSCR refinance is about cash. If your goal is a lower rate or better terms, a rate-and-term refinance may fit better.",
      headers: ["Feature", "Cash-Out Refinance", "Rate-and-Term Refinance"],
      rows: [
        [
          "Main goal",
          "Pull equity out as cash",
          "Lower rate or change loan terms",
        ],
        [
          "Typical max LTV",
          "Lower (often 70%–75%)",
          "Higher (often up to 75%–80%)",
        ],
        ["Pricing", "Slightly higher rate", "Better pricing"],
        [
          "Seasoning",
          "Often about 6 months for appraised value",
          "Often shorter or none",
        ],
        [
          "Best for",
          "Growing a portfolio or funding repairs",
          "Replacing a higher-rate or short-term loan",
        ],
      ],
      caption: "DSCR cash-out vs rate-and-term refinance comparison",
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
        "A few Florida costs and rules can change how much cash you walk away with — or whether the numbers work at all.",
      headers: ["Florida Factor", "What It Means for You"],
      rows: [
        [
          "Mortgage taxes on the new loan",
          "Florida charges documentary stamp tax (0.35%) and intangible tax (0.2%) on new mortgage debt — about $1,650 on a $300,000 loan. Ask how much applies to your refinance.",
        ],
        [
          "Rising insurance",
          "Higher premiums raise your monthly payment and lower your DSCR. A recent wind mitigation inspection can lower the premium and help the numbers.",
        ],
        [
          "Property taxes",
          "Rentals pay non-homestead taxes. A current tax bill is part of the payment the rent must cover.",
        ],
        [
          "Condo assessments",
          "If the rental is a condo, special assessments for Florida's new safety and reserve rules can affect both the appraisal and the lender's review of the building.",
        ],
        [
          "Your current loan's prepayment penalty",
          "Many investor loans charge a penalty for paying off early. Check your current note before you refinance.",
        ],
      ],
      caption: "Florida-specific considerations for a DSCR cash-out refinance",
    },
    {
      type: "promo",
      heading: (
        <>
          Check the DSCR at Your{" "}
          <span className="text-green-tint">New Loan Amount</span>
        </>
      ),
      body: "Enter your property's value and rent in our free Florida DSCR calculator to see whether the payment on a larger loan still qualifies — using your county's real property tax rate and realistic insurance.",
      href: "/florida-dscr-loan-calculator",
      linkText: "Try the Florida DSCR Calculator",
    },
    {
      type: "steps",
      heading: (
        <>
          How a DSCR{" "}
          <span className="text-brand-green">Cash-Out Refinance</span> Works
        </>
      ),
      howTo: {
        name: "How to Do a DSCR Cash-Out Refinance in Florida",
        description:
          "Step-by-step guide to pulling equity from a Florida rental property with a DSCR cash-out refinance.",
      },
      steps: [
        {
          title: "Check Your Eligibility",
          description:
            "Tell us the property's estimated value, current loan balance, rent, and your credit range. We'll estimate how much cash you could take out.",
        },
        {
          title: "Gather Property Documents",
          description:
            "Current lease or rental history, your mortgage statement, insurance declarations, and the latest tax bill. No pay stubs or tax returns.",
        },
        {
          title: "Appraisal & Rent Schedule",
          description:
            "The appraiser sets the new value and confirms market rent. That value drives your maximum loan, and the rent qualifies it.",
        },
        {
          title: "Close & Receive Your Cash",
          description:
            "Sign in your own name or your LLC. Your old loan is paid off, and the remaining proceeds are wired to you after closing.",
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
          category: "Investor Financing",
          title: "DSCR Loans in Florida",
          description:
            "How DSCR loans work, what you need to qualify, and how they compare with conventional loans.",
          href: "/home-loan/dscr-loan",
          image: "/images/heroes/florida-dscr-loan-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Investor Tools",
          title: "Florida DSCR Loan Calculator",
          description:
            "County-level property taxes, Florida insurance estimates, and Airbnb mode.",
          href: "/florida-dscr-loan-calculator",
          image: "/images/og/florida-dscr-loan-calculator.webp",
          readTime: "Free tool",
        },
        {
          category: "Short-Term Rentals",
          title: "DSCR Loans for Airbnb & Vacation Rentals",
          description:
            "How lenders count Airbnb income, and Florida's short-term rental rules.",
          href: "/home-loan/dscr-loan/short-term-rental",
          image: "/images/heroes/florida-short-term-rental-dscr-hero.webp",
          readTime: "Loan guide",
        },
        {
          category: "Home Equity",
          title: "How a HELOC Works in Florida",
          description:
            "Another way to tap equity — and when it can make more sense than a refinance.",
          href: "/learn/how-does-heloc-work-in-florida",
          image: "/images/learn/how-does-heloc-work-in-florida-2026.webp",
          readTime: "8 min read",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can you do a cash-out refinance with a DSCR loan?",
      answer:
        "Yes. A DSCR cash-out refinance replaces your current loan on an investment property with a larger one and pays you the difference. It qualifies on the property's rental income rather than your personal income, so you don't need W-2s or tax returns — the rent just needs to cover the new payment at your program's DSCR minimum.",
    },
    {
      question: "How much cash can I take out with a DSCR refinance?",
      answer:
        "Most DSCR cash-out programs lend up to about 70% to 75% of the property's appraised value. Your cash at closing is that new loan amount minus your current mortgage payoff and closing costs. Some programs also cap the total cash you can take, depending on your credit and LTV.",
    },
    {
      question:
        "How long do I have to own the property before a cash-out refinance?",
      answer:
        "Many DSCR programs require about 6 months of ownership before they'll use the new appraised value, though some allow less and others require more. If you bought the property with cash, a delayed-financing option may let you recoup your purchase costs sooner. Ask about seasoning before you plan your timeline.",
    },
    {
      question:
        "Can I use a DSCR cash-out refinance to pay off a hard money loan?",
      answer:
        "Yes — this is one of the most common uses. Investors often buy and renovate with a short-term hard money loan, then refinance into a long-term DSCR loan once the property is finished and rented. The refinance is based on the improved value and the property's rent.",
    },
    {
      question: "Does the property need a tenant to refinance?",
      answer:
        "Not always. Many programs accept a signed lease, but some can qualify a vacant property using the appraiser's market rent estimate, sometimes with stricter terms. Short-term rentals can often use booking history. Your program determines which rent source is allowed.",
    },
    {
      question: "Is a DSCR cash-out refinance better than a HELOC on a rental?",
      answer:
        "It depends on your goal. A cash-out refinance gives you a lump sum and a new fixed or adjustable loan on the whole balance, while a HELOC on an investment property — when available — lets you draw only what you need. If your current rate is low, keeping it and adding a second lien may cost less; if you need a large amount or want long-term fixed financing, a cash-out refinance is often simpler.",
    },
  ],
  closing: {
    heading: "See How Much Cash Your Rental Could Unlock",
    subtitle:
      "Tell us about the property and your current loan — no tax returns, no obligation.",
  },
};

export default function DSCRCashOutRefinancePage() {
  return <ProductPage config={config} />;
}
