import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Down Payment Assistance Eligibility",
  description:
    "See which Florida down payment assistance programs you qualify for. Takes 2 minutes - no credit pull, no obligation.",
  alternates: {
    canonical: "/check-dpa-eligibility",
  },
  openGraph: {
    title: "Check Your Down Payment Assistance Eligibility",
    description:
      "See which Florida down payment assistance programs you qualify for. Takes 2 minutes - no credit pull, no obligation.",
    url: "https://www.makefloridayourhome.com/check-dpa-eligibility",
    type: "website",
  },
};

export default function CheckDpaEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.dpa} />;
}
