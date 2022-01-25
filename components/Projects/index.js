import React from "react";
import { Div } from "@kits";
import { projectsData } from "@data";
import { Project } from "./Project";

export { ProjectsList } from "./List";

export const Projects = () => {
  return (
    <Div>
      {projectsData.map((project, i) => (
        <Project {...project} key={i} index={i + 1} />
      ))}
    </Div>
  );
};
