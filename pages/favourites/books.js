import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteBooks } from "@components/Favourites";
import { PageTitle } from "@components/Layout";

const FavouriteBooksPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/books" page="favouriteBooks" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.books.title" />
        {/* <FavouriteBooks Books={favouriteBooks} /> */}
      </Div>
    </>
  );
};

export default FavouriteBooksPage;
