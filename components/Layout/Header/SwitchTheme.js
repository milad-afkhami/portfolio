import React from "react";
import { useTheme } from "@hooks";
import { Div, Icon } from "@kits";
import { THEMES } from "@constants";

export function HeaderSwitchTheme(props) {
  const {} = props || {};
  const { theme, setTheme } = useTheme();

  const onChangeTheme = () =>
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);

  return (
    <Div
      cursor="pointer"
      flex={["center", "center"]}
      width="2rem"
      onClick={onChangeTheme}
    >
      <Icon
        name={
          theme == THEMES.DARK ? "sun" : theme == THEMES.LIGHT ? "moon" : ""
        }
        size="24px"
      />
    </Div>
  );
}
