import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import PageTitle from "@components/Layout/Title/Page";
import { favouriteSeriesData } from "@data/favourites";
import FAVOURITE_TYPES from "@constants/favourites";

const FavouriteSeriesPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/series" page="favouriteSeries" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.series.title" />
        <FavouriteCommonEntityList
          items={favouriteSeriesData}
          entityType={FAVOURITE_TYPES.SHOW.SERIES}
        />
      </Div>
    </>
  );
};

export default FavouriteSeriesPage;
