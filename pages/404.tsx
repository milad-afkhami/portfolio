import Button from "@kits/Button";
import Div from "@kits/Div";
import Link from "@kits/Link";
import { NotFoundAnimation } from "@components/Error";
import SectionTitle from "@components/Layout/Title/Section";

const NotFound = (props) => {
  // return <h1>404 - Page Not Found</h1>;
  return (
    <Div>
      <NotFoundAnimation />
      <Div
        flex={["center", "center", "column"]}
        css={{ gap: "1rem" }}
        mt="5"
        width="100%"
      >
        <SectionTitle title="error.pageNotFound" />
        <Link href="/">
          <Button
            text="error.goBack"
            variant="outlined"
            // trailingIcon="chevron-right"
          />
        </Link>
      </Div>
    </Div>
  );
};

// NotFound.hideHeader = true;
// NotFound.hideFooter = true;

export default NotFound;
