import React from "react";
import { Div, Text } from "@kits";

export const TabPanel = (props: ITabs) => {
  const { children, active, effect } = props || {};

  return (
    <Div
      width="100%"
      height="100%"
      active={active}
      {...(effect === "fade"
        ? {
            position: "absolute",
            pace: "fast",
            ...(active ? { zIndex: 2 } : { zIndex: -1, opacity: 0 }),
          }
        : effect === "suddenly" && !active
        ? { display: "none" }
        : {})}
    >
      {children}
    </Div>
  );
};
