import type { Metadata } from "next";
import { EligibilityForm } from "../home-purchase-eligibility/EligibilityForm";

export const metadata: Metadata = {
  title:
    "Check Your Down Payment Assistance Eligibility | Make Florida Your Home",
  description:
    "See which Florida down payment assistance programs you qualify for. Takes 2 minutes — no credit pull, no obligation.",
  openGraph: {
    title:
      "Check Your Down Payment Assistance Eligibility | Make Florida Your Home",
    description:
      "See which Florida down payment assistance programs you qualify for. Takes 2 minutes — no credit pull, no obligation.",
    url: "https://www.makefloridayourhome.com/check-dpa-eligibility",
    type: "website",
  },
};

export default function CheckDpaEligibilityPage() {
  return (
    <EligibilityForm
      heading="Check your down payment assistance eligibility in Florida"
      subtitle="Answer a few quick questions and we'll match you with every DPA program you qualify for."
    />
  );
}
