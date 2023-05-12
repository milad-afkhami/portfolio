import React from "react";
import { Div, Text } from "@kits";

export const PageTitle = (props) => {
  const { title, tag } = props || {};

  return (
    <Div mb="4">
      <Div
        flex={["center", "start"]}
        py="3"
        border="border-light"
        borderSide="bottom"
      >
        <Text size="h-md-b" as={tag || "h1"}>
          {title}
        </Text>
      </Div>
    </Div>
  );
};
