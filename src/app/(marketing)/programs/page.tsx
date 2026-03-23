import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Homebuyer Programs — DPA, Grants & Loan Options",
  description:
    "Browse every Florida homebuyer program: Hometown Heroes, Florida Assist, SHIP, FHA, VA, USDA, and county-level grants. See what you qualify for.",
  openGraph: {
    title: "Florida Homebuyer Programs — DPA, Grants & Loan Options",
    description:
      "Browse every Florida homebuyer program: Hometown Heroes, Florida Assist, SHIP, FHA, VA, USDA, and county-level grants.",
    url: "https://www.makefloridayourhome.com/programs",
    type: "website",
  },
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Mortgage Programs</h1>
      <p className="mt-4 text-gray-600">Program listings coming soon.</p>
    </section>
  );
}
