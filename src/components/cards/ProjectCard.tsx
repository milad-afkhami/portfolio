import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import type { IProject } from "@/types/general";

type ProjectCardProps = { project: IProject };

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="home-project block">
        {project.images?.[0] && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#eaf1f6]">
            <Image
              src={project.images[0]}
              alt={`${project.title} preview`}
              fill
              className="object-contain p-4"
              sizes="(max-width:767px) 90vw,40vw"
            />
          </div>
        )}
        <div className="mb-3 mt-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <FaArrowRight aria-hidden="true" />
        </div>
        <p className="text-[#526879]">{project.shortDescription}</p>
        <div className="detail-tags mt-4">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </Link>
    </article>
  );
}
