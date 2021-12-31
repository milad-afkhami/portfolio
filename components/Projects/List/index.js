import React from "react";
import { Div } from "@kits";
import { projectsData } from "mock";
import { useRouter } from "@hooks";
import { PageTitle } from "@components/Layout";
import { ProjectCard } from "./Card";
import { ProjectsMoreLink } from "./MoreLink";

export const ProjectsList = (props) => {
  const { ...rest } = props || {};
  const router = useRouter();

  const projects =
    projectsData[router.locale] || projectsData[router.defaultLocale];
  const items = [projects[0], projects[1], projects[4]];

  return (
    <Div my="3" {...rest}>
      <PageTitle title="projects.title" />
      {items?.length ? (
        <Div
          grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
          css={{ gridAutoFlow: "row" }}
          overflowX="auto"
          responsive={{
            sm: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
            lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
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
