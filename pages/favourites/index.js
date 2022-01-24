import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteEntities } from "@components/Favourites";

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
