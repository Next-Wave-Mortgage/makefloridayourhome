import * as React from "react";
import { DataTable } from "makefloridayourhome";

export const ProgramComparison = () => (
  <DataTable
    caption="Florida down payment assistance programs — 2026"
    headers={["Program", "Max Assistance", "Type", "Who Qualifies"]}
    rows={[
      ["Hometown Heroes", "$35,000", "0% deferred second", "Full-time Florida workers"],
      ["Florida Assist", "$10,000", "0% deferred second", "First-time buyers statewide"],
      ["HFA PLUS Second", "3–5% of loan", "Forgivable second", "First-time buyers statewide"],
      ["County SHIP Funds", "$10,000–$60,000", "Varies by county", "Income-qualified buyers"],
    ]}
  />
);

export const LoanLimits = () => (
  <DataTable
    headers={["County", "FHA Limit (1-unit)", "Conventional Limit"]}
    rows={[
      ["Miami-Dade", "$654,350", "$806,500"],
      ["Broward", "$654,350", "$806,500"],
      ["Orange", "$539,350", "$806,500"],
      ["Hillsborough", "$539,350", "$806,500"],
    ]}
  />
);
