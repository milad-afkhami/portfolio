import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import favouriteAnimeData from "@data/favourites/anime";
import FAVOURITE_TYPES from "@constants/favourites";
import type { FC } from "react";

const FavouriteAnimePage: FC = () => (
  <>
    <Head canonical="/favourites/anime" page="favouriteAnime" />
    <Div width="100%" py="3">
      <PageTitle title="favourites.anime.title" />
      <FavouriteCommonEntityList
        items={favouriteAnimeData}
        entityType={FAVOURITE_TYPES.SHOW.ANIME as IFavouriteEntities}
      />
    </Div>
  </>
);

export default FavouriteAnimePage;
