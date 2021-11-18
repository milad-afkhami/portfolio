import React from "react";
import { Div, Icon, Text } from "@kits";
import { useState, useDispatch, useSelector } from "@hooks";

export const MoreButton = (props) => {
  const { filledIcon, open, onClick, id } = props || {};

  return (
    <Icon
      id={id}
      name={filledIcon || open ? "more-circle" : "more1"}
      size="32"
      mx="2"
      title="art.actions.moreMenu"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
    />
  );
};
