import { Div } from "style-wiz";
import Button from "@kits/Button";
import Image from "@kits/Image";
import Text from "@kits/Text";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";

const FavouritePlaylist: FC<IFavouritePlaylist> = (props) => {
  const { name, image, link } = props;

  return (
    <Div
      width="100%"
      border="border-light-main"
      p="3"
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
        flex={["center", "space-between", "column"]}
        styles={responsiveStyles("sm", {
          height: "150px",
          flexDirection: "row",
        })}
      >
        <Div
          flex={["center", "center"]}
          width="100%"
          height="100%"
          styles={responsiveStyles("sm", { justifyContent: "flex-start" })}
        >
          <Div
            display="none"
            curve="circle"
            overflow="hidden"
            mw="100px"
            styles={responsiveStyles("sm", {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Image
              src={image}
              height={100}
              width={100}
              fit="cover"
              alt={name}
            />
          </Div>
          <Div
            mx="3"
            styles={responsiveStyles("sm", {
              marginRight: "var(--spacing-4)",
              marginLeft: "var(--spacing-4)",
            })}
          >
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
