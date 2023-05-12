import Div from "@kits/Div";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@hooks";
import { breakpoints } from "@stylesheets";

const HeaderResponsiveMenu = dynamic(() => import("./Responsive"), {
  ssr: false,
});
const HeaderMenu = dynamic(() => import("./Desktop"), { ssr: false });

const HeaderNav = (props) => {
  const isBigScreen = useMediaQuery({ minWidth: breakpoints.md });
  const isSmallOrMediumScreen = useMediaQuery({ maxWidth: breakpoints.md });

  return (
    <Div display="flex">
      {isSmallOrMediumScreen && <HeaderResponsiveMenu />}
      {isBigScreen && <HeaderMenu />}
    </Div>
  );
};

export default HeaderNav;
