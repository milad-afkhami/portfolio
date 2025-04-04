export default function Loading(): JSX.Element {
  return (
    <div className="space-y-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="h-10 w-48 animate-pulse rounded-lg bg-base-300" />
          <div className="space-y-4">
            <div className="h-6 w-full animate-pulse rounded-lg bg-base-300" />
            <div className="h-6 w-5/6 animate-pulse rounded-lg bg-base-300" />
            <div className="h-6 w-4/6 animate-pulse rounded-lg bg-base-300" />
          </div>
        </div>
        <div className="aspect-square animate-pulse rounded-lg bg-base-300" />
      </div>

      <div className="space-y-8">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-base-300" />
        <div className="space-y-8">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-6 w-48 animate-pulse rounded-lg bg-base-300" />
                  <div className="h-4 w-32 animate-pulse rounded-lg bg-base-300" />
                </div>
                <div className="h-4 w-24 animate-pulse rounded-lg bg-base-300" />
              </div>
              <div className="h-4 w-full animate-pulse rounded-lg bg-base-300" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="size-1.5 animate-pulse rounded-full bg-base-300" />
                    <div className="h-4 w-3/4 animate-pulse rounded-lg bg-base-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="h-8 w-32 animate-pulse rounded-lg bg-base-300" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="h-6 w-32 animate-pulse rounded-lg bg-base-300" />
              <div className="space-y-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="size-1.5 animate-pulse rounded-full bg-base-300" />
                    <div className="h-4 w-24 animate-pulse rounded-lg bg-base-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-4">
              <div className="size-8 animate-pulse rounded-lg bg-base-300" />
              <div className="h-6 w-32 animate-pulse rounded-lg bg-base-300" />
              <div className="h-4 w-full animate-pulse rounded-lg bg-base-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
