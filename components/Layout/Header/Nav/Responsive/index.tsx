import Div from "@kits/Div";
import MenuToggler from "./Toggler";
import HeaderResponsiveMenuList from "./List";
import useDelayedRender from "use-delayed-render";
import useToggle from "@hooks/useToggle";
import { headerNavResponsiveBreakpoint } from "@configs/layout";
import type { FC } from "react";

const HeaderResponsiveMenu: FC = () => {
  const [menuOpen, toggleMenu] = useToggle(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    menuOpen,
    { enterDelay: 20, exitDelay: 300 }
  );

  return (
    <Div
      display="flex"
      responsive={{ [headerNavResponsiveBreakpoint]: { display: "none" } }}
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
