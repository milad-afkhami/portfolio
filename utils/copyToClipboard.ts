import { toast } from "ui-wiz";

const copyToClipboard = (value: string) => {
  navigator.clipboard
    .writeText(value)
    .then(() => toast.success("message.textCopied"))
    .catch(() => toast.error("message.error.something"));
};

export default copyToClipboard;
