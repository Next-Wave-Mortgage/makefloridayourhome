"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question:
      "What is the minimum credit score to qualify for Florida down payment assistance?",
    answer:
      "Most Florida down payment assistance programs require a minimum credit score of 640. However, some FHA-based programs accept scores as low as 580. Your credit score also affects your interest rate and the amount of assistance you can receive. We can help you find programs that match your current score.",
  },
  {
    question:
      "How long does it take to get pre-approved for a Florida homebuyer program?",
    answer:
      "Pre-approval typically takes 1–3 business days once you submit your documents. The full process from application to closing usually takes 30–45 days. Programs like Hometown Heroes and Florida Housing may add a few extra days for layered approvals, but our team keeps things moving so there are no unnecessary delays.",
  },
  {
    question:
      "How much down payment assistance can first-time homebuyers get in Florida?",
    answer:
      "Florida buyers can receive anywhere from $10,000 to over $100,000 in combined assistance depending on the programs they qualify for. Florida Housing offers up to $10,000 in down payment and closing cost help. Hometown Heroes provides up to $35,000. Many counties offer additional SHIP funds on top of state programs — and yes, these can often be stacked.",
  },
  {
    question:
      "What is the Florida Hometown Heroes Program and who qualifies?",
    answer:
      "Hometown Heroes is Florida's largest down payment assistance program, offering up to $35,000 as a 0% interest, deferred second mortgage. It's available to full-time W-2 employees in over 50 eligible professions — including teachers, nurses, law enforcement, firefighters, and childcare workers. You must be a first-time buyer, meet income limits, and use a Florida Housing first mortgage.",
  },
  {
    question:
      "Do you have to be a first-time homebuyer to qualify for Florida DPA programs?",
    answer:
      "Not always. While many programs target first-time buyers, Florida defines \"first-time\" as anyone who hasn't owned a home in the past 3 years. Some programs — like certain county SHIP funds and VA-backed options — don't require first-time status at all. We'll help you identify every program you're eligible for, regardless of your homeownership history.",
  },
];

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-green-tint py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left — sticky heading + CTA */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
              Frequently Asked{" "}
              <span className="text-brand-green">Questions</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-green/60">
              Quick answers to the questions Florida homebuyers ask us most.
              Can&apos;t find what you&apos;re looking for?
            </p>
            <Link
              href="/schedule-a-free-call-today"
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
                            : "text-brand-green/15"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`text-[15px] font-bold leading-snug transition-colors duration-200 sm:text-[16px] ${
                          isOpen ? "text-dark-green" : "text-dark-green"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`transition-colors duration-200 ${
                        isOpen ? "text-brand-green" : "text-brand-green/30"
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
