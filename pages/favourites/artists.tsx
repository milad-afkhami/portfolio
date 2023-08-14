import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteCommonEntityCards from "@components/Cards/Favourites/CommonEntity";
import I18nHelper from "@helpers/i18n";
import FAVOURITE_TYPES from "@constants/favourites";
import favouriteArtistsData from "@data/favourites/artists";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteArtistsPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/artists" page="favouriteArtists" />
    <Div width="100%" py="3">
      <PageTitle title="artists" ns="favourites.common" />
      <FavouriteCommonEntityCards
        items={favouriteArtistsData}
        entityType={FAVOURITE_TYPES.SONG.ARTISTS as IFavouriteEntities}
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

export default FavouriteArtistsPage;
