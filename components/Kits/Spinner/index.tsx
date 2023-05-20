import SpinnerIcon from "./Icon";
import type { FC } from "react";

type SpinnerProps = {
  size?: "xsm" | "sm" | "md" | "lg";
  light?: boolean;
};
const Spinner: FC<SpinnerProps> = function (props) {
  const { size = "sm", light = false } = props;

  const sizes = { xsm: 16, sm: 24, md: 36, lg: 60 };

  return (
    <SpinnerIcon
      size={sizes[size]}
      color={light ? "bg-primary-main" : "brand-main"}
    />
  );
};

export default Spinner;
