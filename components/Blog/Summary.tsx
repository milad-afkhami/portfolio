import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";

interface BlogSummaryProps {
  summary: string;
}

const BlogSummary: FC<BlogSummaryProps> = (props) => {
  const { summary } = props;

  return (
    <Div my="3" bg="bg-secondary-main" p="3" curve="sm">
      <Text size="lg" as="p" styles={{ lineHeight: 2 }} noTranslation>
        {summary}
      </Text>
    </Div>
  );
};

export default BlogSummary;
