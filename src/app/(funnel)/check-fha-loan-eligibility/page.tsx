import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

export const metadata: Metadata = {
  title: "Check Your FHA Loan Eligibility | Make Florida Your Home",
  description:
    "See if you qualify for an FHA loan in Florida. Low down payment, flexible credit — takes 2 minutes, no credit pull.",
  openGraph: {
    title: "Check Your FHA Loan Eligibility | Make Florida Your Home",
    description:
      "See if you qualify for an FHA loan in Florida. Low down payment, flexible credit — takes 2 minutes.",
    url: "https://www.makefloridayourhome.com/check-fha-loan-eligibility",
    type: "website",
  },
};

export default function CheckFhaLoanEligibilityPage() {
  return (
    <FunnelFormPage
      heading="See if you qualify for an FHA loan in Florida"
      subtitle="As little as 3.5% down with flexible credit requirements — find out in 2 minutes."
      fcKey="wkjetxp"
    />
  );
}
