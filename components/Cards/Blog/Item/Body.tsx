import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";

const BlogCardBody: FC<Pick<IBlog, "title" | "subtitle">> = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <Div mb="2" overflow="hidden">
        <Text
          as="p"
          size="lg"
          bold
          noTranslation
          maxLines={3}
          styles={{ lineHeight: 1.5 }}
        >
          {title}
        </Text>
      </Div>
      <div>
        <Text
          color="text-secondary-main"
          size="md"
          // maxLines={3} styles={{ overflow: "hidden" }}
        >
          {subtitle}
        </Text>
      </div>
    </div>
  );
};

export default BlogCardBody;
