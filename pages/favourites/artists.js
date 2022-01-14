import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteArtists } from "@components/Favourites";
import { favouriteArtists } from "mock";
import { PageTitle } from "@components/Layout";

const FavouriteArtistsPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/artists" page="favouriteArtists" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.artists.title" />
        <FavouriteArtists artists={favouriteArtists} />
      </Div>
    </>
  );
};

export default FavouriteArtistsPage;
