import Icon from "@kits/Icon";
import Div from "@kits/Div";
import Link from "@kits/Link";
import { If, Then, Else } from "@kits/ConditionalRendering";
import BreadcrumbLinkText from "./Text";
import type { BreadcrumbLinkProps } from "@kits/Breadcrumb/props";

function BreadcrumbLink(props: BreadcrumbLinkProps) {
  const { title, link, lastItem } = props;
  return (
    <Div as="li" my={1} display="flex">
      <If condition={link}>
        <Then>
          <Link
            underline
            passHref
            href={link!}
            prefetch={false}
            css={{
              "&, &:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "var(--spacing-1)",
                textDecorationColor: "var(--color-brand-light)",
              },
            }}
          >
            <BreadcrumbLinkText title={title} lastItem={lastItem} />
          </Link>
        </Then>
        <Else>
          <BreadcrumbLinkText title={title} lastItem={lastItem} />
        </Else>
      </If>
      <If condition={!lastItem}>
        <Then>
          <Div flex={["center", "center"]}>
            <Icon name="chevron-left" size="20px" color="bg-disabled-main" />
          </Div>
        </Then>
      </If>
    </Div>
  );
}

export default BreadcrumbLink;
