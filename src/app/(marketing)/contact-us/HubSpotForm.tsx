"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

export function HubSpotForm() {
  const initForm = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "20342342",
        formId: "c76ac460-5460-4391-89cc-fb1dee197296",
        target: "#hubspot-contact-form",
      });
    }
  };

  useEffect(() => {
    if (window.hbspt) initForm();
  }, []);

  return (
    <>
      <div id="hubspot-contact-form" />
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={initForm}
      />
    </>
  );
}
