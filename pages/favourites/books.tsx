import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteCommonEntityCards from "@components/Cards/CommonEntity";
import favouriteBooksData from "@data/favourites/books";
import FAVOURITE_TYPES from "@constants/favourites";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteBooksPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/books" page="favouriteBooks" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.books" />
      <FavouriteCommonEntityCards
        items={favouriteBooksData}
        entityType={FAVOURITE_TYPES.BOOK.BOOKS as IFavouriteEntities}
      />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.books"),
  ]);

  return { props: t9n };
};

export default FavouriteBooksPage;
