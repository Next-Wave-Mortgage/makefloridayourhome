import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore our mortgage programs for Florida home buyers.",
};

export default function ProgramsIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Mortgage Programs</h1>
      <p className="mt-4 text-gray-600">Program listings coming soon.</p>
    </section>
  );
}
