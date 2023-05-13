// #region imports
import Icon from "@kits/Icon";
import ToastWrapper from "./Wrapper";
import Div from "@kits/Div";
import Text from "@kits/Text";
import { If, Then } from "@kits/ConditionalRendering";
import { toast } from "react-hot-toast";
import type IconProps from "@kits/Icon/props";
import type { FC } from "react";
import type { ToastProps } from "./props";
// #endregion

const Toast: FC<ToastProps> = (props) => {
  const { id, close = false, title, message, type } = props;

  let icon: IconProps["name"] = "info-outlined";

  if (type === "success") {
    icon = "check-outlined";
  } else if (type === "warning") {
    icon = "warning";
  }

  const handleClick = () => toast.remove(id);

  return (
    <ToastWrapper type={type}>
      <Div flex={["center"]} gap="3">
        <If condition={icon}>
          <Then>
            <Icon name={icon} />
          </Then>
        </If>
        <Div flex={[, , "column"]}>
          <If condition={title}>
            <Then>
              <Text bold>{title}</Text>
            </Then>
          </If>
          <Text>{message}</Text>
        </Div>
      </Div>
      <If condition={close}>
        <Then>
          {/* TODO: refactor to Button */}
          <Div flex={[, "end"]} onClick={handleClick}>
            <Div css={{ cursor: "pointer" }} gap="2" flex={["center"]}>
              <Text>kits.expandableArea.showLess</Text>
              <Icon name="close" />
            </Div>
          </Div>
        </Then>
      </If>
    </ToastWrapper>
  );
};

export default Toast;
