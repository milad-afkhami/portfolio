import { type FC, useState, useEffect } from "react";
import { Div } from "style-wiz";
import Icon from "@kits/Icon";
import { If, Then } from "@kits/ConditionalRendering";
import { useTheme } from "next-themes";
import Themes from "@constants/themes";
import type { Maybe } from "ts-wiz";
import type { IconProps } from "@kits/Icon";

const HeaderSwitchTheme: FC = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState<Maybe<IconProps["name"]>>();

  const onChangeTheme = () =>
    setTheme(theme === Themes.Dark ? Themes.Light : Themes.Dark);

  useEffect(() => {
    if (theme === Themes.Dark) setIcon("sun");
    if (theme === Themes.Light) setIcon("moon");
  }, [theme]);

  return (
    <Div
      cursor="pointer"
      flex={["center", "center"]}
      width="2rem"
      onClick={onChangeTheme}
    >
      <If condition={icon}>
        <Then>
          <Icon name={icon!} size="h-lg" />
        </Then>
      </If>
    </Div>
  );
};

export default HeaderSwitchTheme;
