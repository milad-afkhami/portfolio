import Div from "@kits/Div";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import { ProjectHeading } from "./Heading";
import { ProjectDescription } from "./Description";
import { ProjectTechs } from "./Techs";
import { ProjectGallery } from "./Gallery";
import { ProjectPoints } from "./Points";
// import { ProjectDate } from "./Date";

const Project = (props) => {
  return (
    <Div mb="6" id={`project-${props.slug}`}>
      <ProjectHeading {...props} />
      <ProjectDescription {...props} />
      {props.medias && <ProjectGallery medias={props.medias} />}
      {props.techs && <ProjectTechs {...props} />}
      {props.points && <ProjectPoints points={props.points} />}
    </Div>
  );
};

export default Project;
