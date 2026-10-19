"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/learn/first-time-homebuyer/grants-and-programs",
    label: "First-Time Buyers",
  },
  { href: "/hometown-heroes", label: "Hometown Heroes" },
  { href: "/mortgage-rates", label: "Rates" },
];

type NavOption = {
  href: string;
  label: string;
  blurb: string;
  icon: keyof typeof navIcons;
};

type NavGroup = { label?: string; options: NavOption[] };

/* Small stroke icons for the dropdown menus (24px viewBox). */
const navIcons = {
  home: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tree: (
    <>
      <path d="M12 22v-6" />
      <path d="M12 2L5 12h4l-3 4h12l-3-4h4z" />
    </>
  ),
  manufactured: (
    <>
      <rect x="2" y="7" width="20" height="11" rx="1" />
      <path d="M6 18v3M18 18v3M6 11h4M14 11h4" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </>
  ),
  dollar: (
    <>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </>
  ),
  calculator: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </>
  ),
  percent: (
    <>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </>
  ),
};

function NavIcon({ name }: { name: keyof typeof navIcons }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-tint text-brand-green transition-colors group-hover/item:bg-brand-green group-hover/item:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {navIcons[name]}
      </svg>
    </span>
  );
}

const loanColumns: NavGroup[][] = [
  [
    {
      label: "Buy a home",
      options: [
        {
          href: "/home-loan/fha-loan",
          label: "FHA Loan",
          blurb: "3.5% down, 580+ credit — the first-time buyer favorite",
          icon: "home",
        },
        {
          href: "/learn/conventional-mortgages-in-florida",
          label: "Conventional Loan",
          blurb: "As little as 3% down with removable mortgage insurance",
          icon: "key",
        },
        {
          href: "/home-loan/va-loan",
          label: "VA Loan",
          blurb: "$0 down and no mortgage insurance for veterans",
          icon: "shield",
        },
        {
          href: "/learn/usda-loans-florida",
          label: "USDA Loan",
          blurb: "0% down in eligible rural and suburban areas",
          icon: "tree",
        },
        {
          href: "/learn/florida-manufactured-home-loan-program",
          label: "Manufactured Home Loan",
          blurb: "Finance a manufactured or mobile home with land",
          icon: "manufactured",
        },
      ],
    },
  ],
  [
    {
      label: "Invest in Florida",
      options: [
        {
          href: "/home-loan/dscr-loan",
          label: "DSCR Loan",
          blurb: "For investors — qualify on rental income, no tax returns",
          icon: "building",
        },
        {
          href: "/home-loan/foreign-national-loan",
          label: "Foreign National Loan",
          blurb: "Buy in Florida without U.S. credit or residency",
          icon: "globe",
        },
      ],
    },
    {
      label: "Use your equity",
      options: [
        {
          href: "/learn/how-does-heloc-work-in-florida",
          label: "HELOC",
          blurb: "Tap your home equity without refinancing",
          icon: "dollar",
        },
      ],
    },
  ],
];

const calculatorColumns: NavGroup[][] = [
  [
    {
      options: [
        {
          href: "/home-affordability-calculator",
          label: "Home Affordability Calculator",
          blurb: "See what price fits your income and monthly budget",
          icon: "calculator",
        },
        {
          href: "/florida-dscr-loan-calculator",
          label: "DSCR Loan Calculator",
          blurb: "Check if a rental qualifies, with taxes for all 67 counties",
          icon: "building",
        },
        {
          href: "/learn/florida-va-disability-property-tax-exemptions#what-is-your-exemption-worth",
          label: "VA Disability Tax Savings",
          blurb: "Estimate your Florida property tax exemption by rating",
          icon: "shield",
        },
        {
          href: "/florida-down-payment-assistance-calculator",
          label: "Down Payment Assistance Calculator",
          blurb: "Match state and county programs to your purchase",
          icon: "percent",
        },
      ],
    },
  ],
];

const menus = [
  {
    label: "Loan Options",
    href: "/home-loan",
    viewAll: "View all loan options →",
    columns: loanColumns,
    panelClass: "left-0 w-[640px] -translate-x-6",
    footer: {
      text: "Not sure which loan fits?",
      cta: "Check your eligibility →",
      href: "/home-purchase-eligibility",
    },
  },
  {
    label: "Calculators",
    href: "/calculators",
    viewAll: "View all calculators →",
    columns: calculatorColumns,
    panelClass: "left-1/2 w-[400px] -translate-x-1/2",
    footer: {
      text: "Ready for real numbers?",
      cta: "Check your eligibility →",
      href: "/home-purchase-eligibility",
    },
  },
];

type Menu = (typeof menus)[number];

const menuOptions = (menu: Menu) =>
  menu.columns.flat().flatMap((group) => group.options);

/*
 * A menu is active on its own section or on a page one of its items links to.
 * Items that deep-link into an article section (#anchor) are skipped, so the
 * article itself doesn't light up the menu.
 */
function isMenuActive(pathname: string, menu: Menu) {
  return (
    pathname === menu.href ||
    pathname.startsWith(menu.href + "/") ||
    menuOptions(menu).some(
      (option) => !option.href.includes("#") && option.href === pathname,
    )
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

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
          {/* Dropdown menus */}
          {menus.map((menu) => (
            <li key={menu.href} className="group relative">
              <Link
                href={menu.href}
                className={`relative flex items-center gap-1 whitespace-nowrap py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 ${
                  isMenuActive(pathname, menu)
                    ? "text-brand-green after:w-full"
                    : "hover:text-brand-green after:w-0 hover:after:w-full"
                }`}
              >
                {menu.label}
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
              <div
                className={`invisible absolute top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${menu.panelClass}`}
              >
                <div className="overflow-hidden rounded-2xl border border-border-gray/60 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <div
                    className={`grid gap-x-2 p-2 ${
                      menu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {menu.columns.map((column, i) => (
                      <div key={i} className="space-y-2">
                        {column.map((group) => (
                          <div key={group.label ?? i}>
                            {group.label && (
                              <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.08em] text-dark-green/50">
                                {group.label}
                              </p>
                            )}
                            {group.options.map((option) => (
                              <Link
                                key={option.href}
                                href={option.href}
                                className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-green-tint"
                              >
                                <NavIcon name={option.icon} />
                                <span>
                                  <span className="block text-[15px] font-bold text-dark-green">
                                    {option.label}
                                  </span>
                                  <span className="mt-0.5 block text-[13px] font-normal leading-snug text-dark-green/60">
                                    {option.blurb}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div
                    className={`flex gap-x-4 gap-y-1.5 border-t border-border-gray/60 bg-green-tint/60 px-5 py-3 text-[14px] ${
                      menu.columns.length > 1
                        ? "items-center justify-between"
                        : "flex-col-reverse"
                    }`}
                  >
                    <Link
                      href={menu.href}
                      className="whitespace-nowrap font-bold text-dark-green/70 transition-colors hover:text-brand-green"
                    >
                      {menu.viewAll}
                    </Link>
                    <span className="whitespace-nowrap font-normal text-dark-green/70">
                      {menu.footer.text}{" "}
                      <Link
                        href={menu.footer.href}
                        className="font-bold text-brand-green underline-offset-2 hover:underline"
                      >
                        {menu.footer.cta}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}

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
          mobileOpen ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border-gray px-5 pb-6 pt-4 sm:px-8">
          <ul className="space-y-1">
            {/* Dropdown menus — expandable sections */}
            {menus.map((menu) => {
              const isOpen = mobileMenuOpen === menu.href;

              return (
                <li key={menu.href}>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(isOpen ? null : menu.href)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-bold transition-colors ${
                      isMenuActive(pathname, menu)
                        ? "bg-green-tint text-brand-green"
                        : "text-dark-green hover:bg-green-tint"
                    }`}
                  >
                    {menu.label}
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
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[1100px]" : "max-h-0"
                    }`}
                  >
                    <ul className="space-y-1 pb-1 pl-3 pt-1">
                      {menu.columns.flat().map((group, i) => (
                        <li key={group.label ?? i}>
                          {group.label && (
                            <p className="px-4 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.08em] text-dark-green/50">
                              {group.label}
                            </p>
                          )}
                          <ul className="space-y-1">
                            {group.options.map((option) => (
                              <li key={option.href}>
                                <Link
                                  href={option.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="group/item flex items-start gap-3 rounded-lg px-4 py-2.5 transition-colors hover:bg-green-tint"
                                >
                                  <NavIcon name={option.icon} />
                                  <span>
                                    <span className="block text-[14px] font-bold text-dark-green">
                                      {option.label}
                                    </span>
                                    <span className="block text-[12px] leading-snug text-dark-green/60">
                                      {option.blurb}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                      <li className="mt-2 border-t border-border-gray/60 pt-2">
                        <Link
                          href={menu.footer.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-[14px] transition-colors hover:bg-green-tint"
                        >
                          <span className="text-dark-green/70">
                            {menu.footer.text}{" "}
                          </span>
                          <span className="font-bold text-brand-green">
                            {menu.footer.cta}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={menu.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-[14px] font-bold text-dark-green/70 transition-colors hover:bg-green-tint"
                        >
                          {menu.viewAll}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}

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
