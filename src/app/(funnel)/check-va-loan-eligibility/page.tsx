import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your VA Loan Eligibility",
  description:
    "See if you qualify for a VA loan in Florida. Zero down payment for eligible veterans and active military - takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-va-loan-eligibility",
  },
  openGraph: {
    title: "Check Your VA Loan Eligibility",
    description:
      "See if you qualify for a VA loan in Florida. Zero down payment for eligible veterans and active military.",
    url: "https://www.makefloridayourhome.com/check-va-loan-eligibility",
    type: "website",
  },
};

export default function CheckVaLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.va} />;
}
