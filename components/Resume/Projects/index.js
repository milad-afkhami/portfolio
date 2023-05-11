import React from "react";
import { Div, Icon, Text } from "@kits";
import { SectionTitle } from "@components/Layout";
import { projectsData } from "@data";
import { ResumeProjectsItem } from "./Item";
import { Trans } from "react-i18next";
import { appBaseURL } from "@config";
import { ResumeReference } from "../Reference";

export const ResumeProjects = () => {
  return (
    <Div mb="5">
      <SectionTitle title="projects.title" icon="code" />
      <ResumeReference
        i18nKey="resume.projects.message"
        link="cutt.ly/my-projects"
        route="/projects"
      />
      <Div>
        {projectsData.slice(0, 3).map(({ slug, ...data }) => (
          <ResumeProjectsItem
            {...data}
            name={`projects.${slug}.name`}
            description={`projects.${slug}.description`}
          />
        ))}
        <ResumeProjectsItem name="..." description="..." />
      </Div>
    </Div>
  );
};
