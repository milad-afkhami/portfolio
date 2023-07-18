import { forwardRef } from "react";
import { Div } from "style-wiz";
import Adornment from "@kits/Adornment";
import BaseButton from "./Base";
import ButtonText from "./Text";
import type ButtonProps from "./props";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    text = "",
    name,
    loading,
    disabled,
    icon,
    trailingIcon,
    onClick,
    children,
    ns,
  } = props;
  const notAllowed = disabled || loading;

  return (
    <BaseButton
      {...props}
      ref={ref}
      onClick={!notAllowed ? onClick : undefined}
      name={name}
      data-testid="kitButton"
    >
      <Div height="100%" flex={["center", "center"]} gap="2">
        <Adornment icon={icon} />
        <ButtonText text={text} ns={ns} />
        {children}
        <Adornment icon={trailingIcon} />
      </Div>
    </BaseButton>
  );
});

export default Button;
