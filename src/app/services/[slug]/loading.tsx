export default function Loading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="h-6 w-32 animate-pulse rounded bg-base-300" />

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="size-16 animate-pulse rounded-lg bg-base-300" />
          <div className="space-y-2">
            <div className="h-8 w-48 animate-pulse rounded bg-base-300" />
            <div className="h-6 w-96 animate-pulse rounded bg-base-300" />
          </div>
        </div>

        <div className="rounded-lg bg-primary/10 p-6">
          <div className="h-8 w-48 animate-pulse rounded bg-base-300" />
          <div className="mt-2 h-4 w-64 animate-pulse rounded bg-base-300" />
        </div>

        <div className="space-y-4">
          <div className="h-8 w-32 animate-pulse rounded bg-base-300" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="size-1.5 animate-pulse rounded-full bg-base-300" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-base-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-8 w-40 animate-pulse rounded bg-base-300" />
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 w-24 animate-pulse rounded-full bg-base-300" />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-10 w-32 animate-pulse rounded bg-base-300" />
        </div>
      </div>
    </div>
  );
}
