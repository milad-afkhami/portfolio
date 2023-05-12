import Div from "@kits/Div";
import { Head } from "@components/SEO";
import { FavouritePlaylists } from "@components/Favourites";
import PageTitle from "@components/Layout/Title/PageTitle";

const FavouritePlaylistsPage = (props) => {
  return (
    <>
      <Head canonical="/favourites/playlists" page="favouritePlaylists" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.playlists.title" />
        <FavouritePlaylists />
      </Div>
    </>
  );
};



            
                
            
            
            
            export default FavouritePlaylistsPage;