import { c } from "@stylesheets";

export const setStyle = ({ variant, disabled }) => {
  if (variant === "primary") {
    return {
      color: c("text-primary"),
      backgroundColor: c(disabled ? "bg-disabled" : "brand"),
      border: "none",
      ...(!disabled ? { ":hover": { backgroundColor: c("brand-hover") } } : {}),
    };
  } else if (variant === "outlined") {
    return {
      color: c(disabled ? "text-tertiary" : "text-primary"),
      backgroundColor: "transparent",
      border: `1px solid ${c(disabled ? "border" : "brand")}`,
      ...(!disabled ? { ":hover": { borderColor: c("brand-dark") } } : {}),
    };
  } else if (variant === "link") {
    return {
      color: c(disabled ? "text-tertiary" : "text-primary"),
      backgroundColor: "transparent",
      border: "none",
      ...(!disabled
        ? {
            ":hover": { color: c("brand") },
            ":active": { color: c("brand-dark") },
          }
        : {}),
    };
  }
};
