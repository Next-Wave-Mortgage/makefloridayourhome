import { getCache } from "@vercel/functions";
import { generateMarketNote, type MarketNote } from "@/lib/rate-market-note";
import {
  readMortgageRatesSnapshotFromBlob,
  writeMortgageRatesSnapshotToBlob,
} from "@/lib/rate-snapshot-store";
import seedMortgageRatesSnapshot from "@/data/mortgage-rates-seed.json";

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
const MORTGAGE_RATES_RUNTIME_CACHE_KEY = "current-snapshot";
const MORTGAGE_RATES_RUNTIME_CACHE_TTL_SECONDS = 60 * 60 * 24 * 14;
const FRED_REQUEST_TIMEOUT_MS = 10_000;
const FRED_REQUEST_SPACING_MS = 1_200;
const FRED_RETRY_DELAYS_MS = [2_000, 5_000, 10_000];

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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  for (let attempt = 0; attempt <= FRED_RETRY_DELAYS_MS.length; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      FRED_REQUEST_TIMEOUT_MS,
    );

    try {
      const response = await fetch(`${FRED_API_BASE}?${params}`, {
        cache: "no-store",
        signal: controller.signal,
      });

      if (response.ok) {
        const payload = (await response.json()) as FredObservationsResponse;
        return normalizeFredObservations(seriesId, payload);
      }

      if (
        attempt < FRED_RETRY_DELAYS_MS.length &&
        (response.status === 429 || response.status >= 500)
      ) {
        await sleep(FRED_RETRY_DELAYS_MS[attempt]);
        continue;
      }

      throw new Error(
        `FRED request failed for ${seriesId}: ${response.status}`,
      );
    } finally {
      clearTimeout(timeout);
    }
  }

  throw new Error(`FRED request failed for ${seriesId}`);
}

async function fetchFredObservationMap(
  seriesIds: FredSeriesId[],
  apiKey: string,
): Promise<Map<FredSeriesId, ParsedObservation[]>> {
  const observationsBySeries = new Map<FredSeriesId, ParsedObservation[]>();

  for (const [index, seriesId] of seriesIds.entries()) {
    if (index > 0) {
      await sleep(FRED_REQUEST_SPACING_MS);
    }

    observationsBySeries.set(
      seriesId,
      await fetchFredObservations(seriesId, apiKey),
    );
  }

  return observationsBySeries;
}

function getSeriesObservations(
  observationsBySeries: Map<FredSeriesId, ParsedObservation[]>,
  seriesId: FredSeriesId,
): ParsedObservation[] {
  const observations = observationsBySeries.get(seriesId);

  if (!observations) {
    throw new Error(`FRED observations are missing for ${seriesId}`);
  }

  return observations;
}

async function fetchLatestMortgageMarketSnapshot(): Promise<MortgageMarketSnapshot> {
  const apiKey = getFredApiKey();
  const seriesIds = Array.from(
    new Set<FredSeriesId>([
      ...BENCHMARK_SERIES.map((series) => series.seriesId),
      ...DAILY_INDEX_SERIES.map((series) => series.seriesId),
      ...FLORIDA_MARKET_SERIES.map((series) => series.seriesId),
    ]),
  );
  const observationsBySeries = await fetchFredObservationMap(seriesIds, apiKey);
  const benchmarks = BENCHMARK_SERIES.map((series) =>
    createRateProduct(
      series,
      getSeriesObservations(observationsBySeries, series.seriesId),
    ),
  );
  const dailyIndices = DAILY_INDEX_SERIES.map((series) =>
    createRateProduct(
      series,
      getSeriesObservations(observationsBySeries, series.seriesId),
    ),
  );
  const floridaMarket = FLORIDA_MARKET_SERIES.map((series) =>
    createMarketMetric(
      series,
      getSeriesObservations(observationsBySeries, series.seriesId),
    ),
  );
  const rateTrend = createThirtyYearTrend(
    getSeriesObservations(observationsBySeries, "MORTGAGE30US"),
  );
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

function getMortgageRatesRuntimeCache() {
  return getCache({
    namespace: MORTGAGE_RATES_CACHE_TAG,
  });
}

async function readMortgageMarketSnapshotFromRuntimeCache(): Promise<MortgageMarketSnapshot | null> {
  try {
    const snapshot = await getMortgageRatesRuntimeCache().get(
      MORTGAGE_RATES_RUNTIME_CACHE_KEY,
    );

    if (!isMortgageMarketSnapshot(snapshot)) {
      return null;
    }

    return snapshot;
  } catch {
    return null;
  }
}

async function readMortgageMarketSnapshotFromBlob(): Promise<MortgageMarketSnapshot | null> {
  try {
    const snapshot = await readMortgageRatesSnapshotFromBlob();

    if (!isMortgageMarketSnapshot(snapshot)) {
      return null;
    }

    return snapshot;
  } catch {
    return null;
  }
}

export async function refreshMortgageMarketSnapshot(): Promise<MortgageMarketSnapshot> {
  const snapshot = await fetchLatestMortgageMarketSnapshot();

  await writeMortgageRatesSnapshotToBlob(snapshot);

  await getMortgageRatesRuntimeCache().set(
    MORTGAGE_RATES_RUNTIME_CACHE_KEY,
    snapshot,
    {
      ttl: MORTGAGE_RATES_RUNTIME_CACHE_TTL_SECONDS,
      tags: [MORTGAGE_RATES_CACHE_TAG],
      name: "Mortgage rates snapshot",
    },
  );

  return snapshot;
}

function isMortgageMarketSnapshot(
  snapshot: unknown,
): snapshot is MortgageMarketSnapshot {
  if (!snapshot || typeof snapshot !== "object") {
    return false;
  }

  const candidate = snapshot as Partial<MortgageMarketSnapshot>;

  return (
    typeof candidate.retrievedAt === "string" &&
    typeof candidate.effectiveDate === "string" &&
    Array.isArray(candidate.benchmarks) &&
    candidate.benchmarks.length > 0 &&
    Array.isArray(candidate.dailyIndices) &&
    candidate.dailyIndices.length > 0 &&
    Array.isArray(candidate.floridaMarket) &&
    candidate.floridaMarket.length > 0 &&
    Array.isArray(candidate.sources) &&
    typeof candidate.disclaimer === "string" &&
    Boolean(candidate.rateTrend?.points?.length) &&
    typeof candidate.marketNote?.headline === "string" &&
    typeof candidate.marketNote.body === "string"
  );
}

function getSeedMortgageMarketSnapshot(): MortgageMarketSnapshot {
  if (!isMortgageMarketSnapshot(seedMortgageRatesSnapshot)) {
    throw new Error("Seed mortgage rates snapshot is invalid");
  }

  return seedMortgageRatesSnapshot;
}

export async function getStoredMortgageMarketSnapshot(): Promise<MortgageMarketSnapshot> {
  const cachedSnapshot = await readMortgageMarketSnapshotFromRuntimeCache();

  if (cachedSnapshot) {
    return cachedSnapshot;
  }

  const blobSnapshot = await readMortgageMarketSnapshotFromBlob();

  if (blobSnapshot) {
    await getMortgageRatesRuntimeCache().set(
      MORTGAGE_RATES_RUNTIME_CACHE_KEY,
      blobSnapshot,
      {
        ttl: MORTGAGE_RATES_RUNTIME_CACHE_TTL_SECONDS,
        tags: [MORTGAGE_RATES_CACHE_TAG],
        name: "Mortgage rates snapshot",
      },
    );

    return blobSnapshot;
  }

  return getSeedMortgageMarketSnapshot();
}

export async function getMortgageMarketSnapshot(): Promise<MortgageMarketSnapshot> {
  return getStoredMortgageMarketSnapshot();
}

export async function getMortgageRateSnapshot(): Promise<MortgageMarketSnapshot> {
  return getStoredMortgageMarketSnapshot();
}
