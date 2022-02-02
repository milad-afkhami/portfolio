import React from "react";
import { Div, Text } from "@kits";

export const ProjectDescription = (props) => {
  const { slug } = props || {};

  return (
    <Div mb="3">
      <Text size="lg">{`projects.${slug}.description`}</Text>
      {/* /{" "}<Text size="md-b" tag="time" css={{ textDecoration: "underline" }}>{`${props.date}`}</Text> */}
    </Div>
  );
};
