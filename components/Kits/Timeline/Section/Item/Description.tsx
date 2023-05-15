import ExpandableText from "@kits/ExpandableText";
import Text from "@kits/Text";
import useTranslation from "@hooks/useTranslation";

const TimelineSectionItemDescription = (props) => {
  const { description } = props;

  const { t } = useTranslation();
  const text = t(description, { defaultValue: "" });
  const hashMoreButton = text.length > 26;

  const textProps = {
    size: "md",
    ml: "3",
    color: "text-secondary",
    noTranslation: true,
    width: "fit-content",
    css: { whiteSpace: "pre-line" },
  };

  return text ? (
    hashMoreButton ? (
      <ExpandableText {...textProps}>{text}</ExpandableText>
    ) : (
      <Text {...textProps}>{text}</Text>
    )
  ) : null;
};

export default TimelineSectionItemDescription;
