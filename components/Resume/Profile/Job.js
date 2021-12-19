import React from "react";
import { Div, Text } from "@kits";

export function ResumeProfileJob(props) {
  return (
    <Div>
      <Div mb="3">
        <Text size="xlg-b" tag="h2">
          resume.profile.job
        </Text>
      </Div>
      <Div
        css={{ textAlign: "center" }}
        responsive={{ md: { css: { textAlign: "start".imp() } } }}
      >
        <Text
          size="lg"
          color="text-secondary"
          tag="h3"
          lineHeight="2"
          css={{ whiteSpace: "pre-line" }}
          Mw="600px"
        >
          resume.profile.jobDescription
        </Text>
      </Div>
    </Div>
  );
}
