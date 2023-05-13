import { useTheme } from "next-themes";
import Div from "@kits/Div";
import Icon from "@kits/Icon";
import THEMES from "@constants/themes";

const HeaderSwitchTheme = (props) => {
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
};

export default HeaderSwitchTheme;
