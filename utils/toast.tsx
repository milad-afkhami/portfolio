/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import toast from "react-hot-toast";
import Toast from "@kits/Toast";
import type { ToastProps } from "@kits/Toast/props";

type ToastUtilProps = Pick<ToastProps, "title" | "message" | "close">;

let id = 1;

// TODO: refactor to Notistack
export default class ToastUtil {
  static #getOptions = (props: ToastUtilProps) => ({
    id: `${++id}`,
    ...(typeof props === "string" ? { message: props } : props),
  });

  static info = (props: ToastUtilProps) =>
    toast.custom(<Toast type="info" {...this.#getOptions(props)} />);

  static success = (props: ToastUtilProps) =>
    toast.custom(<Toast type="success" {...this.#getOptions(props)} />);

  static error = (props: ToastUtilProps) =>
    toast.custom(<Toast type="error" {...this.#getOptions(props)} />);

  static warning = (props: ToastUtilProps) =>
    toast.custom(<Toast type="warning" {...this.#getOptions(props)} />);
}
