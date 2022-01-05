import React from "react";
import { Div } from "@kits";
import { FavouriteArtistCard } from "./Card";
// import { __groupBy, __values } from "@utils";

export const FavouriteArtists = (props) => {
  const { artists } = props || {};

  return (
    <>
      <Div
        grid={["repeat(1, 1fr)", , 5, "4rem", "row"]}
        responsive={{
          sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
          lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
        }}
        mb="6"
      >
        {artists.map((artist) => (
          <FavouriteArtistCard {...artist} />
        ))}
      </Div>
      {/* <Div
        grid={["repeat(2, 1fr)", , 3, "3rem", "row"]}
        responsive={{
          sm: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          lg: { css: { gridTemplateColumns: "repeat(4, 1fr)" } },
        }}
      >
        {artists.slice(12).map((artist) => (
          <FavouriteArtistCard {...artist} />
        ))}
      </Div> */}
    </>
  );

  // return __values(__groupBy(artists, "category")).map((_artists) => <Div grid={["repeat(1, 1fr)", , 5, "4rem", "row"]} responsive={{ sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } }, md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } } }}>{_artists.map((artist) => <FavouriteArtistCard {...artist} />)}</Div>);
};
