import Div from "@kits/Div";
import dynamic from "next/dynamic";
import type { FC } from "react";

const HeaderResponsiveMenu = dynamic(() => import("./Responsive"));
const HeaderMenu = dynamic(() => import("./Desktop"));

const HeaderNav: FC = () => (
  <Div display="flex">
    <HeaderResponsiveMenu />
    <HeaderMenu />
  </Div>
);

export default HeaderNav;
