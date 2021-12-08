import React from "react";
import { Div, Text, Image, Link } from "@kits";
import { FavouriteArtistCard } from "./Card";

export const FavouriteArtists = (props) => {
  const { artists } = props || {};

  return (
    <Div grid={["repeat(3, 1fr)", , 5, "4rem"]} css={{ gridAutoFlow: "row" }}>
      {artists.map((artist) => (
        <FavouriteArtistCard {...artist} />
      ))}
    </Div>
  );
};
