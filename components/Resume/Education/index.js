import React from "react";
import { Div } from "@kits";
import { SectionTitle } from "@components/Layout";
import { educationTimelineSections } from "@config";
import { ResumeEducationItem } from "./Item";

export const ResumeEducation = () => {
  return (
    <Div mb="5">
      <SectionTitle title="about.education.title" icon="education" />
      <Div>
        {educationTimelineSections.map(({ year, items: [name] }) => (
          <ResumeEducationItem
            year={year}
            title={name}
            description={`${name}_desc`}
          />
        ))}
      </Div>
    </Div>
  );
};
