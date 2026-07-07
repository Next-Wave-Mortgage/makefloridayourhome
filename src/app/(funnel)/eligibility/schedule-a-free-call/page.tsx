import type { Metadata } from "next";
import { MfyhLeadFunnelPage } from "../../MfyhLeadFunnelPage";
import { leadFunnelConfigs } from "../../leadFunnelConfigs";

export const metadata: Metadata = {
  title: "Schedule a FREE Call",
  description:
    "Schedule a free 30-minute call with a Florida mortgage expert. Answer a few quick questions, then pick your time. No commitment, no obligation.",
  openGraph: {
    title: "Schedule a FREE Call",
    description:
      "Schedule a free call with a Florida mortgage expert. No commitment.",
    url: "https://www.makefloridayourhome.com/eligibility/schedule-a-free-call",
    type: "website",
  },
  alternates: {
    canonical: "/eligibility/schedule-a-free-call",
  },
};

export default function ScheduleCallPage() {
  return <MfyhLeadFunnelPage config={leadFunnelConfigs.scheduleCall} />;
}
