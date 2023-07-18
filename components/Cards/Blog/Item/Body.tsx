import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";

const BlogCardBody: FC<Pick<IBlog, "title" | "summary">> = (props) => {
  const { title } = props;

  return (
    <div>
      <Div mb="2" overflow="hidden">
        <Text
          as="p"
          size="md"
          bold
          noTranslation
          maxLines={3}
          styles={{ lineHeight: 1.5 }}
        >
          {title}
        </Text>
      </Div>
      {/* <div><Text color="text-secondary-main" maxLines="3" overflow="hidden" >{summary}</Text></div> */}
    </div>
  );
};

export default BlogCardBody;
