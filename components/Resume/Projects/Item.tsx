import React from "react";
import { Div, Text } from "@kits";
import { ProjectTechs } from "@components/Projects";

export const ResumeProjectsItem = ({ name, description, date, techs }) => {
  return (
    <Div my="3">
      <Div>
        <Text size="lg-b">{name}</Text>
      </Div>
      {date && (
        <Div>
          <Text size="sm" color="text-secondary">
            {date}
          </Text>
        </Div>
      )}
      <Div mb="2">
        <Text size="md" color="text-secondary">
          {description}
        </Text>
      </Div>
      {techs?.length ? <ProjectTechs techs={techs} compact /> : null}
    </Div>
  );
};
