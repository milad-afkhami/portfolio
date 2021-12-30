import React from "react";
import { Div } from "@kits";
import { FavouriteArtistCard } from "./Card";

export const FavouriteArtists = (props) => {
  const { artists } = props || {};

  return (
    <Div
      grid={["repeat(1, 1fr)", , 5, "4rem", "row"]}
      responsive={{
        sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
        md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
      }}
    >
      {artists.map((artist) => (
        <FavouriteArtistCard {...artist} />
      ))}
    </Div>
  );
};
