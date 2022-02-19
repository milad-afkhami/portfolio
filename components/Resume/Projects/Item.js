import React from "react";
import { Div, Text } from "@kits";

export const ResumeProjectsItem = ({ name, description, date }) => {
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
      <Div>
        <Text size="md" color="text-secondary">
          {description}
        </Text>
      </Div>
    </Div>
  );
};
