import Div from "@kits/Div";
import HeaderMenuItem from "./Item";
import { navItems, headerNavResponsiveBreakpoint } from "@configs/layout";
import type { FC } from "react";

const HeaderMenu: FC = () => (
  <Div
    display="none"
    responsive={{ [headerNavResponsiveBreakpoint]: { display: "flex" } }}
    gap="6"
  >
    {navItems.map((menu, i) => (
      <HeaderMenuItem key={i} {...menu} />
    ))}
  </Div>
);

export default HeaderMenu;
