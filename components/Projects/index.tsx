import Div from "@kits/Div";
import Project from "./Item";
import projectsData from "@data/projects";

const ProjectsList = () => (
  <Div>
    {projectsData.map((project, i) => (
      <Project {...project} key={i} index={i + 1} />
    ))}
  </Div>
);

export default ProjectsList;
