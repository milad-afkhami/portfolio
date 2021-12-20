import React from "react";
import { Div, Text } from "@kits";

export const AboutTimelineSectionItem = (props) => {
  const { text } = props || {};

  return (
    <Div mb="3">
      <Text
        tag="p"
        size="lg-b"
        color="text-secondary"
        css={{
          textTransform: "capitalize",
        }}
      >
        {`about.timeline.${text}`}
      </Text>
      <Text tag="p" size="md" ml="3" color="text-secondary">
        {`about.timeline.${text}_desc`}
      </Text>
    </Div>
  );
};
