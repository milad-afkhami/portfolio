import Div from "@kits/Div";
import Text from "@kits/Text";
import Icon from "@kits/Icon";
import { useEffect } from "react";
import useToggle from "@hooks/useToggle";
import usePrevious from "@hooks/usePrevious";
import StyledButton from "./StyledButton";
import __noop from "lodash-es/noop";

/**
 * @typedef {("lg"|"md")} Size
 * @typedef {("primary" | "outlined" | "link")} Variant
 * @typedef {import('@kits/Icon').IconProps} Icon
 *
 * @typedef {{ size:Size, variant:Variant, text:string, loading:boolean, hasSuccessState:boolean, icon:Icon, trailingIcon:Icon, block:boolean, fixedWidth:boolean, width:string, height:string }&ButtonHTMLAttributes} ButtonProps
 *
 * @component - Renders a button element with needed styles and functionalities
 * @type {import("react").ComponentType<ButtonProps>}
 * @param {ButtonProps} props
 */

const Button = function (props) {
  const {
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
  } = props;

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
      {...props}
      onClick={notAllowed ? __noop : onClick}
      cursor={notAllowed ? "default" : "pointer"}
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

export default Button;
