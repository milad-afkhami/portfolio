import Div from "@kits/Div";
import Text from "@kits/Text";
import Icon from "@kits/Icon";
import useTranslation from "@hooks/useTranslation";
import type { FC } from "react";

type BlogCardFooterProps = Pick<IBlog, "publishedAt" | "readingTime" | "views">;

const BlogCardFooter: FC<BlogCardFooterProps> = (props) => {
  const { publishedAt = "", readingTime } = props;
  const { t } = useTranslation();

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
        <Text as="time" color="text-secondary" size="xsm">
          {publishedAt}
        </Text>
      </Div>
      {readingTime ? (
        <Div flex={["center", "center"]} gap="2">
          <Text
            color="text-secondary"
            size="xsm"
            css={{ letterSpacing: "normal" }}
            noTranslation
          >
            {t("blog.meta.timeToReadValue", { time: readingTime })}
          </Text>
          {/* <Text mx="2" color="text-secondary" size="xsm" translationVariables={{ time: readingTime }}>blog.meta.timeToReadValue</Text> */}
          <Icon name="clock" color="text-secondary" size="sm" />
        </Div>
      ) : null}
    </Div>
  );
};

export default BlogCardFooter;
