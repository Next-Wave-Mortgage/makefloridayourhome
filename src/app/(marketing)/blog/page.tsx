import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Mortgage Blog — Tips, Programs & Market Updates",
  description:
    "Expert articles on Florida home loans, down payment assistance, first-time buyer programs, and housing market trends. Updated weekly.",
  openGraph: {
    title: "Florida Mortgage Blog — Tips, Programs & Market Updates",
    description:
      "Expert articles on Florida home loans, down payment assistance, first-time buyer programs, and housing market trends.",
    url: "https://www.makefloridayourhome.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4 text-gray-600">Posts coming soon.</p>
    </section>
  );
}
