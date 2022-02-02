import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { ToastContent, ToastOptions } from "react-toastify";

/**
 * `react-toastify` toast powered by i18n
 */
export const useEnhancedToast = () => {
  const t = useTranslation().t;

  /**
   * @param {ToastContent} content
   * @param {ToastOptions<{}>} options
   * @returns {void}
   */
  return function (content, options) {
    const toastContent = typeof content === "string" ? t(content) : content;
    return toast(toastContent, options);
  };
};
