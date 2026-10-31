import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="empty-page">
      <h1 className="text-4xl font-bold">Favourite Not Found</h1>
      <p className="text-xl text-base-content/80">
        The favourite you are looking for does not exist or has been moved.
      </p>
      <Link href="/favourites" className="btn btn-primary">
        Back to Favourites
      </Link>
    </div>
  );
}
