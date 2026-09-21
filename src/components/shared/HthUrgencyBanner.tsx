import Link from "next/link";

/**
 * Shared Hometown Heroes eligibility prompt. Keep funding balances and
 * dated announcements in the funding article so this copy does not expire.
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
          <strong className="font-black text-review-gold">
            Planning to use Hometown Heroes?
          </strong>{" "}
          Check your eligibility and confirm current funding with your lender.
        </span>
        <span className="font-bold underline decoration-white/40 underline-offset-4 transition group-hover:decoration-white">
          Check eligibility →
        </span>
      </p>
    </Link>
  );
}
