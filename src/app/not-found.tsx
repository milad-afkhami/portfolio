import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="empty-page">
      <h1>That page isn&apos;t here.</h1>
      <p>
        The address may have changed, or the page may no longer exist. You can find my projects, articles, and more from
        the home page.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/projects" className="btn btn-outline">
          Explore projects
        </Link>
      </div>
    </div>
  );
}
