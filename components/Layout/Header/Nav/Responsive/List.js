import React from "react";
import { Div } from "@kits";
import { HeaderMenuItem } from "../Item";
import { navLinks } from "@config";

export function HeaderResponsiveMenuList(props) {
  const { rendered } = props || {};

  return (
    <Div
      position="absolute"
      width="100vw"
      dimensions={{
        left: 0,
        right: 0,
        top: "var(--layout-header-height)",
      }}
      bg="bg-primary"
      zIndex="2"
      p="2 4"
      opacity={rendered ? 1 : 0}
      pace="fast"
    >
      {navLinks.map((menu) => (
        <HeaderMenuItem {...menu} />
      ))}
    </Div>
  );
}
