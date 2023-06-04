import FavouritePlaylist from "./Item";
import favouritePlaylistsData from "@data/favourites/playlists";

const FavouritePlaylists = () => (
  <div>
    {favouritePlaylistsData.map((pl) => (
      <FavouritePlaylist key={pl.slug} {...pl} />
    ))}
  </div>
);

export default FavouritePlaylists;
