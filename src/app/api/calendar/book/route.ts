import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID!;
const GHL_BASE = "https://services.leadconnectorhq.com";

// Rate limit: 10 requests per minute per IP
const BOOK_RATE_LIMIT = { maxRequests: 10, windowMs: 60_000 };

/**
 * POST /api/calendar/book
 * Creates an appointment in GHL for the given contact and time slot.
 * Fetches contact name from GHL so no PII needs to be in the client URL.
 */
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getClientIp(req.headers);
  const limited = rateLimit(`book:${ip}`, BOOK_RATE_LIMIT);
  if (limited) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  try {
    // Validate input
    const raw = await req.json();
    const result = bookingSchema.safeParse(raw);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    const body = result.data;

    // Fetch contact name from GHL
    const contactRes = await fetch(`${GHL_BASE}/contacts/${body.contactId}`, {
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: "2021-07-28",
      },
    });

    let contactName = "Website Lead";
    if (contactRes.ok) {
      const contactData = await contactRes.json();
      const c = contactData.contact;
      if (c?.firstName) {
        contactName = [c.firstName, c.lastName].filter(Boolean).join(" ");
      }
    }

    const ghlPayload = {
      calendarId: GHL_CALENDAR_ID,
      locationId: GHL_LOCATION_ID,
      contactId: body.contactId,
      startTime: body.slot,
      title: `Mortgage Consultation - ${contactName}`,
      appointmentStatus: "confirmed",
      assignedUserId: "",
    };

    const res = await fetch(`${GHL_BASE}/calendars/events/appointments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-04-15",
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!res.ok) {
      console.error("GHL booking error:", res.status);
      return NextResponse.json(
        { error: "Failed to create appointment" },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, appointment: data });
  } catch (err) {
    console.error("Booking API error:", err instanceof Error ? err.message : "Unknown");
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 },
    );
  }
}
