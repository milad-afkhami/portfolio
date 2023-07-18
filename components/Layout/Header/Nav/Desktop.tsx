import { Div } from "style-wiz";
import HeaderMenuItem from "./Item";
import responsiveStyles from "@helpers/responsiveStyles";
import { navItems, headerNavResponsiveBreakpoint } from "@configs/layout";
import type { FC } from "react";

const HeaderMenu: FC = () => (
  <Div
    display="none"
    styles={responsiveStyles(headerNavResponsiveBreakpoint, {
      display: "flex",
    })}
    gap="6"
  >
    {navItems.map((menu, i) => (
      <HeaderMenuItem key={i} {...menu} />
    ))}
  </Div>
);

export default HeaderMenu;
