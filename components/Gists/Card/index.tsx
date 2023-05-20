import Div from "@kits/Div";
import Text from "@kits/Text";
import Link from "@kits/Link";
import GistCardCategory from "./Category";
import type { FC } from "react";

const GistCard: FC<IGist> = (props) => {
  const { title, summary, slug, category } = props;

  return (
    <Link
      href={`/gists/${slug}`}
      prefetch={false}
      mh="140px"
      curve="sm"
      overflow="hidden"
      bg="bg-secondary"
      hoverBg="bg-secondary-hover"
      position="relative"
      p="3"
      responsive={{ sm: { height: "180px" } }}
    >
      <Div height="3rem" flex={["center", "between"]} mb="3">
        <Div>
          <Text size="h-sm" bold noTranslation>
            {title}
          </Text>
        </Div>
        <GistCardCategory category={category} />
      </Div>
      <Div overflow="hidden">
        <Text
          as="p"
          size="md"
          color="text-secondary-main"
          noTranslation
        >
          {summary}
        </Text>
      </Div>
    </Link>
  );
};

export default GistCard;
