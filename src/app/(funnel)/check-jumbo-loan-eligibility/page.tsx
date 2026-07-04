import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Jumbo Loan Eligibility",
  description:
    "See if a Florida jumbo mortgage or higher-balance loan option fits your purchase or refinance scenario.",
  alternates: {
    canonical: "/check-jumbo-loan-eligibility",
  },
  openGraph: {
    title: "Check Your Jumbo Loan Eligibility",
    description:
      "See if a Florida jumbo mortgage or higher-balance loan option fits your scenario.",
    url: "https://www.makefloridayourhome.com/check-jumbo-loan-eligibility",
    type: "website",
  },
};

export default function CheckJumboLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.jumbo} />;
}
