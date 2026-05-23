export default function MortgageRatesLoading() {
  return (
    <main className="min-h-screen bg-green-tint">
      <section className="border-b border-border-gray bg-green-tint py-8 sm:py-9">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <div className="h-7 w-48 animate-pulse rounded-md bg-brand-green/10" />
              <div className="h-7 w-36 animate-pulse rounded-md bg-white" />
            </div>
            <div className="h-14 max-w-2xl animate-pulse rounded-lg bg-dark-green/10 sm:h-16" />
            <div className="mt-4 h-5 max-w-xl animate-pulse rounded bg-dark-green/10" />
            <div className="mt-2 h-5 max-w-lg animate-pulse rounded bg-dark-green/10" />
            <div className="mt-6 h-12 w-64 animate-pulse rounded-full bg-brand-green/20" />
          </div>

          <div className="overflow-hidden rounded-lg border border-brand-green/25 bg-white p-5 shadow-[0_20px_55px_rgba(46,65,54,0.10)]">
            <div className="flex items-center justify-between gap-5">
              <div className="space-y-3">
                <div className="h-4 w-36 animate-pulse rounded bg-dark-green/10" />
                <div className="h-5 w-32 animate-pulse rounded bg-dark-green/15" />
                <div className="h-4 w-40 animate-pulse rounded bg-dark-green/10" />
              </div>
              <div className="h-12 w-32 animate-pulse rounded bg-brand-green/20" />
            </div>
            <div className="mt-5 h-px bg-border-gray" />
            <div className="mt-5 space-y-3">
              <div className="h-4 animate-pulse rounded bg-dark-green/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-dark-green/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
