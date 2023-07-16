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
  ...rest
}) => {
  const hasHashHref = typeof href === "string" && href.startsWith("#");

  return outerLink ? (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a target="_blank" href={href as string}>
      <Div {...rest}>{children}</Div>
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
    >
      {children}
    </Div>
  );
};

export default Link;
