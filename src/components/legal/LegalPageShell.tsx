import type { ReactNode } from "react";

type LegalPageShellProps = {
  titleAccent: string;
  titleRest: string;
  effectiveDate: string;
  children: ReactNode;
};

/**
 * Shared shell for legal pages (Privacy Policy, Terms of Service).
 * Provides the banner and typography so page files only contain content.
 */
export function LegalPageShell({
  titleAccent,
  titleRest,
  effectiveDate,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <section className="bg-green-tint py-14 text-center sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            <span className="text-brand-green">{titleAccent}</span> {titleRest}
          </h1>
          <p className="mt-3 text-[15px] text-dark-green/60">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div
          className="mx-auto max-w-3xl px-5 text-[15px] leading-[1.8] text-dark-green/80 sm:px-8
            [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-dark-green
            [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-dark-green
            [&_p]:mt-4
            [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6
            [&_li]:mt-2
            [&_a]:text-brand-green [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-brand-green/80
            [&_strong]:font-semibold [&_strong]:text-dark-green"
        >
          {children}
        </div>
      </section>
    </>
  );
}
