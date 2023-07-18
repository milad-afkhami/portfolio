import type { TextProps } from "style-wiz";

// prettier-ignore
// export type IconName = "github" | "code" | "moon" | "hash" | "nested-list" | "clock" | "time" | "history" | "list" | "info" | "headphones" | "music" | "song" | "film" | "show" | "book" | "suitcase" | "sun" | "download" | "copy-outline" | "focus-center" | "timeline" | "calendar" | "gallery" | "tools" | "measure" | "education" | "chevron-right" | "whatsapp" | "telegram" | "skype" | "linkedin" | "email";
export type IconName =  "external-link" | "close" | "warning-outlined" | "check" | "info-outlined" | "github" | "code" | "moon" | "hash" | "nested-list" | "clock" | "time" | "history" | "list" | "info" | "headphones" | "music" | "song" | "film" | "show" | "book" | "suitcase" | "sun" | "warning" | "check-outlined" | "education" | "download" | "copy-outline" | "focus-center" | "timeline" | "calendar" | "gallery" | "tools" | "measure" | "chevron-right" | "whatsapp" | "telegram" | "skype" | "linkedin" | "email"

export type PickedTextProps = Pick<
  TextProps,
  "color" | "size" | "styles" | "bold" | "className" | "onClick"
>;

export default interface IconProps extends PickedTextProps {
  name: IconName;
  prefix?: string;
  suffix?: string;
  multiDirection?: boolean;
  disabled?: boolean;
}
