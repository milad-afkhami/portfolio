export default function Loading(): JSX.Element {
  return (
    <main className="space-y-8">
      <div className="space-y-4">
        <div className="h-12 w-1/4 animate-pulse rounded-lg bg-base-300" />
        <div className="h-6 w-1/2 animate-pulse rounded-lg bg-base-300" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <article key={index} className="card overflow-hidden bg-base-100 shadow-xl">
            <div className="aspect-video animate-pulse bg-base-300" />
            <div className="card-body space-y-4">
              <div className="space-y-2">
                <div className="h-6 w-3/4 animate-pulse rounded-lg bg-base-300" />
                <div className="h-4 w-full animate-pulse rounded-lg bg-base-300" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-6 w-20 animate-pulse rounded-full bg-base-300" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
