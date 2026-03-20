import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE = "https://services.leadconnectorhq.com";

/** GHL custom field IDs — created via API, mapped to our form field keys */
const CUSTOM_FIELD_IDS: Record<string, string> = {
  // Eligibility form fields
  property_used_for: "g8OU4EhZHLLn6uYoXZn4",
  home_buying_stage: "tqIOfD0m7RtJKFKJy476",
  estimated_purchase_price: "z6z06r2hsN5D1l9ejXAX",
  has_real_estate_agent: "Kw2ZLCtnODvVDXCokaMd",
  credit_rating: "Nbow30p7hTjRjQ11GYwl",
  veteran_or_military: "nXAJJFZludbfIampVVjU",
  lead_source_page: "CS9ljQFvd1CknPQ9taXk",
  contact_message: "TJSnN8KlAWwXWsV1riPM",
  // Visitor tracking fields
  landing_page: "4R4i0xvI6bvrcv5bDuoT",
  referrer: "arG0z19XDfpesSB8l4ev",
  pages_viewed: "l9xTsPNfjzgJXEw4SjVR",
  pages_viewed_count: "uVxRFHtEStDUu4FibBqu",
  device_type: "GCqWjvvOcJVl24sAtDrf",
  time_on_site: "AaQXnuVd8Mya78hFWNIJ",
  utm_source: "IN1eAQzOL8gQCZunHxje",
  utm_medium: "QeDkJZ0DjMuskPeDaY9Z",
  utm_campaign: "tvqnDzK4RlteT6C075eW",
  utm_content: "RDPMbkArgQx03QEwCIxI",
  utm_term: "ZuMnXSNH10zkyQPNIohI",
  source_website: "f4VeSqwpQwHpqoIBuOLE",
  previous_page: "rgkRBCuLbnoje6tLrlVV",
  // Geolocation (from Vercel headers)
  geo_city: "GaqfKBYBdPjM0KSHxR28",
  geo_state: "9nNC53CRZS9yCHp9CW42",
  geo_country: "vNkP7eUcvj2kLUyXBIre",
  geo_ip: "WMxMzy7duS1vGQ88Wdes",
  // Lead scoring
  lead_score: "1GESZ5dFXiCMFRQmuRM5",
};

/**
 * Lead scoring — rates eligibility form leads 0-12 based on:
 *   Purchase price (0-3), Credit rating (0-3), Buying stage (0-3),
 *   Has agent (0-2), Veteran (0-1)
 */
function calculateLeadScore(fields: Record<string, string>): number {
  let score = 0;

  // Purchase price: higher = better (0-3)
  const price = fields.estimated_purchase_price || "";
  if (price.includes("1,000,000") || price.includes("1,250,000") || price.includes("1,500,000"))
    score += 3;
  else if (price.includes("500,000") || price.includes("750,000"))
    score += 3;
  else if (price.includes("300,000") || price.includes("400,000"))
    score += 2;
  else if (price.includes("200,000"))
    score += 1;

  // Credit rating (0-3)
  const credit = fields.credit_rating || "";
  if (credit.startsWith("Excellent")) score += 3;
  else if (credit.startsWith("Very Good")) score += 2;
  else if (credit.startsWith("Good")) score += 1;

  // Buying stage (0-3)
  const stage = fields.home_buying_stage || "";
  if (stage.includes("signed contract")) score += 3;
  else if (stage.includes("making an offer")) score += 3;
  else if (stage.includes("pre-approval")) score += 2;
  else if (stage.includes("next few months")) score += 1;

  // Has real estate agent (0-2)
  if (fields.has_real_estate_agent === "Yes") score += 2;

  // Veteran / military (0-1 bonus)
  if (fields.veteran_or_military === "Yes") score += 1;

  return score;
}

// Rate limit: 30 requests per minute per IP
const LEAD_RATE_LIMIT = { maxRequests: 30, windowMs: 60_000 };

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getClientIp(req.headers);
  const limited = rateLimit(`lead:${ip}`, LEAD_RATE_LIMIT);
  if (limited) {
    return NextResponse.json(
      { success: false, error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  try {
    // Validate input
    const raw = await req.json();
    const result = leadSchema.safeParse(raw);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input", details: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    const body = result.data;

    // Geolocation from Vercel edge headers (free, automatic)
    const geoCity = req.headers.get("x-vercel-ip-city") || "";
    const geoState = req.headers.get("x-vercel-ip-country-region") || "";
    const geoCountry = req.headers.get("x-vercel-ip-country") || "";
    const geoIp = ip;

    // Build custom field values from form answers + tracking data
    const customFieldValues = [];

    // Geolocation fields (server-side only — not sent from client)
    if (geoCity) customFieldValues.push({ id: CUSTOM_FIELD_IDS.geo_city, field_value: decodeURIComponent(geoCity).slice(0, 100) });
    if (geoState) customFieldValues.push({ id: CUSTOM_FIELD_IDS.geo_state, field_value: geoState.slice(0, 100) });
    if (geoCountry) customFieldValues.push({ id: CUSTOM_FIELD_IDS.geo_country, field_value: geoCountry.slice(0, 100) });
    if (geoIp) customFieldValues.push({ id: CUSTOM_FIELD_IDS.geo_ip, field_value: geoIp.slice(0, 45) });

    // Form-specific custom fields (eligibility answers, contact message)
    if (body.customFields) {
      for (const [key, value] of Object.entries(body.customFields)) {
        const fieldId = CUSTOM_FIELD_IDS[key];
        if (fieldId && value) {
          customFieldValues.push({ id: fieldId, field_value: value });
        }
      }
    }

    // Visitor tracking fields (already filtered to whitelist by validation)
    if (body.tracking) {
      for (const [key, value] of Object.entries(body.tracking)) {
        const fieldId = CUSTOM_FIELD_IDS[key];
        if (fieldId && value) {
          customFieldValues.push({ id: fieldId, field_value: value });
        }
      }
    }

    // Lead source page
    if (body.source) {
      customFieldValues.push({
        id: CUSTOM_FIELD_IDS.lead_source_page,
        field_value: body.source,
      });
    }

    // Lead scoring (eligibility forms only — contact forms won't have these fields)
    const leadScore = body.customFields
      ? calculateLeadScore(body.customFields)
      : 0;
    customFieldValues.push({
      id: CUSTOM_FIELD_IDS.lead_score,
      field_value: String(leadScore),
    });

    const ghlPayload = {
      locationId: GHL_LOCATION_ID,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || undefined,
      source: "Website - " + (body.tracking?.source_website || "microsite"),
      tags: body.tags || ["website-lead"],
      customFields: customFieldValues,
    };

    const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!res.ok) {
      console.error("GHL API error:", res.status);
      return NextResponse.json(
        { success: false, error: "CRM submission failed" },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      contactId: data.contact?.id,
      leadScore,
    });
  } catch (err) {
    console.error("Lead API error:", err instanceof Error ? err.message : "Unknown");
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}
