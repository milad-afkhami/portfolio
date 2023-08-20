// #region imports
import Icon from "@kits/Icon";
import ToastWrapper from "./Wrapper";
import { Div } from "style-wiz";
import Text from "@kits/Text";
import Button from "@kits/Button";
import { If, Then } from "@kits/ConditionalRendering";
import { toast } from "react-hot-toast";
import { type FC, useMemo } from "react";
import type IconProps from "@kits/Icon/props";
import type { ToastProps } from "./props";
// #endregion

const Toast: FC<ToastProps> = (props) => {
  const { id, close = false, title, message, type } = props;

  const icon = useMemo((): IconProps["name"] => {
    switch (type) {
      case "success":
        return "check-outlined";
      case "warning":
        return "warning";
      default:
        return "info-outlined";
    }
  }, [type]);

  const handleClick = () => toast.remove(id);

  return (
    <ToastWrapper type={type}>
      <Div flex={["center"]} gap="3">
        <If condition={icon}>
          <Then>
            <Icon name={icon} color="inherit" />
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
          <Button
            text="kits.close"
            onClick={handleClick}
            trailingIcon="close"
          />
        </Then>
      </If>
    </ToastWrapper>
  );
};

export default Toast;
