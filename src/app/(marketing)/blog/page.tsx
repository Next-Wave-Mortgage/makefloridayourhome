import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Mortgage tips, Florida housing market insights, and more.",
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4 text-gray-600">Posts coming soon.</p>
    </section>
  );
}
