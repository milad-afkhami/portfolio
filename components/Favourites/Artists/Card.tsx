import Div from "@kits/Div";
import Text from "@kits/Text";
import Image from "@kits/Image";
import type { FC } from "react";

const FavouriteArtistCard: FC<IFavouriteArtist> = (props) => {
  const { name, image } = props;

  return (
    <Div
      // href={`/${slug}`}
      flex={["center", "center", "column"]}
      hoverColor="text-secondary-main"
    >
      <Div
        display="flex"
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
          alt={name}
        />
      </Div>
      <div>
        <Text noTranslation size="lg" bold>
          {name}
        </Text>
      </div>
    </Div>
  );
};

export default FavouriteArtistCard;
