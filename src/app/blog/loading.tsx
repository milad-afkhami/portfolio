export default function Loading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="h-10 w-48 animate-pulse rounded bg-base-200" />
        <div className="h-6 w-96 animate-pulse rounded bg-base-200" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border bg-base-100">
            <div className="aspect-video animate-pulse bg-base-200" />
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-4">
                <div className="h-4 w-20 animate-pulse rounded bg-base-200" />
              </div>
              <div className="h-6 w-48 animate-pulse rounded bg-base-200" />
              <div className="h-4 w-full animate-pulse rounded bg-base-200" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="h-6 w-16 animate-pulse rounded-full bg-base-200" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
