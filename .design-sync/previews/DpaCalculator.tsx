import * as React from "react";
import {
  DpaCalculator,
  FLORIDA_COUNTIES,
  FLORIDA_DPA_PROGRAMS,
  toDpaCalculatorProgramSummaries,
} from "makefloridayourhome";

const programs = toDpaCalculatorProgramSummaries(FLORIDA_DPA_PROGRAMS);

// Mirrors src/app/(marketing)/florida-down-payment-assistance-calculator/page.tsx:
// the calculator sits on a green-tint band with a brand-green top strip.
export const OnCalculatorPage = () => (
  <section
    className="bg-green-tint/60 pb-10 pt-10 sm:pb-12 lg:pb-16"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #006948 0px, #006948 24px, transparent 24px)",
    }}
  >
    <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
      <DpaCalculator counties={FLORIDA_COUNTIES} programs={programs} />
    </div>
  </section>
);

export const Standalone = () => (
  <div className="bg-white p-6">
    <DpaCalculator counties={FLORIDA_COUNTIES} programs={programs} />
  </div>
);
