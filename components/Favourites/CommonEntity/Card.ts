import React from "react";
import { Div, Text, Image } from "@kits";
import { useTranslation } from "@hooks";

export const FavouriteCommonEntityCard = (props) => {
  const { slug, entityType } = props || {};

  const t = useTranslation().t;

  const name = `favourites.${entityType}.list.${slug}.name`;
  const meta = t(`favourites.${entityType}.list.${slug}.meta`, {
    defaultValue: "",
  });
  const image = `/images/favourites/${entityType}/${slug}.jpg`;

  return (
    <Div
      // href={`/${slug}`}
      // hoverColor="text-secondary"
      position="relative"
      mh="400px"
      Mw="300px"
      ml="max(calc(50% - 150px),0px)"
      flex={["center", "center", "column"]}
      overflow="hidden"
      curve="md"
    >
      <Div
        flex
        height="100%"
        width="100%"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={image}
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
          <Text
            size="lg-b"
            css={{
              whiteSpace: "pre-wrap",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              lineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {name}
          </Text>
        </Div>
        {meta && (
          <Div>
            <Text size="md" color="text-secondary">
              {meta}
            </Text>
          </Div>
        )}
      </Div>
    </Div>
  );
};
