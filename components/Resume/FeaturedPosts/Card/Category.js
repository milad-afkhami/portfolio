import React from "react";
import { Div, Text } from "@kits";

export const FeaturedPostCardCategory = (props) => {
  const { category = "" } = props || {};

  return (
    <Div
      position="absolute"
      dimensions={{ top: "0.25rem", left: "0.25rem" }}
      p="1"
      flex={["center", "center"]}
      bg="bg-secondary-pale"
      curve="xsm"
      color="text-secondary"
    >
      <Text size="xxsm-b">{category}</Text>
    </Div>
  );
};
