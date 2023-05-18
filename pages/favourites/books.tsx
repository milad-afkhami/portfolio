import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import favouriteBooksData from "@data/favourites/books";
import FAVOURITE_TYPES from "@constants/favourites";
import type { FC } from "react";

const FavouriteBooksPage: FC = () => (
  <>
    <Head canonical="/favourites/books" page="favouriteBooks" />
    <Div width="100%" py="3">
      <PageTitle title="favourites.books.title" />
      <FavouriteCommonEntityList
        items={favouriteBooksData}
        entityType={FAVOURITE_TYPES.BOOK.BOOKS as IFavouriteEntities}
      />
    </Div>
  </>
);

export default FavouriteBooksPage;
