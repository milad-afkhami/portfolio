export default function Loading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="h-10 w-48 animate-pulse rounded-lg bg-base-300" />
        <div className="h-6 w-96 animate-pulse rounded-lg bg-base-300" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {[...Array(2)].map((_, index) => (
          <article key={index} className="overflow-hidden rounded-lg border bg-base-100">
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-4">
                <div className="size-12 animate-pulse rounded-lg bg-base-300" />
                <div className="space-y-2">
                  <div className="h-6 w-32 animate-pulse rounded-lg bg-base-300" />
                  <div className="h-4 w-16 animate-pulse rounded-lg bg-base-300" />
                </div>
              </div>
              <div className="h-4 w-full animate-pulse rounded-lg bg-base-300" />
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-6 w-20 animate-pulse rounded-full bg-base-300" />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="h-4 w-16 animate-pulse rounded-lg bg-base-300" />
                <div className="h-4 w-16 animate-pulse rounded-lg bg-base-300" />
              </div>
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="size-1.5 animate-pulse rounded-full bg-base-300" />
                    <div className="h-4 w-3/4 animate-pulse rounded-lg bg-base-300" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t bg-base-200 p-4">
              <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="size-5 animate-pulse rounded-lg bg-base-300" />
                ))}
              </div>
              <div className="h-8 w-24 animate-pulse rounded-lg bg-base-300" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
