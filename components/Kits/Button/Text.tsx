/* eslint-disable react/jsx-props-no-spreading */
// #region imports
import Text from "@kits/Text";
import __omit from "lodash-es/omit";
import type ButtonProps from "./props";
import type TextProps from "@kits/Text/props";
// #endregion

export default function ButtonText(props: { text: ButtonProps["text"] }) {
  const { text } = props;

  const sharedProps = {
    size: "sm",
    userSelect: "none",
    bold: true,
  } as Partial<TextProps>;

  if (typeof text === "string") {
    return <Text {...sharedProps}>{text}</Text>;
  }
  if (typeof text === "object" && text?.content) {
    return (
      <Text {...sharedProps} {...__omit(text, "content")}>
        {text.content}
      </Text>
    );
  }
  return null;
}
