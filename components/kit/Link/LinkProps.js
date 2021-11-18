/* import { LinkProps } from "next/link"; */
// import Link, { LinkProps } from "node_modules/next/link";
import { Props as DivProps } from "@kits/Div/DivProps";
import { UrlObject } from "url";

interface LinkProps {
  href: string | UrlObject;
  as?: string | UrlObject;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
}

export interface Props extends DivProps, LinkProps {
  outerLink?: Boolean;
  underline?: Boolean;
}
