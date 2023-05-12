import Div from "@kits/Div";
import { projectsData } from "@data";
import { Project } from "./Project";

export { ProjectsList } from "./List";
export { ProjectTechs } from "./Techs";



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