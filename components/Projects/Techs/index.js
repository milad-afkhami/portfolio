import React from "react";
import { Div } from "@kits";
import { ProjectTech } from "./Item";

export const ProjectTechs = (props) => {
  const { techs } = props || {};

  return (
    <Div
      flex={["center", "start", , "wrap"]}
      css={{ gap: "var(--spacing-2)" }}
      mb="4"
    >
      {techs.map((tech, i) => (
        <ProjectTech key={i} {...tech} />
      ))}
    </Div>
  );
};
