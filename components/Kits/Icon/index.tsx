import { useMemo } from "react";
import Text from "@kits/Text";
import classNames from "@utils/classnames";
import type { CSSAttribute } from "goober";
import type { FC } from "react";
import type IconProps from "./props";

const Icon: FC<IconProps> = (props) => {
  const {
    prefix = "mili",
    suffix = "icon",
    name,
    multiDirection,
    className = "",
    size = "lg",
    bold,
    onClick,
    color,
    disabled,
    styles,
  } = props;

  const _name = [prefix, name, suffix].filter(Boolean).join("-");

  const _dir = multiDirection ? "icon-dir" : null;

  const _className = classNames(_name, _dir, className);

  const cursor = useMemo<CSSAttribute["cursor"]>(() => {
    if (onClick) return "pointer";
    if (disabled) return "not-allowed";
    return "unset";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!onClick, disabled]);

  return (
    <Text
      noTranslation
      as="i"
      size={size}
      bold={bold}
      onClick={onClick}
      color={
        disabled
          ? "var(--color-text-disabled-main)"
          : color || "var(--color-text-primary-main)"
      }
      aria-disabled={disabled}
      styles={{
        cursor,
        transition: "all var(--pace-x-fast)",
        ...(styles || {}),
      }}
      title={name}
      className={_className}
    />
  );
};

export default Icon;
