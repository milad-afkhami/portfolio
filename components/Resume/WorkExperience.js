import React from "react";
import { Div, Text } from "@kits";
import { SectionTitle } from "@components/Layout";
import { workExperienceTimelineSections } from "@config";
import { ResumeReference } from "./Reference";

export const ResumeWorkExperience = () => {
  return (
    <Div mb="5">
      <SectionTitle title="about.workExperience.title" icon="suitcase" />
      <ResumeReference
        i18nKey="resume.workExperience.message"
        link="cutt.ly/work-experience"
        route="/about#work-experience"
      />
      <Div>
        {workExperienceTimelineSections.map((exp) => (
          <Div my="3">
            <Div>
              <Text size="sm" color="text-secondary">
                {exp.year}
              </Text>
            </Div>
            <Div>
              <Text size="md-b">{exp.items[0]}</Text>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  );
};
