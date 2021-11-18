import React from "react";
import { Div } from "@kits";
import { useState, useMemo, useDeviceDetect } from "@hooks";
import { MoreButton } from "./MoreButton";
import dynamic from "next/dynamic";
import { __pick } from "@utils";

const DesktopMoreMenuList = dynamic(() => import("./MoreMenuList.desktop"));
const MobileMoreMenuList = dynamic(() => import("./MoreMenuList.mobile"));

export const MoreMenu = (props) => {
  const { items, filledIcon, closeOnSelect = true } = props || {};
  const { isMobile } = useDeviceDetect();
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const listProps = useMemo(
    () => ({
      items,
      onRequestClose: () => setShowMenu(false),
      position: { left: menuPosition.x, top: menuPosition.y },
      closeOnSelect,
    }),
    [menuPosition.x, menuPosition.y, items?.length]
  );

  return (
    <Div position="relative" flex={["center", "center"]}>
      <MoreButton
        open={showMenu}
        filledIcon={filledIcon}
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(true);
          setMenuPosition(__pick(e.nativeEvent, ["x", "y"]));
        }}
      />
      {showMenu ? (
        isMobile ? (
          <MobileMoreMenuList {...listProps} />
        ) : (
          <DesktopMoreMenuList {...listProps} />
        )
      ) : null}
    </Div>
  );
};
