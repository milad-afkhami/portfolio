import Text from "@kits/Text";

const BreadcrumbLinkText = (props) => {
  const { title, lastItem } = props;

  return (
    <Text
      cursor={lastItem ? "default" : "pointer"}
      px="2"
      truncate
      hoverColor={!lastItem ? "brand" : ""}
      size="sm-b"
      color="text-secondary"
    >
      {title}
    </Text>
  );
};

export default BreadcrumbLinkText;
