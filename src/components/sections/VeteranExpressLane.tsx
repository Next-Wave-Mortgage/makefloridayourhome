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

function ConsultButton({ label = "See How Much More Home I Can Buy" }: { label?: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-1.5 sm:w-auto sm:items-start">
      <Link
        href={FUNNEL}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-review-gold px-7 py-3.5 text-center text-[15px] font-bold leading-snug sm:w-auto sm:whitespace-nowrap text-charcoal no-underline shadow-[0_6px_20px_rgba(255,184,0,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,184,0,0.45)]"
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

const WHAT_WE_DO = [
  "Gather your VA letter and county paperwork.",
  "Ask your county for an early eligibility check. Florida law (s. 196.092) lets property appraisers confirm it before you buy.",
  "Compare lenders on how they treat your exemption. Counting it when you qualify and lowering your escrow are two separate decisions, and we ask about both.",
  "Coordinate title, tax prorations and your refund, and keep you updated through closing.",
];

/* Full section, placed under its own H2 in the MDX. */
export function ExpressLaneSection() {
  return (
    <div className="not-prose my-6">
      <div className="rounded-3xl border border-border-gray/70 bg-white p-6 sm:p-8">
        <p className="text-[16px] leading-[1.75] text-charcoal/75">
          Buying a home as a disabled veteran can mean VA letters, county forms,
          lenders and underwriters all asking for paperwork. You&apos;ve earned
          better than the long line: red-carpet service, not red tape.
        </p>

        <p className="mt-7 text-[19px] font-bold text-charcoal">
          Why your exemption matters when you buy
        </p>
        <p className="mt-3 text-[16px] leading-[1.75] text-charcoal/75">
          Your exemption usually isn&apos;t on the new home&apos;s tax records yet
          when you apply for a loan. A lender may count property taxes you
          won&apos;t actually pay, which can shrink how much home you qualify for.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border-gray/70">
          {[
            ["Property taxes a lender might count", "$600/mo"],
            ["More home you could qualify for if they count your exemption", "Up to $94,900"],
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
        <p className="mt-2 text-[12px] leading-relaxed text-charcoal/50">
          Example: $7,200 a year in taxes at 6.5% over 30 years. Not a promise of
          approval; your income, debts and loan program still matter.
        </p>

        <p className="mt-7 text-[19px] font-bold text-charcoal">What we do for you</p>
        <ul className="mt-4 space-y-3">
          {WHAT_WE_DO.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/75">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-green text-white">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[14px] leading-relaxed text-charcoal/60">
          Some forms still need your signature, and we can&apos;t guarantee the
          county&apos;s or lender&apos;s decision. We take the legwork off your
          shoulders so you can focus on the home.
        </p>
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
        Educational only; not tax or legal advice or a commitment to lend.
        Eligibility is determined by the county property appraiser. Loan
        qualification and escrow treatment depend on lender guidelines.
      </p>
    </div>
  );
}
