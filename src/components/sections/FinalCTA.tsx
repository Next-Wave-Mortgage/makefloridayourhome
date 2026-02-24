"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "$100K+",
    label: "Max Combined Aid",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Assistance Programs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    value: "15 min",
    label: "Free Consultation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group/section relative overflow-hidden bg-dark-green py-16 sm:py-20 lg:py-24"
    >
      {/* Animated shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .is-visible .animate-fade-up {
          animation: fade-up 0.6s ease-out both;
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.12] blur-[160px]" />
        {/* Secondary glow — bottom right warmth */}
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-brand-green/[0.06] blur-[100px]" />
        {/* Diagonal lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent,transparent_60px,rgba(255,255,255,0.015)_60px,rgba(255,255,255,0.015)_61px)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Inner card — glass border with green glow */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_80px_rgba(0,105,72,0.15)] backdrop-blur-sm">
          <div className="px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div className="text-center">
              {/* Pill badge */}
              <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-white/90">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand-green shadow-[0_0_8px_rgba(0,105,72,0.6)]" />
                  Free — No Obligation, No Credit Pull
                </span>
              </div>

              {/* Heading */}
              <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
                <h2 className="mt-7 text-[28px] font-bold leading-[1.15] text-white sm:text-[38px] lg:text-[48px]">
                  Ready to Buy Your First
                  <br />
                  <span className="relative inline-block mt-1">
                    Florida Home?
                    {/* Thick green underline */}
                    <span className="absolute -bottom-2 left-1/2 h-1 w-3/4 -translate-x-1/2 rounded-full bg-brand-green shadow-[0_0_12px_rgba(0,105,72,0.5)] sm:-bottom-2.5 sm:h-1.5" />
                  </span>
                </h2>
              </div>

              {/* Subtext */}
              <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/50 sm:text-[17px]">
                  One call with a Florida mortgage expert could save you
                  thousands at closing.
                </p>
              </div>

              {/* Stats row — glass cards with icons */}
              <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
                <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="group/stat rounded-2xl border border-white/[0.07] bg-white/[0.04] px-3 py-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] sm:px-5 sm:py-6"
                    >
                      <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green transition-colors duration-300 group-hover/stat:bg-brand-green/30">
                        {stat.icon}
                      </span>
                      <span className="mt-3 block text-[22px] font-black leading-none text-white sm:text-[28px]">
                        {stat.value}
                      </span>
                      <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-wider text-white/35 sm:text-[11px]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <Link
                    href="/home-purchase-eligibility"
                    className="shimmer-btn group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-brand-green px-9 py-4.5 text-[15px] font-bold text-white shadow-[0_4px_24px_rgba(0,105,72,0.5)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,105,72,0.6)] hover:scale-[1.02] sm:text-[16px]"
                  >
                    <span className="relative z-[1] flex items-center gap-2.5">
                      Check My Eligibility
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
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-[14px] font-semibold text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white sm:text-[15px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/50 transition-colors duration-300 group-hover:text-white"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Or Call Us Directly
                  </Link>
                </div>
              </div>

              {/* Trust line */}
              <div className="animate-fade-up" style={{ animationDelay: "500ms" }}>
                <p className="mt-8 flex items-center justify-center gap-2 text-[12px] text-white/30 sm:text-[13px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green/60">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  NMLS #2536820 &bull; Licensed in Florida &bull; BBB Accredited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
