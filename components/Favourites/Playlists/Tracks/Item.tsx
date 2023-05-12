import Div from "@kits/Div";
import Text from "@kits/Text";

const FavouritePlaylistTracksItem = (props) => {
  const { index, name, artist } = props || {};

  return (
    <Div
      flex={["center", "start"]}
      height="62px"
      // bg="bg-secondary"
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
          <Text size="xsm" color="text-secondary" noTranslation>
            {artist}
          </Text>
        </Div>
        <Div flex>
          <Text size="sm" noTranslation truncate Mw="100%">
            {name}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default FavouritePlaylistTracksItem;
