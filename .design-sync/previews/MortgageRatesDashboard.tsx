import * as React from "react";
import {
  MortgageRatesDashboard,
  sampleMortgageMarketSnapshot,
} from "makefloridayourhome";

// Mirrors src/app/(marketing)/mortgage-rates/page.tsx, which renders the
// dashboard with a live FRED-backed snapshot; previews use the bundled
// static sample shaped exactly like the live payload.
export const Default = () => (
  <MortgageRatesDashboard snapshot={sampleMortgageMarketSnapshot} />
);
