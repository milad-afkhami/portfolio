import NextLink from "next/link";
import Div from "@kits/Div";
import type { FC } from "react";
import type LinkProps from "./props";
import type DivProps from "@kits/Div/props";

const Link: FC<LinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  outerLink,
  children,
  disabled,
  underline,
  ...rest
}) => {
  const hover: Maybe<DivProps["hover"]> = underline
    ? { styles: { textDecoration: "underline" } }
    : undefined;

  const hasHashHref = typeof href === "string" && href.startsWith("#");

  return outerLink ? (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a target="_blank" href={href as string}>
      <Div {...rest} hover={hover}>
        {children}
      </Div>
    </a>
  ) : (
    <Div
      as={NextLink}
      // @ts-ignore
      href={href}
      onClick={(e) => {
        if (hasHashHref) {
          e.preventDefault();
          document.getElementById(href.slice(1))?.scrollIntoView();
        }
      }}
      hover={hover}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      {...rest}
    >
      {children}
    </Div>
  );
};

export default Link;
