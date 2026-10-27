"use client";

import Link from "next/link";
import { useState } from "react";

const CONSENT_VERSION = "2026-08-09.2";

const inputClasses =
  "w-full rounded-lg border border-border-gray bg-white px-4 py-3 text-[15px] text-dark-green placeholder:text-mid-gray focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20";

export function SmsSignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    const digits = phone.replace(/\D/g, "");
    if (smsConsent && digits.length < 10) {
      setErrorMsg(
        "Please enter a valid 10-digit mobile number to receive text reminders.",
      );
      return;
    }

    setStatus("submitting");

    const consentRecord = smsConsent
      ? `SMS opt-in: YES (checkbox checked) at ${new Date().toISOString()} on ${window.location.href} — appointment confirmations/reminders — consent language v${CONSENT_VERSION}`
      : `SMS opt-in: NO (checkbox not checked) at ${new Date().toISOString()} on ${window.location.href} — contact by email/phone call only`;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: digits,
          source: "/florida-updates",
          tags: smsConsent
            ? ["consultation-request", "sms-opt-in"]
            : ["consultation-request"],
          customFields: { contact_message: consentRecord },
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border-gray bg-white p-8 text-center shadow-sm">
        <p className="text-[22px] font-bold text-brand-green">
          Request received!
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70">
          Our team will reach out to schedule your free consultation.
          {smsConsent &&
            " You'll receive your appointment confirmation and reminders by text — reply STOP at any time to opt out, or HELP for help."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border-gray bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sms-first-name"
            className="mb-1.5 block text-[13px] font-semibold text-dark-green"
          >
            First name
          </label>
          <input
            id="sms-first-name"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="sms-last-name"
            className="mb-1.5 block text-[13px] font-semibold text-dark-green"
          >
            Last name
          </label>
          <input
            id="sms-last-name"
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="sms-email"
          className="mb-1.5 block text-[13px] font-semibold text-dark-green"
        >
          Email address
        </label>
        <input
          id="sms-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="sms-phone"
          className="mb-1.5 block text-[13px] font-semibold text-dark-green"
        >
          Mobile phone number
        </label>
        <input
          id="sms-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClasses}
        />
      </div>

      <label
        htmlFor="sms-consent"
        className="mt-5 flex cursor-pointer items-start gap-3"
      >
        <input
          id="sms-consent"
          type="checkbox"
          checked={smsConsent}
          onChange={(e) => setSmsConsent(e.target.checked)}
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-brand-green"
        />
        <span className="text-[12.5px] leading-relaxed text-dark-green/70">
          I agree to receive appointment confirmation, appointment reminder, and
          customer-care text messages from Make Florida Your Home at the mobile
          number provided, including messages sent using automated technology.
          Message frequency varies. Message and data rates may apply. Reply STOP
          to opt out or HELP for help. Consent is not a condition of purchase.
        </span>
      </label>

      {errorMsg && (
        <p className="mt-4 text-[13px] font-medium text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-brand-green px-8 py-3.5 text-[16px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Request My Consultation"}
      </button>

      <p className="mt-4 text-[11.5px] leading-relaxed text-dark-green/50">
        By clicking &quot;Request My Consultation&quot; you agree to our{" "}
        <Link
          href="/terms-of-service"
          className="underline underline-offset-2 hover:text-brand-green"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-2 hover:text-brand-green"
        >
          Privacy Policy
        </Link>
        . Checking the text-message box is optional and is not required to
        request a consultation — if unchecked, we will contact you by email or a
        phone call instead. No mobile information will be shared with third
        parties/affiliates for marketing/promotional purposes.
      </p>
    </form>
  );
}
