import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
      <p className="text-base-content/70">
        The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/blog" className="btn btn-primary">
        Back to Blog
      </Link>
    </div>
  );
}
