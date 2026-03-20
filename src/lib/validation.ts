import { z } from "zod";

/** Allowed tracking field keys — only these are forwarded to CRM */
const ALLOWED_TRACKING_KEYS = new Set([
  "landing_page",
  "referrer",
  "pages_viewed",
  "pages_viewed_count",
  "device_type",
  "time_on_site",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "source_website",
  "previous_page",
]);

/** Max length for any single string field */
const MAX_FIELD_LENGTH = 500;

const safeString = z.string().max(MAX_FIELD_LENGTH).trim();

export const leadSchema = z.object({
  firstName: safeString.min(1, "First name is required").max(100),
  lastName: safeString.min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email").max(254),
  phone: z
    .string()
    .max(20)
    .regex(/^[\d\s()+\-.*#]*$/, "Invalid phone format")
    .optional()
    .or(z.literal("")),
  source: safeString.optional().default(""),
  customFields: z.record(safeString, safeString).optional(),
  tracking: z
    .record(z.string(), z.string().max(2000))
    .optional()
    .transform((val) => {
      if (!val) return val;
      // Only allow whitelisted tracking keys
      const filtered: Record<string, string> = {};
      for (const [key, value] of Object.entries(val)) {
        if (ALLOWED_TRACKING_KEYS.has(key)) {
          filtered[key] = value;
        }
      }
      return filtered;
    }),
  tags: z.array(safeString).max(10).optional(),
});

export const bookingSchema = z.object({
  contactId: z
    .string()
    .min(1, "contactId is required")
    .max(50)
    .regex(/^[a-zA-Z0-9]+$/, "Invalid contactId format"),
  slot: z
    .string()
    .min(1, "slot is required")
    .max(50)
    .refine((val) => !isNaN(Date.parse(val)), "Invalid datetime format"),
});

/** IANA timezone names allowed — common US timezones */
const VALID_TIMEZONES = new Set(
  Intl.supportedValuesOf("timeZone"),
);

export const slotsQuerySchema = z.object({
  startDate: z
    .string()
    .regex(/^\d{10,13}$/, "Invalid timestamp")
    .transform(Number)
    .refine((n) => n > 0, "Invalid timestamp"),
  endDate: z
    .string()
    .regex(/^\d{10,13}$/, "Invalid timestamp")
    .transform(Number)
    .refine((n) => n > 0, "Invalid timestamp"),
  timezone: z
    .string()
    .max(50)
    .default("America/New_York")
    .refine(
      (tz) => VALID_TIMEZONES.has(tz),
      "Invalid timezone",
    ),
});

export type LeadPayload = z.infer<typeof leadSchema>;
export type BookingPayload = z.infer<typeof bookingSchema>;
export type SlotsQuery = z.infer<typeof slotsQuerySchema>;
