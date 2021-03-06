import React from "react";
import { Div } from "@kits";
import { ProjectTech } from "./Item";

export const ProjectTechs = (props) => {
  const { techs, compact } = props || {};

  return (
    <Div
      flex={["center", "start", , "wrap"]}
      css={{ gap: compact ? "var(--spacing-1)" : "var(--spacing-2)" }}
      mb={compact ? 3 : 4}
    >
      {techs.map((tech, i) => (
        <ProjectTech key={i} {...tech} compact={compact} />
      ))}
    </Div>
  );
};
