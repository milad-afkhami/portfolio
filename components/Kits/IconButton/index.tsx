import Div from "@kits/Div";
import Icon from "@kits/Icon";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";
import type IconButtonProps from "./props";

const IconButton: FC<IconButtonProps> = (props) => {
  const { onClick, type = "default", disabled, ...rest } = props;

  return (
    <Div
      flex={["center", "center"]}
      width="var(--icon-button-height)"
      height="var(--icon-button-height)"
      mw="var(--icon-button-height)"
      mh="var(--icon-button-height)"
      curve={type === "default" ? "circle" : "sm"}
      border={type === "outlined" ? "brand-main" : undefined}
      {...(!disabled
        ? {
            onClick,
            cursor: "pointer",
            responsive: {
              [responsiveUpperBoundBreakpoint]: { hoverBg: "bg-primary-dark" },
            },
          }
        : {})}
    >
      <Icon disabled={disabled} {...rest} />
    </Div>
  );
};

export default IconButton;
