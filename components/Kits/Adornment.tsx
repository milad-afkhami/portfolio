// #region imports
import { isValidElement, type FC, type ReactElement } from "react";
import Icon from "@kits/Icon";
import type IconProps from "@kits/Icon/props";
// #endregion

export type AdornmentProp = {
  icon?: IconProps["name"] | IconProps | ReactElement;
};

const Adornment: FC<AdornmentProp> = function (props) {
  const { icon } = props;

  if (!icon) return null;

  const size = "20px" as IconProps["size"];

  if (typeof icon === "string") {
    return <Icon name={icon} size={size} />;
  }
  if (typeof icon === "object") {
    if (isValidElement(icon)) {
      return icon;
    }
    if ((icon as IconProps).name) {
      return <Icon size={size} {...(icon as IconProps)} />;
    }
  }
  return null;
};

export default Adornment;
