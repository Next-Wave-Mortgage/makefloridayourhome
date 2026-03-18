import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_CALENDAR_ID = "2NWNxF7BIWTs3zv1Wk4y";
const GHL_BASE = "https://services.leadconnectorhq.com";

/**
 * GET /api/calendar/slots?startDate=1711065600000&endDate=1711238400000&timezone=America/New_York
 * Proxies to GHL free-slots API so we don't expose the API key client-side.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const timezone = searchParams.get("timezone") || "America/New_York";

  if (!startDate || !endDate) {
    return NextResponse.json(
      { error: "startDate and endDate are required" },
      { status: 400 },
    );
  }

  const url = `${GHL_BASE}/calendars/${GHL_CALENDAR_ID}/free-slots?startDate=${startDate}&endDate=${endDate}&timezone=${encodeURIComponent(timezone)}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      Version: "2021-04-15",
    },
  });

  if (!res.ok) {
    console.error("GHL slots error:", res.status, await res.text());
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
