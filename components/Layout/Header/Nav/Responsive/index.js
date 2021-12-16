import React from "react";
import { Div } from "@kits";
import { useToggle, useDelayedRender } from "@hooks";
import { MenuToggler } from "./Toggler";
import { HeaderResponsiveMenuList } from "./List";

export default function HeaderResponsiveMenu(props) {
  const [menuOpen, toggleMenu] = useToggle(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    menuOpen,
    { enterDelay: 20, exitDelay: 300 }
  );

  return (
    <Div display="flex">
      <MenuToggler open={menuOpen} toggle={toggleMenu} />
      {isMenuMounted && <HeaderResponsiveMenuList rendered={isMenuRendered} />}
    </Div>
  );
}
