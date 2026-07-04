import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your FHA Loan Eligibility",
  description:
    "See if you qualify for an FHA loan in Florida. Low down payment, flexible credit - takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-fha-loan-eligibility",
  },
  openGraph: {
    title: "Check Your FHA Loan Eligibility",
    description:
      "See if you qualify for an FHA loan in Florida. Low down payment, flexible credit - takes 2 minutes.",
    url: "https://www.makefloridayourhome.com/check-fha-loan-eligibility",
    type: "website",
  },
};

export default function CheckFhaLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.fha} />;
}
