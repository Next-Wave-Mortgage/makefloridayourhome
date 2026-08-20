import Link from "next/link";
import Image from "next/image";
import { bookConfig } from "@/lib/book";

interface BookPromoProps {
  bg?: "white" | "green-tint";
}

export function BookPromo({ bg = "white" }: BookPromoProps) {
  return (
    <section
      className={`relative overflow-hidden py-12 sm:py-14 lg:py-16 ${bg === "green-tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/[0.02]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* Left — book cover */}
          <Link
            href="/book"
            className="group relative mx-auto block w-full max-w-[220px] lg:max-w-none"
          >
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl bg-brand-green/[0.08]" />
            <Image
              src={bookConfig.coverImage}
              alt={bookConfig.coverAlt}
              width={600}
              height={960}
              className="relative h-auto w-full rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1"
            />
          </Link>

          {/* Right — content */}
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              New from Phil Ganz
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              <span className="text-brand-green">Make Florida</span> Your Home —
              The Book
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-dark-green/60 sm:text-[17px] lg:mx-0">
              The insider&apos;s guide to down payment assistance, Hometown
              Heroes, and buying your first Florida home without draining your
              savings. 105 programs, 67 counties, and a 90-day plan — in plain
              English, from a top 1% mortgage originator.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[16px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
              >
                Get the Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <span className="text-[14px] text-dark-green/50">
                Kindle, paperback, and hardcover on Amazon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
