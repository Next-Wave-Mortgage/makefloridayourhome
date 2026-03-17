export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  nmls: string;
  photo: string;
  phone: string;
  email: string;
  googleRating: string;
  googleReviews: string;
  bio: string[];
  loanOptions?: string[];
  borrowerTypes: string[];
  process: string[];
  closingNote: string;
}

export const team: TeamMember[] = [
  {
    slug: "phil-ganz",
    name: "Phil Ganz",
    role: "President",
    nmls: "37833",
    photo: "/images/team/phil-ganz.jpg",
    phone: "617-529-9317",
    email: "phil@nextwavemortgage.com",
    googleRating: "4.9",
    googleReviews: "113+",
    bio: [
      "Phil Ganz is a Senior Mortgage Consultant and President at Next Wave Mortgage (NMLS #2536820), where he leads a people-first team built around fast turn times, transparent guidance, and highly personalized service.",
      "With 26+ years in the mortgage industry, Phil has helped thousands of families move from \"maybe someday\" to keys-in-hand with a clear plan and steady support from application through closing.",
      "Based in Fort Lauderdale, Phil specializes in Florida home financing, especially scenarios that require strong structure and strategy, like jumbo loans in South Florida, self-employed income, and buyers using down payment assistance.",
      "Clients work with Phil for one simple reason: he makes the process feel understandable, organized, and calm, while still moving fast when the deal needs speed.",
    ],
    loanOptions: [
      "Conventional, FHA, VA, and Jumbo loans",
      "Bank statement & Non-QM programs",
      "Down Payment Assistance programs (including Florida options)",
      "Reverse mortgages & home equity solutions (where eligible)",
    ],
    borrowerTypes: [
      "First-time buyers who want a step-by-step plan.",
      "Veterans exploring VA benefits.",
      "Self-employed borrowers with complex income.",
      "Buyers who need a strong pre-approval to compete.",
      "Homeowners refinancing or restructuring for long-term savings.",
    ],
    process: [
      "Quick intro call to understand your goal.",
      "Clear checklist (no guesswork).",
      "Loan strategy + program match.",
      "Fast pre-approval and confident next steps.",
      "Consistent updates through closing.",
    ],
    closingNote:
      "Whether you\u2019re buying in Fort Lauderdale, Broward County, Miami-Dade, Palm Beach, or elsewhere in Florida, Phil helps you choose a loan structure that fits your price point, timeline, and documentation \u2014 without overcomplicating the process.",
  },
  {
    slug: "ryan-skerritt",
    name: "Ryan Skerritt",
    role: "Founder",
    nmls: "1170025",
    photo: "/images/team/ryan-skerritt.jpg",
    phone: "978-852-6145",
    email: "ryan@nextwavemortgage.com",
    googleRating: "4.9",
    googleReviews: "101+",
    bio: [
      "Ryan Skerritt is the Founder of Next Wave Mortgage and a Senior Mortgage Consultant (NMLS #1170025) who built the company around a simple belief: the mortgage process should feel smarter, simpler, and genuinely people-focused.",
      "With more than 12 years of industry expertise, Ryan brings a blend of hands-on lending knowledge and strategic leadership, helping clients understand their options clearly while keeping the process organized and efficient.",
      "Ryan is known for building a culture centered on transparency, accountability, and client success \u2014 so borrowers feel confident from the first conversation all the way to closing day.",
      "Whether he\u2019s helping a first-time buyer or a seasoned homeowner, Ryan\u2019s focus stays the same: simplify decisions, remove confusion, and empower clients with clarity at every step.",
    ],
    borrowerTypes: [
      "First-time buyers who want calm, structured guidance.",
      "Homeowners refinancing who want clarity, not sales pressure.",
      "Buyers who need strong pre-approval positioning.",
      "Anyone who values fast responses and organized next steps.",
    ],
    process: [
      "Quick intro call to understand your goals.",
      "Clear checklist and document plan.",
      "Loan strategy built around your timeline.",
      "Strong pre-approval and next-step coordination.",
      "Consistent updates through closing.",
    ],
    closingNote:
      "Next Wave Mortgage is headquartered in Fort Lauderdale, Florida, and Ryan supports buyers who want straightforward answers, a clean plan, and a process that moves quickly without surprises.",
  },
];
