import React from "react";
import { Div, Text } from "@kits";

export const ResumeLanguageItem = ({ name, proficiency }) => {
  return (
    <Div mb="2">
      <Div>
        <Text size="md-b">{name}</Text>
      </Div>
      <Div>
        <Text
          size="sm"
          color="text-secondary"
        >{`resume.languages.proficiency.level.${proficiency}`}</Text>
      </Div>
    </Div>
  );
};
