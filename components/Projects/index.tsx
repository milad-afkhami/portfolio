import Div from "@kits/Div";
import projectsData from "@data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <Div>
      {projectsData.map((project, i) => (
        <Project {...project} key={i} index={i + 1} />
      ))}
    </Div>
  );
};

export default Projects;
