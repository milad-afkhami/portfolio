import type { Metadata } from "next";
import { getAllProjects } from "@/services/project";
import CardsWrapper from "@/components/cards/Wrapper";
import ProjectCard from "@/components/cards/ProjectCard";

export const metadata: Metadata = {
  title: "Projects - Milad Afkhami",
  description:
    "Explore my portfolio of web development projects, including React applications, micro frontends, and more.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage(): Promise<JSX.Element> {
  const projects = await getAllProjects();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl text-base-content/80">A collection of my work and experiments in web development.</p>
      </div>

      <CardsWrapper>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </CardsWrapper>
    </div>
  );
}
