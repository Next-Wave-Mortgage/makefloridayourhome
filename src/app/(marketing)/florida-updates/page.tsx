import type { Metadata } from "next";
import Link from "next/link";
import { SmsSignupForm } from "@/components/sections/SmsSignupForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Florida Homebuying Updates",
  description:
    "Sign up for free Florida down payment assistance updates, program funding alerts, and homebuying guidance from Make Florida Your Home by text message or email.",
  openGraph: {
    title: "Get Florida Homebuying Updates",
    description:
      "Free Florida down payment assistance updates, program funding alerts, and homebuying guidance by text message or email.",
    url: `${siteConfig.url}/florida-updates`,
    type: "website",
  },
  alternates: {
    canonical: "/florida-updates",
  },
};

const benefits = [
  {
    title: "Down payment assistance alerts",
    body: "Know when Florida programs like Hometown Heroes and county assistance funds open, change, or run low on funding.",
  },
  {
    title: "Homebuying guidance",
    body: "Step-by-step tips for buying a home in Florida — from credit preparation to closing day.",
  },
  {
    title: "Moving to Florida resources",
    body: "Practical guidance for relocating and making Florida your home, including cost-of-living and neighborhood insights.",
  },
];

export default function FloridaUpdatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-tint py-14 text-center sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            <span className="text-brand-green">Florida</span> Homebuying Updates
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[17px] text-dark-green/60">
            Free down payment assistance news, program funding alerts, and
            guidance for making Florida your home — by text message or email.
          </p>
        </div>
      </section>

      {/* Content + form */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1100px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* Left — what you get + program terms */}
          <div>
            <h2 className="text-[24px] font-bold leading-snug text-dark-green sm:text-[28px]">
              What you&apos;ll <span className="text-brand-green">receive</span>
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
                The Make Florida Your Home updates program sends messages that
                include Florida down payment assistance updates, program funding
                alerts, and homebuying tips. We typically send 2&ndash;4
                messages per month; message frequency varies. Message and data
                rates may apply.
              </p>
              <p className="mt-3">
                Text messages are sent only to people who opt in by checking the
                consent box on this page. Consent is not a condition of
                purchasing any property, goods, or services. You can cancel at
                any time by replying <strong>STOP</strong> to any message, and
                get help by replying <strong>HELP</strong> or contacting us at{" "}
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
