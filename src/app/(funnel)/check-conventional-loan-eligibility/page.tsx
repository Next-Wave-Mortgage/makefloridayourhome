import type { Metadata } from "next";
import { EligibilityForm } from "../home-purchase-eligibility/EligibilityForm";

export const metadata: Metadata = {
  title:
    "Check Your Conventional Loan Eligibility | Make Florida Your Home",
  description:
    "See if you qualify for a conventional loan in Florida. Competitive rates, as low as 3% down — takes 2 minutes, no credit pull.",
  openGraph: {
    title:
      "Check Your Conventional Loan Eligibility | Make Florida Your Home",
    description:
      "See if you qualify for a conventional loan in Florida. Competitive rates, as low as 3% down.",
    url: "https://makefloridayourhome.com/check-conventional-loan-eligibility",
    type: "website",
  },
};

export default function CheckConventionalLoanEligibilityPage() {
  return (
    <EligibilityForm
      heading="Check your conventional loan eligibility in Florida"
      subtitle="Conventional loans offer competitive rates with as little as 3% down for qualified buyers."
    />
  );
}
