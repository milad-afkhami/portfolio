import Div from "@kits/Div";
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
      color="text-primary-main"
    >
      <Text size="xxsm-b">{`blog.category.${category}`}</Text>
    </Div>
  );
};

export default BlogCardCategory;
