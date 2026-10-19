import Image from "next/image";
import Link from "next/link";
import { philReviewer } from "@/lib/entity";

// Next Wave Veteran Mortgage Express Lane promo for the VA disability
// property tax article. Copy is Phil Ganz's (email of Oct 14, 2026), lightly
// edited; lender names from his draft are omitted pending compliance review,
// as his publishing notes asked. Leads go to the VA loan funnel.

const FUNNEL = "/check-va-loan-eligibility";
const SECTION_ANCHOR = "#the-next-wave-veteran-mortgage-express-lane";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ConsultButton({ label = "Check My Buying Power" }: { label?: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-1.5 sm:w-auto sm:items-start">
      <Link
        href={FUNNEL}
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-review-gold px-7 py-3.5 text-[15px] font-bold leading-none sm:w-auto text-charcoal no-underline shadow-[0_6px_20px_rgba(255,184,0,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,184,0,0.45)]"
      >
        {label}
        <ArrowIcon />
      </Link>
      <span className="text-[12px] text-white/60">2 minutes, no credit pull</span>
    </div>
  );
}

function Eyebrow() {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-review-gold">
      The Next Wave Veteran Mortgage Express Lane
    </p>
  );
}

function PhilByline({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={philReviewer.photo}
        alt="Phil Ganz, President of Next Wave Mortgage"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full object-cover ring-2 ring-white/40"
      />
      <div className={`text-[12px] leading-snug ${light ? "text-white/70" : "text-charcoal/60"}`}>
        <p className={`font-bold ${light ? "text-white" : "text-charcoal"}`}>
          Phil Ganz, President, Next Wave Mortgage
        </p>
        <p>NMLS #37833 · Company NMLS #2536820</p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-brand-green/40" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-90 sm:rotate-0"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  );
}

/* Shared green backdrop with depth: gradient plus soft light and gold glows. */
function GreenPanel({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: "div" | "aside";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={`not-prose relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#008059] via-brand-green to-[#00432e] text-white shadow-[0_24px_60px_rgba(0,50,34,0.28)] ${className}`}
    >
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-review-gold/15 blur-3xl"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}

/* Featured card near the top of the article. */
export function ExpressLaneFeature() {
  return (
    <GreenPanel as="aside" className="my-10">
      <div className="p-6 sm:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow />
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85 ring-1 ring-white/20">
            For veterans rated 100% permanent and total
          </span>
        </div>
        <p className="mt-4 text-[24px] font-bold leading-tight sm:text-[29px]">
          100% Disabled Veteran Buying a Home in Florida? Don&apos;t Let Property
          Taxes Cost You Up to $95,000 in Buying Power
        </p>
        <p className="mt-3 text-[15px] font-semibold text-green-tint">
          More Home. Less Hassle. White-Glove Service.
        </p>
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-white/80">
          You&apos;ve served your country. You shouldn&apos;t have to become a tax
          expert just to buy a home. Red-carpet service, not red tape.
        </p>

        {/* Value flow */}
        <div className="mt-7 rounded-2xl bg-white p-5 text-charcoal shadow-[0_12px_30px_rgba(0,0,0,0.15)] sm:p-6">
          <p className="text-[13px] font-bold uppercase tracking-wider text-brand-green">
            How your exemption can mean more home
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1.15fr] sm:items-stretch">
            <div className="rounded-xl bg-[#f6f7f6] p-4">
              <p className="text-[26px] font-bold leading-none">$600/mo</p>
              <p className="mt-2 text-[13px] leading-snug text-charcoal/65">
                Property taxes in a typical payment ($7,200 a year)
              </p>
            </div>
            <FlowArrow />
            <div className="rounded-xl bg-[#f6f7f6] p-4">
              <p className="text-[26px] font-bold leading-none">$0/mo</p>
              <p className="mt-2 text-[13px] leading-snug text-charcoal/65">
                What you pay with your full exemption
              </p>
            </div>
            <FlowArrow />
            <div className="rounded-xl bg-green-tint p-4 ring-2 ring-brand-green/25">
              <p className="text-[26px] font-bold leading-none text-brand-green">
                Up to $94,900
              </p>
              <p className="mt-2 text-[13px] leading-snug text-charcoal/70">
                More home you could qualify for*
              </p>
            </div>
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-charcoal/50">
            *If your lender counts your exemption. Example uses a 6.5% rate over 30
            years. Not a promise of approval.
          </p>
        </div>

        {/* What we handle */}
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
          {[
            "We gather your VA and county paperwork",
            "We compare lenders on how they treat your exemption",
            "We keep you updated from application to closing",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-white/90">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-review-gold text-charcoal">
                <CheckIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ConsultButton />
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <PhilByline light />
            <a
              href={SECTION_ANCHOR}
              className="text-[13px] font-semibold text-green-tint underline underline-offset-4 hover:text-white"
            >
              How the Express Lane works
            </a>
          </div>
        </div>
      </div>
    </GreenPanel>
  );
}

const CHECKLIST = [
  "Review your VA permanent-and-total service-connected disability documentation and qualifying discharge status.",
  "Confirm Florida homestead and statutory eligibility with the county property appraiser.",
  "Ask about tentative verification under Florida Statute 196.092.",
  "Separate eligible ad valorem taxes from non-ad valorem assessments on the property tax bill.",
  "Compare suitable lenders and request written underwriting review of the future exemption.",
  "Request a separate written decision on escrow collection.",
  "Coordinate title, current-year tax prorations and any potential statutory refund.",
  "Keep you informed from application through closing.",
];

function SubHead({ children }: { children: React.ReactNode }) {
  return <p className="mt-8 text-[19px] font-bold text-charcoal">{children}</p>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[16px] leading-[1.75] text-charcoal/75">{children}</p>;
}

/* Full section, placed under its own H2 in the MDX. */
export function ExpressLaneSection() {
  return (
    <div className="not-prose my-6">
      <div className="rounded-3xl border border-border-gray/70 bg-white p-6 sm:p-9">
        <Body>
          Imagine the longest airport security line the day before Thanksgiving.
          Thousands of travelers, luggage everywhere, and an endless wait. Then you
          notice TSA PreCheck: a much easier experience.
        </Body>
        <Body>
          Now imagine being told to stand in the longest line anyway, even though
          you&apos;ve earned access to a better one.
        </Body>
        <Body>
          That&apos;s what a Florida home purchase can feel like for a disabled
          veteran: VA letters, county forms, property appraisers, lenders,
          underwriters, taxes, escrows and repeated requests for documentation.
        </Body>
        <p className="mt-4 text-[18px] font-bold text-brand-green">
          You deserve better than that nonsense.
        </p>
        <Body>
          You&apos;ve served your country. You shouldn&apos;t have to become an
          expert in Florida property-tax law just to buy a home. At Next Wave
          Mortgage, our philosophy is simple: red-carpet service, not red tape. We
          help coordinate the mortgage paperwork and advocate with multiple lenders
          so you can focus on choosing your new home.
        </Body>

        <SubHead>The $600-a-Month Mortgage Qualification Problem</SubHead>
        <Body>
          Under Florida Statute 196.081, certain honorably discharged veterans with
          a total and permanent service-connected disability can qualify for a full
          ad valorem property-tax exemption on their Florida homestead. But the
          exemption may not yet appear on the new home&apos;s tax records when
          you&apos;re applying for financing. Your lender might initially count the
          estimated taxes in your debt-to-income ratio.
        </Body>

        <div className="mt-5 overflow-hidden rounded-2xl border border-border-gray/70">
          {[
            ["Yearly property taxes (example)", "$7,200"],
            ["Monthly cost in your payment", "$600"],
            ["More home you could qualify for (6.5%, 30 years)", "Up to $94,900"],
            ["Less cash upfront for tax escrow (4 months)", "$2,400"],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-4 px-5 py-3 text-[14px] ${
                i % 2 ? "bg-green-tint" : "bg-white"
              }`}
            >
              <span className="text-charcoal/70">{label}</span>
              <span className="whitespace-nowrap text-[16px] font-bold text-brand-green">
                {value}
              </span>
            </div>
          ))}
        </div>

        <Body>
          That $600 payment difference represents approximately $94,900 in potential
          additional mortgage principal capacity, if the lender recognizes the
          exemption and all other underwriting limits permit it. This is not
          automatically $95,000 more purchase price, and it is not a promise of
          approval. Other debts, income, insurance, assessments, loan-to-value
          limits, VA entitlement if applicable and program rules still matter. Nor
          should anyone borrow more than is affordable.
        </Body>
        <Body>
          But imagine missing out on the right floor plan or neighborhood simply
          because your lender hasn&apos;t properly evaluated an exemption you may
          qualify for.
        </Body>

        <SubHead>Welcome to the Mortgage Express Lane</SubHead>
        <Body>
          Why spend your home search chasing county forms, waiting on hold,
          locating VA letters and explaining the same issue repeatedly to lenders?
          Our white-glove approach is to help review your benefits, identify needed
          documents, coordinate with appropriate county and closing professionals,
          evaluate lender options, present the exemption documentation to
          underwriting and keep you informed.
        </Body>
        <Body>
          Some forms, signatures and county requirements still need your direct
          participation. We cannot skip legal steps or guarantee the county&apos;s
          or lender&apos;s decision. But we can help take the organizational burden
          off your shoulders. Think of it as the mortgage version of an express
          lane: experienced guidance, fewer avoidable detours and personal service.
          You focus on the home. We help navigate the process.
        </Body>

        <SubHead>Why an Independent Mortgage Broker Matters</SubHead>
        <Body>
          A direct lender generally offers its own programs and guidelines. If it
          won&apos;t recognize your anticipated exemption, your options with that
          institution may be limited. Next Wave Mortgage works with multiple
          wholesale lenders. We can evaluate how different investors review
          exemption documentation, calculate qualifying housing expenses, and
          handle escrows, alongside rates, fees and closing deadlines.
        </Body>
        <Body>
          One especially important lesson from experienced brokers: removing
          eligible property taxes from the qualifying debt-to-income calculation
          and reducing or waiving tax escrows are two separate lender decisions.
        </Body>

        <SubHead>The Florida Law That May Help Before Closing</SubHead>
        <Body>
          Florida Statute 196.092 allows a county property appraiser, at the
          appraiser&apos;s discretion, to provide tentative verification of
          eligibility for certain disabled-veteran exemptions before a homestead
          purchase. This verification is nonbinding, does not replace the final
          application, and does not force a lender to exclude taxes. But it may
          provide valuable support for an underwriting review. We help identify
          whether the county offers this option and how to present the
          documentation to a lender.
        </Body>

        <SubHead>The Difference Between Tax Exemption and Escrow</SubHead>
        <Body>
          If the lender accepts an exemption for qualification, that may remove
          eligible taxes from the monthly expense used to calculate DTI. Separately,
          the lender may review whether upfront escrow collections should be
          reduced. For example, four months of $600 eligible taxes would be $2,400.
          A reduction in that deposit may reduce cash needed at closing, but it
          isn&apos;t a lender fee discount or free money. The veteran may still owe
          homeowners insurance, non-ad valorem assessments such as certain CDD or
          service charges, current-year tax amounts and closing prorations.
        </Body>

        <SubHead>Your White-Glove Next Wave Checklist</SubHead>
        <ol className="mt-4 space-y-2.5">
          {CHECKLIST.map((item, i) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/75">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-green text-[12px] font-bold text-white">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <GreenPanel className="mt-6">
        <div className="p-6 sm:p-9">
          <Eyebrow />
          <p className="mt-3 text-[24px] font-bold leading-tight sm:text-[27px]">
            You&apos;ve Earned Your Benefits. You Deserve the Red Carpet.
          </p>
          <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-white/80">
            Buying a Florida home should be about the neighborhood, the backyard,
            your family and the memories you&apos;ll create, not another frustrating
            line of bureaucracy. You&apos;ve already served your country. Let us help
            make your next chapter easier.
          </p>
          <p className="mt-3 text-[15px] font-semibold text-green-tint">
            More Home. Less Hassle. White-Glove Service.
          </p>
          <div className="mt-7 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <ConsultButton />
            <PhilByline light />
          </div>
        </div>
      </GreenPanel>

      <p className="mt-4 text-[12px] leading-relaxed text-charcoal/45">
        Next Wave Mortgage is a Florida-based independent mortgage broker with
        multiple wholesale lender relationships. Educational only; not tax or legal
        advice or a commitment to lend. Eligibility is determined by the county
        property appraiser. Loan qualification and escrow treatment depend on
        investor guidelines and individual facts. The $94,900 figure is an
        illustrative principal-and-interest calculation, not guaranteed additional
        purchase price. TSA PreCheck analogy only; no affiliation or expedited
        government access is implied.
      </p>
    </div>
  );
}
