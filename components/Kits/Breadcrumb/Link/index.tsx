import { Div } from "style-wiz";
import Icon from "@kits/Icon";
import Link from "@kits/Link";
import { If, Then, Else } from "@kits/ConditionalRendering";
import BreadcrumbLinkText from "./Text";
import type { BreadcrumbLinkProps } from "@kits/Breadcrumb/props";

function BreadcrumbLink(props: BreadcrumbLinkProps) {
  const { title, link, lastItem } = props;
  return (
    <Div as="li" my={1} flex={["center"]}>
      <If condition={!lastItem}>
        <Then>
          <Link
            underline
            passHref
            href={link!}
            prefetch={false}
            styles={{
              textDecoration: "underline",
              textUnderlineOffset: "var(--spacing-1)",
              textDecorationColor: "var(--color-brand-light) !important",
            }}
          >
            <BreadcrumbLinkText title={title} lastItem={false} />
          </Link>
        </Then>
        <Else>
          <BreadcrumbLinkText title={title} lastItem />
        </Else>
      </If>
      <If condition={!lastItem}>
        <Then>
          <Icon name="chevron-right" size="0.75rem" color="bg-disabled-main" />
        </Then>
      </If>
    </Div>
  );
}

export default BreadcrumbLink;
