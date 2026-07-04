import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Manufactured Home Loan Eligibility",
  description:
    "See if you qualify for manufactured home financing in Florida. Takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-manufactured-home-loan-eligibility",
  },
  openGraph: {
    title: "Check Your Manufactured Home Loan Eligibility",
    description:
      "See if you qualify for manufactured home financing in Florida.",
    url: "https://www.makefloridayourhome.com/check-manufactured-home-loan-eligibility",
    type: "website",
  },
};

export default function CheckManufacturedHomeLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.manufacturedHome} />;
}
