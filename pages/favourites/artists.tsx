import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import { FavouriteArtists } from "@components/Favourites";
import PageTitle from "@components/Layout/Title/Page";

const FavouriteArtistsPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/artists" page="favouriteArtists" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.artists.title" />
        <FavouriteArtists />
      </Div>
    </>
  );
};

export default FavouriteArtistsPage;