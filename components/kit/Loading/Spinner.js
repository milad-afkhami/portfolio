import React from "react";
import { Div, Text, Image } from "@kits";
import { spinner } from "@images";

type SpinnerProps = {
  size: "xsm" | "sm" | "md" | "lg",
  width: Number | String,
  height: Number | String,
};

export const Spinner = (props: SpinnerProps) => {
  const { size = "sm", width, height } = props || {};

  const sizes = { xsm: 30, sm: 50, md: 75, lg: 125 };

  return (
    <Image
      src={spinner}
      height={height || sizes[size]}
      width={width || sizes[size]}
      priority
    />
  );
};
