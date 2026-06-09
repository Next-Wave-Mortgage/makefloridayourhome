import { head, put } from "@vercel/blob";
import type { MortgageMarketSnapshot } from "@/lib/rates";

const MORTGAGE_RATES_SNAPSHOT_PATH = "mortgage-rates/current.json";

export async function readMortgageRatesSnapshotFromBlob(): Promise<
  unknown | null
> {
  const blob = await head(MORTGAGE_RATES_SNAPSHOT_PATH);
  const response = await fetch(`${blob.url}?ts=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Mortgage rates Blob read failed: ${response.status}`);
  }

  return response.json();
}

export async function writeMortgageRatesSnapshotToBlob(
  snapshot: MortgageMarketSnapshot,
): Promise<void> {
  await put(MORTGAGE_RATES_SNAPSHOT_PATH, JSON.stringify(snapshot), {
    access: "public",
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: "application/json",
  });
}
