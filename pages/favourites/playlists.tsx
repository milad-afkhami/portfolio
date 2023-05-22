import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouritePlaylists from "@components/Favourites/Playlists";
import type { FC } from "react";

const FavouritePlaylistsPage: FC = () => (
  <>
    <Head canonical="/favourites/playlists" page="favouritePlaylists" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.playlists" />
      <FavouritePlaylists />
    </Div>
  </>
);

export default FavouritePlaylistsPage;
