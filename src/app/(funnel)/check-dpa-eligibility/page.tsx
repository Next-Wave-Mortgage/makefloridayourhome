import type { Metadata } from "next";
import { FunnelFormPage } from "../FunnelFormPage";

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
    <FunnelFormPage
      heading="See how much down payment help you can get in Florida"
      subtitle="Answer a few quick questions and we'll match you with every DPA program you qualify for."
      fcKey="wkjetxp"
    />
  );
}
