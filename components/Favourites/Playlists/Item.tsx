import Button from "@kits/Button";
import Div from "@kits/Div";
import Image from "@kits/Image";
import Link from "@kits/Link";
import Text from "@kits/Text";
import useToggle from "@hooks/useToggle";
import FavouritePlaylistTracks from "./Tracks";
import type { FC } from "react";

const FavouritePlaylist: FC<IFavouritePlaylist> = (props) => {
  const { name, image, link, tracks } = props;

  const [tracksOpen, toggleTracks] = useToggle(false);

  return (
    <Div
      width="100%"
      border="border-light"
      p="2"
      responsive={{ sm: { p: "3" } }}
      mb="3"
      curve="xsm"
      position="relative"
      overflow="hidden"
    >
      {image ? (
        <Div
          position="absolute"
          dimensions={{ left: 0, top: 0 }}
          height="100%"
          width="100%"
          css={{ filter: "blur(10px)" }}
          opacity="0.3"
          zIndex="-1"
        >
          <Image src={image} layout="fill" fit="cover" quality={1} />
        </Div>
      ) : null}
      <Div
        width="100%"
        height="140px"
        flex={["center", "between", "column"]}
        responsive={{ sm: { css: { flexDirection: "row", height: "150px" } } }}
      >
        <Div
          flex={["center", "center"]}
          width="100%"
          height="100%"
          responsive={{ sm: { css: { justifyContent: "flex-start" } } }}
        >
          <Div
            display="none"
            curve="circle"
            overflow="hidden"
            mw="100px"
            responsive={{ sm: { flex: ["center", "center"] } }}
          >
            <Image src={image} height="100px" width="100px" fit="cover" />
          </Div>
          <Div mx="3" responsive={{ sm: { mx: "4" } }}>
            <Text size="lg-b" Mw="100%" truncate>
              {name || ""}
            </Text>
          </Div>
        </Div>
        <Div
          flex={[, "between", "row-reverse"]}
          width="100%"
          responsive={{ sm: { flex: [, "between", "column"], width: "auto" } }}
        >
          {link ? (
            <Link outerLink href={link} m="2">
              <Button
                variant="outlined"
                text="favourites.listenNow"
                size="sm"
              />
            </Link>
          ) : null}
          <Div m="2">
            <Button
              variant="text"
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

export default FavouritePlaylist;
