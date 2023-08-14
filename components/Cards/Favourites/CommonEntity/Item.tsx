import { Div } from "style-wiz";
import Text from "@kits/Text";
import Image from "@kits/Image";
import type { FC } from "react";

interface FavouriteCommonEntityCardProps extends IFavouriteCommonEntity {
  entityType: IFavouriteEntities;
}

const FavouriteCommonEntityCard: FC<FavouriteCommonEntityCardProps> = (
  props
) => {
  const { entityType, slug, name, meta } = props;

  const image = `/images/favourites/${entityType}/${slug}.jpg`;
  const description = [name, meta].filter(Boolean).join(" - ");

  return (
    <Div
      position="relative"
      mh="450px"
      Mw="300px"
      ml="max(calc(50% - 150px),0px)"
      flex={["center", "center", "column"]}
      overflow="hidden"
      curve="md"
      title={description}
    >
      <Div
        display="flex"
        height="100%"
        width="100%"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={image}
          alt={description}
          placeholder="blur"
          blurDataURL={image}
          layout="fill"
          fit="cover"
        />
      </Div>
      <Div
        // position="absolute"
        // dimensions={{ bottom: 0 }}
        width="100%"
        mh="80px"
        bg="bg-tertiary-main"
        p="2"
        flex={["flex-start", "space-around", "column"]}
      >
        <Div overflow="hidden">
          <Text size="lg" bold maxLines={1} noTranslation title={name}>
            {name}
          </Text>
        </Div>
        {meta && (
          <Div>
            <Text size="md" color="text-secondary-main" noTranslation>
              {meta}
            </Text>
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default FavouriteCommonEntityCard;
