/* eslint-disable react/jsx-props-no-spreading */
import NextLink from "next/link";
import Div from "@kits/Div";
import type { FC } from "react";
import type LinkProps from "./props";

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
  const hover = {
    ...(rest?.hover || {}),
    css: {
      ...(rest?.hover?.css || {}),
      ...(underline ? { textDecoration: "underline" } : {}),
    },
  };

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
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      {...rest}
      hover={hover}
    >
      {children}
    </Div>
  );
};

export default Link;
