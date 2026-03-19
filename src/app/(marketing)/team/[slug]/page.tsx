import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team } from "../teamData";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} | ${member.role} | Make Florida Your Home`,
    description: member.bio[0],
    openGraph: {
      title: `${member.name} | ${member.role} | Make Florida Your Home`,
      description: member.bio[0],
      url: `https://www.makefloridayourhome.com/team/${member.slug}`,
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            {member.name.split(" ")[0]}{" "}
            <span className="text-brand-green">
              {member.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-2 text-[17px] text-dark-green/60">
            {member.role} — NMLS #{member.nmls}
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
            {/* Sidebar */}
            <div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={280}
                  height={350}
                  className="w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-review-gold"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-[13px] text-dark-green/50">
                Rated {member.googleRating}/5.0 by {member.googleReviews}{" "}
                Homeowners on Google
              </p>

              {/* Contact card */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-border-gray/60 bg-green-tint px-4 py-3 text-[14px] font-medium text-brand-green transition-colors hover:text-dark-green"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border-gray/60 bg-green-tint px-4 py-3 text-[14px] font-medium text-brand-green transition-colors hover:text-dark-green"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {member.email}
                </a>
              </div>
            </div>

            {/* Bio content */}
            <div>
              <div className="space-y-4 text-[16px] leading-relaxed text-dark-green/70">
                {member.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Loan options */}
              {member.loanOptions && (
                <div className="mt-10">
                  <h2 className="text-[20px] font-bold text-dark-green">
                    Loan options {member.name.split(" ")[0]} can help with
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {member.loanOptions.map((opt) => (
                      <li
                        key={opt}
                        className="flex items-start gap-3 text-[15px] text-dark-green/70"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Built for */}
              <div className="mt-10">
                <h2 className="text-[20px] font-bold text-dark-green">
                  Built for real-life borrowers
                </h2>
                <ul className="mt-4 space-y-2">
                  {member.borrowerTypes.map((bt) => (
                    <li
                      key={bt}
                      className="flex items-start gap-3 text-[15px] text-dark-green/70"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-green">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {bt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="mt-10">
                <h2 className="text-[20px] font-bold text-dark-green">
                  A simple, guided process
                </h2>
                <ol className="mt-4 space-y-3">
                  {member.process.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-[15px] text-dark-green/70"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-[12px] font-bold text-brand-green">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Closing */}
              <div className="mt-10 rounded-xl border border-brand-green/20 bg-green-tint px-6 py-5">
                <p className="text-[15px] leading-relaxed text-dark-green/60">
                  {member.closingNote}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/schedule-a-free-call-today"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
                >
                  Schedule a Free Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
