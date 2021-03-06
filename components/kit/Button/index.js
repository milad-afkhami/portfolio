import React from "react";
import { Div, Text, Icon } from "@kits";
import { useEffect, usePrevious, useToggle } from "@hooks";
import { StyledButton } from "./StyledButton";
import { noop } from "@utils";

/**
 * @typedef {("lg"|"md")} Size
 * @typedef {("button" | "submit" | "reset")} Type
 * @typedef {("primary" | "outlined" | "link")} Variant
 * @typedef {import('@kits/Icon').IconProps} Icon
 *
 * @typedef {{ size:Size, type:Type, variant:Variant, text:string, loading:boolean, hasSuccessState:boolean, disabled:boolean, onClick:Function, icon:Icon, trailingIcon:Icon, block:boolean, width:string }} ButtonProps
 *
 * @component - Renders a button element with needed styles and functionalities
 * @type {import("react").ComponentType<ButtonProps>}
 * @param {ButtonProps} props
 */
export const Button = function ({
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
}) {
  const [success, setSuccess] = useToggle(false);

  const prevLoading = usePrevious(loading);
  useEffect(() => {
    // when loading has changed from true to false and we have no error
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
        css={{ transitionDelay: "var(--pace-fast)" }}
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
      {/* <Div height="100%" flex={["center", "center"]} css={{ transitionDelay: "var(--pace-fast)" }}><Spinner size="xsm" /></Div> */}
      {hasSuccessState && (
        <Div height="100%" flex={["center", "center"]}>
          <Icon name="checkmark" size="30" />
        </Div>
      )}
    </StyledButton>
  );
};
