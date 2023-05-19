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
      <Div>
        <Text color="text-secondary-main">{label}</Text>
      </Div>
      <Div>
        <Text size="md-b">{value}</Text>
      </Div>
    </Div>
  );
};

export default BlogMetaItem;
