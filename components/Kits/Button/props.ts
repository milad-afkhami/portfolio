import { ButtonProps as UiWizButtonProps } from "ui-wiz";
import type { TextProps } from "@kits/Text";

interface ButtonTextProp extends Omit<TextProps, "children"> {
  content?: string;
}

export default interface ButtonProps
  extends UiWizButtonProps,
    Pick<TextProps, "ns"> {
  text?: string | ButtonTextProp;
}
