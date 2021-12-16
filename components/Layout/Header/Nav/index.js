import React from "react";
import { Div } from "@kits";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@hooks";
import { breakpoints } from "@stylesheets";

const HeaderResponsiveMenu = dynamic(() => import("./Responsive"), {
  ssr: false,
});
const HeaderMenu = dynamic(() => import("./Desktop"), { ssr: false });

export function HeaderNav(props) {
  const isBigScreen = useMediaQuery({
    query: `(min-width: ${breakpoints.md}px)`,
  });
  const isSmallOrMediumScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.md}px)`,
  });

  return (
    <Div display="flex">
      {isSmallOrMediumScreen && <HeaderResponsiveMenu />}
      {isBigScreen && <HeaderMenu />}
    </Div>
  );
}
