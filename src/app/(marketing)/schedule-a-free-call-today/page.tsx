import type { Metadata } from "next";
import { MeetingEmbed } from "./MeetingEmbed";

export const metadata: Metadata = {
  title: "Schedule a FREE Call | Make Florida Your Home",
  description:
    "Schedule a free 30-minute call with Phil Ganz, Senior Loan Officer with over 20 years of experience. No commitment, no obligation.",
  openGraph: {
    title: "Schedule a FREE Call | Make Florida Your Home",
    description:
      "Schedule a free call with a Florida mortgage expert. No commitment.",
    url: "https://www.makefloridayourhome.com/schedule-a-free-call-today",
    type: "website",
  },
  alternates: {
    canonical: "/schedule-a-free-call-today",
  },
};

export default function ScheduleCallPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            Schedule a{" "}
            <span className="text-brand-green">FREE</span> Call
          </h1>
          <p className="mt-3 text-[17px] text-dark-green/60">
            No commitment, no obligation. Talk to a Florida mortgage expert.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[14px] font-medium text-dark-green/50">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              30 minutes
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                <path d="M15 10l5 5-5 5" />
                <path d="M4 4v7a4 4 0 004 4h12" />
              </svg>
              Via Zoom
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
              100% Free
            </span>
          </div>
        </div>
      </section>

      {/* Meeting embed */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <MeetingEmbed />
        </div>
      </section>
    </>
  );
}
