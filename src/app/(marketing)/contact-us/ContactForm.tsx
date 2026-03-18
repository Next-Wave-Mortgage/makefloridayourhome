"use client";

import { useState } from "react";
import { getTrackingPayload } from "@/lib/tracking";

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
          phone: form.phone,
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
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
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
