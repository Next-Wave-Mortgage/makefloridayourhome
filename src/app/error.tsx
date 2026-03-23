"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-tint px-6 text-center">
      <h1 className="text-6xl font-bold text-brand-green">500</h1>
      <p className="mt-4 text-xl font-semibold text-dark-green">
        Something went wrong
      </p>
      <p className="mt-2 max-w-md text-dark-green/60">
        We hit an unexpected error. Please try again, or head back to the
        homepage.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg border border-brand-green bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green/90"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-border-gray bg-white px-5 py-2.5 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green/30 hover:bg-brand-green hover:text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
