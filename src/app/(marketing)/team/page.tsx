import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { team } from "./teamData";

export const metadata: Metadata = {
  title: "Our Team | Make Florida Your Home",
  description:
    "Meet the Florida mortgage experts at Next Wave Mortgage. Personalized service, fast turn times, and decades of experience.",
  openGraph: {
    title: "Our Team | Make Florida Your Home",
    description: "Meet the Florida mortgage experts at Next Wave Mortgage.",
    url: "https://makefloridayourhome.com/team",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            Our <span className="text-brand-green">Team</span>
          </h1>
          <p className="mt-3 text-[17px] text-dark-green/60">
            Florida mortgage experts with decades of combined experience.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
            {team.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group overflow-hidden rounded-2xl border border-border-gray/60 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 py-5 text-center">
                  <h2 className="text-[20px] font-bold text-brand-green">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-[14px] text-dark-green/60">
                    {member.role} — NMLS #{member.nmls}
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-review-gold"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <span className="ml-1.5 text-[12px] font-medium text-dark-green/40">
                      {member.googleRating}/5.0 · {member.googleReviews} reviews
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
