import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingCalendar } from "./BookingCalendar";

export const metadata: Metadata = {
  title: "Book Your Free Consultation",
  description:
    "Schedule a free 30-minute consultation with a Florida mortgage specialist. Get personalized guidance on rates, programs, and your path to homeownership.",
  alternates: {
    canonical: "/schedule-a-call",
  },
  openGraph: {
    title: "Book Your Free Consultation",
    description:
      "Schedule a free 30-minute consultation with a Florida mortgage specialist.",
    url: "https://www.makefloridayourhome.com/schedule-a-call",
    type: "website",
  },
};

export default function ScheduleACallPage() {
  return (
    <Suspense>
      <BookingCalendar />
    </Suspense>
  );
}
