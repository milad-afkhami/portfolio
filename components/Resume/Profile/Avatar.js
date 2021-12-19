import React from "react";
import { Div, Image } from "@kits";
import { logoLg } from "@images";

export function ResumeProfileAvatar(props) {
  return (
    <Div flex={[, "center"]}>
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
