import Image from "@kits/Image";
import Link from "@kits/Link";

const GistCardCategory = (props) => {
  const { category = "" } = props || {};

  return (
    <Link
      href={{ pathname: "/gists", query: { category } }}
      hover={{ css: { filter: "brightness(0.7)" } }}
      curve="circle"
      overflow="hidden"
      height="48px"
      width="48px"
      position="relative"
    >
      <Image
        src={`/images/gists/${category}.jpg`}
        // alt={`gists.category.${category}`}
        layout="fill"
      />
      {/* <Div mb="1"></Div><Div><Text size="xsm">{`gists.category.${category}`}</Text></Div> */}
    </Link>
  );
};

export default GistCardCategory;
