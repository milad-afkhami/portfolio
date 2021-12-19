import React from "react";
import { Div, Text } from "@kits";
import { ProjectPointsList } from "./List";
import { SectionTitle } from "@components/Layout";

export const ProjectPoints = (props) => {
  const { points } = props || {};

  return (
    <Div mb="4">
      <SectionTitle icon="list" title="projects.points" />
      <Div mx="-4" Mw="100%">
        <ProjectPointsList points={points} />
      </Div>
    </Div>
  );
};
