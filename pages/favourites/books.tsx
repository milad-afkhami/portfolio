import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import PageTitle from "@components/Layout/Title/PageTitle";
import { favouriteBooksData } from "@data/favourites";
import FAVOURITE_TYPES from "@constants/favourites";

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
