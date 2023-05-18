import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import PageTitle from "@components/Layout/Title/Page";
import favouriteSeriesData from "@data/favourites/series";
import FAVOURITE_TYPES from "@constants/favourites";
import type { FC } from "react";

const FavouriteSeriesPage: FC = () => (
  <>
    <Head canonical="/favourites/series" page="favouriteSeries" />
    <Div width="100%" py="3">
      <PageTitle title="favourites.series.title" />
      <FavouriteCommonEntityList
        items={favouriteSeriesData}
        entityType={FAVOURITE_TYPES.SHOW.SERIES as IFavouriteEntities}
      />
    </Div>
  </>
);

export default FavouriteSeriesPage;
