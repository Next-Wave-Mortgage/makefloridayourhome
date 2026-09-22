"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/learn/first-time-homebuyer/grants-and-programs", label: "First-Time Homebuyer" },
  { href: "/down-payment-assistance", label: "Down Payment Assistance" },
  { href: "/hometown-heroes", label: "Hometown Heroes" },
  { href: "/mortgage-rates", label: "Rates" },
];

const loanOptions = [
  {
    href: "/home-loan/fha-loan",
    label: "FHA Loan",
    blurb: "3.5% down, 580+ credit — the first-time buyer favorite",
  },
  {
    href: "/home-loan/dscr-loan",
    label: "DSCR Loan",
    blurb: "For investors — qualify on rental income, no tax returns",
  },
  {
    href: "/learn/conventional-mortgages-in-florida",
    label: "Conventional Loan",
    blurb: "As little as 3% down with removable mortgage insurance",
  },
  {
    href: "/learn/usda-loans-florida",
    label: "USDA Loan",
    blurb: "0% down in eligible rural and suburban areas",
  },
  {
    href: "/learn/florida-manufactured-home-loan-program",
    label: "Manufactured Home Loan",
    blurb: "Finance a manufactured or mobile home with land",
  },
  {
    href: "/learn/how-does-heloc-work-in-florida",
    label: "HELOC",
    blurb: "Tap your home equity without refinancing",
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLoansOpen, setMobileLoansOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Make Florida Your Home — Next Wave Mortgage"
            width={833}
            height={250}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="mx-auto hidden items-center gap-5 text-[15px] font-bold text-dark-green xl:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <li key={link.href}>
                {link.href === "/mortgage-rates" ? (
                  <a
                    href={link.href}
                    className={`relative whitespace-nowrap py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 ${
                      isActive
                        ? "text-brand-green after:w-full"
                        : "hover:text-brand-green after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative whitespace-nowrap py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 ${
                      isActive
                        ? "text-brand-green after:w-full"
                        : "hover:text-brand-green after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Loan Options dropdown */}
          <li className="group relative">
            <Link
              href="/home-loan"
              className={`relative flex items-center gap-1 whitespace-nowrap py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 ${
                pathname === "/home-loan" || pathname.startsWith("/home-loan/")
                  ? "text-brand-green after:w-full"
                  : "hover:text-brand-green after:w-0 hover:after:w-full"
              }`}
            >
              Loan Options
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-border-gray/60 bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                {loanOptions.map((option) => (
                  <Link
                    key={option.href}
                    href={option.href}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-green-tint"
                  >
                    <span className="block text-[15px] font-bold text-dark-green">
                      {option.label}
                    </span>
                    <span className="mt-0.5 block text-[13px] font-normal leading-snug text-dark-green/60">
                      {option.blurb}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/home-loan"
                  className="mt-1 block rounded-xl border-t border-border-gray/60 px-4 py-3 text-[14px] font-bold text-brand-green transition-colors hover:bg-green-tint"
                >
                  View all loan options →
                </Link>
              </div>
            </div>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          {/* CTA button — hidden on small mobile, visible from sm up */}
          <Link
            href="/home-purchase-eligibility"
            className="group relative hidden items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-brand-green px-5 py-2.5 text-[14px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,105,72,0.35)] sm:inline-flex sm:px-6 sm:py-3 sm:text-[16px]"
          >
            <span className="relative z-10">Get Pre-Approved</span>
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
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="absolute inset-0 -translate-x-full bg-dark-green transition-transform duration-300 ease-out group-hover:translate-x-0" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative h-6 w-6 text-dark-green xl:hidden"
          >
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "top-[11px] rotate-45" : "top-[4px]"
              }`}
            />
            <span
              className={`absolute left-0 top-[11px] h-[2px] w-6 bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "top-[11px] -rotate-45" : "top-[18px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          mobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border-gray px-5 pb-6 pt-4 sm:px-8">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <li key={link.href}>
                  {link.href === "/mortgage-rates" ? (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-[15px] font-bold transition-colors ${
                        isActive
                          ? "bg-green-tint text-brand-green"
                          : "text-dark-green hover:bg-green-tint"
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-[15px] font-bold transition-colors ${
                        isActive
                          ? "bg-green-tint text-brand-green"
                          : "text-dark-green hover:bg-green-tint"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* Loan Options — expandable section */}
            <li>
              <button
                type="button"
                onClick={() => setMobileLoansOpen(!mobileLoansOpen)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-bold transition-colors ${
                  pathname.startsWith("/home-loan")
                    ? "bg-green-tint text-brand-green"
                    : "text-dark-green hover:bg-green-tint"
                }`}
              >
                Loan Options
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
                  className={`transition-transform duration-200 ${
                    mobileLoansOpen ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileLoansOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="space-y-1 pb-1 pl-3 pt-1">
                  {loanOptions.map((option) => (
                    <li key={option.href}>
                      <Link
                        href={option.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-2.5 transition-colors hover:bg-green-tint"
                      >
                        <span className="block text-[14px] font-bold text-dark-green">
                          {option.label}
                        </span>
                        <span className="block text-[12px] leading-snug text-dark-green/60">
                          {option.blurb}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/home-loan"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-[14px] font-bold text-brand-green transition-colors hover:bg-green-tint"
                    >
                      View all loan options →
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Mobile CTA — only shows on tiny screens where header CTA is hidden */}
          <Link
            href="/home-purchase-eligibility"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-full bg-brand-green px-6 py-3 text-center text-[16px] font-bold text-white sm:hidden"
          >
            Get Pre-Approved
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] bg-brand-green" />
    </header>
  );
}
