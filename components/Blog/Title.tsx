import Div from "@kits/Div";
import Text from "@kits/Text";
import PageTitle from "@components/Layout/Title/Page";
import type { FC } from "react";

interface BlogTitleProps {
  title: string;
}

const BlogTitle: FC<BlogTitleProps> = (props) => {
  const { title } = props;

  return <PageTitle title={title} />;

  return (
    <Div my="3">
      <Text as="h1" lineHeight="1.8">
        {title}
      </Text>
    </Div>
  );
};

export default BlogTitle;
