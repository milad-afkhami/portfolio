// #region imports
import Text from "@kits/Text";
import __omit from "lodash-es/omit";
import type ButtonProps from "./props";
import type TextProps from "@kits/Text/props";
// #endregion

export default function ButtonText(props: Pick<ButtonProps, "text" | "ns">) {
  const { text, ns } = props;

  const sharedProps = {
    ns,
    size: "md",
    userSelect: "none",
  } as TextProps;

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
