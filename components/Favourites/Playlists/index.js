import React from "react";
import { Div, Text } from "@kits";
import { FavouritePlaylist } from "./Item";
import { favouritePlaylists } from "mock";

export const FavouritePlaylists = (props) => {
  const {} = props || {};

  return (
    <Div>
      {favouritePlaylists.map((pl) => (
        <FavouritePlaylist {...pl} />
      ))}
    </Div>
  );
};
