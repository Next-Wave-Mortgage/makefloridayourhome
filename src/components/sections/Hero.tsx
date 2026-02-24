import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Instantly see programs you qualify for — no credit pull",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 10h2m2 0h2" />
      </svg>
    ),
    text: "Customize your best-fit loan and assistance plan in minutes",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "Check your Florida home purchase eligibility",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: "Unlock up to $35,000 with Hometown Heroes",
  },
];

const trustPoints = [
  "Won't affect your credit score",
  "Takes less than 2 minutes",
  "Free guidance from licensed Florida specialists",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-tint">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/[0.03]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-green/[0.03]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px]">
          {/* Left — content */}
          <div className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
            {/* Heading with split-color pattern */}
            <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight text-dark-green sm:text-[40px] lg:text-[48px]">
              <span className="text-brand-green">Florida&apos;s Premier</span>{" "}
              First-Time Homebuyer Resource
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-dark-green/70 sm:text-[18px]">
              See every program and grant you qualify for.{" "}
              <strong className="text-dark-green">
                No credit pull. No obligation.
              </strong>{" "}
              Real savings for Florida buyers.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/home-purchase-eligibility"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-green px-8 py-4 text-[17px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                style={{ animation: "cta-glow 3s ease-in-out infinite" }}
              >
                <span className="relative z-10">Check My Eligibility</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 z-20"
                  style={{ animation: "shimmer 4s ease-in-out infinite" }}
                >
                  <span className="block h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </span>
                {/* Dark slide-in on hover */}
                <span className="absolute inset-0 -translate-x-full bg-dark-green transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Link>
              <span className="text-[14px] text-dark-green/50">
                No credit pull required
              </span>
            </div>

            {/* Feature grid */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-4 rounded-xl border border-border-gray/60 bg-white/70 px-5 py-4 backdrop-blur-sm transition-colors hover:border-brand-green/30 hover:bg-white"
                >
                  <span className="mt-0.5 shrink-0 text-brand-green">
                    {feature.icon}
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-dark-green/80">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-[13px] text-dark-green/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-brand-green"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative hidden lg:block">
            {/* Green accent shape behind the image */}
            <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-brand-green/10" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/florida-first-time-homebuyer-couple.png"
                alt="Happy couple with keys in front of their new Florida home"
                width={540}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
              {/* Bottom gradient overlay for blending */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-green-tint/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
