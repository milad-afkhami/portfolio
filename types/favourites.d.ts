type IFavouriteEntities =
  | "artists"
  | "playlists"
  | "animations"
  | "anime"
  | "books"
  | "poems"
  | "series"
  | "writers";

type IFavouritePlaylist = {
  name: string;
  slug: string;
  image: string;
  link?: string;
  tracks: Array<{
    name: string;
    artist: string;
  }>;
};
