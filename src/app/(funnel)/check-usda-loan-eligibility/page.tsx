import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your USDA Loan Eligibility",
  description:
    "See if you qualify for a USDA loan in Florida. Zero down payment in eligible rural areas - takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-usda-loan-eligibility",
  },
  openGraph: {
    title: "Check Your USDA Loan Eligibility",
    description:
      "See if you qualify for a USDA loan in Florida. Zero down payment in eligible rural areas.",
    url: "https://www.makefloridayourhome.com/check-usda-loan-eligibility",
    type: "website",
  },
};

export default function CheckUsdaLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.usda} />;
}
