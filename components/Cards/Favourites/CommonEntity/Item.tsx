import { Div } from "style-wiz";
import Text from "@kits/Text";
import Image from "@kits/Image";
import { useTranslation } from "next-i18next";
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
  const [t] = useTranslation(ns);

  const name = t(`list.${slug}.name`);
  const meta = t(`list.${slug}.meta`, {
    defaultValue: "",
  });
  const image = `/images/favourites/${entityType}/${slug}.jpg`;
  const title = [meta, name].filter(Boolean).join(" - ");

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
      title={title}
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
        flex={["flex-start", "space-around", "column"]}
      >
        <Div overflow="hidden">
          <Text size="lg" bold maxLines={2} noTranslation title={name}>
            {name}
          </Text>
        </Div>
        {meta && (
          <div>
            <Text size="md" color="text-secondary-main" noTranslation>
              {meta}
            </Text>
          </div>
        )}
      </Div>
    </Div>
  );
};

export default FavouriteCommonEntityCard;
