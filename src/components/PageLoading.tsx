export default function PageLoading(): JSX.Element {
  return (
    <div className="page-loading">
      <output className="sr-only">Loading page…</output>
      <div aria-hidden="true">
        <div className="loading-title skeleton" />
        <div className="loading-description skeleton" />
        <div className="loading-tiles">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="loading-tile skeleton" />
          ))}
        </div>
      </div>
    </div>
  );
}
