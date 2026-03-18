import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "First-Time Homebuyer Guide",
    description:
      "Everything you need to know before buying your first home in Florida.",
    href: "/first-time-home-buyer",
    image: "/images/programs/first-time-homebuyer.png",
    imagePosition: "center",
    tag: "Getting Started",
  },
  {
    title: "Down Payment Assistance",
    description:
      "See how much help you can get and which programs you qualify for.",
    href: "/down-payment-assistance",
    image: "/images/programs/down-payment-assistance.png",
    imagePosition: "center",
    tag: "Save Thousands",
  },
  {
    title: "Hometown Heroes",
    description:
      "Check if your job makes you eligible for Florida's top buyer benefit.",
    href: "/florida/hometown-heroes",
    image: "/images/programs/hometown-heroes.png",
    imagePosition: "center 25%",
    tag: "Up to $35K",
  },
  {
    title: "FHA Loans",
    description:
      "Understand low down payment options and flexible credit guidelines.",
    href: "/home-loan/fha-loan",
    image: "/images/programs/fha-loans.png",
    imagePosition: "center",
    tag: "Low Down Payment",
  },
];

export function Programs() {
  return (
    <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-dark-green">
            Florida Buyer Programs
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
            <span className="text-brand-green">Confidence</span> Comes With
            <br className="hidden sm:block" /> Knowing Your Options
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
            Explore programs designed to help Florida buyers save thousands
          </p>
        </div>

        {/* Program cards — full-bleed image overlay */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group relative h-[300px] overflow-hidden rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,105,72,0.18)] hover:ring-brand-green/30 sm:h-[340px]"
            >
              {/* Full-bleed image */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ objectPosition: program.imagePosition }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              {/* Hover intensifier */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Tag pill */}
              <span className="absolute top-5 left-5 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-green shadow-sm backdrop-blur-sm">
                {program.tag}
              </span>

              {/* Content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="text-[20px] font-bold leading-snug text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] sm:text-[22px]">
                  {program.title}
                </h3>

                {/* Description — always visible on mobile, hover-reveal on desktop */}
                <p className="mt-2 text-[14px] leading-relaxed text-white/80 sm:text-[15px] sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  {program.description}
                </p>

                {/* Learn more */}
                <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] group-hover:text-white sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:delay-75 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  Learn More
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
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-brand-green px-8 py-8 shadow-lg sm:flex sm:items-center sm:justify-between sm:px-10 sm:py-9">
          <div>
            <h3 className="text-[22px] font-bold text-white sm:text-[24px]">
              Find Out Which Program Fits You Best
            </h3>
            <p className="mt-1.5 text-[15px] text-white/50">
              Takes less than 2 minutes — no credit pull required
            </p>
          </div>
          <Link
            href="/home-purchase-eligibility"
            className="group mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-brand-green transition-all duration-300 hover:bg-white/90 hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)] sm:mt-0"
          >
            Check My Eligibility
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
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
