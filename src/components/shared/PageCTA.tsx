import Link from "next/link";

interface PageCTAProps {
  heading: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PageCTA({
  heading,
  subtitle,
  ctaText = "Check My Eligibility",
  ctaHref = "/home-purchase-eligibility",
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-dark-green py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.12] blur-[160px]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent,transparent_60px,rgba(255,255,255,0.015)_60px,rgba(255,255,255,0.015)_61px)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            {heading}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/50 sm:text-[17px]">
            {subtitle}
          </p>
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-9 py-4 text-[16px] font-bold text-brand-green shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
            >
              <span className="relative z-10">{ctaText}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
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
              <span className="absolute inset-0 -translate-x-full bg-brand-green transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="absolute inset-0 z-20 flex items-center justify-center gap-2.5 font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {ctaText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
