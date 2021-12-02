import React from "react";
import { Div, Image, Text } from "@kits";

export const DropDownLabel = (props) => {
  const { label } = props || {};

  return (
    <Div flex={["center", "center"]}>
      <Text size="sm-b">{label}</Text>
    </Div>
  );
};
