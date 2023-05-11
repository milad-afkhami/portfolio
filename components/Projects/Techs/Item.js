import React from "react";
import { Link, Text } from "@kits";

export const ProjectTech = (props) => {
  const { name, link, compact } = props || {};

  return (
    <Link
      outerLink
      href={link}
      bg="brand"
      hoverBg="brand-hover"
      px={compact ? 1 : 2}
      curve="xsm"
      display="flex"
    >
      <Text size={compact ? "xsm" : "md-b"} color="bg-primary">
        {name}
      </Text>
    </Link>
  );
};
