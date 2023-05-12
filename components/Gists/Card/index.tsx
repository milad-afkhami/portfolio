import Div from "@kits/Div";
import Text from "@kits/Text";
import Link from "@kits/Link";
import GistCardCategory from "./Category";

const GistCard = (props) => {
  const {
    _id = "",
    title = "",
    summary = "",
    description = "",
    image = "",
    body = "",
    slug = "",
    category = "",
  } = props || {};

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
          <Text size="h-sm-b">{title}</Text>
        </Div>
        <GistCardCategory category={category} />
      </Div>
      <Div overflow="hidden">
        <Text
          tag="p"
          size="md"
          color="text-secondary"
          css={{
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            lineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {summary}
        </Text>
      </Div>
    </Link>
  );
};


            
                
            
            
            
            export default GistCard