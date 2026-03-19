import type { Metadata } from "next";
import { EligibilityForm } from "../home-purchase-eligibility/EligibilityForm";

export const metadata: Metadata = {
  title: "Check Your VA Loan Eligibility | Make Florida Your Home",
  description:
    "See if you qualify for a VA loan in Florida. Zero down payment for eligible veterans and active military — takes 2 minutes, no credit pull.",
  openGraph: {
    title: "Check Your VA Loan Eligibility | Make Florida Your Home",
    description:
      "See if you qualify for a VA loan in Florida. Zero down payment for eligible veterans and active military.",
    url: "https://www.makefloridayourhome.com/check-va-loan-eligibility",
    type: "website",
  },
};

export default function CheckVaLoanEligibilityPage() {
  return (
    <EligibilityForm
      heading="Check your VA loan eligibility in Florida"
      subtitle="VA loans offer zero down payment and no PMI for eligible veterans and active-duty service members."
    />
  );
}
