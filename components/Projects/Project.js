import React from "react";
import { Div } from "@kits";
import { ProjectHeading } from "./Heading";
import { ProjectDescription } from "./Description";
import { ProjectTechs } from "./Techs";
import { ProjectGallery } from "./Gallery";
import { ProjectPoints } from "./Points";

export const Project = (props) => {
  return (
    <Div mb="6" id={`project-${props.slug}`}>
      <ProjectHeading {...props} />
      <ProjectDescription {...props} />
      <ProjectTechs {...props} />
      {props.medias && <ProjectGallery medias={props.medias} />}
      {props.points && <ProjectPoints points={props.points} />}
    </Div>
  );
};
