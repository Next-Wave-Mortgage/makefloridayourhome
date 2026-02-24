interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
      </div>
    </section>
  );
}
