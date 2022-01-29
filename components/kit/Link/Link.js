import React from "react";
import Link from "next/link";
import { Div } from "@kits";
import { useCallback } from "@hooks";

/**
 * @typedef {import('@kits/Div/DivProps').Props & import('next/link').LinkProps & {outerLink:boolean, underline: boolean}} LinkProps
 *
 * @component
 * Renders an enhanced anchor tag with needed styles and functionalities
 * @type {import("react").ComponentType<LinkProps>}
 * @param {LinkProps} props
 */
export const StyledLink = ({
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
  const onClick = useCallback(
    (e) => disabled && e.preventDefault(),
    [disabled]
  );

  const hover = {
    ...(rest?.hover || {}),
    css: {
      ...(rest?.hover?.css || {}),
      ...(underline ? { textDecoration: "underline" } : {}),
    },
  };

  return outerLink ? (
    <Div
      onClick={onClick}
      target="_blank"
      as="a"
      href={href}
      {...rest}
      hover={hover}
    >
      {children}
    </Div>
  ) : (
    <Link
      onClick={onClick}
      {...(as !== undefined ? { as } : {})}
      {...(href !== undefined ? { href } : {})}
      {...(replace !== undefined ? { replace } : {})}
      {...(scroll !== undefined ? { scroll } : {})}
      {...(shallow !== undefined ? { shallow } : {})}
      passHref={passHref ?? true}
      {...(prefetch !== undefined ? { prefetch } : {})}
      {...(locale !== undefined ? { locale } : {})}
      {...(outerLink !== undefined ? { outerLink } : {})}
    >
      <Div as="a" {...rest} hover={hover}>
        {children}
      </Div>
    </Link>
  );
};

// const AnchorTag = (props) => {
//   const hover = {
//     ...(props?.hover || {}),
//     css: {
//       ...(props?.hover?.css || {}),
//       ...(props?.underline ? { textDecoration: "underline" } : {}),
//     },
//   };
//   return (
//     <Div as="a" {...props} hover={hover}>
//       {props.children}
//     </Div>
//   );
// };
