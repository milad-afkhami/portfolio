import React from "react";
import { Div, Text } from "@kits";
import { PageTitle } from "@components/Layout";
import { ProjectsList } from "@components/Projects";

export const Projects = (props) => {
  const {} = props || {};

  return (
    <Div my="4">
      <ProjectsList />
    </Div>
  );
};
