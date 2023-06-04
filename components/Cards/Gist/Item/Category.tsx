import Div from "@kits/Div";
import Image from "@kits/Image";
import type { FC } from "react";

const GistCardCategory: FC<Pick<IGist, "category">> = (props) => {
  const { category } = props;

  return (
    <Div
      curve="circle"
      overflow="hidden"
      height="48px"
      width="48px"
      mw="48px"
      position="relative"
    >
      <Image
        src={`/images/gists/${category}.jpg`}
        // alt={`gists.category.${category}`}
        layout="fill"
        alt={category}
      />
      {/* <Div mb="1"></Div><div><Text size="xsm">{`gists.category.${category}`}</Text></div> */}
    </Div>
  );
};

export default GistCardCategory;
