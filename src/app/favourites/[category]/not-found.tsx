import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound(): JSX.Element {
  return (
    <div className="space-y-8">
      <Link href="/favourites" className="inline-flex items-center gap-2 text-base-content/80 hover:text-base-content">
        <FaArrowLeft />
        Back to Favourites
      </Link>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
        <p className="text-xl text-base-content/80">
          The category you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </div>
    </div>
  );
}
