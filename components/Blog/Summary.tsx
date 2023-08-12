import { Div } from "style-wiz";
import Text from "@kits/Text";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

interface BlogSummaryProps {
  summary: string;
}

const BlogSummary: FC<BlogSummaryProps> = (props) => {
  const { summary } = props;

  return (
    <Div my="3" bg="bg-secondary-main" p="3" curve="sm">
      <SectionTitle title="blog.summary" tag="h2" />
      <Text size="md" as="p" styles={{ lineHeight: 2 }} noTranslation>
        {summary}
      </Text>
    </Div>
  );
};

export default BlogSummary;
