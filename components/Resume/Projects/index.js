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
      <ResumeReference i18nKey="resume.projects.message" route="/projects" />
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
