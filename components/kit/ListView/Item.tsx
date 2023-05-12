import Div from "@kits/Div";
import Text from "@kits/Text";

const ListItem = (props) => {
  const { index, title, subtitle } = props || {};

  return (
    <Div
      flex={["center", "start"]}
      height="var(--list-view-item-height)"
      // bg="bg-secondary"
      hoverBg="bg-secondary-paler"
      responsive={{ sm: { px: "3" } }}
      curve="xsm"
      py="2"
      cursor="pointer"
    >
      <Div flex={["center", "center"]}>
        <Text size="md" noTranslation>{`${index}. `}</Text>
      </Div>
      <Div mx="3" Mw="-webkit-fill-available">
        <Div>
          <Text size="sm" noTranslation truncate Mw="100%">
            {title}
          </Text>
        </Div>
        <Div flex>
          <Text size="xsm" color="text-secondary" noTranslation>
            {subtitle}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default ListItem;
