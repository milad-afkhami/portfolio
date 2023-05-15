import { forwardRef } from "react";
import Div from "@kits/Div";
import Adornment from "@kits/Adornment";
import Spinner from "@kits/Spinner";
import { Else, If, Then } from "@kits/ConditionalRendering";
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
      // eslint-disable-next-line react/jsx-props-no-spreading
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