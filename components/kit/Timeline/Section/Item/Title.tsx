import Text from "@kits/Text";

const TimelineSectionItemTitle = (props) => {
  const { title } = props || {};

  return (
    <Text
      tag="p"
      size="lg-b"
      color="text-secondary"
      css={{ textTransform: "capitalize" }}
    >
      {title}
    </Text>
  );
};

export default TimelineSectionItemTitle;
