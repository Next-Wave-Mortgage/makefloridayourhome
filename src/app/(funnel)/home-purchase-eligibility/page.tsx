import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

export const metadata: Metadata = {
  title: "Free Home Purchase Eligibility | Make Florida Your Home",
  description:
    "Check your Florida home purchase eligibility in 2 minutes. No credit pull, no obligation. See every program and grant you qualify for.",
  openGraph: {
    title: "Free Home Purchase Eligibility | Make Florida Your Home",
    description:
      "Check your Florida home purchase eligibility in 2 minutes. No credit pull, no obligation.",
    url: "https://www.makefloridayourhome.com/home-purchase-eligibility",
    type: "website",
  },
};

export default function HomePurchaseEligibilityPage() {
  return (
    <FunnelFormPage
      heading="See every loan program you qualify for in Florida"
      subtitle="Answer a few quick questions and we'll match you with every program, grant, and rate available to you."
      fcKey="wkjetxp"
    />
  );
}
