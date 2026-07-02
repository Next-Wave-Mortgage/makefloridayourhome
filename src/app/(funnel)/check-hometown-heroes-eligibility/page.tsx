import type { Metadata } from "next";
import { HometownHeroesWidgets } from "./HometownHeroesWidgets";

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
  return (
    <div className="flex flex-1 flex-col bg-green-tint/40">
      <div className="flex flex-1 items-start justify-center px-4 py-5 sm:px-6 sm:py-10 lg:py-14">
        <div className="mx-auto w-full max-w-2xl">
          <HometownHeroesWidgets />
        </div>
      </div>
    </div>
  );
}
