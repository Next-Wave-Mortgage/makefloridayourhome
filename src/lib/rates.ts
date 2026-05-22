import { unstable_cache } from "next/cache";
import { generateMarketNote, type MarketNote } from "@/lib/rate-market-note";

export type RateProductId =
  | "30-year-fixed"
  | "15-year-fixed"
  | "fha-30-year"
  | "va-30-year"
  | "jumbo-30-year"
  | "usda-30-year";

export type FloridaMarketMetricId =
  | "median-listing-price"
  | "active-listing-count"
  | "florida-home-price-index";

export type FredSeriesId =
  | "MORTGAGE30US"
  | "MORTGAGE15US"
  | "OBMMIC30YF"
  | "OBMMIC15YF"
  | "OBMMIFHA30YF"
  | "OBMMIVA30YF"
  | "OBMMIJUMBO30YF"
  | "OBMMIUSDA30YF"
  | "MEDLISPRIFL"
  | "ACTLISCOUFL"
  | "FLSTHPI";

export type ChangePeriod = "1w" | "1m" | "1y";
export type ChangeDirection = "up" | "down" | "flat" | "unavailable";

export type MetricChange = {
  period: ChangePeriod;
  value: number | null;
  direction: ChangeDirection;
};

export type SnapshotSource = {
  id: "freddie-mac-pmms" | "optimal-blue-obmmi" | "fred-florida-housing";
  label: string;
  sourceUrl: string;
  updateFrequency: "weekly" | "daily" | "monthly" | "quarterly";
};

export type MortgageRateProduct = {
  id: RateProductId;
  label: string;
  seriesId: FredSeriesId;
  rate: number;
  effectiveDate: string;
  sourceId: SnapshotSource["id"];
  frequency: "weekly" | "daily";
  geography: "United States";
  rateType: "benchmark_average" | "rate_lock_index";
  changes: MetricChange[];
};

export type FloridaMarketMetric = {
  id: FloridaMarketMetricId;
  label: string;
  seriesId: FredSeriesId;
  value: number;
  effectiveDate: string;
  sourceId: "fred-florida-housing";
  frequency: "monthly" | "quarterly";
  geography: "Florida";
  unit: "dollars" | "count" | "index";
  changes: MetricChange[];
};

export type RateTrendPoint = {
  date: string;
  rate: number;
};

export type RateTrend = {
  id: "30-year-fixed-3y";
  label: string;
  seriesId: "MORTGAGE30US";
  sourceId: "freddie-mac-pmms";
  geography: "United States";
  rateType: "benchmark_average";
  period: "3y";
  points: RateTrendPoint[];
};

export type MortgageMarketSnapshot = {
  retrievedAt: string;
  effectiveDate: string;
  benchmarks: MortgageRateProduct[];
  dailyIndices: MortgageRateProduct[];
  floridaMarket: FloridaMarketMetric[];
  rateTrend: RateTrend;
  marketNote: MarketNote;
  sources: SnapshotSource[];
  disclaimer: string;
};

type FredObservation = {
  date?: unknown;
  value?: unknown;
};

type FredObservationsResponse = {
  observations?: unknown;
};

type ParsedObservation = {
  date: string;
  value: number;
};

type RateSeriesConfig = {
  id: RateProductId;
  label: string;
  seriesId: FredSeriesId;
  sourceId: SnapshotSource["id"];
  frequency: "weekly" | "daily";
  rateType: MortgageRateProduct["rateType"];
};

type MarketSeriesConfig = {
  id: FloridaMarketMetricId;
  label: string;
  seriesId: FredSeriesId;
  frequency: "monthly" | "quarterly";
  unit: FloridaMarketMetric["unit"];
};

const FRED_API_BASE = "https://api.stlouisfed.org/fred/series/observations";
const FRED_SERIES_BASE = "https://fred.stlouisfed.org/series";
const DISCLAIMER =
  "Benchmark and index values are for informational purposes only and are not a loan estimate, commitment to lend, APR quote, or offer of credit. Your actual rate and APR depend on credit, loan program, property type, down payment, points, occupancy, underwriting, and market conditions.";

export const MORTGAGE_RATES_CACHE_TAG = "mortgage-rates";
export const MORTGAGE_RATES_REVALIDATE_SECONDS = 60 * 60 * 12;

const SOURCES: SnapshotSource[] = [
  {
    id: "freddie-mac-pmms",
    label: "Freddie Mac PMMS via FRED",
    sourceUrl: `${FRED_SERIES_BASE}/MORTGAGE30US`,
    updateFrequency: "weekly",
  },
  {
    id: "optimal-blue-obmmi",
    label: "Optimal Blue Mortgage Market Indices via FRED",
    sourceUrl: `${FRED_SERIES_BASE}/OBMMIC30YF`,
    updateFrequency: "daily",
  },
  {
    id: "fred-florida-housing",
    label: "Florida housing market data via FRED",
    sourceUrl: `${FRED_SERIES_BASE}/MEDLISPRIFL`,
    updateFrequency: "monthly",
  },
];

const BENCHMARK_SERIES: RateSeriesConfig[] = [
  {
    id: "30-year-fixed",
    label: "30-Year Fixed",
    seriesId: "MORTGAGE30US",
    sourceId: "freddie-mac-pmms",
    frequency: "weekly",
    rateType: "benchmark_average",
  },
  {
    id: "15-year-fixed",
    label: "15-Year Fixed",
    seriesId: "MORTGAGE15US",
    sourceId: "freddie-mac-pmms",
    frequency: "weekly",
    rateType: "benchmark_average",
  },
];

const DAILY_INDEX_SERIES: RateSeriesConfig[] = [
  {
    id: "30-year-fixed",
    label: "30-Year Conforming",
    seriesId: "OBMMIC30YF",
    sourceId: "optimal-blue-obmmi",
    frequency: "daily",
    rateType: "rate_lock_index",
  },
  {
    id: "15-year-fixed",
    label: "15-Year Conforming",
    seriesId: "OBMMIC15YF",
    sourceId: "optimal-blue-obmmi",
    frequency: "daily",
    rateType: "rate_lock_index",
  },
  {
    id: "fha-30-year",
    label: "30-Year FHA",
    seriesId: "OBMMIFHA30YF",
    sourceId: "optimal-blue-obmmi",
    frequency: "daily",
    rateType: "rate_lock_index",
  },
  {
    id: "va-30-year",
    label: "30-Year VA",
    seriesId: "OBMMIVA30YF",
    sourceId: "optimal-blue-obmmi",
    frequency: "daily",
    rateType: "rate_lock_index",
  },
  {
    id: "jumbo-30-year",
    label: "30-Year Jumbo",
    seriesId: "OBMMIJUMBO30YF",
    sourceId: "optimal-blue-obmmi",
    frequency: "daily",
    rateType: "rate_lock_index",
  },
  {
    id: "usda-30-year",
    label: "30-Year USDA",
    seriesId: "OBMMIUSDA30YF",
    sourceId: "optimal-blue-obmmi",
    frequency: "daily",
    rateType: "rate_lock_index",
  },
];

const FLORIDA_MARKET_SERIES: MarketSeriesConfig[] = [
  {
    id: "median-listing-price",
    label: "Median Listing Price",
    seriesId: "MEDLISPRIFL",
    frequency: "monthly",
    unit: "dollars",
  },
  {
    id: "active-listing-count",
    label: "Active Listings",
    seriesId: "ACTLISCOUFL",
    frequency: "monthly",
    unit: "count",
  },
  {
    id: "florida-home-price-index",
    label: "Florida Home Price Index",
    seriesId: "FLSTHPI",
    frequency: "quarterly",
    unit: "index",
  },
];

function getFredApiKey(): string {
  const key = process.env.FRED_API_KEY?.trim();

  if (!key) {
    throw new Error("FRED_API_KEY is required to fetch mortgage rates");
  }

  return key;
}

function latestCommonDate(groups: Array<{ effectiveDate: string }[]>): string {
  const dates = groups
    .flat()
    .map((item) => item.effectiveDate)
    .sort();

  const latest = dates.at(-1);
  if (!latest) {
    throw new Error("Mortgage market snapshot has no effective dates");
  }

  return latest;
}

function daysAgo(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() - days);
  return next;
}

function parseFredObservation(
  seriesId: FredSeriesId,
  observation: FredObservation,
): ParsedObservation | null {
  if (typeof observation.date !== "string") {
    throw new Error(`FRED returned an invalid date for ${seriesId}`);
  }

  if (typeof observation.value !== "string") {
    throw new Error(`FRED returned an invalid value for ${seriesId}`);
  }

  if (observation.value === ".") {
    return null;
  }

  const value = Number(observation.value);
  if (!Number.isFinite(value)) {
    throw new Error(`FRED returned a non-numeric value for ${seriesId}`);
  }

  return {
    date: observation.date,
    value,
  };
}

export function normalizeFredObservations(
  seriesId: FredSeriesId,
  payload: FredObservationsResponse,
): ParsedObservation[] {
  if (
    !Array.isArray(payload.observations) ||
    payload.observations.length === 0
  ) {
    throw new Error(`FRED returned no observations for ${seriesId}`);
  }

  const observations = payload.observations
    .map((observation) =>
      parseFredObservation(seriesId, observation as FredObservation),
    )
    .filter((observation): observation is ParsedObservation =>
      Boolean(observation),
    );

  if (observations.length === 0) {
    throw new Error(`FRED returned no numeric observations for ${seriesId}`);
  }

  return observations;
}

export function normalizeFredObservation(
  series: RateSeriesConfig,
  payload: FredObservationsResponse,
): MortgageRateProduct {
  const observations = normalizeFredObservations(series.seriesId, payload);
  return createRateProduct(series, observations);
}

function calculateChanges(observations: ParsedObservation[]): MetricChange[] {
  const latest = observations[0];
  const latestDate = new Date(`${latest.date}T00:00:00.000Z`);
  const periods: Array<{ period: ChangePeriod; days: number }> = [
    { period: "1w", days: 7 },
    { period: "1m", days: 30 },
    { period: "1y", days: 365 },
  ];

  return periods.map(({ period, days }) => {
    const targetDate = daysAgo(latestDate, days);
    const comparison = observations.find(
      (observation) =>
        new Date(`${observation.date}T00:00:00.000Z`) <= targetDate,
    );

    if (!comparison) {
      return { period, value: null, direction: "unavailable" };
    }

    const value = Number((latest.value - comparison.value).toFixed(3));
    const direction =
      Math.abs(value) < 0.005 ? "flat" : value > 0 ? "up" : "down";

    return { period, value, direction };
  });
}

function createRateProduct(
  series: RateSeriesConfig,
  observations: ParsedObservation[],
): MortgageRateProduct {
  const latest = observations[0];

  return {
    id: series.id,
    label: series.label,
    seriesId: series.seriesId,
    rate: latest.value,
    effectiveDate: latest.date,
    sourceId: series.sourceId,
    frequency: series.frequency,
    geography: "United States",
    rateType: series.rateType,
    changes: calculateChanges(observations),
  };
}

function createMarketMetric(
  series: MarketSeriesConfig,
  observations: ParsedObservation[],
): FloridaMarketMetric {
  const latest = observations[0];

  return {
    id: series.id,
    label: series.label,
    seriesId: series.seriesId,
    value: latest.value,
    effectiveDate: latest.date,
    sourceId: "fred-florida-housing",
    frequency: series.frequency,
    geography: "Florida",
    unit: series.unit,
    changes: calculateChanges(observations),
  };
}

function createThirtyYearTrend(observations: ParsedObservation[]): RateTrend {
  const latest = observations[0];
  const latestDate = new Date(`${latest.date}T00:00:00.000Z`);
  const startDate = new Date(latestDate);
  startDate.setUTCFullYear(startDate.getUTCFullYear() - 3);

  const points = observations
    .filter(
      (observation) =>
        new Date(`${observation.date}T00:00:00.000Z`) >= startDate,
    )
    .map((observation) => ({
      date: observation.date,
      rate: observation.value,
    }))
    .reverse();

  if (points.length < 12) {
    throw new Error("FRED returned too little history for 30-year rate trend");
  }

  return {
    id: "30-year-fixed-3y",
    label: "30-Year Fixed Mortgage Rate Trend",
    seriesId: "MORTGAGE30US",
    sourceId: "freddie-mac-pmms",
    geography: "United States",
    rateType: "benchmark_average",
    period: "3y",
    points,
  };
}

async function fetchFredObservations(
  seriesId: FredSeriesId,
  apiKey: string,
): Promise<ParsedObservation[]> {
  const params = new URLSearchParams({
    series_id: seriesId,
    api_key: apiKey,
    file_type: "json",
    sort_order: "desc",
    limit: "400",
  });

  const response = await fetch(`${FRED_API_BASE}?${params}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`FRED request failed for ${seriesId}: ${response.status}`);
  }

  const payload = (await response.json()) as FredObservationsResponse;
  return normalizeFredObservations(seriesId, payload);
}

async function fetchRateProduct(
  series: RateSeriesConfig,
  apiKey: string,
): Promise<MortgageRateProduct> {
  return createRateProduct(
    series,
    await fetchFredObservations(series.seriesId, apiKey),
  );
}

async function fetchMarketMetric(
  series: MarketSeriesConfig,
  apiKey: string,
): Promise<FloridaMarketMetric> {
  return createMarketMetric(
    series,
    await fetchFredObservations(series.seriesId, apiKey),
  );
}

async function fetchLatestMortgageMarketSnapshot(): Promise<MortgageMarketSnapshot> {
  const apiKey = getFredApiKey();
  const [benchmarks, dailyIndices, floridaMarket, thirtyYearHistory] =
    await Promise.all([
      Promise.all(
        BENCHMARK_SERIES.map((series) => fetchRateProduct(series, apiKey)),
      ),
      Promise.all(
        DAILY_INDEX_SERIES.map((series) => fetchRateProduct(series, apiKey)),
      ),
      Promise.all(
        FLORIDA_MARKET_SERIES.map((series) =>
          fetchMarketMetric(series, apiKey),
        ),
      ),
      fetchFredObservations("MORTGAGE30US", apiKey),
    ]);
  const rateTrend = createThirtyYearTrend(thirtyYearHistory);
  const marketNote = await generateMarketNote({
    benchmarks,
    dailyIndices,
    floridaMarket,
  });

  return {
    retrievedAt: new Date().toISOString(),
    effectiveDate: latestCommonDate([benchmarks, dailyIndices, floridaMarket]),
    benchmarks,
    dailyIndices,
    floridaMarket,
    rateTrend,
    marketNote,
    sources: SOURCES,
    disclaimer: DISCLAIMER,
  };
}

const getCachedMortgageMarketSnapshot = unstable_cache(
  fetchLatestMortgageMarketSnapshot,
  [MORTGAGE_RATES_CACHE_TAG],
  {
    revalidate: MORTGAGE_RATES_REVALIDATE_SECONDS,
    tags: [MORTGAGE_RATES_CACHE_TAG],
  },
);

export async function getMortgageMarketSnapshot(): Promise<MortgageMarketSnapshot> {
  return getCachedMortgageMarketSnapshot();
}

export async function getMortgageRateSnapshot(): Promise<MortgageMarketSnapshot> {
  return getMortgageMarketSnapshot();
}
