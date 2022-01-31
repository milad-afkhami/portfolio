import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteCommonEntityList } from "@components/Favourites";
import { PageTitle } from "@components/Layout";
import { favouriteMoviesData } from "@data";
import { FAVOURITE_TYPES } from "@constants";

const FavouriteMoviesPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/movies" page="favouriteMovies" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.movies.title" />
        <FavouriteCommonEntityList
          items={favouriteMoviesData}
          entityType={FAVOURITE_TYPES.SHOW.MOVIES}
        />
      </Div>
    </>
  );
};

export default FavouriteMoviesPage;
