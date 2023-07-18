import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteCommonEntityCards from "@components/Cards/Favourites/CommonEntity";
import I18nHelper from "@helpers/i18n";
import favouriteAnimeData from "@data/favourites/anime";
import FAVOURITE_TYPES from "@constants/favourites";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouriteAnimePage: PageComponent = () => (
  <>
    <Head canonical="/favourites/anime" page="favouriteAnime" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.anime" />
      <FavouriteCommonEntityCards
        items={favouriteAnimeData}
        entityType={FAVOURITE_TYPES.SHOW.ANIME as IFavouriteEntities}
      />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.anime"),
  ]);

  return { props: t9n };
};

export default FavouriteAnimePage;
