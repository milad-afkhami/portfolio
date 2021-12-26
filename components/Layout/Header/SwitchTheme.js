import React from "react";
import { useTheme } from "@hooks";
import { Div, Icon } from "@kits";
import styled from "styled-components";
import { THEMES } from "@constants";

export function HeaderSwitchTheme(props) {
  const {} = props || {};
  const { theme, setTheme } = useTheme();

  const onChangeTheme = () =>
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);

  return (
    <Div cursor="pointer" flex={["center", "center"]}>
      <Div
        as="svg"
        cursor="pointer"
        width="2rem"
        height="2rem"
        onClick={onChangeTheme}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
      >
        {theme === THEMES.DARK && (
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        )}
        {theme === THEMES.LIGHT && (
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </Div>
    </Div>
  );
}
