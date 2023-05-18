import Div from "@kits/Div";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import type { FC } from "react";

const ProjectDate: FC<Pick<IProject, "date">> = (props) => {
  const { date } = props;

  return (
    <Div flex={["center", "start"]} mb="3">
      <Div flex={["center", "center"]} width="30px">
        <Icon name="calendar" size="h-md" />
      </Div>
      <Div mx="2">
        <Text size="md-b" as="time">
          {date}
        </Text>
      </Div>
    </Div>
  );
};

export default ProjectDate;
