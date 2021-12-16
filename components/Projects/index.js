import React from "react";
import { Div, Text } from "@kits";
import { useState, useRouter } from "@hooks";
import { projectsData } from "mock";
import { Project } from "./Project";

export const Projects = (props) => {
  const {} = props || {};
  const [state, setState] = useState(null);
  const router = useRouter();

  const projects =
    projectsData[router.locale] || projectsData[router.locales[0]];

  return (
    <Div>
      {projects.map((project, i) => (
        <Project {...project} key={i} index={i + 1} />
      ))}
    </Div>
  );
};
