import React from "react";
import { Div } from "@kits";
import { SectionTitle } from "@components/Layout";
import { ResumeLanguageItem } from "./Item";

const resumeLanguages = [
  { name: "Persian", proficiency: "5" },
  { name: "English", proficiency: "3" },
];

export const ResumeLanguages = () => {
  return (
    <Div mb="5">
      <SectionTitle title="resume.languages.title" icon="education" />
      {resumeLanguages.map((lang) => (
        <ResumeLanguageItem {...lang} />
      ))}
    </Div>
  );
};
