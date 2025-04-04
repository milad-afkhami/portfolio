import Link from "next/link";
import type { IPackage } from "@/types/general";
import { FaGithub, FaNpm, FaBook } from "react-icons/fa";

type PackageCardProps = {
  pkg: IPackage;
};

export default function PackageCard({ pkg }: PackageCardProps): JSX.Element {
  const { id, name, description, version, repository, npm, documentation, features, technologies } = pkg;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-base-content">{name}</h2>
          <p className="text-sm text-base-content/70">v{version}</p>
        </div>
        <p className="mb-4 text-base-content/70">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              {tech}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-base-content/80">
              <span className="size-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between border-t bg-base-200 p-4">
        <div className="flex gap-4">
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/70 hover:text-primary"
            aria-label="View on GitHub"
          >
            <FaGithub className="size-5" />
          </a>
          <a
            href={npm}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/70 hover:text-primary"
            aria-label="View on npm"
          >
            <FaNpm className="size-5" />
          </a>
          <a
            href={documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/70 hover:text-primary"
            aria-label="View documentation"
          >
            <FaBook className="size-5" />
          </a>
        </div>
        <Link href={`/packages/${id}`} className="btn btn-primary btn-sm">
          Learn More
        </Link>
      </div>
    </article>
  );
}
