import ToastUtil from "@utils/toast";

const copyToClipboard = (value: string) => {
  navigator.clipboard
    .writeText(value)
    .then(() => ToastUtil.success("message.textCopied"))
    .catch(() => ToastUtil.error("message.error.something"));
};

export default copyToClipboard;
