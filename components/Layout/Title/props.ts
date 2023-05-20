import type IconProps from "@kits/Icon/props";
import type TextProps from "@kits/Text/props";

interface BaseTitleProps {
  title?: string;
  tag?: TextProps["as"];
  ns?: TextProps["ns"];
}

export type PageTitleProps = BaseTitleProps;

export interface SectionTitleProps extends BaseTitleProps {
  icon?: IconProps["name"];
}
