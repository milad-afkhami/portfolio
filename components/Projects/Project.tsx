import Div from "@kits/Div";
import ProjectHeading from "./Heading";
import ProjectDescription from "./Description";
import ProjectTechs from "./Techs";
import ProjectGallery from "./Gallery";
import ProjectPoints from "./Points";
// import ProjectDate from "./Date";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

const Project: FC<PropsWithIndex<IProject>> = (props) => {
  const { index, name, link, logo, medias, date, slug, techs, points } = props;

  return (
    <Div mb="6" id={`project-${slug}`}>
      <ProjectHeading logo={logo} link={link} slug={slug} index={index} />
      <ProjectDescription slug={slug} />
      {medias && <ProjectGallery medias={medias} />}
      {techs && <ProjectTechs techs={techs} />}
      {points && <ProjectPoints points={points} />}
    </Div>
  );
};

export default Project;
