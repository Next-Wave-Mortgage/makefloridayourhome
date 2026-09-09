/**
 * Server-rendered JSON-LD.
 *
 * Use this, not `next/script`, for structured data. `next/script` injects
 * after hydration, so the markup is missing from the raw HTML that Semrush,
 * Ahrefs, and social scrapers read. A plain <script> is emitted in the SSR
 * document, which is what Google's Rich Results Test and crawlers expect.
 */
export function JsonLd({ id, data }: { id: string; data: object }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
