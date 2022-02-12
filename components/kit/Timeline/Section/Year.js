import React from "react";
import { Div, Text } from "@kits";

export const TimelineSectionYear = (props) => {
  const { year } = props || {};

  return (
    <Div
      height="2rem"
      flex={["center"]}
      position="absolute"
      bg="bg-primary"
      px="3"
      curve="sm"
      dimensions={{ top: "-1rem" }}
    >
      <Text
        tag="p"
        size="h-sm-b"
        color="assistive-success"
        css={{ textTransform: "uppercase" }}
      >
        {year}
      </Text>
    </Div>
  );
};
