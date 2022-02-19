import React from "react";
import { Div, Text } from "@kits";
import { SectionTitle } from "@components/Layout";
import { projectsData } from "@data";
import { ResumeProjectsItem } from "./Item";

export const ResumeProjects = () => {
  return (
    <Div mb="5">
      <SectionTitle title="projects.title" icon="code" />
      <Div>
        {projectsData.slice(0, 3).map(({ slug, date }) => (
          <ResumeProjectsItem
            name={`projects.${slug}.name`}
            description={`projects.${slug}.description`}
            date={date}
          />
        ))}
        <ResumeProjectsItem name="..." description="..." />
      </Div>
    </Div>
  );
};
