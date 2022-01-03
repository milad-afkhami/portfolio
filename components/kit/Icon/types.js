import { Colors, Typography } from "@stylesheets";

export interface IconProps {
  name: IconName;
  color: Colors;
  hoverColor: Colors;
  size?: Typography | String;
  bold?: Boolean;
  multiDirection?: Boolean;
  cursor?: String;
}

export type IconName =
  | "stop-watch-filled"
  | "stop-watch-outline"
  | "moon-2"
  | "ruler-2"
  | "measure-2"
  | "math"
  | "gallery"
  | "gallery-2"
  | "gallery-3"
  | "tools"
  | "measure"
  | "gallery-4"
  | "linkedin-outline"
  | "moon"
  | "hash"
  | "nested-list"
  | "copy-fill"
  | "clock"
  | "time"
  | "history"
  | "list"
  | "star"
  | "info"
  | "skype-fill"
  | "sun1"
  | "list-2"
  | "copy-fill"
  | "clock"
  | "time"
  | "history"
  | "list"
  | "star"
  | "info"
  | "skype-fill"
  | "sun1"
  | "list-2"
  | "chevron-circle-right"
  | "chevron-circle-right"
  | "chevron-right"
  | "bullseye"
  | "eye-dropper"
  | "chevron-right-2"
  | "skype-outline"
  | "sun"
  | "double-chevrons-right"
  | "chevron-right-3"
  | "copy-outline"
  | "mail"
  | "nested-tree"
  | "focus-center-2"
  | "focus-center-3"
  | "timeline"
  | "whatsapp"
  | "telegram"
  | "skype"
  | "linkedin"
  | "gmail";
