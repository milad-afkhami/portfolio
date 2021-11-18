import { Colors } from "@stylesheets/themes";
import { Typography } from "@stylesheets/typography";
import { Props as DivProps } from "@kits/Div/DivProps";

export interface Props extends DivProps {
  children: String;
  tag: String;
  size: Typography;
  direction: String;
  Trans?: Object;
  i18nKey?: String;
  noTranslation?: Boolean;
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "initial"
    | "inherit";
}
