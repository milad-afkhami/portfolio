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

  const projectLinks: Array<string> = Array.isArray(link) ? (link as Array<string>) : link ? [link] : [];

  return (
    <article className="detail-page space-y-8">
      <Link href="/projects" className="back-link">
        Back to Projects
      </Link>
      <div className="flex items-center gap-4">
        {logo && (
          <div className="relative size-16 min-w-16 overflow-hidden rounded-lg">
            <Image src={logo} alt={`${title} logo`} fill className="object-contain" />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>

      <p className="max-w-prose text-xl text-[#526879]">{description ?? shortDescription}</p>

      {images?.length && <ImageGallery images={images} title={title} />}

      <div className="detail-tags">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {features?.length && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[#526879]">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#7d9fc2]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {projectLinks.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {projectLinks
            .filter((url) => /^https?:\/\//.test(url))
            .map((url) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit {new URL(url).hostname}
              </a>
            ))}
        </div>
      )}
    </article>
  );
}
