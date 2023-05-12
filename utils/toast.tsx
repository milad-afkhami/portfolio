import Text from "@kits/Text";
import { toast as rtToast, ToastOptions, ToastContent } from "react-toastify";

/**
 *
 * @param {ToastContent} content : ;
 * @param {ToastOptions} options
 */
const toast = (content, options) => {
  const toastContent =
    typeof content === "string" ? <Text size="sm">{content}</Text> : content;

  return rtToast(toastContent, options);
};

export default toast;
