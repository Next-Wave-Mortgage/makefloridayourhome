import { NextResponse } from "next/server";
import { getMortgageRateSnapshot } from "@/lib/rates";

export const preferredRegion = "iad1";

export async function GET() {
  const snapshot = await getMortgageRateSnapshot();

  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
