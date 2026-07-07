import Link from "next/link";

/**
 * Urgency banner for the 2026 Hometown Heroes relaunch (July 13, 2026,
 * $50M). Rendered between the nav and the hero on every Hometown Heroes
 * page. Remove or update once the funding cycle ends.
 */
export function HthUrgencyBanner() {
  return (
    <Link
      href="/check-hometown-heroes-eligibility"
      className="group block bg-[#00462F] px-5 py-3 text-center"
    >
      <p className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] font-semibold leading-snug text-white sm:text-[14px]">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-review-gold opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-review-gold" />
        </span>
        <span>
          The 2026 Hometown Heroes Program launches{" "}
          <strong className="font-black text-review-gold">
            Monday, July 13 at 10:00 AM
          </strong>{" "}
          with $50 million in funding — first come, first served.
        </span>
        <span className="font-bold underline decoration-white/40 underline-offset-4 transition group-hover:decoration-white">
          Get ready now →
        </span>
      </p>
    </Link>
  );
}
