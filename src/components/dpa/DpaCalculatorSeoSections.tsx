import Link from "next/link";
import type { DpaCalculatorProgramSummary } from "@/lib/dpa-calculator";

interface CountyCount {
  county: string;
  count: number;
}

interface DpaCalculatorSeoSectionsProps {
  countyCounts: CountyCount[];
  commonPrograms: DpaCalculatorProgramSummary[];
}

const dataQualitySignals = [
  {
    title: "105 Florida DPA programs",
    body: "The calculator runs on a structured Florida assistance database, not a scraped list or generic quiz.",
  },
  {
    title: "County, city, and statewide coverage",
    body: "Each program is tagged by geography so local options can be weighed against statewide assistance.",
  },
  {
    title: "Source-backed program records",
    body: "Records include source URLs, review dates, assistance terms, and notes where rules still need verification.",
  },
  {
    title: "Confidence instead of guessing",
    body: "When income limits, funding status, or eligibility details are incomplete, the tool marks them for review.",
  },
];

const checks = [
  "County and city availability",
  "First-time buyer status",
  "Occupation, military, or public-service fit",
  "Income and purchase price limit flags",
  "Loan type compatibility",
  "Source quality and calculator readiness",
];

export function DpaCalculatorSeoSections({
  countyCounts,
  commonPrograms,
}: DpaCalculatorSeoSectionsProps) {
  const topCountyCounts = [...countyCounts]
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  return (
    <>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="overflow-hidden rounded-lg border border-brand-green/15 bg-white shadow-[0_28px_80px_rgba(0,105,72,0.12)]">
            <div
              className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(0,105,72,0.045) 0px, rgba(0,105,72,0.045) 1px, transparent 1px, transparent 18px)",
              }}
            >
              <div className="max-w-5xl">
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-brand-green">
                  Why this calculator is different
                </p>
                <h2 className="mt-4 max-w-4xl text-[34px] font-black leading-[1.02] text-dark-green sm:text-[48px] lg:text-[58px]">
                  A Florida DPA calculator with a real database behind it.
                </h2>
                <p className="mt-5 max-w-3xl text-[17px] font-semibold leading-relaxed text-dark-green/68 sm:text-[19px]">
                  Most DPA pages are broad articles, stale lists, or lead forms.
                  This tool runs on our maintained database of 105 Florida down
                  payment assistance programs, with structured fields for
                  geography, assistance terms, buyer requirements, loan
                  compatibility, source quality, review status, and
                  calculator-readiness.
                </p>
              </div>

              <div className="mt-9 grid gap-4 lg:grid-cols-[0.82fr_1fr] lg:items-stretch">
                <div className="rounded-lg border border-brand-green/15 bg-green-tint p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-7">
                  <p className="text-[13px] font-black uppercase tracking-[0.18em] text-brand-green/70">
                    Database size
                  </p>
                  <p className="mt-4 text-[76px] font-black leading-none text-brand-green sm:text-[96px]">
                    105
                  </p>
                  <p className="mt-3 max-w-sm text-[18px] font-black leading-snug text-dark-green">
                    Florida assistance programs mapped into calculator-ready
                    records.
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-dark-green/62">
                    Statewide, county, city, and specialty programs are modeled
                    so the tool can rank options instead of dumping an
                    unfiltered list.
                  </p>
                </div>

                <div className="rounded-lg border border-border-gray/70 bg-white p-5 text-dark-green shadow-[0_18px_50px_rgba(0,105,72,0.09)] sm:p-6">
                  <p className="text-[12px] font-black uppercase tracking-[0.18em] text-brand-green">
                    What the database tracks
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Program geography",
                      "Assistance amount",
                      "Buyer requirements",
                      "Loan compatibility",
                      "Source URL",
                      "Last review status",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-border-gray/70 bg-green-tint px-4 py-3 text-[14px] font-black"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-dark-green/62">
                    When a record is missing calculator-critical details, the
                    calculator does not pretend. It flags the program for manual
                    review so the result stays useful without overstating
                    eligibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dataQualitySignals.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-brand-green/10 bg-white p-6 shadow-[0_10px_34px_rgba(0,105,72,0.07)]"
              >
                <h3 className="text-[18px] font-black leading-tight text-dark-green">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-dark-green/62">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-green">
              What this calculator checks
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-dark-green sm:text-[38px]">
              Built from the 105-program Florida DPA database.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              The tool uses the durable program records underneath the site,
              including geography, assistance terms, source quality, and
              calculator-readiness fields. It does not invent eligibility
              details where the data is incomplete.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              A useful Florida down payment assistance calculator has to do more
              than ask for your county. Many programs depend on whether you are
              a{" "}
              <Link
                href="/first-time-home-buyer"
                className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                first-time home buyer
              </Link>
              , which loan type you plan to use, whether your income is within
              program limits, and whether the property is inside a county, city,
              or special jurisdiction. That is why this page separates likely
              matches from programs that need a closer review instead of giving
              every buyer the same generic list.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              The calculator also connects DPA research to the rest of the home
              loan decision. Buyers comparing assistance options often need to
              understand{" "}
              <Link
                href="/home-loan/fha-loan"
                className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                FHA loan eligibility
              </Link>
              ,{" "}
              <Link
                href="/learn/conventional-mortgages-in-florida"
                className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                conventional mortgage options
              </Link>
              , and how assistance can affect cash to close. For a broader
              overview, the main{" "}
              <Link
                href="/down-payment-assistance"
                className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Florida down payment assistance
              </Link>{" "}
              hub explains how these programs fit into a full purchase plan.
            </p>
          </div>

          <div className="mt-10 rounded-lg border border-border-gray/70 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {checks.map((check) => (
                <li
                  key={check}
                  className="rounded-lg border border-border-gray/60 px-4 py-3 text-[14px] font-bold text-dark-green"
                >
                  {check}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-lg border border-border-gray/70 bg-white p-6">
              <h3 className="text-[18px] font-black text-dark-green">
                Income and purchase price limits
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/62">
                Many Florida DPA programs use household income limits, purchase
                price caps, or area median income calculations. The calculator
                collects income and household size because those details can
                change which programs are realistic.
              </p>
              <Link
                href="/learn/florida-housing-income-purchase-price-limits"
                className="mt-4 inline-flex text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Review Florida Housing limits
              </Link>
            </article>
            <article className="rounded-lg border border-border-gray/70 bg-white p-6">
              <h3 className="text-[18px] font-black text-dark-green">
                Loan type compatibility
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/62">
                Some assistance pairs cleanly with FHA, VA, USDA, or
                conventional loans. Others depend on approved lenders, first
                mortgage structure, or whether a second mortgage can be layered
                behind the main loan.
              </p>
              <Link
                href="/home-loan"
                className="mt-4 inline-flex text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Compare Florida home loan options
              </Link>
            </article>
            <article className="rounded-lg border border-border-gray/70 bg-white p-6">
              <h3 className="text-[18px] font-black text-dark-green">
                Program confidence and review notes
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/62">
                Funding can open, pause, or change. When a program needs source
                verification, city boundary review, or lender confirmation, the
                calculator flags that instead of overstating the result.
              </p>
              <Link
                href="/check-dpa-eligibility"
                className="mt-4 inline-flex text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Verify your DPA eligibility
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-green">
              Programs by county
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-dark-green sm:text-[38px]">
              Florida DPA programs by county
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              County counts include statewide programs plus local programs in
              the database. Use the calculator for matching, then explore the
              map for county-by-county research.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              Florida assistance is highly local. A buyer in Broward may need to
              compare county assistance against city programs and statewide
              options, while a buyer in Orange County may see a different mix of
              SHIP-funded help, HFA programs, and Florida Housing options. The
              county list below is designed for research; the calculator above
              is designed to rank the programs that may fit your scenario.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              For deeper county research, start with our guides to{" "}
              <Link
                href="/learn/broward-county-florida-first-time-homebuyer-program"
                className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Broward County first-time buyer programs
              </Link>{" "}
              and{" "}
              <Link
                href="/learn/orange-county-florida-down-payment-assistance"
                className="font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Orange County down payment assistance
              </Link>
              , or use the map to scan program availability across Florida.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topCountyCounts.map((item) => (
              <div
                key={item.county}
                className="flex items-center justify-between rounded-lg border border-border-gray/70 bg-green-tint px-5 py-4"
              >
                <span className="font-bold text-dark-green">{item.county}</span>
                <span className="rounded-full bg-white px-3 py-1 text-[13px] font-black text-brand-green">
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/florida-down-payment-assistance-interactive-map"
              className="inline-flex items-center justify-center rounded-full border border-brand-green/30 px-6 py-3 text-[14px] font-bold text-brand-green transition-colors hover:bg-green-tint"
            >
              Open the interactive map
            </Link>
          </div>

          <div className="mt-10 rounded-lg border border-border-gray/70 bg-green-tint p-6">
            <h3 className="text-[20px] font-black text-dark-green">
              Why county matters for Florida DPA
            </h3>
            <div className="mt-4 grid gap-5 text-[15px] leading-relaxed text-dark-green/62 lg:grid-cols-2">
              <p>
                County and city programs are often funded separately from
                statewide assistance. That means two buyers with the same income
                and loan type can see different assistance options simply
                because one property is inside a qualifying city boundary and
                another is not.
              </p>
              <p>
                The calculator starts with county because geography is the first
                filter for most Florida DPA programs. Adding your city can help
                surface municipal programs and flag records where address-level
                verification is needed before relying on the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-green">
              Common Florida DPA programs
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-dark-green sm:text-[38px]">
              The calculator checks statewide and local assistance together.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              Florida buyers often hear about one headline program and assume it
              is the only option. In reality, programs such as Hometown Heroes,
              FL Assist, local SHIP assistance, county HFA programs, and city
              purchase assistance can all matter depending on occupation,
              location, income, loan type, and funding status.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {commonPrograms.map((program) => (
              <article
                key={program.id}
                className="rounded-lg border border-border-gray/70 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-green">
                  {program.geography.display}
                </p>
                <h3 className="mt-3 text-[18px] font-black leading-snug text-dark-green">
                  {program.name}
                </h3>
                <p className="mt-3 text-[15px] font-black text-brand-green">
                  {program.assistanceDisplay}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-dark-green/60">
                  {program.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/learn/first-time-homebuyer/grants-and-programs"
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-7 py-3.5 text-[14px] font-bold text-white transition-shadow hover:shadow-[0_4px_20px_rgba(0,105,72,0.3)]"
            >
              Read the full 105-program guide
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="rounded-lg border border-border-gray/70 bg-white p-6">
              <h3 className="text-[18px] font-black text-dark-green">
                Hometown Heroes and occupation-based help
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/62">
                Florida Hometown Heroes can be especially relevant for eligible
                workers, but income limits, loan limits, approved lenders, and
                funding availability still need to be checked.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/hometown-heroes"
                  className="text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
                >
                  Hometown Heroes overview
                </Link>
                <Link
                  href="/learn/florida-hometown-heroes-income-limits"
                  className="text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
                >
                  Income limits
                </Link>
              </div>
            </article>
            <article className="rounded-lg border border-border-gray/70 bg-white p-6">
              <h3 className="text-[18px] font-black text-dark-green">
                FL Assist and Florida Housing options
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/62">
                Statewide Florida Housing programs can help buyers who fit the
                program rules, but the best fit often depends on the first
                mortgage, credit profile, and whether assistance is repayable or
                deferred.
              </p>
              <Link
                href="/learn/florida-assist-second-mortgage-program"
                className="mt-4 inline-flex text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Learn about FL Assist
              </Link>
            </article>
            <article className="rounded-lg border border-border-gray/70 bg-white p-6">
              <h3 className="text-[18px] font-black text-dark-green">
                Local grants and city assistance
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dark-green/62">
                Local programs may offer grants, deferred second mortgages,
                forgivable loans, or closing cost help. They can also have
                narrow boundaries and funding windows, which is why manual
                verification still matters.
              </p>
              <Link
                href="/learn/first-time-homebuyer/grants-and-programs"
                className="mt-4 inline-flex text-[14px] font-bold text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:text-dark-green"
              >
                Explore all Florida programs
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
