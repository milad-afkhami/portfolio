import React from "react";
import { useState, useEffect } from "@hooks";
import { Div, Icon, Logo } from "@kits";
import { HeaderMenus } from "../Menus";
import { HeaderSwitchTheme } from "./SwitchTheme";

export function Header(props) {
  const { transparent } = props || {};
  return (
    <Div
      {...(!transparent
        ? { bg: "bg-primary", border: "border-light", borderSide: "bottom" }
        : {})}
      height="var(--layout-header-height)"
      width="100%"
      container
    >
      <Div flex={["center", "between"]} matchParent>
        <Div width="35%" flex={[, "start"]}>
          <HeaderMenus />
        </Div>
        <Div width="auto">{/* <Logo /> */}</Div>
        <Div width="35%" flex={[, "end"]}>
          <HeaderSwitchTheme />
        </Div>
      </Div>
    </Div>
  );
}
