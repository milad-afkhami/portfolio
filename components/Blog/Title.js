import React from "react";
import { Div, Text } from "@kits";
import { PageTitle } from "@components/Layout";

export const BlogTitle = (props) => {
  const { title } = props || {};

  return <PageTitle title={title} />;

  return (
    <Div my="3">
      <Text as="h1" lineHeight="1.8">
        {title}
      </Text>
    </Div>
  );
};
