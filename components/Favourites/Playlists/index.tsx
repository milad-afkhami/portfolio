import Div from "@kits/Div";
import FavouritePlaylist from "./Item";
import { favouritePlaylistsData } from "@data/favourites";

const FavouritePlaylists = () => {
  return (
    <Div>
      {favouritePlaylistsData.map((pl) => (
        <FavouritePlaylist {...pl} />
      ))}
    </Div>
  );
};

export default FavouritePlaylists;
