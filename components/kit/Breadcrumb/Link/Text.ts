import React from "react";
import { Text } from "@kits";

export function BreadcrumbLinkText(props) {
  const { title, lastItem } = props;

  return (
    <Text
      cursor={lastItem ? "default" : "pointer"}
      px="2"
      truncate
      hoverColor={!lastItem ? "brand" : ""}
      size="sm-b"
      color="text-secondary"
    >
      {title}
    </Text>
  );
}
