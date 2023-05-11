import React from "react";
import { Div, Text } from "@kits";
import { SectionTitle } from "@components/Layout";

const resumeSkills = [
  { name: "JavaScript / TypeScript" },
  { name: "CSS" },
  { name: "React" },
  { name: "Next.js" },
];

export const ResumeSkills = () => {
  return (
    <Div>
      <SectionTitle title="resume.skills.title" icon="focus-center" />
      <Div
        flex={["center", "start", , "wrap"]}
        css={{ gap: "var(--spacing-2)" }}
        mb={3}
      >
        {resumeSkills.map(({ name }) => (
          <Div bg="assistive-info" px={2} curve="xsm" display="flex">
            <Text size="md-b" color="bg-primary">
              {name}
            </Text>
          </Div>
        ))}
      </Div>
    </Div>
  );
};
