import { ReactText } from "react";
import { toast, ToastContent, ToastOptions } from "react-toastify";
import useTranslation from "@hooks/useTranslation";

/**
 * `react-toastify` toast powered by i18n
 */

const useEnhancedToast = () => {
  const t = useTranslation().t;

  /**
   * @param {ToastContent} content
   * @param {ToastOptions<{}>} options
   * @returns {ReactText}
   */
  return function (content, options) {
    const toastContent = typeof content === "string" ? t(content) : content;
    return toast(toastContent, options);
  };
};

export default useEnhancedToast;
