import Div from "@kits/Div";
import Text from "@kits/Text";

const TimelineSectionYear = (props) => {
  const { year } = props || {};

  return (
    <Div
      height="2rem"
      flex={["center"]}
      position="absolute"
      bg="bg-primary"
      px="3"
      curve="sm"
      dimensions={{ top: "-1rem" }}
    >
      <Text
        tag="p"
        size="h-sm-b"
        color="assistive-success"
        // css={{ textTransform: "uppercase" }}
      >
        {year}
      </Text>
    </Div>
  );
};

export default TimelineSectionYear;
