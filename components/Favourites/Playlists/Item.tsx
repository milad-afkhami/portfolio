import Button from "@kits/Button";
import Div from "@kits/Div";
import Image from "@kits/Image";
import Text from "@kits/Text";
import type { FC } from "react";

const FavouritePlaylist: FC<IFavouritePlaylist> = (props) => {
  const { name, image, link } = props;

  return (
    <Div
      width="100%"
      border="border-light-main"
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
          styles={{ filter: "blur(10px)" }}
          opacity="0.3"
          zIndex="-1"
        >
          <Image src={image} layout="fill" fit="cover" quality={1} alt={name} />
        </Div>
      ) : null}
      <Div
        width="100%"
        height="140px"
        flex={["center", "between", "column"]}
        responsive={{
          sm: { styles: { flexDirection: "row", height: "150px" } },
        }}
      >
        <Div
          flex={["center", "center"]}
          width="100%"
          height="100%"
          responsive={{ sm: { styles: { justifyContent: "flex-start" } } }}
        >
          <Div
            display="none"
            curve="circle"
            overflow="hidden"
            mw="100px"
            responsive={{ sm: { flex: ["center", "center"] } }}
          >
            <Image
              src={image}
              height={100}
              width={100}
              fit="cover"
              alt={name}
            />
          </Div>
          <Div mx="3" responsive={{ sm: { mx: "4" } }}>
            <Text size="lg" bold truncate noTranslation>
              {name}
            </Text>
          </Div>
        </Div>
        <a href={link} target="_blank">
          <Button
            variant="outlined"
            text="listenNow"
            ns="favourites.playlists"
          />
        </a>
      </Div>
      {/* <FavouritePlaylistTracks open={tracksOpen} tracks={tracks} /> */}
    </Div>
  );
};

export default FavouritePlaylist;
