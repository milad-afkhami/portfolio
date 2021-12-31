import React from "react";
import { Div, Text } from "@kits";

export function ProfileJob(props) {
  return (
    <Div>
      <Div
        mb="3"
        css={{ textAlign: "center" }}
        responsive={{ md: { css: { textAlign: "start".imp() } } }}
      >
        <Text size="lg-b" tag="h2">
          home.profile.job
        </Text>
      </Div>
      <Div
        css={{ textAlign: "center" }}
        responsive={{
          md: {
            css: {
              textAlign: "start".imp(),
              "*": { whiteSpace: "pre-line" },
            },
          },
        }}
      >
        <Text
          size="lg"
          color="text-secondary"
          tag="h3"
          lineHeight="2"
          Mw="600px"
        >
          home.profile.jobDescription
        </Text>
      </Div>
    </Div>
  );
}
