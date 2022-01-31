import React from "react";
import { Div, Text } from "@kits";

export const GistSummary = (props) => {
  const { summary } = props || {};

  return (
    <Div my="3">
      <Text size="lg" as="p">
        {summary}
      </Text>
    </Div>
  );
};
