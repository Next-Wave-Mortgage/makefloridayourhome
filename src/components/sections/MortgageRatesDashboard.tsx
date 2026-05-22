import Image from "next/image";
import Link from "next/link";
import type {
  ChangeDirection,
  ChangePeriod,
  FloridaMarketMetric,
  MetricChange,
  MortgageMarketSnapshot,
  MortgageRateProduct,
  RateTrend,
} from "@/lib/rates";
import { mortgageRatesFaqs } from "@/lib/mortgage-rates-faq";
import { siteConfig } from "@/lib/site";

type MortgageRatesDashboardProps = {
  snapshot: MortgageMarketSnapshot;
};

const productNotes: Record<string, string> = {
  "30-year-fixed":
    "A common option if you want a predictable payment and a longer payoff timeline.",
  "15-year-fixed":
    "Often lower than a 30-year rate, but the monthly payment is usually higher.",
  "fha-30-year":
    "Worth comparing if you are buying with a smaller down payment or rebuilding credit.",
  "va-30-year":
    "A strong option to review if you are eligible through military service.",
  "jumbo-30-year":
    "Relevant when your loan amount is above standard conforming loan limits.",
  "usda-30-year":
    "May be useful for eligible buyers in qualifying rural or suburban areas.",
};

const rateFactors = [
  "Your credit score, income, and monthly debts",
  "How much you put down and how much cash you keep in reserve",
  "The loan type, term, points, and lender credits you choose",
  "Whether the home is a condo, primary residence, or second home",
  "Florida insurance, flood, HOA, and property tax costs",
  "When you lock the rate and how the market moves before closing",
];

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

function formatDateTime(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(date));
}

function formatMarketMetric(metric: FloridaMarketMetric): string {
  if (metric.unit === "dollars") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(metric.value);
  }

  if (metric.unit === "count") {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(metric.value);
  }

  return metric.value.toFixed(1);
}

function periodLabel(period: ChangePeriod): string {
  if (period === "1w") {
    return "1 week";
  }

  if (period === "1m") {
    return "1 month";
  }

  return "1 year";
}

function directionClass(direction: ChangeDirection): string {
  if (direction === "up") {
    return "text-red-700";
  }

  if (direction === "down") {
    return "text-brand-green";
  }

  return "text-dark-green/50";
}

function formatChange(change: MetricChange, suffix = " pts"): string {
  if (change.value === null) {
    return "Not enough history";
  }

  const sign = change.value > 0 ? "+" : "";
  return `${sign}${change.value.toFixed(2)}${suffix}`;
}

function ChangeBadge({
  change,
  suffix,
}: {
  change: MetricChange;
  suffix?: string;
}) {
  if (change.direction === "unavailable" || change.value === null) {
    return (
      <span className="inline-flex items-center text-[12px] font-bold text-dark-green/45">
        Not enough history
      </span>
    );
  }

  const movement =
    change.direction === "up"
      ? "Up"
      : change.direction === "down"
        ? "Down"
        : "Flat";

  return (
    <span
      className={`inline-flex items-center gap-1 text-[12px] font-bold ${directionClass(
        change.direction,
      )}`}
    >
      <span>{movement}</span>
      {formatChange(change, suffix)}
    </span>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/home-purchase-eligibility"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-5 py-3 text-[14px] font-bold text-white transition hover:bg-dark-green ${className}`}
    >
      Get your personalized Florida rate
      <span aria-hidden="true">-&gt;</span>
    </Link>
  );
}

function RateRow({ product }: { product: MortgageRateProduct }) {
  const oneWeek = product.changes.find((change) => change.period === "1w");
  const oneMonth = product.changes.find((change) => change.period === "1m");
  const oneYear = product.changes.find((change) => change.period === "1y");

  return (
    <article className="group overflow-hidden rounded-lg border border-border-gray bg-white shadow-[0_10px_32px_rgba(46,65,54,0.05)] transition hover:border-brand-green/35 hover:shadow-[0_18px_44px_rgba(46,65,54,0.1)]">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr_1.1fr_190px]">
        <div className="border-b border-border-gray p-5 lg:border-r lg:border-b-0">
          <div className="mb-4 h-1.5 w-14 rounded-full bg-brand-green" />
          <h3 className="text-[18px] font-bold text-dark-green">
            {product.label}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px] text-dark-green/50">
            <span>
              {product.frequency === "daily"
                ? "Updated daily"
                : "Updated weekly"}
            </span>
            <span aria-hidden="true">/</span>
            <span>Effective {formatDate(product.effectiveDate)}</span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-dark-green/60">
            {productNotes[product.id]}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 border-b border-border-gray bg-green-tint/55 p-5 lg:block lg:border-r lg:border-b-0">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
              Today&apos;s rate
            </p>
            <p className="mt-2 text-[42px] font-bold leading-none text-dark-green">
              {formatPercent(product.rate)}
            </p>
          </div>
          {oneWeek ? (
            <div className="rounded-md bg-white px-2.5 py-1 lg:mt-4 lg:inline-flex">
              <ChangeBadge change={oneWeek} />
            </div>
          ) : null}
        </div>

        <div className="space-y-3 border-b border-border-gray p-5 lg:border-r lg:border-b-0">
          <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
            Movement
          </p>
          {oneWeek ? <TrendChangeRow change={oneWeek} /> : null}
          {oneMonth ? <TrendChangeRow change={oneMonth} /> : null}
          {oneYear ? <TrendChangeRow change={oneYear} /> : null}
        </div>

        <div className="flex flex-col justify-center p-5">
          <p className="mb-4 text-[12px] leading-relaxed text-dark-green/50">
            Compare this market number with your actual credit, down payment,
            property, and timing.
          </p>
          <Link
            href="/home-purchase-eligibility"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-green/20 bg-brand-green px-4 py-3 text-[13px] font-bold text-white transition hover:bg-dark-green"
          >
            Get your rate
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function changeBarWidth(change: MetricChange): string {
  if (change.value === null) {
    return "0%";
  }

  return `${Math.min(Math.abs(change.value) * 180, 100)}%`;
}

function TrendChangeRow({ change }: { change: MetricChange }) {
  const isUp = change.direction === "up";
  const isDown = change.direction === "down";
  const label = periodLabel(change.period);
  const colorClass = isUp
    ? "bg-red-600"
    : isDown
      ? "bg-brand-green"
      : "bg-dark-green/30";
  const textClass = isUp
    ? "text-red-700"
    : isDown
      ? "text-brand-green"
      : "text-dark-green/50";

  return (
    <div className="grid grid-cols-[64px_1fr_86px] items-center gap-3">
      <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
        {label}
      </p>
      <div className="h-2 overflow-hidden rounded-full bg-green-tint">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: changeBarWidth(change) }}
        />
      </div>
      <p className={`text-right text-[12px] font-bold ${textClass}`}>
        {formatChange(change)}
      </p>
    </div>
  );
}

function formatShortDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

function RateHistoryChart({ trend }: { trend: RateTrend }) {
  const points = trend.points;
  const rates = points.map((point) => point.rate);
  const latest = points.at(-1);
  const earliest = points[0];
  const high = Math.max(...rates);
  const low = Math.min(...rates);
  const padding = Math.max((high - low) * 0.16, 0.25);
  const minRate = low - padding;
  const maxRate = high + padding;
  const width = 1000;
  const height = 360;
  const chartTop = 34;
  const chartRight = 30;
  const chartBottom = 54;
  const chartLeft = 56;
  const chartWidth = width - chartLeft - chartRight;
  const chartHeight = height - chartTop - chartBottom;
  const xForIndex = (index: number) =>
    chartLeft + (index / Math.max(points.length - 1, 1)) * chartWidth;
  const yForRate = (rate: number) =>
    chartTop + ((maxRate - rate) / (maxRate - minRate)) * chartHeight;
  const linePath = points
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command}${xForIndex(index).toFixed(1)},${yForRate(point.rate).toFixed(1)}`;
    })
    .join(" ");
  const areaPath = `${linePath} L${chartLeft + chartWidth},${chartTop + chartHeight} L${chartLeft},${chartTop + chartHeight} Z`;
  const highPoint = points.find((point) => point.rate === high) ?? latest;
  const lowPoint = points.find((point) => point.rate === low) ?? earliest;
  const threeYearChange =
    latest && earliest ? Number((latest.rate - earliest.rate).toFixed(2)) : 0;
  const changeDirection =
    Math.abs(threeYearChange) < 0.01
      ? "flat"
      : threeYearChange > 0
        ? "up"
        : "down";
  const changeClass =
    changeDirection === "up"
      ? "text-red-700"
      : changeDirection === "down"
        ? "text-brand-green"
        : "text-dark-green/55";
  const xLabels = [
    points[0],
    points[Math.floor(points.length / 2)],
    points[points.length - 1],
  ].filter((point): point is RateTrend["points"][number] => Boolean(point));

  return (
    <div className="overflow-hidden rounded-lg border border-border-gray bg-white shadow-[0_22px_60px_rgba(46,65,54,0.08)]">
      <div className="grid gap-0 lg:grid-cols-[1fr_260px]">
        <div className="p-5 sm:p-6">
          <div className="mb-5 flex flex-col justify-between gap-4 border-b border-border-gray pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
                {trend.label}
              </p>
              <p className="mt-1 text-[14px] text-dark-green/55">
                Weekly national benchmark data from Freddie Mac PMMS via FRED.
              </p>
            </div>
            {latest ? (
              <div className="rounded-lg bg-green-tint px-4 py-3 sm:text-right">
                <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
                  Latest
                </p>
                <p className="mt-1 text-[26px] font-bold leading-none text-dark-green">
                  {formatPercent(latest.rate)}
                </p>
                <p className="mt-1 text-[12px] text-dark-green/50">
                  {formatDate(latest.date)}
                </p>
              </div>
            ) : null}
          </div>

          <div className="w-full overflow-hidden">
            <svg
              aria-label="Three-year 30-year fixed mortgage rate trend"
              className="h-auto w-full"
              role="img"
              viewBox={`0 0 ${width} ${height}`}
            >
              <defs>
                <linearGradient id="rateTrendFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#006948" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#006948" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                const y = chartTop + ratio * chartHeight;
                const rate = maxRate - ratio * (maxRate - minRate);
                return (
                  <g key={ratio}>
                    <line
                      stroke="#dcdfdd"
                      strokeDasharray={ratio === 1 ? "0" : "4 7"}
                      x1={chartLeft}
                      x2={chartLeft + chartWidth}
                      y1={y}
                      y2={y}
                    />
                    <text
                      fill="rgba(46,65,54,0.52)"
                      fontSize="13"
                      fontWeight="700"
                      x={chartLeft - 12}
                      y={y + 4}
                      textAnchor="end"
                    >
                      {rate.toFixed(1)}%
                    </text>
                  </g>
                );
              })}
              <path d={areaPath} fill="url(#rateTrendFill)" />
              <path
                d={linePath}
                fill="none"
                stroke="#006948"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
              {highPoint ? (
                <circle
                  cx={xForIndex(points.indexOf(highPoint))}
                  cy={yForRate(highPoint.rate)}
                  fill="#b91c1c"
                  r="6"
                />
              ) : null}
              {lowPoint ? (
                <circle
                  cx={xForIndex(points.indexOf(lowPoint))}
                  cy={yForRate(lowPoint.rate)}
                  fill="#006948"
                  r="6"
                />
              ) : null}
              {latest ? (
                <circle
                  cx={xForIndex(points.length - 1)}
                  cy={yForRate(latest.rate)}
                  fill="white"
                  r="8"
                  stroke="#006948"
                  strokeWidth="4"
                />
              ) : null}
              {xLabels.map((point) => (
                <text
                  fill="rgba(46,65,54,0.52)"
                  fontSize="13"
                  fontWeight="700"
                  key={point.date}
                  textAnchor={
                    point === points[0]
                      ? "start"
                      : point === points[points.length - 1]
                        ? "end"
                        : "middle"
                  }
                  x={xForIndex(points.indexOf(point))}
                  y={height - 18}
                >
                  {formatShortDate(point.date)}
                </text>
              ))}
            </svg>
          </div>
        </div>

        <div className="border-t border-border-gray bg-green-tint p-5 lg:border-t-0 lg:border-l">
          <div className="grid gap-3">
            <div className="rounded-lg bg-white p-4">
              <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
                3-year change
              </p>
              <p className={`mt-2 text-[24px] font-bold ${changeClass}`}>
                {threeYearChange > 0 ? "+" : ""}
                {threeYearChange.toFixed(2)} pts
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
                3-year high
              </p>
              <p className="mt-2 text-[24px] font-bold text-dark-green">
                {formatPercent(high)}
              </p>
              {highPoint ? (
                <p className="mt-1 text-[12px] text-dark-green/50">
                  {formatDate(highPoint.date)}
                </p>
              ) : null}
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
                3-year low
              </p>
              <p className="mt-2 text-[24px] font-bold text-brand-green">
                {formatPercent(low)}
              </p>
              {lowPoint ? (
                <p className="mt-1 text-[12px] text-dark-green/50">
                  {formatDate(lowPoint.date)}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-dark-green/55">
            This chart is a national benchmark, not a Florida-specific lender
            quote or offer of credit.
          </p>
        </div>
      </div>
    </div>
  );
}

function MarketMetricCard({ metric }: { metric: FloridaMarketMetric }) {
  const oneYear = metric.changes.find((change) => change.period === "1y");

  return (
    <article className="rounded-lg border border-border-gray bg-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-wide text-dark-green/45">
        {metric.label}
      </p>
      <p className="mt-3 text-[30px] font-bold text-dark-green">
        {formatMarketMetric(metric)}
      </p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[12px] text-dark-green/50">
          {formatDate(metric.effectiveDate)}
        </p>
        {oneYear ? <ChangeBadge change={oneYear} suffix="" /> : null}
      </div>
      <p className="mt-3 text-[12px] text-dark-green/45">
        {metric.seriesId} - {metric.frequency}
      </p>
    </article>
  );
}

function MortgageRatesFaqSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
            Mortgage rate FAQ
          </p>
          <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
            Florida Mortgage Rate Questions
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-dark-green/60">
            Straight answers to common mortgage-rate questions that do not
            depend on today&apos;s market data.
          </p>
        </div>

        <div className="mt-8 divide-y divide-border-gray overflow-hidden rounded-lg border border-border-gray bg-white shadow-[0_18px_50px_rgba(46,65,54,0.06)]">
          {mortgageRatesFaqs.map((faq, index) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 marker:hidden sm:px-6">
                <div className="flex items-center gap-4">
                  <span className="hidden text-[13px] font-bold text-brand-green/45 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15px] font-bold leading-snug text-dark-green sm:text-[16px]">
                    {faq.question}
                  </h3>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-tint text-[18px] font-bold text-brand-green transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-6 sm:px-6 sm:pl-[4.35rem]">
                <p className="max-w-4xl text-[14px] leading-relaxed text-dark-green/60 sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MortgageRatesDashboard({
  snapshot,
}: MortgageRatesDashboardProps) {
  const primaryBenchmark = snapshot.benchmarks[0];
  const retrievedAt = formatDateTime(snapshot.retrievedAt);

  return (
    <>
      <style>
        {`
          @keyframes rate-card-sheen {
            0%, 42% {
              transform: translateX(-130%) skewX(-18deg);
              opacity: 0;
            }
            52% {
              opacity: 1;
            }
            68%, 100% {
              transform: translateX(320%) skewX(-18deg);
              opacity: 0;
            }
          }
        `}
      </style>
      <section className="border-b border-border-gray bg-green-tint py-8 sm:py-9">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-brand-green/20 bg-white px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-brand-green">
                Florida homebuyer rate watch
              </span>
              <span className="rounded-md border border-border-gray bg-white px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-dark-green/55">
                Updated {retrievedAt}
              </span>
            </div>
            <h1 className="max-w-4xl text-[32px] font-bold leading-tight text-dark-green sm:text-[42px] lg:text-[50px]">
              Florida Mortgage Rates
            </h1>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-dark-green/65">
              See where mortgage rates are today, what is changing, and what it
              could mean for buying a home in Florida. When you are ready, we
              can price your actual scenario.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryCta />
              <Link
                href="#methodology"
                className="inline-flex items-center justify-center rounded-lg border border-border-gray bg-white px-5 py-3 text-[14px] font-bold text-dark-green transition hover:border-brand-green hover:text-brand-green"
              >
                See how rates are shown
              </Link>
            </div>
          </div>

          <aside className="group relative overflow-hidden rounded-lg border border-brand-green/30 bg-brand-green p-1 shadow-[0_24px_70px_rgba(0,105,72,0.22)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0)_34%,rgba(0,0,0,0.08)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] bg-[length:18px_18px] opacity-25" />
            <div className="pointer-events-none absolute top-0 h-full w-24 bg-white/18 blur-sm [animation:rate-card-sheen_6.5s_ease-in-out_infinite]" />
            <div className="relative rounded-[7px] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] p-4 text-white sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/75">
                    Featured rate
                  </p>
                  <h2 className="mt-2 text-[18px] font-bold text-white">
                    {primaryBenchmark?.label ?? "30-Year Fixed"}
                  </h2>
                  <p className="mt-1 text-[12px] text-white/72">
                    Updated weekly
                  </p>
                </div>
                <span className="rounded-md border border-white/20 bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white/85 backdrop-blur">
                  Rate watch
                </span>
              </div>

              <div className="mt-4">
                <p className="text-[48px] font-bold leading-none tracking-tight text-white sm:text-[56px]">
                  {primaryBenchmark
                    ? formatPercent(primaryBenchmark.rate)
                    : "--"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white px-3 py-1.5 text-[12px] font-bold text-dark-green">
                    Effective{" "}
                    {primaryBenchmark
                      ? formatDate(primaryBenchmark.effectiveDate)
                      : "--"}
                  </span>
                  <span className="rounded-md border border-white/20 bg-white/15 px-3 py-1.5 text-[12px] font-bold text-white/90">
                    30-year fixed
                  </span>
                </div>
              </div>

              <p className="mt-3 border-t border-white/20 pt-3 text-[12px] leading-relaxed text-white/78">
                The number most buyers check first. Your actual rate depends on
                the full loan scenario.
              </p>

              <Link
                href="/home-purchase-eligibility"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14px] font-bold text-dark-green transition hover:bg-green-tint"
              >
                Get your actual rate
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border-gray bg-white py-[18px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <article className="relative overflow-hidden rounded-lg border border-brand-green/20 bg-white p-4 shadow-[0_18px_50px_rgba(46,65,54,0.07)] sm:p-5">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-green" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,105,72,0.08),rgba(242,250,246,0.72)_42%,rgba(255,255,255,0)_78%)]" />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
              <div className="relative flex min-w-[260px] items-center gap-4 pl-1">
                <div className="relative shrink-0 rounded-full bg-white p-1 shadow-[0_10px_24px_rgba(46,65,54,0.14)]">
                  <Image
                    src="/images/team/phil-ganz.webp"
                    alt="Phil Ganz"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <span className="absolute right-0 bottom-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-brand-green text-[10px] font-bold text-white">
                    P
                  </span>
                </div>
                <div>
                  <p className="inline-flex rounded-md bg-brand-green px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                    Phil&apos;s opinion
                  </p>
                  <h2 className="mt-1 text-[18px] font-bold leading-tight text-dark-green">
                    What Phil thinks about these rates
                  </h2>
                  <Link
                    href="/team/phil-ganz"
                    className="mt-1 inline-flex text-[13px] font-bold text-brand-green underline underline-offset-2 transition hover:text-dark-green"
                  >
                    Phil Ganz
                  </Link>
                  <p className="text-[12px] leading-relaxed text-dark-green/50">
                    Florida Mortgage Expert · Thousands of first-time home
                    buyers helped
                  </p>
                </div>
              </div>

              <div className="relative border-t border-brand-green/15 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-1 right-0 hidden text-[54px] font-bold leading-none text-brand-green/10 lg:block"
                >
                  &ldquo;
                </span>
                <h3 className="text-[17px] font-bold text-dark-green">
                  {snapshot.marketNote.headline}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-dark-green/65">
                  {snapshot.marketNote.body}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
                Today&apos;s rate picture
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
                Compare common loan options
              </h2>
            </div>
            <p className="max-w-xl text-[14px] leading-relaxed text-dark-green/55">
              Check today&apos;s rate picture across common loan options, then
              compare it with your exact loan scenario.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[...snapshot.dailyIndices, ...snapshot.benchmarks].map(
              (product) => (
                <RateRow
                  key={`${product.seriesId}-${product.rateType}`}
                  product={product}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-border-gray bg-green-tint py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
              Three-year rate view
            </p>
            <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
              Where today&apos;s 30-year rate sits in recent history
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-dark-green/60">
              Short-term moves can feel noisy. This chart shows the national
              30-year fixed benchmark over the last three years, so you can see
              today&apos;s rate with more context.
            </p>
          </div>
          <div className="mt-6">
            <RateHistoryChart trend={snapshot.rateTrend} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
                Florida market context
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
                The rate is only part of the payment
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-dark-green/60">
                In Florida, the home price, insurance, property taxes, HOA dues,
                and available inventory can matter as much as the rate. This
                view helps put the payment conversation in context.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {snapshot.floridaMarket.map((metric) => (
                <MarketMetricCard key={metric.seriesId} metric={metric} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border-gray bg-green-tint py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
                What changes your rate?
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
                Why your rate may be different
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-dark-green/60">
                Two buyers can see the same market and qualify for different
                rates. These are the details that usually move your pricing up
                or down.
              </p>
              <PrimaryCta className="mt-6" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {rateFactors.map((factor, index) => (
                <div
                  key={factor}
                  className="rounded-lg border border-border-gray bg-white p-4"
                >
                  <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-md bg-brand-green text-[14px] font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-[14px] font-bold leading-snug text-dark-green">
                    {factor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-5xl">
            <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
              Mortgage options in Florida
            </p>
            <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
              The right rate depends on the loan type too
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-dark-green/64">
              <p>
                The rate you see for a 30-year mortgage is useful, but it does
                not tell the whole story. A Florida buyer using a{" "}
                <Link
                  href="/learn/conventional-mortgages-in-florida"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  conventional mortgage
                </Link>{" "}
                may be looking at different credit, down payment, and mortgage
                insurance rules than someone comparing an{" "}
                <Link
                  href="/home-loan/fha-loan"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  FHA loan
                </Link>
                .
              </p>
              <p>
                Eligible veterans and service members should also compare{" "}
                <Link
                  href="/check-va-loan-eligibility"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  VA loan eligibility
                </Link>
                , especially when preserving cash is important. Buyers looking
                outside dense metro areas may want to review{" "}
                <Link
                  href="/learn/usda-loans-florida"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  USDA loans in Florida
                </Link>
                , since some rural and suburban areas may qualify for zero-down
                financing.
              </p>
              <p>
                In higher-priced Florida markets, jumbo financing can become
                part of the conversation when the loan amount rises above
                conforming limits. The best next step is to compare the loan
                type, cash-to-close, mortgage insurance, and payment together,
                not just the headline rate. For a broader overview, see our{" "}
                <Link
                  href="/home-loan"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  Florida home loan options
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border-gray bg-green-tint py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-5xl">
            <p className="text-[12px] font-bold uppercase tracking-wide text-brand-green">
              First-time buyer help
            </p>
            <h2 className="mt-2 text-[28px] font-bold text-dark-green sm:text-[34px]">
              Florida assistance can change the whole payment conversation
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-dark-green/64">
              <p>
                A lot of Florida buyers are not just trying to find a lower
                rate. They are trying to solve the upfront-cost problem. That is
                where{" "}
                <Link
                  href="/down-payment-assistance"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  Florida down payment assistance
                </Link>
                ,{" "}
                <Link
                  href="/first-time-home-buyer"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  first-time homebuyer programs
                </Link>
                , and county-specific options can matter as much as the rate
                itself.
              </p>
              <p>
                Depending on your job, income, location, and loan type, programs
                such as{" "}
                <Link
                  href="/hometown-heroes"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  Florida Hometown Heroes
                </Link>{" "}
                or{" "}
                <Link
                  href="/learn/florida-assist-second-mortgage-program"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  Florida Assist
                </Link>{" "}
                may help reduce the money needed at closing. The details matter,
                because assistance programs can have income limits, purchase
                price limits, funding windows, and approved-lender rules.
              </p>
              <p>
                If you want to research further, start with our{" "}
                <Link
                  href="/learn/first-time-homebuyer/grants-and-programs"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  guide to Florida grants and first-time buyer programs
                </Link>
                , then use the{" "}
                <Link
                  href="/florida-down-payment-assistance-interactive-map"
                  className="font-bold text-brand-green underline underline-offset-2 hover:text-dark-green"
                >
                  county assistance map
                </Link>{" "}
                to see which local programs may be worth checking.
              </p>
            </div>
            <PrimaryCta className="mt-6" />
          </div>
        </div>
      </section>

      <section
        id="methodology"
        className="border-t border-border-gray bg-[linear-gradient(180deg,#f2faf6_0%,#ffffff_100%)] py-12 sm:py-16"
      >
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-lg bg-brand-green p-6 text-white shadow-[0_24px_70px_rgba(0,105,72,0.18)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0)_46%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <p className="text-[12px] font-bold uppercase tracking-wide text-white/65">
                Sources and details
              </p>
              <h2 className="mt-2 max-w-md text-[28px] font-bold leading-tight text-white sm:text-[34px]">
                Where these numbers come from
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/72">
                Every rate and housing number on this page comes from public
                market data. We show the source and update timing so you can see
                what changed and when.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/55">
                    Refresh cycle
                  </p>
                  <p className="mt-2 text-[15px] font-bold text-white">
                    Automatic
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/55">
                    Last checked
                  </p>
                  <p className="mt-2 text-[15px] font-bold text-white">
                    {retrievedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {snapshot.sources.map((source, index) => (
              <article
                key={source.id}
                className="group overflow-hidden rounded-lg border border-border-gray bg-white shadow-[0_10px_30px_rgba(46,65,54,0.05)] transition hover:border-brand-green/35 hover:shadow-[0_18px_42px_rgba(46,65,54,0.09)]"
              >
                <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-tint text-[13px] font-bold text-brand-green ring-1 ring-brand-green/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-dark-green">
                        {source.label}
                      </p>
                      <p className="mt-1 text-[12px] uppercase tracking-wide text-dark-green/45">
                        {source.updateFrequency} source
                      </p>
                    </div>
                  </div>
                  <Link
                    href={source.sourceUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-green/15 px-3 py-2 text-[13px] font-bold text-brand-green transition group-hover:border-brand-green/30 group-hover:bg-green-tint hover:text-dark-green"
                  >
                    View source
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
            <div className="relative overflow-hidden rounded-lg border border-brand-green/20 bg-green-tint p-5">
              <div className="absolute top-0 left-0 h-full w-1 bg-brand-green" />
              <div className="pl-3">
                <p className="text-[13px] font-bold uppercase tracking-wide text-brand-green">
                  Important disclosure
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-dark-green/62">
                  {snapshot.disclaimer}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-dark-green/62">
                  {siteConfig.company} NMLS #{siteConfig.contact.nmls}. Contact
                  a licensed mortgage professional for a personalized Florida
                  loan estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MortgageRatesFaqSection />
    </>
  );
}
