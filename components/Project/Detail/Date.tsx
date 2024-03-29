import { Div } from "style-wiz";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import type { FC } from "react";

const ProjectDetailDate: FC<Pick<IProject, "date">> = (props) => {
  const { date } = props;

  return (
    <Div flex={["center", "flex-start"]} mb="3">
      <Div flex={["center", "center"]} width="30px">
        <Icon name="calendar" size="h-md" />
      </Div>
      <Div mx="2">
        <Text size="md" bold as="time">
          {date}
        </Text>
      </Div>
    </Div>
  );
};

export default ProjectDetailDate;
