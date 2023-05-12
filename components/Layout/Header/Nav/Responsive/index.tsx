import Div from "@kits/Div";
import { useToggle, useDelayedRender } from "@hooks";
import { MenuToggler } from "./Toggler";
import { HeaderResponsiveMenuList } from "./List";



const HeaderResponsiveMenu = (props) => {
  const [menuOpen, toggleMenu] = useToggle(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    menuOpen,
    { enterDelay: 20, exitDelay: 300 }
  );

  return (
    <Div display="flex">
      <MenuToggler open={isMenuMounted} toggle={toggleMenu} />
      {isMenuMounted && (
        <HeaderResponsiveMenuList
          rendered={isMenuRendered}
          onRequestClose={toggleMenu}
        />
      )}
    </Div>
  );
}

            
                
            
            
            
            export default HeaderResponsiveMenu;