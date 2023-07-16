import Div from "@kits/Div";
import HeaderNav from "./Nav";
import HeaderGithub from "./GitHub";
import DownloadResume from "./DownloadResume";
import HeaderChangeLanguage from "./LanguagePicker";
import HeaderSwitchTheme from "./SwitchTheme";

const Header = () => (
  <Div
    height="var(--layout-header-height)"
    width="100%"
    bg="bg-primary-main"
    border="border-light-main"
    borderSide="bottom"
  >
    <Div flex={["center", "space-between"]} matchParent>
      <Div flex={[, "flex-start"]}>
        <HeaderNav />
      </Div>
      <Div width="auto">{/* <Logo /> */}</Div>
      <Div width="35%" flex={[, "flex-end"]} gap="3">
        <DownloadResume />
        <HeaderGithub />
        <HeaderChangeLanguage />
        <HeaderSwitchTheme />
      </Div>
    </Div>
  </Div>
);

export default Header;
