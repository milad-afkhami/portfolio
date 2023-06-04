import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

type FavouritePlaylistTracksItemProps = PropsWithIndex<
  ValueOf<IFavouritePlaylist["tracks"]>
>;

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
        <div>
          <Text size="xsm" color="text-secondary-main" noTranslation>
            {artist}
          </Text>
        </div>
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
