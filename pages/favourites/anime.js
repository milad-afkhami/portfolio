import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteBooks } from "@components/Favourites";
import { favouriteBooks } from "mock";
import { PageTitle } from "@components/Layout";

const FavouriteAnimePage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/Anime" page="favouriteAnime" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.Anime.title" />
        {/* <  ={favouriteAnime} /> */}
      </Div>
    </>
  );
};

export default FavouriteAnimePage;
