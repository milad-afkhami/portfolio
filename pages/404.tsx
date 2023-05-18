import Div from "@kits/Div";
import Link from "@kits/Link";
import Button from "@kits/Button";
import SectionTitle from "@components/Layout/Title/Section";
import NotFoundAnimation from "@components/Error/NotFoundAnimation";
import type { PageComponent } from "@_types/components";

const NotFound: PageComponent = () => (
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

// NotFound.layoutConfig = { noHeader: true, noFooter: true };

export default NotFound;
