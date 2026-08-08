# MakeFloridaYourHome — build conventions

MakeFloridaYourHome is a Florida mortgage brand. Components are self-contained
React function components on `window.MFYH` — **no provider, theme wrapper, or
router is needed**. Render them directly; links are plain anchors.

## Styling idiom: Tailwind utilities + brand tokens

Style your own layout glue with Tailwind utility classes. The shipped
`styles.css` contains the design tokens **plus only the utility classes the
site itself uses** — it is a compiled stylesheet, not a Tailwind runtime, so an
arbitrary class that never appears on the site may not exist. Prefer this
vocabulary (all present in the stylesheet):

| Purpose | Classes |
|---|---|
| Brand color | `text-brand-green`, `bg-brand-green` (#006948 — CTAs, accents, links) |
| Text | `text-dark-green` (headings/body #333333), `text-mid-gray` (muted #ABACAC) |
| Backgrounds | `bg-green-tint` (#F2FAF6 section alt), `bg-white`, `bg-charcoal` (footer) |
| Borders | `border-border-gray` (#DCDFDD cards/dividers), `rounded-2xl`, `rounded-full` |
| Ratings/CTA | `text-review-gold` (#FFB800 stars), `text-cta-blue` (#0000CC inline article CTAs) |
| Section rhythm | `py-16 sm:py-20 lg:py-24`; container `mx-auto max-w-[1400px] px-5 sm:px-8` |

Never use `text-dark-green`'s color for backgrounds. Font is the system stack —
never import webfonts.

**Split-color heading pattern** (used everywhere):

```jsx
<h2 className="text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
  Confidence Comes With <span className="text-brand-green">Knowing Your Options</span>
</h2>
```

## Composing a page

Marketing pages stack full-width sections: a hero (`Hero`, `PageHero`,
`ToolHero`, or `ArticleHero`) → content sections (`Programs`, `WhatWeDo`,
`WhyTrust`, `StepProcess`, `Testimonials`, `ExpertGuides`, `DataTable`) →
`PageFAQ` → `PageCTA` or `FinalCTA`, alternating `bg="white"` /
`bg="green-tint"` where the prop exists. `Header` on top, `Footer` at the
bottom.

```jsx
const { Header, PageHero, StepProcess, PageFAQ, PageCTA, Footer } = window.MFYH;

<Header />
<StepProcess
  heading={<>How to <span className="text-brand-green">Apply</span></>}
  bg="green-tint"
  steps={[{ title: "Check Your Eligibility", description: "No credit pull required." }]}
/>
<PageFAQ faqs={[{ question: "Do I repay assistance?", answer: "Many programs are 0% deferred seconds." }]} bg="white" />
<PageCTA heading="Find Out What You Qualify For" subtitle="No credit pull, no obligation."
  ctaText="Check Your Home Purchase Eligibility" ctaHref="/check-eligibility" />
<Footer />
```

CTA copy convention: down-payment-assistance CTAs say "Check Your Florida Down
Payment Assistance Eligibility"; loan CTAs say "Check Your Home Purchase
Eligibility" — never generic "Learn more".

## Data-driven components

Real app data ships in the bundle — never hand-invent program or rate data:

- `DpaCalculator`: `counties={MFYH.FLORIDA_COUNTIES}` and
  `programs={MFYH.toDpaCalculatorProgramSummaries(MFYH.FLORIDA_DPA_PROGRAMS)}`
- `DpaCalculatorSeoSections`: `countyCounts={MFYH.getDpaProgramCountsByCounty(MFYH.FLORIDA_COUNTIES, MFYH.toDpaCalculatorProgramSummaries(MFYH.FLORIDA_DPA_PROGRAMS))}`
- `MortgageRatesDashboard`: `snapshot={MFYH.sampleMortgageMarketSnapshot}`

## Where the truth lives

Read `styles.css` (tokens + available utilities) and each component's
`.prompt.md` / `.d.ts` before styling. Image props expect URLs; `/images/*`
paths only exist on the production site — pass a real image URL or accept the
built-in pale-green placeholder.
