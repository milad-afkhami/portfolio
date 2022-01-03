import React from "react";
import { Button, Div, Text } from "@kits";
import { useMemo } from "@hooks";
import { __chunk } from "@utils";
import { FavouritePlaylistTracksItem } from "./Item";

export const FavouritePlaylistTracks = (props) => {
  const { open, tracks } = props || {};

  const pivot = useMemo(() => Math.ceil(tracks.length / 2), [tracks.length]);

  const columns = useMemo(() => __chunk(tracks, pivot), [tracks.length]);

  return (
    <Div
      height={`calc(${open ? pivot : 0} * 70px)`}
      pace="fast"
      overflow="hidden"
      my={open ? "3" : "0"}
      css={{ sm: { mt: 0 } }}
    >
      <Div
        height="100%"
        width="100%"
        border="border-light"
        curve="xsm"
        flex={[, , "row"]}
      >
        {columns.map((columnTracks, j) => (
          <Div col={{ xs: 6, md: 6 }} my="-1" px="2">
            {columnTracks.map((track, i) => (
              <FavouritePlaylistTracksItem
                index={j === 0 ? i + 1 : pivot + i + 1}
                {...track}
              />
            ))}
          </Div>
        ))}
      </Div>
    </Div>
  );
};
