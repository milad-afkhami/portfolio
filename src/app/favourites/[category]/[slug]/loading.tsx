export default function Loading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="h-6 w-32 animate-pulse rounded bg-base-300" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-[3/4] animate-pulse rounded-lg bg-base-300" />

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="size-6 animate-pulse rounded bg-base-300" />
            <div className="h-4 w-24 animate-pulse rounded bg-base-300" />
          </div>

          <div className="h-10 w-3/4 animate-pulse rounded bg-base-300" />
          <div className="h-6 w-full animate-pulse rounded bg-base-300" />

          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-16 animate-pulse rounded bg-base-300" />
                <div className="h-4 w-32 animate-pulse rounded bg-base-300" />
              </div>
            ))}
          </div>

          <div className="h-10 w-32 animate-pulse rounded bg-base-300" />
        </div>
      </div>
    </div>
  );
}
