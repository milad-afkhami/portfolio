import React from "react";
import { Div, Image, Link, Text } from "@kits";
import { ProjectGallery } from "./Gallery";

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
    <Div mb="5">
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
      <Div mb="4">
        <Div mb="3">
          <Text size="md-b">projects.points</Text>
        </Div>
        <Div as="ul" mx="4">
          {points.map((point) => (
            <Div as="li" mb="3">
              <Text size="md">{point}</Text>
            </Div>
          ))}
        </Div>
      </Div>
      <ProjectGallery medias={medias} />
    </Div>
  );
};
