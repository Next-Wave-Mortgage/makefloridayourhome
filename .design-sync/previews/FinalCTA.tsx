import * as React from "react";
import { FinalCTA } from "makefloridayourhome";

// Freeze animations so the capture doesn't catch the fade-up mid-flight
// (elements are fully visible at rest; the animation only adds entrance motion).
export const Default = () => (
  <>
    <style>{`*, *::before, *::after { animation: none !important; transition: none !important; }`}</style>
    <FinalCTA />
  </>
);
