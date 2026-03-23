"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/tracking";

/** Drop this in the root layout — records every page navigation for both GA4 and GHL tracking. */
export function TrackPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Custom GHL session tracking — runs on every navigation
    trackPageView();

    // GA4 page_view — skip first render (gtag('config') already fires it)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Fire GA4 page_view on client-side navigations
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
}
