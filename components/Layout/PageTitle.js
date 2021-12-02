import React from "react";
import { Div, Text } from "@kits";

export const PageTitle = (props) => {
  const { title } = props || {};

  return (
    <Div mb="4">
      <Div
        flex={["center", "start"]}
        py="4"
        border="border-light"
        borderSide="bottom"
      >
        <Text size="h-md">{title}</Text>
      </Div>
    </Div>
  );
};
