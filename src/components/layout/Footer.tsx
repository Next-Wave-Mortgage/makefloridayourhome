import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const navColumns = [
  {
    heading: "Resources",
    links: [
      { href: "/mortgage-rates", label: "Mortgage Rates" },
      { href: "/home-affordability-calculator", label: "Affordability Calculator" },
      { href: "/learn", label: "Mortgage Articles" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/team", label: "Our Team" },
      { href: "/about-us", label: "About Us" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "https://www.nextwavemortgage.com/terms", label: "Terms & Privacy" },
      { href: "https://www.nextwavemortgage.com/terms", label: "Licenses" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      {/* Top accent line */}
      <div className="h-[3px] bg-brand-green" />

      <div className="mx-auto max-w-[1400px] px-5 pt-12 pb-8 sm:px-8 sm:pt-16 sm:pb-10">
        {/* ---- Desktop (xl+): 3-col with dividers ---- */}
        {/* ---- Tablet (md–xl): 2-col top + disclaimers below ---- */}
        {/* ---- Mobile (<md): single stack ---- */}

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-[280px_1px_1fr_1px_320px]">
          {/* Left — identity & contact */}
          <div>
            {/* BBB badge */}
            <a
              href={siteConfig.links.bbb}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-block transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/bbb-accredited-business.webp"
                alt="BBB Accredited Business"
                width={130}
                height={50}
              />
            </a>

            {/* Company & NMLS */}
            <p className="text-[15px] font-bold">{siteConfig.company}</p>
            <p className="mt-1 text-[13px] text-white/50">
              NMLS ID {siteConfig.contact.nmls}
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3 text-[14px]">
              <p className="leading-snug text-white/70">
                {siteConfig.contact.address}
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Divider — xl only */}
          <div className="hidden self-stretch bg-white/10 xl:block" />

          {/* Center — nav columns */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-8 xl:flex xl:justify-center xl:gap-16">
            {navColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white/35 sm:mb-5">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5 text-[13px] sm:space-y-3 sm:text-[14px]">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider — xl only */}
          <div className="hidden self-stretch bg-white/10 xl:block" />

          {/* Right — disclaimers (full width on md, own column on xl) */}
          <div className="border-t border-white/10 pt-8 md:col-span-2 xl:col-span-1 xl:border-0 xl:pt-0">
            <div className="space-y-4 text-[11.5px] leading-[1.7] text-white/40 md:columns-2 md:gap-8 xl:columns-1">
              <p>
                {siteConfig.company} is not affiliated with any government
                agencies. These materials are not from VA, HUD or FHA, and were
                not approved by VA, HUD or FHA, or any other government agency.
              </p>
              <p>
                Reverse mortgage borrowers are required to obtain an eligibility
                certificate by receiving counseling sessions with a HUD-approved
                agency. The youngest borrower must be at least 62 years old.
                Monthly reverse mortgage advances may affect eligibility for some
                other programs.
              </p>
              <p>
                This is not an offer to enter into an agreement. Not all
                customers will qualify. Information, rates, and programs are
                subject to change without notice. All products are subject to
                credit and property approval. Other restrictions and limitations
                may apply.
              </p>
              <p>
                Complaints may be directed to: hello@nextwavemortgage.com. For
                licensing information, please visit{" "}
                <a
                  href={siteConfig.links.nmlsConsumerAccess}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 underline underline-offset-2 transition-colors hover:text-white"
                >
                  nmlsconsumeraccess.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[13px] text-white/35 sm:mt-12 sm:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.company}. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
