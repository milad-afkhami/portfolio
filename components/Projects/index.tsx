import Div from "@kits/Div";
import Project from "./Project";
import projectsData from "@data/projects";

const Projects = () => (
  <Div>
    {projectsData.map((project, i) => (
      <Project {...project} key={i} index={i + 1} />
    ))}
  </Div>
);

export default Projects;
