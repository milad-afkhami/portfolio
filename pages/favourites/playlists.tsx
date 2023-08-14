import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouritePlaylists from "@components/Favourites/Playlists";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouritePlaylistsPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/playlists" page="favouritePlaylists" />
    <Div width="100%" py="3">
      <PageTitle title="playlists" ns="favourites.common" />
      <FavouritePlaylists />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(
      locale,
      "layout",
      "favourites.common",
      "favourites.playlists"
    ),
  ]);

  return { props: t9n };
};

export default FavouritePlaylistsPage;
