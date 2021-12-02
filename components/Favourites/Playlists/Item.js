import React from "react";
import { Button, Div, Image, Text } from "@kits";
import { useToggle } from "@hooks";

export const FavouritePlaylist = (props) => {
  const { name, image, tracks } = props || {};

  const [showTracks, toggleTracks] = useToggle(false);

  return (
    <Div width="100%" border="border-light" px="3" mb="3" curve="xsm">
      <Div
        width="100%"
        height="150px"
        flex={["center", "between"]}
        cursor="pointer"
      >
        <Div flex={["center", "start"]}>
          <Div flex={["center", "center"]} curve="circle" overflow="hidden">
            <Image src={image} height="100px" width="100px" fit="cover" />
          </Div>
          <Div mx="4">
            <Text size="lg-b">{name}</Text>
          </Div>
        </Div>
        <Div flex={[, , "column"]} mx="2">
          <Div my="2">
            <Button
              variant="outlined"
              text="favourites.listenNow"
              size="sm"
              onClick={() => {}}
            />
          </Div>
          <Div my="2">
            <Button
              variant="link"
              text={showTracks ? "favourites.collapse" : "favourites.expand"}
              size="sm"
              onClick={toggleTracks}
            />
          </Div>
        </Div>
      </Div>
      {/* tracks here, when isOpen */}
    </Div>
  );
};
