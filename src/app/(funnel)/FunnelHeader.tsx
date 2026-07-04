"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const backLinks: Record<string, string> = {
  "/home-purchase-eligibility": "/",
  "/check-dpa-eligibility": "/down-payment-assistance",
  "/check-fha-loan-eligibility": "/home-loan/fha-loan",
  "/check-va-loan-eligibility": "/home-loan",
  "/check-conventional-loan-eligibility": "/home-loan",
  "/check-usda-loan-eligibility": "/home-loan",
  "/check-hometown-heroes-eligibility": "/hometown-heroes",
  "/check-reverse-mortgage-eligibility": "/home-loan",
  "/check-heloc-eligibility": "/home-loan",
  "/check-manufactured-home-loan-eligibility": "/home-loan",
  "/check-non-qm-loan-eligibility": "/home-loan",
  "/check-jumbo-loan-eligibility": "/home-loan",
  "/check-renovation-loan-eligibility": "/home-loan",
  "/check-alternative-loan-eligibility": "/home-loan",
  "/eligibility/schedule-a-free-call": "/",
  "/schedule-a-call": "/",
};

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function FunnelHeader() {
  const pathname = usePathname();
  const backHref = backLinks[normalizePath(pathname)] || "/";

  return (
    <header className="w-full shrink-0 border-b border-border-gray/50 bg-white/95">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex min-h-11 min-w-11 items-center"
          aria-label="Return to Make Florida Your Home"
        >
          <Image
            src="/images/logo.webp"
            alt="Make Florida Your Home"
            width={180}
            height={43}
            className="h-9 w-auto sm:h-11"
            priority
          />
        </Link>
        <Link
          id="back-to-program"
          href={backHref}
          className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-brand-green px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-colors duration-300 hover:bg-dark-green md:px-6 md:text-base"
          aria-label="Return to the program overview"
        >
          Back to Program
        </Link>
      </div>
    </header>
  );
}
