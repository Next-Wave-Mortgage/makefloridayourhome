import { get, put } from "@vercel/blob";
import type { MortgageMarketSnapshot } from "@/lib/rates";

const MORTGAGE_RATES_SNAPSHOT_PATH = "mortgage-rates/current.json";

async function streamToText(
  stream: ReadableStream<Uint8Array>,
): Promise<string> {
  const response = new Response(stream);
  return response.text();
}

export async function readMortgageRatesSnapshotFromBlob(): Promise<
  unknown | null
> {
  const result = await get(MORTGAGE_RATES_SNAPSHOT_PATH, {
    access: "private",
    useCache: false,
  });

  if (!result || result.statusCode !== 200 || !result.stream) {
    return null;
  }

  return JSON.parse(await streamToText(result.stream));
}

export async function writeMortgageRatesSnapshotToBlob(
  snapshot: MortgageMarketSnapshot,
): Promise<void> {
  await put(MORTGAGE_RATES_SNAPSHOT_PATH, JSON.stringify(snapshot), {
    access: "private",
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: "application/json",
  });
}
