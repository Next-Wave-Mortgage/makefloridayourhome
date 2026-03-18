import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_CALENDAR_ID = "2NWNxF7BIWTs3zv1Wk4y";
const GHL_BASE = "https://services.leadconnectorhq.com";

interface BookingPayload {
  contactId: string;
  slot: string; // ISO datetime from free-slots API
}

/**
 * POST /api/calendar/book
 * Creates an appointment in GHL for the given contact and time slot.
 * Fetches contact name from GHL so no PII needs to be in the client URL.
 */
export async function POST(req: NextRequest) {
  try {
    const body: BookingPayload = await req.json();

    if (!body.contactId || !body.slot) {
      return NextResponse.json(
        { error: "contactId and slot are required" },
        { status: 400 },
      );
    }

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
      assignedUserId: "", // Will be set when Phil is added as a GHL user
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
      const err = await res.text();
      console.error("GHL booking error:", res.status, err);
      return NextResponse.json(
        { error: "Failed to create appointment" },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, appointment: data });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 },
    );
  }
}
