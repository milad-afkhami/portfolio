import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteSeries } from "@components/Favourites";
import { favouriteSeries } from "mock";
import { PageTitle } from "@components/Layout";

const FavouriteSeriesPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/Series" page="favouriteSeries" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.Series.title" />
        {/* <FavouriteSeries Series={favouriteSeries} /> */}
      </Div>
    </>
  );
};

export default FavouriteSeriesPage;
