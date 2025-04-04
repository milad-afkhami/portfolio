import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">Project Not Found</h1>
      <p className="text-xl text-base-content/80">The project you are looking for does not exist or has been moved.</p>
      <Link href="/projects" className="btn btn-primary">
        Back to Projects
      </Link>
    </div>
  );
}
