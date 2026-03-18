"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

/* ─── Types ───────────────────────────────────────────────────────── */
interface SlotsResponse {
  [date: string]: { slots: string[] };
}

type View = "calendar" | "confirm" | "success";

/* ─── Helpers ─────────────────────────────────────────────────────── */
function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatFullDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/* ─── Component ───────────────────────────────────────────────────── */
export function BookingCalendar() {
  const params = useSearchParams();
  const firstName = params.get("firstName") || "there";
  const contactId = params.get("contactId") || "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [slots, setSlots] = useState<SlotsResponse>({});
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [view, setView] = useState<View>("calendar");
  const [booking, setBooking] = useState(false);

  // Fetch slots for the entire visible month
  const fetchSlots = useCallback(async (year: number, month: number) => {
    setLoading(true);
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 1);
    try {
      const res = await fetch(
        `/api/calendar/slots?startDate=${start.getTime()}&endDate=${end.getTime()}&timezone=America/New_York`,
      );
      if (res.ok) {
        const data = await res.json();
        setSlots((prev) => ({ ...prev, ...data }));
      }
    } catch {
      // Will show "no slots"
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSlots(currentYear, currentMonth);
  }, [currentYear, currentMonth, fetchSlots]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const canGoPrev =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  // Build calendar grid
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  // Get slots for selected date
  const selectedDateStr = selectedDate
    ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
    : "";
  const daySlots =
    selectedDateStr && slots[selectedDateStr]?.slots
      ? slots[selectedDateStr].slots.filter((s) => {
          if (selectedDate && isSameDay(selectedDate, today)) {
            return new Date(s) > new Date();
          }
          return true;
        })
      : [];

  const handleBook = async () => {
    if (!selectedSlot || !contactId) return;
    setBooking(true);
    try {
      const res = await fetch("/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactId, slot: selectedSlot }),
      });
      if (res.ok) setView("success");
    } catch {
      setView("success");
    } finally {
      setBooking(false);
    }
  };

  /* ─────────────── SUCCESS ─────────────── */
  if (view === "success") {
    return (
      <div className="flex flex-1 items-center justify-center px-5 py-12">
        <div className="max-w-lg text-center animate-slide-in">
          <div className="relative mx-auto mb-8 h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-brand-green/10 animate-[ping_1.5s_ease-out_1]" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-green shadow-[0_8px_32px_rgba(0,105,72,0.3)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <h2 className="text-[32px] font-bold text-dark-green">
            You&apos;re all set, {firstName}!
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-dark-green/60">
            Your consultation is confirmed for
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-4 rounded-2xl border border-brand-green/20 bg-green-tint px-6 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[16px] font-bold text-dark-green">
                {selectedSlot && formatFullDate(selectedSlot)}
              </p>
              <p className="text-[15px] font-semibold text-brand-green">
                {selectedSlot && formatTime(selectedSlot)} ET
              </p>
            </div>
          </div>
          <p className="mt-5 text-[15px] text-dark-green/50">
            Phil will reach out before your appointment. Check your email for details.
          </p>
          <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-border-gray/40 bg-white p-5 text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <p className="mb-3 text-[13px] font-bold tracking-wide text-dark-green/40 uppercase">
              Before your call
            </p>
            {["A general idea of your target home price", "Any questions about programs or rates", "10 minutes of uninterrupted time"].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#006948" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[14px] text-dark-green/70">{item}</span>
              </div>
            ))}
          </div>
          <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(0,105,72,0.25)] transition-all hover:shadow-[0_6px_24px_rgba(0,105,72,0.35)]">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  /* ─────────────── CONFIRM ─────────────── */
  if (view === "confirm" && selectedSlot) {
    return (
      <div className="flex flex-1 items-center justify-center px-5 py-12">
        <div className="w-full max-w-md animate-slide-in">
          <div className="overflow-hidden rounded-2xl border border-border-gray/40 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <div className="bg-brand-green px-6 py-5 text-white">
              <p className="text-[13px] font-medium tracking-wide opacity-80 uppercase">Confirm your consultation</p>
              <p className="mt-1 text-[22px] font-bold">{formatFullDate(selectedSlot)}</p>
              <p className="text-[16px] font-semibold opacity-90">{formatTime(selectedSlot)} ET</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image src="/images/team/phil-ganz.jpg" alt="Phil Ganz" width={48} height={48} className="rounded-full object-cover" />
                  <div>
                    <p className="text-[15px] font-bold text-dark-green">Phil Ganz</p>
                    <p className="text-[13px] text-dark-green/50">Senior Mortgage Specialist &middot; NMLS #322933</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-green-tint/70 px-4 py-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006948" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-[14px] font-medium text-dark-green/70">30-minute Zoom consultation</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-green-tint/70 px-4 py-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006948" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-[14px] font-medium text-dark-green/70">Free &middot; No obligation &middot; No credit pull</span>
                </div>
              </div>
              <button onClick={handleBook} disabled={booking} className="mt-6 w-full rounded-full bg-brand-green py-4 text-[16px] font-bold text-white shadow-[0_4px_16px_rgba(0,105,72,0.25)] transition-all hover:shadow-[0_6px_24px_rgba(0,105,72,0.35)] active:scale-[0.98] disabled:opacity-60">
                {booking ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Confirming...
                  </span>
                ) : "Confirm Booking"}
              </button>
              <button onClick={() => { setView("calendar"); setSelectedSlot(null); }} className="mt-3 w-full py-2 text-[14px] font-medium text-dark-green/40 transition-colors hover:text-dark-green">
                &larr; Choose a different time
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────── CALENDAR ─────────────── */
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      {/* ── Left: trust column (hidden on mobile, shown on lg) ── */}
      <div className="relative hidden overflow-hidden bg-dark-green px-10 py-14 lg:flex lg:w-[340px] lg:shrink-0 lg:flex-col">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-green/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-green/10" />
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[11px] font-bold text-white">2</div>
            <span className="text-[13px] font-medium text-white/70">Step 2 of 2 — Book your call</span>
          </div>
          <h1 className="text-[30px] font-bold leading-tight text-white">
            Great news,<br /><span className="text-brand-green">{firstName}!</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-white/50">
            You may qualify for exclusive Florida programs. Pick a time to speak with a specialist.
          </p>
          <div className="mt-7 space-y-3">
            {["Current rates for your situation", "Programs & grants you qualify for", "Your personalized path to pre-approval"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-green/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006948" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-white/60">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-white/[0.05] p-4">
            <div className="mb-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB800" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-[13px] leading-relaxed text-white/40 italic">
              &ldquo;Phil made the entire process so easy. He walked me through every step.&rdquo;
            </p>
            <p className="mt-1 text-[11px] font-medium text-white/25">— Recent Florida homebuyer</p>
          </div>
        </div>
      </div>

      {/* ── Right/main: booking widget ── */}
      <div className="flex flex-col bg-green-tint/30 p-4 sm:p-6 lg:flex-1 lg:p-8">
        {/* Mobile-only heading */}
        <div className="mb-4 lg:hidden">
          <h1 className="text-[24px] font-bold text-dark-green">
            Great news, <span className="text-brand-green">{firstName}!</span>
          </h1>
          <p className="mt-1 text-[14px] leading-relaxed text-dark-green/50">
            You may qualify for exclusive Florida programs. Pick a time to speak with a specialist about:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Current rates", "Programs & grants", "Path to pre-approval"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-green-tint px-3 py-1.5 text-[12px] font-semibold text-brand-green">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border-gray/40 bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)] sm:flex-row">
          {/* Widget left: green calendar panel */}
          <div className="flex w-full shrink-0 flex-col bg-brand-green p-5 text-white sm:w-[280px] sm:p-6 md:w-[320px]">
            {/* Meeting duration — mobile only, above calendar */}
            <div className="mb-3 flex items-center gap-2 sm:hidden">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1.5 text-[13px] font-semibold text-white">
                30 mins &middot; Zoom
              </span>
            </div>

            {/* Phil photo + name */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:flex-col sm:text-center">
              <Image
                src="/images/team/phil-ganz.jpg"
                alt="Phil Ganz"
                width={72}
                height={72}
                className="h-12 w-12 rounded-full border-[3px] border-white/20 object-cover sm:h-[72px] sm:w-[72px]"
              />
              <p className="text-[16px] font-bold sm:mt-3 sm:text-[18px]">Meet with Phil Ganz</p>
            </div>

            {/* Month navigator */}
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={prevMonth}
                disabled={!canGoPrev}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 disabled:opacity-20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <p className="text-[15px] font-semibold">
                {MONTH_NAMES[currentMonth]} {currentYear}
              </p>
              <button
                onClick={nextMonth}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Day headers */}
            <div className="mb-1 grid grid-cols-7 text-center text-[11px] font-semibold tracking-wide text-white/40">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d} className="py-1">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 text-center">
              {calendarDays.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="py-1" />;
                }

                const date = new Date(currentYear, currentMonth, day);
                const isPast = date < today && !isSameDay(date, today);
                const isToday = isSameDay(date, today);
                const isSelected = selectedDate && isSameDay(date, selectedDate);
                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const hasSlots = slots[dateStr]?.slots && slots[dateStr].slots.length > 0;
                return (
                  <button
                    key={day}
                    disabled={isPast}
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedSlot(null);
                    }}
                    className={`relative mx-auto my-0.5 flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-medium transition-all ${
                      isSelected
                        ? "bg-white font-bold text-brand-green shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                        : isPast
                          ? "cursor-default text-white/15"
                          : isToday
                            ? "bg-white/15 font-bold text-white"
                            : hasSlots
                              ? "text-white hover:bg-white/10"
                              : "text-white/30"
                    }`}
                  >
                    {day}
                    {hasSlots && !isSelected && !isPast && (
                      <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/50" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Trust line */}
            <div className="mt-3 hidden items-center justify-center gap-1.5 pt-4 text-[11px] text-white/30 sm:mt-auto sm:flex">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Free &middot; No credit pull &middot; No obligation
            </div>
          </div>

          {/* Widget bottom (mobile) / right (desktop): time slots */}
          <div className="flex flex-col sm:flex-1">
            {/* Header — hidden on mobile (shown in green panel instead) */}
            <div className="hidden border-b border-border-gray/30 px-6 py-4 sm:block">
              <p className="text-[14px] font-bold text-dark-green">Meeting duration</p>
              <span className="mt-1 inline-block rounded-full bg-green-tint px-3 py-1 text-[13px] font-semibold text-brand-green">
                30 mins &middot; Zoom
              </span>
            </div>

            {/* Time slots */}
            <div className="max-h-[320px] overflow-y-auto px-6 py-4 sm:max-h-none sm:flex-1">
              <p className="mb-1 text-[14px] font-bold text-dark-green">
                What time works best?
              </p>
              {selectedDate && (
                <p className="mb-4 text-[13px] text-brand-green">
                  Showing times for{" "}
                  <span className="font-semibold text-dark-green">
                    {selectedDate.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </p>
              )}

              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-brand-green/20 border-t-brand-green" />
                  <p className="mt-3 text-[13px] text-dark-green/40">Loading times...</p>
                </div>
              ) : !selectedDate ? (
                <p className="py-8 text-center text-[14px] text-dark-green/40">
                  Select a date to see available times
                </p>
              ) : daySlots.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-[14px] font-medium text-dark-green/50">No availability</p>
                  <p className="mt-1 text-[13px] text-dark-green/35">Try another date</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {daySlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => {
                        setSelectedSlot(slot);
                        setView("confirm");
                      }}
                      className="w-full rounded-xl border-2 border-border-gray/50 px-4 py-3 text-[15px] font-semibold text-dark-green transition-all hover:border-brand-green hover:bg-brand-green/[0.03] hover:shadow-[0_2px_8px_rgba(0,105,72,0.08)] active:scale-[0.98]"
                    >
                      {formatTime(slot)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Timezone */}
            <div className="border-t border-border-gray/30 px-6 py-3">
              <p className="text-[12px] text-dark-green/35">
                UTC -04:00 Eastern Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
