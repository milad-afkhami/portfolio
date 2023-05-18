import Div from "@kits/Div";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import breakpoints from "@stylesheets/constants/breakpoints.json";
import type { FC } from "react";

const HeaderResponsiveMenu = dynamic(() => import("./Responsive"), {
  ssr: false,
});
const HeaderMenu = dynamic(() => import("./Desktop"), { ssr: false });

const HeaderNav: FC = () => {
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
