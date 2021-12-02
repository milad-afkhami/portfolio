import React from "react";
import { Div, Text, Icon, Spinner } from "@kits";
import { IconProps } from "@kits/Icon";
import { useEffect, usePrevious, useToggle } from "@hooks";
import { StyledButton } from "./StyledButton";
import { noop } from "@utils";
import { paces } from "@stylesheets";

type Props = {
  size: "lg" | "md" | "sm",
  variant: "primary" | "outlined" | "link",
  type: "button" | "submit" | "reset",
  text?: String,
  loading?: Boolean,
  hasSuccessState?: Boolean,
  disabled?: Boolean,
  onClick?: Function,
  icon?: IconProps | String,
  trailingIcon?: IconProps | String,
  block?: Boolean,
  width?: String,
};

const Button = function ({
  size,
  variant = "primary",
  text = "",
  loading,
  hasSuccessState,
  disabled,
  error,
  icon,
  trailingIcon,
  onClick,
  block,
  type,
  ...rest
}: Props) {
  const [success, setSuccess] = useToggle(false);

  const prevLoading = usePrevious(loading);
  useEffect(() => {
    // when loading was true and now it's not and we have no error
    if (hasSuccessState && prevLoading & !loading && !error) {
      setSuccess();
      var to = setTimeout(setSuccess, 1500);
    }
    return () => to && clearTimeout(to);
  }, [loading]);

  const notAllowed = disabled || loading || success;
  return (
    <StyledButton
      onClick={notAllowed ? noop : onClick}
      cursor={notAllowed ? "not-allowed" : "pointer"}
      size={size}
      variant={variant}
      loading={loading ? "true" : undefined}
      disabled={disabled}
      block={block}
      type={type}
      {...rest}
    >
      <Div
        height="100%"
        flex={["center", "center"]}
        css={{ transitionDelay: `${paces.fast}` }}
      >
        {icon ? (
          typeof icon === "string" ? (
            <Icon name={icon} size="24" />
          ) : typeof icon === "object" && icon?.name ? (
            <Icon size="24" {...icon} />
          ) : (
            icon
          )
        ) : null}
        {/* <Icon size="24" {...(typeof icon === "object" ? icon : { name: icon })} /> */}
        {text && <Text mx="1">{text}</Text>}
        {trailingIcon ? (
          <Icon
            size="24"
            {...(typeof trailingIcon === "object"
              ? trailingIcon
              : { name: trailingIcon })}
          />
        ) : null}
      </Div>
      <Div
        height="100%"
        flex={["center", "center"]}
        css={{ transitionDelay: `${paces.fast}` }}
      >
        <Spinner size="xsm" />
      </Div>
      {hasSuccessState && (
        <Div height="100%" flex={["center", "center"]}>
          <Icon name="checkmark" size="30" />
        </Div>
      )}
    </StyledButton>
  );
};

export { Button };
