import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteArtists from "@components/Favourites/Artists";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteArtistsPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/artists" page="favouriteArtists" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.artists" />
      <FavouriteArtists />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.artists"),
  ]);

  return { props: t9n };
};

export default FavouriteArtistsPage;
