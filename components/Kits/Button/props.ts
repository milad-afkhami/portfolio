import type TextProps from "@kits/Text/props";
import type { ButtonHTMLAttributes } from "react";
import type { AdornmentProp } from "@kits/Adornment";

interface ButtonTextProp extends Omit<TextProps, "children"> {
  content?: string;
}
export default interface ButtonProps extends ButtonHTMLAttributes<Element> {
  size?: "lg" | "md";
  variant?: "text" | "contained" | "outlined";
  text?: string | ButtonTextProp;
  loading?: boolean;
  disabled?: boolean;
  hasSuccessState?: boolean;
  icon?: AdornmentProp["icon"];
  trailingIcon?: AdornmentProp["icon"];
  block?: boolean;
  width?: string;
  fixedWidth?: boolean;
  height?: string;
  ns?: TextProps["ns"];
}
