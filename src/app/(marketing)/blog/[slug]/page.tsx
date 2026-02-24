interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <article className="prose mx-auto max-w-3xl px-6 py-16">
      <h1>{slug}</h1>
      <p>Blog post content will be loaded from MDX.</p>
    </article>
  );
}
