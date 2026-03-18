import { NextRequest, NextResponse } from "next/server";

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
};

interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  source: string;
  customFields?: Record<string, string>;
  tracking?: Record<string, string>;
  tags?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    // Build custom field values from form answers + tracking data
    const customFieldValues = [];

    // Form-specific custom fields (eligibility answers, contact message)
    if (body.customFields) {
      for (const [key, value] of Object.entries(body.customFields)) {
        const fieldId = CUSTOM_FIELD_IDS[key];
        if (fieldId && value) {
          customFieldValues.push({ id: fieldId, field_value: value });
        }
      }
    }

    // Visitor tracking fields
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

    const ghlPayload = {
      locationId: GHL_LOCATION_ID,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || undefined,
      source: "Website - makefloridayourhome.com",
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
      const err = await res.text();
      console.error("GHL API error:", res.status, err);
      return NextResponse.json(
        { success: false, error: "CRM submission failed" },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, contactId: data.contact?.id });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}
