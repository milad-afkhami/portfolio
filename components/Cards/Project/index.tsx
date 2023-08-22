import { Div } from "style-wiz";
import PageTitle from "@components/Layout/Title/Page";
import ProjectCard from "./Item";
import responsiveStyles from "@helpers/responsiveStyles";
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
        <Div
          grid={["repeat(1, 1fr)", , "4", "4"]}
          mb="4"
          styles={{
            gridAutoFlow: "row",
            ...responsiveStyles("md", {
              gridTemplateColumns: "repeat(2, 1fr)",
            }),
            ...responsiveStyles("xl", {
              gridTemplateColumns: "repeat(3, 1fr)",
            }),
          }}
        >
          {items.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Div>
      ) : null}
    </Div>
  );
};

export default ProjectCards;
