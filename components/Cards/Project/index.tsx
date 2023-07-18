import { Div } from "style-wiz";
import projectsData from "@data/projects";
import PageTitle from "@components/Layout/Title/Page";
import ProjectCard from "./Item";
import ProjectCardsWrapper from "./Wrapper";
import ProjectCardsMoreLink from "./MoreLink";
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
      {items?.length ? (
        <ProjectCardsWrapper>
          {items.map((data, i) => (
            <ProjectCard key={i} {...data} />
          ))}
        </ProjectCardsWrapper>
      ) : null}
      <ProjectCardsMoreLink />
    </Div>
  );
};

export default ProjectCards;
