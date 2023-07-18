import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";

export interface ChipProps {
  label: string;
  link?: string;
}

const Chip: FC<ChipProps> = (props) => {
  const { label, link } = props;

  return (
    <Div
      {...(link ? { as: "a", href: link, target: "_blank" } : {})}
      bg="brand-main"
      hoverBg="brand-hover"
      px="2"
      curve="xsm"
      display="flex"
    >
      <Text size="md" bold color="bg-primary-main" noTranslation>
        {label}
      </Text>
    </Div>
  );
};

export default Chip;
