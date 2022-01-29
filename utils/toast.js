import { Text } from "@kits";
import { toast, ToastOptions, ToastContent } from "react-toastify";

/**
 *
 * @param {ToastContent} content : ;
 * @param {ToastOptions} options
 */
const enhancedToast = (content, options) => {
  const toastContent =
    typeof content === "string" ? <Text size="sm">{content}</Text> : content;

  return toast(toastContent, options);
};

export { enhancedToast as toast };
