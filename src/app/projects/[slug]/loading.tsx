export default function Loading(): JSX.Element {
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="flex items-center gap-4">
        <div className="size-16 animate-pulse rounded-lg bg-base-300" />
        <div className="space-y-2">
          <div className="h-8 w-3/4 animate-pulse rounded-lg bg-base-300" />
          <div className="h-6 w-1/2 animate-pulse rounded-lg bg-base-300" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="aspect-video animate-pulse rounded-lg bg-base-300" />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-6 w-24 animate-pulse rounded-full bg-base-300" />
        ))}
      </div>

      <div className="space-y-4">
        <div className="h-8 w-1/4 animate-pulse rounded-lg bg-base-300" />
        <div className="space-y-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="size-1.5 animate-pulse rounded-full bg-base-300" />
              <div className="h-4 w-3/4 animate-pulse rounded-lg bg-base-300" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="h-10 w-32 animate-pulse rounded-lg bg-base-300" />
      </div>
    </article>
  );
}
