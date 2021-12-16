import React from "react";
import { Div, Text } from "@kits";

export const ProjectDescription = (props) => {
  const { description } = props || {};

  return (
    <Div mb="4">
      <Text size="md">{description}</Text>
    </Div>
  );
};
