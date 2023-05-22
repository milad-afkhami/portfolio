import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteArtists from "@components/Favourites/Artists";
import type { FC } from "react";

const FavouriteArtistsPage: FC = () => (
  <>
    <Head canonical="/favourites/artists" page="favouriteArtists" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.artists" />
      <FavouriteArtists />
    </Div>
  </>
);

export default FavouriteArtistsPage;
