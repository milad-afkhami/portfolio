import React from "react";
import { Div, Text } from "@kits";
import { useState } from "@hooks";
import { projectsData } from "mock";
import { Project } from "./Project";

export const Projects = (props) => {
  const {} = props || {};
  const [state, setState] = useState(null);

  return (
    <Div>
      {projectsData.map((project, i) => (
        <Project {...project} key={i} index={i + 1} />
      ))}
    </Div>
  );
};
