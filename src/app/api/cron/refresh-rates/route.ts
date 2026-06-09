import { NextRequest, NextResponse } from "next/server";
import { refreshMortgageMarketSnapshot } from "@/lib/rates";

export const dynamic = "force-dynamic";
export const preferredRegion = "iad1";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET?.trim();
  const authorization = req.headers.get("authorization");

  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const snapshot = await refreshMortgageMarketSnapshot();

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
  } catch (error) {
    console.error("[rates-cron] refresh failed", error);

    return NextResponse.json(
      {
        error: "Rates refresh failed",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
