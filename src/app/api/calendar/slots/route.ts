import { NextRequest, NextResponse } from "next/server";
import { slotsQuerySchema } from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID!;
const GHL_BASE = "https://services.leadconnectorhq.com";

// Rate limit: 60 requests per minute per IP
const SLOTS_RATE_LIMIT = { maxRequests: 60, windowMs: 60_000 };

/**
 * GET /api/calendar/slots?startDate=1711065600000&endDate=1711238400000&timezone=America/New_York
 * Proxies to GHL free-slots API so we don't expose the API key client-side.
 */
export async function GET(req: NextRequest) {
  // Rate limiting
  const ip = getClientIp(req.headers);
  const limited = rateLimit(`slots:${ip}`, SLOTS_RATE_LIMIT);
  if (limited) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  // Validate query params
  const { searchParams } = req.nextUrl;
  const result = slotsQuerySchema.safeParse({
    startDate: searchParams.get("startDate") || "",
    endDate: searchParams.get("endDate") || "",
    timezone: searchParams.get("timezone") || undefined,
  });

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid parameters", details: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { startDate, endDate, timezone } = result.data;

  const url = `${GHL_BASE}/calendars/${GHL_CALENDAR_ID}/free-slots?startDate=${startDate}&endDate=${endDate}&timezone=${encodeURIComponent(timezone)}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      Version: "2021-04-15",
    },
  });

  if (!res.ok) {
    console.error("GHL slots error:", res.status);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
