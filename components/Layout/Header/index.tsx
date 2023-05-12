import Div from "@kits/Div";
import { HeaderNav } from "./Nav";
import dynamic from "next/dynamic";
import { HeaderChangeLanguage } from "./LanguagePicker";
import { DownloadResume } from "./DownloadResume";
import { HeaderGithub } from "./GitHub";

const HeaderSwitchTheme = dynamic(
  () => import("./SwitchTheme").then((module) => module.HeaderSwitchTheme),
  { ssr: false }
);


const Header = (props) => {
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
        <Div width="35%" flex={[, "end"]} css={{ gap: "var(--spacing-3)" }}>
          <DownloadResume />
          <HeaderGithub />
          <HeaderChangeLanguage />
          <HeaderSwitchTheme />
        </Div>
      </Div>
    </Div>
  );
}


            
                
            
            
            
            export default Header;