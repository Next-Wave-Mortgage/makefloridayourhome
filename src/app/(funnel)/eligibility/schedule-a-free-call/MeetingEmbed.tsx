"use client";

import { useEffect } from "react";
import Script from "next/script";

export function MeetingEmbed() {
  function initMeeting() {
    const container = document.getElementById("hs-meeting-embed");
    if (container && container.children.length === 0) {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://meetings.hubspot.com/phil-ganz/schedule-a-free-call?embed=true";
      iframe.width = "100%";
      iframe.style.height = "100%";
      iframe.style.minHeight = "580px";
      iframe.style.border = "none";
      iframe.style.borderRadius = "16px";
      iframe.title = "Schedule a call with Phil Ganz";
      container.appendChild(iframe);
    }
  }

  useEffect(() => {
    if ((window as unknown as Record<string, unknown>).hbspt) {
      initMeeting();
    }
  }, []);

  return (
    <>
      <div id="hs-meeting-embed" className="h-full min-h-[580px]" />
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
        onLoad={initMeeting}
      />
    </>
  );
}
