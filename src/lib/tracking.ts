/**
 * Lightweight visitor tracking — stores browsing data in sessionStorage
 * and sends it all with form submissions to GHL.
 */

const STORAGE_KEY = "mfyh_tracking";

const ELIGIBILITY_PATHS = new Set([
  "/home-purchase-eligibility",
  "/check-dpa-eligibility",
  "/check-fha-loan-eligibility",
  "/check-va-loan-eligibility",
  "/check-conventional-loan-eligibility",
  "/check-usda-loan-eligibility",
  "/check-hometown-heroes-eligibility",
  "/check-reverse-mortgage-eligibility",
  "/check-heloc-eligibility",
  "/check-manufactured-home-loan-eligibility",
  "/check-non-qm-loan-eligibility",
  "/check-jumbo-loan-eligibility",
  "/check-renovation-loan-eligibility",
  "/check-alternative-loan-eligibility",
]);

interface LeadCtaData {
  ctaPage: string;
  ctaText: string;
  ctaId: string;
  ctaLocation: string;
  ctaDestination: string;
}

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
  lastLeadCta?: LeadCtaData;
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
  } catch {
    // sessionStorage full or unavailable — silently fail
  }
}

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

function cleanText(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, 240);
}

function getAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLAnchorElement>("a[href]");
}

function dataValue(
  anchor: HTMLAnchorElement,
  key: "leadCtaId" | "leadCtaLocation",
) {
  const direct = anchor.dataset[key]?.trim();
  if (direct) return direct;

  const parent = anchor.closest<HTMLElement>(`[data-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}]`);
  return parent?.dataset[key]?.trim() || "";
}

/** Records the page and button/link that sent a visitor into a lead funnel. */
export function trackLeadCtaClick(target: EventTarget | null) {
  if (typeof window === "undefined") return;

  const anchor = getAnchor(target);
  if (!anchor) return;

  let url: URL;
  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return;
  }

  if (url.origin !== window.location.origin) return;

  const destination = normalizePath(url.pathname);
  if (!ELIGIBILITY_PATHS.has(destination)) return;

  const now = Date.now();
  const params = new URLSearchParams(window.location.search);
  const data =
    getStoredData() || {
      landingPage: window.location.pathname,
      referrer: document.referrer || "direct",
      pagesViewed: [{ path: window.location.pathname, ts: now }],
      sessionStart: now,
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      utmTerm: params.get("utm_term") || "",
    };

  data.lastLeadCta = {
    ctaPage: window.location.pathname,
    ctaText: cleanText(anchor.textContent || anchor.getAttribute("aria-label") || ""),
    ctaId: dataValue(anchor, "leadCtaId") || anchor.id || "",
    ctaLocation: dataValue(anchor, "leadCtaLocation"),
    ctaDestination: destination,
  };

  saveData(data);
}

/** Call on every page load/navigation to record the visit */
export function trackPageView() {
  if (typeof window === "undefined") return;

  const now = Date.now();
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  let data = getStoredData();

  if (!data) {
    // First page of session — capture entry data
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
    // Capture UTMs if they appear on a later page (e.g. clicked a tracked link)
    if (params.get("utm_source") && !data.utmSource) {
      data.utmSource = params.get("utm_source") || "";
      data.utmMedium = params.get("utm_medium") || "";
      data.utmCampaign = params.get("utm_campaign") || "";
      data.utmContent = params.get("utm_content") || "";
      data.utmTerm = params.get("utm_term") || "";
    }
  }

  // Don't duplicate if same page recorded within 2 seconds (e.g. re-render)
  const last = data.pagesViewed[data.pagesViewed.length - 1];
  if (!last || last.path !== path || now - last.ts > 2000) {
    data.pagesViewed.push({ path, ts: now });
  }

  saveData(data);
}

/** Get all tracking data formatted for the lead API */
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

  // The page right before the current form page
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

/** Get tracking data in the shared lead-form contract's camelCase shape. */
export function getLeadFormAttributionPayload(
  leadIntent: string,
): Record<string, string> {
  const tracking = getTrackingPayload();
  const data = getStoredData();
  const currentPath =
    typeof window === "undefined" ? "" : normalizePath(window.location.pathname);
  const lastCta =
    data?.lastLeadCta?.ctaDestination === currentPath
      ? data.lastLeadCta
      : null;

  return {
    leadIntent,
    sourceWebsite:
      typeof window === "undefined" ? "" : window.location.hostname,
    formPage: currentPath,
    landingPage: tracking.landing_page || currentPath,
    referrer: tracking.referrer || "",
    previousPage: lastCta?.ctaPage || tracking.previous_page || "",
    pagesViewed: tracking.pages_viewed || currentPath,
    pagesViewedCount: tracking.pages_viewed_count || "",
    deviceType: tracking.device_type || "",
    timeOnSite: tracking.time_on_site || "",
    ctaPage: lastCta?.ctaPage || "",
    ctaText: lastCta?.ctaText || "",
    ctaId: lastCta?.ctaId || "",
    ctaLocation: lastCta?.ctaLocation || "",
    utm_source: tracking.utm_source || "",
    utm_medium: tracking.utm_medium || "",
    utm_campaign: tracking.utm_campaign || "",
    utm_content: tracking.utm_content || "",
    utm_term: tracking.utm_term || "",
  };
}
