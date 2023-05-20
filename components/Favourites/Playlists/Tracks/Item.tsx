import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

type FavouritePlaylistTracksItemProps = ValueOf<
  IFavouritePlaylist["tracks"]
> & { index: number };

const FavouritePlaylistTracksItem: FC<FavouritePlaylistTracksItemProps> = (
  props
) => {
  const { index, name, artist } = props;

  return (
    <Div
      flex={["center", "start"]}
      height="62px"
      // bg="bg-secondary-main"
      hoverBg="bg-secondary-paler"
      responsive={{ sm: { px: "3" } }}
      curve="sm"
      my="2"
      cursor="pointer"
    >
      <Div flex={["center", "center"]}>
        <Text size="md" noTranslation>{`${index}. `}</Text>
      </Div>
      <Div mx="3" Mw="-webkit-fill-available">
        <Div>
          <Text size="xsm" color="text-secondary-main" noTranslation>
            {artist}
          </Text>
        </Div>
        <Div display="flex">
          <Text size="sm" truncate noTranslation>
            {name}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default FavouritePlaylistTracksItem;
