"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTrackingPayload } from "@/lib/tracking";
import { formatPhoneNumber, unformatPhone } from "@/lib/format-phone";

/* ─── Field keys (match GHL custom fields) ────────────────────────── */
const FIELD = {
  propertyUse: "property_used_for",
  buyingStage: "home_buying_stage",
  purchasePrice: "estimated_purchase_price",
  hasAgent: "has_real_estate_agent",
  creditRating: "credit_rating",
  veteranMilitary: "veteran_or_military",
} as const;

/* ─── Step definitions ─────────────────────────────────────────────── */
interface RadioStep {
  type: "radio";
  key: string;
  question: string;
  options: { label: string; emoji?: string }[];
}
interface SelectStep {
  type: "select";
  key: string;
  question: string;
  options: string[];
}
interface ContactStep {
  type: "contact";
  key: string;
  question: string;
}

type Step = RadioStep | SelectStep | ContactStep;

const STEPS: Step[] = [
  {
    type: "radio",
    key: FIELD.propertyUse,
    question: "What is your property used for?",
    options: [
      { label: "Primary Residence", emoji: "🏠" },
      { label: "Vacation", emoji: "🌴" },
      { label: "Investment", emoji: "💰" },
    ],
  },
  {
    type: "radio",
    key: FIELD.buyingStage,
    question: "Where are you in the home buying process?",
    options: [
      { label: "I have a signed contract" },
      { label: "I am in the process of making an offer on a home" },
      { label: "I need a pre-approval letter" },
      { label: "I want to buy a home in the next few months" },
      { label: "I want to buy a home six or more months from now" },
    ],
  },
  {
    type: "select",
    key: FIELD.purchasePrice,
    question: "What's the estimated purchase price?",
    options: [
      "Under $60,000",
      "$60,000 - $79,999",
      "$80,000 - $99,999",
      "$100,000 - $149,999",
      "$150,000 - $199,999",
      "$200,000 - $299,999",
      "$300,000 - $399,999",
      "$400,000 - $499,999",
      "$500,000 - $749,999",
      "$750,000 - $999,999",
      "$1,000,000 - $1,249,999",
      "$1,250,000 - $1,495,999",
      "Over $1,500,000",
    ],
  },
  {
    type: "radio",
    key: FIELD.hasAgent,
    question: "Are you working with a real estate agent?",
    options: [
      { label: "Yes" },
      { label: "No" },
    ],
  },
  {
    type: "radio",
    key: FIELD.creditRating,
    question: "What's your estimated credit rating?",
    options: [
      { label: "Excellent (740+)" },
      { label: "Very Good (660-739)" },
      { label: "Good (620-659)" },
      { label: "Fair (580-619)" },
      { label: "Poor (< 580)" },
    ],
  },
  {
    type: "radio",
    key: FIELD.veteranMilitary,
    question: "Are you a veteran or active military personnel?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    type: "contact",
    key: "contact",
    question: "Almost done! How can we reach you?",
  },
];

const TOTAL = STEPS.length;

/* ─── Component ────────────────────────────────────────────────────── */
interface EligibilityFormProps {
  heading?: string;
  subtitle?: string;
}

export function EligibilityForm({
  heading = "Let\u2019s get you into a Florida home",
  subtitle,
}: EligibilityFormProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const current = STEPS[step];
  const progress = ((step + 1) / TOTAL) * 100;

  const setAnswer = useCallback(
    (value: string) => {
      setAnswers((prev) => ({ ...prev, [current.key]: value }));
    },
    [current.key],
  );

  const canAdvance = useCallback(() => {
    if (current.type === "contact") {
      return (
        contact.firstName.trim() &&
        contact.lastName.trim() &&
        contact.email.trim() &&
        contact.phone.trim()
      );
    }
    return !!answers[current.key];
  }, [current, contact, answers]);

  const submitForm = useCallback(async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phone: unformatPhone(contact.phone),
          source: window.location.pathname,
          tags: ["website-lead", "eligibility-form"],
          customFields: answers,
          tracking: getTrackingPayload(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      // Store booking context in sessionStorage (avoids PII in URL params)
      sessionStorage.setItem(
        "mfyh_booking",
        JSON.stringify({ firstName: contact.firstName, contactId: data.contactId || "" }),
      );
      window.location.href = "/schedule-a-call";
    } catch {
      // On error, still redirect — booking page works without contactId
      sessionStorage.setItem(
        "mfyh_booking",
        JSON.stringify({ firstName: contact.firstName }),
      );
      window.location.href = "/schedule-a-call";
    }
  }, [contact, answers]);

  const next = useCallback(() => {
    if (!canAdvance()) return;
    if (step < TOTAL - 1) {
      setDirection("forward");
      setStep((s) => s + 1);
    } else {
      submitForm();
    }
  }, [step, canAdvance, submitForm]);

  const back = useCallback(() => {
    if (step > 0) {
      setDirection("back");
      setStep((s) => s - 1);
    }
  }, [step]);

  /* ── Success state ── */
  if (done) {
    return (
      <div className="flex flex-1 items-center justify-center px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-green"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-[28px] font-bold text-dark-green">
            You&apos;re All Set!
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-dark-green/60">
            A Florida mortgage specialist will review your information and reach
            out within one business day.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-[15px] font-bold text-white transition-shadow hover:shadow-[0_4px_20px_rgba(0,105,72,0.35)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  /* ── Form steps ── */
  return (
    <div className="flex flex-1 flex-col">
      {/* Progress bar */}
      <div className="h-1 w-full bg-border-gray/40">
        <div
          className="h-full bg-brand-green transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-5 py-10 sm:px-8">
        <div className="mx-auto w-full max-w-lg">
          {/* Step progress bar */}
          <div className="mb-6 flex items-center gap-1.5">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <div key={i} className="flex flex-1 items-center gap-1.5">
                <div
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    i < step
                      ? "bg-brand-green"
                      : i === step
                        ? "bg-brand-green/60"
                        : "bg-border-gray/50"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Step counter */}
          <div className="mb-2 flex items-center gap-2 text-[13px] text-dark-green/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Takes about 2 minutes
          </div>

          {/* Intro heading — only on first step */}
          {step === 0 && (
            <>
              <h1 className="mb-2 text-[28px] font-bold leading-snug text-dark-green sm:text-[34px]">
                {heading}
              </h1>
              {subtitle && (
                <p className="mb-4 text-[15px] leading-relaxed text-dark-green/50">
                  {subtitle}
                </p>
              )}
            </>
          )}

          {/* Question */}
          <h2
            key={step}
            className={`${step === 0 ? "text-[16px] font-medium text-dark-green/50" : "text-[24px] font-bold leading-snug text-dark-green sm:text-[28px]"} ${
              direction === "forward" ? "animate-slide-in" : "animate-slide-in-back"
            }`}
          >
            {current.question}
          </h2>

          {/* Step content */}
          <div
            key={`content-${step}`}
            className={`mt-6 ${
              direction === "forward" ? "animate-slide-in" : "animate-slide-in-back"
            }`}
          >
            {current.type === "radio" && (
              <div className="flex flex-col gap-3">
                {current.options.map((opt) => {
                  const selected = answers[current.key] === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => {
                        setAnswer(opt.label);
                        // Auto-advance after a brief delay so the user sees their selection
                        if (step < TOTAL - 1) {
                          setTimeout(() => {
                            setDirection("forward");
                            setStep((s) => s + 1);
                          }, 300);
                        }
                      }}
                      className={`flex items-center gap-3 rounded-xl border-2 px-5 py-4 text-left text-[15px] font-medium transition-all duration-200 ${
                        selected
                          ? "border-brand-green bg-brand-green/[0.04] text-dark-green"
                          : "border-border-gray/60 bg-white text-dark-green/70 hover:border-brand-green/40"
                      }`}
                    >
                      {opt.emoji && (
                        <span className="text-[18px]">{opt.emoji}</span>
                      )}
                      <span className="flex-1">{opt.label}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          selected
                            ? "border-brand-green bg-brand-green"
                            : "border-mid-gray"
                        }`}
                      >
                        {selected && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {current.type === "select" && (
              <select
                value={answers[current.key] || ""}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (e.target.value && step < TOTAL - 1) {
                    setTimeout(() => {
                      setDirection("forward");
                      setStep((s) => s + 1);
                    }, 300);
                  }
                }}
                className="w-full rounded-xl border-2 border-border-gray/60 bg-white px-5 py-4 text-[15px] font-medium text-dark-green outline-none transition-colors focus:border-brand-green"
              >
                <option value="" disabled>
                  Select a price range
                </option>
                {current.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {current.type === "contact" && (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={contact.firstName}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, firstName: e.target.value }))
                    }
                    className="rounded-xl border-2 border-border-gray/60 bg-white px-5 py-4 text-[15px] font-medium text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={contact.lastName}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, lastName: e.target.value }))
                    }
                    className="rounded-xl border-2 border-border-gray/60 bg-white px-5 py-4 text-[15px] font-medium text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={contact.email}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, email: e.target.value }))
                  }
                  className="rounded-xl border-2 border-border-gray/60 bg-white px-5 py-4 text-[15px] font-medium text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
                />
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, phone: formatPhoneNumber(e.target.value) }))
                  }
                  className="rounded-xl border-2 border-border-gray/60 bg-white px-5 py-4 text-[15px] font-medium text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
                />
                <p className="text-[12px] leading-relaxed text-dark-green/40">
                  By submitting, you agree to be contacted about your mortgage
                  options. No obligation, no spam.
                </p>

              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center gap-4">
            {step > 0 && (
              <button
                type="button"
                onClick={back}
                className="flex items-center gap-1.5 text-[14px] font-medium text-dark-green/50 transition-colors hover:text-dark-green"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!canAdvance() || submitting}
              className={`flex items-center justify-center gap-2 rounded-full px-10 py-4 text-[15px] font-bold transition-all duration-200 ${
                canAdvance()
                  ? "bg-brand-green text-white shadow-[0_2px_12px_rgba(0,105,72,0.25)] hover:shadow-[0_4px_20px_rgba(0,105,72,0.35)]"
                  : "cursor-not-allowed bg-border-gray text-mid-gray"
              } ${step === 0 ? "" : "ml-auto"}`}
            >
              {submitting
                ? "Submitting..."
                : step === TOTAL - 1
                  ? "Check My Eligibility"
                  : "Next"}
              {!submitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </button>
          </div>

          {/* Trust signals — visible on every step */}
          <div className="mt-10 grid grid-cols-3 divide-x divide-border-gray/40">
            <a href="https://www.bbb.org/us/fl/fort-lauderdale/profile/mortgage-lenders/next-wave-mortgage-llc-0633-92035313/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 px-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/bbb-accredited-business.webp" alt="BBB Accredited Business" className="h-7 w-auto" />
              <span className="text-[11px] font-bold text-dark-green/70">A+ Rated</span>
            </a>
            <div className="flex flex-col items-center gap-1 px-3">
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                <span className="text-[13px] font-bold text-dark-green/80">4.9</span>
              </div>
              <span className="text-[11px] text-dark-green/50">212+ reviews</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-3">
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12.005 2L2 9.5h3v10.522h14V9.5h3L12.005 2z" fill="#006AFF" /><path d="M9.5 13h5v4h-5z" fill="#fff" /></svg>
                <span className="text-[13px] font-bold text-dark-green/80">4.8</span>
              </div>
              <span className="text-[11px] text-dark-green/50">27+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
