// #region imports
import { Div } from "style-wiz";
import PageTitle from "@components/Layout/Title/Page";
import PackageCard from "./Item";
import type { FC } from "react";
import type { IPackage } from "@_types/package";
// #endregion

interface PackageCardsProps {
  title?: string;
  items: IPackage[];
}

const PackageCards: FC<PackageCardsProps> = (props) => {
  const { title, items } = props;

  return (
    <Div my="3">
      {title && <PageTitle title={title} tag="h2" />}
      {items.map((item) => (
        <PackageCard key={item.name} {...item} />
      ))}
    </Div>
  );
};

export default PackageCards;
