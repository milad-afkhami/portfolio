import Link from "next/link";
import Image from "next/image";
import type { IProject } from "@/types/general";

type ProjectCardProps = {
  project: IProject;
};

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const { slug, title, shortDescription, logo, technologies } = project;

  return (
    <article className="group overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/projects/${slug}`} className="block">
        {/* <div className="relative aspect-video overflow-hidden"><Image src={images?.[0]!} alt={title} fill objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" /></div> */}
        <div className="p-6">
          <div className="mb-4 flex items-center gap-4">
            {logo && (
              <div className="relative size-12 overflow-hidden rounded-lg">
                <Image src={logo} alt={`${title} logo`} fill objectFit="contain" />
              </div>
            )}
            <h2 className="text-xl font-bold text-base-content">{title}</h2>
          </div>
          <p className="mb-4 text-base-content/70">{shortDescription}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                {tech}
              </span>
            ))}
          </div>
          {/* <ul className="space-y-2">{features.slice(0, 3).map((feature) => (<li key={feature} className="flex items-center gap-2 text-sm text-base-content/80"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{feature}</li>))}</ul> */}
        </div>
      </Link>
    </article>
  );
}
