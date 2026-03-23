"use client";

import { useEffect, useRef } from "react";

interface FormCraftsEmbedProps {
  fcKey: string;
}

export function FormCraftsEmbed({ fcKey }: FormCraftsEmbedProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Clear any previous content
    wrapper.innerHTML = "";

    // Create the FormCrafts container
    const fcDiv = document.createElement("div");
    fcDiv.setAttribute("data-fc-key", fcKey);
    fcDiv.style.width = "100%";
    wrapper.appendChild(fcDiv);

    // Load the embed script fresh
    const script = document.createElement("script");
    script.src = "https://app.formcrafts.com/embed.js";
    wrapper.appendChild(script);

    return () => {
      wrapper.innerHTML = "";
    };
  }, [fcKey]);

  return (
    <div
      ref={wrapperRef}
      className="fc-seamless"
    />
  );
}
