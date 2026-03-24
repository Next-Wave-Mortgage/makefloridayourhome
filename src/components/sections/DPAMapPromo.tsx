import Link from "next/link";
import countyPaths from "@/data/florida-county-paths.json";
import {
  getCountyPrograms,
  FLORIDA_COUNTIES,
} from "@/data/dpa-programs";

interface CountyPath {
  name: string;
  d: string;
  cx: number;
  cy: number;
}

const counties = countyPaths as CountyPath[];

/* Build a static program-count map at module level (server component) */
const countyProgramCounts = new Map<string, number>();
let maxCount = 0;
for (const county of FLORIDA_COUNTIES) {
  const count = getCountyPrograms(county).length;
  if (count > 0) {
    countyProgramCounts.set(county, count);
    if (count > maxCount) maxCount = count;
  }
}

function getOpacity(count: number): number {
  if (maxCount <= 1) return 0.7;
  return 0.3 + ((count - 1) / (maxCount - 1)) * 0.7;
}

const countyHighlights = [
  { county: "Miami-Dade", programs: countyProgramCounts.get("Miami-Dade") ?? 0 },
  { county: "Broward", programs: countyProgramCounts.get("Broward") ?? 0 },
  { county: "Orange", programs: countyProgramCounts.get("Orange") ?? 0 },
  { county: "Hillsborough", programs: countyProgramCounts.get("Hillsborough") ?? 0 },
  { county: "Duval", programs: countyProgramCounts.get("Duval") ?? 0 },
  { county: "Palm Beach", programs: countyProgramCounts.get("Palm Beach") ?? 0 },
];

export function DPAMapPromo() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/[0.02]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-green/[0.02]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              Interactive Tool
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              <span className="text-brand-green">105 Programs.</span>{" "}
              67 Counties.
              <br className="hidden sm:block" /> One Map.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px]">
              Florida has one of the most generous down payment assistance
              landscapes in the country — but every county is different. Our
              interactive map lets you instantly see which grants, forgivable
              loans, and deferred programs are available exactly where
              you&apos;re buying.
            </p>

            {/* County highlights */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {countyHighlights.map((item) => (
                <div
                  key={item.county}
                  className="rounded-xl border border-border-gray/60 bg-green-tint/50 px-3 py-3 text-center transition-colors hover:border-brand-green/30"
                >
                  <span className="block text-[22px] font-extrabold leading-none text-brand-green">
                    {item.programs}
                  </span>
                  <span className="mt-1.5 block text-[11px] font-medium leading-tight text-dark-green/50">
                    {item.county}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[13px] text-dark-green/40">
              Programs available per county — click the map to explore all 67
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/florida-down-payment-assistance-interactive-map"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              >
                Explore the Map
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <span className="text-[14px] text-dark-green/50">
                Free — no signup required
              </span>
            </div>
          </div>

          {/* Right — Real Florida county map preview */}
          <div className="relative">
            {/* Green accent shape behind card */}
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl bg-brand-green/[0.06]" />

            <Link
              href="/florida-down-payment-assistance-interactive-map"
              className="group relative block overflow-hidden rounded-2xl border border-border-gray/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,105,72,0.15)] hover:border-brand-green/30"
            >
              {/* Map preview using real GeoJSON county paths */}
              <div className="relative bg-green-tint px-4 pt-4 pb-2 sm:px-6 sm:pt-5">
                <svg
                  viewBox="20 50 760 680"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-full"
                  aria-hidden="true"
                >
                  {/* County shapes */}
                  {counties.map(({ name, d }) => {
                    const programCount = countyProgramCounts.get(name);
                    const hasPrograms =
                      programCount !== undefined && programCount > 0;

                    return (
                      <path
                        key={name}
                        d={d}
                        fill={hasPrograms ? "#006948" : "#F2FAF6"}
                        fillOpacity={hasPrograms ? getOpacity(programCount) : 1}
                        stroke="#DCDFDD"
                        strokeWidth={0.5}
                        strokeLinejoin="round"
                        className="transition-all duration-300 group-hover:stroke-[#006948]/20"
                      />
                    );
                  })}

                  {/* Program count dots */}
                  {counties.map(({ name, cx, cy }) => {
                    const programCount = countyProgramCounts.get(name);
                    if (!programCount || programCount < 1) return null;
                    if (isNaN(cx) || isNaN(cy)) return null;

                    const r = programCount > 1 ? 12 : 6;

                    return (
                      <g key={`dot-${name}`} className="pointer-events-none">
                        <circle
                          cx={cx}
                          cy={cy}
                          r={r}
                          fill="#FFFFFF"
                          stroke="#006948"
                          strokeWidth={1.5}
                          opacity={0.9}
                        />
                        {programCount > 1 && (
                          <text
                            x={cx}
                            y={cy}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="#006948"
                            fontSize="11"
                            fontWeight="700"
                          >
                            {programCount}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Card footer */}
              <div className="border-t border-border-gray/60 px-6 py-4 sm:px-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[15px] font-bold text-dark-green">
                      Florida DPA Interactive Map
                    </p>
                    <p className="mt-0.5 text-[13px] text-dark-green/50">
                      105 programs across 67 counties
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green transition-all duration-300 group-hover:bg-brand-green group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
