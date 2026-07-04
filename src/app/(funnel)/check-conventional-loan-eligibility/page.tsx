import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Conventional Loan Eligibility",
  description:
    "See if you qualify for a conventional loan in Florida. Competitive rates, as low as 3% down - takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-conventional-loan-eligibility",
  },
  openGraph: {
    title: "Check Your Conventional Loan Eligibility",
    description:
      "See if you qualify for a conventional loan in Florida. Competitive rates, as low as 3% down.",
    url: "https://www.makefloridayourhome.com/check-conventional-loan-eligibility",
    type: "website",
  },
};

export default function CheckConventionalLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.conventional} />;
}
