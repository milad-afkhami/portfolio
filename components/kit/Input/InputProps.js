import { MaterialInputProps } from "@material/react-text-field";

export interface InputProps extends DivProps, MaterialInputProps {
  element: "input" | "textarea";
  size?: "lg" | "sm";
  type?: "text" | "number" | "password" | "enhancedNumber";
  name: String;
  value?: String;
  color?: "primary";
  label: String;
  placeholder?: String;
  onChange: () => {};
  onBlur?: () => {};
  onClear?: () => {};
  disabled?: Boolean;
  leadingIcon?: String;
  onSend?: Function;
}
