import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;

  return (
    <article className="prose mx-auto max-w-3xl px-6 py-16">
      <h1>{slug}</h1>
      <p>Program details will be loaded from MDX.</p>
    </article>
  );
}
