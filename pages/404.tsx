import React from "react";
import { Button, Div, Link } from "@kits";
import { NotFoundAnimation } from "@components/Error";
import { SectionTitle } from "@components/Layout";

export default function NotFound(props) {
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
}

// NotFound.hideHeader = true;
// NotFound.hideFooter = true;
