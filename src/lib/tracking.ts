/**
 * Lightweight visitor tracking — stores browsing data in sessionStorage
 * and sends it all with form submissions to GHL.
 */

const STORAGE_KEY = "mfyh_tracking";

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
  } catch {
    // sessionStorage full or unavailable — silently fail
  }
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
      landing_page: window?.location?.pathname || "",
      referrer: document?.referrer || "direct",
      device_type: getDeviceType(),
    };
  }

  const timeOnSite = Math.round((Date.now() - data.sessionStart) / 1000);
  const minutes = Math.floor(timeOnSite / 60);
  const seconds = timeOnSite % 60;

  return {
    landing_page: data.landingPage,
    referrer: data.referrer,
    pages_viewed: data.pagesViewed.map((p) => p.path).join(" → "),
    pages_viewed_count: String(data.pagesViewed.length),
    device_type: getDeviceType(),
    time_on_site: minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`,
    utm_source: data.utmSource,
    utm_medium: data.utmMedium,
    utm_campaign: data.utmCampaign,
    utm_content: data.utmContent,
    utm_term: data.utmTerm,
  };
}
