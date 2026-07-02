import Script from "next/script";
import { createElement } from "react";

const programName = "Florida Hometown Heroes Housing Program";

const manifestJson = `{
  "version": "1.0",
  "program": {
    "slug": "florida-hometown-heroes",
    "name": "Florida Hometown Heroes Housing Program",
    "category": "down-payment-assistance",
    "sponsor": "Florida Housing Finance Corporation",
    "description": "Up to $35,000 toward your down payment and closing costs for Florida's frontline community workers \\u2014 teachers, nurses, first responders, and more.",
    "maxAssistanceAmount": 35000
  },
  "geography": {
    "state": "FL",
    "county": null,
    "city": null
  },
  "microsite": {
    "url": "https://www.floridahometownheroesloanprogram.com"
  },
  "brand": {
    "primary": "#006948",
    "accent": "#1c96c5",
    "text": "#2e4136",
    "background": "#f6fcf6"
  }
}`;

export function HometownHeroesWidgets() {
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
        id: "nwl-form",
        source: "hometown-heroes-mfyh",
        "disable-auto-redirect": "",
      })}
      {createElement("nextwave-booking-widget", {
        id: "nwb-widget",
        style: { display: "none" },
      })}
      <Script id="hometown-heroes-widget-swap" strategy="afterInteractive">
        {`
          (() => {
            const host = document.getElementById("nwl-form");
            const widget = document.getElementById("nwb-widget");
            if (!host || !widget) return;

            host.style.transition = "opacity 200ms ease";
            widget.style.transition = "opacity 200ms ease";

            host.addEventListener("nextwave-lead-form:submit", (event) => {
              event.detail.state ||= host.getAttribute("state") || "FL";
            });

            host.addEventListener("nextwave-lead-form:success", (event) => {
              const detail = event.detail || {};
              const leadId = (detail.leadId || "").trim();

              if (!leadId) return;

              event.preventDefault();
              widget.setAttribute("lead-id", leadId);
              widget.setAttribute("program-name", "${programName}");

              host.style.pointerEvents = "none";
              host.style.opacity = "0";

              setTimeout(() => {
                host.style.display = "none";
                host.setAttribute("aria-hidden", "true");
                widget.style.display = "block";
                widget.setAttribute("aria-hidden", "false");

                requestAnimationFrame(() => {
                  widget.style.opacity = "1";
                  widget.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                });

                try {
                  document.title = "Schedule your call - ${programName}";
                } catch (_) {}
              }, 200);
            });

            const skipStateStep = () => {
              const view = host?.shadowRoot?.querySelector("nwl-lead-form-view");
              const root = view?.shadowRoot;
              const question = root?.querySelector(".question")?.textContent?.trim();

              if (question !== "What state are you buying in?") return;

              view.form.state = host.getAttribute("state") || "FL";
              view.fieldErrors.state = undefined;
              view.formMessage = "";
              view.requestUpdate?.();

              if (typeof view.goForward === "function") {
                view.goForward();
              } else {
                view.currentStepIndex += 1;
              }
            };

            const watchForm = () => {
              const root = host?.shadowRoot
                ?.querySelector("nwl-lead-form-view")
                ?.shadowRoot;

              if (!root) {
                window.requestAnimationFrame(watchForm);
                return;
              }

              new MutationObserver(skipStateStep).observe(root, {
                childList: true,
                subtree: true,
                characterData: true,
              });
              skipStateStep();
            };

            customElements.whenDefined("nextwave-lead-form").then(watchForm);
          })();
        `}
      </Script>
    </div>
  );
}
