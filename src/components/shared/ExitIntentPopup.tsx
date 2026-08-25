"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { bookConfig } from "@/lib/book";

/**
 * Exit-intent popup offering the free ebook.
 *
 * Trigger rules (SEO-safe by design):
 * - Desktop only (fine pointer + >=1024px viewport) — never fires on mobile
 * - Real exit intent only (cursor leaves the top of the viewport), never on load
 * - Minimum dwell time before it can fire
 * - Once shown, suppressed for SUPPRESS_DAYS via localStorage
 * - Mounted only in the (marketing) layout; funnel pages never see it
 */

const STORAGE_KEY = "mfyh-exit-popup-last-shown";
const SUPPRESS_DAYS = 30;
const MIN_DWELL_MS = 10_000;
const EXCLUDED_PATHS = ["/book", "/contact-us"];
const CONTACT_CAPTURE_ENDPOINT =
  process.env.NEXT_PUBLIC_EXIT_POPUP_CONTACT_ENDPOINT ||
  "https://www.nextwavemortgage.com/api/public/contact-capture";

// Ebook delivery is not built yet. Keep production dark until the delivery
// promise in this popup can be fulfilled; CRM capture is already wired.
const PRODUCTION_ENABLED = false;

const buyingTimeframeOptions = [
  "Signed Contract",
  "Making an Offer",
  "Need Pre Approval",
  "Buying in next few months",
  "Buying 6+ months out",
] as const;

const purchasePriceOptions = [
  "Under $60,000",
  "$60,000 - $79,999",
  "$80,000 - $99,999",
  "$100,000 - $149,999",
  "$150,000 - $199,999",
  "$200,000 - $299,999",
  "$300,000 - $399,999",
  "$400,000 - $499,999",
  "$500,000 - $749,999",
  "$750,000 - $999,999",
  "$1,000,000 - $1,249,999",
  "$1,250,000 - $1,495,999",
  "Over $1,500,000",
] as const;

type ContactCapturePayload = {
  email: string;
  firstName?: string;
  buyingTimeframe?: string;
  purchasePrice?: string;
  website: string;
};

function isSuppressed(): boolean {
  try {
    const last = window.localStorage.getItem(STORAGE_KEY);
    if (!last) return false;
    return Date.now() - Number(last) < SUPPRESS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return true;
  }
}

function markShown() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* private mode — nothing to do */
  }
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] transition-colors duration-200 ${
        selected
          ? "border-brand-green bg-green-tint font-semibold text-brand-green"
          : "border-border-gray bg-white text-[#5d6864] hover:border-brand-green/40"
      }`}
    >
      {label}
    </button>
  );
}

function CustomSelect({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  value: string | null;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const selectedIndex = value ? options.indexOf(value) : -1;
  const boundedIndex = Math.max(0, Math.min(options.length - 1, activeIndex));
  const menuId = `${id}-menu`;
  const activeId = `${id}-option-${boundedIndex}`;

  const openMenu = useCallback(() => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  }, [selectedIndex]);

  const chooseOption = useCallback(
    (option: string) => {
      onChange(option);
      setIsOpen(false);
    },
    [onChange],
  );

  useEffect(() => {
    if (!isOpen) return;
    menuRef.current
      ?.querySelector<HTMLElement>(`#${activeId}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeId, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Tab") {
      setIsOpen(false);
      return;
    }
    if (event.key === "Escape") {
      if (isOpen) {
        event.preventDefault();
        setIsOpen(false);
      }
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isOpen) {
        openMenu();
      } else {
        chooseOption(options[boundedIndex]);
      }
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    if (!isOpen) {
      openMenu();
      return;
    }

    let nextIndex = boundedIndex;
    if (event.key === "ArrowDown") nextIndex += 1;
    if (event.key === "ArrowUp") nextIndex -= 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;
    setActiveIndex(Math.max(0, Math.min(options.length - 1, nextIndex)));
  };

  return (
    <div ref={wrapperRef} className={`relative ${isOpen ? "z-30" : "z-10"}`}>
      <button
        id={id}
        type="button"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-activedescendant={isOpen ? activeId : undefined}
        onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={`flex min-h-[48px] w-full cursor-pointer items-center justify-between gap-3 rounded-[14px] border-2 px-[15px] py-3 text-left text-[13.5px] text-dark-green transition duration-150 focus:outline-none ${
          isOpen
            ? "border-brand-green shadow-[0_0_0_4px_rgba(0,105,72,0.08)]"
            : "border-border-gray hover:-translate-y-px hover:border-brand-green hover:shadow-[0_0_0_4px_rgba(0,105,72,0.08)]"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,250,246,0.3))",
        }}
      >
        <span
          className={`min-w-0 truncate ${
            value ? "font-semibold" : "text-mid-gray"
          }`}
        >
          {value || placeholder}
        </span>
        <span
          aria-hidden="true"
          className={`mr-0.5 h-[10px] w-[10px] flex-none border-b-2 border-r-2 border-dark-green/80 transition-transform duration-150 ${
            isOpen
              ? "translate-y-0.5 rotate-[225deg]"
              : "-translate-y-0.5 rotate-45"
          }`}
        />
      </button>

      {isOpen ? (
        <div
          ref={menuRef}
          id={menuId}
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 top-full mt-2 grid max-h-[240px] gap-1 overflow-y-auto overscroll-contain rounded-2xl border border-brand-green/20 bg-[#f9fcfa] p-1.5 shadow-[0_18px_42px_rgba(0,105,72,0.16),0_2px_0_rgba(255,255,255,0.9)_inset] animate-[exit-select-menu-in_140ms_ease_both]"
        >
          {options.map((option, index) => {
            const selected = option === value;
            const active = index === boundedIndex;
            return (
              <div
                key={option}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={selected}
                onMouseDown={(event) => event.preventDefault()}
                onMouseMove={() => setActiveIndex(index)}
                onClick={() => chooseOption(option)}
                className={`grid min-h-[42px] cursor-pointer grid-cols-[1fr_20px] items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition duration-150 ${
                  selected
                    ? "bg-brand-green/12 font-bold text-brand-green"
                    : active
                      ? "translate-x-0.5 bg-brand-green/[0.09] text-dark-green"
                      : "text-dark-green hover:bg-brand-green/[0.09]"
                }`}
              >
                <span>{option}</span>
                <span className="grid place-items-center" aria-hidden="true">
                  {selected ? (
                    <span className="h-3 w-[7px] rotate-45 border-b-2 border-r-2 border-current" />
                  ) : null}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      aria-label="Close"
      onClick={onClose}
      className="absolute right-4 top-4 z-10 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-border-gray bg-white text-[17px] leading-none text-[#5d6864] transition-colors hover:text-dark-green"
    >
      &times;
    </button>
  );
}

export function ExitIntentPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"capture" | "confirm">("capture");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [buyingTimeframe, setBuyingTimeframe] = useState<string | null>(null);
  const [purchasePrice, setPurchasePrice] = useState<string | null>(null);
  const [website, setWebsite] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mountedAt = useRef(0);

  const excluded = EXCLUDED_PATHS.some((p) => pathname?.startsWith(p));
  const enabled = PRODUCTION_ENABLED || process.env.NODE_ENV === "development";

  const close = useCallback(() => {
    markShown();
    setOpen(false);
  }, []);

  /* Exit-intent trigger */
  useEffect(() => {
    if (!enabled || excluded) return;
    if (isSuppressed()) return;
    const isDesktop =
      window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 1024;
    if (!isDesktop) return;

    mountedAt.current = Date.now();

    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget !== null) return;
      if (e.clientY > 10) return;
      if (Date.now() - mountedAt.current < MIN_DWELL_MS) return;
      markShown();
      setOpen(true);
      document.removeEventListener("mouseout", onMouseOut);
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [enabled, excluded]);

  /* Scroll lock, Escape, initial focus, focus trap */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    emailRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const submitContactCapture = useCallback(
    async (payload: ContactCapturePayload) => {
      try {
        const response = await fetch(CONTACT_CAPTURE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
        if (!response.ok) {
          console.error("[exit-popup] CRM capture failed", {
            status: response.status,
            requestId: response.headers.get("x-request-id"),
          });
        }
      } catch (error) {
        console.error("[exit-popup] CRM capture request failed", { error });
      }
    },
    [],
  );

  const handleCaptureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void submitContactCapture({ email, website });
    setStep("confirm");
  };

  const handleDone = () => {
    void submitContactCapture({
      email,
      firstName,
      buyingTimeframe: buyingTimeframe || undefined,
      purchasePrice: purchasePrice || undefined,
      website,
    });
    close();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00281c]/60 p-5 backdrop-blur-[2px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        className="relative flex w-full max-w-[480px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_30px_70px_-18px_rgba(0,49,34,0.4),0_0_0_1px_rgba(0,105,72,0.06)] lg:max-w-[680px] lg:flex-row"
      >
        {step === "capture" ? (
          <>
            {/* Cover panel — top band on small, left column on lg+ */}
            <div className="relative flex h-[196px] flex-none items-end justify-center overflow-hidden bg-green-tint lg:h-auto lg:w-[266px] lg:items-center">
              <div className="absolute -left-[70px] -top-16 h-[250px] w-[250px] rounded-full bg-review-gold/25" />
              <div className="absolute -bottom-20 -right-24 h-[260px] w-[260px] rounded-full bg-brand-green/10" />
              <div className="absolute bottom-[34px] left-[38px] hidden h-[190px] w-[190px] rounded-full border border-brand-green/15 lg:block" />
              <Image
                src={bookConfig.coverImage}
                alt={bookConfig.coverAlt}
                width={360}
                height={576}
                className="relative block h-[170px] w-auto rounded-[3px] shadow-[0_22px_40px_-10px_rgba(0,49,34,0.5),0_2px_6px_rgba(0,49,34,0.2)] lg:h-[288px]"
              />
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col p-7 lg:px-9 lg:pb-[34px] lg:pt-[42px]">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#8a6a00]">
                BEFORE YOU GO
              </p>
              <h2
                id="exit-popup-title"
                className="mt-3 text-[28px] font-bold leading-[1.14] tracking-tight text-dark-green lg:text-[34px]"
              >
                Take the book &mdash;{" "}
                <span className="text-brand-green">free</span>
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed text-[#5d6864] lg:text-[14px]">
                The insider&apos;s guide to Florida&apos;s 105 assistance
                programs, the $35,000 Hometown Heroes playbook, and the 90-day
                plan to keys in hand. We&apos;ll send the full ebook straight to
                your inbox.
              </p>

              <form
                onSubmit={handleCaptureSubmit}
                className="mt-auto flex flex-col gap-3 pt-6"
              >
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-2 lg:rounded-full lg:border lg:border-border-gray lg:bg-white lg:p-[5px] lg:pl-5 lg:shadow-[0_1px_2px_rgba(0,49,34,0.04)]">
                  <input
                    ref={emailRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="min-w-0 flex-1 rounded-full border border-border-gray bg-white px-5 py-3 text-[14px] text-dark-green outline-none placeholder:text-mid-gray lg:border-none lg:bg-transparent lg:p-0"
                  />
                  <label className="sr-only" htmlFor="exit-popup-website">
                    Website
                  </label>
                  <input
                    id="exit-popup-website"
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[10000px] h-px w-px opacity-0"
                  />
                  <button
                    type="submit"
                    className="flex-none cursor-pointer whitespace-nowrap rounded-full bg-brand-green px-[17px] py-3 text-[13.5px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)] lg:py-3"
                  >
                    Send Me the Free Book
                  </button>
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between lg:gap-4">
                  <p className="text-[12px] text-mid-gray">
                    No spam &mdash; unsubscribe anytime.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="cursor-pointer whitespace-nowrap text-[12.5px] text-[#8a938f] underline underline-offset-[3px] transition-colors hover:text-dark-green"
                  >
                    No thanks, I&apos;ll keep browsing
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="relative w-full min-w-0">
            <div className="absolute left-0 top-0 h-1 w-full bg-review-gold" />
            <div className="absolute -right-[110px] -top-[110px] h-[280px] w-[280px] rounded-full bg-green-tint" />

            <div className="relative flex flex-col p-7 lg:px-11 lg:pb-[34px] lg:pt-10">
              <div className="flex items-center gap-4 pr-10">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-green">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h2
                    id="exit-popup-title"
                    className="text-[24px] font-bold leading-[1.15] tracking-tight text-dark-green lg:text-[28px]"
                  >
                    Your book is{" "}
                    <span className="text-brand-green">on the way</span>
                  </h2>
                  <p className="mt-1.5 text-[13.5px] text-[#5d6864]">
                    30 seconds so we can point you at the right programs?
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-[18px]">
                <div className="flex flex-col gap-2.5">
                  <p className="text-[11px] font-bold tracking-[0.13em] text-[#7c8783]">
                    BUYING TIMEFRAME?{" "}
                    <span className="font-semibold tracking-[0.06em] text-mid-gray">
                      OPTIONAL
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {buyingTimeframeOptions.map((option) => (
                      <Chip
                        key={option}
                        label={option}
                        selected={buyingTimeframe === option}
                        onClick={() =>
                          setBuyingTimeframe(
                            buyingTimeframe === option ? null : option,
                          )
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <p className="text-[11px] font-bold tracking-[0.13em] text-[#7c8783]">
                    ESTIMATED PURCHASE PRICE?{" "}
                    <span className="font-semibold tracking-[0.06em] text-mid-gray">
                      OPTIONAL
                    </span>
                  </p>
                  <CustomSelect
                    id="exit-popup-purchase-price"
                    label="Estimated purchase price"
                    placeholder="Select a price range"
                    options={purchasePriceOptions}
                    value={purchasePrice}
                    onChange={setPurchasePrice}
                  />
                </div>
              </div>

              <p className="mt-6 text-[12.5px] leading-relaxed text-mid-gray">
                The book is already sent &mdash; this just helps us skip the
                programs you can&apos;t use.
              </p>

              <div className="mt-6 flex flex-col gap-3 border-t border-border-gray pt-[22px] lg:flex-row lg:items-center lg:gap-3.5">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  aria-label="First name"
                  className="min-w-0 flex-1 rounded-full border border-border-gray bg-white px-5 py-[13px] text-[14px] text-dark-green outline-none placeholder:text-mid-gray"
                />
                <button
                  type="button"
                  onClick={handleDone}
                  className="flex-none cursor-pointer rounded-full bg-brand-green px-[34px] py-[13px] text-[13.5px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                >
                  Done
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="cursor-pointer whitespace-nowrap text-center text-[12.5px] text-[#8a938f] underline underline-offset-[3px] transition-colors hover:text-dark-green"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        )}

        <CloseButton onClose={close} />
      </div>
    </div>
  );
}
