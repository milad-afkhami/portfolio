import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";

export interface ChipProps {
  label: string;
  link?: string;
  secondary?: boolean;
}

const Chip: FC<ChipProps> = (props) => {
  const { label, link, secondary } = props;

  const paletteAndVariation = secondary ? "bg-tertiary" : "brand-primary";

  return (
    <Div
      {...(link
        ? {
            as: "a",
            href: link,
            target: "_blank",
            hoverBg: `${paletteAndVariation}-hover`,
          }
        : {})}
      bg={`${paletteAndVariation}-main`}
      px="2"
      curve="xsm"
      display="flex"
    >
      <Text
        size="md"
        bold
        color={`${paletteAndVariation}-contrast`}
        noTranslation
      >
        {label}
      </Text>
    </Div>
  );
};

export default Chip;
