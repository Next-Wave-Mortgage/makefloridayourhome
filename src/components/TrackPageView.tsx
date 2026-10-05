"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackLeadCtaClick, trackPageView } from "@/lib/tracking";

/** Drop this in the root layout — records every page navigation for both GA4 and GHL tracking. */
export function TrackPageView({
  ga4Id,
  sharedGa4Id,
}: {
  ga4Id: string;
  sharedGa4Id: string;
}) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const previousSharedPage = useRef("");

  useEffect(() => {
    // Custom GHL session tracking — runs on every navigation
    trackPageView();

    const sharedPage = window.location.origin + pathname;

    // GA4 page_view — skip first render (gtag('config') already fires it)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      previousSharedPage.current = sharedPage;
      return;
    }

    // Fire GA4 page_view on client-side navigations
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (ga4Id) {
        window.gtag("event", "page_view", {
          send_to: ga4Id,
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
      // The shared property never receives query strings or fragments.
      window.gtag("event", "page_view", {
        send_to: sharedGa4Id,
        page_location: sharedPage,
        page_referrer: previousSharedPage.current,
        page_title: document.title,
      });
      previousSharedPage.current = sharedPage;
    }
  }, [pathname, ga4Id, sharedGa4Id]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      trackLeadCtaClick(event.target);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
