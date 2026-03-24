import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our Florida mortgage specialists. We respond within one business day.",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with our Florida mortgage specialists.",
    url: "https://www.makefloridayourhome.com/contact-us",
    type: "website",
  },
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      {/* Header banner */}
      <section className="bg-green-tint py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="text-[32px] font-bold leading-tight text-dark-green sm:text-[40px] lg:text-[48px]">
            <span className="text-brand-green">Contact</span> Us
          </h1>
          <p className="mt-3 text-[17px] text-dark-green/60">
            Send us a message and we will be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
            {/* Contact form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  label: "Address",
                  value: siteConfig.contact.address,
                  href: null,
                },
                {
                  label: "Email",
                  value: siteConfig.contact.email,
                  href: `mailto:${siteConfig.contact.email}`,
                },
                {
                  label: "Phone",
                  value: siteConfig.contact.phone,
                  href: `tel:${siteConfig.contact.phone}`,
                },
                {
                  label: "NMLS",
                  value: `#${siteConfig.contact.nmls}`,
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border-gray/60 bg-green-tint px-6 py-5"
                >
                  <span className="text-[12px] font-bold uppercase tracking-wider text-dark-green/40">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-[15px] font-medium text-brand-green hover:text-dark-green transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[15px] font-medium text-dark-green/80">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
