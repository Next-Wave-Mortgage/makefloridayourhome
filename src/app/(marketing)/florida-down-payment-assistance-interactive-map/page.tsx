import type { Metadata } from "next";
import { InteractiveMap } from "./InteractiveMap";

export const metadata: Metadata = {
  title:
    "Florida Down Payment Assistance Map — Find Programs in Your County | Make Florida Your Home",
  description:
    "Interactive map of 105 Florida down payment assistance programs across 48 counties. Click your county to see available grants, forgivable loans, and deferred programs — then check your eligibility.",
  openGraph: {
    title: "Florida Down Payment Assistance Map — Find Programs in Your County",
    description:
      "Interactive map of 105 Florida down payment assistance programs. Click your county to discover grants and loans available near you.",
    url: "https://www.makefloridayourhome.com/florida-down-payment-assistance-interactive-map",
    type: "website",
  },
  alternates: {
    canonical: "/florida-down-payment-assistance-interactive-map",
  },
};

export default function FloridaDPAMapPage() {
  return (
    <>
      <h1 className="sr-only">
        Florida Down Payment Assistance Map — Find Programs in Your County
      </h1>
      <InteractiveMap />
    </>
  );
}
