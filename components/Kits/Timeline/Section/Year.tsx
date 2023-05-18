import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

export interface TimelineSectionYearProps {
  year: string | number;
}

const TimelineSectionYear: FC<TimelineSectionYearProps> = (props) => {
  const { year } = props;

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
        as="p"
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
