import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const BlogCardBody: FC<Pick<IBlog, "title" | "summary">> = (props) => {
  const { title } = props;

  return (
    <Div>
      <Div mb="2" overflow="hidden">
        <Text
          as="p"
          size="md-b"
          lineHeight="1.5"
          css={{
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            lineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Text>
      </Div>
      {/* <Div><Text color="text-secondary" css={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }} >{summary}</Text></Div> */}
    </Div>
  );
};

export default BlogCardBody;
