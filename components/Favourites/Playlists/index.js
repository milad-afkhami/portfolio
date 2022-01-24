import React from "react";
import { Div } from "@kits";
import { FavouritePlaylist } from "./Item";
import { favouritePlaylistsData } from "@data";

export const FavouritePlaylists = (props) => {
  const {} = props || {};

  return (
    <Div>
      {favouritePlaylistsData.map((pl) => (
        <FavouritePlaylist {...pl} />
      ))}
    </Div>
  );
};
