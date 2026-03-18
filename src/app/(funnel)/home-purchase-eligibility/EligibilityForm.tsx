"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { getTrackingPayload } from "@/lib/tracking";

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

  const canAdvance = () => {
    if (current.type === "contact") {
      return (
        contact.firstName.trim() &&
        contact.lastName.trim() &&
        contact.email.trim() &&
        contact.phone.trim()
      );
    }
    return !!answers[current.key];
  };

  const next = useCallback(() => {
    if (!canAdvance()) return;
    if (step < TOTAL - 1) {
      setDirection("forward");
      setStep((s) => s + 1);
    } else {
      submitForm();
    }
  }, [step, answers, contact]);

  const back = useCallback(() => {
    if (step > 0) {
      setDirection("back");
      setStep((s) => s - 1);
    }
  }, [step]);

  async function submitForm() {
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phone: contact.phone,
          source: window.location.pathname,
          tags: ["website-lead", "eligibility-form"],
          customFields: answers,
          tracking: getTrackingPayload(),
        }),
      });

      setDone(true);
    } catch {
      // Still show success — don't block the user on CRM errors
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

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
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-[15px] font-bold text-white transition-shadow hover:shadow-[0_4px_20px_rgba(0,105,72,0.35)]"
          >
            Back to Home
          </a>
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
                      onClick={() => setAnswer(opt.label)}
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
                onChange={(e) => setAnswer(e.target.value)}
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
                  placeholder="Phone number"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, phone: e.target.value }))
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

          {/* Step indicator */}
          <p className="mt-6 text-[13px] text-dark-green/30">
            {step + 1} of {TOTAL}
          </p>
        </div>
      </div>
    </div>
  );
}
