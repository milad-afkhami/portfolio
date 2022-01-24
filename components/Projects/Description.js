import React from "react";
import { Div, Text } from "@kits";

export const ProjectDescription = (props) => {
  const { slug } = props || {};

  return (
    <Div mb="4">
      <Text size="lg">{`projects.${slug}.description`}</Text>
    </Div>
  );
};
