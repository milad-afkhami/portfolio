import { Div } from "style-wiz";
import Text from "@kits/Text";
import responsiveStyles from "@helpers/responsiveStyles";
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
      flex={["center", "flex-start"]}
      height="62px"
      // bg="bg-secondary-main"
      hoverBg="bg-secondary-paler"
      styles={responsiveStyles("sm", { paddingRight: "3", paddingLeft: "3" })}
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
