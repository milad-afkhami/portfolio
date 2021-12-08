import React from "react";
import { Button, Div, Image, Text } from "@kits";
import { useMemo } from "@hooks";
import { __chunk } from "@utils";

export const FavouritePlaylistTracks = (props) => {
  const { open, tracks } = props || {};

  const pivot = useMemo(() => Math.ceil(tracks.length / 2), [tracks.length]);

  const columns = useMemo(() => __chunk(tracks, pivot), [tracks.length]);

  return (
    <Div
      height={`calc(${open ? pivot : 0} * 70px)`}
      pace="fast"
      overflow="hidden"
      mb={open ? "3" : "0"}
    >
      <Div height="100%" width="100%" border="border-light" curve="xsm" row>
        {columns.map((columnTracks, i) => (
          <Div col={{ xs: 12, md: 6 }}>
            {columnTracks.map((track, j) => (
              <Div flex={["center", "start"]} height="70px">
                <Div flex={["center", "center"]}>
                  <Text size="md" noTranslation>{`${
                    i === 0 ? j + 1 : pivot + j + 1
                  }. `}</Text>
                </Div>
                <Div
                  mx="2"
                  curve="circle"
                  overflow="hidden"
                  flex={["center", "center"]}
                >
                  <Image src={track.image} height="50px" width="50px" />
                </Div>
                <Div props>
                  <Div props>
                    <Text size="xsm" noTranslation color="text-secondary">
                      {track.artist}
                    </Text>
                  </Div>
                  <Div props>
                    <Text size="sm" noTranslation>
                      {track.name}
                    </Text>
                  </Div>
                </Div>
              </Div>
            ))}
          </Div>
        ))}
      </Div>
    </Div>
  );
};
