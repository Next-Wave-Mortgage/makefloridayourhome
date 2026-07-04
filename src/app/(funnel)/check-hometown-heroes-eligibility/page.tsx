import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Check Your Hometown Heroes Eligibility",
  description:
    "See if you qualify for up to $35,000 in assistance through Florida's Hometown Heroes program. Takes 2 minutes - no credit pull, no obligation.",
  alternates: {
    canonical: "/check-hometown-heroes-eligibility",
  },
  openGraph: {
    title: "Check Your Hometown Heroes Eligibility",
    description:
      "See if you qualify for up to $35,000 in assistance through Florida's Hometown Heroes program.",
    url: "https://www.makefloridayourhome.com/check-hometown-heroes-eligibility",
    type: "website",
  },
};

export default function CheckHometownHeroesEligibilityPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.hometownHeroes} />;
}
