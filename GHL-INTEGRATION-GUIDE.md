# GoHighLevel CRM Integration Guide

**For: Next Wave Mortgage micro sites**
**Last updated: 2026-03-18**

Use this document to set up any new micro site so that form submissions flow into our GoHighLevel CRM with full visitor tracking. Hand this entire document to Claude Code (or any AI) and tell it to wire up the forms.

---

## GHL Account Details

- **Location ID:** `S2ev1gjnsIoDREEjFf3h`
- **API Base URL:** `https://services.leadconnectorhq.com`
- **API Version Header:** `Version: 2021-07-28`
- **API Key env var:** `GHL_API_KEY` (stored in `.env.local`, never committed)
- **The actual API key** is a Private Integration token. Ask James or check the Vercel env vars for the production value. It starts with `pit-`.

---

## Environment Variables

Every site needs these in `.env.local` (local dev) and in the hosting platform (Vercel, etc.):

```
GHL_API_KEY=pit-XXXXX           # GoHighLevel Private Integration token
GHL_LOCATION_ID=S2ev1gjnsIoDREEjFf3h
GA4_ID=G-E7KYFVSJ1G            # Google Analytics 4 measurement ID
```

**IMPORTANT:** Never commit `.env.local` to git. Ensure `.gitignore` includes `.env*.local`.

---

## GHL Custom Field IDs

These custom fields already exist in the GHL account. Do NOT create new ones — reuse these exact IDs. All micro sites share the same GHL location and the same custom fields.

### Mortgage / Form Data Fields

| Field Name | GHL Field ID | Description |
|---|---|---|
| Property Used For | `g8OU4EhZHLLn6uYoXZn4` | Primary Residence / Vacation / Investment |
| Home Buying Stage | `tqIOfD0m7RtJKFKJy476` | Where they are in the buying process |
| Estimated Purchase Price | `z6z06r2hsN5D1l9ejXAX` | Price range selection |
| Has Real Estate Agent | `Kw2ZLCtnODvVDXCokaMd` | Yes / No |
| Credit Rating | `Nbow30p7hTjRjQ11GYwl` | Excellent / Very Good / Good / Fair / Poor |
| Veteran or Military | `nXAJJFZludbfIampVVjU` | Yes / No |
| Lead Source Page | `CS9ljQFvd1CknPQ9taXk` | URL path of the form page they submitted (e.g. `/check-fha-loan-eligibility`) |
| Contact Message | `TJSnN8KlAWwXWsV1riPM` | Free-text message from contact forms |

### Visitor Tracking Fields

| Field Name | GHL Field ID | Description |
|---|---|---|
| Source Website | `f4VeSqwpQwHpqoIBuOLE` | The domain (e.g. `makefloridayourhome.com`, `floridafhaloans.com`) |
| Landing Page | `4R4i0xvI6bvrcv5bDuoT` | First page the visitor hit |
| Referrer | `arG0z19XDfpesSB8l4ev` | Where they came from (google.com, facebook.com, direct) |
| Previous Page | `rgkRBCuLbnoje6tLrlVV` | The page they were on right before the form |
| Pages Viewed | `l9xTsPNfjzgJXEw4SjVR` | Full browsing path (e.g. `/ → /home-loan → /check-fha-loan-eligibility`) |
| Pages Viewed Count | `uVxRFHtEStDUu4FibBqu` | Number of pages visited before converting |
| Device Type | `GCqWjvvOcJVl24sAtDrf` | mobile / desktop / tablet |
| Time on Site | `AaQXnuVd8Mya78hFWNIJ` | How long they browsed before submitting (e.g. `2m 34s`) |
| UTM Source | `IN1eAQzOL8gQCZunHxje` | utm_source parameter |
| UTM Medium | `QeDkJZ0DjMuskPeDaY9Z` | utm_medium parameter |
| UTM Campaign | `tvqnDzK4RlteT6C075eW` | utm_campaign parameter |
| UTM Content | `RDPMbkArgQx03QEwCIxI` | utm_content parameter |
| UTM Term | `ZuMnXSNH10zkyQPNIohI` | utm_term parameter |

---

## Architecture Overview

```
[Visitor browses site] → [sessionStorage tracks pages, referrer, device, etc.]
        ↓
[Visitor submits form] → [Client POSTs to /api/lead with form data + tracking payload]
        ↓
[/api/lead (server-side)] → [Maps fields to GHL custom field IDs]
        ↓
[GHL Contacts API] → [Creates or updates contact via upsert endpoint]
```

Key points:
- The API key is **server-side only** (in a Next.js API route). Never expose it to the browser.
- GHL's `upsert` endpoint matches on email — if the same person submits again, it updates instead of creating a duplicate.
- The visitor tracker uses `sessionStorage` — lightweight, no cookies, no GDPR banner needed.
- `source_website` is auto-detected from `window.location.hostname` — no per-site config required.

---

## Implementation: 3 Files to Add

### 1. API Route: `src/app/api/lead/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE = "https://services.leadconnectorhq.com";

const CUSTOM_FIELD_IDS: Record<string, string> = {
  // Mortgage form fields
  property_used_for: "g8OU4EhZHLLn6uYoXZn4",
  home_buying_stage: "tqIOfD0m7RtJKFKJy476",
  estimated_purchase_price: "z6z06r2hsN5D1l9ejXAX",
  has_real_estate_agent: "Kw2ZLCtnODvVDXCokaMd",
  credit_rating: "Nbow30p7hTjRjQ11GYwl",
  veteran_or_military: "nXAJJFZludbfIampVVjU",
  lead_source_page: "CS9ljQFvd1CknPQ9taXk",
  contact_message: "TJSnN8KlAWwXWsV1riPM",
  // Visitor tracking fields
  source_website: "f4VeSqwpQwHpqoIBuOLE",
  landing_page: "4R4i0xvI6bvrcv5bDuoT",
  referrer: "arG0z19XDfpesSB8l4ev",
  previous_page: "rgkRBCuLbnoje6tLrlVV",
  pages_viewed: "l9xTsPNfjzgJXEw4SjVR",
  pages_viewed_count: "uVxRFHtEStDUu4FibBqu",
  device_type: "GCqWjvvOcJVl24sAtDrf",
  time_on_site: "AaQXnuVd8Mya78hFWNIJ",
  utm_source: "IN1eAQzOL8gQCZunHxje",
  utm_medium: "QeDkJZ0DjMuskPeDaY9Z",
  utm_campaign: "tvqnDzK4RlteT6C075eW",
  utm_content: "RDPMbkArgQx03QEwCIxI",
  utm_term: "ZuMnXSNH10zkyQPNIohI",
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

    const customFieldValues = [];

    if (body.customFields) {
      for (const [key, value] of Object.entries(body.customFields)) {
        const fieldId = CUSTOM_FIELD_IDS[key];
        if (fieldId && value) {
          customFieldValues.push({ id: fieldId, field_value: value });
        }
      }
    }

    if (body.tracking) {
      for (const [key, value] of Object.entries(body.tracking)) {
        const fieldId = CUSTOM_FIELD_IDS[key];
        if (fieldId && value) {
          customFieldValues.push({ id: fieldId, field_value: value });
        }
      }
    }

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
```

### 2. Visitor Tracker: `src/lib/tracking.ts`

```typescript
const STORAGE_KEY = "nwm_tracking";

interface TrackingData {
  landingPage: string;
  referrer: string;
  pagesViewed: { path: string; ts: number }[];
  sessionStart: number;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
}

function getDeviceType(): string {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return "tablet";
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua))
    return "mobile";
  return "desktop";
}

function getStoredData(): TrackingData | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveData(data: TrackingData) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

/** Call on every page load/navigation to record the visit. */
export function trackPageView() {
  if (typeof window === "undefined") return;

  const now = Date.now();
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  let data = getStoredData();

  if (!data) {
    data = {
      landingPage: path,
      referrer: document.referrer || "direct",
      pagesViewed: [],
      sessionStart: now,
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      utmTerm: params.get("utm_term") || "",
    };
  } else {
    if (params.get("utm_source") && !data.utmSource) {
      data.utmSource = params.get("utm_source") || "";
      data.utmMedium = params.get("utm_medium") || "";
      data.utmCampaign = params.get("utm_campaign") || "";
      data.utmContent = params.get("utm_content") || "";
      data.utmTerm = params.get("utm_term") || "";
    }
  }

  const last = data.pagesViewed[data.pagesViewed.length - 1];
  if (!last || last.path !== path || now - last.ts > 2000) {
    data.pagesViewed.push({ path, ts: now });
  }

  saveData(data);
}

/** Get all tracking data formatted for the lead API. */
export function getTrackingPayload(): Record<string, string> {
  const data = getStoredData();
  if (!data) {
    return {
      source_website: window?.location?.hostname || "",
      landing_page: window?.location?.pathname || "",
      referrer: document?.referrer || "direct",
      device_type: getDeviceType(),
    };
  }

  const timeOnSite = Math.round((Date.now() - data.sessionStart) / 1000);
  const minutes = Math.floor(timeOnSite / 60);
  const seconds = timeOnSite % 60;
  const pages = data.pagesViewed.map((p) => p.path);
  const previousPage = pages.length >= 2 ? pages[pages.length - 2] : "";

  return {
    source_website: window?.location?.hostname || "",
    landing_page: data.landingPage,
    referrer: data.referrer,
    previous_page: previousPage,
    pages_viewed: pages.join(" → "),
    pages_viewed_count: String(pages.length),
    device_type: getDeviceType(),
    time_on_site: minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`,
    utm_source: data.utmSource,
    utm_medium: data.utmMedium,
    utm_campaign: data.utmCampaign,
    utm_content: data.utmContent,
    utm_term: data.utmTerm,
  };
}
```

### 3. Page View Tracker Component: `src/components/TrackPageView.tsx`

```tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/tracking";

export function TrackPageView() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(); }, [pathname]);
  return null;
}
```

---

## Wiring It Up

### Root Layout (`src/app/layout.tsx`)

Add the tracker and GA4 to the root layout:

```tsx
import Script from "next/script";
import { TrackPageView } from "@/components/TrackPageView";

const GA4_ID = process.env.GA4_ID || "";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
            </Script>
          </>
        )}
        <TrackPageView />
        {children}
      </body>
    </html>
  );
}
```

### Form Submission

When a form submits, POST to `/api/lead` like this:

```typescript
import { getTrackingPayload } from "@/lib/tracking";

await fetch("/api/lead", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    phone: "+15551234567",
    source: window.location.pathname,        // e.g. "/check-fha-loan-eligibility"
    tags: ["website-lead", "eligibility-form"], // adjust tags per form type
    customFields: {
      // Include whichever fields the form collects:
      property_used_for: "Primary Residence",
      home_buying_stage: "I need a pre-approval letter",
      estimated_purchase_price: "$300,000 - $399,999",
      has_real_estate_agent: "No",
      credit_rating: "Very Good (660-739)",
      veteran_or_military: "No",
      // For contact forms, use:
      // contact_message: "Their message here",
    },
    tracking: getTrackingPayload(),  // auto-includes source_website, pages viewed, etc.
  }),
});
```

### Tags Convention

Use consistent tags so GHL automations and filters work across all sites:
- `website-lead` — on every submission
- `eligibility-form` — from multi-step eligibility forms
- `contact-form` — from contact/message forms
- Optionally add site-specific tags like `site-makefloridayourhome` or `site-floridafhaloans`

---

## Eligibility Form Fields (Standard)

All micro sites use the same multi-step eligibility form with these steps:

| Step | Field Key | Type | Options |
|---|---|---|---|
| 1 | `property_used_for` | Radio | Primary Residence, Vacation, Investment |
| 2 | `home_buying_stage` | Radio | I have a signed contract / Making an offer / Need pre-approval / Buy in next few months / Buy 6+ months from now |
| 3 | `estimated_purchase_price` | Dropdown | Under $60K through Over $1.5M (13 ranges) |
| 4 | `has_real_estate_agent` | Radio | Yes / No |
| 5 | `credit_rating` | Radio | Excellent (740+) / Very Good (660-739) / Good (620-659) / Fair (580-619) / Poor (<580) |
| 6 | `veteran_or_military` | Radio | Yes / No |
| 7 | Contact info | Text inputs | firstName, lastName, email, phone |

---

## Checklist for New Micro Site

1. Copy the 3 files above (`/api/lead/route.ts`, `tracking.ts`, `TrackPageView.tsx`)
2. Add `<TrackPageView />` and GA4 scripts to root layout
3. Set environment variables (`GHL_API_KEY`, `GHL_LOCATION_ID`, `GA4_ID`)
4. Wire form `onSubmit` to POST to `/api/lead` with `getTrackingPayload()`
5. Use the same `customFields` keys listed above
6. Test: submit a form, check GHL contacts for the new lead with all fields populated
7. Add env vars to hosting platform (Vercel: `vercel env add`)

No GHL setup needed per site — the custom fields, API integration, and contact schema are shared across all sites.

---

## Reference: Main Site

The primary implementation lives at:
- **Repo:** `Next-Wave-Mortgage/makefloridayourhome`
- **Forms:** `src/app/(funnel)/home-purchase-eligibility/EligibilityForm.tsx` and `src/app/(marketing)/contact-us/ContactForm.tsx`
- **API route:** `src/app/api/lead/route.ts`
- **Tracker:** `src/lib/tracking.ts`
