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
          <Div as="img" src="/images/avatar.jpg" matchParent />
        ) : (
          <Image
            src="/images/avatar.jpg"
            placeholder="blur"
            blurDataURL="/images/avatar.jpg"
            layout="fill"
            fit="cover"
            maximizable
          />
        )}
      </Div>
    </Div>
  );
}
