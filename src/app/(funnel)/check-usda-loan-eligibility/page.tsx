import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

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
    <FunnelFormPage
      heading="See if you qualify for a zero-down USDA loan in Florida"
      subtitle="No down payment required in eligible rural and suburban areas — find out in 2 minutes."
      fcKey="wkjetxp"
    />
  );
}
