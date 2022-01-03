import React from "react";
import { useState, useEffect } from "@hooks";
import { Div, Icon, Logo } from "@kits";
import { HeaderNav } from "./Nav";
import { HeaderChangeLanguage } from "./LanguagePicker";
import dynamic from "next/dynamic";

const HeaderSwitchTheme = dynamic(
  () => import("./SwitchTheme").then((module) => module.HeaderSwitchTheme),
  { ssr: false }
);

export function Header(props) {
  const { transparent } = props || {};

  return (
    <Div
      {...(!transparent
        ? { bg: "bg-primary", border: "border-light", borderSide: "bottom" }
        : {})}
      height="var(--layout-header-height)"
      width="100%"
    >
      <Div flex={["center", "between"]} matchParent>
        <Div flex={[, "start"]}>
          <HeaderNav />
        </Div>
        <Div width="auto">{/* <Logo /> */}</Div>
        <Div width="35%" flex={[, "end"]}>
          <HeaderChangeLanguage />
          <HeaderSwitchTheme />
        </Div>
      </Div>
    </Div>
  );
}
