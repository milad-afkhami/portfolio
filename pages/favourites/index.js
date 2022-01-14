import React from "react";
import { Div, Link, Text } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteEntities, FavouriteEntityCard } from "@components/Favourites";
import { FAVOURITE_TYPES } from "@constants";

const FavouritesPage = (props) => {
  return (
    <>
      <Head canonical="/favourites" page="favourites" />
      <Div width="100%" py="3">
        <FavouriteEntities />
      </Div>
    </>
  );
};

export default FavouritesPage;
