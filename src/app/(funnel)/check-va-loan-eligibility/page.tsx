import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

export const metadata: Metadata = {
  title: "Check Your VA Loan Eligibility",
  description:
    "See if you qualify for a VA loan in Florida. Zero down payment for eligible veterans and active military — takes 2 minutes, no credit pull.",
  openGraph: {
    title: "Check Your VA Loan Eligibility",
    description:
      "See if you qualify for a VA loan in Florida. Zero down payment for eligible veterans and active military.",
    url: "https://www.makefloridayourhome.com/check-va-loan-eligibility",
    type: "website",
  },
};

export default function CheckVaLoanEligibilityPage() {
  return (
    <FunnelFormPage
      heading="See if you qualify for a VA loan in Florida"
      subtitle="Zero down payment and no PMI for eligible veterans and active-duty service members."
      fcKey="wkjetxp"
    />
  );
}
