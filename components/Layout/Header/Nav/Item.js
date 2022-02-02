import React from "react";
import { Link, Text } from "@kits";

export function HeaderMenuItem(props) {
  return (
    <Link
      href={props.link}
      m="3 0"
      responsive={{ md: { m: "0 3" } }}
      onClick={props.onClick}
      display="flex"
    >
      <Text
        size="md-b"
        tag="p"
        zoomOnHover
        hoverColor="text-secondary"
        truncate
      >
        {`layout.header.menu.${props.label}`}
      </Text>
    </Link>
  );
}
