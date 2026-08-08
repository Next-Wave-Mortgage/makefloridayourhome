import * as React from "react";
import { ToolHero } from "makefloridayourhome";

export const Default = () => (
  <ToolHero
    title="Florida Down Payment Assistance Calculator"
    description="Find Florida down payment assistance programs that may help with your down payment or closing costs based on county, income, buyer status, and loan type."
    tags={["down payment assistance", "calculator", "florida"]}
    breadcrumbs={[{ label: "Calculators", href: "/calculators" }]}
    cta={{
      href: "/check-dpa-eligibility",
      label: "Check My DPA Eligibility",
      note: "Start the guided eligibility funnel and verify which programs are realistic for your scenario.",
    }}
  />
);

export const Minimal = () => (
  <ToolHero
    title="Florida Mortgage Payment Calculator"
    description="Estimate your monthly payment including principal, interest, taxes, insurance, and HOA dues for any Florida home."
  />
);
