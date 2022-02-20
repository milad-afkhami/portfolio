import React from "react";
import { Div } from "@kits";
import { ResumeHeader } from "./Header";
import { ResumeWorkExperience } from "./WorkExperience";
import { ResumeEducation } from "./Education";
import { ResumeProjects } from "./Projects";
import { ResumeSkills } from "./Skills";
import { ResumeLanguages } from "./Languages";
// import { ResumeInterests } from "./Interests";

export default function Resume() {
  return (
    <Div
      css={{
        "@page": {
          size: "auto",
          size: "A3",
          margin: "0mm",
          WebkitPrintColorAdjust: "exact",
        },
      }}
    >
      <ResumeHeader />
      <Div width="100%" flex={["start"]} p="4">
        <Div width="100%">
          <ResumeWorkExperience />
          <ResumeEducation />
          <ResumeLanguages />
        </Div>
        <Div width="100%">
          <ResumeProjects />
          <ResumeSkills />
        </Div>
      </Div>
    </Div>
  );
}
