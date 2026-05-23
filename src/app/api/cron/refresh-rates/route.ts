import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getMortgageRateSnapshot, MORTGAGE_RATES_CACHE_TAG } from "@/lib/rates";

export const dynamic = "force-dynamic";
export const preferredRegion = "iad1";

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET?.trim();
  const authorization = req.headers.get("authorization");

  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(MORTGAGE_RATES_CACHE_TAG, { expire: 0 });
  const warmUrl = new URL("/api/rates", req.url);
  warmUrl.searchParams.set("warm", Date.now().toString());
  const warmResponse = await fetch(warmUrl, {
    cache: "no-store",
    headers: {
      "x-cron-warm": "1",
    },
  });

  if (!warmResponse.ok) {
    return NextResponse.json(
      { error: "Rates cache warm-up failed", status: warmResponse.status },
      { status: 502 },
    );
  }

  const snapshot = (await warmResponse.json()) as Awaited<
    ReturnType<typeof getMortgageRateSnapshot>
  >;

  return NextResponse.json({
    success: true,
    effectiveDate: snapshot.effectiveDate,
    retrievedAt: snapshot.retrievedAt,
    marketNoteGeneratedAt: snapshot.marketNote.generatedAt,
    marketNoteModel: snapshot.marketNote.model,
    sources: snapshot.sources.map((source) => source.id),
    counts: {
      benchmarks: snapshot.benchmarks.length,
      dailyIndices: snapshot.dailyIndices.length,
      floridaMarket: snapshot.floridaMarket.length,
      rateTrendPoints: snapshot.rateTrend.points.length,
    },
  });
}
