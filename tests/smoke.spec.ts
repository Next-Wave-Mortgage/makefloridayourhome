import { test, expect } from "@playwright/test";
import {
  buildMarketNotePrompt,
  type MarketNoteInput,
} from "../src/lib/rate-market-note";
import { normalizeFredObservations } from "../src/lib/rates";
import {
  FLORIDA_COUNTIES,
  FLORIDA_DPA_PROGRAMS,
  getProgramsForCounty,
} from "../src/data/dpa";
import {
  DPA_PROGRAMS as LEGACY_DPA_PROGRAMS,
  getCountyPrograms as getLegacyCountyPrograms,
} from "../src/data/dpa-programs";

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

test("DPA database contains 105 uniquely identified programs", () => {
  expect(FLORIDA_DPA_PROGRAMS).toHaveLength(105);

  const ids = FLORIDA_DPA_PROGRAMS.map((program) => program.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test("DPA database records include required calculator and maintenance fields", () => {
  for (const program of FLORIDA_DPA_PROGRAMS) {
    expect(program.id).toBeTruthy();
    expect(program.name).toBeTruthy();
    expect(program.typeDisplay).toBeTruthy();
    expect(program.description).toBeTruthy();
    expect(program.assistance.display).toBeTruthy();
    expect(program.eligibility.eligibilityUrl).toMatch(/^\/check-/);
    expect(program.source).toEqual(
      expect.objectContaining({
        label: expect.any(String),
        quality: expect.any(String),
      }),
    );
    expect(program.sources.length).toBeGreaterThan(0);
    for (const source of program.sources) {
      expect(source).toEqual(
        expect.objectContaining({
          label: expect.any(String),
          quality: expect.any(String),
        }),
      );
    }
    expect(program.maintenance).toEqual(
      expect.objectContaining({
        status: expect.any(String),
        lastVerified: expect.any(String),
        needsReviewReasons: expect.any(Array),
      }),
    );
    expect(program.compatibleLoanTypes.length).toBeGreaterThan(0);
    expect(program.geography.jurisdictionLevel).toEqual(expect.any(String));
    expect(program.limits).toEqual(
      expect.objectContaining({
        incomeLimitRequired: expect.anything(),
        purchasePriceLimitRequired: expect.anything(),
        incomeBasis: expect.any(String),
        usesFloridaHousingLimits: expect.anything(),
      }),
    );
    expect(program.availability).toEqual(
      expect.objectContaining({
        status: expect.any(String),
        statusLastChecked: expect.any(String),
      }),
    );
    expect(program.stacking).toEqual(
      expect.objectContaining({
        withFloridaHousingFirstMortgage: expect.any(String),
        withHometownHeroes: expect.any(String),
        withLocalPrograms: expect.any(String),
      }),
    );
    expect(program.calculator).toEqual(
      expect.objectContaining({
        confidence: expect.any(String),
        canEstimateAmount: expect.any(Boolean),
        canDetermineBasicEligibility: expect.any(Boolean),
        missingData: expect.any(Array),
      }),
    );
  }
});

test("DPA database counties match the known Florida county list", () => {
  const countySet = new Set(FLORIDA_COUNTIES);

  for (const program of FLORIDA_DPA_PROGRAMS) {
    for (const county of program.geography.counties) {
      expect(countySet.has(county)).toBeTruthy();
    }
  }
});

test("legacy DPA exports preserve county lookup behavior", () => {
  expect(LEGACY_DPA_PROGRAMS).toHaveLength(105);

  const canonicalBroward = getProgramsForCounty("Broward").map(
    (program) => program.id,
  );
  const legacyBroward = getLegacyCountyPrograms("Broward").map(
    (program) => program.id,
  );

  expect(legacyBroward).toEqual(canonicalBroward);
  expect(legacyBroward).toContain("florida-hometown-heroes");
  expect(legacyBroward).toContain("broward-county-hpa");
});

test("rates API returns benchmark mortgage products", async ({ request }) => {
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
  expect(prompt).toContain("honest read on the current 30-year rate");
  expect(prompt).toContain("A normal monthly uptick is context");
  expect(prompt).toContain("speaking plainly to an informed buyer");
  expect(prompt).toContain("clear strategy");
  expect(prompt).toContain("aligning the loan structure");
  expect(prompt).toContain("here is the honest read");
  expect(prompt).toContain("deal structure");
  expect(prompt).toContain("buying power needs discipline");
  expect(prompt).toContain("the math has to be tight");
  expect(prompt).toContain("real monthly payment");
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
  await expect(page.getByText("offer of credit").first()).toBeVisible();
  await expect(page.getByText("December 24, 2025")).toHaveCount(0);
});
