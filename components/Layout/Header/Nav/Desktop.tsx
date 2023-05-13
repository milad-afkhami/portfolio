import Div from "@kits/Div";
import HeaderMenuItem from "./Item";
import { navLinks } from "@config";

const HeaderMenu = (props) => {
  return (
    <Div display="flex" mx="-3">
      {navLinks.map((menu, i) => (
        <HeaderMenuItem key={i} {...menu} />
      ))}
    </Div>
  );
};

export default HeaderMenu;
