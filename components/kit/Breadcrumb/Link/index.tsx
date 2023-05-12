import Div from "@kits/Div";
import Link from "@kits/Link";
import BreadcrumbLinkText from "./Text";

const BreadcrumbLink = (props) => {
  const { route, lastItem } = props;

  return (
    <Div my="3">
      {route.link && !lastItem ? (
        <Link href={route.link}>
          <BreadcrumbLinkText title={route.title} lastItem={lastItem} />
        </Link>
      ) : (
        <BreadcrumbLinkText title={route.title} lastItem={lastItem} />
      )}
      {/* {lastItem ? null : <Icon name="arrows_right" size="10" multiDirection />} */}
      {lastItem ? null : ">"}
    </Div>
  );
};

export default BreadcrumbLink;
