import type { HTMLAttributes } from "react";
import type { CSSAttribute } from "goober";

// prettier-ignore
export type IconName = "close" | "check" | "quote" | "chair" | "design" | "hanger" | "info" | "laptop" | "miscellaneous-services" | "mouse" | "paste-check" | "restaurant" | "scissors" | "store" | "trending-up" | "chart" | "dashboard" | "document" | "emoji-happy" | "lamp" | "linkedin" | "menu-ticked" | "message" | "paste" | "people" | "person" | "premium-badge" | "tag" | "telegram" | "arrow-back" | "article" | "box" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "desktop" | "document-scanner" | "exit" | "instagram" | "install" | "location" | "mail" | "menu" | "menu-tick" | "people" | "phone" | "phone-setup" | "price-change" | "print" | "question-mark" | "shopping-bag" | "support-agent" | "warehouse" | "whatsapp" | "android" | "apple" | "windows" | "warning" | "check-outlined" | "info-outlined" | "download";

export default interface IconProps extends HTMLAttributes<Element> {
  name: IconName;
  prefix?: string;
  suffix?: string;
  color?: Colors;
  hoverColor?: Colors;
  size?: Typography | CSSAttribute["fontSize"];
  bold?: boolean;
  multiDirection?: boolean;
  disabled?: boolean;
  css?: CSSAttribute;
}
