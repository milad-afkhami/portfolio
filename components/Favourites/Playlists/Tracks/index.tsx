import { Div } from "style-wiz";
import ListView from "@kits/ListView";
import type { FC } from "react";

interface FavouritePlaylistTracksProps
  extends Pick<IFavouritePlaylist, "tracks"> {
  open: boolean;
}

const FavouritePlaylistTracks: FC<FavouritePlaylistTracksProps> = (props) => {
  const { open, tracks } = props;

  const row = Math.ceil(tracks.length / 2);
  const height = open
    ? `calc(${row} * var(--list-view-item-height) + 1rem)`
    : "0px";

  return (
    <Div height={height} pace="normal" overflow="hidden">
      <ListView
        items={tracks?.map?.((track) => ({
          title: track.name,
          subtitle: track.artist,
        }))}
      />
    </Div>
  );
};

export default FavouritePlaylistTracks;
