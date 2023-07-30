// #region imports
import Text, { type TextProps } from "@kits/Text";
import __omit from "lodash-es/omit";
import type ButtonProps from "./props";
// #endregion

export default function ButtonText(props: Pick<ButtonProps, "text" | "ns">) {
  const { text, ns } = props;

  const sharedProps = {
    ns,
    size: "md",
    userSelect: "none",
  } as TextProps;

  if (!text) return null;

  if (typeof text === "string") return <Text {...sharedProps}>{text}</Text>;

  if ("content" in text) {
    return (
      <Text {...sharedProps} {...__omit(text, "content")}>
        {text.content}
      </Text>
    );
  }
  return null;
}
