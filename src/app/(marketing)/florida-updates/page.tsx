import type { Metadata } from "next";
import Link from "next/link";
import { SmsSignupForm } from "@/components/sections/SmsSignupForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Free Homebuying Consultation",
  description:
    "Request a free Florida homebuying consultation with Make Florida Your Home and get your appointment confirmations and reminders by text message.",
  openGraph: {
    title: "Request a Free Homebuying Consultation",
    description:
      "Request a free Florida homebuying consultation and get appointment confirmations and reminders by text message.",
    url: `${siteConfig.url}/florida-updates`,
    type: "website",
  },
  alternates: {
    canonical: "/florida-updates",
  },
};

const benefits = [
  {
    title: "Talk to a Florida homebuying expert",
    body: "Get one-on-one answers about down payment assistance, Hometown Heroes, loan options, and moving to Florida.",
  },
  {
    title: "A plan for making Florida your home",
    body: "Walk away from your call knowing which programs you may qualify for and what your next steps are.",
  },
  {
    title: "Never miss your appointment",
    body: "Opt in to text messages and we'll send your appointment confirmation, reminders, and your meeting link before the call.",
  },
];

export default function FloridaUpdatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 text-center sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            <span className="text-brand-green">Free</span> Homebuying
            Consultation
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[17px] text-dark-green/60">
            Request a free call about down payment assistance and buying a home
            in Florida — with appointment confirmations and reminders by text
            message.
          </p>
        </div>
      </section>

      {/* Content + form */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1100px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* Left — what you get + program terms */}
          <div>
            <h2 className="text-[24px] font-bold leading-snug text-dark-green sm:text-[28px]">
              How it <span className="text-brand-green">works</span>
            </h2>
            <ul className="mt-6 space-y-5">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-[11px] font-bold text-white"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-[15.5px] font-semibold text-dark-green">
                      {b.title}
                    </p>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-dark-green/60">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* SMS program terms — plain, crawlable text */}
            <div className="mt-10 rounded-xl bg-green-tint p-6 text-[13px] leading-relaxed text-dark-green/70">
              <h3 className="text-[15px] font-bold text-dark-green">
                Text Message Program Terms
              </h3>
              <p className="mt-3">
                If you check the optional text-message box on this form, Make
                Florida Your Home will send you appointment confirmations,
                appointment reminders, meeting links, and replies to your
                inquiry by SMS at the mobile number you provide. Message
                frequency varies based on your appointments and inquiries.
                Message and data rates may apply.
              </p>
              <p className="mt-3">
                Text messages are sent only to people who opt in by checking the
                consent box on this page. Consent is not a condition of
                purchasing any property, goods, or services, and is not required
                to request a consultation. You can cancel at any time by
                replying <strong>STOP</strong> to any message, and get help by
                replying <strong>HELP</strong> or contacting us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline underline-offset-2 hover:text-brand-green"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                or {siteConfig.contact.phone}. Carriers are not liable for
                delayed or undelivered messages.
              </p>
              <p className="mt-3 font-semibold text-dark-green">
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. Text
                messaging originator opt-in data and consent will not be shared
                with any third parties.
              </p>
              <p className="mt-3">
                See our{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-brand-green"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-of-service"
                  className="underline underline-offset-2 hover:text-brand-green"
                >
                  Terms of Service
                </Link>{" "}
                for full details on how we collect, use, and protect your
                information.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <SmsSignupForm />
        </div>
      </section>
    </>
  );
}
