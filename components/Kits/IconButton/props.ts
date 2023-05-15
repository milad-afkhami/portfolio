import type IconProps from "@kits/Icon/props";

export default interface IconButtonProps extends IconProps {
  type?: "default" | "outlined";
  disabled?: boolean;
}
