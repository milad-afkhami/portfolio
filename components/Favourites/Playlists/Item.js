import React from "react";
import { Button, Div, Image, Link, Text } from "@kits";
import { useToggle } from "@hooks";
import { FavouritePlaylistTracks } from "./Tracks";

export const FavouritePlaylist = (props) => {
  const { name, image, tracks } = props || {};

  const [tracksOpen, toggleTracks] = useToggle(false);

  return (
    <Div
      width="100%"
      border="border-light"
      p="2"
      responsive={{ sm: { p: "3" } }}
      mb="3"
      curve="xsm"
    >
      <Div
        width="100%"
        height="175px"
        flex={["center", "between", "column"]}
        responsive={{ sm: { css: { flexDirection: "row", height: "150px" } } }}
        cursor="pointer"
      >
        <Div flex={["center", "start"]} width="100%">
          <Div flex={["center", "center"]} curve="circle" overflow="hidden">
            <Image src={image} height="100px" width="100px" fit="cover" />
          </Div>
          <Div mx="4">
            <Text size="lg-b">{name}</Text>
          </Div>
        </Div>
        <Div
          flex={[, "between", "row-reverse"]}
          width="100%"
          responsive={{ sm: { flex: [, "between", "column"], width: "auto" } }}
        >
          <Link
            outerLink
            href="https://music.youtube.com/playlist?list=PL-yYaCE5uT3at0d8wyhnQht15miQcMAj5"
            m="2"
          >
            <Button
              variant="outlined"
              text="favourites.listenNow"
              size="sm"
              onClick={() => {}}
            />
          </Link>
          <Div m="2">
            <Button
              variant="link"
              text={tracksOpen ? "favourites.collapse" : "favourites.expand"}
              size="sm"
              onClick={toggleTracks}
            />
          </Div>
        </Div>
      </Div>
      <FavouritePlaylistTracks open={tracksOpen} tracks={tracks} />
    </Div>
  );
};
