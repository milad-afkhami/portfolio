import { Text } from "@kits";
import { toast, ToastOptions, ToastContent } from "react-toastify";

const enhancedToast = (content: ToastContent, options: ToastOptions) => {
  const toastContent =
    typeof content === "string" ? <Text size="sm">{content}</Text> : content;

  return toast(toastContent, options);
};

export { enhancedToast as toast };
