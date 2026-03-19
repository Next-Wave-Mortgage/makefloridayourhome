import type { Metadata } from "next";
import { EligibilityForm } from "../home-purchase-eligibility/EligibilityForm";

export const metadata: Metadata = {
  title: "Check Your USDA Loan Eligibility | Make Florida Your Home",
  description:
    "See if you qualify for a USDA loan in Florida. Zero down payment in eligible rural areas — takes 2 minutes, no credit pull.",
  openGraph: {
    title: "Check Your USDA Loan Eligibility | Make Florida Your Home",
    description:
      "See if you qualify for a USDA loan in Florida. Zero down payment in eligible rural areas.",
    url: "https://www.makefloridayourhome.com/check-usda-loan-eligibility",
    type: "website",
  },
};

export default function CheckUsdaLoanEligibilityPage() {
  return (
    <EligibilityForm
      heading="Check your USDA loan eligibility in Florida"
      subtitle="USDA loans offer zero down payment for homes in eligible rural and suburban areas."
    />
  );
}
