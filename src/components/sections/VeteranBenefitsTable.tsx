// Florida property tax benefits by veteran situation, for the VA disability
// exemption article. Example figures match VeteranTaxSavingsCalculator
// defaults: $400,000 home, Hillsborough County average millage (15.73).

type Row = {
  situation: string;
  benefit: string;
  law: string;
  example: string;
  exampleNote: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    situation: "Any homesteaded owner",
    benefit:
      "Homestead exemption: $25,000 off all taxes, plus up to $26,411 more off non-school taxes in 2026",
    law: "s. 196.031",
    example: "$5,483/yr",
    exampleNote: "tax owed",
  },
  {
    situation: "Rated 10%–90%, or 100% but not permanent and total",
    benefit: "$5,000 off assessed value, also on property that isn't your homestead",
    law: "s. 196.24",
    example: "$79/yr",
    exampleNote: "saved",
  },
  {
    situation: "Age 65+ with a combat-related permanent disability",
    benefit:
      "Discount equal to your VA disability percentage, applied after your other exemptions",
    law: "s. 196.082",
    example: "$3,321/yr",
    exampleNote: "saved at a 60% rating",
  },
  {
    situation: "100% permanent and total, or wheelchair-bound",
    benefit: "Full exemption from ad valorem taxes on your homestead",
    law: "ss. 196.081, 196.091",
    example: "$5,483/yr",
    exampleNote: "saved ($0 tax)",
    highlight: true,
  },
  {
    situation: "Deployed overseas last year on a designated operation",
    benefit: "Exemption equal to the share of last year you were deployed",
    law: "s. 196.173",
    example: "Varies",
    exampleNote: "by time deployed",
  },
];

const GRID = "sm:grid sm:grid-cols-[1.05fr_1.5fr_0.85fr] sm:gap-6";

export function VeteranBenefitsTable() {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-border-gray/70">
      <div
        className={`hidden bg-brand-green px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-white/85 ${GRID}`}
      >
        <span>Your situation</span>
        <span>Florida benefit</span>
        <span className="text-right">Example*</span>
      </div>
      <ul>
        {ROWS.map((row, i) => (
          <li
            key={row.situation}
            className={`relative px-5 py-4 ${GRID} sm:items-center ${
              i > 0 ? "border-t border-border-gray/70" : ""
            } ${row.highlight ? "bg-green-tint" : "bg-white"}`}
          >
            {row.highlight ? (
              <span className="absolute inset-y-0 left-0 w-1 bg-brand-green" aria-hidden />
            ) : null}
            <p className="text-[15px] font-bold leading-snug text-charcoal">
              {row.situation}
            </p>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-[14px] leading-relaxed text-charcoal/70">{row.benefit}</p>
              <span className="mt-1.5 inline-block rounded-full bg-green-tint px-2.5 py-0.5 text-[11px] font-semibold text-brand-green ring-1 ring-brand-green/15">
                {row.law}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2 sm:mt-0 sm:flex-col sm:items-end sm:gap-0 sm:text-right">
              <span className="text-[18px] font-bold leading-tight text-brand-green">
                {row.example}
              </span>
              <span className="text-[12px] text-charcoal/50">{row.exampleNote}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
