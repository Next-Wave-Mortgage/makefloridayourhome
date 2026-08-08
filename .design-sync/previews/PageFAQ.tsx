import * as React from "react";
import { PageFAQ } from "makefloridayourhome";

const faqs = [
  {
    question: "How much down payment assistance can I get in Florida?",
    answer:
      "It depends on which programs you qualify for. Hometown Heroes offers up to $35,000. Florida Assist provides up to $10,000. County SHIP funds can add more on top. Many buyers stack multiple programs together.",
  },
  {
    question: "Do I have to pay back down payment assistance?",
    answer:
      "Many Florida programs are 0% interest, deferred second mortgages — you repay only when you sell, refinance, or pay off the first mortgage. Some county programs are fully forgivable after you live in the home a set number of years.",
  },
  {
    question: "Can I combine assistance with an FHA loan?",
    answer:
      "Yes. Most Florida down payment assistance programs are designed to pair with FHA, VA, USDA, and conventional first mortgages.",
  },
];

export const GreenTint = () => <PageFAQ faqs={faqs} bg="green-tint" />;

export const CustomHeading = () => (
  <PageFAQ
    heading={
      <>
        Common <span className="text-brand-green">Questions</span>
      </>
    }
    description="Answers from licensed Florida mortgage experts."
    faqs={faqs.slice(0, 2)}
    bg="white"
  />
);
