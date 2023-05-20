import Div from "@kits/Div";
import TimelineSectionItemTitle, {
  type TimelineSectionItemTitleProps,
} from "./Title";
import TimelineSectionItemDescription from "./Description";
import useTranslation from "@hooks/useTranslation";
import type { FC } from "react";
import type TextProps from "@kits/Text/props";

export type TimelineSectionItemProps = TimelineSectionItemTitleProps & {
  ns?: TextProps["ns"];
};

const TimelineSectionItem: FC<TimelineSectionItemProps> = (props) => {
  const { text, index, ns } = props;
  const { t } = useTranslation(ns);

  return (
    <Div mb="3" as="li" css={{ listStyle: "none" }}>
      <TimelineSectionItemTitle text={t(text)} index={index} />
      <TimelineSectionItemDescription description={t(`${text}_desc`)} />
    </Div>
  );
};

export default TimelineSectionItem;
