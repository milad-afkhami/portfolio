import React from "react";
import { Div, Text } from "@kits";

export const ResumeEducationItem = ({ year, title, description }) => {
  return (
    <Div my="3">
      <Div>
        <Text size="sm" color="text-secondary">
          {year}
        </Text>
      </Div>
      <Div>
        <Text size="md-b">{title}</Text>
      </Div>
      <Div>
        <Text size="md" color="text-secondary">
          {description}
        </Text>
      </Div>
    </Div>
  );
};
