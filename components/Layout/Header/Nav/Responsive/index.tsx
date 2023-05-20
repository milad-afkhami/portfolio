import Div from "@kits/Div";
import useDelayedRender from "use-delayed-render";
import useToggle from "@hooks/useToggle";
import MenuToggler from "./Toggler";
import HeaderResponsiveMenuList from "./List";
import type { FC } from "react";
import { responsiveUpperBoundBreakpoint } from "@configs/general";

const HeaderResponsiveMenu: FC = () => {
  const [menuOpen, toggleMenu] = useToggle(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    menuOpen,
    { enterDelay: 20, exitDelay: 300 }
  );

  return (
    <Div
      display="flex"
      responsive={{ [responsiveUpperBoundBreakpoint]: { display: "none" } }}
    >
      <MenuToggler open={isMenuMounted} toggle={toggleMenu} />
      {isMenuMounted && (
        <HeaderResponsiveMenuList
          rendered={isMenuRendered}
          toggleMenu={toggleMenu}
        />
      )}
    </Div>
  );
};

export default HeaderResponsiveMenu;
