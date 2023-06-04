import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

interface BlogMetaItemProps {
  label: string;
  value: string;
}

const BlogMetaItem: FC<BlogMetaItemProps> = (props) => {
  const { label, value } = props;

  if (!value) return null;

  return (
    <Div flex={["center", "between"]} bg="bg-secondary-main" curve="sm" p="3">
      <div>
        <Text
          color="text-secondary-main"
          ns="common"
          // ns="blog"
        >
          {label}
        </Text>
      </div>
      <div>
        <Text
          size="md"
          bold
          ns="common"
          // ns="blog"
        >
          {value}
        </Text>
      </div>
    </Div>
  );
};

export default BlogMetaItem;
