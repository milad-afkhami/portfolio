import React from "react";
import { Div, Image } from "@kits";

export const DropDownImage = (props) => {
  const { src } = props || {};

  return src ? (
    <Div flex={["center", "center"]} mx="2">
      <Image src={src} width="20px" height="20px" quality={1} />
    </Div>
  ) : null;
};
