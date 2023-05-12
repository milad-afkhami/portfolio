import Div from "@kits/Div";
import Text from "@kits/Text";

const BlogMetaItem = (props) => {
  const { label, value } = props || {};

  if (!value) {
    return null;
  }

  return (
    <Div flex={["center", "between"]} bg="bg-secondary" curve="sm" p="3">
      <Div>
        <Text color="text-secondary">{label}</Text>
      </Div>
      <Div>
        <Text size="md-b">{value}</Text>
      </Div>
    </Div>
  );
};

export default BlogMetaItem;
