# Meetings System — Architecture & Scaling Guide

## What We Built

A custom booking system that replaces HubSpot Meetings. After a lead submits an eligibility form, they're redirected to a branded booking page that pulls real-time availability from GoHighLevel and creates confirmed appointments.

## The Flow

```
Eligibility Form → /api/lead (scores lead, creates GHL contact)
                 → Redirect to /schedule-a-call?firstName=X&contactId=Y
                 → Booking page fetches slots from GHL Calendar API
                 → Lead picks a time → /api/calendar/book creates appointment in GHL
                 → Confirmation screen
```

## Key Files

| File | Purpose |
|------|---------|
| `src/app/(funnel)/schedule-a-call/page.tsx` | Server component wrapper with SEO metadata |
| `src/app/(funnel)/schedule-a-call/BookingCalendar.tsx` | Full booking UI — calendar widget, confirmation, success screen |
| `src/app/api/calendar/slots/route.ts` | Proxies GHL free-slots API (keeps API key server-side) |
| `src/app/api/calendar/book/route.ts` | Creates appointment in GHL, fetches contact name from GHL |
| `src/app/api/lead/route.ts` | Lead submission + lead scoring (0-12 scale) |
| `src/app/(funnel)/home-purchase-eligibility/EligibilityForm.tsx` | All 7 eligibility forms redirect here after submit |

## GHL Calendar

- **Calendar ID:** `2NWNxF7BIWTs3zv1Wk4y`
- **Name:** Mortgage Consultation
- **Type:** Event calendar
- **Slots:** 30 minutes, 8am-7pm ET, 7 days/week
- **Location:** Currently set for Phil Ganz only

## Lead Scoring

Every eligibility form submission gets scored 0-12 and saved to the GHL contact's "Lead Score" custom field (`1GESZ5dFXiCMFRQmuRM5`).

| Factor | Points | Max Score |
|--------|--------|-----------|
| Purchase price ($300k+) | 0-3 | 3 |
| Credit rating (Excellent = 3) | 0-3 | 3 |
| Buying stage (signed contract = 3) | 0-3 | 3 |
| Has real estate agent | 0-2 | 2 |
| Veteran/military | 0-1 | 1 |
| **Total** | | **12** |

The score is saved to GHL but **not currently used for routing**. It's being collected so we have data when we're ready to route by score.

## Current State (Single LO)

- Phil Ganz is the only loan officer
- His name and photo (`/images/team/phil-ganz.jpg`) are hardcoded in the booking page
- All appointments go to one GHL calendar
- Lead score is tracked but not used for routing yet

## How to Scale to Multiple Loan Officers

### Step 1: Add LOs to GHL

Each new loan officer needs to:
1. Be invited as a user in the GHL location
2. Connect their Google or Outlook calendar (so real availability shows)

### Step 2: Choose a Routing Strategy

**Option A — Round-Robin (simplest, do this first)**

1. Convert the existing calendar to round-robin type, or create a new round-robin calendar
2. Add all LOs as team members on that calendar
3. Update `BookingCalendar.tsx`: change "Meet with Phil Ganz" to "Meet with a Mortgage Specialist" and remove Phil's hardcoded photo (or show a generic team image)
4. GHL handles even distribution automatically
5. Code changes: ~10 lines

**Option B — Score-Based Routing (add when you have data)**

Once you have 50-100 leads and can see the score distribution:

1. Create 2 GHL calendars:
   - "Senior Consultation" → Phil (gets hot leads)
   - "General Consultation" → round-robin for other LOs
2. Set a score threshold based on real data (e.g., 7+)
3. In `src/app/api/calendar/slots/route.ts` and `src/app/api/calendar/book/route.ts`:
   - Accept a `calendarId` parameter instead of using the hardcoded one
   - Or determine the calendar server-side based on the contact's lead score
4. In `EligibilityForm.tsx` or the redirect logic:
   - Pass the appropriate calendar tier to the booking page
5. In `BookingCalendar.tsx`:
   - Show the correct LO's name/photo based on which calendar was selected
   - Or keep it generic: "Meet with a Specialist"

**Option C — Time-of-Day Routing (layer on top of A or B)**

Route after-hours leads (7pm+ and weekends) to a specific LO:

1. The lead API already knows the submission time
2. Add logic: if submitted outside business hours, use the after-hours LO's calendar
3. Otherwise, use the normal round-robin or score-based calendar

### Step 3: Code Changes Checklist

When adding a new LO:

- [ ] Invite them to GHL location as a user
- [ ] Have them connect their Google/Outlook calendar
- [ ] Add them as a team member on the appropriate GHL calendar
- [ ] If using score-based routing: create their calendar and add the ID to the config
- [ ] Update `BookingCalendar.tsx` if showing specific LO info (name/photo)

### What Does NOT Need to Change

- Lead scoring logic (already built, already saving to GHL)
- Visitor tracking (landing page, referrer, UTMs, etc.)
- The booking page UI structure (just swap names/photos)
- The appointment creation flow
- The form → booking redirect

## Environment Variables

```
GHL_API_KEY=pit-xxxxx          # GHL Private Integration token
GHL_LOCATION_ID=S2ev1gjnsIoDREEjFf3h
```

## Important Notes

- Phil needs to be invited as a GHL user and connect his calendar for real availability to show (right now all open hours show as available since no calendar is connected)
- The booking page URL only contains `firstName` and `contactId` — no sensitive data is exposed
- The book API fetches contact details from GHL server-side, so no PII passes through the client
- Delete test appointments and test leads before go-live
