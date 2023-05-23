import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityCards from "@components/Cards/CommonEntity";
import PageTitle from "@components/Layout/Title/Page";
import I18nHelper from "@helpers/i18n";
import favouriteAnimationsData from "@data/favourites/animations";
import FAVOURITE_TYPES from "@constants/favourites";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteAnimationsPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/animations" page="favouriteAnimations" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.animations" />
      <FavouriteCommonEntityCards
        items={favouriteAnimationsData}
        entityType={FAVOURITE_TYPES.SHOW.ANIMATIONS as IFavouriteEntities}
      />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.animations"),
  ]);

  return { props: t9n };
};

export default FavouriteAnimationsPage;
