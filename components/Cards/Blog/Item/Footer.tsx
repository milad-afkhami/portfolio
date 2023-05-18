import Div from "@kits/Div";
import Text from "@kits/Text";
import Icon from "@kits/Icon";
import type { FC } from "react";

type BlogCardFooterProps = Pick<IBlog, "publishedAt" | "readingTime" | "views">;

const BlogCardFooter: FC<BlogCardFooterProps> = (props) => {
  const { publishedAt = "", readingTime } = props;

  return (
    <Div
      flex={["center", "between"]}
      width="100%"
      pt="2"
      responsive={{ md: { pt: "0.75rem" } }}
      border="border-light"
      borderSide="top"
    >
      <Div>
        <Text color="text-secondary" size="xsm" tag="time">
          {publishedAt}
        </Text>
      </Div>
      {readingTime ? (
        <Div flex={["center", "center"]}>
          <Text
            mx="2"
            color="text-secondary"
            size="xsm"
            translationVariables={{ time: readingTime }}
            css={{ letterSpacing: "normal" }}
          >
            blog.meta.timeToReadValue
          </Text>
          {/* <Text mx="2" color="text-secondary" size="xsm" translationVariables={{ time: readingTime }}>blog.meta.timeToReadValue</Text> */}
          <Icon name="clock" color="text-secondary" size="sm" />
        </Div>
      ) : null}
    </Div>
  );
};

export default BlogCardFooter;
