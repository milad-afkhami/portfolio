import Div from "@kits/Div";
import Text from "@kits/Text";

const BlogSummary = (props) => {
  const { summary } = props || {};

  return (
    <Div my="3" bg="bg-secondary" p="3" curve="sm">
      <Text size="lg" as="p" lineHeight={2}>
        {summary}
      </Text>
    </Div>
  );
};

export default BlogSummary;
