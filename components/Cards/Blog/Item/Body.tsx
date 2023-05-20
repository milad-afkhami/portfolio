import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const BlogCardBody: FC<Pick<IBlog, "title" | "summary">> = (props) => {
  const { title } = props;

  return (
    <Div>
      <Div mb="2" overflow="hidden">
        <Text as="p" size="md" bold noTranslation lineHeight="1.5" maxLines={3}>
          {title}
        </Text>
      </Div>
      {/* <Div><Text color="text-secondary-main" maxLines="3" overflow="hidden" >{summary}</Text></Div> */}
    </Div>
  );
};

export default BlogCardBody;
