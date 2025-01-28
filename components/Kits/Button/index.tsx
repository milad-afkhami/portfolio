import { Button as UiWizButton } from "ui-wiz";
import { forwardRef, isValidElement } from "react";
import ButtonText from "./Text";
import type ButtonProps from "./props";

const getIcon = (icon: ButtonProps["icon"]) => {
  if (!icon) return undefined;
  if (typeof icon === "string")
    return { name: icon, prefix: "mili", suffix: "icon" };
  if (typeof icon === "object")
    return { ...icon, prefix: "mili", suffix: "icon" };
  if (isValidElement(icon)) return icon;
  return icon;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { name, children, text, ns, icon, trailingIcon, ...rest } = props;

  return (
    <UiWizButton
      icon={getIcon(icon)}
      trailingIcon={getIcon(trailingIcon)}
      {...rest}
      ref={ref}
    >
      <ButtonText ns={ns} text={text} />
      {children}
    </UiWizButton>
  );
});

export default Button;
