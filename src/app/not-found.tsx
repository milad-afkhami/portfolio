import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] animate-fade-in-down flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="max-w-md text-base-content/70">Let&apos;s get you back on track.</p>
      <Link href="/">
        <button className="btn btn-primary btn-lg items-center gap-2">
          <FaHome className="size-6" />
          Go to Home
        </button>
      </Link>
    </div>
  );
}
