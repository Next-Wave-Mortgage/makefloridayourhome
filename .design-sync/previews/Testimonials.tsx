import * as React from "react";
import { Testimonials } from "makefloridayourhome";

// Freeze the marquee animation so the carousel is captured at its start
// position instead of mid-scroll (which clips the first review card).
export const Default = () => (
  <>
    <style>{`*, *::before, *::after { animation: none !important; transition: none !important; }`}</style>
    <Testimonials />
  </>
);
