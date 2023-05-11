import React from "react";
import { Div, Text } from "@kits";
import { HeaderMenuItem } from "./Item";
import { navLinks } from "@config";

export default function HeaderMenu(props) {
  return (
    <Div display="flex" mx="-3">
      {navLinks.map((menu, i) => (
        <HeaderMenuItem key={i} {...menu} />
      ))}
    </Div>
  );
}
