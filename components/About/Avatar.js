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
        // bg="brand"
        position="relative"
        overflow="hidden"
        mb="3"
      >
        <Image
          src="/images/me.jpg"
          placeholder="blur"
          blurDataURL="/images/me.jpg"
          layout="fill"
          fit="cover"
          maximizable
        />
      </Div>
    </Div>
  );
}
