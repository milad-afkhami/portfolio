import Div from "@kits/Div";
import { useRef, useOnClickOutside, useEventListener } from "@hooks";
import { HeaderMenuItem } from "../Item";
import { navLinks } from "@config";
import { noop } from "@utils";
// import { DownloadResume } from "../../DownloadResume";

const HeaderResponsiveMenuList = (props) => {
  const { rendered, onRequestClose } = props || {};

  const ref = useRef();
  useOnClickOutside(ref, rendered ? onRequestClose : noop);

  useEventListener("scroll", onRequestClose);

  return (
    <Div
      position="absolute"
      width="100vw"
      ref={ref}
      dimensions={{
        left: 0,
        right: 0,
        top: "var(--layout-header-height)",
      }}
      bg="bg-primary"
      zIndex="2"
      p="2 4"
      opacity={rendered ? 1 : 0}
      pace="fast"
    >
      {navLinks.map((menu, i) => (
        <HeaderMenuItem key={i} onClick={onRequestClose} {...menu} />
      ))}
      {/* <DownloadResume /> */}
    </Div>
  );
};

export default HeaderResponsiveMenuList;
