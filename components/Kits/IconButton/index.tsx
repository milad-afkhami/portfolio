import Icon from "@kits/Icon";
import StyledIconButtonWrapper from "./Styled";
import type { FC } from "react";
import type IconButtonProps from "./props";

const IconButton: FC<IconButtonProps> = (props) => {
  const { onClick, type, disabled, ...rest } = props;

  return (
    <StyledIconButtonWrapper
      type={type}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      <Icon disabled={disabled} {...rest} />
    </StyledIconButtonWrapper>
  );
};

export default IconButton;
