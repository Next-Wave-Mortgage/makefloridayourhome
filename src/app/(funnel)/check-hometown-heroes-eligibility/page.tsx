import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

export const metadata: Metadata = {
  title:
    "Check Your Hometown Heroes Eligibility | Make Florida Your Home",
  description:
    "See if you qualify for up to $35,000 in assistance through Florida's Hometown Heroes program. Takes 2 minutes — no credit pull, no obligation.",
  openGraph: {
    title:
      "Check Your Hometown Heroes Eligibility | Make Florida Your Home",
    description:
      "See if you qualify for up to $35,000 in assistance through Florida's Hometown Heroes program.",
    url: "https://www.makefloridayourhome.com/check-hometown-heroes-eligibility",
    type: "website",
  },
};

export default function CheckHometownHeroesEligibilityPage() {
  return (
    <FunnelFormPage
      heading="See if you qualify for up to $35,000 with Hometown Heroes"
      subtitle="Florida's Hometown Heroes program covers down payment and closing costs — find out if you're eligible."
      fcKey="fmzdqbu"
    />
  );
}
