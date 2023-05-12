import Div from "@kits/Div";
import { Head } from "@components/SEO";
import { FavouriteCommonEntityList } from "@components/Favourites";
import PageTitle from "@components/Layout/Title/PageTitle";
import { favouriteAnimationsData } from "@data";
import { FAVOURITE_TYPES } from "@constants";

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