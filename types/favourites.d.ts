type IFavouriteEntities =
  | "artists"
  | "playlists"
  | "animations"
  | "anime"
  | "books"
  | "poems"
  | "series"
  | "writers";

interface IFavouritePlaylist {
  name: string;
  slug: string;
  image: string;
  link: string;
}
