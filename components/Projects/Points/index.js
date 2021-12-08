import React from "react";
import { Div, Text } from "@kits";
import { ProjectPointsList } from "./List";

export const ProjectPoints = (props) => {
  const { points } = props || {};

  return (
    <Div mb="4">
      <Div mb="3">
        <Text size="lg-b">projects.points</Text>
      </Div>
      <ProjectPointsList points={points} />
    </Div>
  );
};
