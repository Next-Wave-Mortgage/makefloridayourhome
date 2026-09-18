"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

/**
 * Content sourced directly from APPROVED (Chapters 44 and 45) — the
 * checklist Phil's own book description calls "the APPROVED Checklist,"
 * plus the loan-officer questions from the following chapter. Copy is
 * reproduced verbatim from the manuscript; do not paraphrase when the
 * source text changes without updating this file to match.
 */

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistSection {
  id: string;
  title: string;
  note?: string;
  items: ChecklistItem[];
}

const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    id: "basic-loans",
    title: "Check the basic loans",
    note: "Check these separately. An answer about FHA tells you nothing about whether someone tried conventional.",
    items: [
      {
        id: "fha",
        label:
          "FHA: Was an FHA loan checked, and what made it fit or fail?",
      },
      {
        id: "conventional",
        label:
          "Conventional, loans following Fannie Mae or Freddie Mac rules: Were these checked too?",
      },
      {
        id: "va",
        label:
          "VA: If you have military service, was your access to a VA loan checked?",
      },
      {
        id: "usda",
        label:
          "USDA: Were the home's address and your household income checked under USDA's rules?",
      },
    ],
  },
  {
    id: "cash-problems",
    title: "Separate the cash problems",
    note: "Put your down payment on one line and the other purchase costs on another. Money that can help with one line doesn't always work for the other.",
    items: [
      {
        id: "dpa",
        label:
          "DPA, down payment assistance: Was a named program checked, including whether you must repay it?",
      },
      {
        id: "gift-funds",
        label:
          "Gift funds: Was help from someone you know checked before any money moved?",
      },
      {
        id: "seller-contribution",
        label:
          "Seller contribution: Did the offer consider money from the seller toward your purchase costs?",
      },
    ],
  },
  {
    id: "who-could-help",
    title: "Check who could help",
    note: "Be clear about what someone is offering before putting their name on the loan. Giving you cash and promising to repay your mortgage are very different favors.",
    items: [
      {
        id: "non-occupant-coborrower",
        label:
          "Non-occupant co-borrower, someone sharing the loan without moving in: Was this checked using the person's actual relationship to you?",
      },
      {
        id: "cosigner",
        label:
          "Co-signer, someone owing the loan without owning the home: Was this checked separately?",
      },
    ],
  },
  {
    id: "income-counted",
    title: "Check how your income was counted",
    note: "Before switching to a special product, check whether different proof of earnings could make an ordinary loan work.",
    items: [
      {
        id: "manual-underwriting",
        label:
          "Manual underwriting, a person checking the loan under stricter rules: Was this FHA path checked if the computer returned “Refer”?",
      },
      {
        id: "alt-income-proof",
        label:
          "Alternative income proof: Was another way to prove your pay checked, such as employer records?",
      },
      {
        id: "bank-statement-loan",
        label:
          "Bank statement loan, a loan using deposits to measure income: If you're self-employed, was a lender's option compared with an ordinary loan?",
      },
      {
        id: "asset-depletion",
        label:
          "Asset depletion, counting some savings as monthly income: Was this checked if you have substantial savings or investments?",
      },
      {
        id: "dscr",
        label:
          "DSCR, comparing a rental's rent with its housing payment: Was this checked for an investment purchase?",
      },
    ],
  },
  {
    id: "the-house",
    title: "Check the house itself",
    note: "Sometimes the house stopped the loan. More income won't produce missing condo papers or finish a repair.",
    items: [
      {
        id: "condo-approval",
        label:
          "Condo Single-Unit Approval, FHA approval for one condo: Was this checked if the whole development isn't approved?",
      },
      {
        id: "manufactured-home",
        label:
          "Manufactured home: Were its records and foundation checked against HUD's FHA rules?",
      },
      {
        id: "repair-escrow",
        label:
          "Repair escrow, money held aside to finish repairs: Was this checked for minor work?",
      },
      {
        id: "renovation-loan",
        label:
          "Renovation loan, financing the purchase and repairs together: Was this checked for a house needing work?",
      },
    ],
  },
  {
    id: "payment-and-job",
    title: "Check the payment and your job",
    note: "Bring the student loan statement even when the bill says $0. The amount due and the amount counted for your mortgage can differ.",
    items: [
      {
        id: "student-loan-treatment",
        label:
          "Student loan treatment: Was the payment counted using the rule for this mortgage?",
      },
      {
        id: "arm",
        label:
          "ARM, a mortgage whose interest rate can change: Was it compared with a fixed rate, including future payment risk?",
      },
      {
        id: "profession-programs",
        label:
          "Profession programs: Was your exact job checked against a named program?",
      },
    ],
  },
];

const WHAT_YOULL_NEED: string[] = [
  "The denial letter or written explanation, with the loan type.",
  "The income and monthly debt figures used in that decision.",
  "Pay records and your employer's contact information.",
  "Tax returns and business records if you're self-employed.",
  "Bank or investment statements showing money you plan to use.",
  "Student loan statements showing the balance and current payment.",
  "Facts about any gift giver or person joining the loan.",
  "The property address and any condo or repair papers.",
  "A written estimate of the payment and cash needed to close.",
  "Current debt statements with balances and monthly payments.",
  "Your comfortable monthly housing budget and cash cushion.",
  "Written offers, with the guesses behind each marked clearly.",
];

const LOAN_OFFICER_QUESTIONS: string[] = [
  "What, exactly, is keeping this loan from working?",
  "If we fix that, what else could stop the loan?",
  "Is that a HUD rule, or is that this lender's rule?",
  "Do you do manual underwriting here?",
  "Which loans do you offer that could help with this?",
  "Which loans that could help me don't you offer?",
  "What monthly income and debt payments are you using for me?",
  "What income did you leave out, and why?",
  "How much cash do I need altogether, and what are you assuming someone else will pay?",
  "Show me the cash total if the seller pays nothing.",
  "Show me both choices with the same house price and down payment.",
  "What am I paying up front to get that payment?",
  "What have you checked, and what are you still assuming?",
  "What could change the answer before we finish?",
  "Does this house cause a problem for the loan we're discussing?",
  "What happens next, who does it, and when should I hear back?",
  "Can you show me how that changes the loan?",
];

const STORAGE_KEY = "approved-checklist-progress-v1";

function loadProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, boolean>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Best-effort only. A private window or blocked storage just means
    // progress won't persist between visits — the checklist still works.
  }
}

export function ApprovedChecklistToolkit() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    loadProgress(),
  );

  // Synchronizes React state to localStorage (an external system) on every
  // change. The initial value above is already loaded from localStorage,
  // so this never writes back a stale default on first render.
  useEffect(() => {
    saveProgress(checked);
  }, [checked]);

  const totalItems = useMemo(
    () => CHECKLIST_SECTIONS.reduce((sum, s) => sum + s.items.length, 0),
    [],
  );
  const checkedCount = useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked],
  );

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const reset = () => setChecked({});

  return (
    <div className="mx-auto max-w-[880px] px-5 sm:px-8">
      {/* Progress */}
      <div className="sticky top-[72px] z-10 -mx-5 mb-10 border-b border-border-gray/60 bg-white/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[14px] font-semibold text-dark-green">
              {checkedCount} of {totalItems} checked
            </p>
            <div className="mt-1.5 h-1.5 w-40 overflow-hidden rounded-full bg-border-gray/60 sm:w-56">
              <div
                className="h-full rounded-full bg-brand-green transition-all duration-300"
                style={{
                  width: `${totalItems ? (checkedCount / totalItems) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
          {checkedCount > 0 && (
            <button
              type="button"
              onClick={reset}
              className="text-[13px] font-semibold text-dark-green/50 underline decoration-dotted underline-offset-2 transition-colors hover:text-brand-green"
            >
              Reset
            </button>
          )}
        </div>
        <p className="mt-2 text-[12px] text-dark-green/40">
          Saved on this device only — nothing here is sent anywhere.
        </p>
      </div>

      {/* The APPROVED Checklist */}
      <section className="mb-16">
        <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
          The APPROVED Checklist
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70 sm:text-[16px]">
          From Chapter 44. Use it to find out which loans were tried, what
          stopped yours, and which choices could fix that problem. Checking a
          box means you got an answer, not an approval.
        </p>

        <div className="mt-8 space-y-8">
          {CHECKLIST_SECTIONS.map((section) => (
            <div
              key={section.id}
              className="rounded-xl border border-border-gray/60 bg-white p-5 sm:p-6"
            >
              <h3 className="text-[17px] font-bold text-dark-green sm:text-[18px]">
                {section.title}
              </h3>
              {section.note && (
                <p className="mt-1.5 text-[14px] leading-relaxed text-dark-green/60">
                  {section.note}
                </p>
              )}
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => {
                  const itemId = `${section.id}-${item.id}`;
                  const isChecked = !!checked[itemId];
                  return (
                    <li key={itemId}>
                      <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-dark-green sm:text-[15px]">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(itemId)}
                          className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-border-gray text-brand-green focus:ring-brand-green/50"
                        />
                        <span
                          className={
                            isChecked ? "text-dark-green/40 line-through" : ""
                          }
                        >
                          {item.label}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Need */}
      <section className="mb-16">
        <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
          What You&rsquo;ll Need
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70 sm:text-[16px]">
          The papers to have on hand before you sit down with the checklist
          above or call a loan officer.
        </p>
        <div className="mt-6 rounded-xl border border-border-gray/60 bg-white p-5 sm:p-6">
          <ul className="space-y-3">
            {WHAT_YOULL_NEED.map((item, i) => {
              const itemId = `docs-${i}`;
              const isChecked = !!checked[itemId];
              return (
                <li key={itemId}>
                  <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-dark-green sm:text-[15px]">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(itemId)}
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-border-gray text-brand-green focus:ring-brand-green/50"
                    />
                    <span
                      className={
                        isChecked ? "text-dark-green/40 line-through" : ""
                      }
                    >
                      {item}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Questions for any loan officer */}
      <section className="mb-16">
        <h2 className="text-[24px] font-bold text-dark-green sm:text-[28px]">
          Questions to Ask Any Loan Officer
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-dark-green/70 sm:text-[16px]">
          From Chapter 45. Ask what could stop your loan and whose rule is
          stopping it — you don&rsquo;t need mortgage vocabulary for this
          conversation, just answers you can use.
        </p>
        <div className="mt-6 rounded-xl border border-border-gray/60 bg-white p-5 sm:p-6">
          <ol className="space-y-3">
            {LOAN_OFFICER_QUESTIONS.map((q, i) => (
              <li
                key={i}
                className="flex gap-3 text-[14px] leading-relaxed text-dark-green sm:text-[15px]"
              >
                <span className="shrink-0 font-bold text-brand-green">
                  {i + 1}.
                </span>
                <span>&ldquo;{q}&rdquo;</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Back to the book */}
      <div className="rounded-xl border border-border-gray/60 bg-[#f7f8f6] p-6 text-center sm:p-8">
        <p className="text-[15px] leading-relaxed text-dark-green/70">
          This toolkit covers 2 of APPROVED&rsquo;s 48 questions. The book walks
          through the other 46 — FHA deal-savers, down payment help,
          co-signers, zero-down programs, and what to do after a bank says
          no.
        </p>
        <Link
          href="/books/approved-mortgage-playbook"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-brand-green/90"
        >
          Get the book
        </Link>
      </div>
    </div>
  );
}
