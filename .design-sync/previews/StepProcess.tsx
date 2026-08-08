import * as React from "react";
import { StepProcess } from "makefloridayourhome";

export const GreenTint = () => (
  <StepProcess
    heading={
      <>
        How to <span className="text-brand-green">Apply</span>
      </>
    }
    bg="green-tint"
    steps={[
      {
        title: "Check Your Eligibility",
        description:
          "Answer a few questions about your income, county, and job — no credit pull required.",
      },
      {
        title: "Get Matched With Programs",
        description:
          "See every grant and assistance program you qualify for, with real dollar amounts.",
      },
      {
        title: "Talk to a Florida Expert",
        description:
          "A licensed loan officer walks you through rates, paperwork, and next steps.",
      },
      {
        title: "Close on Your Home",
        description:
          "Your assistance funds are applied at closing — most buyers close in about 30 days.",
      },
    ]}
  />
);

export const White = () => (
  <StepProcess
    heading={
      <>
        Getting an <span className="text-brand-green">FHA Loan</span>
      </>
    }
    bg="white"
    steps={[
      {
        title: "Get Pre-Approved",
        description: "Verify your income and credit to see how much home you can afford.",
      },
      {
        title: "Find Your Home",
        description: "Shop with confidence knowing your budget and assistance options.",
      },
      {
        title: "Close & Move In",
        description: "Sign the paperwork, get the keys, and make Florida your home.",
      },
    ]}
  />
);
