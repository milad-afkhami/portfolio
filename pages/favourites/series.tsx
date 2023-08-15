import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityCards from "@components/Cards/Favourites/CommonEntity";
import PageTitle from "@components/Layout/Title/Page";
import favouriteSeriesData from "@data/favourites/series";
import FAVOURITE_TYPES from "@constants/favourites";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteSeriesPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/series" page="favouriteSeries" />
    <Div width="100%" py="3">
      <PageTitle title="series" ns="favourites.common" />
      <FavouriteCommonEntityCards
        items={favouriteSeriesData}
        entityType={FAVOURITE_TYPES.SHOW.SERIES as IFavouriteEntities}
      />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.common"),
  ]);

  return { props: t9n };
};

export default FavouriteSeriesPage;
