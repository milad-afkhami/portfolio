export default function CategoryLoading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="size-12 animate-pulse rounded-lg bg-base-200" />
        <div>
          <div className="h-10 w-48 animate-pulse rounded-lg bg-base-200" />
          <div className="mt-2 h-6 w-96 animate-pulse rounded-lg bg-base-200" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg border bg-base-100">
            <div className="aspect-[3/4] animate-pulse bg-base-200" />
            <div className="space-y-4 p-6">
              <div className="h-6 w-3/4 animate-pulse rounded-lg bg-base-200" />
              <div className="h-4 w-full animate-pulse rounded-lg bg-base-200" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 w-2/3 animate-pulse rounded-lg bg-base-200" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
