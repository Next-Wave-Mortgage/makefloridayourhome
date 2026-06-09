import Link from "next/link";

interface ToolHeroBreadcrumb {
  label: string;
  href: string;
}

interface ToolHeroProps {
  title: string;
  description?: string;
  tags?: string[];
  breadcrumbs?: ToolHeroBreadcrumb[];
  cta?: {
    href: string;
    label: string;
    note?: string;
  };
}

export function ToolHero({
  title,
  description,
  tags = [],
  breadcrumbs = [{ label: "Calculators", href: "/calculators" }],
  cta,
}: ToolHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-green">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 80% at 90% 100%, rgba(0,0,0,0.20) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <svg
        className="pointer-events-none absolute -right-16 -top-10 h-[520px] w-[520px] text-white/[0.04]"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M256 0c0 0-48 96-48 208c0 48 16 88 48 112c32-24 48-64 48-112C304 96 256 0 256 0zM256 320c-80-48-192-48-240 16c48 64 160 80 240 48zM256 320c80-48 192-48 240 16c-48 64-160 80-240 48zM128 160c-64 32-112 96-128 176c80-16 160-64 192-128zM384 160c64 32 112 96 128 176c-80-16-160-64-192-128z" />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 16px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="pb-12 pt-6 sm:pb-14 sm:pt-7 lg:pb-16 lg:pt-8">
          <nav className="mb-4 flex items-center gap-2 text-[13px] text-white/45">
            <Link href="/" className="transition-colors hover:text-white/80">
              Home
            </Link>
            {breadcrumbs.map((breadcrumb) => (
              <span key={breadcrumb.href} className="contents">
                <span className="text-white/25">/</span>
                <Link
                  href={breadcrumb.href}
                  className="transition-colors hover:text-white/80"
                >
                  {breadcrumb.label}
                </Link>
              </span>
            ))}
          </nav>

          <div className="max-w-4xl">
            {tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
              {title}
            </h1>

            {description && (
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
                {description}
              </p>
            )}

            {cta && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={cta.href}
                  className="group inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3.5 text-[15px] font-black text-brand-green shadow-[0_12px_34px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
                >
                  <span>{cta.label}</span>
                  <span
                    aria-hidden="true"
                    className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-white transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
                {cta.note && (
                  <p className="max-w-xs text-[13px] font-semibold leading-relaxed text-white/62">
                    {cta.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
