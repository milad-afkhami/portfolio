import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityCards from "@components/Cards/CommonEntity";
import PageTitle from "@components/Layout/Title/Page";
import favouriteSeriesData from "@data/favourites/series";
import FAVOURITE_TYPES from "@constants/favourites";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteSeriesPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/series" page="favouriteSeries" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.series" />
      <FavouriteCommonEntityCards
        items={favouriteSeriesData}
        entityType={FAVOURITE_TYPES.SHOW.SERIES as IFavouriteEntities}
      />
    </Div>
  </>
);

export default FavouriteSeriesPage;
