import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Non-QM Loan Eligibility",
  description:
    "See options for self-employed, 1099, bank-statement, DSCR, and non-traditional mortgage scenarios in Florida.",
  alternates: {
    canonical: "/check-non-qm-loan-eligibility",
  },
  openGraph: {
    title: "Check Your Non-QM Loan Eligibility",
    description:
      "See options for self-employed, 1099, bank-statement, DSCR, and non-traditional mortgage scenarios in Florida.",
    url: "https://www.makefloridayourhome.com/check-non-qm-loan-eligibility",
    type: "website",
  },
};

export default function CheckNonQmLoanEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.nonQm} />;
}
