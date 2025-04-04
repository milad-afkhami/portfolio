export default function Loading(): JSX.Element {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-4 w-20 animate-pulse rounded bg-base-200" />
        </div>
        <div className="h-10 w-3/4 animate-pulse rounded bg-base-200" />
        <div className="h-6 w-full animate-pulse rounded bg-base-200" />
      </div>

      <div className="aspect-video animate-pulse rounded-lg bg-base-200" />

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-6 w-16 animate-pulse rounded-full bg-base-200" />
        ))}
      </div>

      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-full animate-pulse rounded bg-base-200" />
        ))}
      </div>
    </article>
  );
}
