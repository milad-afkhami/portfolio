import React from "react";
import { Div, Icon, Text } from "@kits";

export function ResumeProfile(props) {
  const {} = props || {};
  return (
    <Div flex width="100%">
      <Div width="100%">
        <Div mb="2">
          <Text size="h-lg-b" tag="h1">
            resume.profile.name
          </Text>
        </Div>
        <Div mb="3">
          <Text size="md" tag="h2">
            resume.profile.job
          </Text>
        </Div>
        <Div>
          <Text size="md" color="text-secondary" tag="h3">
            resume.profile.jobDescription
          </Text>
        </Div>
      </Div>
      <Div>
        <Div width="9rem" height="9rem" curve="circle" bg="brand" />
      </Div>
    </Div>
  );
}
