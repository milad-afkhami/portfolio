import React from "react";
import { Div, Text } from "@kits";

export const BlogSummary = (props) => {
  const { summary } = props || {};

  return (
    <Div my="3" bg="bg-secondary" p="3" curve="sm">
      <Text size="lg" as="p" lineHeight={2}>
        {summary}
      </Text>
    </Div>
  );
};
