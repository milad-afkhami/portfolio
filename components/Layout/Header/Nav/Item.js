import React from "react";
import { Link, Text } from "@kits";

export function HeaderMenuItem(props) {
  return (
    <Link href={props.link} mx="3" onClick={props.onClick}>
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
