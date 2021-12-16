import React from "react";
import { Div, Link, Text } from "@kits";

export const ProjectHeading = (props) => {
  const { name, link = "", index } = props || {};

  return (
    <Div
      flex={["center", "between"]}
      py="3"
      mb="4"
      border="border-light"
      borderSide="bottom"
    >
      <Div flex={["end", "start"]}>
        <Text size="h-lg-b">{`${index}.`}</Text>
        <Text size="h-md-b" mx="2" as="h2">
          {name}
        </Text>
      </Div>
      <Link href={link} outerLink underline>
        <Text size="sm">
          {link.replace("https://", "").replace("www.", "")}
        </Text>
      </Link>
    </Div>
  );
};
