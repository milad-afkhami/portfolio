import React from "react";
import { Div } from "@kits";
import { projectsData } from "@data";
import { PageTitle } from "@components/Layout";
import { ProjectCard } from "./Card";
import { ProjectsMoreLink } from "./MoreLink";

export const ProjectsList = (props) => {
  const {} = props || {};

  const items = [
    projectsData[0],
    projectsData[1],
    projectsData[4],
    projectsData[2],
    projectsData[3],
    projectsData[5],
  ];

  return (
    <Div my="3" {...props}>
      <PageTitle title="projects.title" tag="h2" />
      {items?.length ? (
        <Div
          grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
          css={{ gridAutoFlow: "row" }}
          overflowX="auto"
          responsive={{
            md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          }}
          pb="2"
        >
          {items.map((data, i) => (
            <ProjectCard key={i} {...data} />
          ))}
        </Div>
      ) : null}
      <ProjectsMoreLink />
    </Div>
  );
};
