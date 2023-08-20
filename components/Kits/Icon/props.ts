import type { TextProps } from "style-wiz";

// prettier-ignore
export type IconName = "tools" | "close" | "warning" | "check-outlined" | "education" | "focus-center" | "gallery" | "whatsapp" | "telegram" | "skype" | "linkedin" | "email" | "info-outlined" | "document" | "github" | "code" | "moon" | "hash" | "nested-list" | "clock" | "list" | "info" | "music" | "song" | "show" | "book" | "suitcase" | "sun" | "external-link" | "download" | "copy-outlined" | "timeline" | "calendar" | "chevron-right";
// type IconName = ValueOf<(typeof iconsSelection)["icons"]>["icon"]["tags"];

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
