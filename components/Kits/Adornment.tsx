// #region imports
import { isValidElement, type FC, type ReactElement } from "react";
import { Div } from "style-wiz";
import Icon from "@kits/Icon";
import type IconProps from "@kits/Icon/props";
// #endregion

export interface AdornmentProp {
  icon?: IconProps["name"] | IconProps | ReactElement;
}

const Adornment: FC<AdornmentProp> = function (props) {
  const { icon } = props;

  if (!icon) return null;

  const size = "20px" as IconProps["size"];

  if (typeof icon === "string") {
    return (
      <Div mw={size as string} flex={["center", "center"]}>
        <Icon name={icon} size={size} />
      </Div>
    );
  }
  if (typeof icon === "object") {
    if (isValidElement(icon)) {
      return icon;
    }
    if ("name" in icon) {
      return (
        <Div mw={size as string} flex={["center", "center"]}>
          <Icon size={size} {...icon} />
        </Div>
      );
    }
  }
  return null;
};

export default Adornment;
