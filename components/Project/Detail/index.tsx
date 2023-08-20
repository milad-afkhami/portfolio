import { Div } from "style-wiz";
import ProjectDetailHeading from "./Heading";
import ProjectDetailDescription from "./Description";
// import ProjectDetailDate from "./Date";
import ProjectDetailTechs from "./Techs";
import ProjectDetailGallery from "./Gallery";
import ProjectDetailPoints from "./Points";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

const ProjectDetail: FC<PropsWithIndex<IProject>> = (props) => {
  const { index, name, link, logo, medias, slug, techs, points } = props;

  return (
    <Div mb="6" id={`project-${slug}`}>
      <ProjectDetailHeading name={name} logo={logo} link={link} index={index} />
      <ProjectDetailDescription slug={slug} />
      {/* {date && <ProjectDetailDate date={date} />} */}
      {techs.length ? <ProjectDetailTechs techs={techs} /> : null}
      {points && <ProjectDetailPoints points={points} />}
      {medias && <ProjectDetailGallery medias={medias} />}
    </Div>
  );
};

export default ProjectDetail;
