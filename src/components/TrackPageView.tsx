"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackLeadCtaClick, trackPageView } from "@/lib/tracking";

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

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      trackLeadCtaClick(event.target);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
