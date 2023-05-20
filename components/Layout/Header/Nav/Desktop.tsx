import Div from "@kits/Div";
import HeaderMenuItem from "./Item";
import { navItems } from "@configs/layout";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";

const HeaderMenu: FC = () => (
  <Div
    display="none"
    responsive={{ [responsiveUpperBoundBreakpoint]: { display: "flex" } }}
    gap="6"
  >
    {navItems.map((menu, i) => (
      <HeaderMenuItem key={i} {...menu} />
    ))}
  </Div>
);

export default HeaderMenu;
