import React from "react";
import { Div, Image } from "@kits";

export function AboutAvatar(props) {
  return (
    <Div flex={[, "center"]}>
      <Div
        width="11rem"
        height="11rem"
        curve="circle"
        position="relative"
        overflow="hidden"
        mb="3"
      >
        {props.static ? (
          <Div as="img" src="/images/me.jpg" matchParent />
        ) : (
          <Image
            src="/images/me.jpg"
            placeholder="blur"
            blurDataURL="/images/me.jpg"
            layout="fill"
            fit="cover"
            maximizable
          />
        )}
      </Div>
    </Div>
  );
}
