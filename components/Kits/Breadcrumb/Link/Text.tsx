import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { BreadcrumbLinkProps } from "@kits/Breadcrumb/props";

function BreadcrumbLinkText(props: BreadcrumbLinkProps) {
  const { title, lastItem } = props;

  return (
    <Div cursor={lastItem ? "default" : "pointer"} px="2">
      <Text
        truncate
        color={lastItem ? "text-secondary-main" : "brand-primary-main"}
        noTranslation
      >
        {title}
      </Text>
    </Div>
  );
}

export default BreadcrumbLinkText;
