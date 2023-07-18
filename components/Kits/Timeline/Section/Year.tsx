import { Div } from "style-wiz";
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
      bg="bg-primary-main"
      px="3"
      curve="sm"
      dimensions={{ top: "-1rem" }}
    >
      <Text
        as="p"
        size="h-sm"
        bold
        color="assistive-success-main"
        noTranslation
        transform="uppercase"
      >
        {year}
      </Text>
    </Div>
  );
};

export default TimelineSectionYear;
