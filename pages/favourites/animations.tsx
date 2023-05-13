import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteCommonEntityList from "@components/Favourites/CommonEntity";
import PageTitle from "@components/Layout/Title/PageTitle";
import { favouriteAnimationsData } from "@data/favourites";
import FAVOURITE_TYPES from "@constants/favourites";

const FavouriteAnimationsPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/animations" page="favouriteAnimations" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.animations.title" />
        <FavouriteCommonEntityList
          items={favouriteAnimationsData}
          entityType={FAVOURITE_TYPES.SHOW.ANIMATIONS}
        />
      </Div>
    </>
  );
};

export default FavouriteAnimationsPage;
