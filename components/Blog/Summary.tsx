import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

interface BlogSummaryProps {
  summary: string;
}

const BlogSummary: FC<BlogSummaryProps> = (props) => {
  const { summary } = props;

  return (
    <Div my="3" bg="bg-secondary" p="3" curve="sm">
      <Text size="lg" as="p" lineHeight={2}>
        {summary}
      </Text>
    </Div>
  );
};

export default BlogSummary;
