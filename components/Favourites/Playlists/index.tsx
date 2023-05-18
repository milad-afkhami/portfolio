import Div from "@kits/Div";
import FavouritePlaylist from "./Item";
import favouritePlaylistsData from "@data/favourites/playlists";

const FavouritePlaylists = () => (
  <Div>
    {favouritePlaylistsData.map((pl) => (
      <FavouritePlaylist key={pl.slug} {...pl} />
    ))}
  </Div>
);

export default FavouritePlaylists;
