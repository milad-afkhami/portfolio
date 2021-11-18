import React from "react";
import { Div, Icon, Text } from "@kits";
import { useMemo } from "@hooks";

interface Props {
  label?: string;
  titleElement?: JSX.Element;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  error?: any;
}

export function CheckBox(props: Props) {
  const { label, name, checked, onChange, disabled, error } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    if (!disabled) onChange?.(!checked);
  };

  const bgColor = useMemo(() => {
    return checked ? (disabled ? "text-disabled" : "brand") : "transparent";
  }, [disabled, checked]);

  const cursor = disabled ? "not-allowed" : "pointer";

  return (
    <Div flex={["start", , "column"]}>
      <Div onClick={handleClick} cursor={cursor} flex={["center"]}>
        <input
          type="checkbox"
          hidden
          name={name}
          checked={checked}
          onClick={(e) => e.stopPropagation()}
        />
        <Div
          width="24px"
          height="24px"
          curve="xsm"
          border={checked ? "" : "border-dark"}
          bg={bgColor}
          flex={["center", "center"]}
        >
          <Icon
            cursor={cursor}
            name="check-double-line"
            size="24"
            color={"bg-primary"}
            opacity={checked ? "1" : "0"}
          />
        </Div>
        <Div px="1" width="100%" css={{ userSelect: "none" }}>
          {label ? (
            <Text color={disabled ? "text-disabled" : "text-primary"} size="sm">
              {label}
            </Text>
          ) : null}
        </Div>
      </Div>
      <Div height="1rem" flex={["center"]}>
        {error ? (
          <Text color="assistive-error" size="xxsm">
            {error}
          </Text>
        ) : null}
      </Div>
    </Div>
  );
}
