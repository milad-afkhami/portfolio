import React, { ComponentType } from "react";
import { Text, Div, Icon } from "@kits";
import { Input } from "@material/react-text-field";
import StyledInput from "./StyledInput";
import { InputTrailingIcon } from "./Icons";
import { InputProps } from "./InputProps";
import { c } from "@stylesheets";
import { __cloneDeep } from "@utils";
import { setInputNumberValue } from "@helpers";
import { useState, useEffect, usePrevious, useTranslation } from "@hooks";

const TextField: ComponentType<InputProps> = React.forwardRef((props, ref) => {
  const t = useTranslation().t;

  const {
    element = "input",
    type = "text",
    name,
    size = "lg",
    color = "primary",
    label,
    placeholder = "",
    onChange = () => {},
    onBlur = () => {},
    disabled,
    className = "",
    error,
    autoComplete,
    successMessage = "",
    hint = "",
    leadingIcon = "",
    onClear,
    onSend,
    value,
    ...rest
  } = props;
  const [success, setSuccess] = useState(false);

  const handleChange = (_e) => {
    const e = __cloneDeep(_e);
    let value = e.target.value;

    if (type !== "enhancedNumber") return onChange(e, value);
    value = Number(setInputNumberValue(value)) || "";
    e.target.value = value;
    return onChange(e, value);
  };

  // show success if input was in error state and passed it
  const prevError = usePrevious(error);
  useEffect(() => {
    if (prevError && !error) setSuccess(true);
    else if (success) setSuccess(false);
  }, [error]);

  const fieldType = type === "number" ? type : "text";

  const inputState = error
    ? { text: error.message, color: "assistive-error" }
    : success
    ? { text: successMessage, color: "assistive-success" }
    : { text: hint, color: "assistive-info" };

  const height = (size === "lg" ? 3.5 : 3) + "rem";

  return (
    <Div position="relative" height={`calc(${height} + 1.5rem)`}>
      <Div position="relative">
        {leadingIcon ? (
          <Div
            position="absolute"
            zIndex="1"
            dimensions={{ insetInlineStart: "1rem" }}
            flex={["center", "center"]}
            height="100%"
          >
            <Icon
              name={leadingIcon}
              size="24"
              flex={["center", "center"]}
              color={c("text-tertiary").imp().static()}
              hoverColor={"none".static()}
            />
          </Div>
        ) : null}
        <StyledInput
          leadingIcon={leadingIcon}
          label={t(label || "")}
          placeholder={t(placeholder || "")}
          variant="filled"
          className={`${className} material-text-field`}
          color="text-secondary"
          disabled={disabled}
          error={error}
          success={success}
          size={size}
          height={height}
          stateColor={inputState.color}
        >
          <Input
            disabled={disabled}
            {...rest}
            value={value}
            ref={ref}
            type={fieldType}
            onBlur={onBlur}
            onChange={handleChange}
            autoComplete={autoComplete ? "on" : "off"}
          />
        </StyledInput>
        {onClear && value && (
          <InputTrailingIcon
            name="dismiss"
            onClick={() => onClear("")}
            height={height}
          />
        )}
        {onSend && (
          <InputTrailingIcon
            disabled={!value}
            name="arrow-right"
            size="lg-b"
            onClick={() => onSend(value)}
            height={height}
          />
        )}
      </Div>
      <Text
        as="p"
        size="xsm"
        height="1.5rem"
        pt="1"
        pStart="2"
        color={inputState.color}
      >
        {inputState.text}
      </Text>
    </Div>
  );
});

export { TextField as Input };
