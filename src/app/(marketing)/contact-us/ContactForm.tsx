"use client";

import { useState } from "react";
import { getTrackingPayload } from "@/lib/tracking";
import { formatPhoneNumber, unformatPhone } from "@/lib/format-phone";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const canSubmit =
    form.name.trim() && form.email.trim() && form.message.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);

    const [firstname, ...rest] = form.name.trim().split(" ");
    const lastname = rest.join(" ");

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstname,
          lastName: lastname,
          email: form.email,
          phone: unformatPhone(form.phone),
          source: "/contact-us",
          tags: ["website-lead", "contact-form"],
          customFields: {
            contact_message: form.message,
          },
          tracking: getTrackingPayload(),
        }),
      });
      setDone(true);
    } catch {
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border-gray/60 bg-green-tint px-8 py-16 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
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
        <h3 className="text-[22px] font-bold text-dark-green">
          Message Sent!
        </h3>
        <p className="mt-2 text-[15px] text-dark-green/60">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-[13px] font-semibold text-dark-green/70"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-xl border-2 border-border-gray/60 bg-white px-4 py-3.5 text-[15px] text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-[13px] font-semibold text-dark-green/70"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: formatPhoneNumber(e.target.value) }))}
            className="w-full rounded-xl border-2 border-border-gray/60 bg-white px-4 py-3.5 text-[15px] text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-[13px] font-semibold text-dark-green/70"
        >
          Email Address <span className="text-brand-green">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="john@example.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border-2 border-border-gray/60 bg-white px-4 py-3.5 text-[15px] text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-[13px] font-semibold text-dark-green/70"
        >
          Your Message <span className="text-brand-green">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="How can we help you?"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full resize-none rounded-xl border-2 border-border-gray/60 bg-white px-4 py-3.5 text-[15px] text-dark-green outline-none transition-colors placeholder:text-mid-gray focus:border-brand-green"
        />
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-3 divide-x divide-border-gray/40">
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

      <button
        type="submit"
        disabled={!canSubmit || submitting}
        className={`group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-all duration-200 ${
          canSubmit
            ? "bg-brand-green text-white shadow-[0_2px_12px_rgba(0,105,72,0.25)] hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            : "cursor-not-allowed bg-border-gray text-mid-gray"
        }`}
      >
        {submitting ? "Sending..." : "Send Message"}
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
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>
    </form>
  );
}
