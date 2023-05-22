import Div from "@kits/Div";
import ProjectHeading from "./Heading";
import ProjectDescription from "./Description";
// import ProjectDate from "./Date";
import ProjectTechs from "./Techs";
import ProjectGallery from "./Gallery";
import ProjectPoints from "./Points";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

const ProjectDetail: FC<PropsWithIndex<IProject>> = (props) => {
  const { index, name, link, logo, medias, slug, techs, points } = props;

  return (
    <Div mb="6" id={`project-${slug}`}>
      <ProjectHeading
        name={name}
        logo={logo}
        link={link}
        slug={slug}
        index={index}
      />
      <ProjectDescription slug={slug} />
      {/* {date && <ProjectDate date={date} />} */}
      {medias && <ProjectGallery medias={medias} />}
      {techs && <ProjectTechs techs={techs} />}
      {points && <ProjectPoints points={points} />}
    </Div>
  );
};

export default ProjectDetail;
