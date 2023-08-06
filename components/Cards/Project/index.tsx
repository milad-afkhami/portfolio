import { Div } from "style-wiz";
import PageTitle from "@components/Layout/Title/Page";
import ProjectCard from "./Item";
import ProjectCardsWrapper from "./Wrapper";
import ProjectCardsMoreLink from "./MoreLink";
import projectsData from "@data/projects";
import type { FC } from "react";

const ProjectCards: FC = () => {
  const items = [
    projectsData[0],
    projectsData[1],
    projectsData[4],
    projectsData[2],
    projectsData[3],
    projectsData[5],
  ];

  return (
    <Div my="3">
      <PageTitle title="title" tag="h2" ns="projects" />
      {items.length ? (
        <ProjectCardsWrapper>
          {items.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ProjectCardsWrapper>
      ) : null}
      <ProjectCardsMoreLink />
    </Div>
  );
};

export default ProjectCards;
