import { styled } from "goober";
import classNames from "@utils/classnames";
import colorVar from "@stylesheets/utils/var/color";
import fontSizeVar from "@stylesheets/utils/var/fontSize";
import type { FC } from "react";
import type IconProps from "./props";

const IconElement = styled("i")<
  Pick<
    IconProps,
    "size" | "bold" | "onClick" | "color" | "disabled" | "css" | "hoverColor"
  >
>(({ size = "lg", bold, onClick, color, disabled, css, hoverColor }) => ({
  fontSize: fontSizeVar(size),
  fontWeight: bold ? "bold" : undefined,
  cursor: onClick ? "pointer" : "unset",
  transition: `all var(--pace-x-fast)`,
  ...(color
    ? { color: colorVar(disabled ? "text-disabled-main" : color) }
    : {}),
  ...(hoverColor && !disabled
    ? { "&:hover": { color: colorVar("text-disabled-main") } }
    : {}),
  ...css,
}));

const Icon: FC<IconProps> = (props) => {
  const {
    prefix = "icon",
    suffix = "",
    name,
    multiDirection,
    className = "",
  } = props;
  const _prefix = prefix ? `${prefix}-` : "";
  const _suffix = suffix ? `-${suffix}` : "";
  const _name = `${_prefix}${name}${_suffix}`;
  const _dir = multiDirection ? "icon-dir" : null;
  const _className = classNames(_name, _dir, className);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconElement {...props} title={name} className={_className} />;
};

export default Icon;
