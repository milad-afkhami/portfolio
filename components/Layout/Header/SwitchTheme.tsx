import { useTheme } from "next-themes";
import Div from "@kits/Div";
import Icon from "@kits/Icon";
import { If, Then } from "@kits/ConditionalRendering";
import Themes from "@constants/themes";
import type { FC } from "react";
import type IconProps from "@kits/Icon/props";

const HeaderSwitchTheme: FC = () => {
  const { theme, setTheme } = useTheme();

  const onChangeTheme = () =>
    setTheme(theme === Themes.Dark ? Themes.Light : Themes.Dark);

  let icon: Maybe<IconProps["name"]>;
  if (theme === Themes.Dark) icon = "sun";
  else if (theme === Themes.Light) icon = "moon";

  return (
    <Div
      cursor="pointer"
      flex={["center", "center"]}
      width="2rem"
      onClick={onChangeTheme}
    >
      <If condition={icon}>
        <Then>
          <Icon name={icon!} size="24px" />
        </Then>
      </If>
    </Div>
  );
};

export default HeaderSwitchTheme;
