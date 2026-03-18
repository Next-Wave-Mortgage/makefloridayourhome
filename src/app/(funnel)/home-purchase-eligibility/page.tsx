import type { Metadata } from "next";
import { EligibilityForm } from "./EligibilityForm";

export const metadata: Metadata = {
  title: "Free Home Purchase Eligibility | Make Florida Your Home",
  description:
    "Check your Florida home purchase eligibility in 2 minutes. No credit pull, no obligation. See every program and grant you qualify for.",
  openGraph: {
    title: "Free Home Purchase Eligibility | Make Florida Your Home",
    description:
      "Check your Florida home purchase eligibility in 2 minutes. No credit pull, no obligation.",
    url: "https://makefloridayourhome.com/home-purchase-eligibility",
    type: "website",
  },
};

export default function HomePurchaseEligibilityPage() {
  return <EligibilityForm heading="Check your home purchase eligibility in Florida" />;
}
