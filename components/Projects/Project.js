import React from "react";
import { Div, Image, Link, Text } from "@kits";
import { ProjectGallery } from "./Gallery";
import { ProjectPoints } from "./Points";

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
      <Div
        flex={["center", "between"]}
        py="3"
        mb="4"
        border="border-light"
        borderSide="bottom"
      >
        <Div flex={["end", "start"]}>
          <Text size="h-lg-b">{`${index}.`}</Text>
          <Text size="h-md-b" mx="2" as="h2">
            {name}
          </Text>
        </Div>
        <Link href={link} outerLink underline>
          <Text size="sm">
            {link.replace("https://", "").replace("www.", "")}
          </Text>
        </Link>
      </Div>
      <Div mb="4">
        <Text size="md">{description}</Text>
      </Div>
      <ProjectPoints points={points} />
      <ProjectGallery medias={medias} />
    </Div>
  );
};
