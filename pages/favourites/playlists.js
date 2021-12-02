import React from "react";
import { Div, Text } from "@kits";
import { Head } from "@components/SEO";
import { FavouritePlaylists } from "@components/Favourites";
import { favouritePlaylists } from "mock";
import { PageTitle } from "@components/Layout";

const FavouritePlaylistsPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/artists" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.playlists" />
        <FavouritePlaylists playlists={favouritePlaylists} />
      </Div>
    </>
  );
};

export default FavouritePlaylistsPage;
