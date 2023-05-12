import React from "react";
import { Div, Text } from "@kits";
import { SectionTitle } from "@components/Layout";

export const GistTitle = (props) => {
  const { title } = props || {};

  return <SectionTitle title={title} />;

  return (
    <Div my="3">
      <Text size="h-md-b" as="h1" lineHeight="1.8">
        {title}
      </Text>
    </Div>
  );
};
