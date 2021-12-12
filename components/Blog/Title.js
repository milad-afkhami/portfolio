import React from "react";
import { Div, Text } from "@kits";

export const BlogTitle = (props) => {
  const { title } = props || {};

  return (
    <Div my="3">
      <Text size="h-md-b" as="h1" lineHeight="1.8">
        {title}
      </Text>
    </Div>
  );
};
