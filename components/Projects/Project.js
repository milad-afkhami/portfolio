import React from "react";
import { Div } from "@kits";
import { ProjectGallery } from "./Gallery";
import { ProjectPoints } from "./Points";
import { ProjectHeading } from "./Heading";
import { ProjectDescription } from "./Description";

export const Project = (props) => {
  const {
    _id,
    name,
    link = "",
    medias,
    date,
    slug,
    techs,
    description,
    points,
    index,
  } = props || {};

  return (
    <Div mb="6">
      <ProjectHeading {...props} />
      <ProjectDescription description={description} />
      {medias && <ProjectGallery medias={medias} />}
      {points && <ProjectPoints points={points} />}
    </Div>
  );
};
