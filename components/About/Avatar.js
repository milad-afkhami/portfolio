import React from "react";
import { Div, Image } from "@kits";
import { logoLg } from "@images";

export function AboutAvatar(props) {
  return (
    <Div flex={[, "center"]}>
      {/* <abbr title=\"World Health Organization\"> */}
      <Div
        width="11rem"
        height="11rem"
        curve="circle"
        bg="brand"
        position="relative"
        overflow="hidden"
        mb="3"
      >
        {/* <Image src={logoLg} layout="fill" fit="cover" maximizable /> */}
      </Div>
    </Div>
  );
}
