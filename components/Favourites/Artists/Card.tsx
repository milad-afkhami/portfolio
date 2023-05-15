import Div from "@kits/Div";
import Text from "@kits/Text";
import Image from "@kits/Image";
import Link from "@kits/Link";

const FavouriteArtistCard = (props) => {
  const { name, image, slug } = props;

  return (
    <Div
      // href={`/${slug}`}
      flex={["center", "center", "column"]}
      hoverColor="text-secondary"
    >
      <Div
        flex
        curve="circle"
        height="250px"
        width="min(250px, 100%)"
        position="relative"
        overflow="hidden"
        mb="3"
      >
        <Image
          src={image}
          placeholder="blur"
          blurDataURL={image}
          layout="fill"
          fit="cover"
        />
      </Div>
      <Div>
        <Text size="lg-b">{name}</Text>
      </Div>
    </Div>
  );
};

export default FavouriteArtistCard;
