import Div from "@kits/Div";
import Text from "@kits/Text";
import Image from "@kits/Image";
import Link from "@kits/Link";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";

// playlists  {/* , 6 */}{/* , 4 */}
// artists  {/*1, , 7, 8 */}import type { FC } from "react";

interface FavouriteEntityProps {
  link: string;
  label: string;
}

const FavouriteEntity: FC<FavouriteEntityProps> = (props) => {
  const { link, label } = props;

  return (
    <Link
      href={link}
      mb="3"
      prefetch={false}
      // flex={["center", , "column"]}
      bg="bg-secondary-main"
      hoverBg="bg-secondary-hover"
      p="3"
      curve="sm"
      width="100%"
      height="260px"
      responsive={{
        sm: { width: "min(260px, 100%)", mw: "260px", height: "210px" },
        [responsiveUpperBoundBreakpoint]: {
          width: "min(350px, 100%)",
          mw: "350px",
          height: "280px",
        },
      }}
      position="relative"
      flex={[, "between", "column"]}
    >
      <Div
        display="flex"
        flexPortion="auto"
        curve="sm"
        height="200px"
        width="100%"
        position="relative"
        overflow="hidden"
        mb="3"
      >
        <Image
          src={`/images/favourites/entities/${label}.jpg`}
          placeholder="blur"
          blurDataURL={`/images/favourites/entities/${label}.jpg`}
          quality={50}
          layout="fill"
          fit="cover"
        />
      </Div>
      <Div flex={["center"]}>
        <Text
          size="lg"
          bold
          ns="favourites.common"
        >{`favourites.${label}`}</Text>
      </Div>
      {/* <Text
        hoverColor="text-secondary-main"
        size="sm" bold
      >{`favourites.${label}.title`}</Text> */}
    </Link>
  );
};

export default FavouriteEntity;
