export default function Loading(): JSX.Element {
  return (
    <div className="space-y-16">
      {/* Hero Section Loading */}
      <section className="flex flex-col items-center space-y-8 py-12 text-center">
        <div className="size-48 animate-pulse rounded-full bg-base-300" />
        <div className="space-y-4">
          <div className="h-10 w-48 animate-pulse rounded bg-base-300" />
          <div className="h-6 w-32 animate-pulse rounded bg-base-300" />
        </div>
        <div className="h-24 animate-pulse rounded bg-base-300" />
        <div className="flex items-center gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="size-10 animate-pulse rounded bg-base-300" />
          ))}
        </div>
      </section>

      {/* Video Section Loading */}
      <section className="space-y-4">
        <div className="h-8 w-64 animate-pulse rounded bg-base-300" />
        <div className="aspect-video animate-pulse rounded-lg bg-base-300" />
      </section>

      {/* Blogs Section Loading */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 animate-pulse rounded bg-base-300" />
          <div className="h-10 w-32 animate-pulse rounded bg-base-300" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-video animate-pulse rounded-lg bg-base-300" />
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-base-300" />
                <div className="h-6 w-full animate-pulse rounded bg-base-300" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-base-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section Loading */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 animate-pulse rounded bg-base-300" />
          <div className="h-10 w-32 animate-pulse rounded bg-base-300" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-video animate-pulse rounded-lg bg-base-300" />
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-base-300" />
                <div className="h-6 w-full animate-pulse rounded bg-base-300" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-base-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
