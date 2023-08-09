import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";

const BlogCardCategory: FC<Pick<IBlog, "category">> = (props) => {
  const { category } = props;

  return (
    <Div
      position="absolute"
      dimensions={{ top: "0.25rem", left: "0.25rem" }}
      px="1"
      flex={["center", "center"]}
      bg="bg-secondary-pale"
      curve="xsm"
    >
      <Text
        color="text-primary-main"
        size="xsm"
        bold
      >{`blog.category.${category}`}</Text>
    </Div>
  );
};

export default BlogCardCategory;
