import React from "react";
import { Div, Text, Icon, HR } from "@kits";
import { BottomSheet } from "../BottomSheet";

export default function MoreMenuList(props) {
  const { items, title, onRequestClose, closeOnSelect } = props || {};

  return (
    <BottomSheet
      open
      onDismiss={onRequestClose}
      title={title}
      snapPoints={({ maxHeight }) => [(2 / 3) * maxHeight]}
    >
      {items.map(({ label, icon, onClick }, i) => (
        <Div
          key={i}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(e);
            if (closeOnSelect) onRequestClose();
          }}
          height="3.5rem"
          cursor="pointer"
          hoverBg="bg-secondary-paler"
          px="2"
          // css={i !== 0 ? { borderTop: `1px solid ${c("border-dark")}` } : {}}
        >
          {i !== 0 ? <HR m="0 2" /> : null}
          <Div flex={["center", "start"]} height="100%">
            <Icon name={icon} size="26" mx="1" />
            <Text size="md" mx="1">
              {label}
            </Text>
          </Div>
        </Div>
      ))}
    </BottomSheet>
  );
}
