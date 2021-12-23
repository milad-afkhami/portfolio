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
      <Div
        height="100%"
        width="100%"
        border="border-light"
        curve="xsm"
        row
        mx="-2"
      >
        {columns.map((columnTracks, j) => (
          <Div col={{ xs: 12, md: 6 }} my="-1" px="2">
            {columnTracks.map((track, i) => (
              <Div
                flex={["center", "start"]}
                height="62px"
                // bg="bg-secondary"
                hoverBg="bg-secondary"
                px="3"
                curve="sm"
                my="2"
                cursor="pointer"
              >
                <Div flex={["center", "center"]}>
                  <Text size="md" noTranslation>{`${
                    j === 0 ? i + 1 : pivot + i + 1
                  }. `}</Text>
                </Div>
                <Div mx="2">
                  {/* <Image
                    src={track.image}
                    height="50px"
                    width="50px"
                    curve="circle"
                  /> */}
                </Div>
                <Div>
                  <Div>
                    <Text size="xsm" color="text-secondary" noTranslation>
                      {track.artist}
                    </Text>
                  </Div>
                  <Div>
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
