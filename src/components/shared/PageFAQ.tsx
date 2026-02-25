"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  heading?: React.ReactNode;
  description?: string;
  faqs: FAQItem[];
  bg?: "green-tint" | "white";
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function PageFAQ({
  heading,
  description = "Quick answers to the questions Florida homebuyers ask us most. Can\u2019t find what you\u2019re looking for?",
  faqs,
  bg = "green-tint",
}: PageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${bg === "green-tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left — sticky heading + CTA */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              {heading || (
                <>
                  Frequently Asked{" "}
                  <span className="text-brand-green">Questions</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              {description}
            </p>
            <Link
              href="/contact-us"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            >
              Talk to an Expert
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

          {/* Right — accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`group overflow-hidden rounded-xl border-l-[3px] transition-all duration-300 ${
                    isOpen
                      ? "border-l-brand-green bg-white shadow-[0_4px_24px_rgba(0,105,72,0.08)]"
                      : "border-l-brand-green/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-l-brand-green/60 hover:shadow-[0_2px_12px_rgba(0,105,72,0.06)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`hidden text-[13px] font-black sm:block ${
                          isOpen
                            ? "text-brand-green"
                            : "text-dark-green/15"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`text-[15px] font-bold leading-snug transition-colors duration-200 sm:text-[16px] ${
                          isOpen ? "text-brand-green" : "text-dark-green"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`transition-colors duration-200 ${
                        isOpen ? "text-brand-green" : "text-dark-green/30"
                      }`}
                    >
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pl-6 sm:pl-[4.25rem]">
                        <p className="text-[14px] leading-relaxed text-dark-green/60 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
