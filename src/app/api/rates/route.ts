import { NextResponse } from "next/server";
import {
  getMortgageRateSnapshot,
  MORTGAGE_RATES_REVALIDATE_SECONDS,
} from "@/lib/rates";

export const preferredRegion = "iad1";

export async function GET() {
  const snapshot = await getMortgageRateSnapshot();

  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": `public, s-maxage=${MORTGAGE_RATES_REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
    },
  });
}
