import type {
  FloridaMarketMetric,
  MetricChange,
  MortgageRateProduct,
} from "@/lib/rates";

export type MarketNoteInput = {
  benchmarks: MortgageRateProduct[];
  dailyIndices: MortgageRateProduct[];
  floridaMarket: FloridaMarketMetric[];
};

export type MarketNote = {
  headline: string;
  body: string;
  dataPointsUsed: string[];
  generatedAt: string;
  model: string;
};

type GeminiMarketNoteResponse = {
  headline?: unknown;
  body?: unknown;
  dataPointsUsed?: unknown;
};

type GeminiGenerateContentResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: unknown;
      }>;
    };
  }>;
};

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const GEMINI_REQUEST_TIMEOUT_MS = 15_000;

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

function formatMarketValue(metric: FloridaMarketMetric): string {
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

function formatChange(change: MetricChange): string {
  if (change.value === null) {
    return "not enough history";
  }

  const sign = change.value > 0 ? "+" : "";
  return `${sign}${change.value.toFixed(2)} points over ${change.period}`;
}

function getGeminiApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is required to generate market notes");
  }

  return apiKey;
}

export function buildMarketNoteDataPoints(input: MarketNoteInput): string[] {
  const ratePoints = [...input.benchmarks, ...input.dailyIndices].map(
    (product) =>
      `${product.label}: ${formatPercent(product.rate)} effective ${product.effectiveDate}`,
  );
  const marketPoints = input.floridaMarket.map(
    (metric) =>
      `${metric.label}: ${formatMarketValue(metric)} effective ${metric.effectiveDate}`,
  );
  const movementPoints = [...input.benchmarks, ...input.dailyIndices].flatMap(
    (product) =>
      product.changes
        .filter((change) => change.value !== null)
        .map((change) => `${product.label} ${formatChange(change)}`),
  );

  return [...ratePoints, ...marketPoints, ...movementPoints];
}

export function buildMarketNotePrompt(input: MarketNoteInput): string {
  const dataPoints = buildMarketNoteDataPoints(input);

  return [
    "Write Phil's concise mortgage-rate opinion directly to one Florida buyer who is reading the page right now.",
    "Use only the provided data points. Do not invent numbers or cite outside sources.",
    "Do not summarize every number. Use this editorial hierarchy: first the honest read on the current 30-year rate, then what matters for the buyer's payment, then what Phil would watch in the deal, then recent movement only as supporting context.",
    "Write like Phil, a senior Florida mortgage expert speaking plainly to an informed buyer across the table. Not marketing copy. Not a market memo. Not a data narrator. It should sound spoken, not written by a financial content team.",
    "Use second person naturally: you, your payment, your budget, your buying power.",
    "Take a clear but compliant point of view about the rates on screen.",
    "Keep the tone constructive and steady. Do not make the market sound hopeless, scary, or like a bad time to buy.",
    "If rates are elevated or moving higher, frame the takeaway around payment discipline, loan type, seller credits, timing, inventory, and whether the monthly payment still works.",
    "End with a practical path forward, not a warning.",
    "Do not end with a salesy invitation like 'let's work through your options.' Keep it as commentary, not a call-to-action.",
    "Do not make the one-week or one-month move the headline unless the move is unusually large. A normal monthly uptick is context, not the whole story.",
    "Use recent-history context when it helps, but do not over-focus on the latest one-month change.",
    "Use the Florida market data when it helps make the point more concrete, especially listing price or inventory. Do not force it if it makes the note clunky.",
    "Make the Florida data feel useful, not inserted. For example: 'With nearly 160,000 active listings in Florida, some sellers may have to be more flexible than they were a couple years ago.'",
    "You may discuss the near-term setup only as uncertainty or risk, not as a prediction.",
    "The body must mention at least one exact value from the data points.",
    "Keep the body between 65 and 105 words.",
    "Do not predict future rates. Do not recommend locking or not locking. Do not imply a borrower qualifies. Do not use the words best rate, guaranteed, offer, or financial advice.",
    "Do not say or imply that someone should stop shopping, wait indefinitely, or avoid buying a home.",
    "Avoid mortgage jargon and polished finance filler. Do not write: clear strategy, current environment, aligning the loan structure, long-term payment goals, program choice is key, potential seller credits are key, could impact affordability, potential volatility, in today's market, deal structure, buying power needs discipline, total cost, your situation.",
    "Prefer short, direct sentences. It is okay to say: here is the honest read, the math has to be tight, your payment has less room for mistakes, the rate matters but it is not the only lever, the real monthly payment.",
    "Give the note one memorable takeaway, not several balanced points. A good spine is: at this rate, the payment math matters more than chasing the lowest number on the screen.",
    "Good style: 'Here is the honest read: at 6.51%, you cannot be loose with the monthly payment. That does not mean you cannot buy. It means the math has to be tight. With nearly 160,000 active listings in Florida, some sellers may have to be more flexible than they were a couple years ago. I would pay close attention to seller credits, the loan type, and the real payment you are comfortable carrying.'",
    "Bad style: 'Recent rate adjustments could impact affordability for buyers.'",
    "",
    "Return JSON only with headline, body, and dataPointsUsed. Start with { and end with }. Do not use markdown fences or introductory text.",
    "",
    "Data points:",
    ...dataPoints.map((point) => `- ${point}`),
  ].join("\n");
}

function parseGeminiJson(text: string): GeminiMarketNoteResponse {
  const trimmed = text.trim();
  const unfenced = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const jsonStart = unfenced.indexOf("{");
  const jsonEnd = unfenced.lastIndexOf("}");
  const candidate =
    jsonStart >= 0 && jsonEnd > jsonStart
      ? unfenced.slice(jsonStart, jsonEnd + 1)
      : unfenced;

  try {
    return JSON.parse(candidate) as GeminiMarketNoteResponse;
  } catch {
    throw new Error("Gemini returned invalid JSON for the market note");
  }
}

function coerceMarketNoteResponse(
  rawNote: GeminiMarketNoteResponse,
): Omit<MarketNote, "generatedAt" | "model"> {
  if (
    typeof rawNote.headline !== "string" ||
    typeof rawNote.body !== "string" ||
    !Array.isArray(rawNote.dataPointsUsed) ||
    !rawNote.dataPointsUsed.every((item) => typeof item === "string")
  ) {
    throw new Error("Gemini market note response did not match the schema");
  }

  const headline = rawNote.headline.trim();
  const body = rawNote.body.trim();
  const dataPointsUsed = rawNote.dataPointsUsed.map((item) => item.trim());

  if (!headline || !body || dataPointsUsed.length === 0) {
    throw new Error("Gemini market note response was incomplete");
  }

  return {
    headline,
    body,
    dataPointsUsed,
  };
}

function extractGeminiText(payload: GeminiGenerateContentResponse): string {
  const text = payload.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter((part): part is string => typeof part === "string")
    .join("");

  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Gemini returned an empty market note response");
  }

  return text;
}

export async function generateMarketNote(
  input: MarketNoteInput,
): Promise<MarketNote> {
  const apiKey = getGeminiApiKey();
  const prompt = buildMarketNotePrompt(input);
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    GEMINI_REQUEST_TIMEOUT_MS,
  );

  try {
    let response: Response;
    try {
      response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 2048,
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                headline: { type: "STRING" },
                body: { type: "STRING" },
                dataPointsUsed: {
                  type: "ARRAY",
                  items: { type: "STRING" },
                },
              },
              required: ["headline", "body", "dataPointsUsed"],
            },
          },
        }),
      });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Gemini market note request timed out");
      }

      throw error;
    }

    if (!response.ok) {
      throw new Error(`Gemini market note request failed: ${response.status}`);
    }

    const payload = (await response.json()) as GeminiGenerateContentResponse;
    const note = coerceMarketNoteResponse(
      parseGeminiJson(extractGeminiText(payload)),
    );

    return {
      ...note,
      generatedAt: new Date().toISOString(),
      model: GEMINI_MODEL,
    };
  } finally {
    clearTimeout(timeout);
  }
}
