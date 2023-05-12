const setStyle = ({ variant, disabled }) => {
  if (variant === "primary") {
    return {
      color: "var(--color-text-primary)",
      backgroundColor: disabled
        ? "var(--color-bg-disabled)"
        : "var(--color-brand)",
      border: "none",
      ...(!disabled
        ? { ":hover": { backgroundColor: "var(--color-brand-hover)" } }
        : {}),
    };
  } else if (variant === "outlined") {
    return {
      color: disabled
        ? "var(--color-text-tertiary)"
        : "var(--color-text-primary)",
      backgroundColor: "transparent",
      border: `1px solid ${
        disabled ? "var(--color-border-light)" : "var(--color-brand)"
      }`,
      ...(!disabled
        ? { ":hover": { borderColor: "var(--color-brand-dark)" } }
        : {}),
    };
  } else if (variant === "link") {
    return {
      color: disabled
        ? "var(--color-text-tertiary)"
        : "var(--color-text-primary)",
      backgroundColor: "transparent",
      border: "none",
      ...(!disabled
        ? {
            ":hover": { color: "var(--color-brand)" },
            ":active": { color: "var(--color-brand-dark)" },
          }
        : {}),
    };
  }
};



            export default setStyle;