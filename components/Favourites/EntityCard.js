import React from "react";
import { Div, Image, Text } from "@kits";
import { useState } from "@hooks";
import { FAVOURITE_TYPES } from "@constants";
import { favourites } from "mock";

export const FavouriteEntityCard = (props) => {
  const { type } = props || {};

  return (
    <Div width="300px" height="400px" mx="3">
      <Div
        flex={[, , , "wrap"]}
        curve="sm"
        overflow="auto"
        width="100%"
        height="300px"
      >
        {favourites[FAVOURITE_TYPES.SONG.ARTISTS]
          .slice(0, 4)
          .map((fav) => fav.image)
          .map((image) => (
            <Div
              position="relative"
              css={{ flex: 1 }}
              m="1px"
              mw="calc(50% - 2px)"
              mh="calc(50% - 2px)"
            >
              <Image src={image} layout="fill" fit="cover" />
            </Div>
          ))}
      </Div>
    </Div>
  );
};
