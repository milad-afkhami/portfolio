import React from "react";
import { Text } from "@kits";

export const TimelineSectionItemTitle = (props) => {
  const { title } = props || {};

  return (
    <Text
      tag="p"
      size="lg-b"
      color="text-secondary"
      css={{ textTransform: "capitalize" }}
    >
      {title}
    </Text>
  );
};
