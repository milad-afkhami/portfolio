export default function Loading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="h-10 w-48 animate-pulse rounded bg-base-300" />
        <div className="h-6 w-96 animate-pulse rounded bg-base-300" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[3/4] animate-pulse rounded-lg bg-base-300" />
            <div className="space-y-2">
              <div className="h-4 w-24 animate-pulse rounded bg-base-300" />
              <div className="h-6 w-full animate-pulse rounded bg-base-300" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-base-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
