export default function FavouritesLoading(): JSX.Element {
  return (
    <div className="space-y-8">
      <div>
        <div className="h-10 w-48 animate-pulse rounded-lg bg-base-200" />
        <div className="mt-2 h-6 w-96 animate-pulse rounded-lg bg-base-200" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg border bg-base-100">
            <div className="aspect-video animate-pulse bg-base-200" />
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 animate-pulse rounded-lg bg-base-200" />
                <div className="h-6 w-32 animate-pulse rounded-lg bg-base-200" />
              </div>
              <div className="mt-2 h-4 w-full animate-pulse rounded-lg bg-base-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
