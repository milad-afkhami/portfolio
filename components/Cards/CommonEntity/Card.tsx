import Div from "@kits/Div";
import Text from "@kits/Text";
import Image from "@kits/Image";
import useTranslation from "@hooks/useTranslation";
import type { FC } from "react";

interface FavouriteCommonEntityCardProps {
  slug: string;
  entityType: IFavouriteEntities;
}

const FavouriteCommonEntityCard: FC<FavouriteCommonEntityCardProps> = (
  props
) => {
  const { slug, entityType } = props;

  const ns = `favourites.${entityType}` as I18NNameSpaces;
  const { t } = useTranslation(ns);

  const name = t(`list.${slug}.name`);
  const meta = t(`list.${slug}.meta`, {
    defaultValue: "",
  });
  const image = `/images/favourites/${entityType}/${slug}.jpg`;

  return (
    <Div
      // href={`/${slug}`}
      // hoverColor="text-secondary-main"
      position="relative"
      mh="400px"
      Mw="300px"
      ml="max(calc(50% - 150px),0px)"
      flex={["center", "center", "column"]}
      overflow="hidden"
      curve="md"
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
          alt={`${name} - ${meta}`}
          placeholder="blur"
          blurDataURL={image}
          layout="fill"
          fit="cover"
        />
      </Div>
      <Div
        position="absolute"
        dimensions={{ bottom: 0 }}
        width="100%"
        mh="min(70px,20%)"
        bg="bg-secondary-pale"
        p="2"
        flex={["start", "around", "column"]}
      >
        <Div overflow="hidden">
          <Text size="lg" bold maxLines={1} noTranslation>
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