import { Div } from "style-wiz";
import Text from "@kits/Text";
import Icon from "@kits/Icon";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

type BlogCardFooterProps = Pick<IBlog, "publishedAt" | "readingTime" | "views">;

const BlogCardFooter: FC<BlogCardFooterProps> = (props) => {
  const { publishedAt = "", readingTime } = props;
  const [t] = useTranslation();

  return (
    <Div
      flex={["center", "space-between"]}
      width="100%"
      pt="inherit"
      border="border-light-main"
      borderSide="top"
    >
      <div>
        <Text as="time" color="text-secondary-main" size="xsm" noTranslation>
          {publishedAt}
        </Text>
      </div>
      {readingTime ? (
        <Div flex={["center", "center"]} gap="2">
          <Text
            color="text-secondary-main"
            size="xsm"
            styles={{ letterSpacing: "normal" }}
            noTranslation
          >
            {t("blog.meta.timeToReadValue", { time: readingTime })}
          </Text>
          <Icon name="clock" color="text-secondary-main" size="sm" />
        </Div>
      ) : null}
    </Div>
  );
};

export default BlogCardFooter;
