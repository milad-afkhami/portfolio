import React from "react";
import { Div, Text } from "@kits";
import { ProjectPointsList } from "./List";
import { ProjectSectionTitle } from "../SectionTitle";

export const ProjectPoints = (props) => {
  const { points } = props || {};

  return (
    <Div mb="4">
      <ProjectSectionTitle icon="list" title="projects.points" />
      <Div mx="-4" Mw="100%">
        <ProjectPointsList points={points} />
      </Div>
    </Div>
  );
};
