"use client";

import { FormCraftsEmbed } from "@/components/FormCraftsEmbed";

/* ── Checkmark icon ── */
function Check() {
  return (
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
      className="shrink-0 text-brand-green"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── Shield icon ── */
function Shield() {
  return (
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
      className="text-brand-green/40"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* ── Props ── */
interface FunnelFormPageProps {
  heading: string;
  subtitle?: string;
  fcKey: string;
}

export function FunnelFormPage({
  heading,
  subtitle,
  fcKey,
}: FunnelFormPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-green-tint/40">
      <div className="flex flex-1 items-start justify-center px-4 py-5 sm:px-6 sm:py-10 lg:py-14">
        <div className="mx-auto w-full max-w-2xl">
          {/* Card container — gives the whole form area visual weight */}
          <div className="rounded-2xl border border-border-gray/40 bg-white px-5 py-6 shadow-[0_2px_24px_rgba(0,0,0,0.06)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            {/* Pill badge — desktop only */}
            <p className="hidden text-[12px] font-bold uppercase tracking-wider text-brand-green lg:block">
              Free &bull; No Credit Pull &bull; 2 Minutes
            </p>
            <h1 className="text-[22px] font-bold leading-[1.2] text-dark-green sm:text-[28px] lg:mt-2 lg:text-[34px]">
              {heading}
            </h1>
            {/* Subtitle — desktop only */}
            {subtitle && (
              <p className="mt-2 hidden text-[15px] leading-relaxed text-dark-green/50 lg:block">
                {subtitle}
              </p>
            )}

            {/* Trust checkmarks */}
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 lg:mt-3">
              {["No credit pull", "2 minutes", "100% free"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 text-[12px] font-medium text-dark-green/50 lg:text-[13px]"
                >
                  <Check />
                  {item}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-4 h-px bg-border-gray/40 lg:mt-5" />

            {/* Form */}
            <div className="mt-4 lg:mt-5">
              <FormCraftsEmbed fcKey={fcKey} />
            </div>
          </div>

          {/* Security line — outside card */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-dark-green/30">
            <Shield />
            <span>256-bit encryption &bull; NMLS #2536820</span>
          </div>
        </div>
      </div>
    </div>
  );
}
