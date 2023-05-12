import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouritePlaylists } from "@components/Favourites";
import { PageTitle } from "@components/Layout";

const FavouritePlaylistsPage = (props) => {
  return (
    <>
      <Head canonical="/favourites/playlists" page="favouritePlaylists" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.playlists.title" />
        <FavouritePlaylists />
      </Div>
    </>
  );
};

export default FavouritePlaylistsPage;
