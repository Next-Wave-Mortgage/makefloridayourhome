import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "First-Time Homebuyer Guide",
    description:
      "Everything you need to know before buying your first home in Florida.",
    href: "/first-time-homebuyer",
    image: "/images/programs/first-time-homebuyer.png",
    imagePosition: "center",
  },
  {
    title: "Down Payment Assistance",
    description:
      "See how much help you can get and which programs you qualify for.",
    href: "/down-payment-assistance",
    image: "/images/programs/down-payment-assistance.png",
    imagePosition: "center",
  },
  {
    title: "Hometown Heroes",
    description:
      "Check if your job makes you eligible for Florida's top buyer benefit.",
    href: "/hometown-heroes",
    image: "/images/programs/hometown-heroes.png",
    imagePosition: "center 25%",
  },
  {
    title: "FHA Loans",
    description:
      "Understand low down payment options and flexible credit guidelines.",
    href: "/fha-loan",
    image: "/images/programs/fha-loans.png",
    imagePosition: "center",
  },
];

export function Programs() {
  return (
    <section className="bg-green-tint py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <h2 className="text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px]">
          <span className="text-brand-green">Confidence</span> Comes With
          <br className="hidden sm:block" /> Knowing Your Options
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-[16px] leading-relaxed text-dark-green/60">
          Explore programs designed to help Florida buyers save thousands
        </p>

        {/* Program cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group relative overflow-hidden rounded-2xl border border-border-gray/60 bg-white transition-all duration-300 hover:border-brand-green/30 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden sm:h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: program.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="text-[18px] font-bold text-dark-green sm:text-[20px]">
                  {program.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60 sm:text-[15px]">
                  {program.description}
                </p>

                {/* Learn more link */}
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-green transition-colors group-hover:text-dark-green">
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
        <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-brand-green/15 bg-white px-8 py-7 shadow-sm sm:flex-row sm:justify-between sm:py-6">
          <h3 className="text-center text-[20px] font-bold text-dark-green sm:text-left sm:text-[22px]">
            Find Out Which Program Fits You Best
          </h3>
          <Link
            href="/home-purchase-eligibility"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
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
