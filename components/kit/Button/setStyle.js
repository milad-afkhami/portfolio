import { c } from "@stylesheets";

export const setStyle = ({ variant, disabled }) => {
  if (variant === "primary") {
    return {
      color: c("bg-primary"),
      backgroundColor: c(disabled ? "bg-disabled" : "text-primary"),
      border: "none",
      ...(!disabled
        ? { ":hover": { backgroundColor: c("text-secondary") } }
        : {}),
    };
  } else if (variant === "outlined") {
    return {
      color: c(disabled ? "text-tertiary" : "text-primary"),
      backgroundColor: "transparent",
      border: `1px solid ${c(disabled ? "border-dark" : "brand")}`,
      ...(!disabled ? { ":hover": { borderColor: c("brand-dark") } } : {}),
    };
  } else if (variant === "link") {
    return {
      color: c(disabled ? "text-tertiary" : "brand"),
      backgroundColor: "transparent",
      border: "none",
      ...(!disabled
        ? { ":hover": { color: c("brand") }, ":active": { color: c("brand") } }
        : {}),
    };
  }
};
