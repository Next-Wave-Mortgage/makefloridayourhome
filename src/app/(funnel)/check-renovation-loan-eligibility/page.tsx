import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Renovation Loan Eligibility",
  description:
    "See if a Florida renovation mortgage, FHA 203(k), or fixer-upper loan option can work for your home purchase.",
  alternates: {
    canonical: "/check-renovation-loan-eligibility",
  },
  openGraph: {
    title: "Check Your Renovation Loan Eligibility",
    description:
      "See if a Florida renovation mortgage, FHA 203(k), or fixer-upper loan option can work for you.",
    url: "https://www.makefloridayourhome.com/check-renovation-loan-eligibility",
    type: "website",
  },
};

export default function CheckRenovationLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.renovation} />;
}
