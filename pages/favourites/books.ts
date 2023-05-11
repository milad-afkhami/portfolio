import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteCommonEntityList } from "@components/Favourites";
import { PageTitle } from "@components/Layout";
import { favouriteBooksData } from "@data";
import { FAVOURITE_TYPES } from "@constants";

const FavouriteBooksPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/books" page="favouriteBooks" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.books.title" />
        <FavouriteCommonEntityList
          items={favouriteBooksData}
          entityType={FAVOURITE_TYPES.BOOK.BOOKS}
        />
      </Div>
    </>
  );
};

export default FavouriteBooksPage;
