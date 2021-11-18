import React, { memo } from "react";
import { createPortal } from "react-dom";
import { Div, HR, Icon, Link, Text } from "@kits";
import { useRef, useOnClickOutside, useMemo } from "@hooks";
import { c } from "@stylesheets";

export default function MoreMenuList(props) {
  const { items, onRequestClose, position, closeOnSelect } = props || {};

  const ref = useRef();

  useOnClickOutside(ref, onRequestClose);

  const width = 200;
  const itemHeight = "3.5rem";
  const pad = "8px";

  const left = useMemo(() => {
    const defaultLeft = position.left - width / 2 + "px";
    const maxValue = `calc(100vw - ${width}px - ${pad} - var(--scrollbar-width)))`;
    return `min(${defaultLeft}, ${maxValue}`;
  }, []);

  const top = useMemo(() => {
    const defaultTop = position.top + 20 + "px";
    const listHeight = itemHeight.replace("rem", "") * items.length + "rem";
    const maxValue = `calc(100vh - ${listHeight} - ${pad}))`;
    return `min(${defaultTop}, ${maxValue}`;
  }, []);

  return createPortal(
    <Div
      ref={ref}
      position="fixed"
      dimensions={{ left, top }}
      width={`${width}px`}
      bg="bg-secondary-pale"
      blurBg
      curve="sm"
      overflow="hidden"
      zIndex="2"
    >
      {items.map(({ label, icon, onClick }, i) => (
        <Div
          key={i}
          onClick={(e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(e);
            if (closeOnSelect) onRequestClose();
          }}
          height={itemHeight}
          cursor="pointer"
          hoverBg="bg-secondary-paler"
          px="2"
          // css={i !== 0 ? { borderTop: `1px solid ${c("border-dark")}` } : {}}
        >
          {i !== 0 ? <HR m="0 2" /> : null}
          <Div flex={["center", "start"]} height="100%">
            <Icon name={icon} size="24" mx="1" />
            <Text size="sm" mx="1">
              {label}
            </Text>
          </Div>
        </Div>
      ))}
    </Div>,
    document.getElementById("more-menu__list") || document.body
  );
}
