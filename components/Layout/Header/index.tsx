import Div from "@kits/Div";
import HeaderNav from "./Nav";
import dynamic from "next/dynamic";
import HeaderGithub from "./GitHub";
import DownloadResume from "./DownloadResume";
import HeaderChangeLanguage from "./LanguagePicker";

const HeaderSwitchTheme = dynamic(() => import("./SwitchTheme"), {
  ssr: false,
});

const Header = () => (
  <Div
    height="var(--layout-header-height)"
    width="100%"
    bg="bg-primary-main"
    border="border-light-main"
    borderSide="bottom"
  >
    <Div flex={["center", "between"]} matchParent>
      <Div flex={[, "start"]}>
        <HeaderNav />
      </Div>
      <Div width="auto">{/* <Logo /> */}</Div>
      <Div width="35%" flex={[, "end"]} css={{ gap: "var(--spacing-3)" }}>
        <DownloadResume />
        <HeaderGithub />
        <HeaderChangeLanguage />
        <HeaderSwitchTheme />
      </Div>
    </Div>
  </Div>
);

export default Header;
