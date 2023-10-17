import { useRef, type FC } from "react";
import { Div } from "style-wiz";
import useOnClickOutside from "@hooks/useOnClickOutside";
import useEventListener from "@hooks/useEventListener";
import HeaderMenuItem from "../Item";
import { navItems } from "@configs/layout";
import __noop from "lodash-es/noop";
import type { NoneToVoidFunction } from "ts-wiz";
// import { DownloadResume } from "../../DownloadResume";

interface HeaderResponsiveMenuListProps {
  rendered: boolean;
  toggleMenu: NoneToVoidFunction;
}

const HeaderResponsiveMenuList: FC<HeaderResponsiveMenuListProps> = (props) => {
  const { rendered, toggleMenu } = props;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, rendered ? toggleMenu : __noop);

  useEventListener("scroll", toggleMenu);

  return (
    <Div
      position="absolute"
      width="100%"
      ref={ref}
      dimensions={{
        left: 0,
        right: 0,
        top: "var(--layout-header-height)",
      }}
      bg="bg-primary-main"
      zIndex="2"
      p="4"
      opacity={rendered ? 1 : 0}
      pace="fast"
      flex={[, , "column"]}
      gap="3"
    >
      {navItems.map((menu) => (
        <HeaderMenuItem key={menu.label} onClick={toggleMenu} {...menu} />
      ))}
      {/* <DownloadResume /> */}
    </Div>
  );
};

export default HeaderResponsiveMenuList;
