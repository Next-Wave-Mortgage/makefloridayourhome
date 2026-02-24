"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/first-time-home-buyer", label: "First-Time Homebuyer" },
  { href: "/down-payment-assistance", label: "Down Payment Assistance" },
  { href: "/florida/hometown-heroes", label: "Hometown Heroes" },
  { href: "/home-loan/fha-loan", label: "FHA Loan" },
  { href: "/home-loan", label: "Loan Options" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Make Florida Your Home — Next Wave Mortgage"
            width={200}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="mx-auto hidden items-center gap-7 text-[15px] font-bold text-dark-green xl:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <li key={link.href}>
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
              </li>
            );
          })}
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
                mobileOpen
                  ? "top-[11px] rotate-45"
                  : "top-[4px]"
              }`}
            />
            <span
              className={`absolute left-0 top-[11px] h-[2px] w-6 bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ${
                mobileOpen
                  ? "top-[11px] -rotate-45"
                  : "top-[18px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border-gray px-5 pb-6 pt-4 sm:px-8">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <li key={link.href}>
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
                </li>
              );
            })}
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
