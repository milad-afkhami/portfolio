import Div from "@kits/Div";
import HeaderMenuItem from "./Item";
import { navItems } from "@configs/layout";
import type { FC } from "react";

const HeaderMenu: FC = () => (
  <Div display="flex" mx="-3">
    {navItems.map((menu, i) => (
      <HeaderMenuItem key={i} {...menu} />
    ))}
  </Div>
);

export default HeaderMenu;
