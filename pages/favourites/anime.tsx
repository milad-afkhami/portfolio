import Div from "@kits/Div";
import { Head } from "@components/SEO";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import PageTitle from "@components/Layout/Title/PageTitle";
import { favouriteAnimeData } from "@data/favourites";
import FAVOURITE_TYPES from "@constants/favourites";

const FavouriteAnimePage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/anime" page="favouriteAnime" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.anime.title" />
        <FavouriteCommonEntityList
          items={favouriteAnimeData}
          entityType={FAVOURITE_TYPES.SHOW.ANIME}
        />
      </Div>
    </>
  );
};

export default FavouriteAnimePage;
