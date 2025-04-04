import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";
import { getProjectBySlug } from "@/services/project";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found - Milad Afkhami",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} - Milad Afkhami`,
    description: project.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/projects/${params.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps): Promise<JSX.Element> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { title, description, shortDescription, logo, technologies, features, link, images } = project;

  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="flex items-center gap-4">
        {logo && (
          <div className="relative size-16 min-w-16 overflow-hidden rounded-lg">
            <Image src={logo} alt={`${title} logo`} fill objectFit="contain" />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>

      <p className="text-xl text-base-content/80">{description ?? shortDescription}</p>

      {images?.length && <ImageGallery images={images} title={title} />}

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            {tech}
          </span>
        ))}
      </div>

      {features?.length && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-base-content/80">
                <span className="size-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {link && (
        <div className="flex justify-center">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </Link>
        </div>
      )}
    </article>
  );
}
