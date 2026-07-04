import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your HELOC Eligibility",
  description:
    "See if a Florida HELOC or home equity option may fit your goals. Takes 2 minutes, no credit pull.",
  alternates: {
    canonical: "/check-heloc-eligibility",
  },
  openGraph: {
    title: "Check Your HELOC Eligibility",
    description:
      "See if a Florida HELOC or home equity option may fit your goals.",
    url: "https://www.makefloridayourhome.com/check-heloc-eligibility",
    type: "website",
  },
};

export default function CheckHelocEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.heloc} />;
}
