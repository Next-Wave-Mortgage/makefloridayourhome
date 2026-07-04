import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Reverse Mortgage Eligibility",
  description:
    "See if you qualify for a Florida reverse mortgage or HECM option. Takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-reverse-mortgage-eligibility",
  },
  openGraph: {
    title: "Check Your Reverse Mortgage Eligibility",
    description:
      "See if you qualify for a Florida reverse mortgage or HECM option.",
    url: "https://www.makefloridayourhome.com/check-reverse-mortgage-eligibility",
    type: "website",
  },
};

export default function CheckReverseMortgageEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.reverseMortgage} />;
}
