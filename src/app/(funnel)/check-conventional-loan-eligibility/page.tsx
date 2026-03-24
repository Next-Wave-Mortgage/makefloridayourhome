import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

export const metadata: Metadata = {
  title:
    "Check Your Conventional Loan Eligibility",
  description:
    "See if you qualify for a conventional loan in Florida. Competitive rates, as low as 3% down — takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-conventional-loan-eligibility",
  },
  openGraph: {
    title:
      "Check Your Conventional Loan Eligibility",
    description:
      "See if you qualify for a conventional loan in Florida. Competitive rates, as low as 3% down.",
    url: "https://www.makefloridayourhome.com/check-conventional-loan-eligibility",
    type: "website",
  },
};

export default function CheckConventionalLoanEligibilityPage() {
  return (
    <FunnelFormPage
      heading="See if you qualify for a conventional loan in Florida"
      subtitle="Competitive rates with as little as 3% down — find out in 2 minutes."
      fcKey="wkjetxp"
    />
  );
}
