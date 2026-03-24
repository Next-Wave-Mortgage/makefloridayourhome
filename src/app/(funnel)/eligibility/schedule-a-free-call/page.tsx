import type { Metadata } from "next";
import { MeetingEmbed } from "./MeetingEmbed";

export const metadata: Metadata = {
  title: "Schedule a FREE Call",
  description:
    "Schedule a free 30-minute call with Phil Ganz, Senior Loan Officer with over 20 years of experience. No commitment, no obligation.",
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
  return (
    <div className="flex flex-1 flex-col bg-green-tint">
      {/* Hero — compact so embed stays above the fold */}
      <div className="mx-auto w-full max-w-[960px] px-5 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-5">
        <h1 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
          <span className="text-brand-green">One Last Step</span> — Pick a Time
          to Talk!
        </h1>
        <p className="mt-2 text-[16px] text-dark-green/70 max-w-xl">
          We can&apos;t move forward until we connect. Grab a free 30-minute
          call below so your dedicated Florida home program expert can walk you
          through your options.
        </p>
      </div>

      {/* Meeting embed — fills remaining viewport */}
      <div className="mx-auto w-full max-w-[960px] flex-1 px-5 pb-8 sm:px-8">
        <MeetingEmbed />
      </div>
    </div>
  );
}
