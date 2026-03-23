import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Mortgage Calculators — Affordability, Payments & More",
  description:
    "Free Florida mortgage calculators. Estimate your home affordability, monthly payment, closing costs, and down payment assistance savings.",
  openGraph: {
    title: "Florida Mortgage Calculators — Affordability, Payments & More",
    description:
      "Free Florida mortgage calculators. Estimate your home affordability, monthly payment, closing costs, and DPA savings.",
    url: "https://www.makefloridayourhome.com/calculators",
    type: "website",
  },
  alternates: {
    canonical: "/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Mortgage Calculators</h1>
      <p className="mt-4 text-gray-600">Calculators coming soon.</p>
    </section>
  );
}
