import Div from "@kits/Div";
import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

interface BlogCardsMoreLinkProps {
  link: string;
}

const BlogCardsMoreLink: FC<BlogCardsMoreLinkProps> = (props) => {
  const { link } = props;

  return (
    <Div mt="2">
      <Link
        href={link}
        width="100%"
        height="3rem"
        flex={["center", "center"]}
        bg="bg-secondary-main"
        hoverBg="bg-secondary-hover"
        curve="sm"
      >
        <Text size="md-b">home.posts.seeMore</Text>
      </Link>
    </Div>
  );
};

export default BlogCardsMoreLink;
