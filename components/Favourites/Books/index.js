import React from "react";
import { Div } from "@kits";
import { FavouriteBookCard } from "./Card";

export const FavouriteBooks = (props) => {
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
          <FavouriteBookCard {...artist} />
        ))}
      </Div>
    </>
  );
};
