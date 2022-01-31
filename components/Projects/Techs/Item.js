import React from "react";
import { Div, Link, Text } from "@kits";
import {} from "@hooks";

export const ProjectTech = (props) => {
  const { name, link } = props || {};

  return (
    <Link
      outerLink
      href={link}
      bg="brand"
      hoverBg="brand-hover"
      p="0 2"
      curve="xsm"
    >
      <Text size="md-b" color="bg-primary">
        {name}
      </Text>
    </Link>
  );
};
