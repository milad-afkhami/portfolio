import React from "react";
import { Div } from "@kits";
import { DropDownImage } from "./Image";
import { DropDownLabel } from "./Label";

export const DropDownItem = (props) => {
  const { image, text, id, onClick } = props || {};

  return (
    <Div
      flex={["center", "start"]}
      height="2.5rem"
      cursor="pointer"
      hoverBg="bg-tertiary"
      px="1"
      onClick={onClick}
    >
      <DropDownImage src={image} />
      <DropDownLabel label={text} />
    </Div>
  );
};
