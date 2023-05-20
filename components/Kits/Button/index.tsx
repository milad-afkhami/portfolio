import { forwardRef } from "react";
import Div from "@kits/Div";
import Adornment from "@kits/Adornment";
import Spinner from "@kits/Spinner";
import { If, Then, Else } from "@kits/ConditionalRendering";
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
    variant = "contained",
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
      <Div height="100%" flex={["center", "center"]} gap="1">
        <If condition={loading}>
          <Then>
            <Spinner size="xsm" light={variant === "contained"} />
          </Then>
          <Else>
            <Adornment icon={icon} />
            <ButtonText text={text} />
            {children}
            <Adornment icon={trailingIcon} />
          </Else>
        </If>
      </Div>
    </BaseButton>
  );
});

export default Button;
