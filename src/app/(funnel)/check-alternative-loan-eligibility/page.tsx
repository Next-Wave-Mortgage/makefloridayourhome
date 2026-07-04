import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Alternative Mortgage Eligibility",
  description:
    "Explore Florida mortgage options for DACA, ITIN, foreign buyer, tribal housing, and other alternative borrower scenarios.",
  alternates: {
    canonical: "/check-alternative-loan-eligibility",
  },
  openGraph: {
    title: "Check Your Alternative Mortgage Eligibility",
    description:
      "Explore Florida mortgage options for DACA, ITIN, foreign buyer, tribal housing, and other alternative borrower scenarios.",
    url: "https://www.makefloridayourhome.com/check-alternative-loan-eligibility",
    type: "website",
  },
};

export default function CheckAlternativeLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.alternativeLoans} />;
}
