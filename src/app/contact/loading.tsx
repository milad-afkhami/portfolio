export default function Loading(): JSX.Element {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <div className="h-10 w-48 animate-pulse rounded bg-base-300" />
        <div className="h-6 w-96 animate-pulse rounded bg-base-300" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-4">
              <div className="h-6 w-48 animate-pulse rounded bg-base-300" />
              <div className="h-4 w-full animate-pulse rounded bg-base-300" />
            </div>
          </div>

          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="size-12 animate-pulse rounded-lg bg-base-300" />
                <div className="space-y-2">
                  <div className="h-5 w-24 animate-pulse rounded bg-base-300" />
                  <div className="h-4 w-32 animate-pulse rounded bg-base-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-4 w-16 animate-pulse rounded bg-base-300" />
                  <div className="h-10 w-full animate-pulse rounded bg-base-300" />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="h-4 w-16 animate-pulse rounded bg-base-300" />
              <div className="h-10 w-full animate-pulse rounded bg-base-300" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-16 animate-pulse rounded bg-base-300" />
              <div className="h-32 w-full animate-pulse rounded bg-base-300" />
            </div>

            <div className="h-10 w-full animate-pulse rounded bg-base-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
