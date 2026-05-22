import { test, expect } from "@playwright/test";
import {
  buildMarketNotePrompt,
  type MarketNoteInput,
} from "../src/lib/rate-market-note";
import { normalizeFredObservations } from "../src/lib/rates";

const hasLiveRateEnv = Boolean(
  process.env.FRED_API_KEY && process.env.GEMINI_API_KEY,
);
const marketNoteInput: MarketNoteInput = {
  benchmarks: [
    {
      id: "30-year-fixed",
      label: "30-Year Fixed",
      seriesId: "MORTGAGE30US",
      rate: 6.51,
      effectiveDate: "2026-05-21",
      sourceId: "freddie-mac-pmms",
      frequency: "weekly",
      geography: "United States",
      rateType: "benchmark_average",
      changes: [
        { period: "1w", value: 0.15, direction: "up" },
        { period: "1m", value: -0.08, direction: "down" },
        { period: "1y", value: -0.3, direction: "down" },
      ],
    },
    {
      id: "15-year-fixed",
      label: "15-Year Fixed",
      seriesId: "MORTGAGE15US",
      rate: 5.85,
      effectiveDate: "2026-05-21",
      sourceId: "freddie-mac-pmms",
      frequency: "weekly",
      geography: "United States",
      rateType: "benchmark_average",
      changes: [
        { period: "1w", value: 0.14, direction: "up" },
        { period: "1m", value: -0.02, direction: "down" },
        { period: "1y", value: -0.07, direction: "down" },
      ],
    },
  ],
  dailyIndices: [],
  floridaMarket: [
    {
      id: "median-listing-price",
      label: "Median Listing Price",
      seriesId: "MEDLISPRIFL",
      value: 430000,
      effectiveDate: "2026-04-01",
      sourceId: "fred-florida-housing",
      frequency: "monthly",
      geography: "Florida",
      unit: "dollars",
      changes: [
        { period: "1w", value: null, direction: "unavailable" },
        { period: "1m", value: 5000, direction: "up" },
        { period: "1y", value: 12000, direction: "up" },
      ],
    },
  ],
};

test("homepage loads and has an H1", async ({ page }) => {
  await page.goto("/");
  const h1 = page.locator("h1");
  await expect(h1).toBeVisible();
});

test("rates API returns benchmark mortgage products", async ({ request }) => {
  test.skip(!hasLiveRateEnv, "Live FRED and Gemini keys are required");

  const response = await request.get("/api/rates");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.sources).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: "freddie-mac-pmms" }),
      expect.objectContaining({ id: "optimal-blue-obmmi" }),
      expect.objectContaining({ id: "fred-florida-housing" }),
    ]),
  );
  expect(body.benchmarks).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: "30-year-fixed",
        seriesId: "MORTGAGE30US",
      }),
      expect.objectContaining({
        id: "15-year-fixed",
        seriesId: "MORTGAGE15US",
      }),
    ]),
  );
  expect(body.dailyIndices).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: "fha-30-year" }),
      expect.objectContaining({ id: "va-30-year" }),
      expect.objectContaining({ id: "jumbo-30-year" }),
      expect.objectContaining({ id: "usda-30-year" }),
    ]),
  );
  expect(body.floridaMarket).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: "median-listing-price" }),
      expect.objectContaining({ id: "active-listing-count" }),
    ]),
  );
  expect(body.marketNote).toEqual(
    expect.objectContaining({
      headline: expect.any(String),
      body: expect.any(String),
      generatedAt: expect.any(String),
      model: expect.any(String),
      dataPointsUsed: expect.any(Array),
    }),
  );
  expect(body.rateTrend).toEqual(
    expect.objectContaining({
      id: "30-year-fixed-3y",
      seriesId: "MORTGAGE30US",
      points: expect.any(Array),
    }),
  );
  expect(body.rateTrend.points.length).toBeGreaterThan(100);
});

test("Gemini market note prompt includes live rate values", () => {
  const prompt = buildMarketNotePrompt(marketNoteInput);

  expect(prompt).toContain("30-Year Fixed: 6.51%");
  expect(prompt).toContain("15-Year Fixed: 5.85%");
  expect(prompt).toContain("Median Listing Price: $430,000");
  expect(prompt).toContain("Use this editorial hierarchy");
  expect(prompt).toContain("A normal monthly uptick is context");
  expect(prompt).toContain("senior Florida mortgage advisor");
});

test("normalizes FRED observations and skips missing dot values", () => {
  const observations = normalizeFredObservations("OBMMIC30YF", {
    observations: [
      { date: "2026-05-21", value: "." },
      { date: "2026-05-20", value: "6.25" },
    ],
  });

  expect(observations).toEqual([{ date: "2026-05-20", value: 6.25 }]);
});

test("rejects non-numeric FRED observations", () => {
  expect(() =>
    normalizeFredObservations("OBMMIC30YF", {
      observations: [{ date: "2026-05-21", value: "not-a-number" }],
    }),
  ).toThrow("non-numeric");
});

test("rejects empty FRED observations", () => {
  expect(() =>
    normalizeFredObservations("OBMMIC30YF", {
      observations: [],
    }),
  ).toThrow("no observations");
});

test("rates cron rejects unauthorized requests", async ({ request }) => {
  const response = await request.get("/api/cron/refresh-rates");
  expect(response.status()).toBe(401);
});

test("mortgage rates page renders benchmark source and disclosure", async ({
  page,
}) => {
  test.skip(!hasLiveRateEnv, "Live FRED and Gemini keys are required");

  await page.goto("/mortgage-rates");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Florida Mortgage Rates",
  );
  await expect(
    page.getByText("Freddie Mac PMMS via FRED").first(),
  ).toBeVisible();
  await expect(page.getByText("Florida market context")).toBeVisible();
  await expect(
    page.getByText("What Phil thinks about these rates"),
  ).toBeVisible();
  await expect(page.getByText("Three-year rate view")).toBeVisible();
  await expect(
    page.getByText("Where today's 30-year rate sits in recent history"),
  ).toBeVisible();
  await expect(page.getByText("Florida Mortgage Rate Questions")).toBeVisible();
  await expect(page.getByText("What is a mortgage rate?")).toBeVisible();
  await expect(page.getByText("offer of credit")).toBeVisible();
  await expect(page.getByText("December 24, 2025")).toHaveCount(0);
});
