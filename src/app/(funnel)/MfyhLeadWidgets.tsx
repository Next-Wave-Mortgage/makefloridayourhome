"use client";

import Script from "next/script";
import { createElement, useEffect, useId, useMemo } from "react";
import { getLeadFormAttributionPayload } from "@/lib/tracking";
import type { LeadFunnelConfig } from "./leadFunnelConfigs";

type MfyhLeadWidgetsProps = {
  config: LeadFunnelConfig;
};

function manifestFor(config: LeadFunnelConfig) {
  return {
    version: "1.0",
    program: {
      slug: config.programSlug,
      name: config.programName,
      category: config.programCategory,
      sponsor: config.programSponsor || "",
      description: config.description,
    },
    geography: {
      state: "FL",
      county: null,
      city: null,
    },
    microsite: {
      url: "https://www.makefloridayourhome.com",
    },
    brand: {
      primary: "#006948",
      accent: "#1c96c5",
      text: "#2e4136",
      background: "#f6fcf6",
      logoUrl: "https://www.makefloridayourhome.com/images/logo.webp",
    },
  };
}

export function MfyhLeadWidgets({ config }: MfyhLeadWidgetsProps) {
  const reactId = useId().replace(/:/g, "");
  const formId = `mfyh-lead-form-${reactId}`;
  const widgetId = `mfyh-booking-widget-${reactId}`;
  const manifestJson = useMemo(
    () => JSON.stringify(manifestFor(config)),
    [config],
  );

  useEffect(() => {
    const host = document.getElementById(formId);
    const widget = document.getElementById(widgetId);
    if (!host || !widget) return;

    host.style.transition = "opacity 200ms ease";
    widget.style.transition = "opacity 200ms ease";

    let active = true;
    let observer: MutationObserver | null = null;
    let frame = 0;

    const onSubmit = (event: Event) => {
      const detail = (event as CustomEvent<Record<string, string>>).detail;
      if (!detail) return;

      Object.assign(detail, getLeadFormAttributionPayload(config.leadIntent));
      detail.source = config.source;
      detail.leadIntent = config.leadIntent;
      detail.state ||= "FL";
    };

    const onSuccess = (event: Event) => {
      const successEvent = event as CustomEvent<{ leadId?: string }>;
      const leadId = successEvent.detail?.leadId?.trim() || "";
      const backToProgram = document.getElementById("back-to-program");
      if (!leadId) return;

      successEvent.preventDefault();
      widget.setAttribute("lead-id", leadId);
      widget.setAttribute("program-name", config.programName);

      host.style.pointerEvents = "none";
      host.style.opacity = "0";

      window.setTimeout(() => {
        host.style.display = "none";
        host.setAttribute("aria-hidden", "true");
        widget.style.display = "block";
        widget.setAttribute("aria-hidden", "false");
        if (backToProgram) {
          backToProgram.style.display = "none";
        }

        window.requestAnimationFrame(() => {
          widget.style.opacity = "1";
          widget.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });

        document.title = `Schedule your call - ${config.programName}`;
      }, 200);
    };

    const applyHeroHeadline = () => {
      const heroHeadline = config.heroHeadline;
      if (!heroHeadline) return;

      const heading = host.shadowRoot
        ?.querySelector("nwl-lead-form-view")
        ?.shadowRoot?.querySelector(".hero-block h1");

      if (heading && heading.textContent !== heroHeadline) {
        heading.textContent = heroHeadline;
      }
    };

    const skipStateStep = () => {
      const view = host.shadowRoot?.querySelector("nwl-lead-form-view") as
        | (HTMLElement & {
            form?: Record<string, string>;
            fieldErrors?: Record<string, string | undefined>;
            formMessage?: string;
            requestUpdate?: () => void;
            goForward?: () => void;
            currentStepIndex?: number;
          })
        | null;
      if (!view) return;

      const root = view.shadowRoot;
      const question = root?.querySelector(".question")?.textContent?.trim();

      if (question !== "What state are you buying in?") return;

      if (view.form) {
        view.form.state = "FL";
      }

      if (view.fieldErrors) {
        view.fieldErrors.state = undefined;
      }

      view.formMessage = "";
      view.requestUpdate?.();

      if (typeof view.goForward === "function") {
        view.goForward();
      } else if (typeof view.currentStepIndex === "number") {
        view.currentStepIndex += 1;
      }
    };

    const watchForm = () => {
      if (!active) return;

      const root = host.shadowRoot
        ?.querySelector("nwl-lead-form-view")
        ?.shadowRoot;

      if (!root) {
        frame = window.requestAnimationFrame(watchForm);
        return;
      }

      observer = new MutationObserver(() => {
        skipStateStep();
        applyHeroHeadline();
      });
      observer.observe(root, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      skipStateStep();
      applyHeroHeadline();
    };

    host.addEventListener("nextwave-lead-form:submit", onSubmit);
    host.addEventListener("nextwave-lead-form:success", onSuccess);
    customElements.whenDefined("nextwave-lead-form").then(() => {
      if (active) watchForm();
    });

    return () => {
      active = false;
      host.removeEventListener("nextwave-lead-form:submit", onSubmit);
      host.removeEventListener("nextwave-lead-form:success", onSuccess);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [config, formId, widgetId]);

  return (
    <div className="nextwave-widget-container">
      <script
        type="application/json"
        id="nextwave-microsite-manifest"
        dangerouslySetInnerHTML={{ __html: manifestJson }}
      />
      <Script
        defer
        type="module"
        src="https://lead-form.nextwavemortgage.com/nextwave-lead-form.js"
        strategy="afterInteractive"
      />
      <Script
        defer
        type="module"
        src="https://booking.nextwavemortgage.com/nextwave-booking-widget.js"
        strategy="afterInteractive"
      />
      {createElement("nextwave-lead-form", {
        id: formId,
        program: config.programSlug,
        "program-name": config.programName,
        "program-tagline": config.description,
        "lead-intent": config.leadIntent,
        source: config.source,
        state: "FL",
        "disable-auto-redirect": "",
      })}
      {createElement("nextwave-booking-widget", {
        id: widgetId,
        style: { display: "none", opacity: 0 },
      })}
    </div>
  );
}
