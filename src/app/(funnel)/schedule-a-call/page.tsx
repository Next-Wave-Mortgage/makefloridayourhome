import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingCalendar } from "./BookingCalendar";

export const metadata: Metadata = {
  title: "Book Your Free Consultation | Make Florida Your Home",
  description:
    "Schedule a free 30-minute consultation with a Florida mortgage specialist. Get personalized guidance on rates, programs, and your path to homeownership.",
  openGraph: {
    title: "Book Your Free Consultation | Make Florida Your Home",
    description:
      "Schedule a free 30-minute consultation with a Florida mortgage specialist.",
    url: "https://makefloridayourhome.com/schedule-a-call",
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
