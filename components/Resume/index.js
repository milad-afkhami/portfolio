import React from "react";
import { Div } from "@kits";
import { ResumeHeader } from "./Header";
import { ResumeWorkExperience } from "./WorkExperience";
import { ResumeEducation } from "./Education";
import { ResumeProjects } from "./Projects";
import { ResumeSkills } from "./Skills";
import { ResumeInterests } from "./Interests";
import { ResumeLanguages } from "./Languages";

export default function Resume() {
  return (
    <Div>
      <ResumeHeader />
      <Div width="100%" flex={["start"]} p="4">
        <Div width="100%">
          <ResumeWorkExperience />
          <ResumeEducation />
        </Div>
        <Div width="100%">
          <ResumeProjects />
          <ResumeSkills />
          <ResumeInterests />
          <ResumeLanguages />
        </Div>
      </Div>
    </Div>
  );
}
